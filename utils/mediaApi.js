/**
 * KnightBot personal media API (primary) + optional fallback host.
 * Docs: https://knightbotapi.stream/
 */

const axios = require('axios');
const config = require('../config');

const DEFAULT_PRIMARY = 'https://knightbotapi.stream';
const DEFAULT_FALLBACK = '';

const UA =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

// Public/mruniquehacker Mini uses the free shared key "knight" (NOT testiiii — that is private Mini only).
const DEFAULT_KEY = 'knight';

function resolveApiKey() {
  const fromEnv = process.env.YT_API_KEY || process.env.KNIGHT_API_KEY || '';
  const fromConfig = config.mediaApiKey || config.knightApiKey || '';
  return String(fromEnv || fromConfig || DEFAULT_KEY).trim() || DEFAULT_KEY;
}

function maskKey(key) {
  const s = String(key || '');
  if (s.length <= 4) return `${s}…`;
  return `${s.slice(0, 4)}…${s.slice(-2)} (${s.length} chars)`;
}

function getMediaApiConfig() {
  let primary = String(
    process.env.YT_API_URL || config.mediaApiUrl || DEFAULT_PRIMARY
  ).replace(/\/$/, '');
  let fallback = String(
    process.env.YT_API_FALLBACK_URL || config.mediaApiFallbackUrl || DEFAULT_FALLBACK
  ).replace(/\/$/, '');
  const key = resolveApiKey();

  // xgp2 is suspended — swap old configs to the personal API unless YT_API_URL is set.
  if (!process.env.YT_API_URL && /api-xgp2\.onrender\.com/i.test(primary)) {
    primary = DEFAULT_PRIMARY;
  }

  const bases = [primary];
  if (fallback && fallback !== primary) bases.push(fallback);
  return {
    base: primary,
    bases,
    key,
    prince: String(config.princeApiUrl || 'https://api.princetechn.com').replace(/\/$/, ''),
    princeKey: config.princeApiKey || 'prince',
  };
}

function pickDownloadUrl(result) {
  if (!result || typeof result !== 'object') return null;
  const candidates = [
    result.download,
    result.dl_url,
    result.dl,
    result.downloadUrl,
    result.download_url,
    result.video,
    result.audio,
    result.mp4,
    result.mp3,
    result.url,
  ];
  for (const url of candidates) {
    if (typeof url === 'string' && /^https?:\/\//i.test(url)) return url;
  }
  return null;
}

/**
 * GET a Knight media path against primary then fallback bases.
 * @param {string} path e.g. '/api/download/ytaudio'
 * @param {Record<string, string>} params query (apikey injected)
 * @param {{ timeout?: number, attemptsPerBase?: number }} options
 */
async function knightGet(path, params = {}, options = {}) {
  const { bases, key } = getMediaApiConfig();
  const timeout = options.timeout || 180000;
  const attemptsPerBase = options.attemptsPerBase || 2;
  let lastError;

  for (const base of bases) {
    for (let attempt = 1; attempt <= attemptsPerBase; attempt++) {
      try {
        console.log(`[mediaApi] ${base}${path} attempt ${attempt}/${attemptsPerBase}`);
        const { data, status } = await axios.get(`${base}${path}`, {
          params: { apikey: key, ...params },
          timeout,
          validateStatus: () => true,
          headers: { Accept: 'application/json', 'User-Agent': UA },
        });

        if (status >= 400 || data?.success === false) {
          throw new Error(
            data?.result?.error ||
              data?.result?.reason ||
              data?.error ||
              data?.message ||
              `Knight API HTTP ${status}`
          );
        }

        const result = data?.result != null ? data.result : data;
        return { data, result, base, key };
      } catch (err) {
        lastError = err;
        console.log(`[mediaApi] ${base}${path} failed:`, err.message);
        // Free-key duration cap: same answer on every retry and host, so give up now.
        if (/max duration/i.test(err.message || '')) throw err;
        // Daily limit / auth errors won't heal on retry — jump to next base.
        if (/daily limit|unauthorized|invalid.*(key|apikey)|forbidden/i.test(err.message || '')) {
          break;
        }
        if (attempt < attemptsPerBase) {
          await new Promise((r) => setTimeout(r, 1000 * attempt));
        }
      }
    }
  }

  throw lastError || new Error('Knight media API failed');
}

async function knightDownload(path, params = {}, options = {}) {
  const { result, base } = await knightGet(path, params, options);
  const download = pickDownloadUrl(result);
  if (!download) throw new Error(`Knight API ${path} returned no download URL`);
  return {
    download,
    title: result?.title || null,
    thumbnail: result?.thumbnail || result?.image || null,
    artist: result?.artist || null,
    duration: result?.duration || null,
    url: result?.url || params.url || null,
    lyrics: result?.lyrics || (typeof result === 'string' ? result : null),
    raw: result,
    base,
  };
}

module.exports = {
  DEFAULT_PRIMARY,
  DEFAULT_FALLBACK,
  DEFAULT_KEY,
  UA,
  maskKey,
  resolveApiKey,
  getMediaApiConfig,
  pickDownloadUrl,
  knightGet,
  knightDownload,
};

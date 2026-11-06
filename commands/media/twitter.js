/**
 * Twitter / X Downloader
 */

const axios = require('axios');
const config = require('../../config');
const { knightDownload, UA } = require('../../utils/mediaApi');

const TWITTER_PATTERNS = [
  /https?:\/\/(?:www\.)?(?:twitter|x)\.com\//i,
  /https?:\/\/(?:mobile\.)?twitter\.com\//i,
];

const processedMessages = new Set();

const HEADERS = {
  'User-Agent': UA,
  Accept: 'application/json',
};

function isValidTwitterUrl(url) {
  return TWITTER_PATTERNS.some((pattern) => pattern.test(url));
}

function isMediaUrl(url) {
  return typeof url === 'string' && /^https?:\/\//i.test(url) && !/error|cannot be null/i.test(url);
}

function caption(quality) {
  const bot = config.botName.toUpperCase();
  let text = `*DOWNLOADED BY ${bot}*`;
  if (quality) text += `\n\n📹 Quality: ${quality}`;
  return text;
}

async function fetchKnight(url) {
  const data = await knightDownload('/api/download/twitter', { url }, { timeout: 90000, attemptsPerBase: 2 });
  const raw = data.raw || {};
  const videos = [];

  const direct = data.download || raw.download || raw.dl_url || raw.dl || raw.video || raw.mp4;
  if (isMediaUrl(direct)) {
    videos.push({ url: direct, quality: raw.quality || 'best' });
  }

  for (const v of raw.videoUrls || raw.videos || raw.media || []) {
    const u = typeof v === 'string' ? v : v?.url || v?.download;
    if (isMediaUrl(u)) videos.push({ url: u, quality: v?.quality || v?.label || 'best' });
  }

  const mp3Url = isMediaUrl(raw.mp3?.url || raw.audio || raw.mp3) ? (raw.mp3?.url || raw.audio || raw.mp3) : null;
  const thumbnail = isMediaUrl(data.thumbnail || raw.thumbnail || raw.image)
    ? (data.thumbnail || raw.thumbnail || raw.image)
    : null;

  if (!videos.length && !thumbnail && !mp3Url) throw new Error('Knight API returned no Twitter media');
  return { videos, mp3Url, thumbnail };
}

async function fetchElite(url) {
  const { data } = await axios.get('https://eliteprotech-apis.zone.id/x', {
    params: { url },
    timeout: 30000,
    headers: HEADERS,
  });

  if (data?.status !== 'success') throw new Error('Elite API returned no success');

  const videos = (data.videos || []).filter((v) => isMediaUrl(v?.url));
  const mp3Url = isMediaUrl(data.mp3?.url) ? data.mp3.url : null;
  const thumbnail = isMediaUrl(data.thumbnail) ? data.thumbnail : null;

  if (!videos.length && !thumbnail && !mp3Url) throw new Error('No media in Elite response');

  return { videos, mp3Url, thumbnail };
}

async function fetchPrince(url) {
  const { data } = await axios.get('https://api.princetechn.com/api/download/twitter', {
    params: { apikey: config.princeApiKey || 'prince', url },
    timeout: 30000,
    headers: HEADERS,
  });

  if (!data?.success) throw new Error('Prince API failed');

  const result = data.result || {};
  const videos = (result.videoUrls || []).filter((v) => isMediaUrl(v?.url));
  const thumbnail = isMediaUrl(result.thumbnail) ? result.thumbnail : null;

  if (!videos.length && !thumbnail) throw new Error('No media in Prince response');

  return { videos, mp3Url: null, thumbnail };
}

async function resolveMedia(url) {
  try {
    return await fetchKnight(url);
  } catch (err) {
    console.error('[twitter] Knight API:', err.message);
  }
  try {
    return await fetchElite(url);
  } catch (err) {
    console.error('[twitter] Elite API:', err.message);
  }
  return fetchPrince(url);
}

function pickBestVideo(videos) {
  if (!videos.length) return null;

  const scored = videos.map((v) => {
    const label = String(v.quality || v.label || '');
    const match = label.match(/(\d{3,4})p/i);
    return { url: v.url, quality: label || 'best', score: match ? parseInt(match[1], 10) : 0 };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored[0];
}

async function sendVideo(sock, jid, msg, videoUrl, quality) {
  const cap = caption(quality);
  try {
    await sock.sendMessage(jid, {
      video: { url: videoUrl },
      mimetype: 'video/mp4',
      caption: cap,
    }, { quoted: msg });
    return;
  } catch {
    const res = await axios.get(videoUrl, {
      responseType: 'arraybuffer',
      timeout: 60000,
      maxContentLength: 100 * 1024 * 1024,
      headers: { ...HEADERS, Referer: 'https://x.com/' },
    });
    await sock.sendMessage(jid, {
      video: Buffer.from(res.data),
      mimetype: 'video/mp4',
      caption: cap,
    }, { quoted: msg });
  }
}

async function sendImage(sock, jid, msg, imageUrl) {
  const cap = caption();
  try {
    await sock.sendMessage(jid, { image: { url: imageUrl }, caption: cap }, { quoted: msg });
    return;
  } catch {
    const res = await axios.get(imageUrl, {
      responseType: 'arraybuffer',
      timeout: 30000,
      headers: { ...HEADERS, Referer: 'https://x.com/' },
    });
    await sock.sendMessage(jid, { image: Buffer.from(res.data), caption: cap }, { quoted: msg });
  }
}

async function sendAudio(sock, jid, msg, audioUrl) {
  const cap = caption('128kbps MP3');
  try {
    await sock.sendMessage(jid, {
      audio: { url: audioUrl },
      mimetype: 'audio/mpeg',
      caption: cap,
    }, { quoted: msg });
    return;
  } catch {
    const res = await axios.get(audioUrl, {
      responseType: 'arraybuffer',
      timeout: 60000,
      maxContentLength: 50 * 1024 * 1024,
      headers: HEADERS,
    });
    await sock.sendMessage(jid, {
      document: Buffer.from(res.data),
      mimetype: 'audio/mpeg',
      fileName: 'twitter_audio.mp3',
      caption: cap,
    }, { quoted: msg });
  }
}

module.exports = {
  name: 'twitter',
  aliases: ['x', 'xdl', 'twitterdl', 'twdl'],
  category: 'media',
  description: 'Download Twitter / X videos and images',
  usage: ',twitter <X URL>',

  async execute(sock, msg, args, extra) {
    try {
      if (processedMessages.has(msg.key.id)) return;
      processedMessages.add(msg.key.id);
      setTimeout(() => processedMessages.delete(msg.key.id), 5 * 60 * 1000);

      const text = msg.message?.conversation
        || msg.message?.extendedTextMessage?.text
        || args.join(' ');

      const url = text.replace(/^[^\s]+\s*/, '').trim();

      if (!url) {
        return extra.reply('Please provide a Twitter / X link.\n\nUsage: `,twitter <url>`');
      }

      if (!isValidTwitterUrl(url)) {
        return extra.reply('❌ Invalid link. Use a valid `x.com` or `twitter.com` post URL.');
      }

      await sock.sendMessage(extra.from, { react: { text: '🔄', key: msg.key } });

      const media = await resolveMedia(url);
      const best = pickBestVideo(media.videos);

      if (best) {
        await sendVideo(sock, extra.from, msg, best.url, best.quality);
        return;
      }

      if (media.thumbnail) {
        await sendImage(sock, extra.from, msg, media.thumbnail);
        return;
      }

      if (media.mp3Url) {
        await sendAudio(sock, extra.from, msg, media.mp3Url);
        return;
      }

      return extra.reply('❌ No downloadable media found for this post.');
    } catch (error) {
      console.error('[twitter]', error.message);
      await extra.reply('❌ Failed to download from Twitter / X. Try another link or try again later.');
    }
  },
};

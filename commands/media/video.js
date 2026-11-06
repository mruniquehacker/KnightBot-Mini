/**
 * Video Downloader - YouTube MP4 via KnightBot API
 */

const fs = require('fs');
const os = require('os');
const path = require('path');
const { spawn } = require('child_process');
const yts = require('yt-search');
const axios = require('axios');
const ffmpegPath = require('ffmpeg-static');
const APIs = require('../../utils/api');
const config = require('../../config');
const { knightDownload, getMediaApiConfig, UA } = require('../../utils/mediaApi');

const HECTOR_API = 'https://yt-dl.officialhectormanuel.workers.dev';

function princeApiCreds() {
  const { prince, princeKey } = getMediaApiConfig();
  return {
    base: prince || String(config.princeApiUrl || 'https://api.princetechn.com').replace(/\/$/, ''),
    key: princeKey || config.princeApiKey || 'prince_tech_api_azfsbshfb',
  };
}

function isYouTubeUrl(text) {
  return /youtube\.com|youtu\.be/i.test(text);
}

function extractUrl(text) {
  const match = String(text).match(/https?:\/\/[^\s]+/i);
  return match ? match[0] : text.trim();
}

function pickUrl(result) {
  const url = result?.download || result?.dl_url || result?.dl;
  return url && /^https?:\/\//i.test(url) ? url : null;
}

function toYouTubeWatchUrl(input) {
  const id = String(input || '').match(/(?:youtu\.be\/|v=|shorts\/)([a-zA-Z0-9_-]{11})/)?.[1];
  return id ? `https://youtu.be/${id}` : String(input || '').trim();
}

function videoQuality(value, fallback = '720') {
  return String(value || '').match(/(\d{3,4})/)?.[1] || fallback;
}

function pickQualityUrl(videos, wanted = '720') {
  if (!videos || typeof videos !== 'object' || Array.isArray(videos)) return null;
  const ladder = ['1080', '720', '480', '360', '240', '144'];
  const want = videoQuality(wanted);
  const start = Math.max(0, ladder.indexOf(want));
  const order = ladder.slice(start).concat(ladder.slice(0, start));
  for (const quality of order) {
    const url = videos[quality] || videos[`${quality}p`];
    if (typeof url === 'string' && /^https?:\/\//i.test(url)) return url;
  }
  return null;
}

function princeFileUrl(result, quality) {
  const direct = result?.downloadUrl || result?.download_url || result?.video || pickUrl(result);
  if (typeof direct === 'string' && /^https?:\/\//i.test(direct)) return direct;
  return pickQualityUrl(result?.videos, quality);
}

async function princeVideoDownload(url, quality = '720') {
  const watchUrl = toYouTubeWatchUrl(url);
  const q = videoQuality(quality);
  const { base: PRINCE_API, key: PRINCE_API_KEY } = princeApiCreds();
  const endpoint = new URL('/api/download/ytvideo', PRINCE_API);
  endpoint.searchParams.set('apikey', PRINCE_API_KEY);
  endpoint.searchParams.set('quality', q);
  endpoint.searchParams.set('url', watchUrl);
  const { data, status } = await axios.get(endpoint.toString(), {
    timeout: 25000,
    validateStatus: () => true,
    headers: { Accept: 'application/json', 'User-Agent': UA },
  });
  const result = data?.result || data;
  if (status >= 400 || data?.success === false || result?.error) {
    throw new Error(result?.error || data?.message || data?.error || `Prince API HTTP ${status}`);
  }
  const dl_url = princeFileUrl(result, q);
  if (!dl_url) throw new Error('Prince API returned no download URL');
  return { title: result?.title || 'Video', dl_url, sourceUrl: watchUrl };
}

async function hectorVideoDownload(url, quality = '720') {
  const { data, status } = await axios.get(HECTOR_API, {
    params: { url: toYouTubeWatchUrl(url) },
    timeout: 30000,
    validateStatus: () => true,
    headers: { Accept: 'application/json', 'User-Agent': UA },
  });
  if (status >= 400 || data?.status === false) {
    throw new Error(data?.message || data?.error || `Hector API HTTP ${status}`);
  }
  const q = videoQuality(quality);
  const dl_url = pickQualityUrl(data?.videos, q)
    || pickQualityUrl(data?.result?.videos, q)
    || princeFileUrl(data, q);
  if (!dl_url || /[?&]format=mp3(?:&|$)/i.test(dl_url)) {
    throw new Error('Hector API returned no video URL');
  }
  return { title: data?.title || 'Video', dl_url, sourceUrl: url };
}

function formatInfo(video) {
  const views = Number(video.views || 0).toLocaleString('en-US');
  return `🎬 *${video.title}*\n⏱ Duration: ${video.timestamp || '—'}\n👀 Views: ${views}`;
}

async function knightVideoDownload({ url, query, format = '720p' }) {
  const params = { format };
  if (url) params.url = url;
  else params.query = query;

  const data = await knightDownload('/api/download/ytmp4', params, {
    timeout: 180000,
    attemptsPerBase: 2,
  });
  const dl_url = data.download || pickUrl(data.raw);
  if (!dl_url) throw new Error('Knight API returned no download URL');

  return {
    title: data.title || data.raw?.title || 'Video',
    dl_url,
    sourceUrl: data.url || data.raw?.url || url,
  };
}

async function legacyVideoDownload(url) {
  try {
    return await APIs.getEliteProTechVideoByUrl(url);
  } catch {
    try {
      return await APIs.getYupraVideoByUrl(url);
    } catch {
      return APIs.getOkatsuVideoByUrl(url);
    }
  }
}

async function resolveVideo({ url, query }) {
  let videoUrl = url;
  if (!videoUrl && query) {
    const search = await yts(query);
    videoUrl = search?.videos?.[0]?.url;
    if (!videoUrl) throw new Error('No videos found');
  }

  const steps = [
    ['Knight', () => knightVideoDownload({ url: videoUrl })],
    ['Prince', () => princeVideoDownload(videoUrl)],
    ['Hector', () => hectorVideoDownload(videoUrl)],
  ];
  let lastError;
  for (const [name, run] of steps) {
    try {
      return await run();
    } catch (err) {
      lastError = err;
      console.error(`[video] ${name} failed:`, err?.message || err);
    }
  }

  try {
    const legacy = await legacyVideoDownload(videoUrl);
    const dl_url = legacy?.download || legacy?.dl_url || legacy?.dl;
    if (!dl_url) throw new Error('Legacy API returned no download URL');
    return { title: legacy?.title || 'Video', dl_url, sourceUrl: videoUrl };
  } catch (err) {
    throw lastError || err;
  }
}

function runFfmpeg(args) {
  return new Promise((resolve, reject) => {
    const child = spawn(ffmpegPath, args, { windowsHide: true });
    let err = '';
    child.stderr.on('data', (chunk) => { err += chunk.toString(); });
    child.on('error', reject);
    child.on('close', (code) => {
      if (code === 0) resolve();
      else reject(new Error(err.trim().split('\n').slice(-2).join(' ') || `ffmpeg exited ${code}`));
    });
  });
}

function inspectMedia(file) {
  return new Promise((resolve) => {
    const child = spawn(ffmpegPath, ['-hide_banner', '-i', file], { windowsHide: true });
    let err = '';
    child.stderr.on('data', (chunk) => { err += chunk.toString(); });
    child.on('close', () => {
      const video = /Stream #\d+:\d+.*Video:\s*([a-z0-9]+)/i.exec(err)?.[1]?.toLowerCase() || '';
      const audio = /Stream #\d+:\d+.*Audio:\s*([a-z0-9]+)/i.exec(err)?.[1]?.toLowerCase() || '';
      const size = /Video:.*?(\d{2,5})x(\d{2,5})/i.exec(err);
      resolve({ video, audio, height: size ? Number(size[2]) : 0 });
    });
  });
}

function looksLikeMedia(buf) {
  if (!buf || buf.length < 16) return false;
  if (buf.slice(4, 8).toString('ascii') === 'ftyp') return true;
  return buf[0] === 0x1a && buf[1] === 0x45 && buf[2] === 0xdf && buf[3] === 0xa3;
}

async function toWhatsAppMp4(input, output) {
  const info = await inspectMedia(input);
  const h264 = info.video === 'h264';
  const aac = !info.audio || info.audio === 'aac';
  if (h264 && aac) {
    await runFfmpeg(['-y', '-i', input, '-c', 'copy', '-movflags', '+faststart', output]);
    return;
  }
  const args = ['-y', '-i', input];
  if (!h264) {
    args.push('-c:v', 'libx264', '-preset', 'ultrafast', '-crf', '26', '-pix_fmt', 'yuv420p');
    if (info.height > 720) args.push('-vf', 'scale=-2:720');
  } else {
    args.push('-c:v', 'copy');
  }
  if (info.audio && !aac) args.push('-c:a', 'aac', '-b:a', '128k');
  else if (info.audio) args.push('-c:a', 'copy');
  else args.push('-an');
  args.push('-movflags', '+faststart', output);
  await runFfmpeg(args);
}

async function sendVideo(sock, jid, msg, videoUrl, title) {
  const botName = config.botName;
  const fileName = `${(title || 'video').replace(/[^\w\s-]/g, '').trim() || 'video'}.mp4`;
  const caption = `*${title || 'Video'}*\n\n> *_Downloaded by ${botName}_*`;
  const stamp = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const input = path.join(os.tmpdir(), `ytv-${stamp}.mp4`);
  const output = path.join(os.tmpdir(), `ytv-${stamp}-wa.mp4`);

  try {
    const { data } = await axios.get(videoUrl, {
      responseType: 'arraybuffer',
      timeout: 180000,
      maxContentLength: 80 * 1024 * 1024,
      maxBodyLength: 80 * 1024 * 1024,
      headers: { 'User-Agent': UA, Accept: 'video/mp4,video/*,*/*' },
    });
    const source = Buffer.from(data);
    if (!looksLikeMedia(source)) throw new Error('Download was not a video file');
    fs.writeFileSync(input, source);
    await toWhatsAppMp4(input, output);
    const video = fs.readFileSync(output);
    if (!looksLikeMedia(video)) throw new Error('Converted file is not a video');
    await sock.sendMessage(jid, {
      video,
      mimetype: 'video/mp4',
      fileName,
      caption,
    }, { quoted: msg });
  } finally {
    for (const file of [input, output]) {
      if (fs.existsSync(file)) fs.unlinkSync(file);
    }
  }
}

module.exports = {
  name: 'ytvideo',
  aliases: ['ytv', 'ytmp4', 'ytvid', 'video'],
  category: 'media',
  description: 'Download video from YouTube',
  usage: ',video <video name or URL>',

  async execute(sock, msg, args, extra) {
    try {
      const query = args.join(' ').trim();
      const from = extra?.from || msg.key.remoteJid;
      const reply = extra?.reply
        || ((text) => sock.sendMessage(from, { text }, { quoted: msg }));

      if (!query) {
        return reply('Usage: `,video <name or YouTube URL>`\nExample: `,video sirra`');
      }

      let preview = null;
      if (isYouTubeUrl(query)) {
        const url = extractUrl(query);
        const ytId = (url.match(/(?:youtu\.be\/|v=)([a-zA-Z0-9_-]{11})/) || [])[1];
        preview = {
          url,
          title: 'YouTube Video',
          thumbnail: ytId ? `https://i.ytimg.com/vi/${ytId}/sddefault.jpg` : null,
        };
      } else {
        const search = await yts(query);
        preview = search?.videos?.[0];
        if (!preview) return reply('❌ No results found. Try another search.');
      }

      await sock.sendMessage(from, { react: { text: '🎬', key: msg.key } });

      if (preview.thumbnail) {
        try {
          await sock.sendMessage(from, {
            image: { url: preview.thumbnail },
            caption: `${formatInfo(preview)}\n\nDownloading...`,
          }, { quoted: msg });
        } catch {
          await reply(`${formatInfo(preview)}\n\nDownloading...`);
        }
      }

      const dl = await resolveVideo({
        url: isYouTubeUrl(query) ? extractUrl(query) : undefined,
        query: isYouTubeUrl(query) ? undefined : query,
      });

      if (!dl?.dl_url || !/^https?:\/\//i.test(dl.dl_url)) {
        throw new Error('Invalid download response');
      }

      await sendVideo(sock, from, msg, dl.dl_url, dl.title || preview.title);
    } catch (err) {
      console.error('[video]', err?.message || err);
      const from = extra?.from || msg.key.remoteJid;
      const reply = extra?.reply
        || ((text) => sock.sendMessage(from, { text }, { quoted: msg }));
      await reply(`❌ Download failed: ${err?.message || 'Unknown error'}`);
    }
  },
};

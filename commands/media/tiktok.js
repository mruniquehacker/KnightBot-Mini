/**
 * TikTok Downloader - via KnightBot API
 */

const { ttdl } = require('ruhend-scraper');
const axios = require('axios');
const config = require('../../config');
const { knightDownload, UA } = require('../../utils/mediaApi');

const processedMessages = new Set();

const TT_PATTERNS = [
  /https?:\/\/(?:www\.)?tiktok\.com\//i,
  /https?:\/\/(?:vm\.)?tiktok\.com\//i,
  /https?:\/\/(?:vt\.)?tiktok\.com\//i,
];

function extractUrl(text) {
  const match = String(text).match(/https?:\/\/[^\s]+/i);
  return match ? match[0] : '';
}

function isTikTokUrl(url) {
  return TT_PATTERNS.some((p) => p.test(url));
}

function pickUrl(result) {
  const url = result?.download || result?.dl_url || result?.dl;
  return url && /^https?:\/\//i.test(url) ? url : null;
}

async function knightTikTokDownload(url) {
  const data = await knightDownload('/api/download/tiktok', { url }, { timeout: 180000 });
  const dl_url = data.download || pickUrl(data.raw);
  if (!dl_url) throw new Error('Knight API returned no download URL');

  return {
    title: data.title || data.raw?.title || 'TikTok Video',
    thumbnail: data.thumbnail || data.raw?.thumbnail || null,
    dl_url,
  };
}

async function scraperTikTokDownload(url) {
  const downloadData = await ttdl(url);
  if (!downloadData?.data?.length) throw new Error('No media found');

  const video = downloadData.data.find((m) => {
    const mediaUrl = m.url || '';
    return m.type === 'video' || /\.(mp4|mov|webm)$/i.test(mediaUrl);
  }) || downloadData.data[0];

  if (!video?.url) throw new Error('No video URL found');

  return {
    title: 'TikTok Video',
    thumbnail: null,
    dl_url: video.url,
  };
}

async function resolveTikTok(url) {
  try {
    return await knightTikTokDownload(url);
  } catch (err) {
    console.error('[tiktok] Knight API failed, trying ttdl:', err?.message || err);
  }

  return scraperTikTokDownload(url);
}

async function sendVideo(sock, jid, msg, videoUrl, title, thumbnail) {
  const botName = config.botName.toUpperCase();
  const caption = title
    ? `*DOWNLOADED BY ${botName}*\n\n📝 ${title}`
    : `*DOWNLOADED BY ${botName}*`;

  if (thumbnail) {
    try {
      await sock.sendMessage(jid, {
        image: { url: thumbnail },
        caption,
      }, { quoted: msg });
    } catch {
      // thumbnail optional
    }
  }

  try {
    await sock.sendMessage(jid, {
      video: { url: videoUrl },
      mimetype: 'video/mp4',
      caption,
    }, { quoted: msg });
  } catch {
    const { data } = await axios.get(videoUrl, {
      responseType: 'arraybuffer',
      timeout: 120000,
      maxContentLength: 100 * 1024 * 1024,
      headers: {
        'User-Agent': UA,
        Accept: 'video/mp4,video/*,*/*',
        Referer: 'https://www.tiktok.com/',
      },
    });
    await sock.sendMessage(jid, {
      video: Buffer.from(data),
      mimetype: 'video/mp4',
      caption,
    }, { quoted: msg });
  }
}

module.exports = {
  name: 'tiktok',
  aliases: ['tt', 'ttdl', 'tiktokdl'],
  category: 'media',
  description: 'Download TikTok videos',
  usage: ',tiktok <TikTok URL>',

  async execute(sock, msg, args, extra) {
    try {
      if (processedMessages.has(msg.key.id)) return;
      processedMessages.add(msg.key.id);
      setTimeout(() => processedMessages.delete(msg.key.id), 5 * 60 * 1000);

      const text = msg.message?.conversation
        || msg.message?.extendedTextMessage?.text
        || args.join(' ');

      const url = extractUrl(text);
      if (!url) {
        return extra.reply('Please provide a TikTok link.\nExample: `,tiktok https://vm.tiktok.com/...`');
      }

      if (!isTikTokUrl(url)) {
        return extra.reply('That is not a valid TikTok link. Please provide a valid TikTok video URL.');
      }

      await sock.sendMessage(extra.from, { react: { text: '🔄', key: msg.key } });

      const dl = await resolveTikTok(url);
      if (!dl?.dl_url || !/^https?:\/\//i.test(dl.dl_url)) {
        throw new Error('Invalid download response');
      }

      await sendVideo(sock, extra.from, msg, dl.dl_url, dl.title, dl.thumbnail);
    } catch (err) {
      console.error('[tiktok]', err?.message || err);
      await extra.reply('❌ Failed to download TikTok video. Try again with a different link.');
    }
  },
};

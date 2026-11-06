/**
 * Facebook Downloader - via KnightBot API
 */

const { facebookdl } = require('@bochilteam/scraper-facebook');
const axios = require('axios');
const config = require('../../config');
const { knightDownload, UA } = require('../../utils/mediaApi');

const processedMessages = new Set();

const FB_PATTERNS = [
  /https?:\/\/(?:www\.|m\.)?facebook\.com\//i,
  /https?:\/\/(?:www\.|m\.)?fb\.com\//i,
  /https?:\/\/fb\.watch\//i,
];

function extractUrl(text) {
  const match = String(text).match(/https?:\/\/[^\s]+/i);
  return match ? match[0] : '';
}

function isFacebookUrl(url) {
  return FB_PATTERNS.some((p) => p.test(url));
}

function pickUrl(result) {
  const url = result?.download || result?.dl_url || result?.dl;
  return url && /^https?:\/\//i.test(url) ? url : null;
}

async function knightFacebookDownload(url) {
  const data = await knightDownload('/api/download/facebook', { url }, { timeout: 180000 });
  const dl_url = data.download || pickUrl(data.raw);
  if (!dl_url) throw new Error('Knight API returned no download URL');

  return {
    title: data.title || data.raw?.title || 'Facebook Video',
    dl_url,
  };
}

async function scraperFacebookDownload(url) {
  const data = await facebookdl(url);
  if (!data?.video?.length) throw new Error('No video data found');

  const videoOption = data.video[0];
  if (!videoOption?.download) throw new Error('No video download found');

  const videoData = await videoOption.download();
  let dl_url = null;
  let buffer = null;

  if (typeof videoData === 'string') dl_url = videoData;
  else if (Buffer.isBuffer(videoData)) buffer = videoData;
  else if (videoData?.url) dl_url = videoData.url;
  else if (videoData?.data) buffer = Buffer.from(videoData.data);
  else throw new Error('Invalid video data format');

  return {
    title: 'Facebook Video',
    dl_url,
    buffer,
    quality: videoOption.quality,
    duration: data.duration,
  };
}

async function resolveFacebook(url) {
  try {
    return await knightFacebookDownload(url);
  } catch (err) {
    console.error('[facebook] Knight API failed, trying scraper:', err?.message || err);
  }

  return scraperFacebookDownload(url);
}

async function sendVideo(sock, jid, msg, videoUrl, title, buffer) {
  const botName = config.botName.toUpperCase();
  const caption = title
    ? `*DOWNLOADED BY ${botName}*\n\n📝 ${title}`
    : `*DOWNLOADED BY ${botName}*`;

  if (buffer) {
    await sock.sendMessage(jid, {
      video: buffer,
      mimetype: 'video/mp4',
      caption,
    }, { quoted: msg });
    return;
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
        Referer: 'https://www.facebook.com/',
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
  name: 'facebook',
  aliases: ['fb', 'fbdl', 'facebookdl'],
  category: 'media',
  description: 'Download Facebook videos',
  usage: ',facebook <Facebook URL>',

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
        return extra.reply('Please provide a Facebook video link.\nExample: `,facebook https://facebook.com/reel/...`');
      }

      if (!isFacebookUrl(url)) {
        return extra.reply('That is not a valid Facebook link. Please provide a valid Facebook video or reel URL.');
      }

      await sock.sendMessage(extra.from, { react: { text: '🔄', key: msg.key } });

      const dl = await resolveFacebook(url);
      if (!dl.buffer && (!dl.dl_url || !/^https?:\/\//i.test(dl.dl_url))) {
        throw new Error('Invalid download response');
      }

      await sendVideo(sock, extra.from, msg, dl.dl_url, dl.title, dl.buffer);
    } catch (err) {
      console.error('[facebook]', err?.message || err);
      await extra.reply('❌ Failed to download Facebook video. Try again with a different link.');
    }
  },
};

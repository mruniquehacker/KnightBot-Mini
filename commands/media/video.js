/**
 * Video Downloader - Download video from YouTube
 */

const yts = require('yt-search');
const APIs = require('../../utils/api');
const config = require('../../config');

module.exports = {
  name: 'ytdoc',
  aliases: ['yt', 'ytmp4', 'ytvid', 'video'],
  category: 'media',
  description: 'Download video from YouTube',
  usage: '.video <video name or URL>',

  async execute(sock, msg, args) {
    try {
      // Get instance-specific config
      // const instanceConfig = config.getConfigFromSocket(sock);
      // the command above is very useless and crashes the bot
      
      const text = args.join(' ');
      const chatId = msg.key.remoteJid;

      const searchQuery = text.trim();

      if (!searchQuery) {
        return await sock.sendMessage(chatId, {
          text: 'What video do you want to download?'
        }, { quoted: msg });
      }

      // Determine if input is a YouTube link
      let videoUrl = '';
      let videoTitle = '';
      let videoThumbnail = '';

      if (searchQuery.startsWith('http://') || searchQuery.startsWith('https://')) {
        videoUrl = searchQuery;
      } else {
        // Search YouTube for the video
        const { videos } = await yts(searchQuery);
        if (!videos || videos.length === 0) {
          return await sock.sendMessage(chatId, {
            text: 'No videos found!'
          }, { quoted: msg });
        }
        videoUrl = videos[0].url;
        videoTitle = videos[0].title;
        videoThumbnail = videos[0].thumbnail;
      }

      // Send thumbnail immediately
      try {
        const ytId = (videoUrl.match(/(?:youtu\.be\/|v=)([a-zA-Z0-9_-]{11})/) || [])[1];
        const thumb = videoThumbnail || (ytId ? `https://i.ytimg.com/vi/${ytId}/sddefault.jpg` : undefined);
        const captionTitle = videoTitle || searchQuery;
        if (thumb) {
          await sock.sendMessage(chatId, {
            image: { url: thumb },
            caption: `*${captionTitle}*\nDownloading...`
          }, { quoted: msg });
        }
      } catch (e) {
        console.error('[VIDEO] thumb error:', e?.message || e);
      }

      // Validate YouTube URL
      let urls = videoUrl.match(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch\?v=|v\/|embed\/|shorts\/|playlist\?list=)?)([a-zA-Z0-9_-]{11})/gi);
      if (!urls) {
        return await sock.sendMessage(chatId, {
          text: 'This is not a valid YouTube link!'
        }, { quoted: msg });
      }

      // Get video: try EliteProTech first, then Yupra, then Okatsu fallback
      let videoData;
      try {
        videoData = await APIs.getEliteProTechVideoByUrl(videoUrl);
      } catch (e1) {
        try {
          videoData = await APIs.getYupraVideoByUrl(videoUrl);
        } catch (e2) {
          videoData = await APIs.getOkatsuVideoByUrl(videoUrl);
        }
      }

      // Send video directly using the download URL
    await sock.sendMessage(chatId, {
  document: { url: videoData.download },
  mimetype: 'application/octet-stream', // or 'video/mp4'
  fileName: `${(videoData.title || videoTitle || 'video').replace(/[^\w\s-]/g, '')}.mp4`,
  caption: `*${videoData.title || videoTitle || 'Video'}*\n\n> *_Downloaded by FOUNDER MINI 🤖_*`
}, { quoted: msg });

    } catch (error) {
      console.error('[VIDEO] Command Error:', error?.message || error);
      await sock.sendMessage(msg.key.remoteJid, {
        text: 'Download failed: ' + (error?.message || 'Unknown error')
      }, { quoted: msg });
    }
  }
};

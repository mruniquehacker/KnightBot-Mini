/**
 * TikTok Downloader - Download TikTok videos
 */

const axios = require("axios");

module.exports = {
  name: "tiktok",
  aliases: ["tt", "ttdl", "tik", "tikdl"],
  category: "media",
  description: "Download TikTok videos without watermark.",
  usage: "tiktok <tiktok url>",

  async execute(sock, msg, args) {
    try {
      if (!args.length) {
        return await sock.sendMessage(
          msg.key.remoteJid,
          {
            text: "❌ Please provide a TikTok video URL."
          },
          { quoted: msg }
        );
      }

      const url = args.join(" ");
      const api = `https://api.princetechn.com/api/download/tiktok?apikey=prince&url=${encodeURIComponent(url)}`;

      const { data } = await axios.get(api);

      if (!data.success || !data.result) {
        return await sock.sendMessage(
          msg.key.remoteJid,
          {
            text: "❌ Failed to fetch the TikTok video."
          },
          { quoted: msg }
        );
      }

      const { title, duration, video, author } = data.result;

      if (!video) {
        return await sock.sendMessage(
          msg.key.remoteJid,
          {
            text: "❌ No downloadable video was found."
          },
          { quoted: msg }
        );
      }

      await sock.sendMessage(
        msg.key.remoteJid,
        {
          video: { url: video },
          mimetype: "video/mp4",
          caption: `🎵 *${title || "TikTok Video"}*\n\n👤 Author: ${author?.name || "Unknown"}\n⏱ Duration: ${duration || 0}s`
        },
        { quoted: msg }
      );

    } catch (err) {
      console.error(err);

      await sock.sendMessage(
        msg.key.remoteJid,
        {
          text: "❌ An error occurred while downloading the TikTok video."
        },
        { quoted: msg }
      );
    }
  }
};

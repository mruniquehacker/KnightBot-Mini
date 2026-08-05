/**
 * Facebook Downloader - Download Facebook videos
 */

const axios = require("axios");

module.exports = {
  name: "facebook",
  aliases: ["fb", "fbdl", "facebookdl"],
  category: "media",
  description: "Download Facebook videos.",
  usage: "facebook <facebook video url>",

  async execute(sock, msg, args) {
    try {
      if (!args.length) {
        return await sock.sendMessage(msg.key.remoteJid, {
          text: "❌ Please provide a Facebook video URL."
        }, { quoted: msg });
      }

      const url = args.join(" ");
      const api = `https://api.princetechn.com/api/download/facebook?apikey=prince&url=${encodeURIComponent(url)}`;

      const { data } = await axios.get(api);

      if (!data.success || !data.result) {
        return await sock.sendMessage(msg.key.remoteJid, {
          text: "❌ Failed to fetch the Facebook video."
        }, { quoted: msg });
      }

      const videoUrl = data.result.hd_video || data.result.sd_video;

      if (!videoUrl) {
        return await sock.sendMessage(msg.key.remoteJid, {
          text: "❌ No downloadable video was found."
        }, { quoted: msg });
      }

      await sock.sendMessage(
        msg.key.remoteJid,
        {
          video: { url: videoUrl },
          mimetype: "video/mp4",
          caption: `📹 *${data.result.title || "Facebook Video"}*\n\n⏱ Duration: ${data.result.duration || "Unknown"}`
        },
        { quoted: msg }
      );

    } catch (err) {
      console.error(err);

      await sock.sendMessage(msg.key.remoteJid, {
        text: "❌ An error occurred while downloading the Facebook video."
      }, { quoted: msg });
    }
  }
};

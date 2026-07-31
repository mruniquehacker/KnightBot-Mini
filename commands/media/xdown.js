const axios = require("axios");

module.exports = {
  name: "xvideos",
  aliases: ["xvdl", "xl"],
  category: "nsfw",
  description: "Download videos from XVideos",
  usage: ".xvideos <xvideos url>",
  ownerOnly: true,

  async execute(sock, msg, args) {
    try {
      const chatId = msg.key.remoteJid;

      if (!args.length) {
        return await sock.sendMessage(
          chatId,
          {
            text: "❌ Please provide an XVideos URL.",
          },
          { quoted: msg }
        );
      }

      const url = args.join(" ").trim();

      const { data } = await axios.get(
        `https://api.princetechn.com/api/download/xvideosdl?apikey=prince&url=${encodeURIComponent(url)}`
      );

      if (!data.success || !data.result) {
        throw new Error("Failed to fetch video.");
      }

      const video = data.result;

      if (!video.download_url) {
        throw new Error("Download URL not found.");
      }

      // Send thumbnail with video information
      await sock.sendMessage(
        chatId,
        {
          image: {
            url: video.thumbnail,
          },
          caption: `*${video.title}*

👁️ Views: ${video.views}
👍 Likes: ${video.likes}
👎 Dislikes: ${video.dislikes}
📦 Size: ${video.size}

> Downloading video...`,
        },
        { quoted: msg }
      );

      // Send the video
      await sock.sendMessage(
        chatId,
        {
          video: {
            url: video.download_url,
          },
          mimetype: "video/mp4",
          fileName: `${video.title}.mp4`,
          caption: `*${video.title}*

📦 Size: ${video.size}

> *_Downloaded by FOUNDER MINI 🤖_*`,
        },
        { quoted: msg }
      );
    } catch (err) {
      console.error("[XVIDEOS]", err.response?.data || err);

      await sock.sendMessage(
        msg.key.remoteJid,
        {
          text: `❌ Download failed.\n${err.response?.data?.message || err.message}`,
        },
        { quoted: msg }
      );
    }
  },
};

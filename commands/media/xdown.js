const axios = require("axios");

module.exports = {
  name: "xvideos",
  aliases: ["xvdl", "xl"],
  category: "media",
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

      // Prefer LOW quality, otherwise use HIGH quality
      let downloadUrl = video.files?.low;

      if (!downloadUrl) {
        downloadUrl = video.files?.high;
      }

      if (!downloadUrl) {
        throw new Error("No downloadable video found.");
      }

      await sock.sendMessage(
        chatId,
        {
          video: {
            url: downloadUrl,
          },
          mimetype: "video/mp4",
          fileName: `${video.title}.mp4`,
          caption: `*${video.title}*

⏱️ Duration: ${video.duration}
📺 ${video.info}

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

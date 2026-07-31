const axios = require("axios");

module.exports = {
  name: "xvideos",
  aliases: ["xvdl", "xv"],
  category: "media",
  description: "Download videos from XVideos",
  usage: ".xvideos <xvideos url>",
  ownerOnly: true,

  async execute(sock, msg, args) {
    try {
      const chatId = msg.key.remoteJid;
      const url = args.join(" ").trim();

      if (!url) {
        return await sock.sendMessage(
          chatId,
          {
            text: "❌ Please provide an XVideos URL.",
          },
          { quoted: msg }
        );
      }

      if (!/^https?:\/\/(www\.)?xvideos\.com\//i.test(url)) {
        return await sock.sendMessage(
          chatId,
          {
            text: "❌ Invalid XVideos URL.",
          },
          { quoted: msg }
        );
      }

      const { data } = await axios.get(
        "https://api.princetechn.com/api/download/xvideosdl",
        {
          params: {
            apikey: "prince",
            url,
          },
        }
      );

      if (!data.success || !data.result) {
        return await sock.sendMessage(
          chatId,
          {
            text: "❌ Failed to fetch the video.",
          },
          { quoted: msg }
        );
      }

      const video = data.result;

      // Send thumbnail first
      if (video.image) {
        try {
          await sock.sendMessage(
            chatId,
            {
              image: { url: video.image },
              caption: `*${video.title}*\nDownloading...`,
            },
            { quoted: msg }
          );
        } catch (e) {
          console.error("[XVIDEOS] Thumbnail Error:", e.message);
        }
      }

      // Always use HIGH quality
      let downloadUrl = video.files?.high;

      if (!downloadUrl) {
        return await sock.sendMessage(
          chatId,
          {
            text: "❌ High quality video is unavailable.",
          },
          { quoted: msg }
        );
      }

      // Remove timestamp if present
      downloadUrl = downloadUrl.split(",")[0];

      await sock.sendMessage(
        chatId,
        {
          video: {
            url: downloadUrl,
          },
          mimetype: "video/mp4",
          fileName: `${video.title.replace(/[^\w\s-]/g, "")}.mp4`,
          caption: `*${video.title}*

⏱️ Duration: ${video.duration}s
📺 ${video.info}

> *_Downloaded by FOUNDER MINI 🤖_*`,
        },
        { quoted: msg }
      );
    } catch (err) {
      console.error("[XVIDEOS] Error:", err.response?.data || err);

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

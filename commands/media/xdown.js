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
      const url = args.join(" ").trim();

      if (!args) {
        return await sock.sendMessage(
          chatId,
          {
            text: "❌ Please provide an XVideos URL.",
          },
          { quoted: msg }
        );
      }

      
      

      // const video = data.result;

      // Send thumbnail first
      

      // Always use HIGH quality
      //let downloadUrl = video.files?.high;

      

      // Remove timestamp if present
      
      await sock.sendMessage(
        chatId,
        {
          video: {
            url: args,
          },
          mimetype: "video/mp4",
          fileName: `${args}.mp4`,
          caption: `*${"some saucy stuff"}*

⏱️ Duration: ${// video.duration}s
📺 ${// video.info}

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

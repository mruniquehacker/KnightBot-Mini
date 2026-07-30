const axios = require("axios");

module.exports = {
  name: "yts",
  aliases: ["svid", "ytsearch"],
  category: "media",
  description: "Search videos on YouTube",
  usage: "yts <query>",
  ownerOnly: true,

  async execute(sock, msg, args, extra) {
    try {
      const query = args.join(" ").trim();

      if (!query) {
        return await sock.sendMessage(msg.key.remoteJid, {
          text: "❌ Please provide a query."
        });
      }

      const res = await axios.get(
        `https://api-olive-five-53.vercel.app/download?url=${encodeURIComponent(query)}`
      );

      console.log(res.data);

      await sock.sendMessage(
        extra.from,
        {
          text: JSON.stringify(res.data, null, 2)
        },
        { quoted: msg }
      );

    } catch (err) {
      console.error("[yts cmd] error:", err);
      return extra.reply("❌ Something went horribly wrong.");
    }
  },
};

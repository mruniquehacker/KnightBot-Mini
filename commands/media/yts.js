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
        return await sock.sendMessage(extra.from, {
          text: "❌ Please provide a search query."
        }, {
            quoted: msg
        });
      }

      const { data } = await axios.get(
        `https://api-olive-five-53.vercel.app/yts?q=${encodeURIComponent(query)}`
      );

      if (!Array.isArray(data) || data.length === 0) {
        return await sock.sendMessage(extra.from, {
          text: "❌ No results found."
        },
        {
            quoted: msg
        });
      }

      const text = data
        .slice(0, 7) // Show only the first 5 results
        .map((video, index) => {
          return `*${index + 1}. ${video.title}*
📺 *Channel: ${video.channel}*
🔗 *Url: ${video.url}*`;
        })
        .join("\n\n");

      await sock.sendMessage(
        extra.from,
        {
          text: `*Results for ${query}* ✨💫 \n\n${text} \n\n ☄️ FOUNDER ☄️`,
          mentions: [extra.sender],
        },
        { quoted: msg }
      );

    } catch (err) {
      console.error("[yts] Error:", err);

      await sock.sendMessage(extra.from, {
        text: "❌ Something went wrong while searching YouTube."
      });
    }
  },
};

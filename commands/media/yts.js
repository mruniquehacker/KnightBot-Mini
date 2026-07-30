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
        });
      }

      const { data } = await axios.get(
        `https://api-olive-five-53.vercel.app/download?url=${encodeURIComponent(query)}`
      );

      if (!Array.isArray(data) || data.length === 0) {
        return await sock.sendMessage(extra.from, {
          text: "❌ No results found."
        });
      }

      const text = data
        .slice(0, 5) // Show only the first 5 results
        .map((video, index) => {
          return `*${index + 1}. ${video.title}*
📺 Channel: ${video.channel}
🔗 ${video.url}`;
        })
        .join("\n\n");

      await sock.sendMessage(
        extra.from,
        {
          text: `Greetings @${extra.sender.split("@")[0]} 👋\n\n${text}`,
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

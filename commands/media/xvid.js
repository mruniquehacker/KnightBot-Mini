const xvideos = require("@rodrigogs/xvideos");

module.exports = {
  name: "xvid",
  aliases: ["xvideo", "xv"],
  category: "media",
  description: "Search videos on XVideos",
  usage: "xvid <query>",
  ownerOnly: true,

  async execute(sock, msg, args, extra) {
    try {
      const query = args.join(" ").trim();

      if (!query) {
        return await sock.sendMessage(
          extra.from,
          {
            text: "❌ Please provide a search query.",
          },
          {
            quoted: msg,
          }
        );
      }

      const { data } = await xvideos.videos.search({
        k: query,
      });

      if (!Array.isArray(data) || data.length === 0) {
        return await sock.sendMessage(
          extra.from,
          {
            text: "❌ No results found.",
          },
          {
            quoted: msg,
          }
        );
      }

      const text = data
        .slice(0, 7)
        .map((video, index) => {
          return `*${index + 1}. ${video.title}*
🆔 *ID:* ${video.id}
🔗 *URL:* ${video.url}`;
        })
        .join("\n\n");

      await sock.sendMessage(
        extra.from,
        {
          text: `*Results for "${query}"*\n\n${text}`,
          mentions: [extra.sender],
        },
        {
          quoted: msg,
        }
      );
    } catch (err) {
      console.error("[xvid] Error:", err);

      await sock.sendMessage(
        extra.from,
        {
          text: "❌ Something went wrong while searching XVideos.",
        },
        {
          quoted: msg,
        }
      );
    }
  },
};

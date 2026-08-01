const xvideos = require("@rodrigogs/xvideos");

module.exports = {
  name: "xs",
  aliases: ["xvideos", "xs"],
  category: "nsfw",
  description: "Search videos on XVideos",
  usage: "xvid <query>",
  ownerOnly: false,

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

      const results = await xvideos.videos.search({
        k: query,
      });

      const videos = results.videos;

      if (!Array.isArray(videos) || videos.length === 0) {
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

      const text = videos
        .slice(0, 7)
        .map((video, index) => {
          return `*${index + 1}. ${video.title}*
⏱️ *Duration:* ${video.duration}
👤 *Uploader:* ${video.profile}
👁️ *Views:* ${video.watchCount?.toLocaleString?.() ?? video.watchCount}
🆔 *Video ID:* ${video.videoId}
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

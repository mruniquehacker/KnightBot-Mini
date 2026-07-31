const axios = require("axios");

module.exports = {
  name: "neko",
  aliases: ["catgirl", "waifu"],
  category: "fun",
  description: "Get a random neko image.",

  execute: async ({ sock, m }) => {
    try {
      const { data } = await axios.get(
        "https://api.nekosapi.com/v4/images/random"
      );

      if (!data?.items?.length) {
        return m.reply("❌ Failed to fetch a neko image.");
      }

      const image = data.items[0];

      await sock.sendMessage(
        m.chat,
        {
          image: { url: image.image_url },
          caption: `🐱 ${image.artist_name || "Random Neko"}`,
        },
        { quoted: m }
      );
    } catch (err) {
      console.error(err);
      m.reply("❌ Failed to fetch a neko image.");
    }
  },
};

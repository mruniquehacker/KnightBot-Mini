const axios = require("axios");

module.exports = {
  name: "cat",
  aliases: ["kitty", "meow"],
  category: "fun",
  description: "Get a random cat image.",
  usage: "cat",

  async execute(sock, m) {
    try {
      const { data } = await axios.get(
        "https://api.thecatapi.com/v1/images/search"
      );

      if (!data.length || !data[0].url) {
        return await sock.sendMessage(
          m.key.remoteJid,
          { text: "❌ Failed to fetch a cat image." },
          { quoted: m }
        );
      }

      await sock.sendMessage(
        m.key.remoteJid,
        {
          image: { url: data[0].url },
          caption: "🐱 Meow!"
        },
        { quoted: m }
      );
    } catch (err) {
      console.error(err);

      await sock.sendMessage(
        m.key.remoteJid,
        {
          text: "❌ An error occurred while fetching a cat image."
        },
        { quoted: m }
      );
    }
  },
};

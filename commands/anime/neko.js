const { NekosAPI } = require("nekosapi");

const api = new NekosAPI();

module.exports = {
  name: "neko",
  aliases: ["catgirl", "waifu"],
  category: "fun",
  description: "Send a random neko image.",

  async execute(sock, msg) {
    try {
      const image = await api.getRandomImage("Catgirl");

      await sock.sendMessage(
        msg.key.remoteJid,
        {
          image: { url: image.imageUrl || image.url },
          caption: `🐱 ${image.artistName ? `Artist: ${image.artistName}` : "Random Catgirl"}`
        },
        { quoted: msg }
      );
    } catch (err) {
      console.error(err);

      await sock.sendMessage(
        msg.key.remoteJid,
        {
          text: "❌ Failed to fetch an image."
        },
        { quoted: msg }
      );
    }
  }
};

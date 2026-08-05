const axios = require("axios");

module.exports = {
  name: "tinyurl",
  aliases: ["surl", "tiny"],
  category: "utility",
  description: "Shorten a long URL using TinyURL.",
  usage: "<url>",

  async execute(sock, m, args) {
    try {
      const url = args.join(" ").trim();

      if (!url) {
        return sock.sendMessage(
          m.key.remoteJid,
          {
            text: "❌ Please provide a URL.\n\nExample:\n.tinyurl https://example.com"
          },
          { quoted: m }
        );
      }

      const api = `https://api.princetechn.com/api/tools/tinyurl?apikey=prince&url=${encodeURIComponent(url)}`;
      const { data } = await axios.get(api);

      if (!data.success) {
        return sock.sendMessage(
          m.key.remoteJid,
          {
            text: "❌ Failed to shorten the URL. Please try again later."
          },
          { quoted: m }
        );
      }

      const msg = `✨ *Your link is ready!* ✨

🔗 *Original URL:*
${url}

🌸 *TinyURL:*
${data.result}

💖 Short, sweet, and ready to share!`;

      await sock.sendMessage(
        m.key.remoteJid,
        {
          text: msg
        },
        { quoted: m }
      );
    } catch (err) {
      console.error(err);
      await sock.sendMessage(
        m.key.remoteJid,
        {
          text: "❌ Something went wrong while shortening your link."
        },
        { quoted: m }
      );
    }
  }
};

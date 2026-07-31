const axios = require("axios");

module.exports = {
  name: "tiktokstalk",
  aliases: ["ttstalk", "ttp", "tiktokprofile"],
  category: "utility",
  description: "View information about a TikTok profile.",
  usage: "<username>",

  async execute(sock, m, args) {
    try {
      const username = args.join(" ").replace(/^@/, "").trim();

      if (!username) {
        return sock.sendMessage(
          m.key.remoteJid,
          {
            text: "❌ Please provide a TikTok username.\n\nExample:\n.tiktokstalk princetech"
          },
          { quoted: m }
        );
      }

      const api = `https://api.princetechn.com/api/stalk/tiktokstalk?apikey=prince&username=${encodeURIComponent(username)}`;
      const { data } = await axios.get(api);

      if (!data.success || !data.result) {
        return sock.sendMessage(
          m.key.remoteJid,
          {
            text: "❌ User not found or an error occurred."
          },
          { quoted: m }
        );
      }

      const user = data.result;

      const caption = `🎵 *TikTok Profile Stalker* 🎵

👤 *Name:* ${user.name}
🆔 *Username:* @${user.username}
📌 *ID:* ${user.id}

📝 *Bio:*
${user.bio || "No bio available."}

👥 *Followers:* ${user.followers.toLocaleString()}
➡️ *Following:* ${user.following.toLocaleString()}
❤️ *Likes:* ${user.likes.toLocaleString()}

${user.verified ? "✅ Verified Account" : "❌ Not Verified"}
${user.private ? "🔒 Private Account" : "🌍 Public Account"}

✨ Happy stalking! 👀`;

      await sock.sendMessage(
        m.key.remoteJid,
        {
          image: { url: user.avatar },
          caption
        },
        { quoted: m }
      );
    } catch (err) {
      console.error(err);

      await sock.sendMessage(
        m.key.remoteJid,
        {
          text: "❌ Failed to fetch TikTok profile."
        },
        { quoted: m }
      );
    }
  }
};

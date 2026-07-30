// const axios = require("axios")

module.exports = {
  name: 'yts',
  aliases: ["svid", "ytsearch"],
  category: 'media',
  description: 'search videos on youtube',
  usage: 'ill add later',
  ownerOnly: true,

  async execute(sock, msg, args, extra) {
    try {
        await sock.sendMessage(extra.from, {
        text: `Greetings @${extra.sender.split('@')[0]} 👻, you said ${msg}`,
          mentions: [extra.sender],
      }, { quoted: msg });

    } catch (err) {
      console.error('[yts cmd] error:', err);
      return extra.reply('❌ Error something went horribly wrong.');
    }
  },
};

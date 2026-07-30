// attempt at making a command

module.exports = {
  name: 'hy',
  aliases: ["hello", "hi", "h"],
  category: 'owner',
  description: 'greet bot',
  usage: 'ill add later',
  ownerOnly: true,

  async execute(sock, msg, args, extra) {
    try {
        await sock.sendMessage(extra.from, {
        text: `Greetings @${extra.sender.split('@')[0]} everything seems to be working just fine 🤖`,
          mentions: [extra.sender],
      }, { quoted: msg });

    } catch (err) {
      console.error('[hi cmd] error:', err);
      return extra.reply('❌ Error something went horribly wrong.');
    }
  },
};



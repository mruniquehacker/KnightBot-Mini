const axios = require("axios")
const API = `https://api-olive-five-53.vercel.app/download?url=`

module.exports = {
  name: 'yts',
  aliases: ["svid", "ytsearch"],
  category: 'media',
  description: 'search videos on youtube',
  usage: 'ill add later',
  ownerOnly: true,

  async execute(sock, msg, args, extra) {
    try {
        const url = args.join(" ")
        const res = await axios.get(`${API}+${url}`)
        
        await sock.sendMessage(extra.from, {
        text: `Greetings @${extra.sender.split('@')[0]} 👻, 
        \n 
        
        ` res.map((obj) => obj.url + "\n",
          mentions: [extra.sender],
      }, { quoted: msg });

    } catch (err) {
      console.error('[yts cmd] error:', err);
      return extra.reply('❌ Error something went horribly wrong.');
    }
  },
};

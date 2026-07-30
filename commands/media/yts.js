const axios = require("axios")
//const API = `https://api-olive-five-53.vercel.app/download?url=`

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
        const res = await axios.get(`https://api-olive-five-53.vercel.app/download?url=${url}`
      await  sock.sendMessage(msg.key.remoteJid, { 
          text: `${url}`
        });
      
  if (url.length === 0) {
        return await sock.sendMessage(msg.key.remoteJid, { 
          text: `❌ Please provide a query`
        });
      }
        await sock.sendMessage(extra.from, {
        text: `Greetings @${extra.sender.split('@')[0]} 👻, 
      
        ${res.map((obj) => obj.url)}
        ` ,
          mentions: [extra.sender],
      }, { quoted: msg });

    } catch (err) {
      console.error('[yts cmd] error:', err);
      return extra.reply('❌ Error something went horribly wrong.');
    }
  },
};

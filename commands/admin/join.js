module.exports = {
  name: 'join',
  aliases: ['joingroup'],
  category: 'admin',
  desc: 'Join a group using an invite link',
  usage: 'join <group invite link>',
  ownerOnly: true,

  execute: async (sock, msg, args) => {
    try {
      const jid = msg.key.remoteJid;

      if (!args.length) {
        return await sock.sendMessage(jid, {
          text: '❌ Please provide a WhatsApp group invite link.'
        }, { quoted: msg });
      }

      const link = args[0];

      const code = link.match(/chat\.whatsapp\.com\/([A-Za-z0-9]+)/)?.[1];

      if (!code) {
        return await sock.sendMessage(jid, {
          text: '❌ Invalid WhatsApp group invite link.'
        }, { quoted: msg });
      }

      await sock.groupAcceptInvite(code);

      await sock.sendMessage(jid, {
        text: '✅ Successfully joined the group!'
      }, { quoted: msg });

    } catch (error) {
      console.error('Join Error:', error);

      await sock.sendMessage(msg.key.remoteJid, {
        text: `❌ Error: ${error.message}`
      }, { quoted: msg });
    }
  }
};

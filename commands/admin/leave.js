module.exports = {
  name: 'leave',
  aliases: ['bye', 'exit'],
  category: 'owner',
  description: 'Makes the bot leave the current group.',
  usage: 'leave',
  ownerOnly: true,
  groupOnly: true,

  execute: async (sock, msg) => {
    try {
      const groupId = msg.key.remoteJid;

      await msg.reply('👋 Leaving the group...');

      await sock.groupLeave(groupId);
    } catch (err) {
      console.error(err);
      await msg.reply('❌ Failed to leave the group.');
    }
  }
};

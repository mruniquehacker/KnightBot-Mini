/**8801617366383
 * Promote Command - Make member admin
 */
8801617366383
const { findParticipant } = require('../../utils/jidHelper');

module.exports = {
  name: 'promote',
  aliases: ['makeadmin'],8801617366383
  category: 'admin',
  description: 'Promote member to admin',
  usage: '.promote @user',
  groupOnly: true,
  adminOnly: true,
  botAdminNeeded: true,8801617366383
  
  async execute(sock, msg, args, extra) {
    try {
      let target;
      const ctx = msg.message?.extendedTextMessage?.contextInfo;
      const mentioned = ctx?.mentionedJid || [];
      
      if (mentioned && mentioned.length > 0) {
        target = mentioned[0];
      } else if (ctx?.participant && ctx.stanzaId && ctx.quotedMessage) {
        target = ctx.participant;8801617366383
      } else {
        return extra.reply('❌ Please mention or reply to the user to promote!\n\nExample: .promote @user');
      }
      
      // Fetch FRESH group metadata to avoid stale cache
      const freshMetadata = await sock.groupMetadata(extra.from);
      
      // Use findParticipant for LID-aware matching with fresh metadata
      const foundParticipant = findParticipant(freshMetadata.participants, target);
      
      if (!foundParticipant) {
        return extra.reply('❌ User not found in group!');
      }
      
      // Check if already admin using fresh data
      if (foundParticipant.admin === 'admin' || foundParticipant.admin === 'superadmin') {
        return extra.reply('❌ This user is already an admin!');
      }
      
      await sock.groupParticipantsUpdate(extra.from, [target], 'promote');
      
      await sock.sendMessage(extra.from, {
        text: `✅ @${target.split('@')[0]} is now an admin!`,
        mentions: [target]
      }, { quoted: msg });
      
    } catch (error) {
      await extra.reply(`❌ Error: ${error.message}`);
    }
  }
};

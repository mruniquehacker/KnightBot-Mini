module.exports = {
    name: 'revokelink',
    aliases: ['resetlink', 'revokeinvite', 'rvk'],
    category: 'Group',
    description: 'Revoke the current group invite link',
    usage: 'revokelink',
    groupOnly: true,
    adminOnly: true,
    reactions: {
        start: '🔄',
        success: '✅',
        error: '❌'
    },

    execute: async (sock, msg, args, { reply }) => {
        try {
            const groupId = msg.key.remoteJid;

            await sock.groupRevokeInvite(groupId);

            const newCode = await sock.groupInviteCode(groupId);
            const newLink = `https://chat.whatsapp.com/${newCode}`;

            return reply(
                `✅ *Group invite link has been revoked!*\n\n` +
                `🔗 *New Invite Link:*\n${newLink}`
            );
        } catch (err) {
            console.error(err);
            return reply('❌ Failed to revoke the group invite link.');
        }
    }
};

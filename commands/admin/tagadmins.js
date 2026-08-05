module.exports = {
    name: 'admins',
    aliases: ['admin', 'tagadmin', 'tagadmins', 'staff'],
    category: 'admin',
    description: 'Mention all group admins',
    usage: 'admins [optional message]',
    groupOnly: true,
    reactions: {
        start: '📢',
        success: '✅',
        error: '❌'
    },

    execute: async (sock, msg, args, { reply }) => {
        try {
            const groupId = msg.key.remoteJid;
            const metadata = await sock.groupMetadata(groupId);

            const admins = metadata.participants.filter(
                p => p.admin === 'admin' || p.admin === 'superadmin'
            );

            if (!admins.length) {
                return reply('❌ No admins found.');
            }

            const mentions = admins.map(a => a.id);

            let text = `👑 *Group Admins (${admins.length})*\n\n`;

            admins.forEach((admin, i) => {
                text += `${i + 1}. @${admin.id.split('@')[0]}\n`;
            });

            if (args.length) {
                text += `\n📩 *Message:*\n${args.join(' ')}`;
            }

            await sock.sendMessage(groupId, {
                text,
                mentions
            }, {
                quoted: msg
            });

        } catch (err) {
            console.error(err);
            reply('❌ Failed to mention group admins.');
        }
    }
};

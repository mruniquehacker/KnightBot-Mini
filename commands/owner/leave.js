module.exports = {
    name: 'leave',
    aliases: ['l', 'exit'],
    category: 'owner',
    desc: 'Leave the current group',
    groupOnly: true,
    ownerOnly: true,
    reactions: {
        start: '👋',
        success: '✅'
    },

    execute: async (sock, m, { reply }) => {
        try {
            await reply('👋 Leaving the group...');

            await sock.groupLeave(m.chat);

        } catch (err) {
            console.error('LEAVE ERROR:', err);
            reply(`❌ ${err.message}`);
        }
    }
};

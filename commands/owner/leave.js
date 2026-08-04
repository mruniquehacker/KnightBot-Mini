module.exports = {
    name: 'leave',
    aliases: ['exit', 'leavegc'],
    desc: 'Leave the current group',
    category: 'owner',

    groupOnly: true,
    ownerOnly: true,

    reactions: {
        start: '👋',
        success: '✅'
    },

    execute: async (sock, msg, args, {
        from,
        reply,
        react
    }) => {
        try {
            await react('👋');

            if (args[0]?.toLowerCase() !== 'confirm') {
                return reply(
                    '⚠️ This will make me leave the group.\n\n' +
                    'Run:\n.leave confirm'
                );
            }

            await reply('👋 Goodbye!');

            await sock.groupLeave(from);

        } catch (err) {
            console.error(err);
            reply(`❌ ${err.message}`);
        }
    }
};

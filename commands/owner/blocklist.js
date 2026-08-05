module.exports = {
    name: 'blocklist',
    aliases: ['blocked', 'listblocked'],
    category: 'owner',
    desc: 'View the bot block list',
    usage: 'blocklist',
    ownerOnly: true,
    reactions: {
        start: '📋',
        success: '✅',
        error: '❌'
    },

    execute: async (sock, msg, args, { reply }) => {
        try {
            const blocked = await sock.fetchBlocklist();

            if (!blocked || blocked.length === 0) {
                return reply('✅ The bot has not blocked anyone.');
            }

            let text = `🚫 *Blocked Users (${blocked.length})*\n\n`;

            blocked.forEach((jid, i) => {
                const number = jid.split('@')[0];
                text += `${i + 1}. wa.me/${number}\n`;
            });

            return reply(text);
        } catch (err) {
            console.error(err);
            return reply('❌ Failed to fetch the block list.');
        }
    }
};

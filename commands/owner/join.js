module.exports = {
    name: 'join',
    aliases: ['j'],
    desc: 'Join a WhatsApp group using an invite link',
    category: 'admin',

    ownerOnly: true,

    reactions: {
        start: '🔗',
        success: '✅'
    },

    execute: async (sock, msg, args, {
        reply,
        react
    }) => {
        try {
            await react('🔗');

            if (!args.length) {
                return reply('Example:\n.join https://chat.whatsapp.com/xxxxxxxxxxxxxxxxxxxxxx');
            }

            const link = args.join(' ');

            const match = link.match(/chat\.whatsapp\.com\/([A-Za-z0-9]{20,24})/i);

            if (!match) {
                return reply('❌ Invalid WhatsApp invite link.');
            }

            const code = match[1];

            await sock.groupAcceptInvite(code);

            await react('✅');
            reply('✅ Successfully joined the group.');
        } catch (err) {
            console.error(err);
            reply(`❌ ${err.message}`);
        }
    }
};

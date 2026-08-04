module.exports = {
    name: 'join',
    aliases: ['joingroup'],
    category: 'owner',
    desc: 'Join a WhatsApp group using an invite link',
    ownerOnly: true,
    reactions: {
        start: '🔗',
        success: '✅'
    },

    execute: async (sock, m, { args, reply }) => {
        try {
            const text = args.join(' ') || m.body || '';

            const match = text.match(
                /chat\.whatsapp\.com\/([A-Za-z0-9_-]{20,30})/i
            );

            if (!match) {
                return reply(
                    '❌ Please provide a valid WhatsApp group invite link.\n\n' +
                    'Example:\n' +
                    '.join https://chat.whatsapp.com/AbCdEfGhIjKlMnOpQrStUv'
                );
            }

            const inviteCode = match[1];

            await reply('⏳ Joining group...');

            const groupJid = await sock.groupAcceptInvite(inviteCode);

            await reply(`✅ Successfully joined the group!\n\n${groupJid}`);

        } catch (err) {
            console.error('JOIN ERROR:', err);

            let msg = '❌ Failed to join the group.';

            if (err.message?.includes('401'))
                msg = '❌ The invite link is invalid or has been revoked.';

            else if (err.message?.includes('409'))
                msg = 'ℹ️ The bot is already in that group.';

            else if (err.message?.includes('500'))
                msg = '❌ WhatsApp rejected the request. Try again later.';

            reply(msg);
        }
    }
};

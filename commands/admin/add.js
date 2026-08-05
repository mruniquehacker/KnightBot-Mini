module.exports = {
    name: 'add',
    aliases: ['adduser'],
    desc: 'Add a member to the group',
    category: 'Admin',

    groupOnly: true,
    adminOnly: true,
    botAdminNeeded: true,

    reactions: {
        start: '➕',
        success: '✅'
    },

    execute: async (sock, msg, args, {
        from,
        reply,
        react
    }) => {
        try {
            await react('➕');

            let jid;

            // Reply target
            if (msg.quoted?.sender) {
                jid = msg.quoted.sender;
            }

            // Mention target
            if (!jid && msg.mentionedJid?.length) {
                jid = msg.mentionedJid[0];
            }

            // Number from args
            if (!jid && args.length) {
                let number = args[0].replace(/\D/g, '');

                if (number.startsWith('0')) {
                    number = '27' + number.slice(1);
                }

                if (number.length < 8) {
                    return reply('❌ Invalid phone number.');
                }

                jid = `${number}@s.whatsapp.net`;
            }

            if (!jid) {
                return reply(
                    'Usage:\n' +
                    '• .add @user\n' +
                    '• .add 27712345678\n' +
                    '• Reply to someone with .add'
                );
            }

            const result = await sock.groupParticipantsUpdate(
                from,
                [jid],
                'add'
            );

            const status = Number(result?.[0]?.status);

            switch (status) {
                case 200:
                    await react('✅');
                    return reply('✅ Member added successfully.');

                case 403:
                    return reply("❌ Can't add this user because of their privacy settings.");

                case 404:
                    return reply('❌ User is not registered on WhatsApp.');

                case 408:
                    return reply('❌ Invite expired or timed out.');

                case 409:
                    return reply('ℹ️ User is already in the group.');

                default:
                    return reply(`❌ Failed to add user.\nStatus: ${status || 'Unknown'}`);
            }

        } catch (err) {
            console.error(err);
            reply(`❌ ${err.message}`);
        }
    }
};

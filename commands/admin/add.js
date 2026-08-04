module.exports = {
    name: 'add',
    aliases: ['adduser'],
    category: 'admin',
    desc: 'Add members to a group',
    groupOnly: true,
    adminOnly: true,
     },

    execute: async (sock, m, { args, reply }) => {
        try {
            const targets = [];

            if (m.quoted?.sender)
                targets.push(m.quoted.sender);

            if (m.mentionedJid?.length) {
                for (const jid of m.mentionedJid) {
                    if (!targets.includes(jid))
                        targets.push(jid);
                }
            }

            if (!targets.length) {
                for (const arg of args) {
                    const number = arg.replace(/\D/g, '');

                    if (number.length < 7)
                        continue;

                    const jid = `${number}@s.whatsapp.net`;

                    if (!targets.includes(jid))
                        targets.push(jid);
                }
            }

            if (!targets.length)
                return reply(
                    `Example:\n` +
                    `.add 27821234567\n` +
                    `.add @user\n` +
                    `Reply with .add`
                );

            const metadata = await sock.groupMetadata(m.chat);

            const existing = new Set(
                metadata.participants.map(p => p.id)
            );

            const added = [];
            const privacy = [];
            const failed = [];
            const already = [];

            for (const jid of targets) {

                if (existing.has(jid)) {
                    already.push(jid);
                    continue;
                }

                try {

                    const [res] = await sock.groupParticipantsUpdate(
                        m.chat,
                        [jid],
                        'add'
                    );

                    switch (String(res.status)) {

                        case '200':
                            added.push(jid);
                            break;

                        case '403':
                        case '401':
                        case '409':
                            privacy.push(jid);
                            break;

                        default:
                            failed.push(jid);
                    }

                } catch {
                    failed.push(jid);
                }

                await new Promise(r => setTimeout(r, 500));
            }

            let text = '';

            if (added.length)
                text += `✅ *Added*\n${added.map(v => `• @${v.split('@')[0]}`).join('\n')}\n\n`;

            if (already.length)
                text += `ℹ️ *Already in group*\n${already.map(v => `• @${v.split('@')[0]}`).join('\n')}\n\n`;

            if (privacy.length)
                text += `🔒 *Couldn't add (privacy settings)*\n${privacy.map(v => `• @${v.split('@')[0]}`).join('\n')}\n\n`;

            if (failed.length)
                text += `❌ *Failed*\n${failed.map(v => `• @${v.split('@')[0]}`).join('\n')}`;

            if (!text)
                text = "Nothing happened.";

            await sock.sendMessage(m.chat, {
                text,
                mentions: [...added, ...already, ...privacy, ...failed]
            }, {
                quoted: m
            });

        } catch (err) {
            console.error(err);
            reply(`❌ ${err.message}`);
        }
    }
};

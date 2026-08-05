module.exports = {
    name: 'approverequests',
    alias: ['approveall', 'acceptrequests'],
    desc: 'Approve all pending group join requests',
    category: 'admin',
    groupOnly: true,
    adminOnly: true,
    botAdmin: true,
    reactions: {
        start: '⏳',
        success: '✅',
        error: '❌'
    },

    execute: async (sock, m, { reply }) => {
        try {
            const jid = m.chat;

            const requests = await sock.groupRequestParticipantsList(jid);

            if (!requests.length) {
                return reply('✅ No pending join requests.');
            }

            const participants = requests.map(r => r.jid);

            await sock.groupRequestParticipantsUpdate(
                jid,
                participants,
                'approve'
            );

            reply(`✅ Approved ${participants.length} join request(s).`);

        } catch (e) {
            console.error(e);
            reply(`❌ ${e.message}`);
        }
    }
};

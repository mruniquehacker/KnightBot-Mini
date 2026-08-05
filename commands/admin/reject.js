module.exports = {
    name: 'rejectrequests',
    alias: ['rejectall', 'decline'],
    desc: 'Reject all pending group join requests',
    category: 'admin',
    groupOnly: true,
    adminOnly: true,
    reactions: {
        start: '⏳',
        success: '✅',
        error: '❌'
    },

    execute: async (sock, m, { reply }) => {
        try {
            const jid = m.chat;

            // Fetch pending requests
            const requests = await sock.groupRequestParticipantsList(jid);

            if (!requests.length) {
                return reply('✅ There are no pending join requests.');
            }

            const participants = requests.map(req => req.jid);

            // Reject all requests
            await sock.groupRequestParticipantsUpdate(
                jid,
                participants,
                'reject'
            );

            reply(`🚫 Rejected ${participants.length} join request(s).`);

        } catch (err) {
            console.error(err);
            reply(`❌ Failed to reject join requests.\n\n${err.message}`);
        }
    }
};

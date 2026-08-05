module.exports = {
    name: 'disappearing',
    aliases: ['disappear', 'ephemeral'],
    category: 'admin',
    description: 'Enable or disable disappearing messages',
    usage: 'disappearing <off|24h|7d|90d>',
    groupOnly: true,
    adminOnly: true,
    reactions: {
        start: '⏳',
        success: '✅',
        error: '❌'
    },

    execute: async (sock, msg, args, { reply }) => {
        try {
            if (!args.length) {
                return reply(
                    `❌ Please choose a duration.\n\n` +
                    `Example:\n` +
                    `.disappearing off\n` +
                    `.disappearing 24h\n` +
                    `.disappearing 7d\n` +
                    `.disappearing 90d`
                );
            }

            const option = args[0].toLowerCase();

            const durations = {
                off: 0,
                "24h": 86400,
                "7d": 604800,
                "90d": 7776000
            };

            if (!(option in durations)) {
                return reply("❌ Invalid option. Use: off, 24h, 7d, or 90d.");
            }

            await sock.groupToggleEphemeral(
                msg.key.remoteJid,
                durations[option]
            );

            const status =
                durations[option] === 0
                    ? "Disabled"
                    : `Enabled (${option})`;

            return reply(`✅ Disappearing messages: *${status}*`);
        } catch (err) {
            console.error(err);
            return reply("❌ Failed to update disappearing messages.");
        }
    }
};

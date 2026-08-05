module.exports = {
    name: 'setbio',
    aliases: ['setabout', 'bio'],
    category: 'owner',
    description: 'Change the bot WhatsApp bio',
    usage: 'setbio <new bio>',
    ownerOnly: true,
    reactions: {
        start: '📝',
        success: '✅',
        error: '❌'
    },

    execute: async (sock, msg, args, { reply }) => {
        try {
            if (!args.length) {
                return reply(
                    `❌ Please provide a new bio.\n\nExample:\n.setbio Online 24/7 🤖`
                );
            }

            const newBio = args.join(' ').trim();

            if (newBio.length > 139) {
                return reply('❌ Bio cannot be longer than 139 characters.');
            }

            await sock.updateProfileStatus(newBio);

            return reply(`✅ Bot bio has been updated.\n\n📝 *New Bio:*\n${newBio}`);
        } catch (err) {
            console.error(err);
            return reply('❌ Failed to update the bot bio.');
        }
    }
};

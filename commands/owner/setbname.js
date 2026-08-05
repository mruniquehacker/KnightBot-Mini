module.exports = {
    name: 'setppname',
    aliases: ['pn', 'name'],
    category: 'owner',
    description: 'Change the bot profile name',
    usage: 'setppname <new name>',
    ownerOnly: true,
    reactions: {
        start: '✏️',
        success: '✅',
        error: '❌'
    },

    execute: async (sock, msg, args, { reply }) => {
        try {
            if (!args.length) {
                return reply(
                    `❌ Please provide a new bot name.\n\nExample:\n.setbotname KnightBot`
                );
            }

            const newName = args.join(' ').trim();

            if (newName.length > 25) {
                return reply('❌ Bot name must be 25 characters or less.');
            }

            await sock.updateProfileName(newName);

            return reply(`✅ Bot name has been updated to *${newName}*`);
        } catch (err) {
            console.error(err);
            return reply('❌ Failed to update the bot name.');
        }
    }
};

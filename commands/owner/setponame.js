module.exports = {
    name: 'setprofilename',
    aliases: ['setppname', 'profilename', 'name'],
    category: 'owner',
    desc: 'Change the bot profile name',
    usage: 'setprofilename <new name>',
    ownerOnly: true,
    reactions: {
        start: '✏️',
        success: '✅',
        error: '❌'
    },

    execute: async (sock, msg, { args, reply }) => {
        try {
            if (!args.length) {
                return reply(
                    '❌ Please provide a new profile name.\n\nExample:\n.setprofilename KnightBot'
                );
            }

            const name = args.join(' ').trim();

            await sock.updateProfileName(name);

            reply(`✅ Profile name updated to *${name}*`);
        } catch (err) {
            console.error(err);
            reply('❌ Failed to update profile name.');
        }
    }
};

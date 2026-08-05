module.exports = {
    name: 'setgroupname',
    aliases: ['setname', 'groupname', 'subject'],
    category: 'admin',
    description: 'Change the group name',
    usage: 'setgroupname <new name>',
    groupOnly: true,
    adminOnly: true,
    reactions: {
        start: '✏️',
        success: '✅',
        error: '❌'
    },

    execute: async (sock, msg, args, { reply }) => {
        try {
            if (!args.length) {
                return reply(
                    `❌ Please provide a new group name.\n\nExample:\n.setgroupname My Awesome Group`
                );
            }

            const newName = args.join(' ').trim();

            if (newName.length > 100) {
                return reply('❌ Group name cannot be longer than 100 characters.');
            }

            await sock.groupUpdateSubject(msg.key.remoteJid, newName);

            return reply(`✅ Group name has been changed to:\n*${newName}*`);
        } catch (err) {
            console.error(err);
            return reply('❌ Failed to change the group name.');
        }
    }
};

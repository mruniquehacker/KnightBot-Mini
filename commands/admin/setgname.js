/**
 * Set Group Name Command - Change the name of the group
 */

const config = require('../../config');

// ===================================================
// UTILITIES
// ===================================================

/**
 * Creates a decorative header for the command response.
 * @param {string} title - The title of the section.
 * @returns {string} - The formatted header string.
 */
const createHeader = (title) => {
    return `*[ ${title.toUpperCase()} ]*`;
};

/**
 * Creates a separator line.
 * @returns {string}
 */
const createSeparator = () => "──────────────";

// ===================================================
// MAIN COMMAND DEFINITION
// ===================================================

module.exports = {
    name: 'setgname',
    aliases: ['setname', 'groupname', 'changename'],
    category: 'admin',
    adminOnly: true,
    description: 'Change the group subject/name',
    usage: '.setgname <new group name>',

    async execute(sock, m, { reply }) {
        try {
            // Check if it's a group chat
            if (!m.chat.endsWith('@g.us')) {
                return reply(
`╭─❍ *GROUP NAME*
│ ❌ This command can only
│ be used inside groups!
╰─ 𓄄`
                );
            }

            // Extract the new group name from arguments
            // If using standard argument parsing, or splitting body text:
            const body = m.body || m.msg?.text || '';
            const args = body.trim().split(/ +/).slice(1);
            const newName = args.join(' ');

            if (!newName) {
                let text = '';
                text += createHeader('Group Name Error') + '\n\n';
                text += `❌ Please provide a new name for the group.\n\n`;
                text += `*Example:*\n`;
                text += `.setgname KnightBot Study Group\n\n`;
                text += createSeparator() + '\n';
                text += `💡 Type the new name right after the command.`;

                return reply(text);
            }

            // React to show processing
            await sock.sendMessage(m.chat, {
                react: { text: "⏳", key: m.key }
            });

            // Update the group subject using official @whiskeysockets/baileys method
            await sock.groupUpdateSubject(m.chat, newName);

            // React with success
            await sock.sendMessage(m.chat, {
                react: { text: "✨", key: m.key }
            });

            await reply(
`╭─❍ *GROUP NAME*
│ ✅ Successfully changed
│ group name to: *${newName}*
╰─ 𓄄`
            );

        } catch (err) {
            console.error("SETGNAME ERROR:", err);
            
            await sock.sendMessage(m.chat, {
                react: { text: "❌", key: m.key }
            });

            reply(
`╭─❍ *ERROR*
│ ❌ Failed to change group
│ name: ${err.message}
╰─ 𓄄`
            );
        }
    }
};

/**
 * Poll Command - Create a poll in a group chat
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
    name: 'poll',
    aliases: ['createpoll', 'vote'],
    category: 'group',
    adminOnly: true,
    description: 'Create a poll with a question and options',
    usage: '.poll Question | Option 1 | Option 2 | Option 3',

    async execute(sock, msg, args, extra) {
        try {
            // Check if it's a group chat (polls are typically used in groups)
            if (!extra.from.endsWith('@g.us')) {
                await sock.sendMessage(
                    extra.from,
                    { text: '❌ This command can only be used inside groups!' },
                    { quoted: msg }
                );
                return;
            }

            // Combine all arguments and split by the pipe symbol `|`
            const input = args.join(' ');
            const parts = input.split('|').map(part => part.trim());

            const question = parts[0];
            const options = parts.slice(1);

            // Validate question and options (at least 2 options required for a valid poll)
            if (!question || options.length < 2) {
                let text = '';
                text += createHeader('Poll Usage Error') + '\n\n';
                text += `❌ Please provide a question and at least 2 options separated by pipes (\`|\`).\n\n`;
                text += `*Example:*\n`;
                text += `${config.prefix}poll What should we play? | PUBG | COD Mobile | Free Fire\n\n`;
                text += createSeparator() + '\n';
                text += `💡 Make sure to use \`|\` between options!`;

                await sock.sendMessage(
                    extra.from,
                    { text, mentions: [extra.sender] },
                    { quoted: msg }
                );
                return;
            }

            // Baileys poll creation payload
            // selectableCount: 1 allows single voting, set to higher if multi-choice is needed
            await sock.sendMessage(
                extra.from,
                {
                    poll: {
                        name: question,
                        values: options,
                        selectableCount: 1
                    }
                },
                { quoted: msg }
            );

        } catch (err) {
            console.error(err);
            await sock.sendMessage(
                extra.from,
                {
                    text: `❌ ${err.message}`
                },
                { quoted: msg }
            );
        }
    }
};

module.exports = {
    name: 'poll',
    aliases: ['createpoll', 'vote'],
    category: 'admin',
    description: 'Create a native WhatsApp poll.',
    usage: 'poll [multi] Question | Option 1 | Option 2 | ...',
    groupOnly: true,

    execute: async (sock, msg, args) => {
        try {
            if (!args.length) {
                return msg.reply(
                    `📊 *Poll Creator*\n\n` +
                    `Single Choice:\n` +
                    `• poll Best language? | JavaScript | TypeScript\n\n` +
                    `Multi Choice:\n` +
                    `• poll multi Favorite foods? | Pizza | Burger | Sushi\n\n` +
                    `• Minimum: 2 options\n` +
                    `• Maximum: 12 options`
                );
            }

            let text = args.join(' ').trim();
            let multi = false;

            if (text.toLowerCase().startsWith('multi ')) {
                multi = true;
                text = text.slice(6).trim();
            }

            const parts = text
                .split('|')
                .map(v => v.trim())
                .filter(Boolean);

            if (parts.length < 3) {
                return msg.reply(
                    `❌ Invalid format.\n\n` +
                    `Example:\n` +
                    `poll Best footballer? | Messi | Ronaldo`
                );
            }

            const question = parts.shift();
            const options = parts;

            if (question.length > 255)
                return msg.reply('❌ Question cannot exceed 255 characters.');

            if (options.length < 2)
                return msg.reply('❌ A poll requires at least 2 options.');

            if (options.length > 12)
                return msg.reply('❌ A poll can have at most 12 options.');

            for (const option of options) {
                if (option.length > 100) {
                    return msg.reply(
                        `❌ Option "${option.slice(0, 20)}..." exceeds 100 characters.`
                    );
                }
            }

            await sock.sendMessage(
                msg.from,
                {
                    poll: {
                        name: question,
                        values: options,
                        selectableCount: multi ? 0 : 1
                    }
                },
                {
                    quoted: msg
                }
            );
        } catch (err) {
            console.error('Poll Error:', err);

            msg.reply(
                `❌ Failed to create the poll.\n` +
                `Reason: ${err.message || 'Unknown error'}`
            );
        }
    }
};

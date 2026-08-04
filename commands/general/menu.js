/**
 * Menu Command - Display all available commands
 */

const fs = require('fs');
const path = require('path');
const config = require('../../config');
const { loadCommands } = require('../../utils/commandLoader');

module.exports = {
    name: 'menu',
    aliases: ['help', 'commands'],
    category: 'general',
    description: 'Displays the bot menu',
    usage: '.menu',

    async execute(sock, msg, args, extra) {
        try {
            const commands = loadCommands();

            const categories = {};
            const unique = [];

            // Remove aliases
            for (const [name, cmd] of commands.entries()) {
                if (cmd.name !== name) continue;

                unique.push(cmd);

                const cat = (cmd.category || 'other').toLowerCase();

                if (!categories[cat]) categories[cat] = [];
                categories[cat].push(cmd);
            }

            const categoryIcons = {
                general: '⚖️',
                ai: '🤖',
                group: '👥',
                admin: '🛡️',
                media: '🎵',
                downloader: '📥',
                download: '📥',
                utility: '⚙️',
                tools: '🧰',
                owner: '👑',
                fun: '🎲',
                economy: '💰',
                nsfw: '🍁',
                anime: '🌸',
                textmaker: '🎨',
                search: '🔍',
                convert: '🔄',
                games: '🎮',
                misc: '📦',
                other: '📁'
            };

            const owner = Array.isArray(config.ownerName)
                ? config.ownerName[0]
                : config.ownerName;

            let text = '';

            text += `╭───────────────────────────────╮\n`;
            text += `│         🤖 ${config.botName.toUpperCase()}         │\n`;
            text += `│     Multi Device WhatsApp Bot │\n`;
            text += `╰───────────────────────────────╯\n\n`;

            text += `╭─〔 👤 USER INFO 〕──────────────\n`;
            text += `│ 👤 User      : @${extra.sender.split('@')[0]}\n`;
            text += `│ 👑 Owner     : ${owner}\n`;
            text += `│ ⚡ Prefix    : ${config.prefix}\n`;
            text += `│ 📦 Commands  : ${unique.length}\n`;
            text += `│ 📂 Categories: ${Object.keys(categories).length}\n`;
            text += `│ 🚀 Version   : 1.0.3\n`;
            text += `╰───────────────────────────────\n`;

            const sortedCategories = Object.keys(categories).sort();

            for (const cat of sortedCategories) {

                const cmds = categories[cat]
                    .sort((a, b) => a.name.localeCompare(b.name));

                text += `\n`;
                text += `╭─〔 ${categoryIcons[cat] || '📁'} ${cat.toUpperCase()} 〕`;

                text += '─'.repeat(Math.max(0, 26 - cat.length));
                text += `\n`;

                cmds.forEach(cmd => {
                    text += `│ • ${config.prefix}${cmd.name}\n`;
                });

                text += `╰───────────────────────────────\n`;
            }

            text += `\n`;
            text += `╭───────────────────────────────╮\n`;
            text += `│ 💡 ${config.prefix}help <command>\n`;
            text += `│ ❤️ Thanks for using ${config.botName}\n`;
            text += `╰───────────────────────────────╯`;

            const imagePath = path.join(__dirname, '../../utils/bot_image.jpg');

            if (fs.existsSync(imagePath)) {

                await sock.sendMessage(
                    extra.from,
                    {
                        image: fs.readFileSync(imagePath),
                        caption: text,
                        mentions: [extra.sender],
                        contextInfo: {
                            forwardingScore: 1,
                            isForwarded: true,
                            forwardedNewsletterMessageInfo: {
                                newsletterJid:
                                    config.newsletterJid ||
                                    '120363161513685996@newsletter',
                                newsletterName: config.botName,
                                serverMessageId: -1
                            }
                        }
                    },
                    { quoted: msg }
                );

            } else {

                await sock.sendMessage(
                    extra.from,
                    {
                        text,
                        mentions: [extra.sender]
                    },
                    { quoted: msg }
                );

            }

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

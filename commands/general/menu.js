/**
 * Menu Command - Display all available commands
 */

/**
 * Dynamic Menu Command
 */

const fs = require('fs');
const path = require('path');
const config = require('../../config');
const { loadCommands } = require('../../utils/commandLoader');

module.exports = {
    name: 'menu',
    aliases: ['commands'],
    category: 'general',
    description: 'Display the bot menu',
    usage: '.menu [category]',

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
                download: '📥',
                downloader: '📥',
                utility: '⚙️',
                tools: '🧰',
                owner: '👑',
                fun: '🎲',
                anime: '🌸',
                economy: '💰',
                games: '🎮',
                search: '🔍',
                convert: '🔄',
                textmaker: '🎨',
                nsfw: '🍁',
                misc: '📦',
                other: '📁'
            };

            const owner = Array.isArray(config.ownerName)
                ? config.ownerName[0]
                : config.ownerName;

            const order = [
                'general',
                'ai',
                'group',
                'admin',
                'media',
                'download',
                'downloader',
                'utility',
                'tools',
                'fun',
                'anime',
                'economy',
                'games',
                'search',
                'convert',
                'textmaker',
                'owner',
                'misc',
                'other'
            ];

            const sortedCategories = [
                ...order.filter(c => categories[c]),
                ...Object.keys(categories)
                    .filter(c => !order.includes(c))
                    .sort()
            ];

            const requested = (args[0] || '').toLowerCase();

            let text = '';

            // ===================================================
            // CATEGORY MENU
            // ===================================================

            if (requested) {

                if (!categories[requested]) {

                    text =
`❌ Category *${requested}* was not found.

Available categories:

${sortedCategories.join(', ')}

Example:
${config.prefix}menu ai`;

                } else {

                    const cmds = categories[requested]
                        .sort((a, b) => a.name.localeCompare(b.name));

                    text += `╭━━━━━━━━━━━━━━━━━━━━━━━⬣\n`;
                    text += `┃ ${categoryIcons[requested] || '📁'} ${requested.toUpperCase()} COMMANDS\n`;
                    text += `╰━━━━━━━━━━━━━━━━━━━━━━━⬣\n\n`;

                    for (const cmd of cmds) {

                        text += `• ${config.prefix}${cmd.name}`;

                        if (cmd.description)
                            text += ` — ${cmd.description}`;

                        text += '\n';

                    }

                    text += `\n━━━━━━━━━━━━━━━━━━━━━━\n`;
                    text += `💡 ${config.prefix}help <command>`;

                }

            }

            // ===================================================
            // MAIN MENU
            // ===================================================

            else {

                const uptime = process.uptime();

                const hours = Math.floor(uptime / 3600);
                const minutes = Math.floor((uptime % 3600) / 60);
                const seconds = Math.floor(uptime % 60);

                const ram = (
                    process.memoryUsage().rss /
                    1024 /
                    1024
                ).toFixed(0);

                text += `╭━━━━━━━━━━━━━━━━━━━━━━━⬣\n`;
                text += `┃ 🤖 ${config.botName.toUpperCase()}\n`;
                text += `┃ Multi Device WhatsApp Bot\n`;
                text += `╰━━━━━━━━━━━━━━━━━━━━━━━⬣\n\n`;

                text += `👤 User      : @${extra.sender.split('@')[0]}\n`;
                text += `👑 Owner     : ${owner}\n`;
                text += `⚡ Prefix    : ${config.prefix}\n`;
                text += `📦 Commands  : ${unique.length}\n`;
                text += `📂 Categories: ${sortedCategories.length}\n`;
                text += `💾 RAM       : ${ram} MB\n`;
                text += `⏱️ Uptime    : ${hours}h ${minutes}m ${seconds}s\n`;
                text += `🖥 Platform  : ${process.platform}\n`;

                text += `\n━━━━━━━━━━━━━━━━━━━━━━\n\n`;
                text += `📂 Categories\n\n`;

                for (const cat of sortedCategories) {

                    text += `${categoryIcons[cat] || '📁'} ${cat.padEnd(12)} (${categories[cat].length})\n`;

                }

                text += `\n━━━━━━━━━━━━━━━━━━━━━━\n\n`;
                text += `💡 ${config.prefix}menu <category>\n`;
                text += `💡 ${config.prefix}help <command>\n\n`;

                text += `Examples\n`;
                text += `${config.prefix}menu ai\n`;
                text += `${config.prefix}menu download`;

            }

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

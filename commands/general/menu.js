/**
 * Menu Command - Display all available commands
 */

/**
 * Dynamic Menu Command
 */

/**
 * Menu Command - Display all available commands
 */

const fs = require('fs');
const path = require('path');
const config = require('../../config');
const { loadCommands } = require('../../utils/commandLoader');

// ===================================================
// UTILITIES
// ===================================================

/**
 * Creates a decorative header for menu sections.
 * Matches the styling from user screenshots.
 * @param {string} title - The title of the section.
 * @returns {string} - The formatted header string.
 */
const createHeader = (title) => {
    const padding = "━".repeat(3);
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

            // Process commands: remove aliases, organize by category
            for (const [name, cmd] of commands.entries()) {
                if (cmd.name !== name) continue;
                unique.push(cmd);
                const cat = (cmd.category || 'other').toLowerCase();
                if (!categories[cat]) categories[cat] = [];
                categories[cat].push(cmd);
            }

            // Define icons for categories
            const categoryIcons = {
                general: '⚖️', ai: '🤖', group: '👥', admin: '🛡️', media: '🎵',
                download: '📥', downloader: '📥', utility: '⚙️', tools: '🧰',
                owner: '👑', fun: '🎲', anime: '🌸', economy: '💰', games: '🎮',
                search: '🔍', convert: '🔄', textmaker: '🎨', nsfw: '🍁',
                misc: '📦', other: '📁'
            };

            const owner = Array.isArray(config.ownerName) ? config.ownerName[0] : config.ownerName;

            // Define display order for main menu
            const order = [
                'general', 'ai', 'group', 'admin', 'media', 'download',
                'downloader', 'utility', 'tools', 'fun', 'anime', 'economy',
                'games', 'search', 'convert', 'textmaker', 'owner', 'misc', 'other'
            ];

            const sortedCategories = [
                ...order.filter(c => categories[c]),
                ...Object.keys(categories).filter(c => !order.includes(c)).sort()
            ];

            const requested = (args[0] || '').toLowerCase();
            let text = '';

            // ===================================================
            // SECTION: CATEGORY MENU
            // ===================================================

            if (requested) {
                if (!categories[requested]) {
                    // Error State: Category not found
                    text = `❌ Category *${requested}* was not found.\n\nAvailable categories:\n\n${sortedCategories.join(', ')}\n\nExample:\n${config.prefix}menu ai`;
                } else {
                    // Success State: Display commands in category with its dedicated emoji
                    const cmds = categories[requested].sort((a, b) => a.name.localeCompare(b.name));
                    const catEmoji = categoryIcons[requested] || '📁';
                    
                    text += createHeader(requested) + '\n\n';

                    for (const cmd of cmds) {
                        text += `${catEmoji} *${config.prefix}${cmd.name}*\n`;
                    }

                    text += `\n${createSeparator()}\n`;
                    text += `💡 ${config.prefix}help <command>`;
                }
            }

            // ===================================================
            // SECTION: MAIN MENU
            // ===================================================

            else {
                const uptime = process.uptime();
                const hours = Math.floor(uptime / 3600);
                const minutes = Math.floor((uptime % 3600) / 60);
                const seconds = Math.floor(uptime % 60);

                const ram = (process.memoryUsage().rss / 1024 / 1024).toFixed(0);

                // Bot Info Header
                text += createHeader(config.botName) + '\n\n';
                text += `👤 User: @${extra.sender.split('@')[0]}\n`;
                text += `👑 Owner: ${owner}\n`;
                text += `⚡ Prefix: ${config.prefix}\n`;
                text += `📦 Commands: ${unique.length}\n`;
                text += `📂 Categories: ${sortedCategories.length}\n`;
                text += `💾 RAM: ${ram} MB\n`;
                text += `⏱️ Uptime: ${hours}h ${minutes}m ${seconds}s\n`;
                text += `🖥 Platform: ${process.platform}`;

                // Categories List
                text += `\n\n${createSeparator()}\n\n`;
                text += createHeader('Categories') + '\n\n';

                for (const cat of sortedCategories) {
                    text += `${categoryIcons[cat] || '📁'} ${cat.charAt(0).toUpperCase() + cat.slice(1)} (${categories[cat].length})\n`;
                }

                // Footer Instructions
                text += `\n${createSeparator()}\n\n`;
                text += `💡 ${config.prefix}menu <category>\n`;
                text += `💡 ${config.prefix}help <command>\n\n`;
                text += `Examples\n`;
                text += `${config.prefix}menu ai\n`;
                text += `${config.prefix}menu download`;
            }

            // ===================================================
            // SEND MESSAGE
            // ===================================================

            const imagePath = path.join(__dirname, '../../utils/bot_image.jpg');

            if (fs.existsSync(imagePath)) {
                // Send as image with caption (preferred)
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
                                newsletterJid: config.newsletterJid || '120363161513685996@newsletter',
                                newsletterName: config.botName,
                                serverMessageId: -1
                            }
                        }
                    },
                    { quoted: msg }
                );
            } else {
                // Fallback to text message
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

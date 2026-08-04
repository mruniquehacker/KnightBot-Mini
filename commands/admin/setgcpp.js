/**
 * Set Group Icon / Profile Command - Change the group's profile picture
 */

const fs = require('fs');
const path = require('path');
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
    name: 'setgpp',
    aliases: ['gp', 'gcpp'],
    category: 'admin',
    description: 'Change the group profile picture',
    usage: '.setgpp (reply to an image or attach one)',

    async execute(sock, msg, args, extra) {
        try {
            // Check if it's a group chat
            if (!extra.from.endsWith('@g.us')) {
                await sock.sendMessage(
                    extra.from,
                    { text: '❌ This command can only be used inside groups!' },
                    { quoted: msg }
                );
                return;
            }

            // Check if sender is admin or bot has admin rights (optional check depending on your bot framework, but good practice)
            // Here we look for quoted media or media attached directly to the message
            const quotedMsg = msg.message?.extendedTextMessage?.contextInfo?.quotedMessage;
            const isQuotedImage = quotedMsg?.imageMessage;
            const isDirectImage = msg.message?.imageMessage;

            if (!isDirectImage && !isQuotedImage) {
                let text = '';
                text += createHeader('Group Profile Error') + '\n\n';
                text += `❌ Please send or reply to an image with the command ${config.prefix}setgpp.\n\n`;
                text += createSeparator() + '\n';
                text += `💡 Attach an image or reply to one to update the group icon.`;

                await sock.sendMessage(
                    extra.from,
                    { text, mentions: [extra.sender] },
                    { quoted: msg }
                );
                return;
            }

            // Inform user that processing has started
            await sock.sendMessage(
                extra.from,
                { text: '🔄 Updating group profile picture...' },
                { quoted: msg }
            );

            // Download media (handles both direct media or quoted media)
            // Note: Depending on your baileys wrapper helper, you can use downloadMediaMessage or downloadContentFromMessage. 
            // Using standard Baileys download approach:
            const mediaMessage = isDirectImage ? msg.message : quotedMsg;
            
            // If your framework has a dedicated media downloader utility, use it here. 
            // Below is the standard Baileys method block for updating group icon:
            const { downloadMediaMessage } = require('@whiskeysockets/baileys');
            const buffer = await downloadMediaMessage(
                { message: mediaMessage },
                'buffer',
                {},
                { logger: console }
            );

            // Update group profile picture using Baileys socket method
            await sock.updateProfilePicture(extra.from, buffer);

            await sock.sendMessage(
                extra.from,
                { text: '✅ Successfully updated the group profile picture!' },
                { quoted: msg }
            );

        } catch (err) {
            console.error(err);
            await sock.sendMessage(
                extra.from,
                {
                    text: `❌ Failed to update group picture: ${err.message}`
                },
                { quoted: msg }
            );
        }
    }
};

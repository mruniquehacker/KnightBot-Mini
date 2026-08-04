/**
 * ToVV Command - Convert image or video to view once using @whiskeysockets/baileys
 */

const { downloadMediaMessage } = require('@whiskeysockets/baileys');

module.exports = {
    name: "tovv",
    alias: ["tov1", "tv"],
    category: "owner",
    ownerOnly: true,
    description: "Convert media to view once",

    reactions: {
        start: "👁️",
        success: "✨"
    },

    execute: async (sock, m, { reply }) => {

        try {

            // ── Detect Media ─────────────────────────
            const quoted = m.quoted ? m.quoted : m;
            const mime = (quoted.msg || quoted).mimetype || "";

            if (!/image|video/.test(mime)) {
                return reply(
`╭─❍ *TOVV*
│ ⚠️ Reply to an image
│ or video to convert
│ into view once
╰─ 𓄄`
                );
            }

            await sock.sendMessage(m.chat, {
                react: { text: "👁️", key: m.key }
            });

            // ── Download Media using Baileys Helper ───
            const mediaMessage = {
                message: quoted.message || { [mime.startsWith("video") ? "videoMessage" : "imageMessage"]: quoted.msg || quoted }
            };

            const buffer = await downloadMediaMessage(
                mediaMessage,
                'buffer',
                {},
                { logger: console, reuploadRequest: sock.updateMediaMessage }
            );

            const caption = quoted.text || quoted.caption || "";
            const type = mime.startsWith("video") ? "video" : "image";

            // ── Send as View Once ────────────────────
            if (type === "image") {
                await sock.sendMessage(
                    m.chat,
                    {
                        image: buffer,
                        viewOnce: true,
                        caption: caption
                    },
                    { quoted: m }
                );
            } else {
                await sock.sendMessage(
                    m.chat,
                    {
                        video: buffer,
                        viewOnce: true,
                        caption: caption
                    },
                    { quoted: m }
                );
            }

            await sock.sendMessage(m.chat, {
                react: { text: "✨", key: m.key }
            });

        } catch (err) {
            console.error("TOVV ERROR:", err);

            reply(
`╭─❍ *ERROR*
│ ❌ Failed to convert
│ media to view once
╰─ 𓄄`
            );
        }
    }
};

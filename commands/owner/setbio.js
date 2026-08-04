/**
 * Set Bio / About Command - Update the bot's WhatsApp status/bio
 */

module.exports = {
    name: "setbio",
    alias: ["setabout", "status"],
    category: "owner",
    description: "Update the bot profile bio status",

    reactions: {
        start: "✍️",
        success: "✨"
    },

    execute: async (sock, m, { reply }) => {

        try {

            // Extract the new bio text from message body
            const body = m.body || m.msg?.text || "";
            const args = body.trim().split(/ +/).slice(1);
            const newBio = args.join(" ");

            if (!newBio) {
                return reply(
`╭─❍ *SET BIO*
│ ⚠️ Please provide the new
│ bio text you want to set.
│ 
│ *Example:*
│ .setbio Always online & coding 🚀
╰─ 𓄄`
                );
            }

            await sock.sendMessage(m.chat, {
                react: { text: "✍️", key: m.key }
            });

            // Update the bot's status / about profile text
            await sock.updateProfileStatus(newBio);

            await sock.sendMessage(m.chat, {
                react: { text: "✨", key: m.key }
            });

            await reply(
`╭─❍ *SET BIO*
│ ✅ Successfully updated
│ bot bio status to:
│ _"${newBio}"_
╰─ 𓄄`
            );

        } catch (err) {

            console.error("SETBIO ERROR:", err);

            await sock.sendMessage(m.chat, {
                react: { text: "❌", key: m.key }
            });

            reply(
`╭─❍ *ERROR*
│ ❌ Failed to update bot bio
╰─ 𓄄`
            );
        }
    }
};

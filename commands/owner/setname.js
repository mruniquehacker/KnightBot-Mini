/**
 * Set Name Command - Update the bot's WhatsApp profile name
 */

module.exports = {
    name: "setname",
    alias: ["setbotname", "botname"],
    category: "owner",
    ownerOnly: true,
    description: "Update the bot's profile name",

    reactions: {
        start: "✏️",
        success: "✨"
    },

    execute: async (sock, m, { reply }) => {

        try {

            // Extract the new name text from message body
            const body = m.body || m.msg?.text || "";
            const args = body.trim().split(/ +/).slice(1);
            const newName = args.join(" ");

            if (!newName) {
                return reply(
`╭─❍ *SET NAME*
│ ⚠️ Please provide the new
│ name you want to set.
│ 
│ *Example:*
│ .setname KnightBot Pro
╰─ 𓄄`
                );
            }

            await sock.sendMessage(m.chat, {
                react: { text: "✏️", key: m.key }
            });

            // Update the bot's push name / profile name
            await sock.updateProfileName(newName);

            await sock.sendMessage(m.chat, {
                react: { text: "✨", key: m.key }
            });

            await reply(
`╭─❍ *SET NAME*
│ ✅ Successfully updated
│ bot profile name to:
│ _"${newName}"_
╰─ 𓄄`
            );

        } catch (err) {

            console.error("SETNAME ERROR:", err);

            await sock.sendMessage(m.chat, {
                react: { text: "❌", key: m.key }
            });

            reply(
`╭─❍ *ERROR*
│ ❌ Failed to update bot name
╰─ 𓄄`
            );
        }
    }
};

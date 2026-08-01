module.exports = {
  name: 'add',
  aliases: ['invite'],
  category: 'admin',
  desc: 'Add a member to the group',
  usage: 'add <number>',
  groupOnly: true,
  adminOnly: true,
  botAdminNeeded: true,

  execute: async (sock, msg, args) => {
    try {
      const groupId = msg.key.remoteJid;

      let target;

      const mentions =
        msg.message?.extendedTextMessage?.contextInfo?.mentionedJid ||
        msg.message?.imageMessage?.contextInfo?.mentionedJid ||
        msg.message?.videoMessage?.contextInfo?.mentionedJid;

      if (mentions?.length) {
        target = mentions[0];
      } else if (args.length) {
        const number = args[0].replace(/\D/g, "");

        if (!number) {
          return await sock.sendMessage(groupId, {
            text: "❌ Please provide a valid phone number."
          }, { quoted: msg });
        }

        target = `${number}@s.whatsapp.net`;
      } else {
        return await sock.sendMessage(groupId, {
          text: "❌ Mention a user or provide a phone number."
        }, { quoted: msg });
      }

      const result = await sock.groupParticipantsUpdate(
        groupId,
        [target],
        "add"
      );

      const status = result?.[0]?.status;

      switch (status) {
        case "200":
          return await sock.sendMessage(groupId, {
            text: `✅ Successfully added @${target.split("@")[0]}`,
            mentions: [target]
          }, { quoted: msg });

        case "403":
          return await sock.sendMessage(groupId, {
            text: `⚠️ Couldn't add @${target.split("@")[0]} because their privacy settings prevent direct group adds.`,
            mentions: [target]
          }, { quoted: msg });

        case "409":
          return await sock.sendMessage(groupId, {
            text: `ℹ️ @${target.split("@")[0]} is already in the group.`,
            mentions: [target]
          }, { quoted: msg });

        default:
          return await sock.sendMessage(groupId, {
            text: `❌ Failed to add the member.\nStatus: ${status || "Unknown"}`
          }, { quoted: msg });
      }

    } catch (error) {
      console.error("Add Error:", error);

      await sock.sendMessage(msg.key.remoteJid, {
        text: `❌ Error: ${error.message}`
      }, { quoted: msg });
    }
  }
};

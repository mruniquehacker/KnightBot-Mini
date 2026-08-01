/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['27799400929'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ["LA'SAINT"], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Founder MD',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBD9l3ptYwS8G9ERg0ALCioXFdyYhxIKLLlaVdyc8N8n6MtOP+zO9r4VWVl5Tp485E+Q5ZiiNWrB/CcoCK4gQ92RtQUCc7AowxAR0AMBZBDMwXSnjpbtNV35tZ1u7PZUxFp98KSjILpZou+tUWysjdPt4HLP4NEDRXlOsP+HgvnQ8cynw9OlbmRXpf3r4WIfkwEmk7HKSdIe23Q31XjTONbP4NFVhJjgLFKKC0oRgckatTuIydfoa/KRkeJlQO5mevZPkrdezfTRaNOPGs3KsCuUzp44/d1kOfwafSUYzBp9yi7GkDsNXUFZ5Py9dl9yZ9+GDHNHuThvdyvUWt4bfYqjDAVagDKGWftl3dsX97pVRvdSTOU4luk0dHS4a5dxeylHZ8G1Bc8z+0Lc33+R+EY+b+1tgxx3OF5BhxhYDpKbAXdlOyaLoDqlVcW/LITkJf5MfEc+vBL/H93xtrK3jqrrVeoHm8PM9OO73ZdOVpmuDS1b1WdnNoDmXUyUr9GvzlLwksBJ4ZbWcMJI0EBI8C4+q155cJ8WOp/d1PVam8qf6ENWkj+xdNWsVLnjJit1OhLMJy+q6kpcLPBO3W6XoWxd3D0fcdjnjPrGUrrJzVNLJkf5nLuZba089Q7P7ch0ryPfZ/BpPfNmuH5+7ShGrRaAOf/oAYIiTBmBDOfZa2ww6AEYVDbyCWKv8gJDjHS9kuvCMrkJF6tmyzu2eIUtsVkVVjq398xCv0n3y/QZ9EBBch9RigIVU5aT1kCUwghRMP/rRw9kqGFvg+vgBnwPhJhQts/KIslh8DHVj0vo+3mZMbvNfKk7IALm3O8wYgxnEe10LDNI/AuukHSBjIJ5CBOK/u4QERS8x3qA5GX3TMvC/A8TkMRYW5iR3Cn2jtdlB4hBnNAuQVseBrdIUfQWl4GxXIpKJEqRCH7z+xj0m5DBSYPbSLIqz3FV3QoLR/Fx0WSLcnU0aX293Wd7xYy04VV8/ociHUdq0GuaHGi/eZLMpDBXx2wj91d93c55i282XkUyTz+zg7JtDE2ZVlZylcK6EUYkmzW5ejulsr+/hLT2OH1JgyXaiJ0reiBAFfbRZzBprfuMoe31mgrxpI+alDwtN+FE4pcD48BXO25TjB2r7wkQ1jmNl1rUGnRQzvR6StZ9d3/l4mxjFUMq6VVywuFl4lzMNwumr97HAZgDYTLhRsPhQJgN5sJ3+q3u5geL4luGGOiBDHa5IMrvOeiB5O3JYMjxAjebDmfcaDaeC9+7+MeflbxvNPzquQ6l+wwxel0Q7/X+A/VNjc6F3KP3qcL7wvkXyyzco7285mJ8FhS+aTl3vG9U7eaf6jM+xLqhjWn/sFA0aavV4PH40QNFAlmYkxTMAU3PsOsQUib+dr2DU0QZTAsw5yfT0Zgfjsfc4xeUnu9fKwcAAA==',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Founder mini',
    
    // Bot Behavior
    selfMode: true, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot',
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: true,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      antibotAction: 'warn', // 'warn' | 'kick'
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      antigroupstatus: false, // Block group status posts
      antigroupstatusAction: 'delete', // 'delete', 'kick'
      antisticker: false, // Stickers not allowed in group
      antistickerAction: 'delete', // 'delete', 'kick'
      antibadword: false, // Block bad words in group
      antibadwordAction: 'delete', // 'delete', 'kick', 'warn'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/',
      instagram: 'https://instagram.com/',
      youtube: 'http://youtube.com/'
    }
};

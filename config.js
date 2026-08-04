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
    sessionID: process.env.SESSION_ID || 'KnightBot!/H4sIAAAAAAAAA5VUyZKjOBD9F13taLODHVERzWbAO+B9og8qJGPZbEYCG3f43ztwVU31Yaan5iaSVL6XL5/yJ8hyQvEYN2DwExQlqSHD7ZE1BQYDYFSHAy5BFyDIIBiAjdVzIzHgO6fLYY2PoeWvM3EH71Zou2rnttlxXmCO3PGcoy/g0QVF9ZqQ6A8FT4aTnND4FDhpUYm5Ky7rDkb3xBfsqSJq2V6RThvTC+tt/AIebUVISpLFdnHEKS5hMsbNApLya/Tt0Sjpjyc5Zwi56oWeuyktR7L8WaQfOzcDNzwK5q8TzU2vX6OvYWGVDWeV4vDXW88ZE1tD4+TKlsNifJRqfblvxKHPbY6c/UafkjjDyEM4Y4Q1X9fdPBUbFMGk753NXF2wacr77LKZVYVwFoo+N6s4TRzvqXj+GvGbwRFR8TuTYZrIEtXvk+1+p6xt6zWI1EASpsPNqpCZnSar34kvyg+vnP+P7t6ih9n0lpzFHbbr5qTspi5ZLRt3aiHLzMfXhhqWedaD4epr9Lf+FvaqVTjdIyGM5Ew7L5f+clyZil7t2N6ejzpnyVtYwT36pA9ZVf6J5TAP6n0PN17SQeYI6Ugz0u1FcYxNgrlzeHDWC8P3OzdjEXjJqE+GfNGTM0Hs+Hgtn3fboLat1c6++iuCr/1gb+xqifgvz47OuPEQGPCPLihxTCgrISN59oxxfBdAVIc4KjF7ygsaxeJWQ+WuC/WQs1VDgBdTEXcXJqd3hu968TrTRi5SZCV+AV1QlHmEKcXIJZTlZTPFlMIYUzD460cXZPjG3gbXwol8FxxISdkqq4okh+hjqh8/YRTlVcbCJovM9oBLMOA+w5gxksW01bHKYBkdSY3NI2QUDA4wofjvDnGJ0XusC8q8aq952SH/wwRMnfP0OPZaxd7x2myEGSQJbRNmk6ZHJcMeufTWnzqObse6Gevgk9/HoN+ETOE2tmx/Tiemdajul12M+Hx3yZYwP5r3bSHExnLC5Ov9Zr/8QxEwAL11+rrk64hHunOFr2SHzN51LIaCiYYIea8cQX1Yw3Aezy7qpmZ+BjdlqOTb42l+3uKjXG4mytJ0LDbURNTjfElK9dYVXYBwTSL8O9gMDWdiCmd2aI+IO2KmSA6qM+nsw8t8cZ/wN21/MuySldPtrRNV1SXFq+OoGU368X7pXNJZ0FzXetlM3OlRo+uZuc1mx/jNgunT+wSBARBUlVdUSeBFYSB8p9+u7fxgUXzLMANdkDyTeFGVhX5fFnmBE2VpIHxv4x9vKXnfYeTpsrZu+3kg+LkSMtii/RfOW/+t77hH97cK7yvmX0xi7NNE0m+2VZrXWFSpknougs644ISL51NeQbm+alQcTbUAPB4/uqBIIDvkZQoGAGaozAlqm4SU6Z9WX5IUUwbTAgx4VZM1WZQU+fEL7N94UCAHAAA=',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Founder MD',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: true,
    autoTyping: true,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot',
    autoDownload: true,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: true,
      antilinkAction: 'kick', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: true, // Owner only - blocks all messages from non-admins
      antiviewonce: true,
      antibot: false,
      antibotAction: 'warn', // 'warn' | 'kick'
      anticall: true, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      antigroupstatus: true, // Block group status posts
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
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_uniquehacker'
    }
};

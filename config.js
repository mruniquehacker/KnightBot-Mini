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
    sessionID: process.env.SESSION_ID || 'KnightBot!/H4sIAAAAAAAAA5VUTZOiSBD9Kxt11RgFFZCIjhhEQUAQFRt1Yw4lFFDyKVWAOOF/n8Cenp7D7mzvrSqhXr7M9zK/gyzHBBmoBeJ3UJS4hhR1R9oWCIhgVgUBKkEf+JBCIAJD38yNXsvQ0dgeDWlp3Ops2LOD85QN1rmu8sX9Ks2SpM7iF/Dog6I6J9j7AyCbBxiuhSNMmfNoGmEOt5OD4F78XaP1NE4ZcVpaH1XmrnSAHSLEJc7CRRGhFJUwMVBrQ1x+jv5O43jTIYusHJZzHe5dtWbD85RFuTY2HbN2dtPrLA0ya3j8HP353T4kmhs5arpIX6UBsmZVW5xc+zRv1sl+zHM33qxj22/CN/oEhxnyNR9lFNP2033fm0u+gcnMF5oIC9Fuh4LJmJktj7Jzz2qNMehEzaaLZJ+FnyN+sbi5VifQTReRIxh7yAz8yKt4deLRQCfZWl67BatVmZr/Ttwu370S/5++X7UL1ee7SdKo8OY469VxasRlfuIchRe0EO6oXeXJ1t2zn6QvSJXpE7W3txvb8Z15b2Sbo3h+vubWdWuWq6GajCeKvrptvQ/6kFbln1gKB7mO0iZKb4dXNLqPx6anbBeylvPRMaji+BSuYC9tBpso2Vx62dC0Xq/NaSZXVRu/2oqi3gfY3VRjF7aK4C7zlHU34eblWVGMWs0HIvPogxKFmNASUpxnXYyf9gH06x3ySkSf3QUnZa1KBkfJYuWjHrEYm+jF8qjgSuXnjRabwxOa2Tx7lKQX0AdFmXuIEOQvMaF52ZqIEBgiAsS/v/VBhm70Tbcu24jpgwCXhO6zqkhy6L+L+v4Rel5eZXTXZp7cHVAJxOFHGFGKs5B0bawyWHoRrpEcQUqAGMCEoF8FohL5QKRlhX4NrZz7z77r6mlmjATQB+lTD+x3m4AX2PGQHwncVGS/ki9NBwqL4kuGKOiDDHb/Ain5i9BOs+Tt0ZQdcRNhOBGmHM+I7Ncu/PjFtgP3EYU4IUAEstFzrydtsbDgpPJNVZUWoSSHEvio7t0lbzKsdaNoZ74SHe8xtNb6NBa0cWIFp3Vp9eT4BrlKrptKk3bHl38AASJweHy/cGXU7C9mtJLq/GLVWTNjX+e1JwWDcDDfmkrWrkIYbpbesuHvkIzlO7NiPFdf9hjVWEVGWstMeoT6+WDwUnyVOkv1gY9q7KHfky2MnhqnRIls6wSVtTVVttXQLPhtPPC9S022w6s7x4MNTmTIxyM9T2+MMve0u6c1FlxpYzewHW5T3wovFnKYq/qrETVv/n3OT/Jzb+GntTrdumuA0XMN/FToP3R8o92Zbfjo/4bwc638y2jOHLy7euFhe3TNiXpxcHCy5bXuHFjneg/CwnSrMiyFFZYWKXg8vvVBkUAa5GUKREDSMwZ9UOZVZ10tC/I/ZJIlU5OlcNUVnUBCpY9xcHCKCIVpAUSGFyYcw3Ps9PEDUq0ljUMHAAA=',
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
    autoDownload: true,
    
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

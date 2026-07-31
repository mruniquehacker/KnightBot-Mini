/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['27799400929'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ["LA'SAINT"], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Founder',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBD9l3rVmOaiXIzoiEVQ5GZ7RXFjHxAKLLlXFSJM+O8b2NMz/bA72/tWZFEnT+Y5md9BXiACLdiCyXdQYnTzKeyPtC0hmIBpHUUQgyEIfeqDCaiVgy/jRHAjxp3LATZN8a4a5sYrhEUebppW2w/8g6ZsEuUVPIagrM8pCn4D2OkDZn+4NNcxYquT23KL+c0TrhtmJMroJoiNd7Y5fFx569ErePSIPsIoj2flBWYQ+6kF25WP8NfoMzoyNtJWYLYvpKCqWlnCihQv1WZ9k7PSU+wtpni8zIKk+Rr99ugmM/O80ejYukxD/TTKhXIw24wXU3dxWo4cetlbsZNksfFOn6A4h6ERwpwi2n6574zuhOVx1uwWFWbQvZIsyUzqnRLMk53UaZIyysJpMw71LP4acZz4zPay5kJNUpis7DTtSsyNpEyXd2fZrjihdOl24URysv5MfIU/vJL8r77bM6it3ZMsnmSOuV7kwp7aa2tHu7O4GS29em6vRtWB1Xnna/TZTmvzwGsFlnLrlNsLpqu/vJVFV+1NaZE2gzo7HaqByCw+0fdpjX/HMp+RuWWZ54yRSJVIhwsk+V4ipoYl4gneqX05vVC807slOcbbEs0H54swCjSmi5vFRq+V63h0CPKUXVF2/wa7zmkXWvz6rCiBrRGCCfsYAgxjRCj2KSryPiayQ+CHty0MMKTP7oIDW8vcjoq2osIiSbxNqsr6ojSI3cx2hYNFq4RdLPB5LL2CIShxEUBCYLhAhBa4dSAhfgwJmPz51xDk8E7fdeuz8ewQRAgTus/rMi388EPUj0s/CIo6p9s2D9T+ADGYML/CkFKUx6RvY537OLigG1QvPiVgEvkpgT8LhBiGYEJxDX8OrVqEfd9F11HF1UoCQ5A99UAhmABOFAWWl3mO4ybsH+Rb04P6ZfkthxQMQe73/4J5UefhU7T0/RUzFkVO4Fh+zDPPl3388ZNvDx9C6qOUgAlQrbdzDpPVzPIzIju6rsxiRY0V8Ku+D5+8C7EX7gKuD7q1uu+i6Fgn/sE4BqnIjW1I5oFekYh/W5Wtu3de/wEETEBkrxWhE09iW9lReDDulvPiBs5Jm7rGlWftAKaGzjDC3lAkzxukxlo9niPT2d/hQDtkTYinFjdnoqgxl3OvhC/FgMbKa58thDcUwM/JzE6na+fq8Wv3JvPsbDzYKHtBLkZWsc0aMXbZpWqLTbCykvNBa+x4s82OnljrsXq6N6GJ6fTIlZo0qxaycVyKHAplTXl38HOC0h+bCz3N1SvXf0YIPhfBD43+Q8l32r3dmMfwE8KPxfIvwzl13wisxPSCrtKe51mx1FM0500o11seT4/TCi/k7ioEqauBx+OvIShTn0YFzsAEkOyMwBDgou7Na+RR8ZtMquIY6jq2+6JTn1Dl10DsUAYJ9bMSTFhRGo9ZQRqNH38DoAuMkkUHAAA=',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Founder mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: true,
    autoTyping: true,
    autoBio: false,
    autoSticker: false,
    autoReact: true,
    autoReactMode: 'bot',
    autoDownload: true,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: true,
      antilinkAction: 'kick', // 'delete', 'kick', 'warn'
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
    timezone: 'Africa/Johannesburg',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  

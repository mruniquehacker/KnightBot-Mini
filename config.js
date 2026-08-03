/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['9876543210'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: ',',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VUXa+iSBT8L/2qGQERxeQmAwj4DQiIutmHFhptwQabBsGJ/32Dd+7MbLI7e/et6SZ16lTVOd8AyXCBFqgB428gp7iCDLVH1uQIjIFaxjGioAsiyCAYA2kZjqzGuKc3rEr6YGL1FFRLovUwfJGrb84wrAjnLGpI9m/g2QV5eUxx+BtASzwIB+sGRSTpR35fF8EwRDsiirxhmVI/iIoF5gL/Gib+G3i2iBBTTE56fkZXRGG6QI0NMf0c/dnsrNsjZTXjvNjuG4JxiS2Z0/vqxHqMzvSSnJ0jUlJNSIvP0T+e0mkPFq5prZY+nO/o43EjFZmRrAz5Mp8TQVt2trNF1Yjv9At8IiiaRYgwzJpP626aa2Yb5qmkpildHOW42xd4sl9djWWoWcbanq1GS9N09an/OeKjRKnzWaMNbI2jlpE8RlFaKsn20dHu60judFRT2iaCOyV/I27Tj6wk/0f3vXqmrt3ZekbHdoWmc0vEa3jrl3xHHwRX6j/YIg4vbrXxs8/R37FeGdHqGt7Fhz13A4l4nCYtmXsz4pTruVQ65pZMp7rK/aQPWUl/x/IwYV7/2Llsdv2BF1huoOJ6dN45Dy8xanLQ7cZOzLIzjQLJbwbOXCxkOiRQcfyUXi7WHF6Ol5BysXeXPNXcxXLe8S7K26ujBDWzCIz5ZxdQdMIFo5DhjLR3XBfAqHJRSBF7iQtc2Bihc+wJBplsmpEXqNWhWimcpl5dazLw1UCf3oJzmTXJG+iCnGYhKgoUTXHBMtqsUFHAEyrA+I8/u4Cgmr3b1hbr810QY1own5R5msHow9OPRxiGWUmY25BQaw+IvjP8fo0Yw+RUtCqWBNLwjCuknSErwDiGaYF+9IcoisCY0RL9mFkti16yG3NttXZ40AXXlx04AmMgyyO5P+CE4UgWxvzX4su9RYV5/oUgBrogff0lCLLUH4gDWRpJg6E45r+2988f/Fq4CDGI0wKMgbbqi4+5aOhLmpWRbpqKflK0kwJ+9vMRi3fheRTP75bI7W81TDcGdrYuN5n23aNjLLZTuRjWR6rySv0g+ts/gLT7LMyOnOzqa52P9gqvFnrPduI6zHrDsHeY3OJdukrkOfECYu3wEEXahF9eltpgMoeTu4n60PAWdue0usTnvV0XMHHuivPWVotQhUP0azF1wanXxF2UoocnN39A4s15Wsl1Gaw6m2n56D+0lJvc1M08PgirY7UpWBKb+nK4GCrVJlbYxcsWnB94s56B11ununQ2J+c9sK+BSb8vKvwKU+tU+xlj9Jp7Alv//tO5d96vpD+7v0B8XyT/MoxqtCNNOCnX5qIIcn+zTwyfKbXMXTnVTTe9ozUKpHvkrMJBDZ7PP7sgTyGLM3oFYwBJRDMcgS6gWdkGdkbi7DfFNCWZafeT1jaewoIpP4fAw1dUMHjNwZgfjnhRkPu88PwLqCuXyzgHAAA=',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot',
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
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
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  

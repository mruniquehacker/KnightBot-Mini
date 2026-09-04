/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['241074994897'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Ruben_Ykz'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: ',',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU27KqOBD9l7xqHbkpYNWuGkBEtiB4AS9T8xAhaDQCJgHFU/77FPsyZz/MnNrzFppOr9WrV/onyAvM0BQ1YPgTlBTXkKP2yJsSgSEwqyxDFHRBCjkEQ7A1/cnt6K2COUv7zmlT51Z/kZCIGAMT5nGSB40n9PZLQ4hewLMLympPcPKbghrT5XHhyOORakbxtrx69Vk0HrO43m12q3iGA2+uPkI/mZ9fwLOtCDHF+cEuj+iCKCRT1IQQ0+/R1/yFU+i2GGQ81VWhGRu6e9HzdA07YucQKNIV3e5C0Atl9j361aUh485g1k9naXbJHyLv+69BeOL1I7xVSqPZqi9U66knG+/0GT7kKHVTlHPMm2/rjseSZ5639r40hbF8CbPRQ25OlO285nSFkTX1yr23MEMh/qbum3Gt41AhxGB6ijp7MpkRM7aK3mS1J2Qn4G1kS5qfkFH0lXhIP71y/j+6R6OgXOobaW/ARlpQ4pb26nq/7PhGtmwy71hJgTzlsM7IN+kbdrMuBlukmSMjXjyssV72o3gwmQR5tVIgX8Zqdpkk5Qh/oQ95RX/Hsq/mq6jukbrM9cy5UvV2dJyH74obOOcZIektr2HC447X77vhYitqg5XTe43jexY4g2y6ZgKJR8LVn7pzdrXmGyEtT8bLW0dn1LgpGIrPLqDogBmnkOMib2OSrHQBTOslSijib/KC7Ui++LI9PttB0nBIVYbmSlmecy6PtJ13vwohl06ZHZyjF9AFJS0SxBhKJ5jxgjY+YgweEAPDP//qghzd+fvgWjhZ7IIMU8ajvCpJAdPPqX7+hElSVDlfNnlitQdEwVD4FUac4/zAWh2rHNLkiGtkHSFnYJhBwtA/HSKK0o9YF9Ciaq+5eVb8ZgKWEbn24TBrFfvAa7NTxCEmrE3wR9XN35q2t6J9fe44RnQwrIMBfvH7HPS7kDNBdohpNv2j8npw1QPxJg99op0yGJ2rzWuiO31DYjola/flX4qAIcgcWJ2F5MoGXjwbDWzil74Ex9fHuU8SPZpJFuXG6hQYvaC8Sxleuz6sldMpYnerMeLipNFjJusDw1mbXL6qi069Nm8vLVqKapygr2DS0hC1/TgvYAqr7HSmp0bO7oQkp8VZy6rmKJlzge/O6K4ejle7F6OpKOT8kdSTFTkWoTwul37hms6KPSZu/PCndwHP3y14efM+TlsYRRQUXVc0XR2Kyh/sx60dICzLHznioAvIW5YsKqqqiX1Z0tT3xDb++ZjIxxLDbzZrC7efGUZvOyGHF/QNoHcFWucJz+6XEh9L5j9sYq7S2b2cz5Nqi6ytFSivy7vWW/RcWSKvHmk24aKaz2gI+zEGz+dfXVASyLOCXsAQwDylBU7bLiHjxi+zr/AFMQ4vJRiKqqYpqqKJ4vNvQgS/dSIHAAA=',
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
  

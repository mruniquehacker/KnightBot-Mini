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
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBD9lY161Ri5CIIRHTGIooAKKqK4MQ8lFFjKzaoCpSf89wns6el52J3tfatKqJMn85zM7yAvMEU2asDwOygJriFD7ZE1JQJDMKriGBHQBRFkEAyBM58FK9NcF69OIt02y83rbErhxFqxwejuCHyvCCxp0i9EY/sCHl1QVscUh38AFJe0t2FbjwjudM9N+MxW/SPi9mPuvD6OmqOWOCPXW1iW3n8BjxYRYoLzZFKeUIYITG3UuBCTz9EPx4lky806i5abRYdem7MC77u960T7sclgbY29ejMJbuPP0o/62zqhFuzckbjconMabgq+4oS94088b3+LEe/w1Yy3svCNPsVJjiIzQjnDrPl03+WRVSUGovA1XI2zu1CamrUclQdVu26CizY9Z361Yc5c5JLPEYf0JlW82wvkpHM1HHEjp/sFhv76wKeo2fY0Fd2KOFyIXPA7cZe8e+Xyf/q+WJBizF2KhKZm7ayyQ3AYM0nveOurVEWZuV1HecpWXjMNP0c/rRU4iaiQJuuyHq0vLNQjjgsMUyHmtiCdVFX9ZXSoZjfugz5kFfkTy/s4V2lga0Jvk2QdRHZ3u7lzMYvrIO/L7qw8XKMeUypOmockbdKV5db4lVbHzCtw76Yeg6kibMfhsZnbR2w4kn4KTquXZ0UX1JgRGPKPLiAowZQRyHCRP2OS2AUwqjcoJIg92wuCMxwMUq2+rJZ+LZ+ni9XAiGfj/i6A/Xiqz3Xr2FySzVkstRfQBSUpQkQpimaYsoI0C0QpTBAFw7+/dUGO7uxNuDadyHdBjAll27wq0wJG76q+f4RhWFQ52zR5qLcHRMCQ+wgjxnCe0LaPVQ5JeMI10k+QUTCMYUrRrwoRQREYMlKhX1OrF1HbeM8OBjNbGYAuyJ6C4AgMgTBQhD43EBVZHfJf6ZdbCwrL8kuOGOiCHLb/Ai39i7JWtPTtkSqIsqRwkqLKA37If23Dj19sW/AIMYhTCoZAn3dmariaT8ypyNhiOtUmiaYnGvio7t0mbzJ0mHu8kovv+p1CmLneqWqq0IotRfatbelOjHuHWIXUO6T05R9AWiHh3pgfeq9JHU72F9XVFZFfiWPYZwbxp3YB13q2W8bLUrhb3qFPYnkHbTedGlwwv5q7kudohNXOfdfzR31FkhL/dEiSlzZbhGocot+TDazElC/x6uDV533C7XbETXaeMVa9pLkb18wz5FWq22fZtBz3vp6onHDpS1jw+2Qdd4JTjM00PVe+XXSO3s1Bwmyen7U3Az8HKP25uPDTWq1u7TXG6LkHfir0Hzq+0W7Nxj26vyH83Cv/MpujmHiCfJUMj4+vy9Mr1z9Skuv7JnbSjW9791EYXxvoxMLhCB6Pb11QppDFBcnAENDsiEEXkKJqrWvmcfGHTLq2MHUtmbdFp5Ay7WMcPJwhymBWgiE/UCRJVnhRevwAwqHlGEQHAAA=',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Founder mini',
    
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

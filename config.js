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
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VUXbOiOBD9L3nVGvkQUKtu1XBFARFEUVC29iFAgChfhoDilP99i/uxMw+7s3ffkk7X6ZPTp/sHKEpcIwN1YPYDVAS3kKL+SLsKgRl4beIYETAEEaQQzIBjsNejGIu1MU+tdn12B4dQC3M1qxXTv2fqY654A3l60DP5BTyHoGqCDIe/AaR73RIGHtRXaJWw5UByzIdbkvvIDeTFyLrvuuta8FjOdeoX8OwRISa4SBZVinJEYGagzoaYfI3+1TwZrtTw+5AZ6av0dCtSB90Q3+ysw17gCMbhQAyY2zUbf42+WpeWE1+0Sao1reNCMzTEgMzh2UywKTk80vxjS/HcWsrv9GucFCjSI1RQTLsv635TdTeq8uAS+i7Cy9O1nfDy0b+sFpOAX0YlFc+sv5DclcZ8jXjxuC4PN9/nDNb0FzkfNLUwPSqXgW0qK7alSmxtHqru6vzkV+I2+fTK5f/oflKWj5OhOq1YX6tB4I0mpZxDT942fhxG5sJ97cxpS+dmkXyNPoR3J9icGFKiw45bKoLK4NF9rW06JuuEhxSXXntX9QnnhD/pQ9qQ37FkU09JirE2crPSy51CrulSGZS7o81yTMZQV7zwr7SZJB7tjglZnA3FWd2YIFH0Qxvk5m40bWwEN5GSQNFXDI1RFHx7efvRBXV6BGbscwgISnBNCaS4LPqYMAQwah0UEkTfxAWrHPmSSuV9emmzZSip7WmaHuYr57atGouERAm6UBEnHg5fwBBUpAxRXaNIwzUtSWeiuoYJqsHsjz+HoEB3+t62vhjPDkGMSU0PRVNlJYw+e/r5CMOwbArqdEU47w+IgBnzM4woxUVS9yo2BSRhils0TyGtwSyGWY3+/h8iKPqIDUEGa2qTstJgnYIZ4POMPTtgCEjZ9HB6EZe/6ctcTvRFkli9jh88+uwIUYizuk8wRK/bbrdEakaP5HSSHVk2ZLnX5pP3Z/vfBV4bsdZxWLveLwND8Hm4E1NeLdoLxSEnjkp8Ds2JHtF9nvwTCJgBKRa9+LLZoen2flcfj11thNIoORuvuRcvKHte2FvL2pxdxh4QIbls7dCw143hBil+jFdQXml7e6tyKqX67iyNLOTJ8valrxahFofo12JNs8epeMzFxrE5phw/rlGcIkhuyioouMMe0s1te1+NGfUR4fPaUE9JYuvdehzTYH5Q/Fsl6fmBOygyB+eDbMPBgk3ld2PmbxOBIzADU3bKjbkJK4x5acZ/r7/d+sbCqvpWIAqGIHvLklhhLHLsVBDEqcjP+O99+HPCso/Nht/c1+P21xijt0VRwL7af9Z5F6A3JPMc/gLxsXn+xSWvTlfcJ7RMxdq3ceNF3AWV0b2ShPWpsJpW1EtesedacBBK8Hz+OQRVBmlckrzfJ0VEShyBd6vKP2dgj3NUU5hXYMZKksDxDD9lnn8BH9Cy2zcHAAA=',
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
  

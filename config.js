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
    sessionID: process.env.SESSION_ID || 'KnightBot/!H4sIAAAAAAAAA5VU247iOBD9lZFfQUMcLgmRWloCSciN0NBNOqzmwSTO/YZtkg4j/n0Uenp6HnZne9/ssnXqVJ1T9R2UVUKxiTsgfQc1SRrEcH9kXY2BBORLGGIChiBADAEJYPvkbTsHLs6KEnat8GKOClMerFLdmTvMoPwsrw7w6RTl2QO4DUF9OeWJ/wfAs+I3m7j0Sq+yRvPTau6UXjAzrvvZDq3mfKq3E8fwO8FuFw/g1iOihCRlpNQxLjBBuYm7LUrI5+jPZO+4gaFIz6+BWFvddpQbA23fTrzNHM3sdWuEgWFf3ZUy+Rx9LoxcDRUULuvAsyxuP/CMJJ8mbqNpAuEXxZjbqUJg7uDkjT5NohIHeoBLlrDu03131nGSqtHi1YwMF6tx7q7MlD9iyrpVHONdqfMnQW9SVaWfI45nL7mWIms0Ee0SLpMyW1yf9Cg8T7VYs6PBlYPqMU1tOW5/J74l717J/k/fzXXYvqxdxYbWTlwwPSidqDxx9rjeetjA3K6RTaq+EMIrn6Pv1jM6FkcjrnaNZ06NbMyfRqLZXAti64Y+J04OX1u/IOPsgz5iF/InlsFubUe2SjbOFUY0KrT4UE0KTn/cnyzuZOoZyynuvP1rXmzGaJW5OnHZoJzGC0UX8Ito+Ni5jB/rimXu0gyRl57UOHq4V5ThTg+ABG9DQHCUUEYQS6qyj42HAAXNHvsEs3tzgZ35Uev5pmNOuUgfn88ZJLJiDxBTrLQOmgl09qp/3AoH+wEMQU0qH1OKg3VCWUU6G1OKIkyB9Pe3ISjxK3uT7Z4MDkGYEMqey0udVyh41/T9Efl+dSnZviv9ZX/ABEjcRxgzlpQR7bt4KRHx46TByxgxCqQQ5RT/qg8THACJkQv+NbPLKujbbokqVKE9B0NQ3OVIAiABXhBmcDwf8zwvwb/o17YHRXX9tcQMDEGJ+r/AqEiAyi/7FmNGv9C4qsEQ5G8A3FQQ+BkPx9Mxdwfp47df1PtMAWYoySmQwNIo5MzJlopuGpeNrWkLJVosowX4KPXdMW+adDbUpvG1HZ2my9LQZ1DbzxTbn8FtfF2eODrPu+hspc8u7z38AwiQwHSiuSbvrTd0ELNrd9Acmb40Gs6otc4ccnVl5jfnQLAILx/XbLC3UuckH4r1ZbdUH1c6FQWiPs6bdFCfRxurPexYvVg89NkC3CQ+/j0ZLLa+XXpCyMs+72zXbi5ms02tbGRy1C6h/XysZWer8FDMYGIcXa3SlO017uaYibpsxY1ilns6mfDtGno77BycQxK3b16+z1L+c4cld5/1IvbXMMH3lfBTrv8Q9Y127zzuNvwN4eeK+Zcxlf10s7t4vrjlB491t3fYLrvEq7XDniZ+W8yt7dGvzGQCVVaA2+3bENQ5YmFFCiABWpwSMASkuvQ+1suw+kOm5cLWl4+R1RedI8oWH7PxlBSYMlTUQIKCOJ3OpxwUbj8ARQiKYk8HAAA=',
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
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};

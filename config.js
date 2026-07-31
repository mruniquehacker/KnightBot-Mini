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
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBT8l3rVGLmLRHTEoIKiKN4QdGMeCiigtLgXoD3hv29gT3fPw+5s71txisiTJzNP/QRphiu0RHeg/AR5iRtIUXek9xwBBYzrMEQl6IMAUggUIKzNLD2hTSZccrHXywp7W90Xi2ThXHXKzpevWD6GaKUHrvACHn2Q1x7B/h8AsRz2Jt56LZ4MlvNI7RTcSjjpNE+waMRkIIVXMq/n26t2fQGPDhHiEqeRlscoQSUkS3TfQFx+jb6ku7I55blewTVbzFyvLB2ddHrC7FLQBeM13a5yYhKBddSv0b/Bgiz241XEteIy2B6HF1Ft7j3RXFgHex3PBWw0Neq1t2v7Rr/CUYoCI0ApxfT+Zd2XG3dk8PlxTmZnUm5YeTOwduz2/Loz2ZgJd0yZm2crDViX+Rrxy9ksDMiXxmU13QiBbtk0v0GXvvbuqKSJ2rDV3NOS61pjfie+Kd+zcv0/ure6J8HEHPv3xWrhp5k5pftTY3D2brKM1jzSpF0YRLsk4OWv0WfqE+8XweUSC7XF+2izPC9ce7gYcYPpzVqVO7k3nPMTP+Svn/Qhrcs/saybaX0jR4/qY1c9nl1zw1dISOz57LJfO4zUFotaGxtlcrbsiI79lglJEg0ML9mcI31Oi0iWYsvQfDeuVgy73XFcG21fnhNd0d0IgMI++qBEEa5oCSnO0q7GMUIfwKDZI79E9CkvoPMZ3g1LW/f3Tg85i+vYaQaaRjCcCtOiwZLZRETQDzXKXkAf5GXmo6pCwRxXNCvvK1RVMEIVUP760QcputE347p2PNsHIS4raqd1TjIYvLv6fgl9P6tTur+n/qQ7oBIozGcZUYrTqOp0rFNY+jFu0CSGtAJKCEmFPiZEJQqAQssafWztJAuewpv6UphLK9AHydMQHAAFcEOZlQVJ4AVZYb9X39oOFOb5txRR0Afk+dNQZnlGGLIiJwkjTmG/d+XHB7sOLEAUYlIBBUzW5iGSmbG2xItqtJrNVC1SJ5EKPqd5j8Wb7OTE2KNL6xF3NMTumYsdu00uThyMB+u9WPTgzvQK63hwuNXLP4AABWiWim330HreDeX7++vtYoplcvAcMhNvO6soSDGLG3oaF6/jitsuGPE4n/jW0e45sTYbBdaMiem9Jb7E38JVu9ckWZ22L123ADXYR783k4TBbtsUsertbsM2Hxzko5ZtY92QGI8ItnGwB+I+V+00d2a9PJBOBBvtEt6mqTup66Ml2TO3wq1hQ9ZrzAuGjJ69B/a5MOTXQ4WfUep86j5DjJ57n8LOvf/y7Y12Fy7m0f8N4dc78i+7OD47a31zkmficYAEwgXZkawWGZu52/DVrmGTXPecdCE2Sy/g8fjRBzmBNMzKBCgApkGZ4QD0QZnVXVqNNMz+0GyiVobaRvtubgIrqn5uwAEnqKIwyYHCDmVRZHmWlx5/A6rPfQo3BwAA',
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
  

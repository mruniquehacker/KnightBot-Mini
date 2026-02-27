/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['91xxxxxxxxxxx','917023951514'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBT8l3rVGAFRkYiOWEDwAigiXjfmoYQCSqVAqrg54b9vYE9Pz8PuRO9b3SJPnsw89QOQFFNkogbIP0CW4xIy1C5ZkyEgA7UIQ5SDLgggg0AGot7Z+OptNchP1+l2qJjQmOyE3pUtFz4bPZzSgTMFLUyL99/Aswuy4nzD/h8AdShNAltRz4axuMbogo9Zfx3pdeZpZylSxKkVV0mAucqgb+DZIkKcYxLpWYwSlMObiRoH4vxr9PeOsu6g8ajm6FAosXkTjUnEJ8cLJz3Iw/PTWJhL1nrIdtzX6Pf3m6JwFnd83vYepUYb3jfMoDktDufVfHwQprnb1zMdGlflnT7FEUHBPECEYdZ8Wfe5NRan96Cu0ru58jtq5cfWYDaWBvujRNVhddEt95iZvjnTv0bcdY+9TJWqgz3x0MGSzsJIF4vJqB+iOzda1Fq9zVeRQLeP6+/EnfwjK9f/o7tvbPbplESsuSTlMj3fFK6SiqOdmsbe0Iz7g1/XJzgThzPxa/QPq+quimacTkh8nZQlsasw8/Yda9dLBtZlszHZZLFazOu1/0kfsiL/E8ubFXpNgsRGQAOu7MWYogfsPSrqK3YUu+VoHvWUbGc6Ro8b2XZF8R6aO0tbc+Pdfdffq4vpmIzUmapRnKQhPqzS9WX99uroipp5AGT+2QU5ijBlOWQ4Ja+zYRfAoNwgP0fspS7wOjrRz3R+SffzIlNsTt2LZOjUu3ula+7SPO3odYgsvd4qb6ALsjz1EaUomGHK0ryxEaUwQhTIf3/vAoJq9u5bW63Pd0GIc8q2pMhuKQw+TP24hL6fFoRtGuJr7QLlQOY+jxFjmES0lbEgMPdjXCIthowCOYQ3in41iHIUAJnlBfo1tFoatLoPeN7ce8sR6ILk5QcOgAyEvjjiRuOhMB4OJFka/UW/VS0uzLJvBDHQBbfXO37McbwoDKWx0B/3++3L9uL5i2KLGCAG8Y0CGWgr6zY8Xye605BY4qZTxY4ULVLAZ0sf0XjXfludLousk3UeUeCqhqcGXK2MiwRO863pbe8WjpdBViexJr39CwiQgXEhJt8LVcU1yw2BgpMqJFWmtS0U6KIrNV3rq/s5Ngy77lCBzXexdjDI0dsYZRDZJ5U0oZfdpxIMsWIvl3dDR7UWvbXVAlRiH/1eTCmbret5tWvSpICi3/jrXme8Vo0AD5Gud9xN7I57SSIuZpwuWcpOLLWH67BF2avi1E0fnj0pieY+DtYkHUS5s0IzXL2H9jU0t5+fFX7lqTWr3YYYvWafwNbCL5j3zrwNGffs/gby8zv5j5FUd/b02MDwHlJxtl272+oQ2GvnnCXxndeuvInF1DtA/5SuS/B8fu+C7AZZmOYJkAEkQZ7iAHRBnhZtauckTP9QTFO4uRJF87b1G6RM+ZwEDyeIMphkQOZHI0Hg+4Iovb9y8jSbQRq3Kjj8MQ7B8x/9mouQVgcAAA==',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
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
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
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
  

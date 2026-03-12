/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['604293040','917023951514'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBT8l3rFGFFuQkRHLOAdURQRZWMfCiig5GpRqDjhv29gT0/Pw+5s71tRnMiTJzNPfQdFiWtkoBYo30FF8BVS1B1pWyGgAK2JIkRAD4SQQqAANLsX2Lqwq227e+TJbXwror7QrNxalLK7UIz8Ol0N5+4mrd/Asweqxs9w8BvANm3JJB1AU10FA2GXVOv7xHD7m6u24rS06WsokNz+6ZHO1Dfw7BAhJriIJ1WCckRgZqDWgph8jf5iusAzsue149zF00l5G4Ubd5s+WI4ZDG3hgVyENhlt4XHxNfrGxNP9lePlE0feFKOzHs0ufajLI+YersZTNePCWWtAN9oG7/RrHBcoXISooJi2X9bdXbInViS78TloTkzoL87Gla/4sh0xduFbQdG/23wfm+Lhi7pfyGxfWWi5diBWB80kECGNWj4wd7GQbViPOyOvLW1+l95+JW6Rj6yk/0f32zIiy9up3TenDRvC1GwXWRTt7INhrWrTmQ01LyuPUhKxztfoXzHjVlmOEHMipD/fBFiXOEG6V9pwGfDcmhLVczjWsnD5SR/ShvyO5Tg4i4fK2Plr7nxKSjd63LGlCVtY5tdFOy+qprnr50UibzN6Fw9UFj3RhX5jhHg7cWb7VMRO0ZwclcVQtolXXu5svH17TZSidhECZfDsAYJiXFMCKS6L150o9gAMrzYKCKIvecFh719XJ8jk0EFDz1Fzv96sl7Maw7U0YowD6z0E3kuQpW3fQA9UpAxQXaNwjmtaktZEdQ1jVAPlz796oEB3+m5c144b9ECESU2doqmyEoYfrn78hEFQNgW12yLQuwMiQGE/rxGluIjrTsemgCRI8BXpCaQ1UCKY1ejnhIigECiUNOjn1upl2Anv6uZOXo440AP5yxAcAgVwvMjyQ5ljeVYZCn/U324dKqyqbwWioAeyV9VA5lmZl3l2NBD4UVfY3T9/8uvgQkQhzmqgAN1wa0GYrCYru3qY7GymmrGqxyr4nOcjGO/C53vNcFeXeRPkeMCp/Q29GEnQEv5wrWW5L/THbLDWjMM0S9/+AQQo4Li/347eZZYb4nzlTw7ydMy3N8fXCGZCWw1NXeS1VvIMYze8Dp3EvjCnWBytTfXg5sF8uLwy59yfGvUm0+hRbgezJVTVt65biK44QL82I7zj+tcpP3XaqXDxiitHmgtZSzs3XvGS2wh43Q6txgrtw2RKY1nYmqaZnZtNxenb2Mq3XiXxWTvROfNxtPeayeRe8iOyr5XJfjxV+BWmzqnuM8LotfkF7Pz7T+feeXf5Yp+9XyB+PCX/so6al97sDIuJVCxLGt6sB4G4PJoXZupLVhQx0U2ej7d2tvM88Hz+1QNVBmlUkhwoAFdJWSDQA6Rsurwuiqj8TS9dWyzUOF50c2ewpurnDuxxjmoK8wooA0niOJ6Th/J7lUXKag7rBCjAclNBA8+/AaiTGTJQBwAA',
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
  

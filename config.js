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
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBD9l3rZB40ZLgpoREcMchNtbgIqbuwDQoGl3CwKRCb89w3s6el52J3tfatKqJMn85zM76AoUQ3X8A7m30GFURsSOBzJvYJgDhZNkkAMxiAOSQjmAC3sWGp8d3JfuE7NHfoTNCtL1nNtjxc3Y7o4tQxEmyDeiS/gMQZVc8xQ9BvARsBZsJnYmiHujxKJjD1nldtK3cJrNhNGPTdVzqHSn9d09AIeA2KIMCpSpTrBHOIwW8O7HSL8OfrXNefJB5VCVdbxVmKtc1/TT5wtV18TeBMXs72ctftgY+/0z9EXljAbtUvrjCGv6r7QeVC3sMGzFhxJDH1SvkZdHe1lRRbe6NcoLWCsx7AgiNw/3XdniX2b7fkz7fuhGTBbu2kLP1+Nenl7CXweM+ZZWAnllrl9jnjtF5Ogso7+qufXtNgaSue5rur4UZITIiTbM3egAsP6muq/Erfxu1cu/6fvO4tPL745WzXrjduGx6ge5Yd2gVblmp24W4o9tUzWRfh6cT5H3/Ok2ZTy68y7noluc3a1KaiV+po6zKnYG1q5qe47TWMYuf6gH5IG/46l6R7P/kozHLRrXw1ptDDirr1p1M20Fzt5tOcvsJYCXjaWzdJJvmLF3EdUm3WrotWh7Pp+VMv8eST0hT7CWddIs8Utvb08K7rAux6DOf0YAwxTVBMcElQWz9iEH4Mwbl0YYUie7QXLGyW1nqTZ8HU6cTKW8kh/T0ztvBnpk16i7rraUAY2V7PyBYxBhcsI1jWMl6gmJb4bsK7DFNZg/udfY1DAjrwJN6Rj6TFIEK6JXzRVVobxu6rvH8MoKpuCuPcikoYDxGBOfYQhIahI66GPTRHi6IRaKJ1CUoN5EmY1/FkhxDAGc4Ib+HNqpTIeGs/w3tYwphswBvlTEBQ/owIzoXhW4GZz7lv95TaAhlX1pYAEjEERDv+CV/EP9VU0FDAG2duzGcNyU4GaCjOOp+fctyH8+Ml3gI8hCVFWgzmQbMntQ8VUrFf+GhuaJqapKKUi+Kjv3ShvQmwUg3YnG5X0eZjYR/3QyWhkOL7j03rJBvK19JzRVOEX5/TlH0DAHOwD7nKdUeXipHcdKmcHE8YB4xMWIW/XJdTF1eMw8Ly2qWyaXpGszC1Ly++d5RnE3LoK7mO/EFW1zFFOTzWyuuSi+DJki2GLIvhrMqhS6sHZzjS1wyek04JYMc151/TuLaCU3GG12DevfuKz5G5XhxBLqs2KusuYe1UMezOAK1HJ9X3lbLLAoy/HpQZT8c3CzxHKfqwu9DTXoNxwTRB8boIfGv2Hkm+0B7tRj/EvCD82y79M58LfyKbfKJtjNM2LnrlrkTNpz4qqqKa7NhmRuyqU3WysWzABj8dfY1BlIUlKnA/rLj8iMAa4bAbz6kVS/iaTJBq6JKavQ9FZWBPxYyA8lMOahHkF5jQvTFmOnU2mj78BIUwijUYHAAA=',
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
  

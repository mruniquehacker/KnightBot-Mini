/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['201144534147','201144534147'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VV25KiSBD9l3rVGLmjRnTEIoKgtqiAChv7UEIB1RYXi0LFCf99A3t6eh52Z3vfirqcPJnnZPIdFCWu0QK1YPwdVBRfIEPdkrUVAmMwaZIEUdAHMWQQjEFjiZRjE15Fh6nJBCtyr+lhd1vNVLGtg3qt0FW2a2SuPEgv4NEHVXMkOPoNoL45ScPEFooqkLzbWqzcNQmze3B5I0asVKZnoUEoxOt2e3oBjw4RYoqL1KgylCMKyQK1a4jp1+jPLHLkFc+L4IBXFBLuXH6uO+19/RpDauWeh7feLJjeZ376NfrNW61vpsdTcpW8Rj1Nj+VeJPIy3PH3ajWc7QYFwWfnogcG906/xmmBYjtGBcOs/XLdjcUo16diLpNM13c7VzOJaveK8IhtO5lnS5gs7TCmveHh+jXia46MjmEZy8nJ1zINslu5tS78wtYLRNpJ2HpHapiDwdSMfiW+ph9eOf2fuvfsIn4V21Ueh6LLwjdXHNL1fuca5tudHHwn8+OLdV2OUK59jX4rOVuaBR6n5cyBB3x9Y7kgxAPSq01qcXWPv7anxAzmrf1JH7KG/o7lwbb2WaX1ZtrGWjVXbrUkMzz1XyXTdotVNGER2gq98EDQZrJzAgNZzk1f+Za/G2xzTp5c6DHzFtvR7Ryvl3TEQvneTtOXZ0Yn1NoxGPOPPqAoxTWjkOGy6PZEuQ9gfHFRRBF7VhfMe6HixE6PTELxMmDiaMO9+T2SDuQ5PfV8V0xpULt+qyj2C+iDipYRqmsUW7hmJW1fUV3DFNVg/OdffVCgG3vX7RmN74ME05r5RVOREsYfon4cwigqm4K5bRHp3QJRMOY+txFjuEjrroxNAWmU4QvSM8hqME4gqdHPBBFFMRgz2qCfTauXcVd30+OnhjjdgT7In3rgGIyBwPG8JMmixEvqWOD+qL9dO1hYVd8KxEAfFLC7DXLQB+T5guclZTjiRUFSFH4kd4+6g8dPsh12jBjEpO5Gzbq5ZZVkGos9ukXcbKbZqaanGvhM7sMk7yrccg+X8kyV58lZIaHpy7whivK8WXp3MlHu99DYxntFopPy5R9AwBhcWzMrr7Vp3zF28l5wvGFEh9VK0E66Lm1OmVqsskEq3Y+qqO6NoZrSVjpbC0JzbGhTFAT71eYKlUKV0yAxj2lOjcnmpYsWowuO0K/BSp4sBtagMTPXOmyId1DIfrSebqStpJ6V4EDSe7uyZzNFvdK9L4tO2mY72bWC9Ymbm7VU+Uq0OCflQNGWJBcE3o8c/fpu32f7kB9jCz+d1cnWfSYYPafAD3n+U8Z34p3buEf/F4wfc+VfenMShSfp7GybnntQmmq/3TnxdjXquUfMDeUNqofC1jjsmmZxheDx+KsPKgJZUtIcjEGdHyHoA1o2nXftIil/90ea2LaupXqXNoE10z77wcM5qhnMKzDmVVUUBHXIj95vrWlZWbDOOlsupMySwONv76D5dFwHAAA=',
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
  

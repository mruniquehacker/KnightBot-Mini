/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['233530345009',''], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU2XKjOBT9F73iarPYBlyVqgaCl3i3wTae6gcFCSwbBJbEli7/+xRJJ+mHmZ7Mm5Coe889y/0JaEY4nuEGDH+CnJESCtweRZNjMAR2EUWYgQ5AUEAwBPFUHG+L5elWFPVJMrTkugls3jRZDkurqSfHTSoZR4N2r70HcO+AvHhOSPiHgotFLm6pHQWSlJ7Rfrya1la/T8vDU+ANKpQrTyhRSejND9MHcG8rQsIIjd38jFPMYDLDzRoS9jX42apJbtcVG437NxuH8LE6bYqlEmXWlC7W7lh0OR1du/vDJPsafKniSlovrDJf73NyyOhjWdulFxlwnSBjpTVVUeiLC9FH7ht8TmKK0RRhKohovsy74/S8CEtHP/aCg8mu2uxkzBcHDWbRZOGltyP2WWyjqufyrwFXwyW/OsF4QDVxUG6KzCsziR4fu/1SSq18nkej3VM+HRzV3u/A1+zdK9f/w7tkPd/kfijtEl/yTJopunM6n93nnaou44M5mm/DXHXPE9v/Iu9sNq/SLgzHYaOMtx6jmhKKZoOg5iI+M6pt+TSYVhKKvewTPhQF+xNKZbMSzAnJarlgWaCk3FRe0g3PCsUWVjfK0FJf1W7k1W7PVbYvZeLAIKoCRbV93bosYc6YtTFuz09GMDJXqT8+VJtL/PA60RU3UwSGyr0DGI4JFwwKktHXO7PfARCVOxwyLF7pBZfp3HcmdnKwV/vb41iJ15dr8HitXwI0p41WBoZ9PLDpkUj+A+iAnGUh5hyjCeEiY80Ccw5jzMHwrx8dQHEt3oRr22lKB0SEceHTIk8yiN5VfX+EYZgVVOwaGjrtATMwlD+vsRCExrzlsaCQhWdSYucMBQfDCCYcf0yIGUZgKFiBP1LrZKgl3ujb+5HhmaAD0ldBCGotqWl9TdZ6fVk2h/p3/q1qq8I8/0axAB2QvP2l6oaqK4o86CmmrA317+39/QNfWw5hAUnC29xMi2lx8ifuXM2p6Y7HlhtbTmyBz3nejfFGvLmNuxtU+7sasfJINEkkTCjSLWO7lzOtDStzOdzo45XvPvxDETAEuwWr15SevEzXNpM4nZEwGJl8oYTZCW+3FxXFMvYM/VrNkNq9SEe5HDwaNhUsPPc2+4sVDvYzabZcwZW069mjWqxKZ/PQdkO4JCH+vVm3f554AyM9Gn129C7cWB9O8dG11Uav3Us1aSjVSGquDygsgouabC3Xn7DEwqPtNRMvjelMamHOJB6MB5WQ183VnZ2rN8u+Rib5tarIq5lapdrPiODX5FPY6vefyr3hbv0l3zu/lfi1Sv4ljnbkB2t5Eu5dfoS60hNddoI6im63mcx7JyOyZvZ8fF3Vl8QG9/uPDsgTKKKMpWAIIEUsIwh0AMuK1rBTGmV/WrCWP3Ws2GkHTyAX1mcIPJJiLmCag6GiG7Jp9tWBef8bTfh4sToHAAA=',
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
    timezone: 'Ghana/Accra',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  

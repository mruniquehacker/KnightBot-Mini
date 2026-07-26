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
    sessionID: 'KnightBot!H4sIAAAAAAAAA5VUXZOiOBT9L3nVGkWQD6u6ahBQERXEL3BrHiIEiCDBEESc8r9v0T3d0w+7s71v4ZI699xzzs1PkBNcIgs1YPQTFBTfIEPtkTUFAiMwrqIIUdAFIWQQjECs3lPdJZuhODeEgzqzE112eCvYGcvreFpDb21oc28aD/fkBTy7oKhOGQ7+ACiuBVGTRLQ+VEGSq4GWcsepL3VOF5ttF7Ksebzln9ZcMotfwLNFhJjiPDaKBF0QhZmFGgdi+jX62HEMcrX1K+rxqVj2/ZpVTjVE+VT3ZnvUyRQk7HpNIu/qr9FXx3G2hPfJODK9ROh4qzhn5mJeV4u5c/LM5nIpwv1xR5UmfaNf4jhHoRminGHWfFl3c3G75/q1qDVuJXs5OSRseGf6sdM7Dpg/VCaJMsyUfm5Myq8RH+ytAeuwyuWcQXqca0q9nt+jrX8VOn2e7Nb9VO3pORP4Q/CZuEPfs5L+H919KyKbeOcv/Ucoe8NLUt+W+qy4rwxX6Nez23HTYVP9uJ0Oll+jv9s9phc3X1Px2ijZyVfc++EUYtH3dTbRtvXC9C7S1u2fD590h6yif2LZUezHWY2V+kg3+vmAUTFZ8ZuOdpld7b4HmzAM7ZQ3sNsvj7HmOtp1qKWZebqIe2jeH+OdfRIna0dWTGROE5zeToETqy+vE6WoMUMw4p5dQFGMS0YhwyR/rSliF8DwtkEBRexVXoDlQY/K65WY7qFWL2XdYGmu+ls9dt0Fmh0XQ7cXzObmRi9fQBcUlASoLFE4wyUjtFmisoQxKsHorx9dkKM7ezOubcdzXRBhWrJdXhUZgeG7q+8/YRCQKmebJg+09oAoGPV/lxFjOI/LVscqhzRI8A1pCWQlGEUwK9HHhIiiEIwYrdDH1mokbIV3ZGfmyBwPuuDyaggO20hyA0mURWEgycpI/F5+q1tUWBTfcsRAF2RvtwR+KHPckOMVTpbkkfi9rT8/+LVwIWIQZyUYAW1ZkYdExsbcmSeyMJ2qRqxqsQp+z/MejDfh2XYpBYUuKXa5WUVWrSoPwVwfyh6Z31JLJD2f85q56ttj4eUfQNpULWm/sAeM14P5sjTZmEbBzFk+rOnmUMKCEJwUy0S1yLlxb3uXWpJgkrvUVMQzT0uHP0T9a41Ki8fxysgnNY+btVa/tN1CdMMB+txM0vf2pFicjUyaeyUby6iHx1APe5Zr+lT3D25xP2uK0rHymlZRz7Yj0d2QLT16afyI/Hti+xCfCZ0OLVVPeuv9apXEb5F9XZns11OFX8PUOtV+Rhi9bn4OW//+07k33m2++s/uJ4hfT8m/rOP4tHvYvLXu9LbUOHtNqTpBRzMm1BG101Crrs5gtZfxeqrHCDyfP7qgyCCLCL2AEYB5SAkOQRdQUrWBNfOI/KGZpu5MI45X7eAZLJn6ewm2+IJKBi8FGHGSJPCcIArS2y2HkmIGywSMAH/JuPMGPP8GLhgG8VIHAAA=',
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
  

/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['2347079629658'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['☥ℰℳℙℰℛᎾℛ☬ℕUℰℒ☥'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: '☸⋊ℕ𝕦𝕖𝕝ꈌ♖ꈌ𝕊𝕖𝕟𝕥𝕚𝕟𝕖𝕝⋉☸',
    prefix: '!',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU0ZKiOBT9l7xqTYOCClVdNUBjCwpooyJszUOEiBEIkEQUp/z3LezpmXnYne19C5fUueeec26+A1JihuaoBep3UFHcQI66I28rBFSgnw8HREEfJJBDoAKmnRrLW4nQbknR86ZoGWqBr3gExy20eGO6NIxRJlwz9gzufVCd9zmO/wBIJgMaBW1JJ69SNPenOnwaytJ2OZy9hS+DzCNPvuMas0sQxM/g3iFCTDFJzeqICkRhPkftEmL6Ofq9xYsdsjCB69uER8rNcxVr4RUosBxt+BpVgS/at80uvonO5+jfqqaXi8fjwW83rv/CxG3lj6/+scm2h6EdM6sud1eiXEZT7Z0+wylBiZUgwjFvP627byzGij29yZvedAGtQM+urRPgJOOec5wI19lVWZtGj7Pgk8RrqwzGmTssY3Gfn0KjOqfRwqvgKx31mlkPxS+0Z+91TzxZvxNf0o+sZP9H90BLBhJKMt7GaCX4o1CvCnOBhp6mh3lkjiMhIPHEJPZM+hx9JdCzQw5j0TKzPePj6tJIrmIEkO2WueCL/vAsXDyN9AbSL/qQn+mfWNqV3JgJ7RmTk5bUiwgrp20PrXNML6K8IvumlVm9mS9X9VZc7X07zPk2eVo4Y/nUSFZgpxjLtruInTKhWxyjc1QiY/X8mChDrZUAVbz3AUUpZpxCjkvyqIlCH8Ck8VFMEX/IC8RTYPbKne3Ueblb63k6K/R9aEtQ2rEbrFKd3url1L3IT6tn0AcVLWPEGEpmmPGStg5iDKaIAfWvb31A0JW/G9e1G4p9cMCU8Q05V3kJkw9XP37COC7PhPstiY3ugChQhV9lxDkmKet0PBNI4yNukHGEnAH1AHOGfk6IKEqAyukZ/dxao0w64edjczZ4syPQB8XDEJwAFQyG0lgYK6OBMpIn6uAr+3LpYGFVfSGIgz7IH9dERRBEaTCaKIOhMhyqg69d/f6TYIeXIA5xzoAKDKuJL3q4wvXMvaVhqBuaNte0TrSPgT6S8a78TndF5/Z2ub2NtMgf+Y7htYFSX0k2kdxJs7ooKH4jcclW2T+BdLGyduFlFx0WRCvwbLsQvbwSnNT0i3JwGXjQtJ787ST1xma9btnmZBpHt5StwD9TZ5+u544bvBQW3ZIjjqKn4hrphalrz123BDU4Rr83u4X1vn69TNa6eN03jXkeJK312tatYktrd8viSN5l2rUmPFiNrdddscS36XRTHTMC0VRI18v4BPMZl+ud6zXOCe1O10ezj53Jf7xV+JGmzqru84DRY/UJ7Az8b+veiXcJE+793zB+PCb/spD69rJO1o4QOwJKXzfn7KSdWN5AFslL7+WwEJzljpjRcL4wbXC/f+uDKof8UNICqACShJY4AX1Ay3MXWYscyj80MzTB0tLU6ibPIeParzVY4wIxDosKqOJ4LEvySBKE91tLWlYzyI5ABcMiF08+uP8NneQHL1QHAAA==',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: true, // Private mode - only owner can use commands
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
  

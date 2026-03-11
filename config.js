/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['2348129636819'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['✟ЄМРЄЯФЯ♆ИЦЄL҉✟'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: '❈ℕ𝕦𝕖𝕝✡𝕊𝕖𝕟𝕥𝕚𝕟𝕖𝕝❈',
    prefix: '?',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VUXY+iSBT9L/WqGQVBwaST5UtBW0WUFtnMQwkFFCJgVQHixP++wZ6e6Wyyk963+rg599xzz70/QF5gipaoBdMfoCS4hgx1R9aWCEyBWkURIqAPQsggmALLdLGNrxN5uLHJli6LFRcrLWsvcXpdxnzNblZzU5352jVewKMPyuqU4eAPgOEeRtFBlTZymVga58/E9ZFOIuf4puX79eRItSppG2kgNsELeHSIEBOcx0aZoAsiMFui1oaYfI0+Xsusfg0i6a0hg9bd7Uf5oKHj1uHaUtTOo716cMpkEYte/DX6dX3dOfDIXDc/DOJAX+mRv6vOknL1tqe7nntHmw9kozdI4nf6FMc5Cq0Q5Qyz9su6FwvbuGEhDZV2drk7oun58Qk34wNbCPPoZqo9U+EEwYs86WvE58NR8Ub0qye7LOVIVM/t5aDlUn7yZs6M5lVeKCkNy/mCW30mbpMPr5z/j+7HlewwaQH1w/gVHcw0L++9RD3IQvUqqYdcF9RNrbuDpTG0vkY/j4JQEg9ByhuUDNb+XC/4dD2UQyrsXxvXPXtKz0aa0vusO2QV+RNL1TfX3iQiY19QTflu6NfdMnM8QeRTpk90pa2wFc4292vtQQJHvr+526+rFRLVwknXPCYW39xK+5K+LdVdxrmi3DAtfnlWdEatFYIp9+gDgmJMGYEMF/nzrQ9gWO9QQBB7iguK+wRpG7VaNQeHOybLoxrmPBnv3k6cuYwlUa0Gd9UVhNnMeAF9UJIiQJSi0MSUFaRdIUphjCiY/v29D3J0Y+9t65KNuD6IMKHMzasyK2D40dOPTxgERZWzXZsHWndABEyHv58RYziPaadilUMSJLhGWgIZBdMIZhT9qg8RFIIpIxX6NbNaEXayj3196xy9A+iDy7MdOARTwI8EiePl8WgscfKUl/6i35oOF5bltxwx0AfZM44bjaTxmOel8VDmeL6L7D4evyh2iCFiEGcUTIFmVTtJdk1jfdJuq+F8rlixosUK+F3ShzPetd9gR6qWApfrc3M3SvVF6+vnbWCEk/MhbA+yZgizLSELYjy1/zcImAKHXPUFdgZS418G9orD6bDOtva5p7t0cEyNVlSDOmOJdC839rA32mZM32+tTTjbM/16c4/6BC3zMX/2k9MgX1g3vhU15aXLFqIaB+hzssX6OHOqwhaVU7ZDjjU8z9N5HabEK8M6XpczQhtyWfnectXLE+obRpVYm/SgzZeW1ps7AvXm+5DfWLJ22tsmvMQyVX969jkz2c9dhZ9+6prVXSOMnqOfw66FX2jeO/POZMNH/xPIz23yXxO5L87RK67WfnNLhkxo2uCyFQ1TNZE4y4Os3iYb1V2OW3hTwePxvQ/KDLKoIBcwBTAPSYFD0AekqDrXWnlU/CGZplqWEsdWV3oGKVN+T8IeXxBl8FKCKTeZjHhuPJSH71E2KUoT0qRbSpeRegKPfwDwe8kgVAcAAA==',
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
  

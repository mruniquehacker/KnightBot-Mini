const axios = require('axios');

module.exports = {
  name: 'spotify',
  aliases: ['sp', 'spotifymp3', 'spotifydl'],
  category: 'media',
  description: 'Download a Spotify track as MP3.',
  usage: '<spotify_url>',

  async execute(sock, msg, args) {
    try {
      if (!args.length) {
        return sock.sendMessage(
          msg.key.remoteJid,
          {
            text: `❌ Please provide a Spotify track URL.\n\nExample:\n.spotify https://open.spotify.com/track/...`
          },
          { quoted: msg }
        );
      }

      const url = args[0];

      const { data } = await axios.get(
        `https://api-olive-five-53.vercel.app/spotify?url=${encodeURIComponent(url)}`
      );

      if (!data?.data?.download) {
        return sock.sendMessage(
          msg.key.remoteJid,
          { text: '❌ Failed to fetch the download link.' },
          { quoted: msg }
        );
      }

      await sock.sendMessage(
        msg.key.remoteJid,
        {
          audio: { url: data.data.download },
          mimetype: 'audio/mpeg',
          fileName: 'spotify.mp3'
        },
        { quoted: msg }
      );
    } catch (err) {
      console.error(err);

      await sock.sendMessage(
        msg.key.remoteJid,
        {
          text: `❌ An error occurred while downloading the Spotify track.\n\n${err.response?.data?.message || err.message}`
        },
        { quoted: msg }
      );
    }
  }
};

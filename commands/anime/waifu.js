const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { getTempDir, deleteTempFile } = require('../../utils/tempManager');

const BASE = 'https://api.waifu.im/images';

module.exports = {
  name: 'waifu',
  aliases: ['waifuim'],
  category: 'nsfw',
  desc: 'Get a random waifu image',
  usage: 'waifu',

  execute: async (sock, msg, args, extra) => {
    try {
      const { data } = await axios.get(BASE, {
        headers: {
          'User-Agent': 'Mozilla/5.0',
          'Accept': 'application/json'
        },
        timeout: 30000
      });

      if (!data?.items?.length) {
        throw new Error('No images returned from the API');
      }

      const image = data.items[0];
      const imageUrl = image.url;

      if (!imageUrl) {
        throw new Error('Image URL not found');
      }

      const imageResponse = await axios.get(imageUrl, {
        responseType: 'arraybuffer',
        headers: {
          'User-Agent': 'Mozilla/5.0',
          'Accept': 'image/*'
        },
        timeout: 30000
      });

      const imageBuffer = Buffer.from(imageResponse.data);

      if (!imageBuffer.length) {
        throw new Error('Empty image response');
      }

      const extension = path.extname(imageUrl).replace('.', '') || 'png';
      const tempDir = getTempDir();
      const tempPath = path.join(tempDir, `waifu_${Date.now()}.${extension}`);

      try {
        fs.writeFileSync(tempPath, imageBuffer);

        const artist = image.artists?.[0]?.name || 'Unknown';
        const tags = image.tags?.map(tag => tag.name).join(', ') || 'None';

        await sock.sendMessage(
          extra.from,
          {
            image: fs.readFileSync(tempPath),
            caption:
`✨ Random Waifu

🆔 ID: ${image.id}
🎨 Artist: ${artist}
🏷️ Tags: ${tags}
📏 Resolution: ${image.width}×${image.height}
❤️ Favorites: ${image.favorites}
🔞 NSFW: ${image.isNsfw ? 'Yes' : 'No'}`
          },
          { quoted: msg }
        );
      } finally {
        deleteTempFile(tempPath);
      }

    } catch (error) {
      console.error('Error in waifu command:', error);

      if (error.response?.status === 429) {
        return extra.reply('❌ Rate limit exceeded. Please try again later.');
      }

      if (error.code === 'ECONNABORTED') {
        return extra.reply('❌ Request timed out. Please try again.');
      }

      return extra.reply(`❌ Failed to fetch image: ${error.message}`);
    }
  }
};

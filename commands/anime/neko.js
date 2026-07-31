const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { getTempDir, deleteTempFile } = require('../../utils/tempManager');

const BASE = 'https://api.nekosapi.com/v4/images/random';

module.exports = {
  name: 'neko',
  aliases: ['catgirl', 'waifu'],
  category: 'anime',
  desc: 'Get a random neko image',
  usage: 'neko',

  execute: async (sock, msg, args, extra) => {
    try {
      const { data } = await axios.get(BASE, {
        headers: {
          'User-Agent': 'Mozilla/5.0',
          'Accept': 'application/json'
        },
        timeout: 30000
      });

      if (!Array.isArray(data) || data.length === 0) {
        throw new Error('No images returned from the API');
      }

      const image = data[0];
      const imageUrl = image.url;

      if (!imageUrl) {
        throw new Error('Invalid image URL');
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

      const contentType = imageResponse.headers['content-type'] || '';
      let extension = 'jpg';

      if (contentType.includes('png')) extension = 'png';
      else if (contentType.includes('webp')) extension = 'webp';
      else if (contentType.includes('jpeg')) extension = 'jpg';

      const tempDir = getTempDir();
      const tempPath = path.join(tempDir, `neko_${Date.now()}.${extension}`);

      try {
        fs.writeFileSync(tempPath, imageBuffer);

        await sock.sendMessage(
          extra.from,
          {
            image: fs.readFileSync(tempPath)
          },
          { quoted: msg }
        );
      } finally {
        deleteTempFile(tempPath);
      }

    } catch (error) {
      console.error('Error in neko command:', error);

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

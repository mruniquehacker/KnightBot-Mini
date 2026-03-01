/**
 * GPT Image Command
 * Edit image using GPT Vision with prompt
 */

const axios = require('axios');
const FormData = require('form-data');
const { downloadMediaMessage } = require('@whiskeysockets/baileys');
const { webp2png } = require('../../utils/webp2mp4');
const sharp = require('sharp');

module.exports = {
  name: 'gptimage',
  aliases: ['gptimg', 'editimage', 'aiimage', 'vision','gi'],
  category: 'ai',
  description: 'Edit image using GPT Vision with prompt',
  usage: '.gptimage <prompt> (reply to image/sticker)',
  
  async execute(sock, msg, args, extra) {
    try {
      // Check if message is a reply
      const ctxInfo = msg.message?.extendedTextMessage?.contextInfo;
      if (!ctxInfo?.quotedMessage) {
        return await extra.reply(
          '📷 *GPT Image Editor*\n\n' +
          'Reply to an *image* or *sticker* with a prompt to edit it.\n\n' +
          `Usage: ${extra.prefix || '.'}gptimage <your prompt>\n\n` +
          'Example: Reply to an image with:\n' +
          `${extra.prefix || '.'}gptimage change the background to a beach`
        );
      }
      
      // Get prompt from args
      const prompt = args.join(' ').trim();
      if (!prompt) {
        return await extra.reply(
          '❌ Please provide a prompt!\n\n' +
          `Usage: ${extra.prefix || '.'}gptimage <your prompt>\n\n` +
          'Example: change the background to a beach'
        );
      }
      
      const targetMessage = {
        key: {
          remoteJid: extra.from,
          id: ctxInfo.stanzaId,
          participant: ctxInfo.participant,
        },
        message: ctxInfo.quotedMessage,
      };
      
      // Check if quoted message is an image or sticker
      const quotedMsg = ctxInfo.quotedMessage;
      const isImage = !!quotedMsg.imageMessage;
      const isSticker = !!quotedMsg.stickerMessage;
      
      if (!isImage && !isSticker) {
        return await extra.reply('❌ Please reply to an *image* or *sticker*!');
      }
      
      // Download media
      const mediaBuffer = await downloadMediaMessage(
        targetMessage,
        'buffer',
        {},
        { logger: undefined, reuploadRequest: sock.updateMediaMessage },
      );
      
      if (!mediaBuffer) {
        return await extra.reply('❌ Failed to download image. Please try again.');
      }
      
      // Convert sticker to image if needed
      let imageBuffer = mediaBuffer;
      if (isSticker) {
        const stickerMessage = quotedMsg.stickerMessage;
        const isAnimated = stickerMessage.isAnimated || stickerMessage.mimetype?.includes('animated');
        
        if (isAnimated) {
          return await extra.reply('❌ Animated stickers are not supported. Please use a static image or sticker.');
        }
        
        // Convert webp sticker to PNG
        try {
          imageBuffer = await webp2png(mediaBuffer);
        } catch (error) {
          console.error('Error converting sticker to PNG:', error);
          return await extra.reply('❌ Failed to convert sticker to image. Please try with a regular image.');
        }
      }
      
      // Convert to JPEG if needed (API might prefer JPEG)
      // Check if it's already JPEG, if not convert
      let finalImageBuffer = imageBuffer;
      try {
        const metadata = await sharp(imageBuffer).metadata();
        if (metadata.format !== 'jpeg' && metadata.format !== 'jpg') {
          // Convert to JPEG
          finalImageBuffer = await sharp(imageBuffer)
            .jpeg({ quality: 90 })
            .toBuffer();
        }
      } catch (error) {
        // If sharp fails, use original buffer
        console.error('Error processing image with sharp:', error);
        finalImageBuffer = imageBuffer;
      }
      
      // Prepare form data
      const form = new FormData();
      form.append('image', finalImageBuffer, {
        filename: 'image.jpg',
        contentType: 'image/jpeg'
      });
      form.append('param', prompt);
      
      // Send POST request to API
      const apiUrl = 'https://api.nexray.web.id/ai/gptimage';
      
      const response = await axios.post(apiUrl, form, {
        headers: {
          ...form.getHeaders(),
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        },
        responseType: 'arraybuffer',
        timeout: 120000, // 2 minutes timeout for AI processing
        maxContentLength: 10 * 1024 * 1024, // 10MB max
      });
      
      if (!response.data) {
        return await extra.reply('❌ No image received from API. Please try again.');
      }
      
      const resultImageBuffer = Buffer.from(response.data);
      
      // Validate buffer
      if (!resultImageBuffer || resultImageBuffer.length === 0) {
        return await extra.reply('❌ Empty image received from API. Please try again.');
      }
      
      // Check file size (WhatsApp image limit is 5MB)
      const maxImageSize = 5 * 1024 * 1024; // 5MB
      if (resultImageBuffer.length > maxImageSize) {
        return await extra.reply(
          `❌ Image too large: ${(resultImageBuffer.length / 1024 / 1024).toFixed(2)}MB (max 5MB)\n` +
          'The API returned an image that exceeds WhatsApp limits.'
        );
      }
      
      // Send the modified image
      await sock.sendMessage(extra.from, {
        image: resultImageBuffer,
        caption: `✨ *GPT Vision Result*\n\n📝 Prompt: ${prompt}`
      }, { quoted: msg });
      
    } catch (error) {
      console.error('Error in gptimage command:', error);
      
      if (error.response) {
        // API error
        const status = error.response.status;
        if (status === 400) {
          return await extra.reply('❌ Bad Request: Invalid parameters. Please check your prompt and image.');
        } else if (status === 429) {
          return await extra.reply('❌ Rate limit exceeded. Please try again later.');
        } else if (status === 500) {
          return await extra.reply('❌ Server error. Please try again later.');
        }
      }
      
      if (error.code === 'ECONNABORTED') {
        return await extra.reply('❌ Request timeout. The image processing took too long. Please try again.');
      }
      
      return await extra.reply(`❌ Error: ${error.message || 'Unknown error occurred'}`);
    }
  },
};


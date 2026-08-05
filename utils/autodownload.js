const axios = require("axios");
const { igdl } = require("ruhend-scraper");

// prevent duplicate downloads
const processed = new Set();

module.exports = async (sock, msg, { body }) => {
    if (!body) return false;

    if (processed.has(msg.key.id)) return true;
    processed.add(msg.key.id);

    setTimeout(() => processed.delete(msg.key.id), 5 * 60 * 1000);

    const url = body.match(/https?:\/\/\S+/)?.[0];
    if (!url) return false;

    const chat = msg.key.remoteJid;

    try {

        // =========================
        // TikTok
        // =========================
        if (/tiktok\.com|vm\.tiktok\.com/i.test(url)) {

            const api =
                `https://api.princetechn.com/api/download/tiktok?apikey=prince&url=${encodeURIComponent(url)}`;

            const { data } = await axios.get(api);

            if (!data.success || !data.result) return true;

            await sock.sendMessage(chat, {
                video: { url: data.result.video },
                mimetype: "video/mp4",
                caption:
`🎵 *${data.result.title || "TikTok Video"}*

👤 ${data.result.author?.name || "Unknown"}
⏱ ${data.result.duration || 0}s`
            }, { quoted: msg });

            return true;
        }

        // =========================
        // Spotify
        // =========================
        if (/open\.spotify\.com/i.test(url)) {

            const { data } = await axios.get(
                `https://api-olive-five-53.vercel.app/spotify?url=${encodeURIComponent(url)}`
            );

            if (!data?.data?.download) return true;

            await sock.sendMessage(chat, {
                document: {
                    url: data.data.download
                },
                mimetype: "audio/mpeg",
                fileName: "spotify.mp3"
            }, { quoted: msg });

            return true;
        }

        // =========================
        // Facebook
        // =========================
        if (/facebook\.com|fb\.watch/i.test(url)) {

            const api =
                `https://api.princetechn.com/api/download/facebook?apikey=prince&url=${encodeURIComponent(url)}`;

            const { data } = await axios.get(api);

            if (!data.success || !data.result) return true;

            await sock.sendMessage(chat, {
                video: {
                    url: data.result.hd_video || data.result.sd_video
                },
                mimetype: "video/mp4",
                caption:
`📹 *${data.result.title || "Facebook Video"}*`
            }, { quoted: msg });

            return true;
        }

        // =========================
        // Instagram
        // =========================
        if (/instagram\.com|instagr\.am/i.test(url)) {

            const media = await igdl(url);

            if (!media || !media.length) return true;

            const sent = new Set();

            for (const item of media) {

                if (!item.url) continue;
                if (sent.has(item.url)) continue;

                sent.add(item.url);

                if (item.type === "video") {

                    await sock.sendMessage(chat, {
                        video: {
                            url: item.url
                        }
                    }, { quoted: msg });

                } else {

                    await sock.sendMessage(chat, {
                        image: {
                            url: item.url
                        }
                    }, { quoted: msg });

                }

            }

            return true;
        }

    } catch (e) {
        console.error("[AUTO DOWNLOAD]", e);
        return true;
    }

    return false;
};

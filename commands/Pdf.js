module.exports = {
    pattern: "pdf",
    desc: "تنزيل ملف PDF من رابط مباشر",
    category: "downloader",

    async execute(sock, msg, args, { from, reply }) {
        try {
            let url = args[0];

            if (!url) {
                return reply("❌ أرسل رابط PDF مباشر بعد الأمر\nمثال:.pdf https://site.com/file.pdf");
            }

            if (!url.includes(".pdf")) {
                return reply("❌ الرابط لازم ينتهي بـ.pdf");
            }

            await reply("⏳ جاري تحميل الملف...");

            await sock.sendMessage(from, {
                document: { url: url },
                mimetype: "application/pdf",
                fileName: "document.pdf"
            }, { quoted: msg });

            await reply("✅ تم إرسال الملف");

        } catch (e) {
            console.log(e);
            reply("❌ فشل التحميل. تأكد إن الرابط مباشر وشغال");
        }
    }
                           }

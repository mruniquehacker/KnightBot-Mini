const APIs = require('./api');
const { getStats, getWeeklyStats, rankUsers } = require('./groupstats');
const { gameCommands } = require('./funGames');
const {
  tag,
  pick,
  percentFromId,
  percentFromPair,
  getTargetUser,
  getTwoUsers,
  getUserName,
  askFunAi,
  sendMention,
  createRateCommand,
  createPairRateCommand,
  createPairCommand,
  createRandomCommand,
  createActionCommand,
} = require('./funHelpers');

const FORTUNES = [
  'A surprise message will make your day.',
  'Your next argument will be legendary.',
  'Someone is thinking about you... probably the bot.',
  'Good luck is coming. Bad luck is already here.',
  'Today is perfect for starting drama.',
];
const HOROSCOPES = [
  'Stars say: stop texting your ex.',
  'Mercury is in retrograde. Blame everything on that.',
  'Today you will be extremely online.',
  'Cosmic energy: chaotic neutral.',
  'The universe wants you to touch grass.',
];
const MOODS = ['😎 Cool', '😴 Sleepy', '🤡 Clown', '😤 Angry', '🥰 Soft', '💀 Dead inside', '🔥 Unhinged'];
const PROFESSIONS = [
  'Professional overthinker',
  'Certified group lurker',
  'Full-time drama starter',
  'Part-time meme dealer',
  'CEO of being late',
  'Freelance simp',
];
const CHARACTERS = [
  'Naruto (talks big, delivers sometimes)',
  'Gojo (too cool for this group)',
  'Light Yagami (planning something)',
  'Doraemon (has gadgets, no common sense)',
  'Shinchan (pure chaos)',
  'Vegeta (angry 24/7)',
];
const FACTS = [
  'Honey never spoils. Unlike this group chat.',
  'Octopuses have three hearts. You have zero chill.',
  'Bananas are berries. Strawberries are not. Life is a lie.',
  'A group chat can survive anything except someone leaving without drama.',
];
const LOCAL_QUOTES = [
  'Silence is golden unless you have something savage to say.',
  'Not all heroes wear capes. Some send memes at 3 AM.',
  'Group chat: where productivity goes to die beautifully.',
];

const rateCommands = [
  createRateCommand('iqrate', ['iq'], {
    description: 'Rate someone\'s IQ',
    usage: '.iqrate @user',
    salt: 1,
    lines: (p, t) => [
      `${t} IQ: *${p}* 🧠${p < 30 ? ' — room temperature IQ' : p > 80 ? ' — big brain energy' : ' — average legend'}`,
      `Brain cells detected in ${t}: *${p}%*`,
    ],
  }),
  createRateCommand('rizzrate', ['rizz'], {
    description: 'Rate someone\'s rizz',
    usage: '.rizzrate @user',
    salt: 2,
    lines: (p, t) => [
      `${t} Rizz Level: *${p}%* 💫${p > 70 ? ' — dangerous' : p < 20 ? ' — rizzless behavior' : ''}`,
      `${t} smoothness index: *${p}/100*`,
    ],
  }),
  createRateCommand('simprate', ['simp'], {
    description: 'Rate how much someone simps',
    usage: '.simprate @user',
    salt: 3,
    lines: (p, t) => [
      `${t} Simp Meter: *${p}%* 💕${p > 75 ? ' — down bad' : ''}`,
      `${t} is ${p}% simp energy`,
    ],
  }),
  createRateCommand('toxicrate', ['toxic'], {
    description: 'Rate someone\'s toxicity',
    usage: '.toxicrate @user',
    salt: 4,
    lines: (p, t) => [
      `${t} Toxicity: *${p}%* ☢️${p > 80 ? ' — human hazard' : ''}`,
      `${t} chaos level: *${p}/100*`,
    ],
  }),
  createRateCommand('howgay', ['howgay'], {
    description: 'How gay percentage',
    usage: '.howgay @user',
    salt: 5,
    lines: (p, t) => [`${t} is *${p}%* fabulous 🌈`],
  }),
  createRateCommand('howdumb', ['dumbrate'], {
    description: 'How dumb percentage',
    usage: '.howdumb @user',
    salt: 6,
    lines: (p, t) => [`${t} dumb level: *${p}%* 🤡${p > 85 ? ' — legendary' : ''}`],
  }),
];

const pairRateCommands = [
  createPairRateCommand('bestie', ['bestfriend', 'bff'], {
    description: 'Bestie compatibility',
    usage: '.bestie @user1 @user2',
    salt: 7,
    lines: (p, a, b) => [
      `${a} + ${b} = *${p}%* bestie energy 🤝`,
      `Friendship score ${a} & ${b}: *${p}%*${p > 80 ? ' — inseparable' : ''}`,
    ],
  }),
  createPairRateCommand('soulmate', ['soul'], {
    description: 'Soulmate compatibility',
    usage: '.soulmate @user1 @user2',
    salt: 8,
    lines: (p, a, b) => [
      `${a} 💫 ${b} = *${p}%* soulmate bond${p > 90 ? ' — written in stars' : ''}`,
      `Cosmic match ${a} x ${b}: *${p}%*`,
    ],
  }),
];

const pairCommands = [
  createPairCommand('enemy', ['rival'], {
    description: 'Why two users would fight',
    usage: '.enemy @user1 @user2',
    text: (a, b) => [
      `⚔️ ${a} vs ${b}\nReason: both think they're the main character.`,
      `💢 ${a} & ${b} would argue about who started it. Spoiler: both.`,
      `🔥 ${a} + ${b} = enemies because one replies all and one leaves on read.`,
    ],
  }),
  createPairCommand('marry', ['marriage', 'wed'], {
    description: 'Fake marry two users',
    usage: '.marry @user1 @user2',
    text: (a, b) => `💒 *MARRIAGE CERTIFICATE*\n\n${a} 💍 ${b}\n\nMay your drama be forever shared.`,
  }),
  createPairCommand('divorce', ['breakup'], {
    description: 'Dramatic divorce',
    usage: '.divorce @user1 @user2',
    text: (a, b) => `💔 *DIVORCE PAPERS*\n\n${a} ❌ ${b}\n\nReason: irreconcilable memes.`,
  }),
  {
    name: 'vs',
    aliases: ['compare', 'battle'],
    category: 'fun',
    description: 'Compare two users',
    usage: '.vs @user1 @user2',
    groupOnly: true,
    async execute(sock, msg, args, extra) {
      try {
        const pair = getTwoUsers(msg, extra, sock);
        if (pair.error) return extra.reply(pair.error);
        const { a, b } = pair;
        const stats = ['IQ', 'Rizz', 'Chaos', 'Luck'];
        const lines = stats.map((s) => {
          const pa = percentFromId(a, s.length);
          const pb = percentFromId(b, s.length + 3);
          const win = pa === pb ? 'Tie' : pa > pb ? tag(a) : tag(b);
          return `*${s}:* ${tag(a)} ${pa} — ${pb} ${tag(b)} → ${win}`;
        });
        await sendMention(sock, extra.from, msg, `⚔️ *VS BATTLE*\n\n${lines.join('\n')}`, [a, b]);
      } catch (e) {
        console.error('[vs]', e.message);
        await extra.reply('❌ Something went wrong.');
      }
    },
  },
  {
    name: 'babyname',
    aliases: ['childname'],
    category: 'fun',
    description: 'Combine two names into a baby name',
    usage: '.babyname @user1 @user2',
    groupOnly: true,
    async execute(sock, msg, args, extra) {
      try {
        const pair = getTwoUsers(msg, extra, sock);
        if (pair.error) return extra.reply(pair.error);
        const n1 = tag(pair.a).slice(1, 4);
        const n2 = tag(pair.b).slice(1, 4);
        const names = [`${n1}${n2}`, `${n2}${n1}`, `${n1}Jr`, `Little${n2}`];
        await sendMention(
          sock,
          extra.from,
          msg,
          `👶 If ${tag(pair.a)} & ${tag(pair.b)} had a kid:\n\n*${pick(names)}*`,
          [pair.a, pair.b]
        );
      } catch (e) {
        await extra.reply('❌ Something went wrong.');
      }
    },
  },
];

const randomCommands = [
  createRandomCommand('8ball', ['eightball', 'ball'], {
    description: 'Magic 8ball',
    usage: '.8ball <question>',
    build: (args) => {
      if (!args.length) return null;
      const answers = ['Yes ✅', 'No ❌', 'Maybe 🤔', 'Ask again later', 'Definitely 😎', 'Absolutely not 💀', 'Signs point to yes'];
      return `🎱 *${args.join(' ')}*\n\n→ ${pick(answers)}`;
    },
    empty: '❌ Ask a question! `.8ball will it rain?`',
  }),
  createRandomCommand('fortune', ['cookie'], {
    description: 'Fortune cookie',
    usage: '.fortune',
    pool: FORTUNES.map((f) => `🥠 *Fortune:* ${f}`),
  }),
  createRandomCommand('horoscope', ['horo', 'zodiac'], {
    description: 'Daily horoscope roast',
    usage: '.horoscope',
    mentionTarget: true,
    build: () => `🔮 *Horoscope for {tag}*\n\n${pick(HOROSCOPES)}`,
  }),
  createRandomCommand('mood', ['vibe'], {
    description: 'Today\'s mood for a user',
    usage: '.mood @user',
    mentionTarget: true,
    build: () => `{tag} is feeling: *${pick(MOODS)}* today`,
  }),
  createRandomCommand('profession', ['job'], {
    description: 'Assign a fake profession',
    usage: '.profession @user',
    mentionTarget: true,
    build: () => `{tag}'s profession: *${pick(PROFESSIONS)}*`,
  }),
  createRandomCommand('character', ['anime'], {
    description: 'Assign an anime character',
    usage: '.character @user',
    mentionTarget: true,
    build: () => `{tag} is: *${pick(CHARACTERS)}*`,
  }),
  createRandomCommand('fact', ['uselessfact'], {
    description: 'Random fact',
    usage: '.fact',
    pool: FACTS.map((f) => `📚 *Fact:* ${f}`),
  }),
  {
    name: 'quote',
    aliases: ['q'],
    category: 'fun',
    description: 'Random quote',
    usage: '.quote',
    async execute(sock, msg, args, extra) {
      try {
        let text;
        try {
          const q = await APIs.getQuote();
          text = `"${q.content}"\n— ${q.author}`;
        } catch {
          text = `"${pick(LOCAL_QUOTES)}"`;
        }
        await extra.reply(text);
      } catch (e) {
        await extra.reply('❌ Something went wrong.');
      }
    },
  },
  {
    name: 'rate',
    aliases: ['score'],
    category: 'fun',
    description: 'Rate anything out of 10',
    usage: '.rate pizza',
    async execute(sock, msg, args, extra) {
      try {
        const topic = args.join(' ').trim();
        if (!topic) return extra.reply('Usage: `.rate pizza`');
        const score = (percentFromId(topic, 9) / 10).toFixed(1);
        await extra.reply(`⭐ *${topic}* — ${score}/10`);
      } catch (e) {
        await extra.reply('❌ Something went wrong.');
      }
    },
  },
  {
    name: 'choose',
    aliases: ['decide', 'select'],
    category: 'fun',
    description: 'Pick from options',
    usage: '.choose pizza burger biryani',
    async execute(sock, msg, args, extra) {
      try {
        if (args.length < 2) return extra.reply('Usage: `.choose option1 option2 ...`');
        await extra.reply(`🎯 I choose: *${pick(args)}*`);
      } catch (e) {
        await extra.reply('❌ Something went wrong.');
      }
    },
  },
  {
    name: 'coinflip',
    aliases: ['flip', 'coin'],
    category: 'fun',
    description: 'Flip a coin',
    usage: '.coinflip',
    async execute(sock, msg, args, extra) {
      try {
        await extra.reply(pick(['🪙 *Heads!*', '🪙 *Tails!*']));
      } catch (e) {
        await extra.reply('❌ Something went wrong.');
      }
    },
  },
  {
    name: 'dice',
    aliases: ['roll'],
    category: 'fun',
    description: 'Roll a dice',
    usage: '.dice',
    async execute(sock, msg, args, extra) {
      try {
        await extra.reply(`🎲 You rolled: *${Math.floor(Math.random() * 6) + 1}*`);
      } catch (e) {
        await extra.reply('❌ Something went wrong.');
      }
    },
  },
];

const actionCommands = [
  createActionCommand('slap', ['hit'], 'slapped', '👋'),
  createActionCommand('kiss', ['smooch'], 'kissed', '💋'),
  createActionCommand('hug', ['hugme'], 'hugged', '🤗'),
  {
    name: 'poke',
    aliases: ['prod'],
    category: 'fun',
    description: 'Poke a user',
    usage: '.poke @user',
    async execute(sock, msg, args, extra) {
      try {
        const { jid, tag: t } = getTargetUser(msg, extra);
        const n = Math.floor(Math.random() * 900) + 100;
        await sendMention(sock, extra.from, msg, `👉 ${tag(extra.sender)} poked ${t} *${n}* times!`, [extra.sender, jid]);
      } catch (e) {
        await extra.reply('❌ Something went wrong.');
      }
    },
  },
];

function makeStatsCmd(name, aliases, desc, builder) {
  return {
    name,
    aliases,
    category: 'fun',
    description: desc,
    usage: `.${name}`,
    groupOnly: true,
    async execute(sock, msg, args, extra) {
      try {
        const text = await builder(extra);
        if (!text) return extra.reply('📊 No data yet. Chat more!');
        const mentions = text.mentions || [];
        await sock.sendMessage(extra.from, { text: text.body, mentions }, { quoted: msg });
      } catch (e) {
        console.error(`[${name}]`, e.message);
        await extra.reply('❌ Something went wrong.');
      }
    },
  };
}

const statsCommands = [
  makeStatsCmd('mostactive', ['topactive'], 'Most active members today', async (extra) => {
    const stats = getStats(extra.from);
    if (!stats) return null;
    const top = rankUsers(stats.users, 5);
    return {
      body: `🏆 *Most Active Today*\n\n${top.map(([id, c], i) => `${i + 1}. @${id.split('@')[0]} — ${c} msgs`).join('\n')}`,
      mentions: top.map(([id]) => id),
    };
  }),
  makeStatsCmd('mostquiet', ['silent', 'lurker'], 'Quietest members today', async (extra) => {
    const stats = getStats(extra.from);
    if (!stats?.users) return null;
    const sorted = Object.entries(stats.users).sort((a, b) => a[1] - b[1]).slice(0, 5);
    if (!sorted.length) return null;
    return {
      body: `🤫 *Most Quiet (but still alive)*\n\n${sorted.map(([id, c], i) => `${i + 1}. @${id.split('@')[0]} — ${c} msgs`).join('\n')}`,
      mentions: sorted.map(([id]) => id),
    };
  }),
  makeStatsCmd('nightowl', ['night'], 'Who texts late at night', async (extra) => {
    const stats = getStats(extra.from);
    if (!stats?.night) return null;
    const top = rankUsers(stats.night, 5);
    if (!top.length) return null;
    return {
      body: `🦉 *Night Owls*\n\n${top.map(([id, c], i) => `${i + 1}. @${id.split('@')[0]} — ${c} late msgs`).join('\n')}`,
      mentions: top.map(([id]) => id),
    };
  }),
  makeStatsCmd('mentionking', ['mostmentioned'], 'Most mentioned member', async (extra) => {
    const stats = getStats(extra.from);
    if (!stats?.mentioned) return null;
    const top = rankUsers(stats.mentioned, 5);
    if (!top.length) return null;
    return {
      body: `👑 *Mention Kings/Queens*\n\n${top.map(([id, c], i) => `${i + 1}. @${id.split('@')[0]} — ${c} mentions`).join('\n')}`,
      mentions: top.map(([id]) => id),
    };
  }),
  makeStatsCmd('stickerking', ['stickers'], 'Top sticker senders', async (extra) => {
    const stats = getStats(extra.from);
    if (!stats?.stickers) return null;
    const top = rankUsers(stats.stickers, 5);
    if (!top.length) return null;
    return {
      body: `🎭 *Sticker Kings*\n\n${top.map(([id, c], i) => `${i + 1}. @${id.split('@')[0]} — ${c} stickers`).join('\n')}`,
      mentions: top.map(([id]) => id),
    };
  }),
  makeStatsCmd('weeklymvp', ['mvp', 'weekmvp'], 'Weekly MVP by messages', async (extra) => {
    const stats = getWeeklyStats(extra.from);
    if (!stats) return null;
    const top = rankUsers(stats.users, 3);
    return {
      body: `🏅 *Weekly MVP*\n\n${top.map(([id, c], i) => `${i + 1}. @${id.split('@')[0]} — ${c} msgs (7 days)`).join('\n')}`,
      mentions: top.map(([id]) => id),
    };
  }),
  {
    name: 'roastoftheday',
    aliases: ['rotd', 'dailyroast'],
    category: 'fun',
    description: 'Roast a random member',
    usage: '.roastoftheday',
    groupOnly: true,
    async execute(sock, msg, args, extra) {
      try {
        const parts = extra.groupMetadata?.participants?.map((p) => p.id).filter((id) => id !== sock.user?.id) || [];
        if (!parts.length) return extra.reply('❌ No members.');
        const victim = pick(parts);
        const roasts = [
          'main character energy but in a background role',
          'the group\'s unofficial meme supplier (quality: questionable)',
          'would start a group call and not talk',
          'replies "lol" to everything including tragedies',
        ];
        await sendMention(sock, extra.from, msg, `☀️ *Roast of the Day*\n\n${tag(victim)} is ${pick(roasts)}.`, [victim]);
      } catch (e) {
        await extra.reply('❌ Something went wrong.');
      }
    },
  },
];

function makeAiCmd(name, aliases, usage, promptFn) {
  return {
    name,
    aliases,
    category: 'fun',
    description: usage,
    usage: `.${name}`,
    async execute(sock, msg, args, extra) {
      try {
        const prompt = promptFn(args, extra, msg);
        if (!prompt) return extra.reply(`❌ Usage: \`.${name} ${usage}\``);
        const text = await askFunAi(prompt);
        await extra.reply(text);
      } catch (e) {
        console.error(`[${name}]`, e.message);
        await extra.reply('❌ AI failed. Try again later.');
      }
    },
  };
}

const aiCommands = [
  {
    name: 'roastai',
    aliases: ['airoast'],
    category: 'fun',
    description: 'AI roast a user',
    usage: '.roastai @user [topic]',
    async execute(sock, msg, args, extra) {
      try {
        const ctx = msg.message?.extendedTextMessage?.contextInfo || {};
        const mentioned = ctx.mentionedJid || [];
        let targetId = null;
        if (mentioned.length) targetId = mentioned[0];
        else if (ctx.participant) targetId = ctx.participant;
        else targetId = extra.sender;

        const targetTag = `@${targetId.split('@')[0]}`;
        const name = getUserName(targetId, extra, msg);
        const topic = args.join(' ').trim();
        const prompt = topic
          ? `Roast ${name} about "${topic}" in 2-3 funny savage lines. Use their name naturally. Keep it playful. Max 200 words.`
          : `Roast ${name} in 2-3 funny savage lines. Use their name naturally. Keep it playful. Max 200 words.`;
        const roast = await askFunAi(prompt);
        await sock.sendMessage(extra.from, {
          text: `${targetTag}\n\n${roast}`,
          mentions: [targetId],
        }, { quoted: msg });
      } catch (e) {
        console.error('[roastai]', e.message);
        await extra.reply('❌ AI failed. Try again later.');
      }
    },
  },
  makeAiCmd('story', ['aistory'], '<theme>', (args) => {
    if (!args.length) return null;
    return `Write a funny 3-line story about: ${args.join(' ')}`;
  }),
  makeAiCmd('debate', ['hotake'], '<topic>', (args) => {
    if (!args.length) return null;
    return `Give a chaotic hot take about "${args.join(' ')}" in 2 sentences. Be funny.`;
  }),
  makeAiCmd('pick', ['advice'], '<question>', (args) => {
    if (!args.length) return null;
    return `Give chaotic but funny advice for: "${args.join(' ')}". 2-3 sentences max.`;
  }),
  {
    name: 'wanted',
    aliases: ['poster'],
    category: 'fun',
    description: 'Wanted poster for a user',
    usage: '.wanted @user',
    async execute(sock, msg, args, extra) {
      try {
        const { jid, tag: t } = getTargetUser(msg, extra);
        const crimes = ['excessive memes', 'leaving on read', 'starting drama', 'being too funny', 'spamming stickers'];
        await sendMention(
          sock,
          extra.from,
          msg,
          `☠️ *WANTED* ☠️\n\n${t}\n\nCrime: ${pick(crimes)}\nReward: ${percentFromId(jid, 11)} coins\n\nDead or alive (preferably alive).`,
          [jid]
        );
      } catch (e) {
        await extra.reply('❌ Something went wrong.');
      }
    },
  },
  {
    name: 'caption',
    aliases: ['funnycaption'],
    category: 'fun',
    description: 'Funny caption for replied image',
    usage: '.caption (reply to image)',
    async execute(sock, msg, args, extra) {
      try {
        const ctx = msg.message?.extendedTextMessage?.contextInfo;
        const quoted = ctx?.quotedMessage;
        const hasImage = quoted && (quoted.imageMessage || quoted.stickerMessage || quoted.videoMessage);
        if (!hasImage) return extra.reply('❌ Reply to an image or video.');
        const hint = args.join(' ') || 'something funny and savage';
        const text = await askFunAi(`Write one funny WhatsApp caption for a photo about: ${hint}. Max 2 lines. Plain text only.`);
        await extra.reply(text.slice(0, 500));
      } catch (e) {
        console.error('[caption]', e.message);
        await extra.reply('❌ AI failed. Try again later.');
      }
    },
  },
];

const allCommands = [
  ...rateCommands,
  ...pairRateCommands,
  ...pairCommands,
  ...randomCommands,
  ...actionCommands,
  ...statsCommands,
  ...gameCommands,
  ...aiCommands,
];

module.exports = allCommands;

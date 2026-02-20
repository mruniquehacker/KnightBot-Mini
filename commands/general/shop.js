const fs = require("fs")
const dbFile = "./database.json"

function loadDB() { return JSON.parse(fs.readFileSync(dbFile)) }
function saveDB(db) { fs.writeFileSync(dbFile, JSON.stringify(db, null, 2)) }

const shopItems = [
  { name: "Sword", price: 500, type: "weapon" },
  { name: "Shield", price: 400, type: "armor" },
  { name: "Potion", price: 200, type: "consumable" },
  { name: "Magic Scroll", price: 1000, type: "skill" }
]

module.exports = {
  name: "shop",
  desc: "Buy RPG items",
  execute: async (sock, msg) => {
    let sender = msg.key.participant || msg.key.remoteJid
    let db = loadDB()
    if (!db.users[sender]) db.users[sender] = { money: 1000, xp: 0, warns: 0, inventory: [], skills: [] }
    let args = msg.message.conversation.split(" ")
    let itemName = args.slice(1).join("")
    if (!itemName) {
      let shopList = shopItems.map(i => `${i.name} - $${i.price}`).join("\n")
      return sock.sendMessage(msg.key.remoteJid, { text: `🛒 Shop:\n${shopList}\nUse .shop <item>` })
    }
    let item = shopItems.find(i => i.name.toLowerCase() === itemName.toLowerCase())
    if (!item) return sock.sendMessage(msg.key.remoteJid, { text: "❌ Item not found!" })
    if (db.users[sender].money < item.price) return sock.sendMessage(msg.key.remoteJid, { text: "❌ Not enough money!" })
    db.users[sender].money -= item.price
    if (item.type === "skill") db.users[sender].skills.push(item.name)
    else db.users[sender].inventory.push(item.name)
    await sock.sendMessage(msg.key.remoteJid, { text: `✅

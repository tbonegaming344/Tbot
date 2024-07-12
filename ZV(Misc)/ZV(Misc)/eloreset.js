module.exports = {
  name: "eloreset",
	aliases: ["reset", "restart", "elorestart", "resetelo", ],
	category: `Miscellaneous`,
  run: async (client, message, args) => {
    if(message.author.id != "625172218120372225") return message.channel.send("Only tbone can use this");
    let db = new (require("quick.db")).QuickDB();
    db.all().then(async items => {
      items = items.filter(a => a.id.startsWith("points"));
      items.forEach(async item => {
        await db.delete(`${item.id}`);
        console.log(`deleted ${item}`);
      })
    })
    message.channel.send("reseted all points for everyone");
  }
} 
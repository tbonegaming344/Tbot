module.exports = {
  name: "remove",
	aliases: [`sub`, `subtract`, `decute`, `take`, `takeaway`],
	category: `Miscellaneous`,
  run: async (client, message, args) => {
    if(message.author.id != "625172218120372225") return message.channel.send("Only for tbone");
    let db = new (require("quick.db")).QuickDB();
    await db.sub(`points_${message.mentions.users.map(sr => sr.id)[1]}`, message.content.split(" ")[2]);
    message.channel.send(`removed ${message.content.split(" ")[2]} points from ${message.mentions.users.first().tag}`)
  }
}
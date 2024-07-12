const {EmbedBuilder}= require("discord.js")
let db = require("../../index.js")
module.exports = {
	name: `freezeheal`,
	aliases: [`freal`, `heeze`, `healfreeze`],
		category: `Rose(RO)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT freezeheal from rodecks`);
		let fr = new EmbedBuilder()
		.setTitle("Freeze Heal")
		.setDescription(`${result[2].freezeheal}`)
		.setFooter({text: `${result[1].freezeheal}`})
		.setColor("Random")
		.addFields({name: "Deck Cost", value: `${result[0].freezeheal}`})
		.setImage(`${result[3].freezeheal}`)
		message.channel.send({embeds: [fr]})
	}
}
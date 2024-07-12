const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `gangstaparadise`,
	aliases: [`gangsta`, `gangsterpardise`, `gangster`,`gangsta'spardise`, `gangsta's`],
	category: `NightCap(NC)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT gangstaparadise from ncdecks`);
		let gangster = new EmbedBuilder()
		.setTitle("Gangsta's Paradise")
		.setDescription(`${result[2].gangstaparadise}`)
	.setColor("Random")
	.addFields({name: "Deck Cost", value: `${result[0].gangstaparadise}`})	
	.setImage(`${result[3].gangstaparadise}`)
	.setFooter({text: `${result[1].gangstaparadise}`})
	message.channel.send({embeds: [gangster]})
	}
}
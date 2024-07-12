const {EmbedBuilder} = require("discord.js")
let db = require("../../index.js")
module.exports = {
	name: `cycletron`,
	aliases: [`ctcyle`, `cyclect`],
	category: `Beta-Carrotina/Citron`,
	run: async(client, message, args) => {
		let [result] = await db.query("SELECT cycletron FROM ctdecks")
			let embed = new EmbedBuilder()
	.setTitle("Cycletron")
	.setDescription(`${result[2].cycletron}`)
	.setFooter({text: `${result[1].cycletron}`})
			.addFields({name: "Deck Cost", value: `${result[0].cycletron}`})
		.setColor("Random")	
		.setImage(`${result[3].cycletron}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
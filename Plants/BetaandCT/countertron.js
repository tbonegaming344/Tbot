const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `countertron`,
	aliases: [`troncounter`, `ctcountertron`, `countertonct`, `ctron`],
	category: `Beta-Carrotina/Citron`,
	run: async(client, message, args) => {
		let [result] = await db.query("SELECT countertron FROM ctdecks")
		let embed = new EmbedBuilder()
	.setTitle("Countertron")
	.setDescription(`${result[2].countertron}`)
	.setFooter({text: `${result[1].countertron}`})
			.addFields({name: "Deck Cost", value: `${result[0].countertron}`})
		.setColor("Random")
		.setImage(`${result[3].countertron}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
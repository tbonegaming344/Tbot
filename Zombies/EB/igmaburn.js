const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name:  `igmaburn`,
	aliases: [`burnigma`, `iburn`, `overshootboog`],
	category: `Electric Boogaloo(EB)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT igmaburn FROM ebdecks`)
			let embed = new EmbedBuilder()
	.setTitle("Igma Burn")	
			.setDescription(`${result[2].igmaburn}`)
	.setFooter({text: `${result[1].igmaburn}`})
			.addFields({name: "Deck Cost", value: `${result[0].igmaburn}`})
		.setColor("Random")			
		.setImage(`${result[3].igmaburn}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
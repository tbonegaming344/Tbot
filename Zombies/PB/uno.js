const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `uno`,
	aliases: [`pbuno`, `unopb`],
	category: `Professor Brainstorm(PB)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`select uno from pbdecks`)
			let embed = new EmbedBuilder()
	.setTitle("UNO")	
			.setDescription(`${result[2].uno}`)
	.setFooter({text: `${result[1].uno}`})
			.addFields({name: "Deck Cost", value: `${result[0].uno}`})
		.setColor("Random")	
		.setImage(`${result[3].uno}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
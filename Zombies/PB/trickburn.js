const {EmbedBuilder}= require("discord.js")
let db = require("../../index.js")
module.exports = {
	name: `trickburn`, 
	aliases: [`telebinary`],
	category: `Professor Brainstorm(PB)`, 
	run: async(client, message,args)=> {
		let [result] = await db.query(`select trickburn from pbdecks`)
				 let tb = new EmbedBuilder()
		.setTitle("TrickBurn")
		.setDescription(`${result[2].trickburn}`)
		.setColor("Random")
		.addFields({name: "Deck Cost", value: `${result[0].trickburn}`})
.setImage(`${result[3].trickburn}`)
		.setFooter({text: `${result[1].trickburn}`})
		message.channel.send({embeds: [tb]})
	}
}
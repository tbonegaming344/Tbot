const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `brickster`,
	aliases: [`chemister`],
	category: `Rustbolt(RB)`, 
	run: async(client, message, args)=> {
		let [result] = await db.query(`select brickster from rbdecks`)
		let brick = new EmbedBuilder()
		.setTitle("Brickster")
		.setDescription(`${result[2].brickster}`)
		.setColor("Random")
		.setFooter({text:`${result[1].brickster}`})
		.addFields({name: "Deck Cost",
							 	value: `${result[0].brickster}`
							 })
		.setImage(`${result[3].brickster}`)
		message.channel.send({embeds: [brick]})
	}
}
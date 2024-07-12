const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `trickblob`,
	aliases: [`blobster`, `blobtrickster`],
	category: `Rustbolt(RB)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`select trickblob from rbdecks`)
		let tb = new EmbedBuilder()
		.setTitle("TrickBlob")
		.setDescription(`${result[2].trickblob}`)
		.setColor("Random")
		.setFooter({text: `${result[1].trickblob}`})
		.setImage(`${result[3].trickblob}`)
		.addFields({name: "Deck Cost", 
							 	value: `${result[0].trickblob}`})
		message.channel.send({embeds: [tb]})
	}
}
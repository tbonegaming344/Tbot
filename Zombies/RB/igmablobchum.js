const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `igmablobchum`,
	aliases: [`blobchumigma`, `igmablobchumrb`, `igbc`, `ibc`, `blobchum`, `chumblob`, `igmachum`],
	category: `Rustbolt(RB)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`select igmablobchum from rbdecks`)
			let embed = new EmbedBuilder()
	.setTitle("Igma Blob Chum")
	.setDescription(`${result[2].igmablobchum}`)
	.setFooter({text: `${result[1].igmablobchum}`})
			.addFields({name: "Deck Cost", value: `${result[0].igmablobchum}`})
		.setColor("Random")
		.setImage(`${result[3].igmablobchum}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
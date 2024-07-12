const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `racism`,
	aliases: [`pepegabf`, `bfpepega`, `racismbf`, `bfracism`],
	category: `Brain Freeze(BF)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT racism FROM bfdecks`)
		let racism = new EmbedBuilder()
		.setTitle("Racism")
		.setDescription(`${result[2].racism}`)
		.setColor("Random")
		.addFields({name: "Deck Cost", value:`${result[0].racism}`})
		.setFooter({text: `${result[1].racism}`})
.setImage(`${result[3].racism}`)
		message.channel.send({embeds: [racism]})
	}
}
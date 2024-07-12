const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `stacheticia`,
	aliases: [`salticia`, `mustacheim`, `mustacheticia`, `godflare`],
	category: `Immorticia(IM)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT stacheticia FROM imdecks `)
		let st = new EmbedBuilder()
		.setTitle("Stacheticia")
		.setDescription(`${result[2].stacheticia}`)
		.setColor("Random")
		.addFields({name: "Deck Cost",
							 	value: `${result[0].stacheticia}`})
		.setFooter({text: `${result[1].stacheticia}`})
		.setImage(`${result[3].stacheticia}`)
		message.channel.send({embeds: [st]})
	}
}
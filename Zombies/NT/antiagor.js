const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `antiagor`,
	aliases: [`ntexhaust`, `cowboyexhaust`, `colloseumcowboy`, `coloboy`, `agor`, `antiantiantiagor`],
	category: `Neptuna(NT)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT antiagor FROM ntdecks`)
		let coloboy = new EmbedBuilder()
		.setTitle("Anti anti anti agor")
		.setDescription(`${result[2].antiagor}`)
		.addFields({name: "Deck Cost",
							 	value: `${result[0].antiagor}`})
		.setFooter({text: `${result[1].antiagor}`})
		.setColor("Random")
		.setImage(`${result[3].antiagor}`)
		message.channel.send({embeds: [coloboy]})
	}
}
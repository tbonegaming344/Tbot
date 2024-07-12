const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `bustbolt`,
	aliases: [`boltbust`, `bustingbolts`],
	category: `Rustbolt(RB)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`select bustbolt from rbdecks`)
		let bust = new EmbedBuilder()
		.setTitle("BustBolt")
		.setDescription(`${result[2].bustbolt}`)
		.setColor("Random")
			.setFooter({text: `${result[1].bustbolt}`})
		.addFields({name: "Deck Cost", value: `${result[0].bustbolt}`})
		.setImage(`${result[3].bustbolt}`)
		message.channel.send({embeds: [bust]})
	}
}
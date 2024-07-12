const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `marxbolt`,
	aliases: [`coffeeswarm`, `swarmcoffee`],
	category: `Rustbolt(RB)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`select marxbolt from rbdecks`)
		let marxbolt = new EmbedBuilder()
		.setTitle("Marxbolt")
		.setDescription(`${result[2].marxbolt}`)
		.setFooter({text: `${result[1].marxbolt}`})
		.addFields({name: "Deck Cost:", value: `${result[0].marxbolt}`})
		.setColor("Random")
		.setImage(`${result[3].marxbolt}`)
		message.channel.send({embeds: [marxbolt]})
	}
}
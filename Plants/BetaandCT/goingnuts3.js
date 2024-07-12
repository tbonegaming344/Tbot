const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `goingnuts3`,
	aliases: [`gn3`, `3gn`, `gonutsthreenut`, `gonuts3nut`, `3gn`, `3gonuts`, `going3nuts`, `go3nuts`, `goingnuts`],
	category: `Beta-Carrotina/Citron`,
	run: async(client, message, args)=> {
		let [result] = await db.query("SELECT going3nuts FROM ctdecks")
		let gn3 = new EmbedBuilder()
		.setTitle("Going Nuts 3")
		.setDescription(`${result[2].going3nuts}`)
		.setColor("Random")
		.setFooter({text: `${result[1].going3nuts}`})
		.addFields({name: "Deck Cost",
							 	value: `${result[0].going3nuts}`})
		.setImage(`${result[3].going3nuts}`)
		message.channel.send({embeds: [gn3]})
	}
}
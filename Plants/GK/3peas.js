const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `3-pea`,
	aliases: [`3pea`, `threepea`, `three-pea`],
	category: `Grass Knuckles(GK)`,
	run: async(client, message, args)=> {
		let [result]= await db.query(`SELECT pea3 from gkdecks`)
		let tp = new EmbedBuilder()
		.setTitle("3-Pea")
		.setDescription(`${result[2].pea3}`)
		.setColor("Random")
		.setFooter({text: `${result[1].pea3}`})
		.setImage(`${result[3].pea3}`)
		.addFields({name: "Deck Cost",
							 	value: `${result[0].pea3}`})
		message.channel.send({embeds: [tp]})
	}
}
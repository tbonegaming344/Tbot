const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `peatempo`,
	aliases: [`igmapeatempo`, `tempopea`, `tempopeas`],
	category: `Green Shadow(GS)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT peatempo from gsdecks`);
		let pt = new EmbedBuilder()
		.setTitle("Igma Pea Tempo")
		.setDescription(`${result[2].peatempo}`)
		.setColor("Random")
		.setImage(`${result[3].peatempo}`)
		.addFields({name: "Deck Cost",
							 	value: `${result[0].peatempo}`})
		.setFooter({text: `${result[1].peatempo}`})
		message.channel.send({embeds: [pt]})
	}
}
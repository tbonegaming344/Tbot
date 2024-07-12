const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `grapeotk`,
	aliases: [`otkgrape`, `otkgrapes`, `grapesotk`, `igmagrapeotk`, `igmaotkgrape`],
	category: `Grass Knuckles(GK)`,
	run: async(client, message, args)=> {
		let [result]= await db.query(`SELECT grapeotk from gkdecks`)
		let otkg = new EmbedBuilder()
		.setTitle("Grape OTK")
		.setDescription(`${result[2].grapeotk}`)
		.setColor("Random")
		.setFooter({text: `${result[1].grapeotk}`})
	.addFields({name: "Deck Cost", value: `${result[0].grapeotk}`})
			.setImage(`${result[3].grapeotk}`)
		message.channel.send({embeds: [otkg]})
	}
}
const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `flagtor`,
	aliases: [`t3flag`, `t3raptor`],
	category: `Neptuna(NT)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`select flagtor from ntdecks`)
		let ftor = new EmbedBuilder()
		.setTitle("Flagtor")
		.setDescription(`${result[2].flagtor}`)
		.setColor("Random")
		.setFooter({text: `${result[1].flagtor}`})
		.addFields({name: "Deck Cost", value: `${result[0].flagtor}`})
		.setImage(`${result[3].flagtor}`)
		message.channel.send({embeds: [ftor]})
	}
}
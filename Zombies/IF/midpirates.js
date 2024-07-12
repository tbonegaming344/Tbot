const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `midpirates`,
	aliases: [`fryrates`, `frypirates`, `midrates`, `frymidpirates`, `frymidrates`],
	category: `Impfinity(IF)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT midpirates FROM ifdecks`)
		let mp = new EmbedBuilder()
		.setTitle("Mid-Pirates")
		.setDescription(`${result[2].midpirates}`)
		.setColor("Random")
		.setFooter({text: `${result[1].midpirates}`})
		.addFields({name: "Deck Cost", value: `${result[0].midpirates}`})
		.setImage(`${result[3].midpirates}`)
		message.channel.send({embeds: [mp]})
	}
}
const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `blomboticia`,
	aliases: [`budgetblob`, `maxbudgetim`, `maxbudgetimmortica`, `budgettoss`, `tossbudget`],
	category: `Immorticia(IM)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT blomboticia from imdecks`)
		let blomb = new EmbedBuilder()
		.setTitle("Budget Blomboticia")
		.setDescription(`${result[2].blomboticia}`)
		.setColor("Random")
.addFields({name: "Deck Cost", value: `${result[0].blomboticia}`})	
	.setImage(`${result[3].blomboticia}`)
		.setFooter({text: `${result[1].blomboticia}`})
		message.channel.send({embeds: [blomb]})
	}
}
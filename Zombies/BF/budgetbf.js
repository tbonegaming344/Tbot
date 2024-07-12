const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `budgetbf`,
	aliases: [`bfbudget`, `bbf`, `bfb`],
	category: `Brain Freeze(BF)`,
		run: async(client, message, args) => {
			let [result] = await db.query(`SELECT budgetbf FROM bfdecks`)
					let budgetbf= new EmbedBuilder()
	.setTitle("BF Budget Piratein")
	.setDescription(`${result[2].budgetbf}`)
	.setFooter({text: `${result[1].budgetbf}`})
			.addFields({name: "Deck Cost", value: `${result[0].budgetbf}`})
		.setColor("Random")
.setImage(`${result[3].budgetbf}`)
	message.channel.send({embeds: [ budgetbf ] } ) 
		}
}
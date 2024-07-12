const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `budgetburn`,
	aliases: [`ebbudgetburn`, `burnbudget`, `budgetburneb`, `bub`, `budgeteb`],
	category: `Electric Boogaloo(EB)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT budgetburn FROM ebdecks`)
				let budgeteb= new EmbedBuilder()
	.setTitle("Budget Burn")
	.setDescription(`${result[2].budgetburn}`)
	.setFooter({text: `${result[1].budgetburn}`})
			.addFields({name: "Deck Cost", value: `${result[0].budgetburn}`})
		.setColor("Random")
		.setImage(`${result[3].budgetburn}`)
	message.channel.send({embeds: [ budgeteb] } ) 
	}
}
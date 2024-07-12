const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `budgetmopzilla`,
	aliases: [`czbudget`, `bcz`, `budgetcz`, `budgetzilla`, `budgetmopcz`, `czbudgetmop`, `bmz`],
	category: `Chompzilla(CZ)`,
		run: async(client, message, args) => {
			let [result]= await db.query(`SELECT budgetcz from czdecks`)
					let embed = new EmbedBuilder()
	.setTitle("BudgetMopZilla")
	.setDescription(`${result[2].budgetcz}`)
	.setFooter({text: `${result[1].budgetcz}`})
			.addFields({name : "Deck Cost", value: `${result[0].budgetcz}`})
		.setColor("Random")
.setImage(`${result[3].budgetcz}`)
	message.channel.send({embeds: [ embed ] } )
		}
}
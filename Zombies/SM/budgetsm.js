const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `budgetsm`,
	aliases: [`smbudget`, `budgetsmash`, `smashbudget`, `budgetsmswarm`, `smswarmbudget`, `smbudgetsmswarm`],
	category: `Smash(SM)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT budgetsm FROM smdecks`)
				let budgetsm = new EmbedBuilder()
	.setTitle("Budget Swarm")	
			.setDescription(`${result[2].budgetsm}`)
	.setFooter({text: `${result[1].budgetsm}`})
			.addFields({name: "Deck Cost", value: `${result[0].budgetsm}`})	
			.setImage(`${result[3].budgetsm}`)
		.setColor("Random")			
		message.channel.send({embeds: [ budgetsm] } ) 
		}
}
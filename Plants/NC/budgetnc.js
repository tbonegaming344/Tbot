const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `budgetnc`,
	aliases: [`ncbudget`, `budgetswarmnc`, `bnc`],
	category: `NightCap(NC)`,
		run: async(client, message, args) => {
			let [result] = await db.query(`SELECT budgetnc from ncdecks`); 
					let budgetnc = new EmbedBuilder()
	.setTitle("NC Budget Swarm")
	.setDescription(`${result[2].budgetnc}`)
	.setFooter({text: `${result[1].budgetnc}`})
			.addFields({name: "Deck Cost", value: `${result[0].budgetnc}`})
		.setColor("Random")
.setImage(`${result[3].budgetnc}`)
	message.channel.send({embeds: [ budgetnc ] } )
		}
}
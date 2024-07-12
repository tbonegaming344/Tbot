const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `budgetro`,
	aliases: [`robudget`, `budgethmr`, `budgethealmidrose`, `bro`],
	category: `Rose(RO)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT budgetro from rodecks`);
			let bhmr = new EmbedBuilder()
	.setTitle("Budget Heal Midrose")
	.setDescription(`${result[2].budgetro}`)
	.setFooter({text:`${result[1].budgetro}`})
			.addFields({name: "Deck Cost", value: `${result[0].budgetro}`})
		.setColor("Random")
.setImage(`${result[3].budgetro}`)
		message.channel.send({embeds: [ bhmr] } ) 
	}
}
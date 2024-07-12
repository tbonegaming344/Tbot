const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `budgetct`,
	aliases: [`ctbudget`, `bct`, `budgettempoct`,`ctbudgettempo`],
	category: `Beta-Carrotina/Citron`,
	run: async(client, message, args) => {
		let [result] = await db.query("SELECT budgetct FROM ctdecks")
			let budgetct = new EmbedBuilder()
	.setTitle("Budget Tempo")
	.setDescription(`${result[2].budgetct}`)
	.setFooter({text: `${result[1].budgetct}`})
			.addFields({name: "Deck Cost", value: `${result[0].budgetct}`})
		.setColor("Random")
	.setImage(`${result[3].budgetct}`)
	message.channel.send({embeds: [ budgetct] } ) 
	}
}
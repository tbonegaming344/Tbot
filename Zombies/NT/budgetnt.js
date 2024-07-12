const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name:`budgetnt`, 
	aliases: [`ntbudget`, `bnt`, `ntb`,`budgetneptuna`, `bneptuna`, `neptunabudget`, `neptunab`,
`budgetntflag`, `budgetflagnt`, `ntbudgetflag`],
	category: `Neptuna(NT)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT budgetnt FROM ntdecks`)
		let budgetnt = new EmbedBuilder()
	.setTitle("NT Budget Flag")
	.setDescription(`${result[2].budgetnt}`)
	.setFooter({text: `${result[1].budgetnt}`})
			.addFields({name: "Deck Cost", value: `${result[0].budgetnt}`})
		.setColor("Random")
.setImage(`${result[3].budgetnt}`)
	message.channel.send({embeds: [budgetnt ] } ) 
	}
}
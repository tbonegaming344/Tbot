const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
name: `budgetpb`,
	aliases: [`pbbudget`, `budgetbrainstorm`, `bpb`, `pbb`, `budgetsciburn`, 
`budgetsciburnpb`, `sciburnbudget`, `budgetsciburnpb`],
	category: `Professor Brainstorm(PB)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`select budgetpb from pbdecks`)
				let budgetpb = new EmbedBuilder()
	.setTitle("Budget Sciburn")	
			.setDescription(`${result[2].budgetpb}`)
	.setFooter({text: `${result[1].budgetpb}`})
			.addFields({name: "Deck Cost", value: `${result[0].budgetpb}`})	
					.setImage(`${result[3].budgetpb}`)
		.setColor("Random")			
	message.channel.send({embeds: [ budgetpb ] } ) 
		}
}
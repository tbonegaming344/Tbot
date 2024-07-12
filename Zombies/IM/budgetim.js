const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `budgetim`,
	aliases: [`imbudget`, `budgetimmortica`, `bim`, `imb`, `budgetblobim`, `imbudgetblob`],
	category: `Immorticia(IM)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT budgetim FROM imdecks`)
				let embed = new EmbedBuilder()
	.setTitle("Budget Blob")	
			.setDescription(`${result[2].budgetim}`)
	.setFooter({text:`${result[1].budgetim}`})
			.addFields({name: "Deck Cost", value: `${result[0].budgetim}`})	
			.setImage(`${result[3].budgetim}`)
		.setColor("Random")			
	message.channel.send({embeds: [ embed ] } ) 
		}
}
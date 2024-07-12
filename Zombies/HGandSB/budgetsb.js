const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `budgetsb`,
	aliases: [`sbbudget`, `budgetsuperbrains`, `superbrainsbudget`, `bsb`, `budgetscisctaches`, `sciencestachesbudget`, `budgetscistaches`, `scistachesbudget`],
	category: `Huge-Gigantacus/SuperBrainz`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT budgetsb FROM sbdecks`)
    let budgetsb= new EmbedBuilder()
	.setTitle("Budget Science Staches")
	.setDescription(`${result[2].budgetsb}`)
	.setFooter({text: `${result[1].budgetsb}`})
			.addFields({name: "Deck Cost", value: `${result[0].budgetsb}`})
		.setColor("Random")		
		.setImage(`${result[3].budgetsb}`)
	message.channel.send({embeds: [ budgetsb] } ) 
  }
}
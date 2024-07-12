const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `budgetburstsp`,
	aliases: [`spbudget`, `bsp`, `budgetsp`, `budgetbartin`],
	category: `Spudow(SP)`,
		run: async(client, message, args) => {
			let [result] = await db.query(`SELECT budgetburstsp from spdecks`);
				let budgetsp = new EmbedBuilder()
	.setTitle("SP Budget Burst")
	.setDescription(`${result[2].budgetburstsp}`)
	.setFooter({text: `${result[1].budgetburstsp}`})
			.addFields({name: "Deck Cost", value: `${result[0].budgetburstsp}`})
		.setColor("Random")
.setImage(`${result[3].budgetburstsp}`)
	message.channel.send({embeds: [ budgetsp] } ) 
		}
}
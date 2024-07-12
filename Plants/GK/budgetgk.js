const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `budgettempogk`,
	aliases: [`gkbudget`, `bgk`, `budgetgk`],
	category: `Grass Knuckles(GK)`,
	run: async(client, message, args) => {
		let [result]= await db.query(`SELECT budgetgk from gkdecks`)
				let budgetgk = new EmbedBuilder()
	.setTitle("Gk Budget Tempo")
	.setDescription(`${result[2].budgetgk}`)
	.setFooter({text: `${result[1].budgetgk}`})
			.addFields({name: "Deck Cost", value: `${result[0].budgetgk}`})
		.setColor("Random")
.setImage(`${result[3].budgetgk}`)
	message.channel.send({embeds: [ budgetgk ] } )
	}
}
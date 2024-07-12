const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `budgetif`,
	aliases: [`ifgraveburn`, `ifgb`, `bif`, `ifb`, `impfinitybudget`, `impfinitygraveburn`, `impfinitygb`, `impfinityb`, `ifbudgetgraveburn`, `budgetgraveburnif`, `budgetgraveburn`],
	category: `Impfinity(IF)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT budgetif FROM ifdecks`)
		let budgetif = new EmbedBuilder()
	.setTitle("IF Budget Grave Burn")	
	.setDescription(`${result[2].budgetif}`)
	.setFooter({text: `${result[1].budgetif}`})
			.addFields({name: "Deck Cost", value: `${result[0].budgetif}`})
		.setColor("Random")			
		.setImage(`${result[3].budgetif}`)
	message.channel.send({embeds: [ budgetif] } ) 
	}
}
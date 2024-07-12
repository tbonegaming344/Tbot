const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `cheaperpirates`,
	aliases: [`twoyears`, `cheapermidrates`, `budgetmidrates`, `budgetpiratesif`, 
`cheapermidrate`, `cheaperpirate`, `budgetmidrate`, `ifbudgetpirates`, `ifcheaperpirates`, `ifbudgetmidrates`, 
`ifcheapermidrates`, `ifcheapermidrate`, `ifcheaperpirate`, `ifbudgetmidrate`, `ifbudgetpirate`],
	category: `Impfinity(IF)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT cheaperpirates FROM ifdecks`)
			let test = new EmbedBuilder()
		.setTitle("Cheaper pirates")
		.setDescription(`${result[2].cheaperpirates}`)
		.setImage(`${result[3].cheaperpirates}`)
			.setFooter({text: `${result[1].cheaperpirates}`})
				.addFields({name: "Deck Cost", value: `${result[0].cheaperpirates}`})
		.setColor("Random")
	message.channel.send({embeds: [test]})
	}
}
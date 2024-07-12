const {EmbedBuilder} = require("discord.js")
let db = require("../../index.js")
module.exports = {
	name: `budgetmodshadow`,
	aliases: [`budgetgs`,`gsbudget`, `budgetgreenshadow`, `greenshadowbudget`, `budgetmopgs`, `gsbudgetmop`, `bgsmop`],
	category: `Green Shadow(GS)`, 
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT budgetgs from gsdecks`);
				let budgetgs = new EmbedBuilder()
	.setTitle("GS Budget Mop")
	.setDescription(`${result[2].budgetgs}`)
	.setFooter({text:`${result[1].budgetgs}`})
			.addFields({name: "Deck Cost", value:`${result[0].budgetgs}`})
		.setColor("Random")
.setImage(`${result[3].budgetgs}`)
	message.channel.send({embeds: [ budgetgs ] } )
}
}
const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `budgetswarmsf`,
	aliases: [`sfbudgetswarn`, `bsfswarm`, `budgetswarmflare`, `flareswarmbudget`, `budgetsfswarm`, `solarflarebudgetswarm`, `budgetsf`, `sfbudget`, `budgetsolarflare`, `solarflarebudget`, `budgetswarmflare`],
	category: `Solar Flare(SF)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT budgetswarmsf from sfdecks`);
			let budgetswarm = new EmbedBuilder()
	.setTitle("SF Budget Swarm")
	.setDescription(`${result[2].budgetswarmsf}`)
	.setFooter({text: `${result[1].budgetswarmsf}`})
			.addFields({name: "Deck Cost", value: `${result[0].budgetswarmsf}`})
		.setColor("Random")
.setImage(`${result[3].budgetswarmsf}`)
	message.channel.send({embeds: [ budgetswarm ] } ) 
	}
}
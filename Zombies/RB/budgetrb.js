const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `budgetrb`,
	aliases: [`rbbudget`, `budgetrustbolt`, `rustboltbudget`, `budgetswarmrb`, `swarmbudgetrb`, `rbbudgetswarm`],
	category: `Rustbolt(RB)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`select budgetrb from rbdecks`)
				let budgetrb= new EmbedBuilder()
	.setTitle("Budget Swarm")	
			.setDescription(`${result[2].budgetrb}`)
	.setFooter({text: `${result[1].budgetrb}`})
			.addFields({name: "Deck Cost", value: `${result[0].budgetrb}`})	
			.setImage(`${result[3].budgetrb}`)
		.setColor("Random")			
	message.channel.send({embeds: [ budgetrb ] } ) 
		}
}
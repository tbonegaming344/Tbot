const {EmbedBuilder} = require("discord.js");
let db = require('../../index.js')
module.exports = {
	name: `budgetzm`,
	aliases: [`zmbudget`, `bzm`, `zmb`],
	category: `Zmech(ZM)`,
		run: async(client, message, args) => {
			let [result] = await db.query(`SELECT budgetzm FROM zmdecks`);
			let budgetzm = new EmbedBuilder()
	.setTitle("ZM Budget Swarm")
	.setDescription(`${result[2].budgetzm}`)
	.setFooter({text: `${result[1].budgetzm}`})
			.addFields({name: "Deck Cost", value: `${result[0].budgetzm}`})
		.setColor("Random")
.setImage(`${result[3].budgetzm}`)
	message.channel.send({embeds: [ budgetzm ] } ) 
		}
}
const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `unofinity`,
	aliases: [`ifuno`, `unoif`],
	category: `Impfinity(IF)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT unoif FROM ifdecks`)
					let embed = new EmbedBuilder()
	.setTitle("IF Uno")
	.setDescription(`${result[2].unoif}`)
	.setFooter({text: `${result[1].unoif}`})
		.setColor("Random")
				.addFields({name: "Deck Cost", value:`${result[0].unoif}`})	
			.setImage(`${result[3].unoif}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
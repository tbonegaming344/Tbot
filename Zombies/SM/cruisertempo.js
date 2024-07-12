const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `cruisertempo`,
	aliases: [`tempocruiser`, `smtempocruiser`, `tempocruisersm`, `crt`],
	category: `Smash(SM)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT cruisertempo FROM smdecks`)
			let embed = new EmbedBuilder()
	.setTitle("Cruiser Tempo")
	.setDescription(`${result[2].cruisertempo}`)
	.setFooter({text: `${result[1].cruisertempo}`})
			.addFields({name: "Deck Cost", value: `${result[0].cruisertempo}`})
		.setColor("Random")
		.setImage(`${result[3].cruisertempo}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
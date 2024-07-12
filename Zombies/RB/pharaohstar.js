const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `pharaohster`,
	aliases: [`pharaohtrickster`, `pt`],
	category: `Rustbolt(RB)`,
	run: async(client, message, args) =>{
		let [result] = await db.query(`select pharaohster from rbdecks`)
		let embed = new EmbedBuilder()
	.setTitle("Pharaohster")
	.setDescription(`${result[2].pharaohster}`)
	.setFooter({text: `${result[1].pharaohster}`})
				.addFields({name: "Deck Cost", value: `${result[0].pharaohster}`})
		.setColor("Random")
		.setImage(`${result[3].pharaohster}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
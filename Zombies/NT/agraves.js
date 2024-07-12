const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `agraves`,
	aliases: [`ntagraves`, `agravesnt`, `ag`],
	category: `Neptuna(NT)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT agraves FROM ntdecks`)
		let embed = new EmbedBuilder()
	.setTitle("A-Graves")
	.setDescription(`${result[2].agraves}`)
	.setFooter({text: `${result[1].agraves}`})
			.addFields({name: "Deck Cost", value: `${result[0].agraves}`})
		.setColor("Random")
		.setImage(`${result[3].agraves}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
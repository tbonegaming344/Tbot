const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `valkster`,
	aliases: [`valktrickster`, `valksterpb`, `pbvalkster`, `vt`, `valktricksterhybrid`, `valksterhybrid`, `vster`],
	category: `Professor Brainstorm(PB)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT valkster FROM pbdecks`)
		let embed = new EmbedBuilder()
	.setTitle("Valkster")
	.setDescription(`${result[2].valkster}`)
	.setFooter({text: `${result[1].valkster}`})
			.addFields({name: "Deck Cost", value: `${result[0].valkster}`})
		.setColor("Random")
		.setImage(`${result[3].valkster}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
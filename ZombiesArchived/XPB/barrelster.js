const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `barrelster`,
	aliases: [`barreltrickster`],
	category: `Professor Brainstorm(PB)`,
		run: async(client, message, args) => {
			let [result] = await db.query(`SELECT barrelster FROM pbdecks`)
				let embed = new EmbedBuilder()
	.setTitle("Barrelster")
	.setDescription(`${result[2].barrelster}`)
	.setFooter({text:`${result[1].barrelster}`})
			.addFields({name: "Deck Cost", value: `${result[0].barrelster}`})
		.setColor("Random")
.setImage(`${result[3].barrelster}`)
	message.channel.send({embeds: [ embed ] } )
		}
}
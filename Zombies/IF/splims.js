const {EmbedBuilder} = require("discord.js");
let db = require('../../index.js') 
module.exports = {
	name: `splimps`,
	aliases: [`ifsplimps`, `spi`, `slims`, `splims`],
	category: `Impfinity(IF)`,
		run: async(client, message, args) => {
			let [result] = await db.query(`SELECT splimps FROM ifdecks`)
	let embed = new EmbedBuilder()
	.setTitle("Splimps")
	.setDescription(`${result[2].splimps}`)
	.setFooter({text: `${result[1].splimps}`})
			.addFields({name: "Deck Cost", value: `${result[0].splimps}`})
		.setColor("Random")
		.setImage(`${result[3].splimps}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
		}
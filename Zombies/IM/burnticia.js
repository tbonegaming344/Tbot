const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name:  `burnticia`,
	aliases: [`imburn`, `burnim`, `burnt`],
	category: `Immorticia(IM)`,
		run: async(client, message, args) => {
			let [result] = await db.query(`SELECT burnticia FROM imdecks`)
				let embed = new EmbedBuilder()
			.setTitle("Burnticia")
			.setDescription(`${result[2].burnticia}`)
			.setFooter({text: `${result[1].burnticia}`})
			.addFields({name: "Deck Cost", value: `${result[0].burnticia}`})
		.setColor("Random")
.setImage(`${result[3].burnticia}`)
	message.channel.send({embeds: [ embed ] } ) 
		}
}
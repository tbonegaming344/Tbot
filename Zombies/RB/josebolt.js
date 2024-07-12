const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `josebolt`,
	aliases: [`blotjose`, `job`],
	category: `Rustbolt(RB)`,
		run: async(client, message, args) => {
			let [result] = await db.query(`select josebolt from rbdecks`)
			let embed = new EmbedBuilder()
	.setTitle("Jose Bolt")
	.setDescription(`${result[2].josebolt}`)
	.setFooter({text: `${result[1].josebolt}`})
			.addFields({name: "Deck Cost", value: `${result[0].josebolt}`})
		.setColor("Random")
		.setImage(`${result[3].josebolt}`)
	message.channel.send({embeds: [ embed ] } ) 
		}
}
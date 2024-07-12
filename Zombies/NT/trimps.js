const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `trimps`,
	aliases: [`trickimps`, `tri`],
	category: `Neptuna(NT)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`select trimps from ntdecks`)
			let embed = new EmbedBuilder()
	.setTitle("Trimps")
	.setDescription(`${result[2].trimps}`)
	.setFooter({text: `${result[1].trimps}`})
			.addFields({name: "Deck Cost", value:`${result[0].trimps}`})
		.setColor("Random")
		.setImage(`${result[3].trimps}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `igmaticia`,
	aliases: [`imigmaticia`, `igm`, `iticia`],
	category: `Immorticia(IM)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT igmaticia FROM imdecks`)
			let embed = new EmbedBuilder()
	.setTitle("Igmaticia")
	.setDescription(`${result[2].igmaticia}`)
	.setFooter({text: `${result[1].igmaticia}`})
			.addFields({name: "Deck Cost", value: `${result[0].igmaticia}`})
		.setColor("Random")
		.setImage(`${result[3].igmaticia}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
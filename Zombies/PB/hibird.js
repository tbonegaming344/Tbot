const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `hibird`,
	aliases: [`pbhibird`, `hibirdpb`, `hib`, `hbird`],
	category: `Professor Brainstorm(PB)`,
		run: async(client, message, args) => {
			let [result] = await db.query(`SELECT hibird FROM pbdecks`)
			let embed = new EmbedBuilder()
	.setTitle("Hibird")
	.setDescription(`${result[2].hibird}`)
	.setFooter({text: `${result[1].hibird}`})
			.addFields({name: "Deck Cost", value: `${result[0].hibird}`})
		.setColor("Random")
		.setImage(`${result[3].hibird}`)
	message.channel.send({embeds: [ embed ] } ) 
		}
}
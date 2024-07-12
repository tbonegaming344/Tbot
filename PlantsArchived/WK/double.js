const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `double`,
	aliases: [`wkdouble`],
	category: `Wall Knight(WK)`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
	.setTitle("Double")
	.setDescription(`A double is when 2 strikes is landed in a row, and this deck intends to do just that. The successor to “Strike!”, this deck does everything that strike can do, but also addresses the problem of the gravestones and uses defensive measures to ramp, and then use strikethroughs to recreate 1812 overture with strikethrough minions instead of cannons. Zombie heroes would need a lot of removal to deal with this, and even then, there is no guarantees.`)
	.setFooter({text: "Created By Mono#1492"})
				.addFields({name: "Deck Cost", value: "Cost: 54,950 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")	.setImage("https://media.discordapp.net/attachments/1060317261690322994/1065469203378880562/IMG_3711.png?width=576&height=586")
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
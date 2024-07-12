const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `packagemech`,
	aliases: [`mechpackage`, `packmech`, `mechpack`],
	category: `Zmech(ZM)`,
		run: async(client, message, args) => {
			let embed = new EmbedBuilder()
	.setTitle("Zmech Package")
	.setDescription("This is a deck that makes use of the typical crazy and hearty cards then finishes them off with conjured gifts or gti garg")
	.setFooter({text: "Created By Icicle"})
				.addFields({name: "Deck Cost", value: "Cost: 49,850 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")		.setImage("https://media.discordapp.net/attachments/1044626284346605588/1050971600226357289/Screenshot_20221209-205504_PvZ_Heroes.jpg?width=522&height=554")
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}
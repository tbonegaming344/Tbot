const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `ahmdecks`,
	aliases: [`decksmadebyahm`, `ahmhelp`, `helpahm`, `ahmdecklists`, `decklistsforahm`, `ahm`],
		category: `Miscellaneous`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
		.setTitle("AHM Decks")
		.setDescription("My commands for decks made by AHM are \n <@1043528908148052089> bcgaming")
		.setFooter({text: "Decks Made By Ahm", iconURL: "https://images-ext-1.discordapp.net/external/D9GkU5POIUm8fKcLWOjy8GgF6_20c0ItThG7K0fM8K4/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/872725630297440256/5c68aed39313767aaa25cb028b6734ef.png"})
		.setColor("Random")
			
	message.channel.send({embeds: [ embed ] } )
	}
}
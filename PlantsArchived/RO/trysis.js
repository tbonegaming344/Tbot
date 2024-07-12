const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `trysis`,
	aliases: [`tryhardsister`, `sishard`, `sistry`],
	category: `Rose(RO)`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
	.setTitle("Try Sis")
	.setDescription("Try Sis is a deck that tries to get its late game in a turn early with sunflower. Getting in a dmd or cornucopia a turn early can be effect while the hearticoke can syngerize with ketchup and dmd with bog. Eyespore in this deck is a great way to make your late game cards hit face and win the game, can be very effect with magnifying grass and other cards.")
	.setFooter({text: "Created By Tryhard's Sister"})
			.addFields({name: "Deck Cost", value: "Cost: 33,600 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
.setImage("https://media.discordapp.net/attachments/1044626284346605588/1064547528688816188/IMG_0888.png?width=575&height=625")
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
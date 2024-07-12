const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `chumpyard`, 
	aliases: [`quinjetdinobf`, `qdino`, , `quinjetdino`],
	category: `Brain Freeze(BF)`,
	run: async(client, message, args) => {
						let embed = new EmbedBuilder()
	.setTitle("ChumpYard aka Quinjet Dino")	
			.setDescription("Chumpyard aka Quinjet Dino is a deck that makes good combos and makes sure that mondo is always getting value with card like smoke bomb hunting grounds and graveyard. Futhermore this deck also has a lot of different conjuring options to keep modo going.")
	.setFooter({text: "Created By: Salt"})
			.addFields({name: "Deck Cost", value: "Cost: 66,350 sparks <:spar:1057791557387956274>"})	.setImage("https://media.discordapp.net/attachments/1111851053068062860/1111851053219065998/IMG_7548.jpg?width=649&height=604")
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } )
	}
}
const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `ahmtroice`,
	aliases: [`ahmtroicebc`, `atbc`],
	category: `Beta-Carrotina/Citron`,
		run: async(client, message, args) => {
				let embed = new EmbedBuilder()
	.setTitle("AHM Troice")
	.setDescription("A collab deck made by AHM and Troicesdy that utilizes dino roar with bird and has ways to control various decks with all the grave removal alongside brainna and dmd stopping tricks and finishing the opponent off")
	.setFooter({text: "Created By AHM and Troicesdy"})
			.addFields({name: "Deck Cost", value:"Cost: 83,050 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
.setImage("https://media.discordapp.net/attachments/1044626284346605588/1046069543598047253/IMG_9423.png?width=556&height=604")
	
	message.channel.send({embeds: [ embed ] } )
		}
}
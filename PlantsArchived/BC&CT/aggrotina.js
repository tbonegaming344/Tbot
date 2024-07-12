const {EmbedBuilder } = require("discord.js")
module.exports = {
	name: `aggrotina`,
	aliases: [`aggratina`, `aggro_tina`],
	category: `Beta-Carrotina/Citron`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
	.setTitle("Aggro Carrotina")
	.setDescription("Arguably, Beta Carrotina is the worst hero around. For that, the hero is severely underestimated, and this deck takes full advantage of that. Flood the board as much as possible with all of your one drops, and then activate the Dino roars by playing most of your Carrotina superpowers, or encourage even more damage using the tractor carrot superpower. The corn dog is to control whatever minion the opponent plays while dealing decent damage, while the guacadile is to be placed in the amphibious lane or to counter a big minion, and the photo is to buff up your minions while conjuring more bs to use later on. Finally, use your brainana to derive your opponent out of options and win the game.")
	.setFooter({text: "Created By Mono#1492"})
			.addFields({name: "Deck Cost", value: "Cost: 60,300 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")		
		.setImage("https://media.discordapp.net/attachments/1060317261690322994/1065472454287433728/IMG_3712.png?width=573&height=586")
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
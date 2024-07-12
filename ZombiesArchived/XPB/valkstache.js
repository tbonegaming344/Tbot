const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `valkstache`,
	aliases: [`stachevalk`, `mustachevalk`, `valkcontrol`, `controlvalk`],
	category: `Professor Brainstorm(PB)`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
	.setTitle("Valk Stache")	
			.setDescription("Valk Stache spends its time controlling opponents with its many removal cards and zombies, while Valkyrie sits in hand waiting to be unleashed with either Teleport or Mustache Monument. Duckstache and Quazard generate card advantage, while Mustache Waxer lets you ramp in the middle of your turn for some devastating synergy. \n Note. made before salt knew about trickstache")
	.setFooter({text: "Created By Salt"})
			.addFields({name: "Deck Cost", value: "Cost: 77,450 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")		.setImage("https://media.discordapp.net/attachments/1030888661581041775/1063096123713134602/controlvalk.jpg")
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
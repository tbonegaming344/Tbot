const {EmbedBuilder} = require("discord.js");
module.exports = {
	name: `healpackage`,
	aliases: [`packageheal`, `infiniteastrocados`, `infiniteastrocadoes`, `infiniteastros`],
	category: `Solar Flare(SF)`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
	.setTitle("Heal Package")	
			.setDescription("Heal Package is mostly made up of Solar cards that commit themselves to the Heal Mid game plan, with Pair Pearadise and Reincarnation added for some extra mid-and-late game strength. Berry Blast helps cover your early game and Veloci-Radish Hunters is a scaling minion that’s tough to remove")
	.setFooter({text: "Created By RCCH"})
			.addFields({name: "Deck Cost", value: "Cost: 74,500 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")		.setImage("https://media.discordapp.net/attachments/1030888661581041775/1063096123180449822/healpackage.jpg")
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
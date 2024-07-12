const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `smashswimmer`,
	aliases: [`smswimmer`, `swimmersm`, `swim`],
	category: `Smash(SM)`,
	run: async(client, message, args)=>{
		let swim = new EmbedBuilder()
		.setTitle("Smash Swimmer")
		.setDescription("A deck that uses secret swimmer but for the Smash. Evolve middle manager or teacher with fossilhead and copy its stats with swimmer. Don't have a fossilhead in your hand yet? Secret agent the manager and copy its stats with swimmer. Finish them off with Going Viral or A22.")
		.setColor("Random")
		
			.setImage("https://media.discordapp.net/attachments/1045888517110251590/1094850159256535070/received_6062685447180054.jpg?width=627&height=586")
		.addFields({name: "Deck Cost", 
							 value: "Cost: 43,350 sparks <:spar:1057791557387956274>"})
		.setFooter({text: "Created by Wild"})
		message.channel.send({embeds: [swim]})
	}
}
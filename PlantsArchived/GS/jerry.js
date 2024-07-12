const Discord = require("discord.js");
const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `jerry`,
	aliases: [`jerrywhat`],
	category: `Green Shadow(GS)`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
	.setTitle("Jerry")	
			.setDescription("A Deck that runs so many <:jerrywho:1057790092510515200> its bound to make your opponent go <:jerrywho:1057790092510515200> at least once")
	.setFooter({text: "Created By: Dtw and Toast"})
			.addFields({name: "Deck Cost", value: "Cost: 19,950 <:jerrywho:1057790092510515200>"})
		.setColor("Random")		.setImage("https://media.discordapp.net/attachments/826249840006529054/1044352276816466030/unknown.png")
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `ajerry`,
	aliases: [`ajerrywhat`, `jerrygraves`, `aj`],
	category: `Neptuna(NT)`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
	.setTitle("AJerry")	
			.setDescription("A Deck that runs so many <:jerrywho:1057790092510515200> gravestones its bound to confuse and make your opponent go <:jerrywho:1057790092510515200> at least once")
	.setFooter({text: "Created By: Glass In A Bin"})
			.addFields({name: "Deck Cost", value: "Cost: 72,200 <:jerrywho:1057790092510515200>"})
		.setColor("Random")		.setImage("https://media.discordapp.net/attachments/760579518846206033/1058052005224005712/Untitled80_20220102020027-1.png?width=588&height=588")
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
const Discord = require("discord.js");
const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `snakecarrotina`,
	aliases: [`sc`, `snakebc`, `betasnake`],
	category: `Beta-Carrotina/Citron`,
	run: async(client, message, args) =>	{
	let embed = new EmbedBuilder()
	.setTitle("Snake Carrotina")
	.setDescription("Snake carrotina is a intersting deck that makes good use of keeping snake alive whether its with a teamup a move out of the way with hot date or force field with the early game control galtacta hot date and with brainna and soulpatch as finisher forcefield has two uses here snake and soulpatch")
	.setFooter({text: "Created By Glass in a Bin#1890"})
			.addFields({name: "Deck Cost", value: "Cost: 58,750 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")			.setImage("https://media.discordapp.net/attachments/1029445441705758720/1060950354809868288/Screenshot_20221022-201407_PvZ_Heroes2-1-1.jpg?width=575&height=588")
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
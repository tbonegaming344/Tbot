const Discord = require("discord.js");
const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `memetron`,
	aliases: [`memecountertron`, `mt`],
	category: `Beta-Carrotina/Citron`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
	.setTitle("Memetron")	
			.setDescription("Meme version of <@1043528908148052089> countertron running more meme cards such as starchlord with tough beets being the finisher or spring bean bouncing something in front of a big tric")
	.setFooter({text: "Created By: FryEmUp"})
			.addFields({name: "Deck Cost", value: "Cost: 46,050 sparks <:spar:1057791557387956274>"})
		.setColor("Random")					.setImage("https://media.discordapp.net/attachments/1044626284346605588/1047968774063669358/IMG_9506.png?width=564&height=604")
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
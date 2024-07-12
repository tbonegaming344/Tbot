const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `giftstars`,
	aliases: [`ifgiftstars`, `gfs`],
	category: `Impfinity(IF)`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
			.setTitle("Gift Stars")	
			.setDescription("A deck that is very similar to <@1043528908148052089> spacestars but adds gifts to it which can work with spacetime and also might give some card draw conjure ")
	.setFooter({text: "Created By: Snorting Salt"})
			.addFields({name: "Deck Cost", value: "Cost: 73,900 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")	.setImage("https://media.discordapp.net/attachments/1041382979282423828/1041383270228693132/unknown.png?width=593&height=555")
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
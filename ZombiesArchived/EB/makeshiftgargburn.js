const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `makeshiftgargburn`,
	aliases: [`ebgargburn`, `gargburneb`, `ebgb`, `gbeb`],
	category: `Electric Boogaloo(EB)`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
	.setTitle("Makeshift Garg Burn")
	.setDescription("gargburn but now with boogaloo. \n With the help of cheap cards like conman to solidify your early game presence and gargs with an area 22 to ensure they can hit face and win in the late game")
	.setFooter({text: "Created by Tryhard"})
			.addFields({name: "Deck Cost", value: "Cost: 46,000 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
.setImage("https://media.discordapp.net/attachments/760579518846206033/1063955491669151774/MS_GARGBURN.png")
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
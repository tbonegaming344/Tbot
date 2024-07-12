const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `laddertrollknight`, 
	aliases: [`ltk`, `trollknight`],
	category: `Wall Knight(WK)`,
	run: async(client, message, args) => {
				let embed = new EmbedBuilder()
	.setTitle("Ladder Troll Knight")
	.setDescription("Hey you you ever wanted to troll ranked well hers the deck for trolling ranked with causal early game control like primial potato mine, spikeweed, hot date and gravebuster and ways to control in the late game with wallnut bowling astrovera and corncupia hammer will take out common threats like cowboy")
	.setFooter({text: "Created By Glass in a Bin#1890"})
			.addFields({name: "Deck Cost", value: "Cost: 57,300 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
.setImage("https://media.discordapp.net/attachments/1029445441705758720/1060950355397070858/Screenshot_20221223-013410_PvZ_Heroes2.jpg?width=575&height=588")
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
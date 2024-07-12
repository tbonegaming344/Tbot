const Discord = require("discord.js");
const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `bananaaggro`,
	aliases: [`banaggro`, `aggrobanna`, `aggroban`],
	category: `Green Shadow(GS)`, 
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
	.setTitle("Banna Aggro")
	.setDescription("Running your typical A-beans cards and pairing them with banana snygery, Use half-banana to make your brainanas great late game, and use peel with other cards like roto and shrinking to tech your opponent.")
	.setFooter({text: "By IciclePC"})
			.addFields({name: "Deck Cost", value: "Cost: 64,850 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
.setImage("https://media.discordapp.net/attachments/1044626284346605588/1061305109365137548/Screenshot_2022.11.12_23.35.34.695.png?width=624&height=625")
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
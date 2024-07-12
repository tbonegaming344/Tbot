const Discord = require("discord.js");
const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `reily`,
	aliases: [`relily`, `rl`],
	category: `Beta-Carrotina/Citron`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
	.setTitle("Reilly")
	.setDescription("Reilly AKA just OTK Trica uses lily pad to put your tricarrotops in a safe position while your conjures and insane card draw buffs it to unkillable levels, Marine Bean, ANB and mirror nut can help you win too.")
	.setFooter({text: "By IciclePC"})
			.addFields({name: "Deck Cost", value: "Cost: 52,100 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
.setImage("https://media.discordapp.net/attachments/1044626284346605588/1061305109910405211/Screenshot_2023.01.07_10.19.28.968.png?width=633&height=625")
	
	message.channel.send({embeds: [ embed ] } )
	}
}
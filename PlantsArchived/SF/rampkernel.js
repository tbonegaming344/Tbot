const Discord = require("discord.js");
const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `rampkernel`,
	aliases: [`kernelramp`, `rk`],
	category: `Solar Flare(SF)`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
	.setTitle("Ramp Kernel")
	.setDescription("This is a ramp control deck that makes a lot of good combos with pair paradise. \n  Almost all of the cards can get played into pair paradise and get value. \n Controls early game with kernel pult and berry blast while ramping to the late game with twin sunflower and sunnier shroom to kill your opponent cards with the multiple late game control cards early on.")
	.setFooter({text: "By Glass in a Bin#1890"})
		.addFields({name: "Deck Cost", value: "Cost: 68,350 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
.setImage("https://cdn.discordapp.com/attachments/1029445441705758720/1101947966740250644/Screenshot_20230429-141926_PvZ_Heroes2.jpg")
	
	message.channel.send({embeds: [ embed ] } )
	}
}
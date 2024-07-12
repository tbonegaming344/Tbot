const Discord = require("discord.js");
const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `rampred`,
	aliases: [`redramp`, `rr`, `czrampred`, `rampredcz`, `rrcz`],
	category: `Chompzilla(CZ)`,
		run: async(client, message, args) => {
				let embed = new EmbedBuilder()
	.setTitle("Ramp Red")	
			.setDescription("Running your typical solar finishers with Red Plant-it allows to have plenty to ramp to with your Twin Sunflower and Sunnier Shroom, use red to protect your ramp and get tons of value")
	.setFooter({text: "Created By: IciclePC"})
			.addFields({name: "Deck Cost", value: "Cost: 65,550 sparks <:spar:1057791557387956274>"})	.setImage("https://media.discordapp.net/attachments/1044626284346605588/1061305109633568809/Screenshot_2022.12.31_17.10.21.546.png?width=619&height=625")
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}
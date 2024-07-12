const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `evanshrooms`,
	aliases: [`shroomsevan`],
	category: `NightCap(NC)`,
		run: async(client, message, args) => {
			let embed = new EmbedBuilder()
	.setTitle("Evan Shrooms")
	.setDescription("Evan Shrooms is a mushroom deck that puts a lot of damage in whether it be from punishing your opponent with a punish shroom after a board of mushrooms has been developed with buff. Sportacus will be an anti trick measure as well as a mushroom. Gloom Shroom will surely find plenty of targets in this deck with all the mushrooms.")
	.setFooter({text: "Created By Evan"})
			.addFields({name: "Deck Cost", value: "Cost: 71,200 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")	.setImage("https://media.discordapp.net/attachments/760579518846206033/1066832294482030682/Screenshot_2022-06-13-16-27-21-4552.jpg?width=629&height=625")
	
	message.channel.send({embeds: [ embed ] } ) 
	}	
}
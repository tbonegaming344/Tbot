const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `t3beans`,
	aliases: [`beanst3`],
	category: `Rose(RO)`,
	run: async(client, message, args)=> {
		let t3beans = new EmbedBuilder()
		.setTitle("T3 Beans")
		.setDescription("T3Beans is a deck that utilizes all of rose’s best control plants and perks combined with some beans for some extra wild plays that the opponent wouldn’t expect, It has both a good combination of control and aggro to keep the opponent on their toes at all times and with no chance for them to respond when all of the late game comes in!")
		.addFields({name: "Deck Cost", 
							 value: "Cost: 49,400 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
		
		.setFooter({text: "Made by T3"})
		.setImage("https://media.discordapp.net/attachments/757207808436600912/1132776235529941032/Screenshot_20230723_144811.jpg?width=561&height=580")
		message.channel.send({embeds: [t3beans]})
	}
}
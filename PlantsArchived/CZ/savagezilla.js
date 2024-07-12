const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `savagezilla`,
	category: `Chompzilla(CZ)`,
	run: async(client, message, args)=> {
		let sz = new EmbedBuilder()
		.setTitle("Savagezilla")
		.setDescription("Savage Zilla is a deck that utilizes Savage with cards like brex and elder berry with some heals to boost up your pepper and double mint can surprisingly grow really quick tsf to get an early Savage or brex and pf to finish it off")
		.setColor("Random")
		
		.setFooter({text: "Made By Bowling Bulb Enjoyer| Updated by T3"})
		.addFields({name: "Deck Cost", 
							 	value: "Cost: 43,050 sparks <:spar:1057791557387956274>"})
		.setImage("https://media.discordapp.net/attachments/1045888517110251590/1097876117190352966/Screenshot_20230418_140323.jpg?width=561&height=555")
		message.channel.send({embeds: [sz]})
	}
}
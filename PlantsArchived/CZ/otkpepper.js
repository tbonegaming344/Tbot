const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `otkpepper`,
	aliases: [`oneturnkillpepper`, `otkp`],
	category: `Chompzilla(CZ)`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
	.setTitle("OTK Pepper")	
			.setDescription("OTK Pepper is a deck that attempts to grow pepper as much as possible with various heal combos such as aloesaurus taco etc and then kills the opponents in one turn with a plantfood. ")
	.setFooter({text: "Created By: Tbone"})
			.addFields({name: "Deck Cost", value: "Cost: 46,800 sparks <:spar:1057791557387956274>"})
		.setColor("Random")					.setImage("https://media.discordapp.net/attachments/1044626284346605588/1119829936002318337/IMG_3002.jpg?width=578&height=625")
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
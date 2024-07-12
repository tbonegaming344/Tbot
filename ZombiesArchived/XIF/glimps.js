const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `glimps`,
	aliases: [`glassimps`, `gimps`],
	category: `Impfinity(IF)`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
	.setTitle("Glimps")	
			.setDescription("Glimps is a burn deck that attempts to make imps and a lot of other cards hit face with disconaut alongside the cowboy finisher comboing with sugary treat or moon base z disconaut will assure a lot of damge can hit face with it giving most minions here bullseye")
	.setFooter({text: "Created By: Glass in a Bin#1890"})
			.addFields({name: "Deck Cost", value: "Cost: 50,250 sparks <:spar:1057791557387956274>"})	.setImage("https://media.discordapp.net/attachments/1029445441705758720/1060950353719349408/Screenshot_20221204-225311_PvZ_Heroes2.jpg?width=610&height=625")
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
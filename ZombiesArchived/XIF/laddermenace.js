const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `laddermenace`,
	aliases: [`menace`],
	category: `Impfinity(IF)`,
	run: async(client, message, args) => {
     let embed = new EmbedBuilder()
  	.setTitle("Ladder Menace")
	.setDescription("This deck will really Annoy your Opponent! All of these cards are pretty standard but very annoying to deal with, other than Garg Throwing Imp. Garg Throwing Imp on Graveyard will guarantee you get a Garg because your opponent will NOT let a turn 5 gravestone hit face which means they'll front your card almost immediately!")
	.setFooter({text: "By Glass in a Bin#1890"})
		.setColor("Random")	.setImage("https://media.discordapp.net/attachments/1029445441705758720/1071045186643304469/Screenshot_20230202-190106_PvZ_Heroes2.jpg?width=608&height=625")
			.addFields({name: "Deck Cost", value: "Cost:  64,200 Sparks <:spar:1057791557387956274>"})
	
	message.channel.send({embeds: [ embed ] } ) 
  }
}
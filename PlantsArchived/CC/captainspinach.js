const Discord = require("discord.js");
const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `captainspinach`,
	aliases: [`cs`, `spinachcc`],
	category: `Captain Combustible(CC)`,
		run: async(client, message, args) => {
				let embed = new EmbedBuilder()
	.setTitle("Captain Spinach")
	.setDescription("Captain spinach is a deck that allows a deck that makes use of savage once a good board has been built up including teamups like puffshroom and vrh and umbrella you can get a huge board with attack for spinach or sonic bloom which are the main finishers here alongside cucc conjuring win cons you could also go early game aggro with cards like bonk and split pea etc")
	.setFooter({text: "Created By Glass in a Bin#1890"})
			.addFields({name: "Deck Cost", value: "Cost:  49,950 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
.setImage("https://media.discordapp.net/attachments/1029445441705758720/1060950355933941810/Screenshot_20221224-142904_PvZ_Heroes2.jpg?width=576&height=588")
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}
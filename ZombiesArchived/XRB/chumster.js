const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `chumster`,
	aliases: [`chumtrickster`],
	category: `Rustbolt(RB)`,
	run: async(client, message, args) => {
				let embed = new EmbedBuilder()
	.setTitle("Chumster")
			.setDescription("This is probably the Best Chum Champion deck you'll ever see! This deck makes use of black and removal cards to synergize with Chum Champion to make sure you get value! All of these removal cards paired with teacher will also help you get Trickster faster! This combo between the removal cards, Chum Champion, and Trickster, make a deadly force to be reckoned with!")
	.setFooter({text: "Created By: Glass in a Bin#1890"})
			.addFields({name: "Deck Cost", value: "Cost: 82,850 sparks <:spar:1057791557387956274>"})	.setImage("https://media.discordapp.net/attachments/1029445441705758720/1071045217890881619/Screenshot_20230127-080730_PvZ_Heroes2.jpg?width=612&height=625")
		.setColor("Random")
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}
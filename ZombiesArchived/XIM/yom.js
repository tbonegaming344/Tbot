const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `yom`,
	aliases: [`youngoctomartin`],
	category: `Immorticia(IM)`,
		run: async(client, message, args) => {
		let embed = new EmbedBuilder()
	.setTitle("Young Octo Martin")	
			.setDescription("This deck is the YKM of Immorticia! This deck makes use of Cards like Goat and brain vendor to ramp to your expensive cards using Nebula, as a plus, Cat lady is here to synergise with your expensive pet cards, your goat which you're using to ramp, your signature super, and Duckstache! Duckstache is here to synergize with your cat lady AND to fuel your Mechasaur! Octo zombie is especially hard to remove with it being an 8/8 with frenzy which will always return to your hand when destroyed!")
	.setFooter({text: "Created By: Glass in a Bin#1890"})
			.addFields({name: "Deck Cost", value: "Cost: 84,500 sparks <:spar:1057791557387956274>"})
		.setColor("Random")				.setImage("https://media.discordapp.net/attachments/1029445441705758720/1071045242838601789/Screenshot_20230107-225430_PvZ_Heroes2-1-1.jpg?width=618&height=625")
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
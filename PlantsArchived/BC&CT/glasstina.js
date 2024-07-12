const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `glasstina`,
	aliases: [`glasstinabin`, `giab`, `glasscarrotina`],
	category: `Beta-Carrotina/Citron`,
	run: async(client, message, args) => {
				let embed = new EmbedBuilder()
	.setTitle("Glass Tina Bin")
	.setDescription("Glasstina makes use of Bog of Enlightenment as a damage buff for the several amphibious plants in this deck, on top of it also keeping them alive with its strength nerf against zombies. Gain tempo, take control of the board, and finish the game with Brainana")
	.setFooter({text: "Created By Glass In A bin"})
			.addFields({name: "Deck Cost", value: "Cost: 82,000 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
			.setImage("https://cdn.discordapp.com/attachments/1029445441705758720/1101947958666203136/Screenshot_20230426-183025_PvZ_Heroes2.jpg")
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
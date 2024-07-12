const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `bcgaming`,
	aliases: [`gamingbc`, `bg`],
	category: `Beta-Carrotina/Citron`,
		run: async(client, message, args) => {
		let embed = new EmbedBuilder()
	.setTitle("BC Gaming")	
			.setDescription("a control deck that can turn into an aggro deck if needed, forget me nuts and lima are good control/aggro cards, garlic is good at putting a big body to chumplock, you run jelly bean to use it in aggro to finish off the opponent or control for the late game, you use guard and soul patch to protect face since they are big bodies that protect your hero somehow, and you finish them off with bowling or dragon (note: soul patch can also win games since that 5 damage is a ton)")
	.setFooter({text: "Created By: Ahm"})
			.addFields({name: "Deck Cost", value: "Cost: 82,750 sparks <:spar:1057791557387956274>"})
		.setColor("Random")					.setImage("https://media.discordapp.net/attachments/1048951016529350746/1048951088612659301/Screenshot_20221016_170455.jpg?width=464&height=555")
	
	message.channel.send({embeds: [ embed ] } )
		}
}
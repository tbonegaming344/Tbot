const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `eloequation`,
	aliases: [`equation`, `whatstheeloequation`, `eloformula`, `formula`],
	category: `Miscellaneous`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
			.setTitle("Elo Equation")
			.setDescription("So you wanna know this whole elo system works with different points and variations then you can use the equation below and this is in general how the equation work with a and b being the players you gain and lose points depending on how many points your opponent has \n in this example below there is a two point difference and you winner would gain 15 and loser would lose 15.")		.setImage("https://media.discordapp.net/attachments/1044038030505283664/1074744872642302042/IMG_1223.png?width=782&height=625")
		.setColor("Random")
			message.channel.send({embeds: [ embed ] } )
	}
}
const Discord = require("discord.js");
const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `strike`,
	aliases: [`strikesf`],
	category: `Solar Flare(SF)`,
		run: async(client, message, args) => {
				let embed = new EmbedBuilder()
	.setTitle("Strike")
	.setDescription("Strike! It’s the name, and the crap ton of strikethrough is the game. Start off with aggro cards of the average aggro solar flare, and then gradually move on into mid game with control of banana launchers, token hammer, and the couple of chip healing of the ketchup mechanics and little buddies, or you could just ramp into your strikethroughs. Once you have enough sun, recreate the siege of Constantinople with your countless strikethrough cards hitting the face of your opponent, and if it does get a little out of control, put down the cob cannon to punish and remove the big minion, and then deal a lot more damage to to your opponent.")
	.setFooter({text: "Created By Mono#1492 | Inspired by FryEmUp"})
			.addFields({name: "Deck Cost", value: "Cost:  52,500 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
.setImage("https://media.discordapp.net/attachments/1060317261690322994/1065465617005678652/IMG_3710.png?width=564&height=586")
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
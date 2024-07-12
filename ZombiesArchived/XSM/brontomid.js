const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `brontomid`,
	aliases: [`midbronto`],
	category: `Smash(SM)`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
	.setTitle("Bronto Mid")
	.setDescription("A tempo deck which uses fossilhead and turquoise skull zombie as growing bodies, more so when combined with our tempo cards, especially against non-solar heroes. Mondo Bronto can be used as removal in this deck, both zombie phase AND trick phase with the use of zmm, terrify, and gv. Lastly, terrify isn't just for mondo synergy, it can also be used to move plants that would trade with your big bodies for them to hit face! ")
	.setFooter({text: "Created By WydeMouth#3169"})
			.addFields({name: "Deck Cost", value: "Cost: 51,350 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
.setImage("https://media.discordapp.net/attachments/940369914957549578/1064704022671536128/Screenshot_2023-01-17-08-25-44-697_com.ea.gp.pvzheroes-edit.jpg?width=600&height=625")
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
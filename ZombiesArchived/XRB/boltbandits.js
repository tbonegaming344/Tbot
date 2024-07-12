const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `boltbandits`,
	aliases: [`banditsbolt`, `boltboltsunbandits`, `sunbanditsboltbolt`, `boltband`],
	category: `Rustbolt(RB)`,
	run: async(client, message, args) => {
				let bolt = new EmbedBuilder()
	.setTitle("Bolt Bandits")
	.setDescription("Combining the early game of bolt bolt with the late game of sun bandits, you'll feel unstoppable in every turn of the match. Going viral adds more kick to your sun stealers as the pharaoh and mechasaur conquer your opponent in classic 1 HP style.")
	.setFooter({text: "Created By Bonicus_The_Great | Inspired by Sushi and Ken Martin"})
			.addFields({name: "Deck Cost", value: "Cost:  66,400 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")	.setImage("https://media.discordapp.net/attachments/760579518846206033/1058719409440575508/Screenshot_20221231-231233.png?width=593&height=625")
	
	message.channel.send({embeds: [ bolt ] } ) 
	}
}
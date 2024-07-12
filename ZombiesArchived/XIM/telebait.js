const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `telebait`,
	aliases: [`teleportbait`, `baitteleport`],
	category: `Professor Brainstorm(PB)`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
	.setTitle("Telebait")
	.setDescription("This deck is a Menace. Nice early game control, you bait people into fronting newspaper turn 2 in Lane 4 by making them think its a teleportation zombie, nice splash control with fire works and barrel, you eventually go into late game where you can play Gas Giant and Binary. Binary works with literally all of your deck, and it also works with Gas Giant. Gas Giant is a Great finisher here, it does 10 damage to face with Binary with the added bonus of having splash to boost your newspaper, speaking of Bonus, lurch for lunch is Great and it helps you break through your opponents board easily which  adds a TON of pressure.")
	.setFooter({text: "Created By Glass in a Bin#1890"})
			.addFields({name: "Deck Cost", value: "Cost: 71,800 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
.setImage("https://media.discordapp.net/attachments/1029445441705758720/1064932659651952742/Screenshot_20230117-144702_PvZ_Heroes2.jpg?width=576&height=586")
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
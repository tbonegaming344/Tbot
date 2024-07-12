const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `midcruiser`,
	aliases: [`cruisermid`, `midc`],
	category: `Smash(SM)`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
	.setTitle("Mid Cruiser")
	.setDescription("Midcruiser is a deck that makes use of battle cruiser to protect its lategame cards. Battlecruiser can be used to protect frenzy minions allowing them hit face again finishing off the opponent. Hunting grounds will get a lot of vaule with a lot of the cards giving overstuffed ability to hunt around and kill plants and with your supernova allowing it not only hit face also kills most of the opponents late game cards waralord will just add the to the already established growing tempo")
	.setFooter({text: "Created By Glass in a Bin#1890"})
			.addFields({name: "Deck Cost", value: "Cost: 79,000 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")		.setImage("https://media.discordapp.net/attachments/1029445441705758720/1059157458448302140/Screenshot_20230101-171240_PvZ_Heroes2.jpg?width=611&height=625")
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
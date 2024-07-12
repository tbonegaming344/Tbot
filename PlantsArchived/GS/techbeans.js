const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `techbeans`,
	aliases: [`techedabeans`, `tb`],
	category: `Green Shadow(GS)`,
	run: async(client, message, args) => {
				let embed = new EmbedBuilder()
	.setTitle("Abeans Teched")	
			.setDescription("A-Beans or Aggro Beans is one of the most explosive decks greenshadow has to offer. With around 5 ways to win this deck has the versatile function of a convertible and power of an atomic bomb. Zombie heroes beware, this version is more teched towards certain decks with grave flicks")
		.setFooter({text: "By Squeezy and Zscrlett"})
			.addFields({name: "Deck Cost", value: "Cost: 56,250 sparks <:spar:1057791557387956274>"})	
			.setImage("https://media.discordapp.net/attachments/1044626284346605588/1045013336636526643/Screenshot_20201110-145032.png?width=619&height=604")
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `sneezeticia`,
	aliases: [`imsneeze`, `snt`],
	category: `Immorticia(IM)`,
	run: async(client, message, args) =>	{
		let embed = new EmbedBuilder()
	.setTitle("Sneezeticia")
	.setDescription("Sneezeticia is a version of <@1043528908148052089> igmaticia that runs Sneezing Zombie to tech heal decks. Beam Me Up, Extinction Event, Nibble, and your powers help get you through the early-to-mid game. Meanwhile, teleporting Gargantuars are what win you the late game")
	.setFooter({text: "Created By Glass In A Bin"})
				.addFields({name: "Deck Cost", value: "Cost: 101,400 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
.setImage("https://media.discordapp.net/attachments/1044626284346605588/1057708224456962138/IMG_0300.png?width=563&height=625")
	
	message.channel.send({embeds: [ embed ] } )
	}
}
const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `trymech`,
	aliases: [`tryzm`, `tmzm`],
	category: `Zmech(ZM)`,
	run: async(client, message, args) => {
				let embed = new EmbedBuilder()
	.setTitle("Try Mech")
	.setDescription("Tryhard's version of <@1043528908148052089> trickmech running abrcadaver to open up lanes and barrel mission combos with foot solider as a finisher because you should have your opponent down to 3 by turn 5")
	.setFooter({text: "Created By Tryhard"})
			.addFields({name: "Deck Cost", value: "Cost: 43,950 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
.setImage("https://media.discordapp.net/attachments/1044626284346605588/1050583762154573935/IMG_9601.jpg?width=491&height=554")
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
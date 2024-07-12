const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `binary22`,
	aliases: [`binaryarea22`, `ebbinary22`, `binary22eb`, `b22`],
	category: `Electric Boogaloo(EB)`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
	.setTitle("Binary 22")
	.setDescription("Binary 22 Is A Deck That Attempts To Legitimately Push The Dancing Tribe To It's Limits. Area 22 Is The Main Support Card That Will Ensure Your Minions Have The Stats They Need to thrive in battle. Loud Mouth is also a gem that is often ignored which makes it a great target for headhunter.")
	.setFooter({text: "Created By Sushi inspired by LGTYQZ"})
			.addFields({name: "Deck Cost", value: "Cost: 54,950 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
		.setImage("https://media.discordapp.net/attachments/1044626284346605588/1169713910270664814/binary22.jpeg?ex=655667f8&is=6543f2f8&hm=8d5153d442971324f5610cbe&=")
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
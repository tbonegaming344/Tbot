const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `ebmidgargs`,
	aliases: [`midgargseb`, `ebmg`],
	category: `Electric Boogaloo(EB)`,
		run: async(client, message, args) => {
				let embed = new EmbedBuilder()
			.setTitle("Mid Gargs")	
			.setDescription("The early game in this deck will control your opponent in a way where they will never be safe. They are mostly distractions from the gargantuars that come later in the game and the area 22 will make everything harder to deal with. The real aim is to impact the game more with every card you play whether it's protecting one zombie with frenzy or going for conjures from cheese cutter.")
	.setFooter({text: "Created By: Creeperblade | Inspired by Non"})
			.addFields({name: "Deck Cost", value: "Cost: 67,750 sparks <:spar:1057791557387956274>"})
		.setColor("Random")					.setImage("https://media.discordapp.net/attachments/1044626284346605588/1086827999535579286/Screenshot_20230314-100920-656.png?width=606&height=625")
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}
const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `deadbolt`,
	aliases: [`boltdead`, `bfdeadbolt`, `deadboltbf`, `dbolt`],
	category: `Brain Freeze(BF)`,
	run: async(client, message, args) => {
				let embed = new EmbedBuilder()
	.setTitle("Dead Bolt")
	.setDescription("A Deck win 100% winrate in the pvzhtourney Deck that makes use of graveyard with cowboy and other cards area 22 used to give zombies frenzy to finish the game")
	.setFooter({text: "Created By hihi0810"})
			.addFields({name: "Deck Cost", value: "Cost: 65,800 Sparks  <:spar:1057791557387956274>"})
		.setColor("Random")
.setImage("https://media.discordapp.net/attachments/1042381513523724288/1043946686856319107/IMG_0704.png?width=648&height=604")
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
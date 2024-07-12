const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `capped`,
	aliases: [`cappedwk`, `wkcapped`],
	category: `Wall Knight(WK)`,
		run: async(client, message, args) => {
			let embed = new EmbedBuilder()
	.setTitle("Wk Capped")	
			.setDescription("Your standard wk control deck with finisher like cob cannon and aleosauars to keep your health up made to counter crazy midgame with cards like blockbuster killing the common late game gravestones")
	.setFooter({text: "Created By hihi0810"})
			.addFields({name: "Deck Cost", value: "Cost: 49,800 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")		.setImage("https://media.discordapp.net/attachments/1042381513523724288/1044028457891409931/IMG_0720.png?width=638&height=604")
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}
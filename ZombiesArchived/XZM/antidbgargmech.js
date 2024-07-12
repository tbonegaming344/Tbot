const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `antidbgargburn`,
	aliases: [`gargburnanti`, `antigb`],
	category: `Zmech(ZM)`,
	run: async(client, message, args) => {
			let embed = new EmbedBuilder()
	.setTitle("Anti DB Gargburn")
	.setDescription("This version of <@1043528908148052089> gargburn tries to tech db decks running hearty treat to keep gargolist alive also runs more grobbers over conman")
	.setFooter({text: "Created By Sushi"})
			.addFields({name: "Deck Cost", value: "Cost: 43,900 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
.setImage("https://media.discordapp.net/attachments/1044626284346605588/1057457032543867020/Screenshot_20201230-104607.png?width=608&height=587")
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
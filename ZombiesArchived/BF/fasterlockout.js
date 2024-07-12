const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `fasterlockout`,
	aliases: [`fastout`,],
	category: `Brain Freeze(BF)`,
		run: async(client, message, args) => {
				let embed = new EmbedBuilder()
			.setTitle("Faster Lockout")	
			.setDescription("Faster Lockout is the fastest version of <@1043528908148052089> lockout which attempts to win quicker with raptor and sync coping huge stats you can defiently win quicker than the regual lockout build")
	.setFooter({text: "Created By: Rcch"})
			.addFields({name: "Deck Cost", value: "Cost: 66,350 sparks <:spar:1057791557387956274>"})
		.setColor("Random")					.setImage("https://media.discordapp.net/attachments/1044626284346605588/1047559106468266014/IMG_9488.png?width=482&height=554")
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}
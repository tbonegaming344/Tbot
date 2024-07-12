const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `finishformesb`,
	aliases: [`SBfinish`, `sbfinish`, `finishsb`, `finishSB`, `SBfinishforme`, `sbfinishforme`, `finishformeSB`, `ffmsb`],
	category: `Huge-Gigantacus/SuperBrainz`,
	run: async(client, message, args) => {
		const sb = ["https://media.discordapp.net/attachments/1044626284346605588/1055673672708395028/IMG_9744.png?width=524&height=556","https://media.discordapp.net/attachments/1044626284346605588/1055673672955875369/IMG_9743.png?width=512&height=555","https://media.discordapp.net/attachments/1044626284346605588/1055673673224290447/IMG_9742.png?width=522&height=555","https://media.discordapp.net/attachments/1044626284346605588/1055673673459175494/IMG_9741.png?width=525&height=555","https://media.discordapp.net/attachments/1044626284346605588/1055673673685684224/IMG_9740.png?width=534&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055673673987653632/IMG_9739.png?width=518&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055673674260287518/IMG_9738.png?width=505&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055673674499379210/IMG_9737.png?width=513&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055673674746822726/IMG_9736.png?width=498&height=556", "https://media.discordapp.net/attachments/1044626284346605588/1055673675006873651/IMG_9735.png?width=525&height=554",	]
			let embed = new EmbedBuilder()
	.setTitle("Finish for me Superbrains(SB) deck")
	.setDescription("Your finish for me Superbrains(SB) deck")
		.setColor("Random")
.setImage(sb[Math.floor(Math.random() * sb.length)])
	
	message.channel.send({embeds: [ embed ] } )
	}
}
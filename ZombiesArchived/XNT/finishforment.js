const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `finishforment`,
	aliases: [`NTfinish`, `finishNT`, `finishformeNT`, `ntfinish`, `finishnt`, `neptunafinish`, `finishneptuna`, `neptunafinishforme`, `finishformeneptuna`, `ffmnt`],
	category: `Neptuna(NT)`,
	run: async(client, message, args) => {
	const nt = ["https://media.discordapp.net/attachments/1044626284346605588/1055673440943734814/IMG_9762.png?width=513&height=555","https://media.discordapp.net/attachments/1044626284346605588/1055673441199607929/IMG_9761.png?width=530&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055673441421889586/IMG_9760.png?width=510&height=556","https://media.discordapp.net/attachments/1044626284346605588/1055673441694515270/IMG_9759.png?width=525&height=555",
"https://media.discordapp.net/attachments/1044626284346605588/1055673441979748382/IMG_9758.png?width=525&height=555","https://media.discordapp.net/attachments/1044626284346605588/1055673442243973160/IMG_9757.png?width=524&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055673442499821588/IMG_9756.png?width=508&height=555","https://media.discordapp.net/attachments/1044626284346605588/1055673442747306034/IMG_9754.png?width=525&height=554", "https://media.discordapp.net/attachments/1044626284346605588/1055673442986364988/IMG_9753.png?width=533&height=554", "https://media.discordapp.net/attachments/1044626284346605588/1055673443279962212/IMG_9752.png?width=505&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055673510212665405/IMG_9751.png?width=521&height=554", "https://media.discordapp.net/attachments/1044626284346605588/1055673510514671626/IMG_9750.png?width=525&height=555","https://media.discordapp.net/attachments/1044626284346605588/1055673510791487608/IMG_9748.png?width=508&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055673511101857832/IMG_9747.png?width=510&height=556", "https://media.discordapp.net/attachments/1044626284346605588/1055673511328366613/IMG_9746.png?width=528&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055673511676485672/IMG_9745.png?width=524&height=555"]
		let embed = new EmbedBuilder()
	.setTitle("Finish for me Neptuna(NT) deck")
	.setDescription("Your finish for me Neptuna(NT) deck")
		.setColor("Random")
.setImage(nt[Math.floor(Math.random() * nt.length)])
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
const Discord = require("discord.js");
const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `finishformeRO`,
	aliases: [`finishformero`, `rofinishforme`, `ROfinishforme`, `ROfinish`, `rofinish`, `finishro`, `finishRO`, `ffmro`],
	category: `Rose(RO)`,
	run: async(client, message, args) => {
		const ro = ["https://media.discordapp.net/attachments/1044626284346605588/1055879091208859658/IMG_0078.png?width=575&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055879091796070441/IMG_0077.png?width=596&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055879092098048050/IMG_0076.png?width=569&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055879092437790810/IMG_0075.png?width=584&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055879092706234418/IMG_0074.png?width=582&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055879092966268928/IMG_0073.png?width=572&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055879093259874395/IMG_0072.png?width=578&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055879093587038228/IMG_0071.png?width=584&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055880982328262666/IMG_0088.png?width=582&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055880982688956416/IMG_0087.png?width=574&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055880983087419582/IMG_0086.png?width=566&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055880983485890601/IMG_0085.png?width=584&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055880983930474566/IMG_0084.png?width=567&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055880984358305812/IMG_0083.png?width=587&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055880984811274310/IMG_0082.png?width=606&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055880985264275456/IMG_0081.png?width=554&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055880986056982628/IMG_0080.png?width=609&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055880986505777182/IMG_0079.png?width=592&height=625"]
			let embed = new EmbedBuilder()
	.setTitle("Rose(RO) Finish for me deck")
	.setDescription("Your Rose(RO) finish for me deck")
		.setColor("Random")
.setImage(ro[Math.floor(Math.random() * ro.length)])
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
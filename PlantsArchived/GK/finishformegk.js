const Discord = require("discord.js");
const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `finishformeGK`,
	aliases: [`finishformegk`, `gkfinishforme`, `GKfinishforme`, `GKfinish`, `gkfinish`, `finishgk`, `finishGK`, `ffmgk`],
	category: `Grass Knuckles(GK)`, 
	run: async(client, message, args) => {
		const gk = ["https://media.discordapp.net/attachments/1044626284346605588/1055875456005591081/IMG_0050.png?width=601&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055875456315949127/IMG_0049.png?width=598&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055875456664092692/IMG_0048.png?width=558&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055875456945115136/IMG_0047.png?width=571&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055875457242890350/IMG_0046.png?width=574&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055875457549090978/IMG_0045.png?width=602&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055875457897222144/IMG_0044.png?width=605&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055875458236940379/IMG_0043.png?width=583&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055875458601861140/IMG_0042.png?width=576&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055875458945798194/IMG_0041.png?width=598&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055875509285826630/IMG_0040.png?width=589&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055875509558448169/IMG_0039.png?width=571&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055875509961105528/IMG_0038.png?width=585&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055875510267293736/IMG_0037.png?width=596&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055875510598639616/IMG_0036.png?width=573&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055875510825136231/IMG_0035.png?width=595&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055875511131312278/IMG_0034.png?width=598&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055875511617855539/IMG_0033.png?width=597&height=625"]
		let embed = new EmbedBuilder()
	.setTitle("Grass Knuckles(GK) Finish for me deck")
	.setDescription("Your Grass Knuckles(GK) finish for me deck")
		.setColor("Random")
.setImage(gk[Math.floor(Math.random() * gk.length)])
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
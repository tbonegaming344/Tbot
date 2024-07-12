const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `finishformeim`,
	aliases: [`finishim`, `imfinish`, `IMfinish`, `finishIM`, `finishformeIM`, `imfinishforme`, `IMfinishforme`, `ffmim`],
	category: `Immorticia(IM)`,
		run: async(client, message, args) => {
			const im = ["https://media.discordapp.net/attachments/1044626284346605588/1055684240597078056/IMG_9816.png?width=513&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055684240865493032/IMG_9815.png?width=498&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055684241121357894/IMG_9814.png?width=533&height=556", "https://media.discordapp.net/attachments/1044626284346605588/1055684241381412987/IMG_9813.png?width=510&height=556", "https://media.discordapp.net/attachments/1044626284346605588/1055684241641439332/IMG_9812.png?width=516&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055684241909887066/IMG_9811.png?width=500&height=554", "https://media.discordapp.net/attachments/1044626284346605588/1055684242186719373/IMG_9810.png?width=498&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055684242467717180/IMG_9809.png?width=519&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055684242702610432/IMG_9808.png?width=525&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055684242941694063/IMG_9807.png?width=507&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055684298872725604/IMG_9806.png?width=473&height=499", "https://media.discordapp.net/attachments/1044626284346605588/1055684299183116298/IMG_9805.png?width=483&height=500", "https://media.discordapp.net/attachments/1044626284346605588/1055684299426373703/IMG_9804.png?width=486&height=500", "https://media.discordapp.net/attachments/1044626284346605588/1055684299694821426/IMG_9803.png?width=460&height=499", "https://media.discordapp.net/attachments/1044626284346605588/1055684300013572106/IMG_9802.png?width=445&height=499", "https://media.discordapp.net/attachments/1044626284346605588/1055684300340731914/IMG_9801.png?width=469&height=500", "https://media.discordapp.net/attachments/1044626284346605588/1055684300571430993/IMG_9800.png?width=471&height=499", "https://media.discordapp.net/attachments/1044626284346605588/1055684300835655751/IMG_9799.png?width=468&height=499"]
									let embed = new EmbedBuilder()
	.setTitle("Finish for me Immorticia(IM) deck")
	.setDescription("Your finish for me Immorticia(IM) deck")
		.setColor("Random")
.setImage(im[Math.floor(Math.random() * im.length)])
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}
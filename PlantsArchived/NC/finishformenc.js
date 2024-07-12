const Discord = require("discord.js");
const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `finishformeNC`, 
	aliases: [`finishnc`, `finishNC`, `fnishformenc`, `NCfinish`, `ncfinish`, `ncfinsihforme`, `NCfinishforme`, `ffmnc`],
	category: `NightCap(NC)`,
	run: async(client, message, args) => {
		const nc = ["https://media.discordapp.net/attachments/1044626284346605588/1055877196717248584/IMG_0070.png?width=565&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055877197388328990/IMG_0069.png?width=555&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055877197874872330/IMG_0068.png?width=600&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055877198248161320/IMG_0067.png?width=591&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055877198696955904/IMG_0066.png?width=573&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055877199288340571/IMG_0065.png?width=603&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055877199875551232/IMG_0064.png?width=591&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055877200232058880/IMG_0063.png?width=580&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055877200697634948/IMG_0062.png?width=574&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055877201209344030/IMG_0061.png?width=575&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055877412820369479/IMG_0060.png?width=592&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055877413348835348/IMG_0059.png?width=558&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055877413843779615/IMG_0058.png?width=586&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055877414330302464/IMG_0057.png?width=585&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055877414711992370/IMG_0056.png?width=565&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055877415211122868/IMG_0055.png?width=583&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055877415563428021/IMG_0054.png?width=561&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055877415827677246/IMG_0053.png?width=559&height=625"]
		let embed = new EmbedBuilder()
	.setTitle("NightCap(NC) Finish for me deck")
	.setDescription("Your NightCap(NC) finish for me deck")
		.setColor("Random")
.setImage(nc[Math.floor(Math.random() * nc.length)])
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
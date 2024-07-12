const Discord = require("discord.js");
const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `finishformeCC`,
	aliases: [`finishformecc`, `ccfinishforme`, `CCfinishforme`, `ccfinish`, `CCfinish`, `finishcc`, `finishCC`, `ffmcc`], 
	category: `Captain Combustible(CC)`,
	run: async(client, message, args) => {
		const cc = ["https://media.discordapp.net/attachments/1044626284346605588/1055881185533907064/IMG_0106.png?width=581&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055881185898795008/IMG_0105.png?width=578&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055881186196606997/IMG_0104.png?width=584&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055881186498580500/IMG_0103.png?width=583&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055881187010302023/IMG_0102.png?width=587&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055881187337437286/IMG_0101.png?width=569&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055881187622654024/IMG_0100.png?width=571&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055881187954020462/IMG_0099.png?width=579&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055881188285349938/IMG_0098.png?width=555&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055881188620914698/IMG_0097.png?width=583&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055881303708422244/IMG_0096.png?width=594&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055881303989428234/IMG_0095.png?width=566&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055881304337567794/IMG_0093.png?width=606&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055881304622776340/IMG_0094.png?width=581&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055881304882814976/IMG_0092.png?width=569&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055881305189011456/IMG_0091.png?width=603&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055881305495191603/IMG_0090.png?width=582&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055881305763618836/IMG_0089.png?width=546&height=624"]
		let embed = new EmbedBuilder()
	.setTitle("Captain Combustible(CC) Finish for me deck")
	.setDescription("Your Captain Combustible(CC) finish for me deck")
		.setColor("Random")
.setImage(cc[Math.floor(Math.random() * cc.length)])
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
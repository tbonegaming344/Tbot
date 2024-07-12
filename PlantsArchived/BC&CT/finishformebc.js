const Discord = require("discord.js");
const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `finishformeBC`, 
	aliases: [`finishformebc`, `bcfinishforme`, `BCfinishforme`, `bcfinish`, `BCfinish`, `finishbc`, `finishBC`, `ffmbc`],
	category: `Beta-Carrotina/Citron`,
	run: async(client, message, args) => {
		const bc = ["https://media.discordapp.net/attachments/1044626284346605588/1055884337003896933/IMG_0124.png?width=575&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055884337276530688/IMG_0123.png?width=586&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055884337561751552/IMG_0122.png?width=576&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055884337876316180/IMG_0121.png?width=591&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055884339012980787/IMG_0120.png?width=582&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055884339369484358/IMG_0119.png?width=573&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055884339650506853/IMG_0118.png?width=578&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055884339889590293/IMG_0117.png?width=585&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055884340183179264/IMG_0116.png?width=586&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055884340447424552/IMG_0115.png?width=549&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055884391496286218/IMG_0114.png?width=591&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055884391831842836/IMG_0113.png?width=585&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055884392133841006/IMG_0112.png?width=579&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055884392481959936/IMG_0111.png?width=578&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055884392809123850/IMG_0110.png?width=589&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055884393140453436/IMG_0109.png?width=583&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055884393450844160/IMG_0108.png?width=571&height=625", "https://media.discordapp.net/attachments/1044626284346605588/1055884393819951165/IMG_0107.png?width=597&height=625"]
		let embed = new EmbedBuilder()
	.setTitle("Beta-Carrotina(BC) Finish for me deck")
	.setDescription("Your Beta-Carrotina(BC) finish for me deck")
		.setColor("Random")
.setImage(bc[Math.floor(Math.random() * bc.length)])
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
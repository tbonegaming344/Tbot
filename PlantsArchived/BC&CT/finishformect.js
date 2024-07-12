const Discord = require("discord.js");
const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `finishformeCT`,
	aliases: [`finishformect`, `ctfinishforme`, `CTfinishforme`, `CTfinish`, `ctfinish`, `finishct`, `finishCT`, `ffmct`], 
	category: `Beta-Carrotina/Citron`,
	run: async(client, message, args) => {
		const ct = ["https://media.discordapp.net/attachments/1044626284346605588/1055873956147642389/IMG_0032.png?width=574&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055873956420264016/IMG_0031.png?width=573&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055873956751622144/IMG_0030.png?width=564&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055873957007466576/IMG_0029.png?width=559&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055873957313646662/IMG_0028.png?width=559&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055873957691146270/IMG_0027.png?width=572&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055873958043459745/IMG_0026.png?width=577&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055873958404177970/IMG_0025.png?width=550&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055873958685188113/IMG_0024.png?width=581&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055873958949425202/IMG_0023.png?width=568&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055874000846340236/IMG_0022.png?width=565&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055874001118974075/IMG_0021.png?width=519&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055874001379012678/IMG_0020.png?width=559&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055874001639063604/IMG_0019.png?width=550&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055874001941057586/IMG_0018.png?width=573&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055874002238844948/IMG_0017.png?width=567&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055874002532450304/IMG_0016.png?width=572&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055874003262263386/IMG_0015.png?width=577&height=604"]
		let embed = new EmbedBuilder()
	.setTitle("Citron(CT) Finish for me deck")
	.setDescription("Your Citron(CT) finish for me deck")
		.setColor("Random")
.setImage(ct[Math.floor(Math.random() * ct.length)])
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
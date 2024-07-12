const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `finishformehg`,
	aliases: [`finishformehg`, `finishhg`, `finishHG`, `hgfinish`, `HGfinish`, `hgfinishforme`, `HGfinishforme`, `ffmhg`], 
	category: `Huge-Gigantacus/SuperBrainz`,
	run: async(client, message, args) => {
		const hg = ["https://media.discordapp.net/attachments/1044626284346605588/1055961056662519848/IMG_0176.png?width=552&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055961056956125215/IMG_0174.png?width=563&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055961057295859712/IMG_0173.png?width=573&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055961057526554704/IMG_0172.png?width=554&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055961057769820190/IMG_0171.png?width=558&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055961058063425580/IMG_0170.png?width=579&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055961058398965910/IMG_0169.png?width=565&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055961058700951562/IMG_0168.png?width=556&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055961059007144036/IMG_0167.png?width=576&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055961059229433936/IMG_0165.png?width=573&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055961078523248640/IMG_0164.png?width=565&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055961078783291553/IMG_0163.png?width=584&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055961079005597797/IMG_0162.png?width=557&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055961079244668998/IMG_0161.png?width=531&height=603", "https://media.discordapp.net/attachments/1044626284346605588/1055961079538274394/IMG_0160.png?width=572&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055961079848648884/IMG_0159.png?width=561&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055961080108691466/IMG_0158.png?width=558&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055961080410689556/IMG_0157.png?width=560&height=604"]
		let embed = new EmbedBuilder()
	.setTitle("Huge-Gigantacus(HG) Finish for me deck")
	.setDescription("Your Huge-Gigantacus(HG) finish for me deck")
		.setColor("Random")
.setImage(hg[Math.floor(Math.random() * hg.length)])
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
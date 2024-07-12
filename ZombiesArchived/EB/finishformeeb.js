const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `finishformeb`,
	aliases: [`Ebfinish`, `ebfinish`, `finishEB`, `finisheb`, `finishformeEB`, `EBfinishforme`, `ebfinishforme`, `ffmeb`],
	category: `Electric Boogaloo(EB)`,
	run: async(client, message, args) => {
		const eb = ["https://media.discordapp.net/attachments/1044626284346605588/1055686779245711390/IMG_9835.png?width=524&height=556", "https://media.discordapp.net/attachments/1044626284346605588/1055686779514130553/IMG_9834.png?width=519&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055686779778375790/IMG_9833.png?width=533&height=556", "https://media.discordapp.net/attachments/1044626284346605588/1055686780118110218/IMG_9832.png?width=519&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055686780403327026/IMG_9831.png?width=525&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055686780709523487/IMG_9830.png?width=510&height=556", "https://media.discordapp.net/attachments/1044626284346605588/1055686781007302707/IMG_9829.png?width=536&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055686781351239800/IMG_9828.png?width=507&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055686781661630545/IMG_9827.png?width=501&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055686781925855383/IMG_9826.png?width=492&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055686911869599754/IMG_9825.png?width=524&height=556", "https://media.discordapp.net/attachments/1044626284346605588/1055686912205148231/IMG_9824.png?width=513&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055686914520387615/IMG_9823.png?width=518&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055686914814001213/IMG_9822.png?width=527&height=554", "https://media.discordapp.net/attachments/1044626284346605588/1055686915136950334/IMG_9821.png?width=510&height=554", "https://media.discordapp.net/attachments/1044626284346605588/1055686915434758234/IMG_9820.png?width=489&height=556", "https://media.discordapp.net/attachments/1044626284346605588/1055686915816427520/IMG_9819.png?width=507&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055686916131012718/IMG_9818.png?width=530&height=554", "https://media.discordapp.net/attachments/1044626284346605588/1055686916403646504/IMG_9817.png?width=505&height=555"]
		let embed = new EmbedBuilder()
	.setTitle("Finish for me Electric Boogaloo(EB) deck")
	.setDescription("Your finish for me Electric Boogaloo(EB) deck")
		.setColor("Random")
.setImage(eb[Math.floor(Math.random() * eb.length)])
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
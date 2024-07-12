const {EmbedBuilder} = require("discord.js")
module.exports = {
	name:`finishformeWK`, 
	aliases: [`finishformewk`, `wkfinishforme`, `WKfinishforme`, `WKfinish`, `wkfinish`, `finishwk`, `finishWK`, `ffmwk`],
	category: `Wall Knight(WK)`,
		run: async(client, message, args) => {
			const wk = ["https://media.discordapp.net/attachments/1044626284346605588/1055866821523275776/IMG_9977.png?width=542&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055866821787525141/IMG_9976.png?width=552&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055866822034985000/IMG_9975.png?width=588&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055866822316007434/IMG_9974.png?width=550&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055866822643159131/IMG_9972.png?width=548&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055866823003865179/IMG_9971.png?width=568&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055866823310053417/IMG_9970.png?width=548&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055866823570096189/IMG_9969.png?width=561&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055866823968563352/IMG_9968.png?width=525&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055866824241188884/IMG_9966.png?width=582&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055866906239840347/IMG_9965.png?width=584&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055866906537644083/IMG_9964.png?width=553&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055866906818658344/IMG_9963.png?width=583&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055866907120652429/IMG_9962.png?width=577&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055866907510718464/IMG_9961.png?width=570&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055866908026613833/IMG_9960.png?width=566&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055866908357972068/IMG_9959.png?width=572&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055866908701900830/IMG_9958.png?width=582&height=604"]
				let embed = new EmbedBuilder()
	.setTitle("Wallknight(WK) Finish for me deck")
	.setDescription("Your Wallknight(WK) finish for me deck")
		.setColor("Random")
.setImage(wk[Math.floor(Math.random() * wk.length)])
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}
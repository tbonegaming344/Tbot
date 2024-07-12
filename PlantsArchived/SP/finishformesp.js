const Discord = require("discord.js");
const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `finishformeSP`,
	aliases: [`finishformesp`, `spfinishforme`, `SPfinishforme`, `spfinish`, `SPfinish`, `finishsp`, `finishSP`, `ffmsp`],
	category: `Spudow(SP)`,
	run: async(client, message, args) => {
		const sp = ["https://media.discordapp.net/attachments/1044626284346605588/1055871591378079804/IMG_0004.png?width=586&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055871591784919050/IMG_0003.png?width=575&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055871592116264970/IMG_0002.png?width=563&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055871592523124827/IMG_0001.png?width=556&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055871592820908164/IMG_9999.png?width=568&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055871593190019102/IMG_9998.png?width=572&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055871593542328371/IMG_9997.png?width=554&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055871593936605204/IMG_9996.png?width=558&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055871883687514112/IMG_0005.png?width=548&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055871881229647993/IMG_0014.png?width=556&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055871881472921630/IMG_0013.png?width=551&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055871881737154650/IMG_0012.png?width=561&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055871882018177024/IMG_0011.png?width=548&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055871882215313429/IMG_0010.png?width=567&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055871882441797712/IMG_0009.png?width=544&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055871882697654362/IMG_0008.png?width=569&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055871883037397113/IMG_0007.png?width=556&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055871883419074681/IMG_0006.png?width=561&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055871883687514112/IMG_0005.png?width=548&height=604"]
			let embed = new EmbedBuilder()
	.setTitle("Spudow(SP) Finish for me deck")
	.setDescription("Your Spudow(SP) finish for me deck")
		.setColor("Random")
.setImage(sp[Math.floor(Math.random() * sp.length)])
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
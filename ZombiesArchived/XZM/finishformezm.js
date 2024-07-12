const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `finishformezm`,
	aliases: [`ZMfinish`, `finishZM`, `ZMfinishforme`, `zmfinish`, `finishzm`, `zmfinishforme`, `finishformeZM`, `ffmzm`],
	category: `Zmech(ZM)`,
	run: async(client, message, args) => {
		 const zm = ["https://media.discordapp.net/attachments/1044626284346605588/1055678430517145680/IMG_9778.png?width=507&height=554", "https://media.discordapp.net/attachments/1044626284346605588/1055678430772994139/IMG_9777.png?width=518&height=556", "https://media.discordapp.net/attachments/1044626284346605588/1055678431007871006/IMG_9776.png?width=515&height=554", "https://media.discordapp.net/attachments/1044626284346605588/1055678431267926127/IMG_9775.png?width=519&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055678431515385926/IMG_9774.png?width=513&height=555","https://media.discordapp.net/attachments/1044626284346605588/1055678431788011710/IMG_9773.png?width=489&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055678432060649472/IMG_9772.png?width=505&height=555","https://media.discordapp.net/attachments/1044626284346605588/1055678432320692234/IMG_9771.png?width=513&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055678432681398282/IMG_9770.png?width=512&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055678432937259068/IMG_9769.png?width=518&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055678513799254036/IMG_9768.png?width=504&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055678514264809572/IMG_9767.png?width=513&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055678514608754789/IMG_9766.png?width=513&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055678514931712000/IMG_9765.png?width=528&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055678515271454800/IMG_9764.png?width=516&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055678515774767174/IMG_9763.png?width=533&height=554"]
			let embed = new EmbedBuilder()
	.setTitle("Finish for me Zmech(ZM) deck")
	.setDescription("Your finish for me Zmech(ZM) deck")
		.setColor("Random")
.setImage(zm[Math.floor(Math.random() * zm.length)])
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
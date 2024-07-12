const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `finishformerb`, 
	aliases: [`finishformeRB`, `rbfinishforme`, `RBfinishforme`, `RBfinish`, `rbfinish`, `finishrb`, `finishRB`, `ffmrb`],
	category: `Rustbolt(RB)`,
		run: async(client, message, args) => {
			const rb = ["https://media.discordapp.net/attachments/1044626284346605588/1055695861193121872/IMG_9918.png?width=534&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055695861461549096/IMG_9917.png?width=506&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055695861822267522/IMG_9916.png?width=581&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055695862120054884/IMG_9915.png?width=557&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055695862422057030/IMG_9914.png?width=550&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055695862707257384/IMG_9913.png?width=565&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055695863059591249/IMG_9912.png?width=557&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055695863382548480/IMG_9911.png?width=559&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055695863663570954/IMG_9910.png?width=568&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055695863919419452/IMG_9909.png?width=580&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055695943766396938/IMG_9908.png?width=530&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055695944043216946/IMG_9907.png?width=559&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055695944374571099/IMG_9906.png?width=571&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055695944663961600/IMG_9905.png?width=559&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055695945020489830/IMG_9903.png?width=554&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055695945360232478/IMG_9902.png?width=575&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055695945720938557/IMG_9901.png?width=567&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055695946001960970/IMG_9899.png?width=557&height=604"]
					let embed = new EmbedBuilder()
	.setTitle("Rustbolt(RB) Finish for me deck")
	.setDescription("Your Rustbolt(RB) finish for me deck")
		.setColor("Random")
.setImage(rb[Math.floor(Math.random() * rb.length)])
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}
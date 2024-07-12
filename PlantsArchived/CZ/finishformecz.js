const Discord = require("discord.js");
const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `finishformeCZ`,
	aliases: [`finishformecz`,`czfinishforme`, `CZfinishforme`, `CZfinish`, `czfinish`, `finishcz`, `finishCZ`, `ffmcz`], 
	category: `Chompzilla(CZ)`, 
	run: async(client, message, args) => {
		const cz = ["https://media.discordapp.net/attachments/1044626284346605588/1055868511462883418/IMG_9995.png?width=556&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055868511777476681/IMG_9994.png?width=554&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055868512079446156/IMG_9993.png?width=530&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055868512381456434/IMG_9992.png?width=548&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055868512700215356/IMG_9991.png?width=582&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055868512972832820/IMG_9990.png?width=553&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055868513266454639/IMG_9989.png?width=551&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055868513581019207/IMG_9988.png?width=533&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055868513866219540/IMG_9987.png?width=565&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055868514210172948/IMG_9986.png?width=556&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055868666912186378/IMG_9985.png?width=574&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055868667226763275/IMG_9984.png?width=565&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055868667549720576/IMG_9983.png?width=565&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055868667826548827/IMG_9982.png?width=537&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055868668124336240/IMG_9981.png?width=572&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055868668426330182/IMG_9980.png?width=563&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055868668694769664/IMG_9979.png?width=572&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055868668971589642/IMG_9978.png?width=546&height=604"]
			let embed = new EmbedBuilder()
	.setTitle("Chompzilla(CZ) Finish for me deck")
	.setDescription("Your Chompzilla(CZ) finish for me deck")
		.setColor("Random")
.setImage(cz[Math.floor(Math.random() * cz.length)])
	
	message.channel.send({embeds: [ embed ] } )
	}
}
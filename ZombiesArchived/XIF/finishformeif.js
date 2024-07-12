const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `finishformeif`,
	aliases: [`IFfinish`, `iffinish`, `finishif`, `finishIF`, `finishformeIF`, `IFfinishforme`, `iffinishforme`, `ffmif`],
	category: `Impifinity(IF)`,
			run: async(client, message, args) => {
				const IF = ["https://media.discordapp.net/attachments/1044626284346605588/1055691551260549202/IMG_9878.png?width=544&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055691551537369089/IMG_9877.png?width=558&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055691551772258324/IMG_9876.png?width=552&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055691552036495390/IMG_9875.png?width=546&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055691552304926740/IMG_9874.png?width=554&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055691552531427338/IMG_9873.png?width=551&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055691552820830248/IMG_9872.png?width=544&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055691553097650238/IMG_9871.png?width=560&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055691553416425554/IMG_9870.png?width=551&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055691553751965728/IMG_9868.png?width=576&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055691634622349403/IMG_9867.png?width=574&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055691635268268032/IMG_9866.png?width=574&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055691635633164389/IMG_9865.png?width=559&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055691635914194984/IMG_9864.png?width=582&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055691636211986512/IMG_9863.png?width=525&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055691636492996648/IMG_9862.png?width=563&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055691636849524787/IMG_9861.png?width=560&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055691637159899136/IMG_9860.png?width=569&height=604"]
									let embed = new EmbedBuilder()
	.setTitle("Impifinity(IF) Finish for me deck")
	.setDescription("Your Impifinity(IF) finish for me deck")
		.setColor("Random")
.setImage(IF[Math.floor(Math.random() * IF.length)])
	
	message.channel.send({embeds: [ embed ] } ) 
			}
}
const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `finishformepb`,
	aliases: [`finishformePB`, `PBfinish`, `finishPB`, `pbfinish`, `finishpb`, `pbfinishforme`, `PBfinishforme`, `ffmpb`],
	category: `Professor Brainstorm(PB)`,
	run: async(client, message, args) => {
		const pb = ["https://media.discordapp.net/attachments/1044626284346605588/1055681189312208956/IMG_9796.png?width=521&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055681189651939338/IMG_9795.png?width=525&height=554", "https://media.discordapp.net/attachments/1044626284346605588/1055681190083960882/IMG_9794.png?width=524&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055681190423691264/IMG_9793.png?width=524&height=556", "https://media.discordapp.net/attachments/1044626284346605588/1055681190708916234/IMG_9792.png?width=504&height=556", "https://media.discordapp.net/attachments/1044626284346605588/1055681191111565412/IMG_9791.png?width=525&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055681191459696750/IMG_9790.png?width=533&height=556", "https://media.discordapp.net/attachments/1044626284346605588/1055681191858151424/IMG_9789.png?width=516&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055681192151756850/IMG_9788.png?width=510&height=554", "https://media.discordapp.net/attachments/1044626284346605588/1055681192483094538/IMG_9787.png?width=498&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055681246438625330/IMG_9786.png?width=510&height=554", "https://media.discordapp.net/attachments/1044626284346605588/1055681246908395530/IMG_9785.png?width=504&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055681247201984562/IMG_9784.png?width=515&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055681247512367214/IMG_9783.png?width=501&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055681247877279814/IMG_9782.png?width=491&height=554", "https://media.discordapp.net/attachments/1044626284346605588/1055681248229593178/IMG_9781.png?width=505&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055681248670003261/IMG_9780.png?width=515&height=555", "https://media.discordapp.net/attachments/1044626284346605588/1055681249018118164/IMG_9779.png?width=512&height=555"]
			let embed = new EmbedBuilder()
	.setTitle("Finish for me Professor Brainstorm(PB) deck")
	.setDescription("Your finish for me Professor Brainstorm(PB) deck")
		.setColor("Random")
.setImage(pb[Math.floor(Math.random() * pb.length)])
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
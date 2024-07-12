const Discord = require("discord.js");
const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `finishformeSF`, 
	aliases: [`finishformesf`, `sffinishforme`, `SFfinishforme`, `finishsf`, `finishSF`, `sffinish`, `SFfinish`, `ffmsf`],
	category: `Solar Flare(SF)`, 
	run: async(client, message, args) => {
		const sf = ["https://media.discordapp.net/attachments/1044626284346605588/1055865144057528320/IMG_9957.png?width=545&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055865144342749304/IMG_9956.png?width=563&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055865144556666931/IMG_9955.png?width=558&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055865144795725824/IMG_9954.png?width=563&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055865145051586560/IMG_9953.png?width=559&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055865145357779015/IMG_9952.png?width=550&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055865145634586646/IMG_9951.png?width=548&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055865145894641774/IMG_9950.png?width=551&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055865146112753815/IMG_9949.png?width=534&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055865146364395530/IMG_9948.png?width=566&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055866722080530532/IMG_9947.png?width=559&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055866722327986276/IMG_9946.png?width=554&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055866722579660840/IMG_9945.png?width=572&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055866722814533662/IMG_9944.png?width=579&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055866723066183720/IMG_9943.png?width=548&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055866723280109619/IMG_9942.png?width=556&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055866723510788226/IMG_9941.png?width=567&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055866723737272371/IMG_9940.png?width=538&height=604"]
		let embed = new EmbedBuilder()
	.setTitle("Solar Flare(SF) Finish for me deck")
	.setDescription("Your Solare Flare(SF) finish for me deck")
		.setColor("Random")
.setImage(sf[Math.floor(Math.random() * sf.length)])
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
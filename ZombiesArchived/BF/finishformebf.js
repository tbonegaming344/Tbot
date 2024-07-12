const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `finishformebf`,
	aliases: [`BFfinishforme`,`bffinishforme`, `finishformeBF`, `finishbf`, `finishBF`, `BFfinish`, `bffinish`, `ffmbf`], 
	category: `Brain Freeze(BF)`, 
	run: async(client, message, args) => {
		const bf = ["https://media.discordapp.net/attachments/1044626284346605588/1055689420470222898/IMG_9859.png?width=585&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055689420734472192/IMG_9858.png?width=573&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055689421116166174/IMG_9857.png?width=566&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055689421405560882/IMG_9856.png?width=569&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055689421694980186/IMG_9855.png?width=547&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055689421946626128/IMG_9853.png?width=542&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055689422303154247/IMG_9852.png?width=577&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055689422626095154/IMG_9851.png?width=583&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055689423200723084/IMG_9850.png?width=576&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055689423586590800/IMG_9849.png?width=573&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055689481316995072/IMG_9848.png?width=569&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055689481761603674/IMG_9847.png?width=561&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055689482235564093/IMG_9846.png?width=554&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055689482596270150/IMG_9845.png?width=567&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055689483082813490/IMG_9844.png?width=528&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055689483481255966/IMG_9843.png?width=548&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055689484211077180/IMG_9842.png?width=545&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055689484534042634/IMG_9841.png?width=566&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055689484861181992/IMG_9840.png?width=574&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055689485184155719/IMG_9839.png?width=580&height=604"]
		let embed = new EmbedBuilder()
	.setTitle("Brainfreeze(BF) Finish for me deck")
	.setDescription("Your Brainfreeze(BF) finish for me deck")
		.setColor("Random")
.setImage(bf[Math.floor(Math.random() * bf.length)])
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
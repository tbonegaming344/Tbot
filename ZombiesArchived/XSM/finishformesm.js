const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `finishformesm`,
	aliases: [`smfinishforme`, `SMfinishforme`, `finishformeSM`, `SMfinish`, `smfinish`, `finishsm`, `finishSM`, `ffmsm`],
	category: `Smash(SM)`,
	run: async(client, message, args) => {
		const sm = ["https://media.discordapp.net/attachments/1044626284346605588/1055693583002382387/IMG_9898.png?width=579&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055693583291793548/IMG_9895.png?width=572&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055693583576989788/IMG_9894.png?width=584&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055693583912546315/IMG_9893.png?width=550&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055693584239689738/IMG_9892.png?width=552&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055693584621383741/IMG_9891.png?width=537&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055693585334419487/IMG_9890.png?width=578&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055693585653170176/IMG_9889.png?width=561&height=604", "https://media.discordapp.net/attachments/1044626284346605588/1055693586101973002/IMG_9888.png?width=525&height=567", "https://media.discordapp.net/attachments/1044626284346605588/1055693586412355614/IMG_9887.png?width=520&height=566", "https://media.discordapp.net/attachments/1044626284346605588/1055693647758245928/IMG_9886.png?width=512&height=567", "https://media.discordapp.net/attachments/1044626284346605588/1055693648135737354/IMG_9885.png?width=483&height=567", "https://media.discordapp.net/attachments/1044626284346605588/1055693648664203264/IMG_9884.png?width=538&height=567", "https://media.discordapp.net/attachments/1044626284346605588/1055693648987177051/IMG_9883.png?width=536&height=567", "https://media.discordapp.net/attachments/1044626284346605588/1055693649268199525/IMG_9882.png?width=499&height=566", "https://media.discordapp.net/attachments/1044626284346605588/1055693649561784381/IMG_9881.png?width=503&height=567", "https://media.discordapp.net/attachments/1044626284346605588/1055693649855397949/IMG_9880.png?width=520&height=567", "https://media.discordapp.net/attachments/1044626284346605588/1055693650211917834/IMG_9879.png?width=530&height=566"]
				let embed = new EmbedBuilder()
	.setTitle("Smash(SM) Finish for me deck")
	.setDescription("Your Smash(SM) finish for me deck")
		.setColor("Random")
.setImage(sm[Math.floor(Math.random() * sm.length)])
	
	message.channel.send({embeds: [ embed ] } )
	}
}
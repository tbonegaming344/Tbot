const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `randomrb`,
	aliases: [`rbrandom`, `rustboltrandom`, `randomrustbolt`, `randomizeddeckrb`, `rbrandomizeddeck`, `rrb`],
	category: `Rustbolt(RB)`,
		run: async(client, message, args) => {
			let [result] = await db.query(`SELECT * FROM rbdecks where deckinfo = 'image link:'`)
			const deck = [
//RB TBOT DB 
`${result[0].aggroscience}`,
`${result[0].boltbolt}`,
`${result[0].boss}`,
`${result[0].brickster}`,
`${result[0].bustbolt}`,
`${result[0].igmablobchum}`,
`${result[0].josebolt}`,
`${result[0].kingleap}`,
`${result[0].l00p}`,
`${result[0].marxbolt}`,
`${result[0].mimescibolt}`,
`${result[0].pharaohster}`,
`${result[0].poggerrazzi}`,
`${result[0].sunbandits}`,
`${result[0].trickblob}`,
`${result[0].trickbolt}`,
//RB WEB DB
				"https://media.discordapp.net/attachments/1044626284346605588/1061846680930111488/IMG_0731.jpg?width=545&height=586", 
				"https://media.discordapp.net/attachments/1044626284346605588/1061846681139822694/IMG_0730.jpg?width=525&height=587", 
				"https://media.discordapp.net/attachments/1044626284346605588/1061846681332752466/IMG_0729.jpg?width=548&height=587", 
				"https://media.discordapp.net/attachments/1044626284346605588/1061846681555062924/IMG_0728.jpg?width=542&height=586", 
				"https://media.discordapp.net/attachments/1044626284346605588/1061846681802522665/IMG_0727.jpg?width=548&height=586", 
				"https://media.discordapp.net/attachments/1044626284346605588/1061846682024812574/IMG_0726.jpg?width=521&height=587", 
				"https://media.discordapp.net/attachments/1044626284346605588/1061846682402308126/IMG_0724.jpg?width=521&height=586", 
				"https://media.discordapp.net/attachments/1044626284346605588/1061846682934976592/IMG_0723.jpg?width=555&height=587", 
				"https://media.discordapp.net/attachments/1044626284346605588/1061846726333448304/IMG_0721.jpg?width=552&height=586", 
				"https://media.discordapp.net/attachments/1044626284346605588/1061846726534770739/IMG_0720.jpg?width=516&height=586", 
]
				let embed = new EmbedBuilder()
	.setTitle("Random Rustbolt(RB) Deck")
	.setDescription(`Here is your random Rustbolt(RB) Deck ${message.author}`)
		.setColor("Random")
.setImage(deck[Math.floor(Math.random() * deck.length)])
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}
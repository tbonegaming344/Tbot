const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `randomim`,
	aliases: [`imrandom`, `randomizedim`, `imrandomized`, `randomizedimdeck`, `deckrandomizedim`, `immorticiarandom`, `ramdomimmorticia`, `rim`],
	category: `Immorticia(IM)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT * FROM imdecks where deckinfo = 'image link:'`)
		const deck = [
//IM TBOT DB 
`${result[0].burnticia}`,
`${result[0].comboticia}`,
`${result[0].happyticia}`,
`${result[0].igmaticia}`,
`${result[0].otktrickster}`,
`${result[0].rampticia}`,
`${result[0].scimmort}`,
`${result[0].stacheticia}`,
`${result[0].telepets}`,
`${result[0].telepets}`,
`${result[0].toaster}`,
`${result[0].ycm}`,
//IM WEB DB			
			"https://media.discordapp.net/attachments/1044626284346605588/1062140862525612032/IMG_0656.png?width=828&height=587", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062140862861168732/IMG_0655.jpg?width=555&height=587", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062140863087648899/IMG_0654.jpg?width=540&height=586", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062140863356080248/IMG_0653.jpg?width=543&height=587", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062140863557423134/IMG_0652.jpg?width=624&height=587", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062140863817457685/IMG_0651.jpg?width=551&height=586", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062140864077500416/IMG_0650.jpg?width=563&height=587", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062140864299814922/IMG_0649.png?width=621&height=586", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062140864635346954/IMG_0648.jpg?width=528&height=587", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062141140947697684/IMG_0646.jpg?width=551&height=587", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062141141195178125/IMG_0645.jpg?width=534&height=586", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062141141463597146/IMG_0644.jpg?width=513&height=587", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062141141685911592/IMG_0643.jpg?width=552&height=586", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062141141958537236/IMG_0642.jpg?width=396&height=587", 
]
		let embed = new EmbedBuilder()
	.setTitle("Random Immorticia(IM) Deck")
	.setDescription(`Here is your random Immorticia(IM) Deck ${message.author}`)
		.setColor("Random")
.setImage(deck[Math.floor(Math.random() * deck.length)])
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
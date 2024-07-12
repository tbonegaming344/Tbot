const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `randomeb`,
	aliases: [`ebrandom`, `randomizeddeckeb`, `ebrandomizeddeck`, `electricboogaloorandom`, `randomelectricboogaloo`, `reb`],
	category: `Electric Boogaloo(EB)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT * FROM ebdecks where deckinfo = 'image link:'`)
		const deck = [
//EB TBOT DB
`${result[0].binary22}`,
`${result[0].bunary22}`,
`${result[0].burnpackage}`,
`${result[0].igmaburn}`,
`${result[0].ignea}`,
`${result[0].missioncontrol}`,
`${result[0].mrfeast}`,
`${result[0].noplayingallowed}`,
`${result[0].playerremoval}`,
`${result[0].seacret}`,
`${result[0].whalekyrie}`,
//EB WEB DB
			"https://media.discordapp.net/attachments/1044626284346605588/1062141837013417994/IMG_9691.jpg?width=537&height=588", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062141837286060083/IMG_0577.jpg?width=577&height=588", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062141837512540231/IMG_0576.png", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062141837793570897/IMG_0575.jpg?width=531&height=588", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062141838015860786/IMG_0574.jpg?width=558&height=588", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062141838309457940/IMG_0573.jpg?width=672&height=588", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062141838607265902/IMG_0571.jpg?width=662&height=588", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062141839148318811/IMG_0570.jpg?width=538&height=588", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062141839374815242/IMG_0569.jpg?width=563&height=588", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062141878054686830/IMG_0568.jpg?width=531&height=588", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062141878339895426/IMG_0567.jpg?width=511&height=588", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062141878608343111/IMG_0566.jpg?width=474&height=588", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062141880088924211/b339352587be6bb5a5bad6c727cd8b0340d207ba12146e26c91b286372faaac2.png", 
			"https://media.discordapp.net/attachments/1044626284346605588/1062141896236990514/Screenshot_20220728-030511-604.png?width=575&height=588", 
]
		let embed = new EmbedBuilder()
	.setTitle("Random Electric Boogaloo(EB) Deck")
	.setDescription(`Here is your random Electric Boogaloo(EB) Deck ${message.author}`)
		.setColor("Random")
.setImage(deck[Math.floor(Math.random() * deck.length)])
	
	message.channel.send({embeds: [ embed ] } )
	}
}
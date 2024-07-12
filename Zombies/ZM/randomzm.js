const {EmbedBuilder} = require("discord.js")
let db = require("../../index.js")
module.exports = {
	name: `randomzm`, 
	aliases: [`zmrandom`, `randomzmdeck`, `randomizedzmdeck`, `randomizedzm`, `zmrandomized`, `randomzmech`, `zmechrandom`, `rzm`],
	category: `Zmech(ZM)`, 
	run: async(client, message, args) => {
		let [result] = await db.query(`select * from zmdecks where deckinfo = 'image link:'`)
		const deck = [
//ZM TBOT DB 
`${result[0].berserkmech}`,
`${result[0].bettrickmech}`,
`${result[0].binaryflagwar}`,
`${result[0].dozzamech}`,
`${result[0].feastmech}`,
`${result[0].frymech}`,
`${result[0].gargburn}`,
`${result[0].kendycrush}`,
`${result[0].pyromania}`,
`${result[0].shockwave}`,
`${result[0].trickmech}`,
`${result[0].zmoss}`,
//ZM WEB DB 		
"https://media.discordapp.net/attachments/1044626284346605588/1061846058872885329/IMG_0783.jpg?width=548&height=587", 
"https://media.discordapp.net/attachments/1044626284346605588/1061846059099369502/IMG_0782.jpg?width=536&height=586", 
"https://media.discordapp.net/attachments/1044626284346605588/1061846059317461133/IMG_0781.jpg?width=563&height=587", 
"https://media.discordapp.net/attachments/1044626284346605588/1061846060990988368/IMG_0777.jpg?width=540&height=586", 
"https://media.discordapp.net/attachments/1044626284346605588/1061846061251055728/IMG_0776.jpg?width=597&height=587",  
		]
			let embed = new EmbedBuilder()
	.setTitle("Random Zmech(ZM) Deck")
	.setDescription(`Here is your Random Zmech Deck ${message.author}`)
		.setColor("Random")
.setImage(deck[Math.floor(Math.random() * deck.length)])
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
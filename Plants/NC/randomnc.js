const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `randomnc`,
	aliases: [`ncrandom`, `randomizeddecknc`, `ncrandomizeddeck`, `nightcaprandom`, `randomnightcap`, `randomizeddecknightcap`, `nightcaprandomizeddeck`],
	category: `NightCap(NC)`, 
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT * from ncdecks where deckinfo = 'image link:'`);
		const deck = [
//NC TBOT DB
`${result[0].buffswarm}`,
`${result[0].budgetcyburn}`,
`${result[0].budgetnc}`,
`${result[0].cyburn}`,
`${result[0].gangstaparadise}`,
`${result[0].hyperswarm}`,
`${result[0].joashrooms}`,
`${result[0].midcap}`,
`${result[0].speeddemon}`,
//NC WEB DB 			
"https://media.discordapp.net/attachments/1044626284346605588/1061789054422753301/middlest.jpg?width=600&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061789054661820487/rescuekale.jpg?width=570&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061789055039328376/beancap.jpeg", 
"https://media.discordapp.net/attachments/1044626284346605588/1061789089780732094/dragon.jpg?width=491&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061789090254700616/frozentots.jpg?width=554&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061789090548297768/snakeparadise.jpg?width=537&height=588", 
"https://pvzheroesdecklists.tbonegaming344.repl.co/fry/midrange/midshrooms.jpg",
]
			let embed = new EmbedBuilder()
	.setTitle("Random NightCap(NC) Deck")
	.setDescription(`Here is your random NightCap(NC) Deck ${message.author}`)
		.setColor("Random")
.setImage(deck[Math.floor(Math.random() * deck.length)])
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
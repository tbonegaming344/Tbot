const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `randomro`,
	aliases: [`rorandom`, `randomizedro`, `rorandomized`, `rorandomdeck`, `randomdeckro`, `randomizeddeckro`, `rorandomizedeck`, `randomrose`],
	category: `Rose(RO)`,
		run: async(client, message, args) => {
			let [result] = await db.query(`SELECT * from rodecks where deckinfo = 'image link:'`); 
			const deck = [
		// RO TBOT DB 
	`${result[0].budgetro}`,
	`${result[0].combose}`,
	`${result[0].freezeheal}`,
	`${result[0].frymidrose}`,
	`${result[0].hmr}`,
	`${result[0].midrose}`,
	`${result[0].rampmidrose}`,
	`${result[0].violetmid}`,
//RO WEB DB 
				"https://media.discordapp.net/attachments/1044626284346605588/1061703864245559446/freal.png?width=578&height=588",  
				"https://media.discordapp.net/attachments/1044626284346605588/1061703864824381540/midrampile.jpg?width=532&height=588",
				"https://media.discordapp.net/attachments/1044626284346605588/1061703865289932910/midrose.jpg?width=632&height=588", 
				"https://media.discordapp.net/attachments/1044626284346605588/1061703865579356180/millrose.jpg?width=535&height=588", 
				"https://media.discordapp.net/attachments/1044626284346605588/1061703866380468286/32rampcards.jpg?width=554&height=588", 
				"https://media.discordapp.net/attachments/1044626284346605588/1061704016150663178/healaggrobeans.jpg?width=537&height=588", 
				"https://media.discordapp.net/attachments/1044626284346605588/1061704016578490478/ramphell.jpg?width=516&height=588", 
				"https://media.discordapp.net/attachments/1044626284346605588/1061704016985325609/ramprose.jpg?width=560&height=588", 
				"https://media.discordapp.net/attachments/1044626284346605588/1061704017266348092/ramprose.png", 
				"https://media.discordapp.net/attachments/1044626284346605588/1061704035578679317/RO_healaggro.jpg?width=527&height=587",
			"https://pvzheroesdecklists.tbonegaming344.repl.co/fry/midrange/cycleheal.jpg",
		"https://pvzheroesdecklists.tbonegaming344.repl.co/fusionbreak/newtempo.jpg"
			]
			let embed = new EmbedBuilder()
	.setTitle("Random Rose(RO) Deck")
	.setDescription(`Here is your Random Rose(RO) Deck ${message.author}`)
		.setColor("Random")
.setImage(deck[Math.floor(Math.random() * deck.length)])
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}
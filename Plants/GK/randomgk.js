const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `randomgk`, 
	aliases: [`gkrandom`, `randomdeckgrassknuckles`, `randomdeckgk`, `gkrandomdeck`, `grassknucklesrandomdeck`],
	category: `Grass Knuckles(GK)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT * FROM gkdecks where deckinfo = 'image link:'`);
		const gk =[
//GK TBOT DB
`${result[0].it3}`,
`${result[0].pea3}`,
`${result[0].budgetgk}`,		
`${result[0].baggro}`,
`${result[0].ccpaggro}`,
`${result[0].coffeerings}`,
`${result[0].devinknuckles}`,
`${result[0].healthyknuckles}`,
`${result[0].knucklesmop}`,
`${result[0].r3d}`,
`${result[0].savagecucumber}`,
`${result[0].savagetempo}`,
`${result[0].sweetvm}`,
`${result[0].tryknuckles}`,
`${result[0].zoolander}`,
//GK WEB DB	
"https://media.discordapp.net/attachments/1044626284346605588/1061674110339534858/bannaconjure.jpg?width=548&height=588",
"https://media.discordapp.net/attachments/1044626284346605588/1061674110628925521/bottedknuckles.png", 
"https://media.discordapp.net/attachments/1044626284346605588/1061674111581048862/cofferingsanti.png?width=634&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061674111887216760/Conjure_Burst.jpg?width=548&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061674112176635954/conjurelategame.jpg?width=523&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061674112403132537/conjurepackage.jpg?width=552&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061674112717688952/Control.jpg?width=531&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061674113632063568/aggrotempo.jpg?width=544&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061674145777201162/depresso.jpg?width=549&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061674193692922016/tempopot.jpg?width=626&height=588",  
"https://media.discordapp.net/attachments/1044626284346605588/1061674194854760608/woodenburst.jpg?width=589&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061674195085430894/knuckles_sprout.jpg?width=550&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061674195349680258/laddergk.jpg?width=466&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061674241013063700/starchwreck.jpg?width=549&height=588", 
]
		let embed = new EmbedBuilder()
	.setTitle("Random Grass Knuckles Deck")
	.setDescription(`Here is your Random Grass Knuckles Deck ${message.author}`)
		.setColor("Random")
.setImage(gk[Math.floor(Math.random() * gk.length)])
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
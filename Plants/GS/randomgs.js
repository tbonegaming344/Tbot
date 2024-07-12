const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `randomgs`, 
	aliases: [`randomdeckgs`, `ramdomizeddeckgs`, `deckrandomgs`, `randomdeckgreenshadow`, `gsrandom`],
	category: `Green Shadow(GS)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT * from gsdecks where deckinfo = 'image link:'`);
		const deck = 
			[
				//GS TBOT DB
`${result[0].wr100}`,
`${result[0].abeans}`,
`${result[0].bbeans}`,
`${result[0].jbeans}`,
`${result[0].midshadow}`,
`${result[0].millie}`,
`${result[0].mindblower}`,
`${result[0].peatempo}`,
`${result[0].savagemayflower}`,
`${result[0].sovietonion}`,
`${result[0].yuletide}`,
				//GS WEB DB
"https://media.discordapp.net/attachments/1044626284346605588/1061639582816424038/IMG_0547.png?width=530&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061652668952629288/aggrow.jpg?width=514&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061652669254598757/beanshadow.jpg?width=474&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061652669590163526/beanshadow2.jpg?width=518&height=587", 
"https://media.discordapp.net/attachments/1044626284346605588/1061652669900521532/conjuremoss.jpg?width=546&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061652670303178803/floureeze.jpg?width=549&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061652670651322419/freezeonions.jpg?width=548&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061652671309828227/Abeans.jpg?width=526&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061652671586631730/aggro_gs.jpg?width=546&height=588",  
"https://media.discordapp.net/attachments/1044626284346605588/1061654626513997834/latepodfather.jpg?width=502&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061654626761457665/peapatrolfry.jpg?width=511&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061654627046653953/redshadow.jpg?width=537&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061654627306721341/ringss.png?width=624&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061654627671621673/allbeans.jpg?width=554&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061654627940040736/bannabirb.jpg?width=559&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061654628200108062/beansh.jpg?width=548&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061654628657283124/frozen.jpg?width=536&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061656551842136154/midshadow.jpeg?width=536&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061656552081215538/midshadow.png", 
"https://media.discordapp.net/attachments/1044626284346605588/1061656552404164669/onionclap.jpg?width=528&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061656552660025345/pean.jpg?width=550&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061656553280782336/stonkmarket.jpg?width=514&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061656554090274916/techedabeans.jpg?width=550&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061656554413244516/vegs.png"
]
			let embed = new EmbedBuilder()
	.setTitle("Random Green Shadow Deck")
	.setDescription(`Here is your Random Green Shadow(GS) Deck ${message.author}`)
		.setColor("Random")
.setImage(deck[Math.floor(Math.random() * deck.length)])
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
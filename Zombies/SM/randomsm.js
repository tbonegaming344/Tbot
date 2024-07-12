const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports ={
	name: `randomsm`,
	aliases: [`smrandom`, `smashrandom`, `randomsmash`, `randomizedsmdeck`, `rsm`],
	category: `Smash(SM)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT * FROM smdecks where deckinfo = 'image link:'`);
		const deck = [
//SM TBOT DB
`${result[0].agentm}`,
`${result[0].bobertsmash}`,
`${result[0].cruisertempo}`,
`${result[0].fiora}`,
`${result[0].homophobia}`,
`${result[0].horts}`,
`${result[0].kingtempo}`,
`${result[0].mop}`,
`${result[0].mopgargs}`,
`${result[0].ooboltgargs}`,
`${result[0].pablosyeezys}`,
`${result[0].pepegasmash}`,
`${result[0].tricksmash}`,
`${result[0].whalepharaoh}`,
//SM WEB DB
			"https://media.discordapp.net/attachments/1044626284346605588/1061846214292820019/IMG_0766.jpg?width=530&height=586", 
			"https://media.discordapp.net/attachments/1044626284346605588/1061846214506713148/IMG_0765.jpg?width=533&height=587",  
			"https://media.discordapp.net/attachments/1044626284346605588/1061846215031001108/IMG_0763.jpg?width=546&height=586", 
			"https://media.discordapp.net/attachments/1044626284346605588/1061846215404302336/IMG_0762.jpg?width=534&height=586", 
			"https://media.discordapp.net/attachments/1044626284346605588/1061846215660163202/IMG_0761.jpg?width=528&height=586", 
			"https://media.discordapp.net/attachments/1044626284346605588/1061846216612270141/IMG_0758.jpg?width=510&height=586", 
			"https://media.discordapp.net/attachments/1044626284346605588/1061846247020957746/IMG_0757.jpg?width=524&height=586", 
			"https://media.discordapp.net/attachments/1044626284346605588/1061846384040476713/IMG_0756.jpg?width=555&height=587", 
			"https://media.discordapp.net/attachments/1044626284346605588/1061846384334098513/IMG_0755.jpg?width=542&height=586", 
			"https://media.discordapp.net/attachments/1044626284346605588/1061846384598319154/IMG_0754.jpg?width=540&height=586", 
			"https://media.discordapp.net/attachments/1044626284346605588/1061846384917106698/IMG_0753.jpg?width=576&height=587",  
]
		let embed = new EmbedBuilder()
	.setTitle("Random Smash(SM) Deck")
	.setDescription(`Here is your random Smash(SM) Deck ${message.author}`)
		.setColor("Random")
.setImage(deck[Math.floor(Math.random() * deck.length)])
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
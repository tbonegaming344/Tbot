const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `randomcc`,
	aliases: [`ccrandom`, `captaincombustiblerandom`, `randomcaptaincombustible`, `randomizedeckcc`, `ccrandomizedeck`],
	category: `Captain Combustible(CC)`,
		run: async(client, message, args) => {
			let [result] = await db.query(`SELECT * from ccdecks where deckinfo = 'image link:'`);
			const deck = [
//CC TBOT DB 
`${result[0].bempo}`,
`${result[0].combased}`,
`${result[0].comboss}`,
`${result[0].gatlingtempo}`,
`${result[0].plantmop}`,
`${result[0].yrm}`,
//CC WEB DB
"https://media.discordapp.net/attachments/1044626284346605588/1061770084235882608/bottedbowerhouse.png", 
"https://pvzheroesdecklists.tbonegaming344.repl.co/fry/aggro/leafyaggro.jpg",
"https://pvzheroesdecklists.tbonegaming344.repl.co/tbone/luckymoss.jpg"	,		
"https://media.discordapp.net/attachments/1044626284346605588/1061770084932145192/cosmicopea.jpg?width=538&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061770085221543968/cptquickonions.jpg?width=534&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061770085494177792/dinocopy.jpg?width=509&height=588",  
"https://media.discordapp.net/attachments/1044626284346605588/1061770086505009172/berryloop.jpg?width=537&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061770086769242182/betterthancomboss.jpg?width=556&height=588",  
"https://media.discordapp.net/attachments/1044626284346605588/1061770124916424765/conseed.jpg?width=533&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061770125210046474/mossotk.jpg?width=541&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061770125574934578/otkpuff.jpg?width=549&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061770125826588743/otkseed.jpg?width=570&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061770150656884816/podfighterswarm.jpg?width=577&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061770150933712926/predictable.jpg?width=522&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061770151223103608/scuffedcomboss.jpg?width=481&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061770151504134145/weirdflexbutotk.jpg?width=543&height=588",
"https://pvzheroesdecklists.tbonegaming344.repl.co/fry/aggro/kaleaggro.jpg",
"https://pvzheroesdecklists.tbonegaming344.repl.co/fry/midrange/pinechrome.jpg"
]
	let embed = new EmbedBuilder()
	.setTitle("Random Deck for Captain Combustible(CC)")
	.setDescription(`Here is your random Captain Combustible(CC) Deck ${message.author}`)
		.setColor("Random")
.setImage(deck[Math.floor(Math.random() * deck.length)])
	
	message.channel.send({embeds: [ embed ] } ) 
}
}
const Discord = require("discord.js");
const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `randomsp`,
	aliases: [`sprandom`, `spudowrandom`, `randomspudow`, `randomizedecksp`, `sprandomizeddeck`, `spudowrandomizedeck`, `randomizedeckspudow`], 
	category: `Spudow(SP)`, 
	run: async(client, message, args) => {
		const deck = [
//SP TBOT DB
//Bartin
"https://media.discordapp.net/attachments/1044626284346605588/1229950824202113024/Bartin.webp?ex=66318bf7&is=661f16f7&hm=5187a2437b1b35b589c66b61b6c57edabb4d1c4d382f9bc08e44782bd55b46e2&=&format=webp&width=697&height=655",
"https://media.discordapp.net/attachments/780141103558295592/1045084475308134460/cachedImage.png?width=645&height=604",
"https://media.discordapp.net/attachments/1044626284346605588/1160949488559603743/IMG_5218.png?ex=65368577&is=65241077&hm=146bd5a6e28ae63f60298893&=&width=606&height=580",
"https://media.discordapp.net/attachments/1044626284346605588/1061764111836397639/magmartin.jpg",
"https://media.discordapp.net/attachments/1044626284346605588/1045011616409858048/IMG_20220514_191624.jpg?width=594&height=604",
"https://media.discordapp.net/attachments/780141103558295592/1045084546519011368/cachedImage.png?width=644&height=604",
"https://media.discordapp.net/attachments/1027007487599202407/1125646763701850252/IMG_6991.png?width=669&height=625",
"https://media.discordapp.net/attachments/1044626284346605588/1065773736537632878/Screenshot_20210523-160341.png?width=643&height=624",
//SP WEB DB 

"https://media.discordapp.net/attachments/1044626284346605588/1061764111454699681/kenmartin2nd.png?width=639&height=588",  			
"https://media.discordapp.net/attachments/1044626284346605588/1061764112348094524/3burn.PNG?width=577&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061764114273280070/fig.png?width=630&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061764114600427550/joa.png", 
"https://media.discordapp.net/attachments/1044626284346605588/1061764150059073576/controlsp.jpg?width=541&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061764150428176555/Cycle.jpg?width=518&height=587",  
"https://media.discordapp.net/attachments/1044626284346605588/1061764151233482864/protectseed.jpg?width=567&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061764170632155216/starchpack.jpg?width=547&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061764170921541753/t3mpo.jpg?width=535&height=588", 
"https://media.discordapp.net/attachments/1044626284346605588/1061764171202568233/spudumb.jpg?width=541&height=588",
]
		let embed = new EmbedBuilder()
	.setTitle("Random Spudow(SP) Deck")
	.setDescription(`Here is your Random Spudow(SP) Deck ${message.author}`)
		.setColor("Random")
.setImage(deck[Math.floor(Math.random() * deck.length)])
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
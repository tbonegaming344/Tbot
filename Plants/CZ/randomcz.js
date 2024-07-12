const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports ={
	name: `randomcz`,
	aliases: [`czrandom`, `randomdeckcz`, `czrandomdeck`, `randomizeddeckcz`, `czrandomizedeck`], 
	category: `Chompzilla(CZ)`,
	run: async(client, message, args) => {
		let [result]= await db.query(`SELECT * from czdecks
		where deckinfo = 'image link:'`)
		const deck = [
				//CZ TBOT DB 
//Aggro Ramp Pea
`${result[0].aggroramppeas}`,
//Aggro CZ
`${result[0].aggrozilla}`,
//AmongUsZilla
`${result[0].amonguszilla}`,
//ApOTK
`${result[0].apotk}`,
//HMZ
`${result[0].healmidzilla}`,
//HRR
`${result[0].hrr}`,
//MidRed
`${result[0].midred}`,
//RingZilla
`${result[0].ringzilla}`,
//Stallzilla
`${result[0].stallzilla}`,
//Mopribus
`${result[0].mopribus}`,
		//CZ WEB DB
		"https://media.discordapp.net/attachments/1044626284346605588/1061696586482196620/ramppeas.jpg?width=535&height=588",  
		"https://media.discordapp.net/attachments/1044626284346605588/1061696587165859961/CZ_healaggro.jpg?width=514&height=588", 
		"https://media.discordapp.net/attachments/1044626284346605588/1061696588017303672/healzilla.jpg?width=578&height=588", 
		"https://media.discordapp.net/attachments/1044626284346605588/1061696588323495977/midzilla.jpeg?width=631&height=588", 
		"https://media.discordapp.net/attachments/1044626284346605588/1061696589099442236/Ramp_rings.jpg?width=548&height=588", 
		"https://media.discordapp.net/attachments/1044626284346605588/1061696628613992458/ramptotrash.jpg?width=460&height=588", 
		"https://media.discordapp.net/attachments/1044626284346605588/1061696629180215329/magotk.png?width=621&height=588",  
		"https://media.discordapp.net/attachments/1044626284346605588/1061696630027456633/rampredrings.jpg?width=526&height=588",
"https://pvzheroesdecklists.tbonegaming344.repl.co/fusionbreak/midpresso.jpg",
"https://pvzheroesdecklists.tbonegaming344.repl.co/flowerman/flowerheal.jpg",
"https://pvzheroesdecklists.tbonegaming344.repl.co/badorni/ramprings.jpg",
"https://pvzheroesdecklists.tbonegaming344.repl.co/fry/meme/ramspresso.jpg",
		]
		let embed = new EmbedBuilder()
	.setTitle("Random Chompzilla Deck")
	.setDescription(`Here is your random Chompzilla deck ${message.author}`)
		.setColor("Random")
.setImage(deck[Math.floor(Math.random() * deck.length)])
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
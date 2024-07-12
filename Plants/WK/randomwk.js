const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `randomwk`,
	aliases: [`wkrandom`, `wallknightrandom`, `randomwallknight`, `randomdeckwk`, `wkrandomdeck`, `wallknightrandomdeck`, `randomdeckwallknight`],
	category: `Wall Knight(WK)`,
	run: async(client, message, args) => {
		const deck = [
//WK TBOT DB 
"https://media.discordapp.net/attachments/1044626284346605588/1169715953848811630/3mid.png?ex=655669df&is=6543f4df&hm=de52b253ff62cb93cf19f554&=",
"https://media.discordapp.net/attachments/950984460382388244/952760179085152296/Aggro_WK.png?width=643&height=604",
"https://media.discordapp.net/attachments/1060317261690322994/1088913176776675490/CancerKnight.png?width=647&height=604",			"https://media.discordapp.net/attachments/1044626284346605588/1061686841855717456/cycleknight.png", "https://media.discordapp.net/attachments/1044626284346605588/1061686842191249489/funnyknight.jpg",
			"https://media.discordapp.net/attachments/1044626284346605588/1134463532365266945/this_deck_came_from_figuring_out_that_garlic_could_be_used_as_both_a_cob_and_3nut_activator_so_a_faster_wall_knight_deck_could_have_conssitent_cob_evo_and_3nut_abuse.jpg?width=622&height=580",
			"https://media.discordapp.net/attachments/1042391001039372289/1044023170270756984/IMG_5283.png",
"https://media.discordapp.net/attachments/1044626284346605588/1093229886157623406/image0.jpg?width=549&height=555",
"https://media.discordapp.net/attachments/1060317261690322994/1068146423222255656/IMG_3714.jpg?width=561&height=587",
"https://media.discordapp.net/attachments/1044626284346605588/1045190222222213210/IMG_9375.png?width=548&height=604",
//WK WEB DB
			"https://media.discordapp.net/attachments/1044626284346605588/1061686842526802071/Healaggro.jpg?width=545&height=588", "https://media.discordapp.net/attachments/1044626284346605588/1061686842786852924/healmid_wk.jpg","https://media.discordapp.net/attachments/1044626284346605588/1061686843055276062/healsanity.jpg?width=551&height=588", "https://media.discordapp.net/attachments/1044626284346605588/1061686843365662751/3knight.jpg?width=481&height=588",  "https://media.discordapp.net/attachments/1044626284346605588/1061686889528184852/counterknight.jpg?width=467&height=588", "https://media.discordapp.net/attachments/1044626284346605588/1061686890362851429/healwk.png?width=865&height=588", "https://media.discordapp.net/attachments/1044626284346605588/1061686890895519794/midheal.jpg?width=529&height=588", "https://media.discordapp.net/attachments/1044626284346605588/1061686926639378565/trollknight.jpg?width=575&height=588", "https://media.discordapp.net/attachments/1044626284346605588/1061686926983303188/wkcontrol.png",
			"https://media.discordapp.net/attachments/1044626284346605588/1061686928107388958/ramptroll.jpg?width=546&height=588", 
"https://pvzheroesdecklists.tbonegaming344.repl.co/fry/aggro/package.jpg",
"https://pvzheroesdecklists.tbonegaming344.repl.co/berserk/funnysunstrike.jpg",
]
				let embed = new EmbedBuilder()
	.setTitle("Random Wall Knight(WK) Deck")
	.setDescription(`Here is your Random Wall Knight Deck ${message.author}`)
		.setColor("Random")
.setImage(deck[Math.floor(Math.random() * deck.length)])
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
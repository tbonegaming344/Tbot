let {EmbedBuilder}= require("discord.js");
let db = require("../../index.js");
module.exports ={
	name: `whalekyrie`,
	aliases: [`whalevalk`, `ebvalk`, `kyriewhale`, `valkeb`, `valkaloo`],
	category: `Electric Boogaloo(EB)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT whalekyrie FROM ebdecks`)
		let wvalk = new EmbedBuilder()
		.setTitle("Whalekyrie")
		.setDescription(`${result[2].whalekyrie}`)
		.setFooter({text: `${result[1].whalekyrie}`})
		.addFields({name: "Deck Cost:", value: `${result[0].whalekyrie}`})
		.setColor("Random")
		.setImage(`${result[3].whalekyrie}`)
		message.channel.send({embeds: [wvalk]})
	}
}
const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `seacret`,
	aliases: [`secretswimmer`, `secret`, `ebsecret`, `secreteb`, `ss`, `sss`, `boogsecret`, `secretboog`, `secret22`],
	category: `Electric Boogaloo(EB)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT seacret FROM ebdecks`)
		let sc = new EmbedBuilder()
		.setTitle("Seacret")
		.setDescription(`${result[2].seacret}`)
		.setColor("Random")
		.setFooter({text: `${result[1].seacret}`})
		.addFields({name: "Deck Cost",
							 	value: `${result[0].seacret}`})		
		.setImage(`${result[3].seacret}`)
		message.channel.send({embeds: [sc]})
	}
}
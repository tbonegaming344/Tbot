const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `homophobia`,
	aliases: [`smburn`],
	category: `Smash(SM)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT homophobia FROM smdecks`)
		let smb = new EmbedBuilder()
		.setTitle("HOMOPHOBIA")
		.setDescription(`${result[2].homophobia}`)
		.setColor("Random")
		.setFooter({text: `${result[1].homophobia}`})
		.setImage(`${result[3].homophobia}`)
		.addFields({name: "Deck Cost",
							 	value:`${result[0].homophobia}`})
		message.channel.send({embeds: [smb]})
	}
}
const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `antiagoragor`,
	aliases: [`imptuna`],
	category: `Neptuna(NT)`,
	run: async(client, message,args)=> {
		let [result] = await db.query(`SELECT antiagoragor FROM ntdecks`)
		let a = new EmbedBuilder()
		.setImage(`${result[3].antiagoragor}`)
		.setTitle("Anti Agor Agor")
		.setDescription(`${result[2].antiagoragor}`)
			.setColor("Random")
		.addFields({name: "Deck Cost",
							 	value: `${result[0].antiagoragor}`
							 })
		.setFooter({text: `${result[1].antiagoragor}`})
		message.channel.send({embeds: [a]})
	}
}
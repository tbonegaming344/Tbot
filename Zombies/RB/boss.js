const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `boss`,
	aliases: [`boltofsomesize`, `combobolt`],
	category: `Rustbolt(RB)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`select boss from rbdecks`)
		let boss = new EmbedBuilder()
		.setTitle("Bolt Of Some Size")
		.setDescription(`${result[2].boss}`)
		.setFooter({text: `${result[1].boss}`})
		.setColor("Random")
		.addFields({name: "Deck Cost",
							 	value:`${result[0].boss}`})
		.setImage(`${result[3].boss}`)
		message.channel.send({embeds: [boss]})
	}
}
const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `gatlingtempo`,
	aliases: [`gtempo`, `gatempo`],
	category: `Captain Combustible(CC)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT gatlingtempo from ccdecks`);
		let gt = new EmbedBuilder()
		.setTitle("Gatling Tempo")
		.setDescription(`${result[2].gatlingtempo}`)
		.setColor("Random")
		.setFooter({text: `${result[1].gatlingtempo}`})
		.addFields({name: "Deck Cost",
							 value: `${result[0].gatlingtempo}`})
		.setImage(`${result[3].gatlingtempo}`)
		message.channel.send({embeds: [gt]})
	}
}
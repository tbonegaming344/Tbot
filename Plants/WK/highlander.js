const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `highlander`,
	aliases: [`wkhighlander`, `highlanderwk`, `13-0`],
	category: `Wall Knight(WK)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT highlander from wkdecks`);
		let hl = new EmbedBuilder()
		.setTitle("WK Highlander")
		.setDescription(`${result[2].highlander}`)
		.setColor("Random")
		.setFooter({text: `${result[1].highlander}`})
		.addFields({name: "Deck Cost", value: `${result[0].highlander}`})
		.setImage(`${result[3].highlander}`)
		message.channel.send({embeds: [hl]})
	}
}
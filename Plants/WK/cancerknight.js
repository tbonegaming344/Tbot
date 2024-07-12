const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `cancerknight`,
	aliases: [`cancer`, `cancerwk`],
	category: `Wall Knight(WK)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT cancerknight from wkdecks`);
		let cancer = new EmbedBuilder()
		.setTitle("Cancer Knight")
		.setDescription(`${result[2].cancerknight}`)
		.setColor("Random")
		.addFields({name: "Deck Cost",
							 value: `${result[0].cancerknight}`})
		.setImage(`${result[3].cancerknight}`)
		.setFooter({text: `${result[1].cancerknight}`})
		message.channel.send({embeds: [cancer]})
	}
}
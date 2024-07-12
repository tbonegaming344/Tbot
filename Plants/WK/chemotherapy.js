const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: 'chemotherapy',
	aliases: [`chemo`],
	category: `Wall Knight(WK)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT chemotherapy from wkdecks`);
		let chemotherapy = new EmbedBuilder()
		.setTitle("Chemotherapy")
		.setDescription(`${result[2].chemotherapy}`)
		.setFooter({text: `${result[1].chemotherapy}`})
		.addFields({name: "Deck Cost", value: `${result[0].chemotherapy}`})
		.setColor("Random")
		.setImage(`${result[3].chemotherapy}`)
		message.channel.send({embeds: [chemotherapy]})
	}
}
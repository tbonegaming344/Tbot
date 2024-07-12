const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `millie`,
	aliases: [`milly`, `millietide`, `lllyfreeze`],
	category: `Green Shadow(GS)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT millie from gsdecks`);
		let mil = new EmbedBuilder()
		.setTitle("Millie")
		.setDescription(`${result[2].millie}`)
		.setColor("Random")
		.setFooter({text: `${result[1].millie}`})
		.addFields({name: "Deck Cost",
							 	value: `${result[0].millie}`})
		.setImage(`${result[3].millie}`)
		message.channel.send({embeds: [mil]})
	}
}
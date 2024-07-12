const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `frozentelimps`,
	aliases: [`teleimpsonice`, `softcore`, `softcorebigfeetfetish`],
	category: `Huge-Gigantacus/SuperBrainz`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT frozentelimps FROM hgdecks`);
		let fti = new EmbedBuilder()
		.setTitle("Softcore Bigfeet Fetish")
		.setDescription(`${result[2].frozentelimps}`)
	.setColor("Random")
		.setImage(`${result[3].frozentelimps}`)
		.addFields({name: "Deck Cost", 
							 	value: `${result[0].frozentelimps}`})
		.setFooter({text: `${result[1].frozentelimps}`})
		message.channel.send({embeds: [fti]})
	}
}
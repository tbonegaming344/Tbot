const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `3mid`,
	aliases: [`wk3mid`],
	category: `Wall Knight(WK)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT mid3 from wkdecks`);
		let embed = new EmbedBuilder()
	.setTitle("3-Mid")
	.setDescription(`${result[2].mid3}`)
	.setFooter({text: `${result[1].mid3}`})
			.addFields({name: "Deck Cost", value: `${result[0].mid3}`})
		.setColor("Random")
		.setImage(`${result[3].mid3}`)
	message.channel.send({embeds: [ embed ] } )
	}
}
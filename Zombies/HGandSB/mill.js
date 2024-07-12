const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `mill`,
	aliases: [`sbmill`, `millsb`],
	category: `Huge-Gigantacus/SuperBrainz`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT mill FROM sbdecks`)
			let embed = new EmbedBuilder()
	.setTitle("Mill")
	.setDescription(`${result[2].mill}`)
	.setFooter({text: `${result[1].mill}`})
			.addFields({name: "Deck Cost", value: `${result[0].mill}`})
		.setColor("Random")
		.setImage(`${result[3].mill}`)
	message.channel.send({embeds: [ embed ] } )
	}
}
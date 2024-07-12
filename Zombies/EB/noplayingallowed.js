const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `noplayingallowed`,
	aliases: [`ebnoplayingallowed`, `npa`],
	category: `Electric Boogaloo(EB)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT noplayingallowed FROM ebdecks`)
		let embed = new EmbedBuilder()
	.setTitle("No Playing Allowed")
	.setDescription(`${result[2].noplayingallowed}`)
	.setFooter({text: `${result[1].noplayingallowed}`})
				.addFields({name: "Deck Cost", value: `${result[0].noplayingallowed}`})
		.setColor("Random")
		.setImage(`${result[3].noplayingallowed}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
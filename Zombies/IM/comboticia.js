const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `comboticia`,
	aliases: [`tricaofsomesize`, `toss`, `comboim`, `imcombo`],
	category: `Immorticia(IM)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT comboticia FROM imdecks`)
			let embed = new EmbedBuilder()
	.setTitle("Comboticia AKA Toss")
	.setDescription(`${result[2].comboticia}`)
	.setFooter({text: `${result[1].comboticia}`})
			.addFields({name: "Deck Cost", value: `${result[0].comboticia}`})
		.setColor("Random")
		.setImage(`${result[3].comboticia}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
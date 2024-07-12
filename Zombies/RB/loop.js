const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `loop`,
	aliases: [`viralloop`],
	category: `Rustbolt(RB)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`select l00p from rbdecks`)
			let embed = new EmbedBuilder()
	.setTitle("Loop")
	.setDescription(`${result[2].l00p}`)
	.setFooter({text: `${result[1].l00p}`})
			.addFields({name: "Deck Cost", value: `${result[0].l00p}`})
		.setColor("Random")
		.setImage(`${result[3].l00p}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
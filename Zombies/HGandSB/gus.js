const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `gus`,
	aliases: [`hggus`, `gushg`],
	category: `Huge-Gigantacus/SuperBrainz`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT gus FROM hgdecks`)
		let embed = new EmbedBuilder()
		.setTitle("Gus")
	.setDescription(`${result[2].gus}`)
	.setFooter({text: `${result[1].gus}`})
			.addFields({name: "Deck Cost", value: `${result[0].gus}`})
		.setColor("Random")
.setImage(`${result[3].gus}`)
	message.channel.send({embeds: [ embed ] } )	
	}
}
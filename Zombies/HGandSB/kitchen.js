const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `kitchenhg`,
	aliases: [`hgkitchen`, `kshe`, `kitchensinkhaseverything`, `hgkitchensink`, `kitchensinkhg`],
	category: `Huge-Gigantacus/SuperBrainz`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT kitchenhg FROM hgdecks`)
			let embed = new EmbedBuilder()
			.setTitle("Kitchen Sink Has Everything")
			.setDescription(`${result[2].kitchenhg}`)
			.setFooter({text: `${result[1].kitchenhg}`})
			.addFields({name: "Deck Cost", value: `${result[0].kitchenhg}`})
		.setColor("Random")
.setImage(`${result[3].kitchenhg}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
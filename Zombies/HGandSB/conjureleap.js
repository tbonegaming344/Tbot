const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `conjureleap`,
	aliases: [`conjureleaphg`, `cleap`],
	category: `Huge-Gigantacus/SuperBrainz`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT conjureleap FROM hgdecks`)
			let embed = new EmbedBuilder()
	.setTitle("Conjure Leap")	
			.setDescription(`${result[2].conjureleap}`)
	.setFooter({text: `${result[1].conjureleap}`})
			.addFields({name: "Deck Cost", value: `${result[0].conjureleap}`})
		.setColor("Random")			
		.setImage(`${result[3].conjureleap}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
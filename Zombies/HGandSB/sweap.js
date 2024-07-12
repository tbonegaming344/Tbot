const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `sweap`,
	aliases: [`sweaphg`, `swe`],
	category: `Huge-Gigantacus/SuperBrainz`,
		run: async(client, message, args) => {
			let [result] = await db.query(`SELECT sweap FROM hgdecks`)
		let embed = new EmbedBuilder()
	.setTitle("Sweap")	
			.setDescription(`${result[2].sweap}`)
	.setFooter({text: `${result[1].sweap}`})
			.addFields({name: "Deck Cost", value: `${result[0].sweap}`})
		.setColor("Random")			
		.setImage(`${result[3].sweap}`)
	message.channel.send({embeds: [ embed ] } ) 
}
}
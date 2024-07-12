const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `lgconjure`,
	aliases: [`lgconjurehg`, `lgchg`],
	category: `Huge-Gigantacus/SuperBrainz`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT lgconjure FROM hgdecks`)
			let embed = new EmbedBuilder()
	.setTitle("LG Conjure")	
			.setDescription(`${result[2].lgconjure}`)
	.setFooter({text: `${result[1].lgconjure}`})
			.addFields({name: "Deck Cost", value: `${result[0].lgconjure}`})
			.setImage(`${result[3].lgconjure}`)
		.setColor("Random")			
	message.channel.send({embeds: [ embed ] } ) 
	}
}
const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `lgconjuresb`,
	aliases: [`sblgconjure`, `lgcsb`], 
	category: `Huge-Gigantacus/SuperBrainz`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT lgconjuresb FROM sbdecks`)
			let embed = new EmbedBuilder()
	.setTitle("LG Conjure")	
			.setDescription(`${result[2].lgconjuresb}`)
	.setFooter({text: `${result[1].lgconjuresb}`})
			.addFields({name: "Deck Cost", value: `${result[0].lgconjuresb}`})	
			.setImage(`${result[3].lgconjuresb}`)
		.setColor("Random")			
	message.channel.send({embeds: [ embed ] } ) 
	}
}
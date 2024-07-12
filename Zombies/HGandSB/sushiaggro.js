const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `sushiaggro`,
	aliases: [`aggrosushi`, `susa`],
	category: `Huge-Gigantacus/SuperBrainz`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT sushiaggro FROM hgdecks`)
			let embed = new EmbedBuilder()
	.setTitle("Sushi Aggro")	
			.setDescription(`${result[2].sushiaggro}`)
	.setFooter({text: `${result[1].sushiaggro}`})
			.addFields({name: "Deck Cost", value: `${result[0].sushiaggro}`})	
			.setImage(`${result[3].sushiaggro}`)
		.setColor("Random")			
	message.channel.send({embeds: [ embed ] } ) 
	}
}
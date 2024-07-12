const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `gravester`,
	aliases: [`graveyardtrickster`, `grs`],
	category: `Huge-Gigantacus/SuperBrainz`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT gravester FROM hgdecks`);
			let embed = new EmbedBuilder()
	.setTitle("Gravester")	
			.setDescription(`${result[2].gravester}`)
	.setFooter({text:`${result[1].gravester}`})
			.addFields({name: "Deck Cost", value:`${result[0].gravester}`})	
			.setImage(`${result[3].gravester}`)
		.setColor("Random")			
	message.channel.send({embeds: [ embed ] } ) 
	}
}
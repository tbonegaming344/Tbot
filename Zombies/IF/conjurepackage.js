const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `conjurepackage`,
	aliases: [`packageconjure`, `conjurepack`, `packconjure`, `conjureif`, `ifconjure`, `ifraiser`, `raiserif`],
	category: `Impfinity(IF)`,
		run: async(client, message, args) => {
			let [result] = await db.query(`SELECT conjurepackage FROM ifdecks`)
				let embed = new EmbedBuilder()
	.setTitle("Conjure Package")	
			.setDescription(`${result[2].conjurepackage}`)
		.setFooter({text: `${result[1].conjurepackage}`})
			.addFields({name: "Deck Cost", value: `${result[0].conjurepackage}`})	
			.setImage(`${result[3].conjurepackage}`)
		.setColor("Random")			
	message.channel.send({embeds: [ embed ] } ) 
	}
}
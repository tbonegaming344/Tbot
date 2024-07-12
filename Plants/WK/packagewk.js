const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `packagewk`,
	aliases: [`wkpackage`, `packwk`, `wkpack`],
	category: `Wall Knight(WK)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT packagewk from wkdecks`);
		let embed = new EmbedBuilder()
	.setTitle("Package WK")	
	.setDescription(`${result[2].packagewk}`)
	.setFooter({text: `${result[1].packagewk}`})
			.addFields({name: "Deck Cost", value: `${result[0].packagewk}`})
		.setColor("Random")		
		.setImage(`${result[3].packagewk}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
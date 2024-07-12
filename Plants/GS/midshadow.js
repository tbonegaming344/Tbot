const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `midshadow`,
	aliases: [`midgs`, `gsmid`, `ms`],
	category: `Green Shadow(GS)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT midshadow from gsdecks`);
		let embed = new EmbedBuilder()
	.setTitle("Mid Shadow")	
			.setDescription(`${result[2].midshadow}`)
	.setFooter({text: `${result[1].midshadow}`})
			.addFields({name: "Deck Cost", value: `${result[0].midshadow}`})
		.setColor("Random")					
		.setImage(`${result[3].midshadow}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
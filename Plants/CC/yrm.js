const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `yrm`,
	aliases: [`youngringsmartin`],
	category: `Captain Combustible(CC)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT yrm from ccdecks`);
				let embed = new EmbedBuilder()
	.setTitle("Young Rings Martin")	
			.setDescription(`${result[2].yrm}`)
	.setFooter({text: `${result[1].yrm}`})
			.addFields({name: "Deck Cost", value: `${result[0].yrm}`})
		.setColor("Random")			
			.setImage(`${result[3].yrm}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `hyperswarm`,
	aliases: [`swarmnc`, `ncswarm`, `hs`],
	category: `NightCap(NC)`,
		run: async(client, message, args) => {
			let [result] = await db.query(`SELECT hyperswarm from ncdecks`);
					let embed = new EmbedBuilder()
	.setTitle("Hyper Swarn")	
			.setDescription(`${result[2].hyperswarm}`)
	.setFooter({text: `${result[1].hyperswarm}`})
			.addFields({name: "Deck Cost", value: `${result[0].hyperswarm}`})
		.setColor("Random")		
		.setImage(`${result[3].hyperswarm}`)
	message.channel.send({embeds: [ embed ] } ) 
		}
}
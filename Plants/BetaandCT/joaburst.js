const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `joaburst`,
	aliases: [`burstjoa`, `jb`],
	category: `Beta-Carrotina/Citron`,
		run: async(client, message, args) => {
			let [result] = await db.query("SELECT joaburst FROM ctdecks");
				let embed = new EmbedBuilder()
	.setTitle("Joa Burst")
	.setDescription(`${result[2].joaburst}`)
	.setFooter({text: `${result[1].joaburst}`})
			.addFields({name: "Deck Cost", value: `${result[0].joaburst}`})
		.setColor("Random")		
		.setImage(`${result[3].joaburst}`)
	message.channel.send({embeds: [ embed ] } ) 
		}
}
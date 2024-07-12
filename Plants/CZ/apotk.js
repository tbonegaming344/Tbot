const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `apotk`,
	aliases: [`otktcz`, `czotk`, `otktrickstercz`, `czotktrickster`, `apotatootk`],
	category: `Chompzilla(CZ)`,
		run: async(client, message, args) => {
			let [result]= await db.query(`SELECT apotk from czdecks`)
					let embed = new EmbedBuilder()
	.setTitle("Apotato OTK")
	.setDescription(`${result[2].apotk}`)
	.setFooter({text: `${result[1].apotk}`})
			.addFields({name: "Deck Cost", value:`${result[0].apotk}`})
		.setColor("Random")		
		.setImage(`${result[3].apotk}`)
	message.channel.send({embeds: [ embed ] } ) 
		}
}
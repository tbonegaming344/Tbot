const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `rampburst`,
	aliases: [`burstramp`, `rampb`],
	category: `Wall Knight(WK)`,
		run: async(client, message, args) => {
			let [result] = await db.query(`SELECT rampburst from wkdecks`); 
			let embed = new EmbedBuilder()
	.setTitle("Ramp Burst")
	.setDescription(`${result[2].rampburst}`)
	.setFooter({text: `	${result[1].rampburst}`})
			.addFields({name: "Deck Cost", value: `${result[0].rampburst}`})
		.setColor("Random")
.setImage(`${result[3].rampburst}`)
	message.channel.send({embeds: [ embed ] } )  
		}
}
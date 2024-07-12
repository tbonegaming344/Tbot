const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `solstice`,
	category: `Solar Flare(SF)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT solstice from sfdecks`); 
		let sol = new EmbedBuilder()
		.setTitle("Solstice")
		.setDescription(`${result[2].solstice}`)
		.setColor("Random")
		.setFooter({text: `${result[1].solstice}`})
		.setImage(`${result[3].solstice}`)
		.addFields({name: "Deck Cost",
							 	value: `${result[0].solstice}`})
		message.channel.send({embeds: [sol]})
	}
}
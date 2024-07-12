const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `hrr`,
	aliases: [`highrollrings`, `ringshighroll`],
	category: `Chompzilla(CZ)`,
	run: async(client, message, args) => {
		let [result]= await db.query(`SELECT hrr from czdecks`)
		let embed = new EmbedBuilder()
	.setTitle("High Roll Rings")
	.setDescription(`${result[2].hrr}`)
	.setFooter({text: `${result[1].hrr}`})
			.addFields({name: "Deck Cost", value: `${result[0].hrr}`})
		.setColor("Random")
		.setImage(`${result[3].hrr}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
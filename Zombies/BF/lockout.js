const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `lockout`,
	aliases: ['bflockout', `lout`, `pirataout`, `lock-out`, `piratout`],
	category: `Brain Freeze(BF)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT lockout FROM bfdecks`)
		let embed = new EmbedBuilder()
	.setTitle("Pirataout")
	.setDescription(`${result[2].lockout}`)
	.setFooter({text: `${result[1].lockout}`})
			.addFields({name: "Deck Cost", value: `${result[0].lockout}`})
		.setColor("Random")
		.setImage(`${result[3].lockout}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
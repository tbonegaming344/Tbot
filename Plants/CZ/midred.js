const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `midred`,
	aliases: ['redmid', `midr`],
	category: `Chompzilla(CZ)`,
	run: async(client, message, args) => {
		let [result]= await db.query(`SELECT midred from czdecks`)
				let embed = new EmbedBuilder()
	.setTitle("Mid Red")
	.setDescription(`${result[2].midred}`)
	.setFooter({text: `${result[1].midred}`})
			.addFields({name: "Deck Cost", value: `${result[0].midred}`})
		.setColor("Random")
		.setImage(`${result[3].midred}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
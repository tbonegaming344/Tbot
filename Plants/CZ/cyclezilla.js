const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `cyclezilla`,
	aliases: [`zillacycle`, `cyclecz`, `czcycle`],
	category: `Chompzilla(CZ)`, 
	run: async(client, message, args)=> {
		let [result]= await db.query(`SELECT cyclezilla from czdecks`)
		let cycz = new EmbedBuilder()
		.setTitle("Cyclezilla")
		.setDescription(`${result[2].cyclezilla}`)
		.setFooter({text: `${result[1].cyclezilla}`})
		.addFields({name: "Deck Cost", value: `${result[0].cyclezilla}`})
		.setColor("Random")
		.setImage(`${result[3].cyclezilla}`)
		message.channel.send({embeds: [cycz]})
	}
}
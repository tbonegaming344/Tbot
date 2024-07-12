const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js")
module.exports ={
	name: `toaster`,
	aliases: [`tossster`],
	category: `Immorticia(IM)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT toaster FROM imdecks `)
		let toast = new EmbedBuilder()
		.setTitle("Toaster")
		.setDescription(`${result[2].toaster}`)
		.setColor("Random")
		.setFooter({text: `${result[1].toaster}`})
		.addFields({name: "Deck Cost", value: `${result[0].toaster}`})
		.setImage(`${result[3].toaster}`)
		message.channel.send({embeds: [toast]})
	}
}
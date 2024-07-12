const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `morality`,
	aliases: [`gravebot`, `graveyardzombot`, `graveyardbot`],
	category: `Brain Freeze(BF)`, 
	run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT morality FROM bfdecks`)
	 let mora = new EmbedBuilder()
		.setTitle("Morality")
		.setDescription(`${result[2].morality}`)
		.setColor("Random")
		 .addFields({name: "Deck Cost", value:`${result[0].morality}`})
		.setFooter({text: `${result[1].morality}`})
		.setImage(`${result[3].morality}`)
		message.channel.send({embeds: [mora]})
	}
}
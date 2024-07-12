const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `himpter`, 
	aliases: [`huntinggroundimps`, `huntingimps`, `huntimps`, `himps`],
	category: `Brain Freeze(BF)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT himps FROM bfdecks`)
				let embed = new EmbedBuilder()
	.setTitle("Himpter")	
			.setDescription(`${result[2].himps}`)
	.setFooter({text: `${result[1].himps}`})
			.addFields({name: "Deck Cost", value: `${result[0].himps}`})
		.setColor("Random")		
		.setImage(`${result[3].himps}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
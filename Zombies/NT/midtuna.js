const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `midtuna`,
	aliases: [`midnt`, `midt`],
	category: `Neptuna(NT)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`select midtuna from ntdecks`)
		let embed = new EmbedBuilder()
	.setTitle("Fry's Midtuna")	
			.setDescription(`${result[2].midtuna}`)
	.setFooter({text: `${result[1].midtuna}`})
			.addFields({name: "Deck Cost", value: `${result[0].midtuna}`})
		.setColor("Random")					
		.setImage(`${result[3].midtuna}`)
	message.channel.send({embeds: [ embed ] } )
	}
}
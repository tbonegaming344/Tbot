const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `sunlord`,
	aliases: [`warlordimps`, `wimp`, `slord`, `wimps`],
	category: `Neptuna(NT)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`select wimps from ntdecks`)
			let embed = new EmbedBuilder()
	.setTitle("Sunlord")	
			.setDescription(`${result[2].wimps}`)
	.setFooter({text: `${result[1].wimps}`})
			.addFields({name: "Deck Cost", value:`${result[0].wimps}`})
		.setColor("Random")					
		.setImage(`${result[3].wimps}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
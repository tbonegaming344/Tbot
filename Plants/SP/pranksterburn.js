const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `pranksterburn`,
	aliases: [`pranksterburnsp`, `prankburn`],
	category: `Spudow(SP)`,
		run: async(client, message, args) => {
			let [result] = await db.query(`SELECT pranksterburn from spdecks`); 
					let embed = new EmbedBuilder()
	.setTitle("Prankster Burn")	
			.setDescription(`${result[2].pranksterburn}`)
	.setFooter({text: `${result[1].pranksterburn}`})
			.addFields({name: "Deck Cost", value: `${result[0].pranksterburn}`})	
			.setImage(`${result[3].pranksterburn}`)
		.setColor("Random")			
	message.channel.send({embeds: [ embed ] } ) 
		}
}
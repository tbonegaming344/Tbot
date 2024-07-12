const {EmbedBuilder} = require("discord.js")
let db = require("../../index.js")
module.exports = {
	name: `stallzilla`,
	aliases: [`samenstall`, `samenstallzilla`, `sz`],
	category: `Chompzilla(CZ)`,
	run: async(client, message, args) => {
		let [result]= await db.query(`SELECT stallzilla from czdecks`)
		let embed = new EmbedBuilder()
	.setTitle("Stallzilla")	
			.setDescription(`${result[2].stallzilla}`)
	.setFooter({text: `${result[1].stallzilla}`})
			.addFields({name: "Deck Cost", value: `${result[0].stallzilla}`})
		.setColor("Random")		
		.setImage(`${result[3].stallzilla}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
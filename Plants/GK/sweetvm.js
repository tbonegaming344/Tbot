const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `sweetvm`,
	aliases: [`sweetvegm`, `svm`],
	category: `Grass Knuckles(GK)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT sweetvm FROM gkdecks`)
				let embed = new EmbedBuilder()
	.setTitle("Sweet VM")	
			.setDescription(`${result[2].sweetvm}`)
		.setFooter({text: `${result[1].sweetvm}`})
			.addFields({name: "Deck Cost", value: `${result[0].sweetvm}`})	
			.setImage(`${result[3].sweetvm}`)
		.setColor("Random")			
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
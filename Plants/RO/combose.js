const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `combose`,
	aliases: [`comborose`, `cbr`],
	category: `Rose(RO)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT combose from rodecks`);
			let embed = new EmbedBuilder()
	.setTitle("Combose")	
			.setDescription(`${result[2].combose}`)
	.setFooter({text:`${result[1].combose}`})
			.addFields({name: "Deck Cost", value: `${result[0].combose}`})
		.setColor("Random")			
		.setImage(`${result[3].combose}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
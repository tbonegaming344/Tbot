const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `mop`,
	aliases: [`smmop`, ` frymop`],
	category: `Smash(SM)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT mop FROM smdecks`);
			let embed = new EmbedBuilder()
	.setTitle("Mop")	
			.setDescription(`${result[2].mop}`)
	.setFooter({text: `${result[1].mop}`})
			.addFields({name: "Deck Cost", value:`${result[0].mop}`})
		.setColor("Random")			
		.setImage(`${result[3].mop}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `midcap`,
	aliases: [`midnc`, `mc`],
	category: `NightCap(NC)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT midcap from ncdecks`);
	let embed = new EmbedBuilder()
	.setTitle("Midcap")
	.setDescription(`${result[2].midcap}`)
	.setFooter({text: `${result[1].midcap}`})
			.addFields({name: "Deck Cost", value:`${result[0].midcap}`})
		.setColor("Random")		
		.setImage(`${result[3].midcap}`)
	message.channel.send({embeds: [ embed ] } )
	}
}
const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `cyggro`,
	aliases: [`aggrocyclecap`, `cg`, `cyaggro`],
	category: `NightCap(NC)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT cyggro from ncdecks`);
					let embed = new EmbedBuilder()
	.setTitle("Cyggro")
	.setDescription(`${result[2].cyggro}`)
	.setFooter({text: `${result[1].cyggro}`})
			.addFields({name: "Deck Cost", value: `${result[0].cyggro}`})
		.setColor("Random")	
		.setImage(`${result[3].cyggro}`)
	message.channel.send({embeds: [ embed ] } )
	}
}
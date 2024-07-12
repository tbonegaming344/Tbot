const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `joashrooms`,
	aliases: [`shroomsjoa`, `ncjoashrooms`, `js`],
	category: `NightCap(NC)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT joashrooms from ncdecks`); 
		let embed = new EmbedBuilder()
	.setTitle("Joa Shrooms")
	.setDescription(`${result[2].joashrooms}`)
	.setFooter({text: `${result[1].joashrooms}`})
			.addFields({name: "Deck Cost", value: `${result[0].joashrooms}`})
		.setColor("Random")
		.setImage(`${result[3].joashrooms}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
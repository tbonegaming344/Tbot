const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `midrose`,
	aliases: [`rosemid`, `mr`, `ogmidrose`],
	category: `Rose(RO)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT midrose from rodecks`);
			let embed = new EmbedBuilder()
	.setTitle("Mid Rose")
	.setDescription(`${result[2].midrose}`)
	.setFooter({text: `${result[1].midrose}`})
			.addFields({name: "Deck Cost", value: `${result[0].midrose}`})
		.setColor("Random")
		.setImage(`${result[3].midrose}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
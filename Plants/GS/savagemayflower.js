const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `savagemayflower`,
	aliases: [`savagemay`, `savageflower`, `mayflowersavage`, `smf`],
	category: `Green Shadow(GS)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT savagemayflower from gsdecks`);
		let smf = new EmbedBuilder()
		.setTitle("Savage Mayflower")
		.setDescription(`${result[2].savagemayflower}`)
		.setColor("Random")
		.addFields({name: "Deck Cost", value:`${result[0].savagemayflower}`})
		.setFooter({text: `${result[1].savagemayflower}`})
		.setImage(`${result[3].savagemayflower}`)
		message.channel.send({embeds: [smf]})
	}
}
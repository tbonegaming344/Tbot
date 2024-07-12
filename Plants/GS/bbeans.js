const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `bbeans`,
	aliases: [`bananabeans`, `beansbanna`],
	category: `Green Shadow(GS)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT bbeans from gsdecks`);
		let bb = new EmbedBuilder()
		.setTitle("BBeans")
		.setDescription(`${result[2].bbeans}`)
		.addFields({name: "Deck Cost", value: `${result[0].bbeans}`})
		.setColor("Random")
		.setFooter({text: `${result[1].bbeans}`})
		.setImage(`${result[3].bbeans}`)
		message.channel.send({embeds: [bb]})
	}
}
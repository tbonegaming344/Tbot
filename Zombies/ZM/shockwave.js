const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `shockwave`,
	aliases: [`swave`],
	category: `Zmech(ZM)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT shockwave FROM zmdecks`);
		let shock = new EmbedBuilder()
		.setTitle("Shockwave")
		.setDescription(`${result[2].shockwave}`)
		.setColor("Random")
		.addFields({name: "Deck Cost", value: `${result[0].shockwave}`})
		.setFooter({text:`${result[1].shockwave}`})
		.setImage(`${result[3].shockwave}`)
		message.channel.send({embeds: [shock]})
	}
}
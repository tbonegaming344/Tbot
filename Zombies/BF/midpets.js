const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `midpets`,
	aliases: [`petsmid`],
		category: `Brain Freeze(BF)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT midpets FROM bfdecks`)
		let mp = new EmbedBuilder()
		.setTitle("Mid Pets")
		.setDescription(`${result[2].midpets}`)
		.setColor("Random")
		.setImage(`${result[3].midpets}`)
		.setFooter({text: `${result[1].midpets}`})
		.addFields({name: "Deck Cost", value: `${result[0].midpets}`})
		message.channel.send({embeds: [mp]})
	}
}
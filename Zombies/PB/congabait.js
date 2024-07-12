const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js");
module.exports= {
	name: `congabait`,
	aliases: [`baitconga`,`cbait`],
	category: `Professor Brainstorm(PB)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`select congabait from pbdecks`)
		let cbait = new EmbedBuilder()
		.setTitle("CongaBait")
		.setDescription(`${result[2].congabait}`)
		.setColor("Random")
		.setFooter({text: `${result[1].congabait}`})
		.addFields({name: "Deck Cost", value: `${result[0].congabait}`})
		.setImage(`${result[3].congabait}`)
		message.channel.send({embeds: [cbait]})
	}
}
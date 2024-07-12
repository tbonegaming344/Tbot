const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js")
module.exports ={
	name: `binaryflagwar`,
	aliases: [`warbinaryflag`, `bfwar`],
	category: `Zmech(ZM)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT binaryflagwar FROM zmdecks`);
		let bfw = new EmbedBuilder()
		.setTitle("Binary Flag War")
		.setDescription(`${result[2].binaryflagwar}`)
		.setColor("Random")
		.setFooter({text: `${result[1].binaryflagwar}`})
		.addFields({name: "Deck Cost",
							 	value: `${result[0].binaryflagwar}`})
		.setImage(`${result[3].binaryflagwar}`)
		message.channel.send({embeds: [bfw]})
	}
}
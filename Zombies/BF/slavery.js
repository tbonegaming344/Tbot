const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `slavery`,
	aliases: [`bfsecret`, `secretbf`, `secretlyfry`,`secretpirates`, `piratesecret`],
		category: `Brain Freeze(BF)`,
	run: async(client, message, args)=> {
		let [result] =	await db.query("select slavery from bfdecks")
		let sp = new EmbedBuilder()
		.setTitle("Slavery AKA Secret Pirates")
		.setDescription(`${result[2].slavery}`)
		.setColor("Random")
		.setFooter({text: `${result[1].slavery}`})
		.addFields({name: "Deck Cost", value: `${result[0].slavery}`})
		.setImage(`${result[3].slavery}`)
		message.channel.send({embeds: [sp]})
	}
}
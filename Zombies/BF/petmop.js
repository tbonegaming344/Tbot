const {EmbedBuilder} = require("discord.js")
let db = require("../../index.js")
module.exports = {
	name: `petmop`,
	aliases: [`moppets`],
		category: `Brain Freeze(BF)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT petmop FROM bfdecks`)
		let pmop = new EmbedBuilder()
		.setTitle("Pet Mop")
		.setDescription(`${result[2].petmop}`)
		.setColor("Random")
		.setFooter({text: `${result[1].petmop}`})
			.addFields({name: "Deck Cost", value:`${result[0].petmop}`})
		.setImage(`${result[3].petmop}`)
		message.channel.send({embeds: [pmop]})
	}
}
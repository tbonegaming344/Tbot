const {EmbedBuilder} = require("discord.js");
let db = require('../../index.js')
module.exports = {
	name: `otkswabbie`,
	aliases: [`swabbieotk`, `otkswabbiebf`, `otks`],
	category: `Brain Freeze(BF)`,
	run: async(client, message, args) =>	{
		let [result] = await db.query(`SELECT otkswabbie FROM bfdecks`)
			let embed = new EmbedBuilder()
	.setTitle("OTK Swabbie")
	.setDescription(`${result[2].otkswabbie}`)
	.setFooter({text: `${result[1].otkswabbie}`})
				.addFields({name: "Deck Cost", value:`${result[0].otkswabbie}`})
		.setColor("Random")
.setImage(`${result[3].otkswabbie}`)
	message.channel.send({embeds: [ embed ] } )
	}
}
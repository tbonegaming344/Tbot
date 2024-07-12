const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `fiora`,
	aliases: [`pantheonfiora`, `pfiora`, `patheonfiora`],
	category: `Smash(SM)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT fiora FROM smdecks`)
				let embed = new EmbedBuilder()
	.setTitle("Patheon Fiora")
	.setDescription(`${result[2].fiora}`)
	.setFooter({text: `${result[1].fiora}`})
			.addFields({name: "Deck Cost", value: `${result[0].fiora}`})
		.setColor("Random")
.setImage(`${result[3].fiora}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
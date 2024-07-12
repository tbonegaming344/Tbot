const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `kingleap`,
	aliases: [`leapking`, `lk`],
	category: `Rustbolt(RB)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`select kingleap from rbdecks`)
		let embed = new EmbedBuilder()
	.setTitle("King Leap")
	.setDescription(`${result[2].kingleap}`)
	.setFooter({text:`${result[1].kingleap}`})
			.addFields({name: "Deck Cost", value: `${result[0].kingleap}`})
		.setColor("Random")
		.setImage(`	${result[3].kingleap}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
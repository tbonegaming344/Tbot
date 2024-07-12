const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `trickbolt`,
	aliases: [`boltricks`, `trb`],
	category: `Rustbolt(RB)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`select trickbolt from rbdecks`)
				let embed = new EmbedBuilder()
	.setTitle("Trick Bolt")
	.setDescription(`${result[2].trickbolt}`)
	.setFooter({text:`${result[1].trickbolt}`})
			.addFields({name: "Deck Cost", value: `${result[0].trickbolt}`})
		.setColor("Random")
		.setImage(`${result[3].trickbolt}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
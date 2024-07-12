const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `trickstache`,
	aliases: [`mustachetricks`, `pbtrickstache`, `trs`, `trickstash`],
	category: `Professor Brainstorm(PB)`,
		run: async(client, message, args) => {
			let [result] = await db.query(`SELECT trickstache FROM pbdecks`)
				let embed = new EmbedBuilder()
	.setTitle("Trickstache")
	.setDescription(`${result[2].trickstache}`)
	.setFooter({text: `${result[1].trickstache}`})
			.addFields({name: "Deck Cost", value:`${result[0].trickstache}`})
		.setColor("Random")
		.setImage(`${result[3].trickstache}`)
	message.channel.send({embeds: [ embed ] } ) 
		}
}
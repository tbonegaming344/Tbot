const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `frymidrose`,
	aliases: [`mrfry`, `frymr`, `midrosefry`, `frymid`, `frymidro`, `rofrymid`],
	category: `Rose(RO)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT frymidrose from rodecks`);
			let embed = new EmbedBuilder()
	.setTitle("Fry Midrose")
	.setDescription(`${result[2].frymidrose}`)
	.setFooter({text: `${result[1].frymidrose}`})
			.addFields({name: "Deck Cost", value: `${result[0].frymidrose}`})
		.setColor("Random")
.setImage(`${result[3].frymidrose}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
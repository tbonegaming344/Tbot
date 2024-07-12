const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `happyticia`,
	aliases: [`imhappyticia`, `happyticiaim`, `ht`],
	category: `Immorticia(IM)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT happyticia FROM imdecks`)
				let embed = new EmbedBuilder()
	.setTitle("Happyticia")
	.setDescription(`${result[2].happyticia}`)
	.setFooter({text: `${result[1].happyticia}`})
			.addFields({name: "Deck Cost", value: `${result[0].happyticia}`})
		.setColor("Random")
.setImage(`${result[3].happyticia}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
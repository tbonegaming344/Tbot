const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `obnoxious`,
	aliases: [`obn`],
	category: `Wall Knight(WK)`,
		run: async(client, message, args) => {
			let [result] = await db.query(`SELECT obnoxious from wkdecks`);
					let embed = new EmbedBuilder()
	.setTitle("Obnoxious")
	.setDescription(`${result[2].obnoxious}`)
	.setFooter({text: `${result[1].obnoxious}`})
			.addFields({name: "Deck Cost", value: `${result[0].obnoxious}`})
		.setColor("Random")
.setImage(`${result[3].obnoxious}`)

	message.channel.send({embeds: [ embed ] } ) 
		}
}
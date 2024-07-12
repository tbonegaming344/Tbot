const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `bartinroots`,
	aliases: [ `rootsbartin`, `bartinrootssp`, `spbartinroots`, `br`, `bartimroots`],
	category: `Spudow(SP)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT bartinroots from spdecks`);
		let embed = new EmbedBuilder()
	.setTitle("Bartin Roots")
	.setDescription(`${result[2].bartinroots}`)
	.setFooter({text: `${result[1].bartinroots}`})
			.addFields({name: "Deck Cost", value: `${result[0].bartinroots}`})
		.setColor("Random")
.setImage(`${result[3].bartinroots}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
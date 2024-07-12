const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name:`bempo`,
	aliases: [`tempobannas`, `bannatempo`, `bempocc`, `ccbempo`, `secretdeckc`, `ccsecret`, `secretccdeck`, `secretcc`],
	category: `Captain Combustible(CC)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT bempo from ccdecks`);
			let embed = new EmbedBuilder()
	.setTitle("Bempo")
	.setDescription(`${result[2].bempo}`)
	.setFooter({text: `${result[1].bempo}`})
			.addFields({name: "Deck Cost", value:`${result[0].bempo}`})
		.setColor("Random")
		.setImage(`${result[3].bempo}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
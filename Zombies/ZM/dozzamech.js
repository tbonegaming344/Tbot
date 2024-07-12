const {EmbedBuilder} = require("discord.js");
let db = require('../../index.js')
module.exports = {
	name: `dozzamech`,
	aliases: [`mechdozza`, `dozzazmech`, `dozzazm`, `dzm`, `theresultofbeingupsidedown`],
	category: `Zmech(ZM)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT dozzamech FROM zmdecks`);
			let embed = new EmbedBuilder()
	.setTitle("Dozza Mech")
	.setDescription(`${result[2].dozzamech}`)
	.setFooter({text: `${result[1].dozzamech}`})
			.addFields({name: "Deck Cost", value: `${result[0].dozzamech}`})
		.setColor("Random")
		.setImage(`${result[3].dozzamech}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
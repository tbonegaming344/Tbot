const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `feastmech`,
	aliases: [`mechfeast`, `zmfeast`, `binaryfeast`, `zmfeastcontrol`, `feastcontrolzm`,
`mechfeastcontrol`, `feastcontrolmech`],
	category: `Zmech(ZM)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT feastmech FROM zmdecks`);
		let fm = new EmbedBuilder()
		.setTitle("Feast Mech")
		.setDescription(`${result[2].feastmech}`)
		.setColor("Random")
			.setImage(`${result[3].feastmech}`)
			.setFooter({text: `${result[1].feastmech}`})
		.addFields({name: "Deck Cost", 
							 	value: `${result[0].feastmech}`})
		message.channel.send({embeds: [fm]})
	}
}
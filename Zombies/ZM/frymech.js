const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `frymech`,
	aliases: [`mechfry`, `fryzmech`, `fryemupzmech`],
	category: `Zmech(ZM)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT frymech FROM zmdecks`);
		let embed = new EmbedBuilder()
	.setTitle("Fry Mech")
	.setDescription(`${result[2].frymech}`)
	.setFooter({text: `${result[1].frymech}`})
			.addFields({name: "Deck Cost", value: `${result[0].frymech}`})
		.setColor("Random")
		.setImage(`${result[3].frymech}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `berserkmech`, 
	aliases: [`dinomech`, `dinosaurmech`, `beserkmech`],
	category: `Zmech(ZM)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT berserkmech FROM zmdecks`);
			let embed = new EmbedBuilder()
	.setTitle("Berserk Mech")
	.setDescription(`${result[2].berserkmech}`)
	.setFooter({text: `${result[1].berserkmech}`})
			.addFields({name: "Deck Cost", value: `${result[0].berserkmech}`})
		.setColor("Random")
.setImage(`${result[3].berserkmech}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
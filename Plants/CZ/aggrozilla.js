const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `aggrozilla`,
	aliases: [`aggrocz`, `czaggro`],
	category: `Chompzilla(CZ)`,
	run: async(client, message, args)=> {
		let [result]= await db.query(`SELECT aggrozilla from czdecks`)
		let cza = new EmbedBuilder()
		.setTitle("Aggrozilla")
		.setDescription(`${result[2].aggrozilla}`)
		.setColor("Random")
		.addFields({name: "Deck Cost", value: `${result[0].aggrozilla}`})
		.setFooter({text: `${result[1].aggrozilla}`})
			.setImage(`${result[3].aggrozilla}`)
		message.channel.send({embeds: [cza]})
	}
}
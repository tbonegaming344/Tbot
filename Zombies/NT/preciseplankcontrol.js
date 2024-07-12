const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `preciseplankcontrol`,
	aliases: [`ppc`, `preciseplankctrl`],
	category: `Neptuna(NT)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`select preciseplankcontrol from ntdecks`)
		let ppc = new EmbedBuilder()
			.setTitle("Precise Plank Control")
		.setDescription(`${result[2].preciseplankcontrol}`)
		.setColor("Random")
		.setFooter({text: `${result[1].preciseplankcontrol}`})
		.addFields({name: "Deck Cost", value: `${result[0].preciseplankcontrol}`})
		.setImage(`${result[3].preciseplankcontrol}`)
		message.channel.send({embeds: [ppc]})
	}
}
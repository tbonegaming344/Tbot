const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `brickasuarcontrol`,
	aliases: [`mechacontrol`, `mptrickster`,`mechasaurcontrol`, `brickasaurctrl`, `brickasaur`, `mechcontrol`],
	category: `Rustbolt(RB)`,
	run: async(client, message, args)=> {
		let [result]= await db.query(`select mechacontrol from rbdecks`)
		let mc = new EmbedBuilder()
		.setTitle("Brickasaur Control")
		.setDescription(`${result[2].mechacontrol}`)
		.setFooter({text: `${result[1].mechacontrol}`})
		.setColor("Random")
		.addFields({name: "Deck Cost",
							 	value:`${result[0].mechacontrol}`})
		.setImage(`${result[3].mechacontrol}`)
		message.channel.send({embeds: [mc]})
	}
}
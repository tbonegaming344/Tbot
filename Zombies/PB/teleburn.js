const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `teleburn`,
	aliases: [`teleportburn`, `danceburn`, `burndance`, `burnteleport`],
	category: `Professor Brainstorm(PB)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT teleburn FROM pbdecks`)
		let tburn = new EmbedBuilder()
		.setTitle("TeleBurn")
		.setDescription(`${result[2].teleburn}`)
		.setFooter({text: `${result[1].teleburn}`})
		.addFields({name: "Deck Cost", value:`${result[0].teleburn}`})
		.setColor("Random")
		.setImage(`${result[3].teleburn}`)
		message.channel.send({embeds: [tburn]})
	}
}
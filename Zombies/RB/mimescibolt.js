const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: 'mimescibolt',
	aliases: [`mimebolt`, `comboscience`, `sciencecombo`, `mimesci`, `scicombo`, `combosci`, `scimine`],
	category: `Rustbolt(RB)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`select mimescibolt from rbdecks`)
		let msb = new EmbedBuilder()
		.setTitle("Mime SciBolt")
		.setDescription(`${result[2].mimescibolt}`)
		.setFooter({text:`${result[1].mimescibolt}`})
		.addFields({name: "Deck Cost:", value: `${result[0].mimescibolt}`})
		.setColor("Random")
		.setImage(`${result[3].mimescibolt}`)
		message.channel.send({embeds: [msb]})
	}
}
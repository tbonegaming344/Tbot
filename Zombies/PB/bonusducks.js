const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `bonusducks`,
	aliases: [`bducks`, `ducky`, `combostorm`, `mimester`, `bd`],
		category: `Professor Brainstorm(PB)`, 
	run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT bonusducks FROM pbdecks`)
	let bd = new EmbedBuilder()
		.setTitle("Bonus Ducks")
		.setDescription(`${result[2].bonusducks}`)
		.setColor("Random")
		.setFooter({text: `${result[1].bonusducks}`})
		.addFields({name: "Deck Cost", value:`${result[0].bonusducks}`})
		.setImage(`${result[3].bonusducks}`)
		message.channel.send({embeds: [bd]})
	}
}
const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `knucklesmop`,
	aliases: [`gktempo`, `knucklesmop`, `mopknuckles`, `gkmop`, `mopgk`, `limbo`],
	category: `Grass Knuckles(GK)`,
	run: async(client, message, args)=> {
		let [result]= await db.query(`SELECT knucklesmop from gkdecks`)
		let limb = new EmbedBuilder()
		.setTitle("Mop Knuckles")
		.setDescription(`${result[2].knucklesmop}`)
		.setFooter({text:`${result[1].knucklesmop}`})
		.setColor("Random")
		.addFields({name: "Deck Cost",
							 	value:`${result[0].knucklesmop}`})
			.setImage(`${result[3].knucklesmop}`)
		message.channel.send({embeds: [limb]})
	}
}
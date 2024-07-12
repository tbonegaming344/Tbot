const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `3int`,
	aliases: [`gk3int`, `3mint`],
	category: `Grass Knuckles(GK)`,
	run: async(client, message, args) => {
		let [result]= await db.query(`SELECT it3 from gkdecks`)
			let embed = new EmbedBuilder()
	.setTitle("3INT")
	.setDescription(`${result[2].it3}`)
	.setFooter({text: `${result[1].it3}`})
		.setColor("Random")
				.addFields({name: "Deck Cost", value: `${result[0].it3}`})
		.setImage(`${result[3].it3}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
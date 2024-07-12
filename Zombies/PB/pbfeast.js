const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `pbfeast`,
	aliases: [`feastpb`, `feastcontrolpb`, `controlfeastpb`, `antitbone`, `pbgargfeast`, `gargfeastpb`],
	category: `Professor Brainstorm(PB)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT pbfeast FROM pbdecks`)
			let embed = new EmbedBuilder()
	.setTitle("Feast Control")
	.setDescription(`${result[2].pbfeast}`)
	.setFooter({text: `${result[1].pbfeast}`})
			.addFields({name: "Deck Cost", value: `${result[0].pbfeast}`})
		.setColor("Random")		
		.setImage(`${result[3].pbfeast}`)
	message.channel.send({embeds: [ embed ] } ) 
		}
}
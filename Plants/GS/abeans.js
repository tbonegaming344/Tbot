const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `abeans`,
	aliases: [`gsabeans`, `abeansgs`, `aggrobeans`, `abean`, `aggrobeans`], 
	category: `Green Shadow(GS)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT abeans from gsdecks`);
let embed = new EmbedBuilder()
	.setTitle("A-Beans")
	.setDescription(`${result[2].abeans}`)
	.setFooter({text: `${result[1].abeans}`})
			.addFields({name: "Deck Cost", value: `${result[0].abeans}`})
		.setColor("Random")
		.setImage(`${result[3].abeans}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
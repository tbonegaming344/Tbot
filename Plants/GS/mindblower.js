const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `mindblower`,
	category: `Green Shadow(GS)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT mindblower from gsdecks`); 
		let mb = new EmbedBuilder()
		.setTitle("Mind Blower")
		.setDescription(`${result[2].mindblower}`)
		.setColor("Random")
		.setFooter({text: `${result[1].mindblower}`})
	.addFields({name: "Deck Cost", value: `${result[0].mindblower}`})
		.setImage(`${result[3].mindblower}`)
	message.channel.send({embeds: [mb]})
	}
}
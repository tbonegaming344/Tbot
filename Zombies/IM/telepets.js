const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `telepets`,
	aliases: [`teleportpets`],
	category: `Immorticia(IM)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT telepets FROM imdecks`)
		let embed = new EmbedBuilder()
	.setTitle("Telepets")
	.setDescription(`${result[2].telepets}`)
	.setFooter({text:`${result[1].telepets}`})
			.addFields({name: "Deck Cost", value: `${result[0].telepets}`})
		.setColor("Random")
.setImage(`${result[3].telepets}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
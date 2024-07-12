const {EmbedBuilder} = require("discord.js");
let db = require('../../index.js')
module.exports = {
	name: `bettrickmech`,
	aliases:[`bettermech`, `btm`, `bettertrickmech`],
	category: `Zmech(ZM)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT bettrickmech FROM zmdecks`);
				let embed = new EmbedBuilder()
		.setTitle("Bettrickmech")
	.setDescription(`${result[2].bettrickmech}`)
	.setFooter({text: `${result[1].bettrickmech}`})
			.addFields({name: "Deck Cost", value: `${result[0].bettrickmech}`})
		.setColor("Random")
.setImage(`${result[3].bettrickmech}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name:`bunnary22`,
	aliases: [`bunnyarea22`, `ebbunnary`, `ebbunnary`, `bu22`, `bunnary`],
	category: `Electric Boogaloo(EB)`,
		run: async(client, message, args) => {
			let [result] = await db.query(`SELECT bunnary22 FROM ebdecks`)
				let embed = new EmbedBuilder()
	.setTitle("Bunnary 22")
	.setDescription(`${result[2].bunnary22}`)
	.setFooter({text: `${result[1].bunnary22}`})
			.addFields({name: "Deck Cost", value: `${result[0].bunnary22}`})
		.setColor("Random")
		.setImage(`${result[3].bunnary22}`)
	message.channel.send({embeds: [ embed ] } )
		}
}
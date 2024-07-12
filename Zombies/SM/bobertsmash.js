const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name:`bobertsmash`,
	aliases: [`bsmash`, `smashbob`, `bobsmash`, `bbs`], 
	category: `Smash(SM)`,
	run: async(client, message, args) => {
				let [result] = await db.query(`SELECT bobertsmash FROM smdecks`)
				let embed = new EmbedBuilder()
	.setTitle("B-Smash")
	.setDescription(`${result[2].bobertsmash}`)
	.setFooter({text: `${result[1].bobertsmash}`})
			.addFields({name: "Deck Cost", value: `${result[0].bobertsmash}`})
		.setColor("Random")
		.setImage(`${result[3].bobertsmash}`)
	message.channel.send({embeds: [ embed ] } )
	}
}
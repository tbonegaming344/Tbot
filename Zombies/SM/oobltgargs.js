const {EmbedBuilder} = require("discord.js")
let db = require("../../index.js")
module.exports = {
	name: `oobltgargs`,
	aliases: [`oobltsm`, `ogargs`, `oobltmidgargs`],
	category: `Smash(SM)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT oobltgargs FROM smdecks`)
		let embed = new EmbedBuilder()
	.setTitle("Ooblt Midgargs")
	.setDescription(`${result[2].oobltgargs}`)
	.setFooter({text:`${result[1].oobltgargs}`})
				.addFields({name: "Deck Cost", value:`${result[0].oobltgargs}`})
		.setColor("Random")
		.setImage(`${result[3].oobltgargs}`)
	message.channel.send({embeds: [ embed ] } )
	}
}
const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `conjurates`,
	aliases: [`conjurepirates`, `pirateconjure`, `ifconjurerates`, `conjurerates`, `conjuratesif`, `cjr`, `crates`],
	category: `Impfinity(IF)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT conjurates FROM ifdecks`)
				let embed = new EmbedBuilder()
	.setTitle("Conjurates")
	.setDescription(`${result[2].conjurates}`)
	.setFooter({text:`${result[1].conjurates}`})
			.addFields({name: "Deck Cost", value: `${result[0].conjurates}`})
		.setColor("Random")
		.setImage(`${result[3].conjurates}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
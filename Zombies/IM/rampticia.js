const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `rampticia`,
	aliases: [`rampaticia`, `imramp`, `rampim`, `rampimmorticia`],
	category: `Immorticia(IM)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT rampticia FROM imdecks`)
			let embed = new EmbedBuilder()
	.setTitle("Ramp Immorticia")
	.setDescription(`${result[2].rampticia}`)
	.setFooter({text:`${result[1].rampticia}`})
			.addFields({name: "Deck Cost", value:`${result[0].rampticia}`})
		.setColor("Random")		
		.setImage(`${result[3].rampticia}`)
	message.channel.send({embeds: [ embed ] } ) 
		}
}
const {EmbedBuilder} = require("discord.js")
let db = require("../../index.js")
module.exports = {
	name: `tricksmash`,
	aliases: [`smashtricks`, `trsmash`],
	category: `Smash(SM)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT tricksmash FROM smdecks`);
		let embed = new EmbedBuilder()
	.setTitle("Trick Smash")
	.setDescription(`${result[2].tricksmash}`)
	.setFooter({text: `${result[1].tricksmash}`})
			.addFields({name: "Deck Cost", value:`${result[0].tricksmash}`})
		.setColor("Random")
		.setImage(`${result[3].tricksmash}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
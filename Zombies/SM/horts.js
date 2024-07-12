const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `horts`,
	aliases: [`huntsports`, `hortsm`, `smhorts`,],
	category: `Smash(SM)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT horts FROM smdecks`);
		let embed = new EmbedBuilder()
	.setTitle("Horts")
	.setDescription(`${result[2].horts}`)
	.setFooter({text: `${result[1].horts}`})
			.addFields({name: "Deck Cost", value: `${result[0].horts}`})
		.setColor("Random")
		.setImage(`${result[3].horts}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
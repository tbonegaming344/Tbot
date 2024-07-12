const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `ejection`,
	aliases: [`ejectionsf`, `sfejecton`, `ejsf`, `sfej`],
	category: `Solar Flare(SF)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT ejection from sfdecks`);
			let embed = new EmbedBuilder()
	.setTitle("Ejection")
	.setDescription(`${result[2].ejection}`)
	.setFooter({text: `${result[1].ejection}`})
			.addFields({name: "Deck Cost", value: `${result[0].ejection}`})
		.setColor("Random")
		.setImage(`${result[3].ejection}`)
	message.channel.send({embeds: [ embed ] } )
	}
}
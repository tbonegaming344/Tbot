const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `psychopineclones`,
	aliases: [`physcoclones`, `psycho`, `pyschopineclones`],
	category: `Solar Flare(SF)`,
	run: async(client, message, args) =>	{
		let [result] = await db.query(`SELECT psychopineclones from sfdecks`);
			let embed = new EmbedBuilder()
	.setTitle("Psycho Pineclones")
	.setDescription(`${result[2].psychopineclones}`)
	.setFooter({text: `${result[1].psychopineclones}`})
				.addFields({name: "Deck Cost", value: `${result[0].psychopineclones}`})
		.setColor("Random")
		.setImage(`${result[3].psychopineclones}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
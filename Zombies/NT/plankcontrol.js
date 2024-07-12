const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `plankcontrol`,
	aliases: [`controlplank`, `pc`, `plankctrl`, `ctrlplank`, `pcontrol`, `controlp`],
	category: `Neptuna(NT)`,
		run: async(client, message, args) =>	{
			let [result] = await db.query(`select plankcontrol from ntdecks`)
	let embed = new EmbedBuilder()
	.setTitle("Plank Control")
	.setDescription(`${result[2].plankcontrol}`)
	.setFooter({text:`${result[1].plankcontrol}`})
				.addFields({name: "Deck Cost", value: `${result[0].plankcontrol}`})
		.setColor("Random")
		.setImage(`${result[3].plankcontrol}`)
	message.channel.send({embeds: [ embed ] } ) 
		}
}
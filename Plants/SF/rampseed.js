const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `ramp2seedling`,
	aliases: [`seedlingramp`, `rampseedling`, `ramptoseedling`, `r2s`, `rts`],
	category: `Solar Flare(SF)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT ramp2seedling from sfdecks`); 
			let embed = new EmbedBuilder()
	.setTitle("Ramp 2 Seedling")
	.setDescription(`${result[2].ramp2seedling}`)
	.setFooter({text: `${result[1].ramp2seedling}`})
			.addFields({name: "Deck Cost", value: `${result[0].ramp2seedling}`})
		.setColor("Random")
.setImage(`${result[3].ramp2seedling}`)
	message.channel.send({embeds: [ embed ] } )
	}
}
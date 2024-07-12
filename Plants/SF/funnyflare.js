const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `funnyflare`,
	aliases: [`solarflaretroll`, `trf`, `trollflare`, `funnyflare`, `trollarflare`, `trollerflare`],
	category: `Solar Flare(SF)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT funnyflare from sfdecks`);
			let	fflare = new EmbedBuilder()
			.setTitle("Funny Flare")	
			.setDescription(`${result[2].funnyflare}`)
			.setFooter({text:`${result[1].funnyflare}`})
			.addFields({name: "Deck Cost", value: `${result[0].funnyflare}`})
		.setColor("Random")
		.setImage(`${result[3].funnyflare}`)
	message.channel.send({embeds: [ fflare ] } ) 
	}
}
const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `aggrosf`,
	aliases: [`aggrosolarflare`, `sfaggro`, `solarflareaggro`, `aggroflare`],
	category: `Solar Flare(SF)`, 
	 run: async(client, message, args) => {
		let [result] = await db.query(`SELECT aggrosf from sfdecks`);
    		let embed = new EmbedBuilder()
	.setTitle("Aggro Solar Flare")
	.setDescription(`${result[2].aggrosf}`)
	.setFooter({text: `${result[1].aggrosf}`})
		.setColor("Random")	
		.setImage(`${result[3].aggrosf}`)
					.addFields({name: "Deck Cost", value: `${result[0].aggrosf}`})
	message.channel.send({embeds: [ embed ] } ) 
  }
}
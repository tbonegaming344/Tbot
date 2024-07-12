const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `bullseyeaggro`,
	aliases: [`aggrobullseye`, `baggro`, `fryggro`, `bullseyeaggro`, `fryaggro`],
	category: `Grass Knuckles(GK)`,
	run: async(client, message, args) => {
		let [result]= await db.query(`SELECT baggro from gkdecks`)
				let embed = new EmbedBuilder()
	.setTitle("Bullseye Aggro")	
			.setDescription(`${result[2].baggro}`)
	.setFooter({text: `${result[1].baggro}`})
			.addFields({name: "Deck Cost", value: `${result[0].baggro}`})
		.setColor("Random")		
		.setImage(`${result[3].baggro}`)
	message.channel.send({embeds: [ embed ] } )
	}
}
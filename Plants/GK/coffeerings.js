const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `coffeerings`,
	aliases: [`coffeeringsgk`, `cr`, `coffee3rings`],
	category: `Grass Knuckles(GK)`,
		run: async(client, message, args) => {
			let [result]= await db.query(`SELECT coffeerings from gkdecks`)
				let embed = new EmbedBuilder()
	.setTitle("Coffee Rings")
	.setDescription(`${result[2].coffeerings}`)
	.setFooter({text: `${result[1].coffeerings}`})
			.addFields({name: "Deck Cost", value: `${result[0].coffeerings}`})
		.setColor("Random")
.setImage(`${result[3].coffeerings}`)
	message.channel.send({embeds: [ embed ] } )
		}
}
const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `gargolithtech`,
	aliases: [`techedgargolith`,`gt`, `gtech`, `gartolithtech`],
	category: `Brain Freeze(BF)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT gargolithtech FROM bfdecks`)
			let embed = new EmbedBuilder()
	.setTitle("Gargolith Tech")	
			.setDescription(`${result[2].gargolithtech}`)
	.setFooter({text: `${result[1].gargolithtech}`})
			.addFields({name: "Deck Cost", value: `${result[0].gargolithtech}`})
		.setColor("Random")					
		.setImage(`${result[3].gargolithtech}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
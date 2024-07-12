const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `aggropirates`,
	aliases: [`piratesaggro`, `ap`],
	category: `Brain Freeze(BF)`,
		run: async(client, message, args) => {
			let [result] = await db.query(`SELECT aggropirates FROM bfdecks`)
				let embed = new EmbedBuilder()
	.setTitle("Aggro Pirates")	
			.setDescription(`${result[2].aggropirates}`)
	.setFooter({text: `${result[1].aggropirates}`})
			.addFields({name: "Deck Cost", value: `${result[0].aggropirates}`})
		.setColor("Random")		
		.setImage(`${result[3].aggropirates}`)
	message.channel.send({embeds: [ embed ] } ) 
		}
}
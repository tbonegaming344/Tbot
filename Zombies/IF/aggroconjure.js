const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `aggroconjure`,
	aliases: [`conjureaggro`, `lgaggroconjure`, `conjureaggrolg`, `lgac`, `lgca`, `ac`],
	category: `Impfinity(IF)`,
		run: async(client, message, args) => {
			let [result] = await db.query(`SELECT aggroconjure FROM ifdecks`)
				let embed = new EmbedBuilder()
	.setTitle("Aggro Conjure")	
			.setDescription(`${result[2].aggroconjure}`)
	.setFooter({text: `${result[1].aggroconjure}`})
			.addFields({name: "Deck Cost", value: `${result[0].aggroconjure}`})	
			.setImage(`${result[3].aggroconjure}`)
		.setColor("Random")			
	message.channel.send({embeds: [ embed ] } ) 
		}
}
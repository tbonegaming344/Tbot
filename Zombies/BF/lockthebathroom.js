const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `lockthebathroom`,
	aliases: [`lockinbf`, `loi`, `lockedin`, `loin`, `lockin`, `lockin`, `ltb`, `ltbath`, `ltbr`, `lthbroom`],
	category: `Brain Freeze(BF)`,
		run: async(client, message, args) => {
			let [result] = await db.query(`SELECT lockin FROM bfdecks`)
				let embed = new EmbedBuilder()
	.setTitle("Lock The Bathroom")	
			.setDescription(`${result[2].lockin}`)
	.setFooter({text: `${result[1].lockin}`})
			.addFields({name: "Deck Cost", value: `${result[0].lockin}`})
		.setColor("Random")			
		.setImage(`${result[3].lockin}`)
	message.channel.send({embeds: [ embed ] } ) 
		}
}
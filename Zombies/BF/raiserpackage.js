const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `raiserpackage`,
	aliases: [`packageraiser`, `raiserpackagebf`, `raiserpack`, `rpack`],
	category: `Brain Freeze(BF)`,
		run: async(client, message, args) => {
			let [result] = await db.query(`SELECT raiserpackage FROM bfdecks`)
				let embed = new EmbedBuilder()
	.setTitle("Raiser Package")	
			.setDescription(`${result[2].raiserpackage}`)
	.setFooter({text: `${result[1].raiserpackage}`})
			.addFields({name: "Deck Cost", value:`${result[0].raiserpackage}`})
		.setColor("Random")			
		.setImage(`${result[3].raiserpackage}`)
	message.channel.send({embeds: [ embed ] } ) 
		}
}
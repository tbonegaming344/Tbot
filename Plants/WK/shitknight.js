const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `shitknight`,
	aliases: [`worstwkdeck`, `sk`, ` shit-knight`],
	category: `Wall Knight(WK)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT shitknight from wkdecks`);
				let embed = new EmbedBuilder()
	.setTitle("Shit Knight")	
			.setDescription(`${result[2].shitknight}`)
	.setFooter({text: `${result[1].shitknight}`})
			.addFields({name: "Deck Cost", value:  `${result[0].shitknight}`})
		.setColor("Random")			
		.setImage(`${result[3].shitknight}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `mopgargs`,
	aliases: [`gargsmop`, `mopg`],
	category: `Smash(SM)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT mopgargs FROM smdecks`)
			let embed = new EmbedBuilder()
	.setTitle("Mop Gargs")	
			.setDescription(`${result[2].mopgargs}`)
	.setFooter({text: `${result[1].mopgargs}`})
			.addFields({name: "Deck Cost", value: `${result[0].mopgargs}`})
		.setColor("Random")			
		.setImage(`${result[3].mopgargs}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `pablosyeezys`,
	aliases: [`yeezys`, `pablos`, `midgargs`, `pablo`, `pabloyeezys`,`pepegargs`],
	category: `Smash(SM)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT pablosyeezys FROM smdecks`);
				let pyeez = new EmbedBuilder()
	.setTitle("Pablos Yeezys")	
			.setDescription(`${result[2].pablosyeezys}`)
	.setFooter({text: `${result[1].pablosyeezys}`})
			.addFields({name: "Deck Cost", value: `${result[0].pablosyeezys}`})
		.setColor("Random")			
		.setImage(`${result[3].pablosyeezys}`)
	message.channel.send({embeds: [ pyeez] } ) 
	}
}
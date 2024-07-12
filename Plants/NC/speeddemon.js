const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `speeddemon`,
	aliases: [`speed`, `sdemon`],
	category: `NightCap(NC)`,
	run: async(client, message, args) =>	{
		let [result] = await db.query(`SELECT speeddemon from ncdecks`);
	let embed = new EmbedBuilder()
	.setTitle("Speed Demon")
	.setDescription(`${result[2].speeddemon}`)
	.setFooter({text:`${result[1].speeddemon}`})
			.addFields({name: "Deck Cost", value: `${result[0].speeddemon}`})
		.setColor("Random")		
	.setImage(`${result[3].speeddemon}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
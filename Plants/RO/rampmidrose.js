const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `rampmidrose`, 
	aliases: [`rmr`, `midroseramp`],
	category: `Rose(RO)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT rampmidrose from rodecks`);
				let embed = new EmbedBuilder()
	.setTitle("Ramp Midrose")
	.setDescription(`${result[2].rampmidrose}`)
	.setFooter({text:`${result[1].rampmidrose}`})
		.setColor("Random")
				.addFields({name: "Deck Cost", value: `${result[0].rampmidrose}`})	
				.setImage(`${result[3].rampmidrose}`)
	message.channel.send({embeds: [ embed ] } )
	}
}
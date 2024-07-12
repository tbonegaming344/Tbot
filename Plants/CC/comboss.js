const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `comboss`,
	aliases: [`cccomboss`, `combosscc`, `combomoss`],
	category: `Captain Combustible(CC)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT comboss from ccdecks`);
		let embed = new EmbedBuilder()
	.setTitle("Comboss")
	.setDescription(`${result[2].comboss}`)
	.setFooter({text: `${result[1].comboss}`})
			.addFields({name: "Deck Cost", value:`${result[0].comboss}`})
		.setColor("Random")
		.setImage(`${result[3].comboss}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
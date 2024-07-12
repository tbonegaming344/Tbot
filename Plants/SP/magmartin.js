const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `magnoliamartin`, 
	aliases: [`magmartin`],
	category: `Spudow(SP)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT magmartin from spdecks`);
				let embed = new EmbedBuilder()
	.setTitle("Magnolia Martin")
	.setDescription(`${result[2].magmartin}`)
	.setFooter({text: `${result[1].magmartin}`})
			.addFields({name: "Deck Cost", value: `${result[0].magmartin}`})
		.setColor("Random")
.setImage(`${result[3].magmartin}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
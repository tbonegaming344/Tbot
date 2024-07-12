const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `clownboss`,
	aliases: [`ccclowing`, `pineboss`],
	category: `Captain Combustible(CC)`,
		run: async(client, message, args) => {
			let [result] = await db.query(`SELECT clownboss from ccdecks`);
				let embed = new EmbedBuilder()
	.setTitle("Clownboss")
	.setDescription(`${result[2].clownboss}`)
	.setFooter({text: `${result[1].clownboss}`})
			.addFields({name: "Deck Cost", value:`${result[0].clownboss}`})
		.setColor("Random")
.setImage(`${result[3].clownboss}`)
	message.channel.send({embeds: [ embed ] } ) 
		}
}
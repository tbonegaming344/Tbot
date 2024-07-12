const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `plantmop`,
	aliases: [`plantmopisreal`, `sjutuxoilve`, `pm`],
	category: `Captain Combustible(CC)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT plantmop from ccdecks`);
				let embed = new EmbedBuilder()
	.setTitle("Plant Mop")
	.setDescription(`${result[2].plantmop}`)
	.setFooter({text: `${result[1].plantmop}`})
				.addFields({name: "Deck Cost", value: `${result[0].plantmop}`})
		.setColor("Random")			
		.setImage(`${result[3].plantmop}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
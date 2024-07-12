const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `budgetplantmop`,
	aliases: [`ccbudget`, `bcc`, `bpm`, `buggerplantmop`, `budgetcc`],
	category: `Captain Combustible(CC)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT budgetcc from ccdecks`);
			let embed = new EmbedBuilder()
	.setTitle("CC Budget Plant Mop")
	.setDescription(`${result[2].budgetcc}`)
	.setFooter({text: `${result[1].budgetcc}`})
			.addFields({name: "Deck Cost", value: `${result[0].budgetcc}`})
		.setColor("Random")
.setImage(`${result[3].budgetcc}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `tricktuna`,
	aliases: [`nttricks`, `tricksnt`, `trt`],
	category: `Neptuna(NT)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`select tricktuna from ntdecks`)
				let embed = new EmbedBuilder()
	.setTitle("Tricktuna")
	.setDescription(`${result[2].tricktuna}`)
	.setFooter({text: `${result[1].tricktuna}`})
			.addFields({name: "Deck Cost", value: `${result[0].tricktuna}`})
		.setColor("Random")
.setImage(`${result[3].tricktuna}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
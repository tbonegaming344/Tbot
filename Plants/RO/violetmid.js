const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `violetmid`,
	aliases: [`roanti`, `antiro`, `roantiaggro`, `aa`, `antiaggro`, `midviolet`],
	category: `Rose(RO)`, 
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT violetmid from rodecks`); 
			let embed = new EmbedBuilder()
	.setTitle("Violet Mid")
	.setDescription(`${result[2].violetmid}`)
	.setFooter({text: `${result[1].violetmid}`})
			.addFields({name: "Deck Cost", value:`${result[0].violetmid}`})
		.setColor("Random")
.setImage(`${result[3].violetmid}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
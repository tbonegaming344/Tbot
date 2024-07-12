const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `buffswarm`,
	aliases: [`swarmbuff`, `swarmbuffing`],
	category: `NightCap(NC)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT buffswarm from ncdecks`);
			let embed = new EmbedBuilder()
	.setTitle("Buff Swarm")	
			.setDescription(`${result[2].buffswarm}`)
	.setFooter({text: `${result[1].buffswarm}`})
			.addFields({name: "Deck Cost", value: `${result[0].buffswarm}`})
		.setColor("Random")
.setImage(`${result[3].buffswarm}`)
	message.channel.send({embeds: [ embed ] } ) 
}
}
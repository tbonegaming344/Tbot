const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `brainclones`, 
	aliases: [`brainclone`, `clonebrain`, `clonebrains`],
	category: `NightCap(NC)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT brainclones from ncdecks`);
		let bclones = new EmbedBuilder()
		.setTitle("BrainClones")
		.setDescription(`${result[2].brainclones}`)
		.setColor("Random")
		.setFooter({text: `${result[1].brainclones}`})
		.addFields({name: "Deck Cost", value: `${result[0].brainclones}`})
.setImage(`${result[3].brainclones}`)
		message.channel.send({embeds: [bclones]})
	}
}
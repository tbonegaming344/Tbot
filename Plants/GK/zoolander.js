const { EmbedBuilder } = require("discord.js")
let db = require("../../index.js")
module.exports = {
	name: `zoolander`,
	category: `Grass Knuckles(GK)`,
    run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT zoolander FROM gkdecks`)
		let zoolander = new EmbedBuilder()
	.setTitle(`Zoolander`)
	.setDescription(`${result[2].zoolander}`)
	.setColor('Random')
	.addFields({name: 'Deck Cost:', value: `${result[0].zoolander}`})
	.setFooter({text: `${result[1].zoolander}`})
	.setImage(`${result[3].zoolander}`)
			message.channel.send({embeds: [zoolander]})
    }
}
const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `devinknuckles`,
	aliases: [`secretgk`, `gksecret`, `gkbananas`, `bananasgk`, `dk`, `devin`, `dknuckles`],
	category: `Grass Knuckles(GK)`, 
	run: async(client, message, args)=> {
		let [result]= await db.query(`SELECT devinknuckles from gkdecks`)
		let dk = new EmbedBuilder()
		.setTitle("Devin Knuckles")
			.setDescription(`${result[2].devinknuckles}`)
		.setColor("Random")
		.setFooter({text: `${result[1].devinknuckles}`})
		.setImage(`${result[3].devinknuckles}`)
		.addFields({name: "Deck Cost", value: `${result[0].devinknuckles}`})
		message.channel.send({embeds: [dk]})
	}
}
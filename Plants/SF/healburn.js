const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: "healburn",
	aliases: ["burnheal", "healingburn", "hburn", "burnh"],
	category: `Solar Flare(SF)`,
	run: async(client,message, args) => {
		let [result] = await db.query(`SELECT healburn from sfdecks`);
		let hb = new EmbedBuilder()
		.setTitle("Heal Burn")
		.setDescription(`${result[2].healburn}`)
		.setFooter({text: `${result[1].healburn}`})
		.addFields({name: "Deck Cost", value: `${result[0].healburn}`})
.setImage(`${result[3].healburn}`)
		
		.setColor("Random")
		message.channel.send({embeds: [hb]})
	}
}
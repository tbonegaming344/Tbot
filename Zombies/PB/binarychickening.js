const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `binarychickening`,
  aliases: [`bch`, `binarych`],
  category: `Professor Brainstorm(PB)`,
  run: async(client, message, args) => {
	let [result] = await db.query(`SELECT binarychickening FROM pbdecks`)
    let embed = new EmbedBuilder()
	.setTitle("Binary Chickening")
	.setDescription(`${result[2].binarychickening}`)
	.setFooter({text: `${result[1].binarychickening}`})
			.addFields({name: "Deck Cost", value: `${result[0].binarychickening}`})
		.setColor("Random")		
		.setImage(`${result[3].binarychickening}`)
	message.channel.send({embeds: [ embed ] } ) 
  }
}

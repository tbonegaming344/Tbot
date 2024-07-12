const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
  name: `whalepharaoh`,
  aliases: [`wph`, `whalepharoah`, `whaleorah`, `whaleroah`, `whaleraoh`, `whalepharoh`],
    category: `Smash(SM)`,
  run: async(client, message, args) => {
	let [result] = await db.query(`SELECT whalepharaoh FROM smdecks`); 
     let embed = new EmbedBuilder()
	.setTitle("Whale Pharaoh")
	.setDescription(`${result[2].whalepharaoh}`)
	.setFooter({text: `${result[1].whalepharaoh}`})
		.setColor("Random")
		.setImage(`${result[3].whalepharaoh}`)
			.addFields({name: "Deck Cost", value: `${result[0].whalepharaoh}`})
	message.channel.send({embeds: [ embed ] } ) 
  }
}

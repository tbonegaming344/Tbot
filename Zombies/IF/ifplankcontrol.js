const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
  name: `ifplankcontrol`,
  aliases: [`ifpc`, `pcif`, `plankcontrolif`, `ifcontrol`, `ifpcontrol`],
  category: `Impfinity(IF)`,
  run: async(client, message, args) => {
	let [result] = await db.query(`SELECT ifplankcontrol FROM ifdecks`)
     let embed = new EmbedBuilder()
  	.setTitle("IF Plank Control")
	.setDescription(`${result[2].ifplankcontrol}`)
	.setFooter({text:`${result[1].ifplankcontrol}`})
		.setColor("Random")
		.setImage(`${result[3].ifplankcontrol}`)
			.addFields({name: "Deck Cost", value: `${result[0].ifplankcontrol}`})
	message.channel.send({embeds: [ embed ] } ) 
  }
}
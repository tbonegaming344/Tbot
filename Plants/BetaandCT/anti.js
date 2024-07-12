const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `anti`,
	aliases: [`antigraves`, `bcanti`, `antibc`],
	category: `Beta-Carrotina/Citron`,
		run: async(client, message, args) => {
			let [result] = await db.query("SELECT anti FROM bcdecks")
			  let embed = new EmbedBuilder()
		  .setTitle("Anti")
		  .setDescription(`${result[2].anti}`)
		  .setFooter({text: `${result[1].anti}`})
				  .addFields({name: "Deck Cost", value: `${result[0].anti}`})
			  .setColor("Random")
			  .setImage(result[3].anti)
		  message.channel.send({embeds: [ embed ] } ) 
		}
	}
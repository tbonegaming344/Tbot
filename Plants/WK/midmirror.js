const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `midmirror`,
	aliases: [`mirrormid`, `midm`],
	category: `Wall Knight(WK)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT midmirror from wkdecks`);
				let embed = new EmbedBuilder()
	.setTitle("Mid Mirror")	
			.setDescription(`${result[2].midmirror}`)
	.setFooter({text: `${result[1].midmirror}`})
			.addFields({name: "Deck Cost", value:`${result[0].midmirror}`})
		.setColor("Random")
.setImage(`${result[3].midmirror}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
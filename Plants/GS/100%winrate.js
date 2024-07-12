const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js");
module.exports = {
	name: `100%winrate`,
	aliases: [`100%winrategs`, `100%wr`, `100%`, `100wr`, `maxiumbeanstalk`, `maximumbeanstalk`],
	category: `Green Shadow(GS)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT wr100 from gsdecks`);
		let embed = new EmbedBuilder()
	.setTitle("100% Winrate")
	.setDescription(`${result[2].wr100}`)
	.setFooter({text: `${result[1].wr100}`})
			.addFields({name: "Deck Cost", value: `${result[0].wr100}`})
		.setColor("Random")
.setImage(`${result[3].wr100}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
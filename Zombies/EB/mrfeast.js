const {EmbedBuilder} = require("discord.js");
let db = require("../../index.js")
module.exports = {
	name: `mr.feast`,
	aliases: [`feasttricks`, `controlfeast`, `mr.f`, `mrfeast`, `mrf`],
	category: `Electric Boogaloo(EB)`,
	run: async(client, message, args) => {
		let [result] = await db.query(`SELECT mrfeast FROM ebdecks`)
		let embed = new EmbedBuilder()
			.setThumbnail("https://media.discordapp.net/attachments/760579518846206033/1092228363713773668/Untitled218_20230324224813.png?width=1074&height=604")
	.setTitle("Mr.Feast")
	.setDescription(`${result[2].mrfeast}`)
	.setFooter({text: `${result[1].mrfeast}`})
				.addFields({name: "Deck Cost", value:`${result[0].mrfeast}`})
		.setColor("Random")
		.setImage(`${result[3].mrfeast}`)
	message.channel.send({embeds: [ embed ] } ) 
	}
}
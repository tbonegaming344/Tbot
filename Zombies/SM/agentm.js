const {EmbedBuilder}= require("discord.js");
let db = require("../../index.js")
module.exports ={
	name:`agentm`,
	aliases: [`agentmondo`, `mondoagent`,`mondomid`, `midmono`, `brontomid`, `midbronto`],
	category: `Smash(SM)`,
	run: async(client, message, args)=> {
		let [result] = await db.query(`SELECT agentm FROM smdecks`)
		let agentm = new EmbedBuilder()
		.setTitle("Agent M")
		.setDescription(`${result[2].agentm}`)
		.setFooter({text: `${result[1].agentm}`})
		.addFields({name: "Deck Cost:", value: `${result[0].agentm}`})
		.setColor("Random")
		.setImage(`${result[3].agentm}`)
		message.channel.send({embeds: [agentm]})
	}
}
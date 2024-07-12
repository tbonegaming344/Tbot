const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `unohibird`,
	aliases: [`unobird`],
	category: `Professor Brainstorm(PB)`,
	run: async(client, message, args) => {
		let embed = new EmbedBuilder()
	.setTitle("Uno HiBird")
			.setDescription("This is a Hybrid of Hi Bird and Uno! In this deck you're making use of cards like unexpected gifts, to fuel your tanky, which also reduces the cost of your trickster. Regifting zombie fuels your tanky along with your valk, unexpected gifts and regifting also makes con man deal damage to your opponent, fruit cake is a nice removal card here which activates con man and reduces the cost of Trickster. Overall this deck will make sure you absolutely DESTROY your opponent.")
	.setFooter({text: "Created By Glass in a Bin#1890"})
			.addFields({name: "Deck Cost", value: "Cost: 86,450 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")		.setImage("https://media.discordapp.net/attachments/1029445441705758720/1071045120989868052/Screenshot_20220820-124143_PvZ_Heroes3-1.jpg?width=600&height=625")
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
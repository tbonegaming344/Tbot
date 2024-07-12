const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `gasherder`,
	aliases: [`herdinggas`, `herdergas`, `gasgiantherder`],
	category: `Electric Boogaloo(EB)`,
		run: async(client, message, args) => {
		let embed = new EmbedBuilder()
	.setTitle("Gas Herder")	
			.setDescription("Gas Herder is Try's take on a control Gas Giant deck. It runs massive [Forget Me] Nuts tech (Squirrel and Eclipse) so it never stays on the board and RNG cards (Cheese Cutter and Quazard), the latter which respectively brings sustain value and some card draw, as well as being the classic highroll element of every Try deck.")
	.setFooter({text: "Created By: Tryhard"})
			.addFields({name: "Deck Cost", value: "Cost:  51,550 sparks <:spar:1057791557387956274>"})
		.setColor("Random")			
		.setImage("https://media.discordapp.net/attachments/760579518846206033/1064354040831545354/Screenshot_20230116-011758_PvZ_Heroes2.jpg")
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
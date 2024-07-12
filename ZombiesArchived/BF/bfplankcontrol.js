const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `bfplankcontrol`,
	aliases:[`bfplankcontrol`, `bfplank`, `plankbf`, `bfpc`, `pcbf`],
	category: `Brain Freeze(BF)`,
	run: async(client, message, args) => {
				let embed = new EmbedBuilder()
	.setTitle("BF Plank Control")
.setDescription("<@1043528908148052089> plankcontrol but now with brainfreeze with dog cyborg and tricks like excition event and alien ooze you can control your opponent well in early game and also control them well in the late making use of graveyard combos with your plank or zombot nurse will help up any previous taken damage while controlling threats")
	.setFooter({text: "Created By Glass in a Bin#1890"})
			.addFields({name: "Deck Cost", value: "Cost: 76,450 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
.setImage("https://cdn.discordapp.com/attachments/1044626284346605588/1101954651735195648/Screenshot_20230409-221806_PvZ_Heroes2-1.jpg")
	
	message.channel.send({embeds: [ embed ] } ) 
	}
}
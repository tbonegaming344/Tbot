const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `secretcornucopia`, 
	aliases: [`secretcorn`, `sfsecretcornucopia`, `secretcornucopiasf`], 
	category: `Solar Flare(SF)`,
		run: async(client, message, args) => {
				let embed = new EmbedBuilder()
	.setTitle("Secret Cornucopia")
	.setDescription("Secret Cornucopia is a control deck that tries to sneak in a cornucopia with mokale and pear paradise controlling the early game with banna bomb berry blast and ketchup and controls late game with cucc astrovera and kernel corn")
	.setFooter({text: "Created By Fry Em Up"})
			.addFields({name: "Deck Cost", value: "Cost: 80,200 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
.setImage("https://media.discordapp.net/attachments/1044626284346605588/1055884405517848606/IMG_0125.png?width=565&height=604")
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}
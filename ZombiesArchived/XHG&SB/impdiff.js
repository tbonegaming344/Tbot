const {EmbedBuilder}= require("discord.js")
module.exports = {
	name: `implicitdifferentiation`,
	aliases: [`impdiff`, `impdifferentiation`],
	category: `Huge-Gigantacus/SuperBrainz`,
	run: async(client, message, args)=> {
		let impdiff = new EmbedBuilder()
		.setTitle("Implicit differentiation")
		.setDescription("Winning with this deck is as easy as deriving 20! Use both your Mathematical and strategical prowess to control your opponent with imps and the powerful combination of environments and excavator/raptor. Utilise pogo yeti and mug to gain the upper hand in the mid game and finish them off with plank as they are left wondering how an imp deck could be so good (It's just an imp diff).")
		.setColor("Random")
		
			.setImage("https://media.discordapp.net/attachments/1058720036547743744/1091182208724766842/Screenshot_20230331-130318.png?width=560&height=604")
		.setFooter({text: "Created by Bonicus_The_Great | Inspired by FryEmUp"})
		.addFields({name: "Deck Cost",
							 	value: "Cost: 92,100 Sparks <:spar:1057791557387956274>"})
		message.channel.send({embeds: [impdiff]})
	}
}
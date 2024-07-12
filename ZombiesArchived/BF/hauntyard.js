const {EmbedBuilder} = require("discord.js")
module.exports = {
	name: `hauntyard`, 
	aliases: [`hauntingghostyard`, `hy`],
	category: `Brain Freeze(BF)`,
		run: async(client, message, args) => {
				let embed = new EmbedBuilder()
	.setTitle("Hauntyard")
	.setDescription("Hauntyard is a deck that utilizes haunting ghost with graveyard can also be combined with a nibble or exiction area 22 is good for the stirkethrough cards but also as a way to make your cards go face finishing the game here are supernova and manical laugh \n -Area always goes in lane 3 if cowboy comes out of a graveyard in lane 2 because it will do Frenzy bonus attacks if it destroys a plant in the lane to the left of the area 22 \n -Maniacal serves as a backup plan for when you don't have enough damage to finish off the plant hero \n -You can sub out Dog Walker for Cheese Cutter if you don't care about people preferring to go face with Pumpking")
	.setFooter({text: "Created By StardustSpy"})
		.setColor("Random")
				.addFields({name: "Deck Cost", value: "Cost: 48,800 Sparks <:spar:1057791557387956274>"})
.setImage("https://media.discordapp.net/attachments/1044626284346605588/1056775375054700555/IMG_0281.png?width=569&height=625")
	
	message.channel.send({embeds: [ embed ] } ) 
		}
}
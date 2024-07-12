const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
module.exports = {
	name: `stardust`,
	aliases: [`stardustdecks`, `decksmadebystardust`, `stardustelp`, `helpstardust`],
	category: `DeckBuilders`,
	run: async(client, message, args) => {
		const row = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('hy')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('hyard')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const hy = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('helpstar')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('help')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		let user = await client.users.fetch("430833402120372224")
		let star = new EmbedBuilder()
		.setTitle(`${user.displayName} Decks`)
		.setDescription(`My commands for decks made by ${user.displayName} are \n <@1043528908148052089> hauntyard`)
		.setFooter({text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below⏬!`})
			.setThumbnail(user.displayAvatarURL())
		.setColor("Random")
			
			let hyard = new EmbedBuilder()
	.setTitle("Hauntyard")
	.setDescription("Hauntyard is a deck that utilizes haunting ghost with graveyard can also be combined with a nibble or exiction area 22 is good for the stirkethrough cards but also as a way to make your cards go face finishing the game here are supernova and manical laugh \n -Area always goes in lane 3 if cowboy comes out of a graveyard in lane 2 because it will do Frenzy bonus attacks if it destroys a plant in the lane to the left of the area 22 \n -Maniacal serves as a backup plan for when you don't have enough damage to finish off the plant hero \n -You can sub out Dog Walker for Cheese Cutter if you don't care about people preferring to go face with Pumpking")
	.setFooter({text: "Created By StardustSpy"})
		.setColor("Random")
				.addFields({name: "Deck Cost", value: "Cost: 48,800 Sparks <:spar:1057791557387956274>"})
.setImage("https://media.discordapp.net/attachments/1044626284346605588/1056775375054700555/IMG_0281.png?width=569&height=625")
	
const m = await	message.channel.send({embeds: [star], components: [row] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter})
		collector.on("collect", async i => {
			if(i.customId == 'hy'){
				await i.update({embeds: [hyard], components: [hy]})
			}
			if(i.customId == 'hyard'){
				await i.update({embeds: [hyard], components: [hy]})
			}
			if(i.customId == 'helpstar'){
				await i.update({embeds: [star], components: [row] } )
			}
			if(i.customId == 'help'){
				await i.update({embeds: [star], components: [row] } )
			}
		})
	}
}
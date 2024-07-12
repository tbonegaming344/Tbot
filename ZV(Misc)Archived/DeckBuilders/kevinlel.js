const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
module.exports = {
	name: `kevinlel`,
	aliases: [`helpkevinlel`, `kevinleldecks`, `decksmadebykevinlel`, `kevinlelhelp`],
	category: `DeckBuilders`,
	run: async(client, message, args) => {
		const row = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('cz')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('bcz')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const cz = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('helpk')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('help')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		let kevin = new EmbedBuilder()
		.setTitle(`Kevinlel Decks`)
		.setDescription(`My commands for decks made by Kevinlel are \n <@1043528908148052089> budgetcz`)
		.setFooter({text: `To view the Decks Made By Kevinlel please use the commands listed above or click on the buttons below⏬!`})
			.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1111015213307797606/kevinlel.gif")
		.setColor("Random")
			
			let bcz = new EmbedBuilder()
	.setTitle("CZ Budget Aggro")
	.setDescription("CZ budget aggro is a deck that makes use of budget cards to do a bunch of damage like bonk, fire pea, with sweet pea moving card out of the way allowing your card to hit face again finisher here are elder, whipvine and plant food")
	.setFooter({text: "Created By kevinlel"})
			.addFields({name : "Deck Cost", value: "Cost: 4,200 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
.setImage("https://media.discordapp.net/attachments/1044626284346605588/1045190379143704707/aggroCZbudget.png?width=646&height=604")
	
			const m = await	message.channel.send({embeds: [kevin], components: [row] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter})
		collector.on("collect", async i => {
			if(i.customId == 'bcz'){
				await i.update({embeds: [bcz], components: [cz]})
			}
				if(i.customId == 'cz'){
				await i.update({embeds: [bcz], components: [cz]})
			}
			if(i.customId == 'helpk'){
				await i.update({embeds: [kevin], components: [row] } )
			}
				if(i.customId == 'help'){
				await i.update({embeds: [kevin], components: [row] } )
			}
		})
	}
}
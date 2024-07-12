const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
module.exports = {
	name: `trysister`,
	aliases: [`trysisterdecks`, `tryhardsister`, `trysishelp`, `helptrysis`, `tryhardsis`, `trysisterdecks`, `trysisdecks`],
	category: `DeckBuilders`,
	run: async(client, message, args) => {
			const row = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('tsis')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('trys')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const tsis = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('helpsis')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('help')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		let trysis = new EmbedBuilder()
		.setTitle("Trysis Decks")
		.setDescription("My commands for decks made by Tryhards Sister are \n <@1043528908148052089> trysis")
		.setFooter({text: "To view the Decks Made By Tryhards Sister please use the commands listed above or click on the buttons below⏬!"})
		.setColor("Random")
			
		let trys = new EmbedBuilder()
	.setTitle("Try Sis")
	.setDescription("Try Sis is a deck that tries to get its late game in a turn early with sunflower. Getting in a dmd or cornucopia a turn early can be effect while the hearticoke can syngerize with ketchup and dmd with bog. Eyespore in this deck is a great way to make your late game cards hit face and win the game, can be very effect with magnifying grass and other cards.")
	.setFooter({text: "Created By Tryhard's Sister"})
			.addFields({name: "Deck Cost", value: "Cost: 33,600 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
.setImage("https://media.discordapp.net/attachments/1044626284346605588/1064547528688816188/IMG_0888.png?width=575&height=625")
	
	const m = await	message.channel.send({embeds: [trysis], components: [row] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter})
		collector.on("collect", async i => {
			if(i.customId == 'trys'){
				await i.update({embeds: [trys], components: [tsis]})
			}
						if(i.customId == 'tsis'){
				await i.update({embeds: [trys], components: [tsis]})
			}
			if(i.customId == 'helpsis'){
				await i.update({embeds: [trysis], components: [row] } )
			}
					if(i.customId == 'help'){
				await i.update({embeds: [trysis], components: [row] } )
			}
		})
	}
}
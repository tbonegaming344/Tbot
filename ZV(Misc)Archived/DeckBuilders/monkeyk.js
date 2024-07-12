const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
module.exports = {
	name: `monkeyk`,
	aliases: [`monkeykdecks`, `helpmonkeyk`, `moneykhelp`, `decksmadebymonkeyk`],
	category: `DeckBuilders`,
	run: async(client, message, args) => {
		const row = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('mc')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('mcu')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const mc = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('helpm')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('help')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		let monkey = new EmbedBuilder()
		.setTitle("Monkeyk Decks")
		.setDescription("My commands for decks made by Monkeyk are \n <@1043528908148052089> metacickuembr")
		.setFooter({text: "To view the Decks Made By Monkeyk please use the commands listed above or click on the buttons below⏬!"})
		.setColor("Random")
			
		let mcu = new EmbedBuilder()
	.setTitle("Meta Cickuembr")
	.setDescription("This is a deck that makes their dinos a huge threat with all the conjure and all the card draw that the deck has to offer with expresso fiesta finishing the game")
	.setFooter({text: "Created By Moneyk and Kanper"})
			.addFields({name: "Deck Cost", value: "Cost: 65,400 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")		.setImage("https://media.discordapp.net/attachments/1044626284346605588/1045013579105058816/IMG_20220226_214221_1-1.jpg?width=624&height=604")
	
		const m = await	message.channel.send({embeds: [monkey], components: [row] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter})
		collector.on("collect", async i=> {
						if(i.customId == 'mc'){
				await i.update({embeds: [mcu], components: [mc]})
			}
			if(i.customId == 'mcu'){
				await i.update({embeds: [mcu], components: [mc]})
			}
			if(i.customId == 'help'){
				await i.update({embeds: [monkey], components: [row] } )
			}
			if(i.customId == 'helpm'){
				await i.update({embeds: [monkey], components: [row] } )
			}
		})
	}
}
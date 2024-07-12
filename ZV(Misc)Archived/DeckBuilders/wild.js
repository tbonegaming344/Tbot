const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
module.exports = {
	name: `wilddecks`,
	aliases: [`wildhelp`, `helpwild`, `wild1`, `decksmadebywild`],
	category: `DeckBuilders`,
	run: async(client, message, args) => {
		const row = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('sm')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('swim')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const sm = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('helpw')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('help')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		let user = await client.users.fetch("701053825628241951")
		let wild = new EmbedBuilder()
		.setTitle("Wild Decks")
		.setDescription("My commands for decks made by Wild are \n <@1043528908148052089> smswimmer")
		.setFooter({text: "To view the Decks Made By Wild please use the commands listed above or click on the buttons below⏬!"})
			.setThumbnail(user.displayAvatarURL())
		.setColor("Random")
			
		let swim = new EmbedBuilder()
		.setTitle("Smash Swimmer")
		.setDescription("A deck that uses secret swimmer but for the Smash. Evolve middle manager or teacher with fossilhead and copy its stats with swimmer. Don't have a fossilhead in your hand yet? Secret agent the manager and copy its stats with swimmer. Finish them off with Going Viral or A22.")
		.setColor("Random")
		
			.setImage("https://media.discordapp.net/attachments/1045888517110251590/1094850159256535070/received_6062685447180054.jpg?width=627&height=586")
		.addFields({name: "Deck Cost", 
							 value: "Cost: 43,350 sparks <:spar:1057791557387956274>"})
		.setFooter({text: "Created by Wild"})
		const m = await	message.channel.send({embeds: [wild], components: [row] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter})
		collector.on("collect", async i => {
			if(i.customId == 'sm'){
				await i.update({embeds: [swim], components: [sm]})
			}
				if(i.customId == 'swim'){
				await i.update({embeds: [swim], components: [sm]})
			}
			if(i.customId == 'helpw'){
				await i.update({embeds: [wild], components: [row] } )
			}
			if(i.customId == 'help'){
				await i.update({embeds: [wild], components: [row] } )
			}
		})
	}
}
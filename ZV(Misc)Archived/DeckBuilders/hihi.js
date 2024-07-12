const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
module.exports = {
	name: `hihi0810`,
	aliases: [`hihihelp`, `helphihi`, `decksmadebyhihi`, `hihidecks`, `hihi`],
	category: `DeckBuilders`,
	run: async(client, message, args) => {
		const row = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('db')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('dbolt')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const db = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('helph')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('help')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		let user = await client.users.fetch("783877069096353803")
		let hihi = new EmbedBuilder()
		.setTitle(`${user.displayName} Decks`)
		.setDescription(`My commands for decks made by ${user.displayName} are  \n <@1043528908148052089> deadbolt`)
		.setFooter({text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below⏬!`})
			.setThumbnail(user.displayAvatarURL())
		.setColor("Random")
		let dbolt = new EmbedBuilder()
	.setTitle("Dead Bolt")
	.setDescription("A Deck win 100% winrate in the pvzhtourney Deck that makes use of graveyard with cowboy and other cards area 22 used to give zombies frenzy to finish the game")
	.setFooter({text: "Created By hihi0810"})
			.addFields({name: "Deck Cost", value: "Cost: 65,800 Sparks  <:spar:1057791557387956274>"})
		.setColor("Random")
.setImage("https://media.discordapp.net/attachments/1042381513523724288/1043946686856319107/IMG_0704.png?width=648&height=604")
	
	const m = await	message.channel.send({embeds: [hihi], components: [row] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter})
		collector.on("collect", async i=> {
			if(i.customId == 'helph'){
				await i.update({embeds: [hihi], components: [row] } )
			}
			if(i.customId == 'dbolt'){
				await i.update({embeds: [dbolt], components: [db]})
			}
				if(i.customId == 'help'){
				await i.update({embeds: [hihi], components: [row] } )
			}
			if(i.customId == 'db'){
				await i.update({embeds: [dbolt], components: [db]})
			}
		})
	}
}
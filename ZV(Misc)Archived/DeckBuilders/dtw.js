const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
module.exports = {
	name: `dtwdecks`,
	aliases: [`dtwhelp`, `helpdtw`, `dtwcommands`, `commandsdtw`, `dtw`, `decksmadebydtw`],
	category: `Miscellaneous`,
	run: async(client, message, args) => {
		if(message.channel.id === '1079220541535309954')
			return message.reply("test");
					const row = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('jer')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('jerry')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
					const jer = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('helpdtw')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('help')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		let dtw = new EmbedBuilder()
		.setTitle("DTW Decks")
		.setDescription("My commands for decks made by DTW are \n <@1043528908148052089> jerry")
		.setFooter({text: "To view the Decks Made By DTW please use the commands listed above or click on the buttons below⏬!"})
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1110559961056026667/dtw.png")
		.setColor("Random")
			
				let jerry = new EmbedBuilder()
	.setTitle("Jerry")	
			.setDescription("A Deck that runs so many <:jerrywho:1057790092510515200> its bound to make your opponent go <:jerrywho:1057790092510515200> at least once")
	.setFooter({text: "Created By: Dtw and Toast"})
			.addFields({name: "Deck Cost", value: "Cost: 19,950 <:jerrywho:1057790092510515200>"})
		.setColor("Random")		.setImage("https://media.discordapp.net/attachments/826249840006529054/1044352276816466030/unknown.png")
	
		const m = await	message.channel.send({embeds: [dtw], components: [row] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter})
		collector.on("collect", async i => {
			if(i.customId == 'jer'){
				await i.update({embeds: [jerry], components: [jer]})
			}
				if(i.customId == 'jerry'){
				await i.update({embeds: [jerry], components: [jer]})
			}
			if(i.customId == 'helpdtw'){
				await i.update({embeds: [dtw], components: [row] } )
			}
			if(i.customId == 'help'){
				await i.update({embeds: [dtw], components: [row] } )
			}
		})
	}
}
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
module.exports = {
	name: `leo`,
	aliases: [`leodecks`, `leohelp`, `helpleo`, `decksmadebyleo`],
	category: `DeckBuilders`,
	run: async(client, message, args) => {
				const row = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('lock')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('out')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const lock = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('helpl')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('help')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		let leo = new EmbedBuilder()
		.setTitle("Leo Decks")
		.setDescription("My commands for decks made by Leo are \n <@1043528908148052089> lockout")
		.setFooter({text: "To view the Decks Made By Leo please use the commands listed above or click on the buttons below⏬!"})
		.setColor("Random")
			
		let out = new EmbedBuilder()
	.setTitle("Lockout")
	.setDescription("Lockout is a deck that attempts to lock out your opponent from playing the game that they fell in love with. Botanist does a good job at removing a lane from play while you control your opponent's board with your gravestones. A22 Cryo Yeti + Signature is a combo that can unleash Armageddon if performed correctly as well")
	.setFooter({text: "Created By Sushi, Leo and Dozza"})
			.addFields({name: "Deck Cost", value: "Cost: 58,250 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
		.setImage("https://media.discordapp.net/attachments/1044626284346605588/1111022533190369382/IMG_2708.png?width=624&height=604")
	
		const m = await	message.channel.send({embeds: [leo], components: [row] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter})
		collector.on("collect", async i=> {
			if(i.customId == 'lock'){
				await i.update({embeds: [out], components: [lock]})
			}
			if(i.customId == 'helpl'){
				await i.update({embeds: [leo], components: [row] } )
			}
			if(i.customId == 'help'){
				await i.update({embeds: [leo], components: [row] } )
			}
			if(i.customId == 'out'){
				await i.update({embeds: [out], components: [lock]})
			}
		})
	}
}
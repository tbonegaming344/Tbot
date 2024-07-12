const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
module.exports = {
	name: `fork`,
	aliases: [`decksmadebyfork`, `forkdecklists`, `forkhelp`, `helpfork`, `forkcommands`, `commandsfork`, `forkdecks`],
	category: `DeckBuilders`,
		run: async(client, message, args) => {
			const row = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('sec')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('s22')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const s22 = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('helpfork')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('help')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			let user = await client.users.fetch("1030729143064739850")
	let fork = new EmbedBuilder()
		.setTitle(`${user.displayName} Decks`)
		.setDescription(`My commands for decks made by ${user.displayName} are \n <@1043528908148052089> secret22`)
		.setFooter({text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below⏬!`})
		.setThumbnail(user.displayAvatarURL())
		.setColor("Random")
			
				let sec = new EmbedBuilder()
	.setTitle("Secret 22")	
			.setDescription("Secret 22 is a type of secret agent swarm deck that is able to Utilize Grave Robber's and other one drops with ridicolous stats and Secret Agent, allowing you to get a 1-cost 5/5 Bullseye and other good stats with other minions - which is just insane! Pair it up with a A22, Swimmer, or sugary treat to pressure more damage onto your opponent making them shake in fear!")
		.setFooter({text: "Created By Fork"})
			.addFields({name: "Deck Cost", value: "Cost: 43,300 sparks <:spar:1057791557387956274>"})	.setImage("https://media.discordapp.net/attachments/1044626284346605588/1075764747896623134/image_2023-02-05_203402984.png?width=524&height=531")
		.setColor("Random")			
	
	const m = await	message.channel.send({embeds: [fork], components: [row] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter})
			collector.on("collect", async i=> {
				if(i.customId == 'sec'){
					await i.update({embeds: [sec], components: [s22]})
				}
				if(i.customId == 's22'){
					await i.update({embeds: [sec], components: [s22]})
				}
				if(i.customId == 'helpfork'){
					await i.update({embeds: [fork], components: [row] } )
				}
				if(i.customId == 'help'){
					await i.update({embeds: [fork], components: [row] } )
				}
			})
	}
}
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
module.exports = {
	name: `wydemouth`,
	aliases: [`wydemouth`, `wyde`, `wydehelp`, `helpwyde`, `wydemouthhelp`, `helpwydemouth`, `decksmadebywydemouth`],
		category: `DeckBuilders`,
	run: async(client, message, args) => {
			const row = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('cb')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('bm')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
					const bm = new ActionRowBuilder()
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
		let user = await client.users.fetch("823206249641803787")
		let wyde = new EmbedBuilder()
		.setTitle("Wyde Mouth Decks")
		.setDescription("My commands for decks made by Wyde Mouth are \n <@1043528908148052089> brontomid")
		.setFooter({text: "To view the Decks Made By Wyde Mouth please use the commands listed above or click on the buttons below⏬!"})
			.setThumbnail(user.displayAvatarURL())
		.setColor("Random")
			
			let bmid = new EmbedBuilder()
	.setTitle("Bronto Mid")
	.setDescription("A tempo deck which uses fossilhead and turquoise skull zombie as growing bodies, more so when combined with our tempo cards, especially against non-solar heroes. Mondo Bronto can be used as removal in this deck, both zombie phase AND trick phase with the use of zmm, terrify, and gv. Lastly, terrify isn't just for mondo synergy, it can also be used to move plants that would trade with your big bodies for them to hit face! ")
	.setFooter({text: "Created By WydeMouth#3169"})
			.addFields({name: "Deck Cost", value: "Cost: 51,350 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
.setImage("https://media.discordapp.net/attachments/940369914957549578/1064704022671536128/Screenshot_2023-01-17-08-25-44-697_com.ea.gp.pvzheroes-edit.jpg?width=600&height=625")
	
	const m = await	message.channel.send({embeds: [wyde], components: [row] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter})
		collector.on("collect", async i => {
			if(i.customId == 'bm'){
				await i.update({embeds: [bmid], components: [bm]})
			}
				if(i.customId == 'bmid'){
				await i.update({embeds: [bmid], components: [bm]})
			}
			if(i.customId == 'helpw'){
				await i.update({embeds: [wyde], components: [row] } )
			}
				if(i.customId == 'help'){
				await i.update({embeds: [wyde], components: [row] } )
			}
		})
	}
}
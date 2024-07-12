const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
module.exports = {
	name: `icicle`,
	aliases: [`decksmadebyicicle`, `iciclehelp`, `helpicicle`, `icicledecks`],
	category: `DeckBuilders`,
	run: async(client, message, args) => {
			const row = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('rel')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('baggro')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const b = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('helpice')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('p')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const p = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('b')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('rr')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const rr = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('pmech')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('r')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
					const r = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('rampr')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('help')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		let user = await client.users.fetch("926169229089194095")
		let ice = new EmbedBuilder()
		.setTitle("Icicle Decks")
		.setDescription("My commands for decks made by Icicle are \n <@1043528908148052089> bananaaggro \n <@1043528908148052089> packagemech \n <@1043528908148052089> rampred \n <@1043528908148052089> relily")
		.setFooter({text: "To view the Decks Made By Icicle please use the commands listed above or click on the buttons below⏬!"})
			.setThumbnail(user.displayAvatarURL())
		.setColor("Random")
			
					let baggro = new EmbedBuilder()
	.setTitle("Banna Aggro")
	.setDescription("Running your typical A-beans cards and pairing them with banana snygery, Use half-banana to make your brainanas great late game, and use peel with other cards like roto and shrinking to tech your opponent.")
	.setFooter({text: "By IciclePC"})
			.addFields({name: "Deck Cost", value: "Cost: 64,850 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
.setImage("https://media.discordapp.net/attachments/1044626284346605588/1061305109365137548/Screenshot_2022.11.12_23.35.34.695.png?width=624&height=625")
	
			let pmech = new EmbedBuilder()
	.setTitle("Zmech Package")
	.setDescription("This is a deck that makes use of the typical crazy and hearty cards then finishes them off with conjured gifts or gti garg")
	.setFooter({text: "Created By Icicle"})
				.addFields({name: "Deck Cost", value: "Cost: 49,850 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")		.setImage("https://media.discordapp.net/attachments/1044626284346605588/1050971600226357289/Screenshot_20221209-205504_PvZ_Heroes.jpg?width=522&height=554")
	
			let rampr = new EmbedBuilder()
	.setTitle("Ramp Red")	
			.setDescription("Running your typical solar finishers with Red Plant-it allows to have plenty to ramp to with your Twin Sunflower and Sunnier Shroom, use red to protect your ramp and get tons of value")
	.setFooter({text: "Created By: IciclePC"})
			.addFields({name: "Deck Cost", value: "Cost: 65,550 sparks <:spar:1057791557387956274>"})	.setImage("https://media.discordapp.net/attachments/1044626284346605588/1061305109633568809/Screenshot_2022.12.31_17.10.21.546.png?width=619&height=625")
		.setColor("Random")			
	
		let rel = new EmbedBuilder()
	.setTitle("Reilly")
	.setDescription("Reilly AKA just OTK Trica uses lily pad to put your tricarrotops in a safe position while your conjures and insane card draw buffs it to unkillable levels, Marine Bean, ANB and mirror nut can help you win too.")
	.setFooter({text: "By IciclePC"})
			.addFields({name: "Deck Cost", value: "Cost: 52,100 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
.setImage("https://media.discordapp.net/attachments/1044626284346605588/1061305109910405211/Screenshot_2023.01.07_10.19.28.968.png?width=633&height=625")
	
const m = await	message.channel.send({embeds: [ice], components: [row] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter})
		collector.on("collect", async i=> {
			if(i.customId == 'baggro'){
				await i.update({embeds: [baggro], components: [b]})
			}
			if(i.customId == 'helpice'){
				await i.update({embeds: [ice], components: [row] } )
			}
			if(i.customId == 'p'){
				await i.update({embeds: [pmech], components: [p]})
			}
				if(i.customId == 'b'){
				await i.update({embeds: [baggro], components: [b]})
			}
			if(i.customId == 'rr'){
				await i.update({embeds: [rampr], components: [rr]})
			}
					if(i.customId == 'pmech'){
				await i.update({embeds: [pmech], components: [p]})
			}
			if(i.customId == 'r'){
				await i.update({embeds: [rel], components: [r]})
			}
					if(i.customId == 'rampr'){
				await i.update({embeds: [rampr], components: [rr]})
			}
				if(i.customId == 'rel'){
				await i.update({embeds: [rel], components: [r]})
			}
				if(i.customId == 'help'){
				await i.update({embeds: [ice], components: [row] } )
			}
		})
	}
}
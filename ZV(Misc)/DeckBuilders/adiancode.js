const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
let db = require("../../index.js")
module.exports = {
	name: `aidancode`,
	aliases: [`decksmadebyaidancode`, `helpaidancode`, `aidancodehelp`, `aidancodedecks`],
	category: `DeckBuilders`, 
	run: async(client, message, args) => {
		const row = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('ctb')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('bburn')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const bburn = new ActionRowBuilder()
				.addComponents(
					new ButtonBuilder()
					.setCustomId('helpa')
					.setLabel('🔙')
					.setStyle(ButtonStyle.Primary),
				new ButtonBuilder()
					.setCustomId('bct')
					.setLabel('⏭')
					.setStyle(ButtonStyle.Primary)
				);
		const bct = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('burnb')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('help')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		let decks = [
			"budgetburn",
			"budgetct"
		]
		let toBuildString = "";
		for (let i = 0; i < decks.length; i++) {
			let deck = decks[i];
			toBuildString += `\n<@1043528908148052089> **${deck}**`
		}
		let [result] = await db.query(`select budgetburn, budgetct 
		from ebdecks eb 
		inner join ctdecks ct 
		on (eb.deckinfo = ct.deckinfo)`)
		let user = await client.users.fetch("625029371882897428")
	let adiancode= new EmbedBuilder()
		.setTitle(`${user.displayName} Decks`)
		.setDescription(`My commands for decks made by ${user.displayName} are ${toBuildString}`)
		.setFooter({text: `To find out more about the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`})
		.setThumbnail(user.displayAvatarURL())
		.setColor("Random")
			//Budget burn 
			let budgeteb= new EmbedBuilder()
			.setTitle("Budget Burn")
			.setDescription(`${result[2].budgetburn}`)
			.setFooter({text: `${result[1].budgetburn}`})
					.addFields({name: "Deck Cost", value: `${result[0].budgetburn}`})
				.setColor("Random")
				.setImage(`${result[3].budgetburn}`)
			let budgetct = new EmbedBuilder()
			.setTitle("Budget Tempo")
	.setDescription(`${result[2].budgetct}`)
	.setFooter({text: `${result[1].budgetct}`})
			.addFields({name: "Deck Cost", value: `${result[0].budgetct}`})
		.setColor("Random")
	.setImage(`${result[3].budgetct}`)
			const m = await	message.channel.send({embeds: [adiancode], components: [row] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter})
		collector.on("collect", async i=> {
			//Budget Burn
			if(i.customId == 'bburn'){
				await i.update({embeds: [budgeteb], components: [bburn]})
			}
			if(i.customId == 'burnb'){
				await i.update({embeds: [budgeteb], components: [bburn]})
			}
			//Budget Tempo
            if(i.customId == 'bct'){
				await i.update({embeds: [budgetct], components: [bct]})
			}
			if(i.customId == 'ctb'){
				await i.update({embeds: [budgetct], components: [bct]})
			}
			//Help
			if(i.customId == 'helpa'){
				await i.update({embeds: [adiancode], components: [row] } )
			}
				if(i.customId == 'help'){
				await i.update({embeds: [adiancode], components: [row] } )
			}
		})
	}
}
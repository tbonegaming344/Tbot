const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
let db = require('../../index.js');
module.exports = {
	name: `yoyo`,
	aliases: [`yoyodecks`, `helpyoyo`, `helpyoyo`, `decksmadebyyoyo`, `yoyodecklists`, ],
	category: `DeckBuilders`,
	run: async(client, message, args) => {
		const row = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('tstache')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('az')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const az = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('helpy')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('bt')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const bt = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('azilla')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('cy')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const cy = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('btm')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('jb')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const jb = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('cycz')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('msb')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const msb = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
						.setCustomId('jbolt')
						.setLabel('🔙')
						.setStyle(ButtonStyle.Primary),
				new ButtonBuilder()
						.setCustomId('mor')
						.setLabel('⏭')
						.setStyle(ButtonStyle.Primary)
			);
			const mor = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('msbolt')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('ts')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const ts = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('mora')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('help')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		let decks = [
			"amonguszilla",
			"bettrickmech",
			"cyclezilla",
			"josebolt",
			"mimescibolt",
			"morality",
			"trickstache"
		];
		let toBuildString = "";
		for (let i = 0; i < decks.length; i++) {
			toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
		}
		let [result] = await db.query(`select amonguszilla, bettrickmech, cyclezilla,
josebolt, mimescibolt, morality, trickstache
from czdecks cz inner join zmdecks zm
on (cz.deckinfo = zm.deckinfo)
inner join rbdecks rb
on (cz.deckinfo = rb.deckinfo)
inner join bfdecks bf 
on (cz.deckinfo = bf.deckinfo)
inner join pbdecks pb 
on (cz.deckinfo = pb.deckinfo)`)
		let yoyo = new EmbedBuilder()
		.setTitle("Yoyo Decks")
		.setDescription(`My commands for decks made by Yoyo are ${toBuildString}`)
		.setFooter({text: `To view the Decks Made By Yoyo please use the commands listed above or click on the buttons below!
Note: Yoyo has ${decks.length} total decks in Tbot`})
			.setThumbnail("https://media.discordapp.net/attachments/832984002633269258/1159176803122946129/D85BDC68-3C9B-4F69-93B0-34BE08842E28.png?ex=651eef06&is=651d9d86&hm=635d383184d2aa08482b520b&=&width=492&height=580")
		.setColor("Random")
				let azilla = new EmbedBuilder()
				.setTitle("Amoguzilla")
				.setDescription(`${result[2].amonguszilla}`)
				.setFooter({text: `${result[1].amonguszilla}`})
						.addFields({name: "Deck Cost", value: `${result[0].amonguszilla}`})
					.setColor("Random")
			.setImage(`${result[3].amonguszilla}`)
				let btm = new EmbedBuilder()
				.setTitle("Bettrickmech")
				.setDescription(`${result[2].bettrickmech}`)
				.setFooter({text: `${result[1].bettrickmech}`})
						.addFields({name: "Deck Cost", value: `${result[0].bettrickmech}`})
					.setColor("Random")
			.setImage(`${result[3].bettrickmech}`)
			let cycz = new EmbedBuilder()
			.setTitle("Cyclezilla")
			.setDescription(`${result[2].cyclezilla}`)
			.setFooter({text: `${result[1].cyclezilla}`})
			.addFields({name: "Deck Cost", value: `${result[0].cyclezilla}`})
			.setColor("Random")
			.setImage(`${result[3].cyclezilla}`)
		let msbolt = new EmbedBuilder()
		.setTitle("Mime SciBolt")
		.setDescription(`${result[2].mimescibolt}`)
		.setFooter({text:`${result[1].mimescibolt}`})
		.addFields({name: "Deck Cost:", value: `${result[0].mimescibolt}`})
		.setColor("Random")
		.setImage(`${result[3].mimescibolt}`)
			let jbolt = new EmbedBuilder()
			.setTitle("Jose Bolt")
			.setDescription(`${result[2].josebolt}`)
			.setFooter({text: `${result[1].josebolt}`})
					.addFields({name: "Deck Cost", value: `${result[0].josebolt}`})
				.setColor("Random")
				.setImage(`${result[3].josebolt}`)
		let mora = new EmbedBuilder()
		.setTitle("Morality")
		.setDescription(`${result[2].morality}`)
		.setColor("Random")
		 .addFields({name: "Deck Cost", value:`${result[0].morality}`})
		.setFooter({text: `${result[1].morality}`})
		.setImage(`${result[3].morality}`)
		let tstache = new EmbedBuilder()
		.setTitle("Trickstache")
		.setDescription(`${result[2].trickstache}`)
		.setFooter({text: `${result[1].trickstache}`})
				.addFields({name: "Deck Cost", value:`${result[0].trickstache}`})
			.setColor("Random")
			.setImage(`${result[3].trickstache}`)
	const m = await	message.channel.send({embeds: [yoyo], components: [row] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter})
		collector.on("collect", async i => {
			if(i.customId == 'az'){
				await i.update({embeds: [azilla], components: [az]})
			}
			if(i.customId == 'azilla'){
				await i.update({embeds: [azilla], components: [az]})
			}
			if(i.customId == 'bt'){
				await i.update({embeds: [btm], components: [bt]})
			}
			if(i.customId == 'btm'){
				await i.update({embeds: [btm], components: [bt]})
			}
			if(i.customId == 'jb'){
				await i.update({embeds: [jbolt], components: [jb]})
			}
			if(i.customId == 'jbolt'){
				await i.update({embeds: [jbolt], components: [jb]})
			}
					if(i.customId == 'cy'){
				await i.update({embeds: [cycz], components: [cy]})
			}
				if(i.customId == 'cycz'){
				await i.update({embeds: [cycz], components: [cy]})
			}
				if(i.customId == 'mor'){
				await i.update({embeds: [mora], components: [mor]})
			}
				if(i.customId == 'mora'){
				await i.update({embeds: [mora], components: [mor]})
			}
			if(i.customId == 'msb'){
				await i.update({embeds: [msbolt], components: [msb]})
			}
			if(i.customId == 'msbolt'){
				await i.update({embeds: [msbolt], components: [msb]})
			}
			if(i.customId == 'helpy'){
				await i.update({embeds: [yoyo], components: [row] } )
			}
			if(i.customId == 'help'){
				await i.update({embeds: [yoyo], components: [row] } )
			}
			if(i.customId == 'ts'){
				await i.update({embeds: [tstache], components: [ts]})
			}
			if(i.customId == 'tstache'){
				await i.update({embeds: [tstache], components: [ts]})
			}
		})
	}
}
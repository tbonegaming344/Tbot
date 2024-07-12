const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
let db = require("../../index.js");
module.exports = {
	name: `chompzilla`,
	aliases: [`cz`, `zilla`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const cmd = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
			.setCustomId('cmd')
			.setLabel('CZ Commands')
			.setEmoji('<:LetsFrickenChomp:1100168574829596824>')
			.setStyle(ButtonStyle.Success)
		)
	const row = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('stall')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('agrp')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
							const agrp = new ActionRowBuilder()
							.addComponents(
											new ButtonBuilder()
									.setCustomId('helpcz')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('agr')
									.setLabel('⏭')
									.setStyle(ButtonStyle.Primary)
											);
							const agr = new ActionRowBuilder()
							.addComponents(
											new ButtonBuilder()
									.setCustomId('agrpeas')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('among')
									.setLabel('⏭')
									.setStyle(ButtonStyle.Primary)
											);
							const among = new ActionRowBuilder()
							.addComponents(
											new ButtonBuilder()
									.setCustomId('aggro')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('ap')
									.setLabel('⏭')
									.setStyle(ButtonStyle.Primary)
											);
									const ap = new ActionRowBuilder()
							.addComponents(
											new ButtonBuilder()
									.setCustomId('amongus')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('bcz')
									.setLabel('⏭')
									.setStyle(ButtonStyle.Primary)
											);
									const bcz = new ActionRowBuilder()
							.addComponents(
											new ButtonBuilder()
									.setCustomId('apotk')
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
									.setCustomId('czb')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('hmz')
									.setLabel('⏭')
									.setStyle(ButtonStyle.Primary)
											);
							const hmz = new ActionRowBuilder()
							.addComponents(
											new ButtonBuilder()
									.setCustomId('cycz')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('hrr')
									.setLabel('⏭')
									.setStyle(ButtonStyle.Primary)
											);
								const hrr = new ActionRowBuilder()
							.addComponents(
											new ButtonBuilder()
									.setCustomId('hmzilla')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('mr')
									.setLabel('⏭')
									.setStyle(ButtonStyle.Primary)
											);
						const mr = new ActionRowBuilder()
							.addComponents(
											new ButtonBuilder()
									.setCustomId('hrrings')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('morb')
									.setLabel('⏭')
									.setStyle(ButtonStyle.Primary)
											);
							const morb = new ActionRowBuilder()
							.addComponents(
											new ButtonBuilder()
									.setCustomId('midr')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('ring')
									.setLabel('⏭')
									.setStyle(ButtonStyle.Primary)
											);
										const ring = new ActionRowBuilder()
							.addComponents(
											new ButtonBuilder()
									.setCustomId('mop')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('sz')
									.setLabel('⏭')
									.setStyle(ButtonStyle.Primary)
											);
							const szilla = new ActionRowBuilder()
							.addComponents(
											new ButtonBuilder()
									.setCustomId('rings')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('help')
									.setLabel('⏭')
									.setStyle(ButtonStyle.Primary)
											);
		let cz = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e5/C1lUqjPUcAEp4F_.png/revision/latest/scale-to-width-down/250?cb=20170109212110")
		.setTitle("Chompzilla | <:MegaGrow:1062501412992458802><:Solar:1062502678384607262>")
		.setDescription("**- Flytrap Hero  -**")
		.setColor("Random")
		
		.addFields({name: "Superpowers",
							 	value: "Holo-Flora <:MegaGrow:1062501412992458802> \n Draw two cards. \n Geyser <:Solar:1062502678384607262> \n Heal your Hero and all Plants for 4. \n Scorched Earth <:Solar:1062502678384607262> \n All Zombies on the Ground get -1<:Strength:1062501774612779039>/-1<:Health:1062515540712751184>. \n Devour <:MegaGrow:1062501412992458802><:Solar:1062502678384607262> \n Destroy a Zombie with the lowest Health. "},
							 {
								 name: "Set-Rarity",
								 value: "Premium - Hero"
							 },
							 {
								 name: "Flavor Text",
								 value: "She flosses after every meal and still, Zombie Breath is a real problem."
							 })
							 let decks = [
								"aggroramppeas",
								"aggrozilla",
								"amonguszilla",
								"apotk",
								"budgetmopzilla",
								"cyclezilla",
								"healmidzilla",
								"helpcz",
								"hrr",
								"midred",
								"moprbius",
								"randomcz",
								"ringzilla",
								"stallzilla",
						]
						let toBuildString = "";
						for (let i = 0; i < decks.length; i++) {
							let deck = decks[i];
							toBuildString += `\n<@1043528908148052089> **${deck}**`;
						}
		let embed = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e5/C1lUqjPUcAEp4F_.png/revision/latest/scale-to-width-down/250?cb=20170109212110")
		.setTitle("CZ Commands")
				.setDescription(`My commands for Chompzilla(CZ) are ${toBuildString}`)
					.setColor("Random")
			.setFooter({text: `To view the Chompzilla decks please use the commands listed above or click on the buttons below!
Note: Chompzilla has ${decks.length -3 } total decks in Tbot`})
		let [result]= await db.query(`SELECT * from czdecks`)
		let agrpeas = new EmbedBuilder()
		.setTitle("Aggro Ramp Peas")
		.setDescription(`${result[2].aggroramppeas}`)
		.setFooter({text: `${result[1].aggroramppeas}`})
				.addFields({name: "Deck Cost", value: `${result[0].aggroramppeas}`})
			.setColor("Random")
	.setImage(`${result[3].aggroramppeas}`)
		let aggro = new EmbedBuilder()
		.setTitle("Aggrozilla")
		.setDescription(`${result[2].aggrozilla}`)
		.setColor("Random")
		.addFields({name: "Deck Cost", value: `${result[0].aggrozilla}`})
		.setFooter({text: `${result[1].aggrozilla}`})
			.setImage(`${result[3].aggrozilla}`)
			let amongus = new EmbedBuilder()
			.setTitle("Amoguzilla")
			.setDescription(`${result[2].amonguszilla}`)
			.setFooter({text: `${result[1].amonguszilla}`})
					.addFields({name: "Deck Cost", value: `${result[0].amonguszilla}`})
				.setColor("Random")
		.setImage(`${result[3].amonguszilla}`)
			
					let apotk = new EmbedBuilder()
					.setTitle("Apotato OTK")
					.setDescription(`${result[2].apotk}`)
					.setFooter({text: `${result[1].apotk}`})
							.addFields({name: "Deck Cost", value:`${result[0].apotk}`})
						.setColor("Random")		
						.setImage(`${result[3].apotk}`)
		let czb = new EmbedBuilder()
		.setTitle("BudgetMopZilla")
		.setDescription(`${result[2].budgetcz}`)
		.setFooter({text: `${result[1].budgetcz}`})
				.addFields({name : "Deck Cost", value: `${result[0].budgetcz}`})
			.setColor("Random")
	.setImage(`${result[3].budgetcz}`)
		let cycz = new EmbedBuilder()
		.setTitle("Cyclezilla")
		.setDescription(`${result[2].cyclezilla}`)
		.setFooter({text: `${result[1].cyclezilla}`})
		.addFields({name: "Deck Cost", value: `${result[0].cyclezilla}`})
		.setColor("Random")
		.setImage(`${result[3].cyclezilla}`)
		let hmzilla = new EmbedBuilder()
		.setTitle("Heal MidZilla")	
		.setDescription(`${result[2].healmidzilla}`)
.setFooter({text: `${result[1].healmidzilla}`})
		.addFields({name: "Deck Cost", value: `${result[0].healmidzilla}`})
	.setColor("Random")					
	.setImage(`${result[3].healmidzilla}`)

		let hrrings = new EmbedBuilder()
		.setTitle("High Roll Rings")
		.setDescription(`${result[2].hrr}`)
		.setFooter({text: `${result[1].hrr}`})
				.addFields({name: "Deck Cost", value: `${result[0].hrr}`})
			.setColor("Random")
			.setImage(`${result[3].hrr}`)
		let midr = new EmbedBuilder()
		.setTitle("Mid Red")
		.setDescription(`${result[2].midred}`)
		.setFooter({text: `${result[1].midred}`})
				.addFields({name: "Deck Cost", value: `${result[0].midred}`})
			.setColor("Random")
			.setImage(`${result[3].midred}`)
			let mop = new EmbedBuilder()
			.setTitle("Moprbius")
			.setDescription(`${result[2].mopribus}`)
			.setColor("Random")
			.addFields({name: "Deck Cost", value: `${result[0].mopribus}`})
			.setFooter({text: `${result[1].mopribus}`})
			.setImage(`${result[3].mopribus}`)
		let rings = new EmbedBuilder()
		.setTitle("Ringzilla")
	.setDescription(`${result[2].ringzilla}`)
	.setFooter({text: `${result[1].ringzilla}`})
			.addFields({name: "Deck Cost", value: `${result[0].ringzilla}`})
		.setColor("Random")
		.setImage(`${result[3].ringzilla}`)
		let stall = new EmbedBuilder()
		.setTitle("Stallzilla")	
		.setDescription(`${result[2].stallzilla}`)
.setFooter({text: `${result[1].stallzilla}`})
		.addFields({name: "Deck Cost", value: `${result[0].stallzilla}`})
	.setColor("Random")		
	.setImage(`${result[3].stallzilla}`)
	const m = await	message.channel.send({embeds: [cz], components: [cmd] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter})
		collector.on('collect', async i => {
		if(i.customId == 'agrp'){
			await i.update({embeds: [agrpeas], components: [agrp]})
		}
			if(i.customId == 'helpcz'){
				await i.update({embeds: [embed], components: [row] } )
			}
			if(i.customId == 'agrpeas'){
			await i.update({embeds: [agrpeas], components: [agrp]})
		}
			if(i.customId == 'agr'){
				await i.update({embeds: [aggro], components: [agr]})
			}
			if(i.customId == 'among'){
				await i.update({embeds: [amongus], components: [among]})
			}
					if(i.customId == 'morb'){
				await i.update({embeds: [mop], components: [morb]})
			}
			if(i.customId == 'mop'){
				await i.update({embeds: [mop], components: [morb]})
			}
						if(i.customId == 'aggro'){
				await i.update({embeds: [aggro], components: [agr]})
			}
			if(i.customId == 'ap'){
				await i.update({embeds: [apotk], components: [ap]})
			}
						if(i.customId == 'amongus'){
				await i.update({embeds: [amongus], components: [among]})
			}
			if(i.customId == 'bcz'){
				await i.update({embeds: [czb], components: [bcz]})
			}
						if(i.customId == 'apotk'){
				await i.update({embeds: [apotk], components: [ap]})
			}
			if(i.customId == 'hmz'){
				await i.update({embeds: [hmzilla], components: [hmz]})
			}
						if(i.customId == 'czb'){
				await i.update({embeds: [czb], components: [bcz]})
			}
			if(i.customId == 'hrr'){
				await i.update({embeds: [hrrings], components: [hrr]})
			}
			if(i.customId == 'hmzilla'){
				await i.update({embeds: [hmzilla], components: [hmz]})
			}
				if(i.customId == 'cy'){
				await i.update({embeds: [cycz], components: [cy]})
			}
				if(i.customId == 'cycz'){
				await i.update({embeds: [cycz], components: [cy]})
			}
			if(i.customId == 'mr'){
				await i.update({embeds: [midr], components: [mr]})
			}
				if(i.customId == 'hrrings'){
				await i.update({embeds: [hrrings], components: [hrr]})
			}
			if(i.customId == 'otkp'){
				await i.update({embeds: [otkpep], components: [otkp]})
			}
					if(i.customId == 'midr'){
				await i.update({embeds: [midr], components: [mr]})
			}
			if(i.customId == 'rr'){
				await i.update({embeds: [ramp], components: [rr]})
			}
						if(i.customId == 'otkpep'){
				await i.update({embeds: [otkpep], components: [otkp]})
			}
			if(i.customId == 'ring'){
				await i.update({embeds: [rings], components: [ring]})
			}
			if(i.customId == 'ramp'){
				await i.update({embeds: [ramp], components: [rr]})
			}
					if(i.customId == 'rings'){
				await i.update({embeds: [rings], components: [ring]})
			}
			if(i.customId == 'sz'){
				await i.update({embeds: [stall], components: [szilla]})
			}
				if(i.customId == 'stall'){
				await i.update({embeds: [stall], components: [szilla]})
			}
				if(i.customId == 'help'){
				await i.update({embeds: [embed], components: [row] } )
			}
				if(i.customId == 'cmd'){
				await i.update({embeds: [embed], components: [row] } )
			}
		})
	}
}
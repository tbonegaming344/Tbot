const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
let db = require("../../index.js")
module.exports = {
	name: `electricboogaloo`,
	aliases: [`eb`, `boog`, `electric`, `boogaloo`, `loo`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		const row = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
			.setCustomId('helpeb')
			.setLabel('EB Commands')
			.setStyle(ButtonStyle.Primary)
			.setEmoji('<:Electric_BoogalooH:1087745515975880744>')
			)
			const test = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId("wvalk")
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('b22')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		//Binary 22
		const b22 = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
				.setCustomId('helpeb')
				.setLabel('🔙')
				.setStyle(ButtonStyle.Primary),
							new ButtonBuilder()
								.setCustomId('bb')
								.setLabel('⏭️')
								.setStyle(ButtonStyle.Primary)
						);
	//Budget Burn
	const bb = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
				.setCustomId('bin22')
				.setLabel('🔙')
				.setStyle(ButtonStyle.Primary),
							new ButtonBuilder()
								.setCustomId('bu22')
								.setLabel('⏭️')
								.setStyle(ButtonStyle.Primary)
						);
	//Bunnary 22
	const bu22 = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
				.setCustomId('bburn')
				.setLabel('🔙')
				.setStyle(ButtonStyle.Primary),
							new ButtonBuilder()
								.setCustomId('bp')
								.setLabel('⏭️')
								.setStyle(ButtonStyle.Primary)
						);
	//Burn Package
	const bp = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
				.setCustomId('bun22')
				.setLabel('🔙')
				.setStyle(ButtonStyle.Primary),
							new ButtonBuilder()
								.setCustomId('ib')
								.setLabel('⏭️')
								.setStyle(ButtonStyle.Primary)
						);
		//Igma Burn
		const ib = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
				.setCustomId('bpack')
				.setLabel('🔙')
				.setStyle(ButtonStyle.Primary),
							new ButtonBuilder()
								.setCustomId('ig')
								.setLabel('⏭️')
								.setStyle(ButtonStyle.Primary)
						);
						//Ignea
						const ig = new ActionRowBuilder()
						.addComponents(
							new ButtonBuilder()
								.setCustomId('iburn')
								.setLabel('🔙')
								.setStyle(ButtonStyle.Primary),
											new ButtonBuilder()
												.setCustomId('mc')
												.setLabel('⏭️')
												.setStyle(ButtonStyle.Primary)
										);
		//Mission Control
		const mc = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
				.setCustomId('ignea')
				.setLabel('🔙')
				.setStyle(ButtonStyle.Primary),
							new ButtonBuilder()
								.setCustomId('mf')
								.setLabel('⏭️')
								.setStyle(ButtonStyle.Primary)
						);
	//Mr.Feast
	const mf = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
				.setCustomId('mcon')
				.setLabel('🔙')
				.setStyle(ButtonStyle.Primary),
							new ButtonBuilder()
								.setCustomId('npa')
								.setLabel('⏭️')
								.setStyle(ButtonStyle.Primary)
						);
	//No Playing Allowed
	const np = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
				.setCustomId('mrf')
				.setLabel('🔙')
				.setStyle(ButtonStyle.Primary),
							new ButtonBuilder()
								.setCustomId('pr')
								.setLabel('⏭️')
								.setStyle(ButtonStyle.Primary)
						);
	//Player Removal
	const pr = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
				.setCustomId('np')
				.setLabel('🔙')
				.setStyle(ButtonStyle.Primary),
							new ButtonBuilder()
								.setCustomId('sf')
								.setLabel('⏭️')
								.setStyle(ButtonStyle.Primary)
						);
		//Seacret
		const sf = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
				.setCustomId('prem')
				.setLabel('🔙')
				.setStyle(ButtonStyle.Primary),
							new ButtonBuilder()
								.setCustomId('wv')
								.setLabel('⏭️')
								.setStyle(ButtonStyle.Primary)
						);
	//Whalekyrie
	const wv = new ActionRowBuilder()
	.addComponents(
			new ButtonBuilder()
					.setCustomId('sfun')
					.setLabel('🔙')
					.setStyle(ButtonStyle.Primary),
			new ButtonBuilder()
				.setCustomId('help')
				.setLabel('⏭️')
				.setStyle(ButtonStyle.Primary)
		);
		let embed = new EmbedBuilder()
			.setThumbnail("https://pbs.twimg.com/media/C2utROCXUAQh7aZ.png")
		.setTitle("Electric Boogaloo | <:Beastly:1062500894744264714><:Crazy:1062502046474973224>")
		.setDescription("- **Dancing Hero** -")
		.addFields({name: "Superpowers", 
								value: "Dance Off <:Crazy:1062502046474973224> \n Make two 1<:Strength:1062501774612779039>/1<:Health:1062515540712751184> Backup Dancers in random lanes. \n Evaporate <:Beastly:1062500894744264714> \n Destroy a damaged Plant. \n Draw a card. \n Electrobolt <:Crazy:1062502046474973224> \n Do 3 damage to a Plant. \n Stayin' Alive <:Beastly:1062500894744264714><:Crazy:1062502046474973224> \n Do 3 damage to a Plant. \n Heal your Hero for 3. "},
							 {
								name: "Set-Rarity", 
								value: "**Premium - Hero**" 
							 },
							 {
								 name: "Flavor Text", 
								 value: "They say that disco is dead, but he's down with the dead."
							 })

							 let decks = [
								"binary22",
								"budgetburn",
								"bunnary22",
								"burnpackage",
								"helpeb",
								"igmaburn",
								"ingea",
								"missioncontrol",
								"mrfeast",
								"noplayingallowed",
								"playerremoval",
								"randomeb",
								"seacret",
								"whalekyrie",
								
								]
						let toBuildString = "";
						for (let i = 0; i < decks.length; i++) {
							let deck = decks[i];
							toBuildString += `\n<@1043528908148052089> **${deck}**`;
						}
			let helpeb = new EmbedBuilder()
			.setThumbnail("https://pbs.twimg.com/media/C2utROCXUAQh7aZ.png")
			.setTitle("EB Commands")
	.setDescription(`My commands for Electric Boogaloo(EB) are ${toBuildString}`)
				.setFooter({text: `To view the Electric Boogaloo decks please use the commands listed above or click on the buttons below!
Note: Electric Boogaloo has ${decks.length -3 } total decks in Tbot`})
			.setColor("Random")
		let [result] = await db.query(`SELECT * FROM ebdecks`)
			//Binary 22
		let bin22 = new EmbedBuilder()
		.setTitle("Binary 22")
		.setDescription(`${result[2].binary22}`)
.setFooter({text: `${result[1].binary22}`})
.setColor("Random")
		.addFields({name: "Deck Cost", value:`${result[0].binary22}`})		
		.setImage(`${result[3].binary22}`)
			let bburn = new EmbedBuilder()
			.setTitle("Budget Burn")
			.setDescription(`${result[2].budgetburn}`)
			.setFooter({text: `${result[1].budgetburn}`})
					.addFields({name: "Deck Cost", value: `${result[0].budgetburn}`})
				.setColor("Random")
				.setImage(`${result[3].budgetburn}`)
			let bun22 = new EmbedBuilder()
			.setTitle("Bunnary 22")
			.setDescription(`${result[2].bunnary22}`)
			.setFooter({text: `${result[1].bunnary22}`})
					.addFields({name: "Deck Cost", value: `${result[0].bunnary22}`})
				.setColor("Random")
				.setImage(`${result[3].bunnary22}`)
				let bpack = new EmbedBuilder()
				.setTitle("Burn Package")
				.setDescription(`${result[2].burnpackage}`)
				.setFooter({text: `${result[1].burnpackage}`})
						.addFields({name: "Deck Cost", value: `${result[0].burnpackage}`})
					.setColor("Random")
			.setImage(`${result[3].burnpackage}`)
		let iburn = new EmbedBuilder()
		.setTitle("Igma Burn")	
		.setDescription(`${result[2].igmaburn}`)
.setFooter({text: `${result[1].igmaburn}`})
		.addFields({name: "Deck Cost", value: `${result[0].igmaburn}`})
	.setColor("Random")			
	.setImage(`${result[3].igmaburn}`)
	//Ignea 
	let ignea = new EmbedBuilder()
	.setTitle("Ingea")
	.setDescription(`${result[2].ignea}`)
	.setFooter({text: `${result[1].ignea}`})
	.setImage(`${result[3].ignea}`)
	.addFields({name: "Deck Cost", value: `${result[0].ignea}`})
	.setColor("Random")
	//Mission control
			let mcon = new EmbedBuilder()
			.setTitle("Mission Control")
			.setDescription(`${result[2].missioncontrol}`)
			.setFooter({text:`${result[1].missioncontrol}`})
					.addFields({name: "Deck Cost", value: `${result[0].missioncontrol}`})
				.setColor("Random")
		.setImage(`${result[3].missioncontrol}`)
	//Mr.Feast
		let mrf = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/760579518846206033/1092228363713773668/Untitled218_20230324224813.png?width=1074&height=604")
		.setTitle("Mr.Feast")
		.setDescription(`${result[2].mrfeast}`)
		.setFooter({text: `${result[1].mrfeast}`})
					.addFields({name: "Deck Cost", value:`${result[0].mrfeast}`})
			.setColor("Random")
			.setImage(`${result[3].mrfeast}`)
	//No Playing Allowed
			let npa = new EmbedBuilder()
			.setTitle("No Playing Allowed")
			.setDescription(`${result[2].noplayingallowed}`)
			.setFooter({text: `${result[1].noplayingallowed}`})
						.addFields({name: "Deck Cost", value: `${result[0].noplayingallowed}`})
				.setColor("Random")
				.setImage(`${result[3].noplayingallowed}`)
	//Player Removal
		let prem = new EmbedBuilder()
		.setTitle("Player Removal")
		.setDescription(`${result[2].playerremoval}`)
					.addFields({name: "Deck Cost", value: `${result[0].playerremoval}`})
		.setFooter({text: `${result[1].playerremoval}`})
			.setColor("Random")
			.setImage(`${result[3].playerremoval}`)
	// Seacret
		let sfun = new EmbedBuilder()
		.setTitle("Seacret")
		.setDescription(`${result[2].seacret}`)
		.setColor("Random")
		.setFooter({text: `${result[1].seacret}`})
		.addFields({name: "Deck Cost",
							 	value: `${result[0].seacret}`})		
		.setImage(`${result[3].seacret}`)
		let wvalk = new EmbedBuilder()
		.setTitle("Whalekyrie")
		.setDescription(`${result[2].whalekyrie}`)
		.setFooter({text: `${result[1].whalekyrie}`})
		.addFields({name: "Deck Cost:", value: `${result[0].whalekyrie}`})
		.setColor("Random")
		.setImage(`${result[3].whalekyrie}`)
		const m = await	message.channel.send({embeds: [ embed ], components: [row] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter})
		collector.on('collect', async i  => {
			if (i.customId == 'helpeb')  	{
				await i.update({embeds: [ helpeb ], components: [test] } )
			}
			if(i.customId == 'b22'){
				await i.update({embeds: [bin22], components: [b22]})
			}
			if(i.customId == 'helpbe'){
				await i.update({embeds: [helpeb], components: [test] } )
			}
			if(i.customId == 'bb'){
				await i.update({embeds: [bburn], components: [bb]})
			}
			if(i.customId == 'bin22'){
					await i.update({embeds: [bin22], components: [b22]})
			}
			if(i.customId == 'bu22'){
				await i.update({embeds: [bun22], components: [bu22]})
			}
			if(i.customId == 'bburn'){
				await i.update({embeds: [bburn], components: [bb]})
			}
			if(i.customId == 'bp'){
				await i.update({embeds: [bpack], components: [bp]})
			}
			if(i.customId == 'bun22'){
				await i.update({embeds: [bun22], components: [bu22]})
			}
			if(i.customId == 'mg'){
				await i.update({embeds: [mgargs], components: [mg]})
			}
			if(i.customId == 'bpack'){
				await i.update({embeds: [bpack], components: [bp]})
			}
			if(i.customId == 'mgargs'){
				await i.update({embeds: [mgargs], components: [mg]})
			}
			if(i.customId == 'ib'){
				await i.update({embeds: [iburn], components: [ib]})
			}
			if(i.customId == 'wv'){
				await i.update({embeds: [wvalk], components: [wv]})
			}
			if(i.customId == 'wvalk'){
				await i.update({embeds: [wvalk], components: [wv]})
			}
			if(i.customId == 'mc'){
				await i.update({embeds: [mcon], components: [mc]})
			}
			if(i.customId == 'iburn'){
				await i.update({embeds: [iburn], components: [ib]})
			}
				//Ignea
				if(i.customId == 'ignea'){
					await i.update({embeds: [ignea], components: [ig]})
				}
				if(i.customId == 'ig'){
					await i.update({embeds: [ignea], components: [ig]})
				}
			if(i.customId == 'mf'){
				await i.update({embeds: [mrf], components: [mf]})
			}
			if(i.customId == 'mcon'){
				await i.update({embeds: [mcon], components: [mc]})
			}
			if(i.customId == 'npa'){
				await i.update({embeds: [npa], components: [np]})
			}
			if(i.customId == 'mrf'){
				await i.update({embeds: [mrf], components: [mf]})
			}
			if(i.customId == 'pr'){
				await i.update({embeds: [prem], components: [pr]})
			}
			if(i.customId == 'np'){
					await i.update({embeds: [npa], components: [np]})
			}
			if(i.customId == 'prem'){
				await i.update({embeds: [prem], components: [pr]})
			}
			if(i.customId == 'sf'){
				await i.update({embeds: [sfun], components: [sf]})
			}
			if(i.customId == 'sfun'){
				await i.update({embeds: [sfun], components: [sf]})
			}
			if(i.customId == 'help'){
				await i.update({embeds: [helpeb], components: [test] } )
			}
		})
	}
}
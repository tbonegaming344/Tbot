const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
let db = require("../../index.js");
module.exports = {
	name: `zmech`,
	aliases: [`zm`, `mech`, `z-mech`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('helpzm')
                    .setLabel('ZM Commands')
                    .setStyle(ButtonStyle.Danger)
										.setEmoji('<:zmech:1088189178224853063>')
            );
		const test = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('zmoss')
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
									.setCustomId('helpzm')
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
									.setCustomId('bmech')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('bfw')
									.setLabel('⏭')
									.setStyle(ButtonStyle.Primary)
											);
						const bfw = new ActionRowBuilder()
							.addComponents(
											new ButtonBuilder()
									.setCustomId('btm')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('bzm')
									.setLabel('⏭')
									.setStyle(ButtonStyle.Primary)
											);
						const bzm = new ActionRowBuilder()
							.addComponents(
											new ButtonBuilder()
									.setCustomId('bf')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('dm')
									.setLabel('⏭')
									.setStyle(ButtonStyle.Primary)
											);
							const dm = new ActionRowBuilder()
							.addComponents(
											new ButtonBuilder()
									.setCustomId('zmbb')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('fm')
									.setLabel('⏭')
									.setStyle(ButtonStyle.Primary)
											);
						const fm = new ActionRowBuilder()
							.addComponents(
											new ButtonBuilder()
									.setCustomId('dmech')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('frym')
									.setLabel('⏭')
									.setStyle(ButtonStyle.Primary)
											);
						const frym = new ActionRowBuilder()
							.addComponents(
											new ButtonBuilder()
									.setCustomId('fmech')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('gb')
									.setLabel('⏭')
									.setStyle(ButtonStyle.Primary)
											);
								const gb = new ActionRowBuilder()
							.addComponents(
											new ButtonBuilder()
									.setCustomId('fry')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('kc')
									.setLabel('⏭')
									.setStyle(ButtonStyle.Primary)
											);
							const kc = new ActionRowBuilder()
							.addComponents(
											new ButtonBuilder()
									.setCustomId('gburn')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('pyro')
									.setLabel('⏭')
									.setStyle(ButtonStyle.Primary)
											);
											const pyro = new ActionRowBuilder()
											.addComponents(
															new ButtonBuilder()
													.setCustomId('kcr')
													.setLabel('🔙')
													.setStyle(ButtonStyle.Primary),
												new ButtonBuilder()
													.setCustomId('sw')
													.setLabel('⏭')
													.setStyle(ButtonStyle.Primary)
															);
							const sw = new ActionRowBuilder()
							.addComponents(
											new ButtonBuilder()
									.setCustomId('pyromania')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('tm')
									.setLabel('⏭')
									.setStyle(ButtonStyle.Primary)
											);
								const tm = new ActionRowBuilder()
							.addComponents(
											new ButtonBuilder()
									.setCustomId('shock')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('zm')
									.setLabel('⏭')
									.setStyle(ButtonStyle.Primary)
							);
							//ZMoss
							const zm = new ActionRowBuilder()
							.addComponents(
											new ButtonBuilder()
									.setCustomId('trm')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('help')
									.setLabel('⏭')
									.setStyle(ButtonStyle.Primary)
							);
		let embed = new EmbedBuilder()
			.setThumbnail("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4c91afb-efa9-444a-b3a4-24648276b936/dem481x-57df373b-da9b-4963-8d24-93c070dad656.png/v1/fit/w_375,h_329,strp/z_mech_render_by_zalgo9997_dem481x-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzU2IiwicGF0aCI6IlwvZlwvZjRjOTFhZmItZWZhOS00NDRhLWIzYTQtMjQ2NDgyNzZiOTM2XC9kZW00ODF4LTU3ZGYzNzNiLWRhOWItNDk2My04ZDI0LTkzYzA3MGRhZDY1Ni5wbmciLCJ3aWR0aCI6Ijw9NDA2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.YMH20lA_-PhF9c604rAiLp55JUd2SBDhXfkA5SceXp8")
		.setTitle("Z-Mech | <:Hearty:1062501636557242429><:Crazy:1062502046474973224>")
		.setDescription("**- Science Imp Hero -**")
		.addFields({name: "Superpowers", 
								value: "Rock Wall <:Hearty:1062501636557242429> \n A Zombie gets +5<:Health:1062515540712751184>. \n Brute Strength <:Crazy:1062502046474973224> \n A Zombie gets +3<:Strength:1062501774612779039>. \n Electrobolt <:Crazy:1062502046474973224> \n Do 3 damage to a Plant. \n Missile Madness <:Hearty:1062501636557242429><:Crazy:1062502046474973224> \n Do 3 damage to a Plant and 1 damage to all other Plants. "},
							 {
								name: "Set-Rarity", 
								value: "**Premium - Hero**" 
							 },
							 {
								 name: "Flavor Text", 
								 value: "Once watched giant mecha anime for 12 hours straight."
							 })
		.setColor("Random")
		
		let decks = [
			"berserkmech",
			"bettertrickmech",
			"binaryflagwar",
			"budgetzm",
			"dozzamech",
			"feastmech",
			"frymech",
			"gargburn",
			"helpzm",
			"kendycrush",
			"pyromania",
			"randomzm",
			"shockwave",
			"trickmech",
			"wheelzm",
			"zmoss"
		]
		let toBuildString = "";
		for (let i = 0; i < decks.length; i++) {
			let deck = decks[i];
			toBuildString += `\n<@1043528908148052089> **${deck}**`
		}
				let helpzm = new EmbedBuilder()
				.setThumbnail("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f4c91afb-efa9-444a-b3a4-24648276b936/dem481x-57df373b-da9b-4963-8d24-93c070dad656.png/v1/fit/w_375,h_329,strp/z_mech_render_by_zalgo9997_dem481x-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzU2IiwicGF0aCI6IlwvZlwvZjRjOTFhZmItZWZhOS00NDRhLWIzYTQtMjQ2NDgyNzZiOTM2XC9kZW00ODF4LTU3ZGYzNzNiLWRhOWItNDk2My04ZDI0LTkzYzA3MGRhZDY1Ni5wbmciLCJ3aWR0aCI6Ijw9NDA2In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.YMH20lA_-PhF9c604rAiLp55JUd2SBDhXfkA5SceXp8")
				.setTitle("ZM Commands")
				.setDescription(`My commands for Zmech(ZM) are ${toBuildString}`)
					.setFooter({text: `To view the Zmech decks please use the commands listed above or click on the buttons below!
Note: Zmech has ${decks.length - 3} total decks in Tbot`})
				.setColor("Random")
				let [result] = await db.query(`SELECT * FROM zmdecks`);
					let bmech = new EmbedBuilder()
					.setTitle("Berserk Mech")
					.setDescription(`${result[2].berserkmech}`)
					.setFooter({text: `${result[1].berserkmech}`})
							.addFields({name: "Deck Cost", value: `${result[0].berserkmech}`})
						.setColor("Random")
				.setImage(`${result[3].berserkmech}`)
				let btm = new EmbedBuilder()
				.setTitle("Bettrickmech")
				.setDescription(`${result[2].bettrickmech}`)
				.setFooter({text: `${result[1].bettrickmech}`})
						.addFields({name: "Deck Cost", value: `${result[0].bettrickmech}`})
					.setColor("Random")
			.setImage(`${result[3].bettrickmech}`)
					let bf = new EmbedBuilder()
					.setTitle("Binary Flag War")
				.setDescription(`${result[2].binaryflagwar}`)
				.setColor("Random")
				.setFooter({text: `${result[1].binaryflagwar}`})
				.addFields({name: "Deck Cost",
										 value: `${result[0].binaryflagwar}`})
				.setImage(`${result[3].binaryflagwar}`)
				let zmbb = new EmbedBuilder()
				.setTitle("ZM Budget Swarm")
			.setDescription(`${result[2].budgetzm}`)
			.setFooter({text: `${result[1].budgetzm}`})
					.addFields({name: "Deck Cost", value: `${result[0].budgetzm}`})
				.setColor("Random")
		.setImage(`${result[3].budgetzm}`)
				let dmech = new EmbedBuilder()
				.setTitle("Dozza Mech")
				.setDescription(`${result[2].dozzamech}`)
				.setFooter({text: `${result[1].dozzamech}`})
						.addFields({name: "Deck Cost", value: `${result[0].dozzamech}`})
					.setColor("Random")
					.setImage(`${result[3].dozzamech}`)
				let fmech = new EmbedBuilder()
				.setTitle("Feast Mech")
				.setDescription(`${result[2].feastmech}`)
				.setColor("Random")
					.setImage(`${result[3].feastmech}`)
					.setFooter({text: `${result[1].feastmech}`})
				.addFields({name: "Deck Cost", 
										 value: `${result[0].feastmech}`})
				let fry = new EmbedBuilder()
				.setTitle("Fry Mech")
				.setDescription(`${result[2].frymech}`)
				.setFooter({text: `${result[1].frymech}`})
						.addFields({name: "Deck Cost", value: `${result[0].frymech}`})
					.setColor("Random")
					.setImage(`${result[3].frymech}`)
					let gburn = new EmbedBuilder()
					.setTitle("Garg Burn")
					.setDescription(`${result[2].gargburn}`)
					.setFooter({text: `${result[1].gargburn}`})
							.addFields({name: "Deck Cost", value: `${result[0].gargburn}`})
						.setColor("Random")
				.setImage(`${result[3].gargburn}`)
					let kcr = new EmbedBuilder()
					.setTitle("Kendy Crush")
					.setDescription(`${result[2].kendycrush}`)
					.setFooter({text: `${result[1].kendycrush}`})
							.addFields({name: "Deck Cost", value: `${result[0].kendycrush}`})
						.setColor("Random")
						.setImage(`${result[3].kendycrush}`)
						let pyromania = new EmbedBuilder()
        .setTitle("Pyromania")
        .setDescription(`${result[2].pyromania}`)
        .setColor("Random")
        .setFooter({text: `${result[1].pyromania}`})
        .addFields({name: "Deck Cost", value: `${result[0].pyromania}`})
        .setImage(`${result[3].pyromania}`)
				let shock = new EmbedBuilder()
				.setTitle("Shockwave")
				.setDescription(`${result[2].shockwave}`)
				.setColor("Random")
				.addFields({name: "Deck Cost", value: `${result[0].shockwave}`})
				.setFooter({text:`${result[1].shockwave}`})
				.setImage(`${result[3].shockwave}`)
					let trm = new EmbedBuilder()
					.setTitle("Trick Mech")
					.setDescription(`${result[2].trickmech}`)
					.setFooter({text: `${result[1].trickmech}`})
							.addFields({name: "Deck Cost", value: `${result[0].trickmech}`})
						.setColor("Random")
						.setImage(`${result[3].trickmech}`)
						//Zmoss
				let zmoss = new EmbedBuilder()
				.setTitle("Z-Moss")
				.setDescription(`${result[2].zmoss}`)
				.setColor("Random")
				.setFooter({text: `${result[1].zmoss}`})
				.addFields({name: "Deck Cost", value:`${result[0].zmoss}`})
				.setImage(`${result[3].zmoss}`)
		const m = await	message.channel.send({embeds: [ embed ], components: [row] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter})
		collector.on('collect', async i  => {
			if (i.customId == 'helpzm')  	{
				await i.update({embeds: [helpzm ], components: [test] } )
			}
			if(i.customId == 'helpzmz'){
				await i.update({embeds: [helpzm ], components: [test] } )
			}
			if(i.customId == 'bm'){
				await i.update({embeds: [bmech], components: [bm]})
			}
			if(i.customId == 'bt'){
				await i.update({embeds: [btm], components: [bt]})
			}
			if(i.customId == 'bmech'){
				await i.update({embeds: [bmech], components: [bm]})
			}
			if(i.customId == 'bfw'){
				await i.update({embeds: [bf], components: [bfw]})
			}
					if(i.customId == 'btm'){
				await i.update({embeds: [btm], components: [bt]})
			}
			if(i.customId == 'bzm'){
				await i.update({embeds: [zmbb], components: [bzm]})
			}
			if(i.customId == 'bf'){
				await i.update({embeds: [bf], components: [bfw]})
			}
			if(i.customId == 'dm'){
				await i.update({embeds: [dmech], components: [dm]})
			}
			if(i.customId == 'zmbb'){
				await i.update({embeds: [zmbb], components: [bzm]})
			}
			if(i.customId == 'fm'){
				await i.update({embeds: [fmech], components: [fm]})
			}
						if(i.customId == 'dmech'){
				await i.update({embeds: [dmech], components: [dm]})
			}
			if(i.customId == 'frym'){
				await i.update({embeds: [fry], components: [frym]})
			}
			if(i.customId == 'fmech'){
				await i.update({embeds: [fmech], components: [fm]})
			}
			if(i.customId == 'gb'){
				await i.update({embeds: [gburn], components:[gb]})
			}
			if(i.customId == 'fry'){
				await i.update({embeds: [fry], components: [frym]})
			}
			if(i.customId == 'kc'){
				await i.update({embeds: [kcr], components: [kc]})
			}
			if(i.customId == 'gburn'){
				await i.update({embeds: [gburn], components:[gb]})
			}
			if(i.customId == 'kcr'){
				await i.update({embeds: [kcr], components: [kc]})
			}
			//Pyromania
			if(i.customId == 'pyro'){
				await i.update({embeds: [pyromania], components: [pyro]})
			}
			if(i.customId == 'pyromania'){
				await i.update({embeds: [pyromania], components: [pyro]})
			}
			if(i.customId == 'sw'){
				await i.update({embeds: [shock], components: [sw]})
			}
			//Zmoss
			if(i.customId == 'zm'){
				await i.update({embeds: [zmoss], components: [zm]})
			}
			if(i.customId == 'zmoss'){
				await i.update({embeds: [zmoss], components: [zm]})
			}
			if(i.customId == 'tm'){
				await i.update({embeds: [trm], components: [tm]})
			}
					if(i.customId == 'shock'){
				await i.update({embeds: [shock], components: [sw]})
			}
		if(i.customId == 'trm'){
				await i.update({embeds: [trm], components: [tm]})
			}
				if(i.customId == 'help'){
				await i.update({embeds: [helpzm ], components: [test] } )
			}
		})
	}
}
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
let db = require("../../index.js");
module.exports = {
	name: `solarflare`,
	aliases: [`sf`, `solar`, `flare`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
		const cmd = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
			.setCustomId('cmd')
			.setLabel('SF Commands')
			.setEmoji('<:SFSip:1018934631531282532>')
			.setStyle(ButtonStyle.Danger)
		)
		const row = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('sols')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('101')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const one = new ActionRowBuilder()
					.addComponents(
							new ButtonBuilder()
									.setCustomId('helpsf')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
							new ButtonBuilder()
								.setCustomId('asf')
								.setLabel('⏭️')
								.setStyle(ButtonStyle.Primary)
						);
		const asf = new ActionRowBuilder()
					.addComponents(
							new ButtonBuilder()
									.setCustomId('one')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
							new ButtonBuilder()
								.setCustomId('bsf')
								.setLabel('⏭️')
								.setStyle(ButtonStyle.Primary)
						);
		const bsf = new ActionRowBuilder()
					.addComponents(
							new ButtonBuilder()
									.setCustomId('sfa')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
							new ButtonBuilder()
								.setCustomId('eject')
								.setLabel('⏭️')
								.setStyle(ButtonStyle.Primary)
						);
		const ej = new ActionRowBuilder()
					.addComponents(
							new ButtonBuilder()
									.setCustomId('sfb')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
							new ButtonBuilder()
								.setCustomId('ff')
								.setLabel('⏭️')
								.setStyle(ButtonStyle.Primary)
						);
		const ff = new ActionRowBuilder()
		.addComponents(
				new ButtonBuilder()
						.setCustomId('ej')
						.setLabel('🔙')
						.setStyle(ButtonStyle.Primary),
				new ButtonBuilder()
					.setCustomId('ha')
					.setLabel('⏭️')
					.setStyle(ButtonStyle.Primary)
			);
			const ha = new ActionRowBuilder()
					.addComponents(
							new ButtonBuilder()
									.setCustomId('fflare')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
							new ButtonBuilder()
								.setCustomId('hb')
								.setLabel('⏭️')
								.setStyle(ButtonStyle.Primary)
						);
		const hburn = new ActionRowBuilder()
					.addComponents(
							new ButtonBuilder()
									.setCustomId('haggro')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
							new ButtonBuilder()
								.setCustomId('hmf')
								.setLabel('⏭️')
								.setStyle(ButtonStyle.Primary)
						);
		const hmf = new ActionRowBuilder()
					.addComponents(
							new ButtonBuilder()
									.setCustomId('hburn')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
							new ButtonBuilder()
								.setCustomId('pp')
								.setLabel('⏭️')
								.setStyle(ButtonStyle.Primary)
						);
		const pp = new ActionRowBuilder()
					.addComponents(
							new ButtonBuilder()
									.setCustomId('hmid')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
							new ButtonBuilder()
								.setCustomId('pys')
								.setLabel('⏭️')
								.setStyle(ButtonStyle.Primary)
						);
			const pys = new ActionRowBuilder()
					.addComponents(
							new ButtonBuilder()
									.setCustomId('pclones')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
							new ButtonBuilder()
								.setCustomId('rp')
								.setLabel('⏭️')
								.setStyle(ButtonStyle.Primary)
						);
		const rp = new ActionRowBuilder()
					.addComponents(
							new ButtonBuilder()
									.setCustomId('pysol')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
							new ButtonBuilder()
								.setCustomId('rs')
								.setLabel('⏭️')
								.setStyle(ButtonStyle.Primary)
						);
		const rs = new ActionRowBuilder()
					.addComponents(
							new ButtonBuilder()
									.setCustomId('rclones')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
							new ButtonBuilder()
								.setCustomId('sol')
								.setLabel('⏭️')
								.setStyle(ButtonStyle.Primary)
						);
		const sol = new ActionRowBuilder()
					.addComponents(
							new ButtonBuilder()
									.setCustomId('r2s')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
							new ButtonBuilder()
								.setCustomId('help')
								.setLabel('⏭️')
								.setStyle(ButtonStyle.Primary)
						);
		let sf = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/p__/images/5/57/SolarFlareTransparent.png/revision/latest?cb=20190624185221&path-prefix=protagonist")
		.setTitle("Solar Flare | <:Kabloom:1062502137826910268><:Solar:1062502678384607262>")
		.setDescription("**- Flower Hero  -**")
		.setColor("Random")
		
		.addFields({name: "Superpowers",
							 	value: "Weed Whack <:Solar:1062502678384607262> \n A Zombie gets -2<:Strength:1062501774612779039>/-2<:Health:1062515540712751184>. \n More Spore <:Kabloom:1062502137826910268> \n Make two 1<:Strength:1062501774612779039>/1<:Health:1062515540712751184> Button Mushrooms in random lanes. \n Scorched Earth <:Solar:1062502678384607262> \n All Zombies on the Ground get -1<:Strength:1062501774612779039>/-1<:Health:1062515540712751184>. \n Sunburn <:Kabloom:1062502137826910268><:Solar:1062502678384607262> \n Do 2 damage. \n You get +1<:Sun:1062501177679413409> for the rest of the game."},
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Hero**"
							 },
							 {
								 name: "Flavor Text",
								 value: "When she's on fire, she's on FIRE. And so are the Zombies."
							 })
let decks = [
	"101",
	"aggrosf",
	"budgetswarmsf",
	"ejection",
	"funnyflare",
	"healaggrosf",
	"healburn",
	"healmidflare",
	"helpsf",
	"psychopineclones",
	"psychosolstice",
	"rampclones",
	"ramp2seedling",
	"randomsf",
	"solstice",
	
]
let toBuildString = "";
for (let i = 0; i < decks.length; i++) {
	let deck = decks[i];
	toBuildString += `\n<@1043528908148052089> **${deck}**`;
}
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/p__/images/5/57/SolarFlareTransparent.png/revision/latest?cb=20190624185221&path-prefix=protagonist")
			.setTitle("SF Commands")
		.setDescription(`My commands for Solar Flare(SF) are ${toBuildString}`)
						.setColor("Random")
					.setFooter({text: `To view the Solar Flare decks please use the commands listed above or click on the buttons below!
Note: Solar Flare has ${decks.length -3 } total decks in Tbot`})
let [result] = await db.query(`SELECT * from sfdecks`);
let cf = new EmbedBuilder()
.setTitle("101.1")
.setDescription(`${result[2].oneone}`)
.setFooter({text: `${result[1].oneone}`})
	.setColor("Random")
	.setImage(`${result[3].oneone}`)
				.addFields({name: "Deck Cost", value: `${result[0].oneone}`})
let ag = new EmbedBuilder()
.setTitle("Aggro Solar Flare")
.setDescription(`${result[2].aggrosf}`)
.setFooter({text: `${result[1].aggrosf}`})
	.setColor("Random")	
	.setImage(`${result[3].aggrosf}`)
				.addFields({name: "Deck Cost", value: `${result[0].aggrosf}`})
let sbf = new EmbedBuilder()
.setTitle("SF Budget Swarm")
.setDescription(`${result[2].budgetswarmsf}`)
.setFooter({text: `${result[1].budgetswarmsf}`})
.addFields({name: "Deck Cost", value: `${result[0].budgetswarmsf}`})
.setColor("Random")
.setImage(`${result[3].budgetswarmsf}`)
let eject = new EmbedBuilder()
.setTitle("Ejection")
.setDescription(`${result[2].ejection}`)
.setFooter({text: `${result[1].ejection}`})
		.addFields({name: "Deck Cost", value: `${result[0].ejection}`})
	.setColor("Random")
	.setImage(`${result[3].ejection}`)
let fflare = new EmbedBuilder()
.setTitle("Funny Flare")	
.setDescription(`${result[2].funnyflare}`)
.setFooter({text:`${result[1].funnyflare}`})
.addFields({name: "Deck Cost", value: `${result[0].funnyflare}`})
.setColor("Random")
.setImage(`${result[3].funnyflare}`)
let haggro = new EmbedBuilder()
.setTitle("Heal Aggro")
.setDescription(`${result[2].healaggrosf}`)
.setFooter({text: `${result[1].healaggrosf}`})
.setColor("Random")
.addFields({name: "Deck Cost", 
						 value: `${result[0].healaggrosf}`})
.setImage(`${result[3].healaggrosf}`)

let hb = new EmbedBuilder()
.setTitle("Heal Burn")
.setDescription(`${result[2].healburn}`)
.setColor("Random")
.setFooter({text: `${result[1].healburn}`})
.addFields({name: "Deck Cost", value: `${result[0].healburn}`})
.setImage(`${result[3].healburn}`)

let hm = new EmbedBuilder()
.setTitle("Heal Mid Flare")
.setDescription(`${result[2].healmidflare}`)
.setFooter({text: `${result[1].healmidflare}`})
.addFields({name: "Deck Cost", value: `${result[0].healmidflare}`})
.setColor("Random")
.setImage(`${result[3].healmidflare}`)
let pclones = new EmbedBuilder()
.setTitle("Psycho Pineclones")
.setDescription(`${result[2].psychopineclones}`)
.setFooter({text: `${result[1].psychopineclones}`})
			.addFields({name: "Deck Cost", value: `${result[0].psychopineclones}`})
	.setColor("Random")
	.setImage(`${result[3].psychopineclones}`)
let pysol = new EmbedBuilder()
.setTitle("Psycho Solstice")
.setDescription(`${result[2].psychosolstice}`)
.setColor("Random")
.setFooter({text: `${result[1].psychosolstice}`})
.addFields({name: "Deck Cost", value: `${result[0].psychosolstice}`})
.setImage(`${result[3].psychosolstice}`)
let rclones = new EmbedBuilder()
.setTitle("Rampclones")	
.setDescription(`${result[2].rampclones}`)
.setFooter({text: `${result[1].rampclones}`})
.setColor("Random")		
.setImage(`${result[3].rampclones}`)
.addFields({name: "Deck Cost", value: `${result[0].rampclones}`})
let r2s = new EmbedBuilder()
.setTitle("Ramp 2 Seedling")
.setDescription(`${result[2].ramp2seedling}`)
.setFooter({text: `${result[1].ramp2seedling}`})
		.addFields({name: "Deck Cost", value: `${result[0].ramp2seedling}`})
	.setColor("Random")
.setImage(`${result[3].ramp2seedling}`)
let sole = new EmbedBuilder()
.setTitle("Solstice")
.setDescription(`${result[2].solstice}`)
.setColor("Random")

.setFooter({text: `${result[1].solstice}`})
.setImage(`${result[3].solstice}`)
.addFields({name: "Deck Cost",
						 value: `${result[0].solstice}`})
	const m = await	message.channel.send({embeds: [sf], components: [cmd] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter})
			collector.on('collect', async i => {
				if(i.customId == 'cmd'){
					await i.update({embeds: [embed], components: [row] } )
				}
							if(i.customId == 'pys'){
					await i.update({embeds: [pysol], components: [pys]})
				}
				if(i.customId == 'pysol'){
					await i.update({embeds: [pysol], components: [pys]})
				}
				if(i.customId == '101'){
					await i.update({embeds: [cf], components: [one]})
				}
				if(i.customId == 'helpsf'){
					await i.update({embeds: [embed], components: [row] } )
				}
				if(i.customId == 'asf'){
					await i.update({embeds: [ag], components: [asf]})
				}
				if(i.customId == 'one'){
					await i.update({embeds: [cf], components: [one]})
				}
				if(i.customId == 'sfa'){
					await i.update({embeds: [ag], components: [asf]})
				}
				if(i.customId == 'eject'){
				await i.update({embeds: [eject], components: [ej]})
				}			
				if(i.customId == 'sfb'){
					await i.update({embeds: [sbf], components: [bsf]})
				}
				if(i.customId == 'bsf'){
					await i.update({embeds: [sbf], components: [bsf]})
				}
				if(i.customId == 'hb'){
					await i.update({embeds: [hb], components: [hburn]})
				}
				if(i.customId == 'ej'){
					await i.update({embeds: [eject], components: [ej]})
				}
				if(i.customId == 'hmf'){
					await i.update({embeds: [hm], components: [hmf]})
				}
				if(i.customId == 'hburn'){
					await i.update({embeds: [hb], components: [hburn]})
				}
				if(i.customId == 'hmid'){
					await i.update({embeds: [hm], components: [hmf]})
				}
				if(i.customId == 'pp'){
					await i.update({embeds: [pclones], components: [pp]})
				}
				if(i.customId == 'rp'){
					await i.update({embeds: [rclones], components: [rp]})
				}
				if(i.customId == 'pclones'){
					await i.update({embeds: [pclones], components: [pp]})
				}
				if(i.customId == 'rclones'){
					await i.update({embeds: [rclones], components: [rp]})
				}
				if(i.customId == 'rs'){
					await i.update({embeds: [r2s], components: [rs]})
				}
				if(i.customId == 'r2s'){
					await i.update({embeds: [r2s], components: [rs]})
				}
				if(i.customId == 'sol'){
					await i.update({embeds: [sole], components: [sol]})
				}
				if(i.customId == 'sols'){
					await i.update({embeds: [sole], components: [sol]})
				}
				if(i.customId == 'ff'){
					await i.update({embeds: [fflare], components: [ff]})
				}
				if(i.customId == 'fflare'){
					await i.update({embeds: [fflare], components: [ff]})
				}
				if(i.customId == 'help'){
					await i.update({embeds: [embed], components: [row] } )
				}
				if(i.customId == 'ha'){
					await i.update({embeds: [haggro], components: [ha]})
				}
				if(i.customId == 'haggro'){
						await i.update({embeds: [haggro], components: [ha]})
				}
			})
	}
}
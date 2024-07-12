const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
let db = require("../../index.js");
module.exports = {
	name: `helpwk`, 
	aliases: [`commandswk`, `wkcommands`, `wkhelp`, `helpwall`, `helpknight`, `helpwallknight`, `wkdecks`, `wallknighthelp`, `wallknightdecks`],
	category: `Wall Knight(WK)`,
	run: async(client, message, args) => {
				const row = new ActionRowBuilder()
            .addComponents(
							  new ButtonBuilder()
                    .setCustomId('shit')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('3mid')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const mid = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('helpwk')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('bwk')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
						);
		const bwk = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('3mi')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('ck')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
				const ck = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('wkba')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('chemo')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
		const chemo = new ActionRowBuilder()
		.addComponents(
				new ButtonBuilder()
						.setCustomId('cancer')
						.setLabel('🔙')
						.setStyle(ButtonStyle.Primary),
				new ButtonBuilder()
					.setCustomId('cyk')
					.setLabel('⏭️')
					.setStyle(ButtonStyle.Primary)
			);
		const cyk = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('chemotherapy')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('fk')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
		const fk = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('cywk')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('hmk')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
		const hmk = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('fki')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('hl')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
				const hl = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('hmid')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('mm')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
		const mm = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('hland')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('niv')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
		const nio = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('midm')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('ob')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
		const ob = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('nio')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('pack')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
				const pack = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('obn')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('rb')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
			const rb = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('packwk')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('sk')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
		const sk = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('rampb')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('help')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
let decks = [
	"3mid",
	"budgetwk",
	"cancerknight",
	"chemotherapy",
	"cycleknight",
	"funnyknight",
	"healmidwk",
	"highlander",
	"helpwk",
	"midmirror",
	"nivola",
	"obnoxious",
	"packagewk",
	"rampburst",
	"randomwk",
	"shitknight",
	
]
let toBuildString = "";
for (let i = 0; i < decks.length; i++) {
	let deck = decks[i];
	toBuildString += `\n<@1043528908148052089> **${deck}**`;
}
			let embed = new EmbedBuilder()
  .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/16/WallHD.png/revision/latest/scale-to-width-down/250?cb=20170414165945")
	.setTitle("WK Commands")
			.setDescription(`My commands for Wall Knight(WK) are ${toBuildString}`)
		.setColor("Random")
				.setFooter({text: `To view the Wall-Knight decks please use the commands listed above or click on the buttons below!
Note: WallKnight has ${decks.length -3 } total decks in Tbot`})
let [result] = await db.query(`SELECT * from wkdecks`);
		let mid3 = new EmbedBuilder()
		.setTitle("3-Mid")
		.setDescription(`${result[2].mid3}`)
		.setFooter({text: `${result[1].mid3}`})
				.addFields({name: "Deck Cost", value: `${result[0].mid3}`})
			.setColor("Random")
			.setImage(`${result[3].mid3}`)
		let packwk = new EmbedBuilder()
		.setTitle("Package WK")	
		.setDescription(`${result[2].packagewk}`)
		.setFooter({text: `${result[1].packagewk}`})
				.addFields({name: "Deck Cost", value: `${result[0].packagewk}`})
			.setColor("Random")		
			.setImage(`${result[3].packagewk}`)
			let wkba = new EmbedBuilder()
			.setTitle("WallKnight Budget MidHeal")
	.setDescription(`${result[2].budgetwkmidheal}`)
	.setFooter({text: `${result[1].budgetwkmidheal}`})
			.addFields({name: "Deck Cost", value: `${result[0].budgetwkmidheal}`})
		.setColor("Random")
.setImage(`${result[3].budgetwkmidheal}`)
		let cancer = new EmbedBuilder()
		.setTitle("Cancer Knight")
		.setDescription(`${result[2].cancerknight}`)
		.setColor("Random")
		.addFields({name: "Deck Cost",
							 value: `${result[0].cancerknight}`})
		.setImage(`${result[3].cancerknight}`)
		.setFooter({text: `${result[1].cancerknight}`})
		let chemotherapy = new EmbedBuilder()
		.setTitle("Chemotherapy")
		.setDescription(`${result[2].chemotherapy}`)
		.setFooter({text: `${result[1].chemotherapy}`})
		.addFields({name: "Deck Cost", value: `${result[0].chemotherapy}`})
		.setColor("Random")
		.setImage(`${result[3].chemotherapy}`)
		let cywk = new EmbedBuilder()
		.setTitle("Cycle Knight")
		.setDescription(`${result[2].cycleknight}`)
		.setFooter({text:`${result[1].cycleknight}`})
				.addFields({name: "Deck Cost", value: `${result[0].cycleknight}`})
			.setColor("Random")
			.setImage(`${result[3].cycleknight}`)
		let fki = new EmbedBuilder()
		.setTitle("Funny Knight")
		.setDescription(`${result[2].funnyknight}`)
		.setFooter({text: `${result[1].funnyknight}`})
				.addFields({name: "Deck Cost", value:`${result[0].funnyknight}`})
			.setColor("Random")
	.setImage(`${result[3].funnyknight}`)
			let hmid = new EmbedBuilder()
			.setTitle("Heal Midknight")
			.setDescription(`${result[2].healmidwk}`)
			.setFooter({text: `${result[1].healmidwk}`})
					.addFields({name: "Deck Cost", value: `${result[0].healmidwk}`})
				.setColor("Random")		
				.setImage(`${result[3].healmidwk}`)
				
		let hland = new EmbedBuilder()
		.setTitle("WK Highlander")
		.setDescription(`${result[2].highlander}`)
		.setColor("Random")
		.setFooter({text: `${result[1].highlander}`})
		.addFields({name: "Deck Cost", value: `${result[0].highlander}`})
		.setImage(`${result[3].highlander}`)
		let midm = new EmbedBuilder()
		.setTitle("Mid Mirror")	
		.setDescription(`${result[2].midmirror}`)
.setFooter({text: `${result[1].midmirror}`})
		.addFields({name: "Deck Cost", value:`${result[0].midmirror}`})
	.setColor("Random")
.setImage(`${result[3].midmirror}`)
		let niv = new EmbedBuilder()
		.setTitle("Nivola(Unamuno)")
		.setDescription(`${result[2].nivola}`)
		.setColor("Random")
		.setFooter({text: `${result[1].nivola}`})
.setImage(`${result[3].nivola}`)
		.addFields({name: "Deck Cost", 
							 value: `${result[0].nivola}`})
		let obn = new EmbedBuilder()
		.setTitle("Obnoxious")
		.setDescription(`${result[2].obnoxious}`)
		.setFooter({text: `${result[1].obnoxious}`})
				.addFields({name: "Deck Cost", value: `${result[0].obnoxious}`})
			.setColor("Random")
	.setImage(`${result[3].obnoxious}`)
	
		let rampb = new EmbedBuilder()
		.setTitle("Ramp Burst")
		.setDescription(`${result[2].rampburst}`)
		.setFooter({text: `	${result[1].rampburst}`})
				.addFields({name: "Deck Cost", value: `${result[0].rampburst}`})
			.setColor("Random")
	.setImage(`${result[3].rampburst}`)
		let shit = new EmbedBuilder()
		.setTitle("Shit Knight")	
		.setDescription(`${result[2].shitknight}`)
.setFooter({text: `${result[1].shitknight}`})
		.addFields({name: "Deck Cost", value:  `${result[0].shitknight}`})
	.setColor("Random")			
	.setImage(`${result[3].shitknight}`)
const m = await	message.channel.send({embeds: [embed], components: [row] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter})
		collector.on('collect', async i=> {
			if(i.customId == '3mid'){
				await i.update({embeds: [mid3], components: [mid]})
			}
			if(i.customId == 'helpwk'){
				await i.update({embeds: [embed], components: [row] } )
			}
			if(i.customId == 'pack'){
				await i.update({embeds: [packwk], components: [pack]})
			}
			if(i.customId == '3mi'){
					await i.update({embeds: [mid3], components: [mid]})
			}
			if(i.customId == 'packwk'){
				await i.update({embeds: [packwk], components: [pack]})
			}
			if(i.customId == 'bwk'){
				await i.update({embeds: [wkba], components: [bwk]})
			}
			if(i.customId == 'ck'){
				await i.update({embeds: [cancer], components: [ck]})
			}
			if(i.customId == 'wkba'){
			await i.update({embeds: [wkba], components: [bwk]})	
			}
			if(i.customId == 'cancer'){
				await i.update({embeds: [cancer], components: [ck]})
			}
			if(i.customId == 'chemo'){
				await i.update({embeds: [chemotherapy], components: [chemo]})
			}
			if(i.customId == 'chemotherapy'){
				await i.update({embeds: [chemotherapy], components: [chemo]})
			}
			if(i.customId == 'cyk'){
				await i.update({embeds: [cywk], components: [cyk]})
			}
			if(i.customId == 'cywk'){
					await i.update({embeds: [cywk], components: [cyk]})
			}
			if(i.customId == 'fk'){
				await i.update({embeds: [fki], components: [fk]})
			}
			if(i.customId == 'hmk'){
				await i.update({embeds: [hmid], components: [hmk]})
			}
			if(i.customId == 'fki'){
				await i.update({embeds: [fki], components: [fk]})
			}
			if(i.customId == 'hmid'){
					await i.update({embeds: [hmid], components: [hmk]})
			}
			if(i.customId == 'mm'){
				await i.update({embeds: [midm], components: [mm]})
			}
			if(i.customId == 'niv'){
			await i.update({embeds: [niv], components: [nio]})	
			}
			if(i.customId == 'midm'){
					await i.update({embeds: [midm], components: [mm]})
			}
			if(i.customId == 'hl'){
				await i.update({embeds: [hland], components: [hl]})
			}
			if(i.customId == 'hland'){
				await i.update({embeds: [hland], components: [hl]})
			}
			if(i.customId == 'ob'){
				await i.update({embeds: [obn], components: [ob]})
			}
			if(i.customId == 'nio'){
				await i.update({embeds: [niv], components: [nio]})	
			}
			if(i.customId == 'rb'){
				await i.update({embeds: [rampb], components: [rb]})
			}
			if(i.customId == 'obn'){
					await i.update({embeds: [obn], components: [ob]})
			}
			if(i.customId == 'sk'){
				await i.update({embeds: [shit], components: [sk]})
			}
			if(i.customId == 'shit'){
				await i.update({embeds: [shit], components: [sk]})
			}
			if(i.customId == 'rampb'){
				await i.update({embeds: [rampb], components: [rb]})
			}
			if(i.customId == 'help'){
				await i.update({embeds: [embed], components: [row] } )
			}
		})
	}
}
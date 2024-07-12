const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
let db = require("../../index.js")
module.exports = {
	name: `helpgk`,
	aliases: [`gkcommands`, `commandsgk`, `gkhelp`, `helpgrass`, `helpknuckles`, `grassknuckleshelp`,
`helpgrassknuckles`, `gkdecks`, `grassknucklesdecks`, `knucklesdecks`, `decksgk`],
	category: `Grass Knuckles(GK)`,
	run: async(client, message, args) => {
		const row = new ActionRowBuilder()
            .addComponents(
							       new ButtonBuilder()
                    .setCustomId('zoolander')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('3i')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const it = new ActionRowBuilder()
            .addComponents(
                     new ButtonBuilder()
                    .setCustomId('helpgk')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('3p')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
		const pe = new ActionRowBuilder()
            .addComponents(
                     new ButtonBuilder()
                    .setCustomId('it')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('bgk')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
		const bgk = new ActionRowBuilder()
            .addComponents(
                     new ButtonBuilder()
                    .setCustomId('pep')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('ba')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
		const ba = new ActionRowBuilder()
            .addComponents(
                     new ButtonBuilder()
                    .setCustomId('bag')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('ccpa')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
							const ccpa = new ActionRowBuilder()
            .addComponents(
                     new ButtonBuilder()
                    .setCustomId('bagr')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('cf')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
		const cring = new ActionRowBuilder()
            .addComponents(
                     new ButtonBuilder()
                    .setCustomId('ccpaggro')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('dk')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
				const dk = new ActionRowBuilder()
            .addComponents(
                     new ButtonBuilder()
                    .setCustomId('crings')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('gotk')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
				const gotk = new ActionRowBuilder()
            .addComponents(
                     new ButtonBuilder()
                    .setCustomId('dknuckles')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('hk')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
							//Healthy Knuckles Buttons 
							const hk = new ActionRowBuilder()
							.addComponents(
									 new ButtonBuilder()
									.setCustomId('otkg')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
												new ButtonBuilder()
													.setCustomId('limb')
													.setLabel('⏭️')
													.setStyle(ButtonStyle.Primary)
											);
			//Limbo
		const limb = new ActionRowBuilder()
            .addComponents(
                     new ButtonBuilder()
                    .setCustomId('hknuckles')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('r3d')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
			//r3d
		const r3d = new ActionRowBuilder()
            .addComponents(
                     new ButtonBuilder()
                    .setCustomId('limbo')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('r3')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
							//Savage Cucc
		const sc = new ActionRowBuilder()
            .addComponents(
                     new ButtonBuilder()
                    .setCustomId('r')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('st')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
							//Savage Tempo
		const st = new ActionRowBuilder()
            .addComponents(
                     new ButtonBuilder()
                    .setCustomId('s')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('svm')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
							//Sweet VM
		const sv = new ActionRowBuilder()
            .addComponents(
                     new ButtonBuilder()
                    .setCustomId('str')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('tk')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
							//Tryknuckles
			const h = new ActionRowBuilder()
            .addComponents(
                     new ButtonBuilder()
                    .setCustomId('sv')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('zoo')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
				//Zoolander
				const zoo = new ActionRowBuilder()
				.addComponents(
						 new ButtonBuilder()
						.setCustomId('tgk')
						.setLabel('🔙')
						.setStyle(ButtonStyle.Primary),
									new ButtonBuilder()
										.setCustomId('help')
										.setLabel('⏭️')
										.setStyle(ButtonStyle.Primary)
								);
let decks = [
	"3int",
	"3-pea",
	"budgetgk",
	"bullseyeaggro",
	"ccpaggro",
	"coffeerings",
	"devinknuckles",
	"grapeotk",
	"healthyknuckles",
	"helpgk",
	"knucklesmop",
	"r3d",
	"randomgk",
	"savagecucumber",
	"savagetempo",
	"sweetvm",
	"tryknuckles",
	"zoolander"
]
let toBuildString = "";
for (let i = 0; i < decks.length; i++) {
	let deck = decks[i];
	toBuildString += `\n<@1043528908148052089> **${deck}**`;
}
							//Help GK Embed
		let embed = new EmbedBuilder()
.setThumbnail("https://static.wikia.nocookie.net/p__/images/4/41/HD_Grass_Knuckles.png/revision/latest?cb=20200105024802&path-prefix=protagonist")
		.setTitle("GK Commands")
		.setDescription(`My commands for Grass Knuckles(GK) are ${toBuildString}`)
		.setColor("Random") 
			.setFooter({text: `To view the Grass Knuckles decks please use the commands listed above or click on the buttons below!
Note: Grass Knuckles has ${decks.length - 3} total decks in Tbot`})
let [result] = await db.query(`SELECT * FROM gkdecks`)
		let int = new EmbedBuilder()
		.setTitle("3INT")
	.setDescription(`${result[2].it3}`)
	.setFooter({text: `${result[1].it3}`})
		.setColor("Random")
				.addFields({name: "Deck Cost", value: `${result[0].it3}`})
		.setImage(`${result[3].it3}`)
		let tp = new EmbedBuilder()
		.setTitle("3-Pea")
		.setDescription(`${result[2].pea3}`)
		.setColor("Random")
		.setFooter({text: `${result[1].pea3}`})
		.setImage(`${result[3].pea3}`)
		.addFields({name: "Deck Cost",
							 	value: `${result[0].pea3}`})
									let gkb = new EmbedBuilder()
									.setTitle("Gk Budget Tempo")
	.setDescription(`${result[2].budgetgk}`)
	.setFooter({text: `${result[1].budgetgk}`})
			.addFields({name: "Deck Cost", value: `${result[0].budgetgk}`})
		.setColor("Random")
.setImage(`${result[3].budgetgk}`)
			let bull = new EmbedBuilder()
			.setTitle("Bullseye Aggro")	
			.setDescription(`${result[2].baggro}`)
	.setFooter({text: `${result[1].baggro}`})
			.addFields({name: "Deck Cost", value: `${result[0].baggro}`})
		.setColor("Random")		
		.setImage(`${result[3].baggro}`)
	let cpaggro = new EmbedBuilder()
	.setTitle("CCP Aggro GK")
        .setDescription(`${result[2].ccpaggro}`)
        .setColor("Random")
        .setFooter({text: `${result[1].ccpaggro}`})
        .setImage(`${result[3].ccpaggro}`)
        .addFields({name: "Deck Cost", value:`${result[0].ccpaggro}`})
		let cf = new EmbedBuilder()
		.setTitle("Coffee Rings")
		.setDescription(`${result[2].coffeerings}`)
		.setFooter({text: `${result[1].coffeerings}`})
				.addFields({name: "Deck Cost", value: `${result[0].coffeerings}`})
			.setColor("Random")
	.setImage(`${result[3].coffeerings}`)
				let dknuckles = new EmbedBuilder()
				.setTitle("Devin Knuckles")
			.setDescription(`${result[2].devinknuckles}`)
		.setColor("Random")
		.setFooter({text: `${result[1].devinknuckles}`})
		.setImage(`${result[3].devinknuckles}`)
		.addFields({name: "Deck Cost", value: `${result[0].devinknuckles}`})
		let otkg = new EmbedBuilder()
		.setTitle("Grape OTK")
		.setDescription(`${result[2].grapeotk}`)
		.setColor("Random")
		.setFooter({text: `${result[1].grapeotk}`})
	.addFields({name: "Deck Cost", value: `${result[0].grapeotk}`})
			.setImage(`${result[3].grapeotk}`)
			//Healthy Knuckles 
			let hknuckles = new EmbedBuilder()
			.setTitle("Healthy Knuckles")
        .setDescription(`${result[2].healthyknuckles}`)
        .setFooter({text: `${result[1].healthyknuckles}`})
        .setColor("Random")
        .addFields({name: "Deck Cost", value:`${result[0].healthyknuckles}`})
        .setImage(`${result[3].healthyknuckles}`)
			//Limbo
			let limbo = new EmbedBuilder()
			.setTitle("Mop Knuckles")
		.setDescription(`${result[2].knucklesmop}`)
		.setFooter({text:`${result[1].knucklesmop}`})
		.setColor("Random")
		.addFields({name: "Deck Cost",
							 	value:`${result[0].knucklesmop}`})
			.setImage(`${result[3].knucklesmop}`)
		
			//R3d
		let r3 = new EmbedBuilder()
		.setTitle("R3d")
		.setDescription(`${result[2].r3d}`)
		.setFooter({text: `${result[1].r3d}`})
					.addFields({name: "Deck Cost", value: `${result[0].r3d}`})
			.setColor("Random")			
			.setImage(`${result[3].r3d}`)
	//Savage Cucc
		let scucc = new EmbedBuilder()
		.setTitle("Savage Cucumber")	
		.setDescription(`${result[2].savagecucumber}`)
.setFooter({text: `${result[1].savagecucumber}`})
		.addFields({name: "Deck Cost", value: `${result[0].savagecucumber}`})
	.setColor("Random")			
	.setImage(`${result[3].savagecucumber}`)
	//Savage Tempo
		let stemp = new EmbedBuilder()
		.setTitle("Savage Tempo")
		.setDescription(`${result[2].savagetempo}`)
		.setFooter({text: `${result[1].savagetempo}`})
				.addFields({name: "Deck Cost", value: `${result[0].savagetempo}`})
			.setColor("Random")
			.setImage(`${result[3].savagetempo}`)
	//Sweet VM
		let svm = new EmbedBuilder()
		.setTitle("Sweet VM")	
			.setDescription(`${result[2].sweetvm}`)
		.setFooter({text: `${result[1].sweetvm}`})
			.addFields({name: "Deck Cost", value: `${result[0].sweetvm}`})	
			.setImage(`${result[3].sweetvm}`)
		.setColor("Random")			
	
	//Tryknuckles 
		let tryk = new EmbedBuilder()
		.setTitle("Try Knuckles")	
		.setDescription(`${result[2].tryknuckles}`)
.setFooter({text: `${result[1].tryknuckles}`})
	.addFields({name: "Deck Cost", value: `${result[0].tryknuckles}`})
.setColor("Random")		
.setImage(`${result[3].tryknuckles}`)
	//Zoolander
	let zoolander = new EmbedBuilder()
	.setTitle(`Zoolander`)
	.setDescription(`${result[2].zoolander}`)
	.setColor('Random')
	.addFields({name: 'Deck Cost:', value: `${result[0].zoolander}`})
	.setFooter({text: `${result[1].zoolander}`})
	.setImage(`${result[3].zoolander}`)
			const m = await	message.channel.send({embeds: [embed], components: [row] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter})
		collector.on('collect', async i => {
			if(i.customId == '3i'){
				i.update({embeds: [int], components:[it]})
			}
			if(i.customId == 'helpgk'){
				await i.update({embeds: [embed], components: [row] } )
			}
			if(i.customId == '3p'){
				await i.update({embeds: [tp], components: [pe]})
			}
			if(i.customId == 'otkg'){
				await i.update({embeds: [otkg], components: [gotk]})
			}
				if(i.customId == 'gotk'){
				await i.update({embeds: [otkg], components: [gotk]})
			}
			//Healthy Knuckles 
			if(i.customId == 'hk'){
				await i.update({embeds: [hknuckles], components: [hk]})
			}
			if(i.customId == 'hknuckles'){
				await i.update({embeds: [hknuckles], components: [hk]})
			}
			if(i.customId == 'it'){
				i.update({embeds: [int], components:[it]})
			}
			if(i.customId == 'bgk'){
				await i.update({embeds: [gkb], components: [bgk]})
			}
			//CCP Aggro
			if(i.customId == 'ccpa'){
				await i.update({embeds: [cpaggro], components:[ccpa]})
			}
			if(i.customId == 'ccpaggro'){
				await i.update({embeds: [cpaggro], components:[ccpa]})
			}
			if(i.customId == 'pep'){
				await i.update({embeds: [tp], components: [pe]})
			}
			//Devin Knuckles
			if(i.customId == 'dk'){
				await i.update({embeds: [dknuckles], components: [dk]})
			}
				if(i.customId == 'dknuckles'){
				await i.update({embeds: [dknuckles], components: [dk]})
			}
			if(i.customId == 'ba'){
				await i.update({embeds: [bull], components: [ba]})
			}
			if(i.customId == 'bag'){
				await i.update({embeds: [gkb], components: [bgk]})
			}
			if(i.customId == 'cf'){
				await i.update({embeds: [cf], components: [cring] })
			}
			if(i.customId == 'crings'){
				await i.update({embeds: [cf], components: [cring] })
			}
			if(i.customId == 'bagr'){
				await i.update({embeds: [bull], components: [ba]})
			}
			if(i.customId == 'r3d'){
				await i.update({embeds: [r3], components: [r3d]})
			}
			if(i.customId == 'limbo'){
				await i.update({embeds: [limbo], components: [limb] })
			}
			if(i.customId == 'limb'){
				await i.update({embeds: [limbo], components: [limb] })
			}
			if(i.customId == 'r3'){
				await i.update({embeds: [scucc], components: [sc]})
			}
			if(i.customId == 'r'){
				await i.update({embeds: [r3], components: [r3d]})
			}
			if(i.customId == 'st'){
				await i.update({embeds: [stemp], components: [st]})
			}
			if(i.customId == 's'){
				await i.update({embeds: [scucc], components: [sc]})
			}
			if(i.customId == 'svm'){
				await i.update({embeds: [svm], components: [sv]})
			}
			if(i.customId == 'str'){
				await i.update({embeds: [stemp], components: [st]})
			}
			if(i.customId == 'tk'){
				await i.update({embeds: [tryk], components: [h]})
			}
			if(i.customId == 'tgk'){
				await i.update({embeds: [tryk], components: [h]})
			}
			//Zoolander
			if(i.customId == 'zoo'){
				await i.update({embeds: [zoolander], components: [zoo]})
			}
			if(i.customId == 'zoolander'){
				await i.update({embeds: [zoolander], components: [zoo]})
			}
			if(i.customId == 'help'){
				await i.update({embeds: [embed], components: [row] } )
			}
			if(i.customId == 'sv'){
				await i.update({embeds: [svm], components: [sv]})
			}
		})
	}
}
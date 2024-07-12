const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
let db = require("../../index.js");
module.exports = {
	name: `helpgs`,
	aliases: [`gscommands`, `commandsforgs`, `gshelp`, `helpgreen`, `helpshadow`, `gsdecks`, `decksgs`, `greenshadowhelp`, `shadowhelp`, `shadowdecks`, `greenshadowdecks`],
	category: `Green Shadow(GS)`,
	run: async(client, message, args) =>	{
			const row = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('yuletide')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('100')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const wr = new ActionRowBuilder()
            .addComponents(
							          new ButtonBuilder()
                    .setCustomId('helpgs')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('ab')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const ab = new ActionRowBuilder()
            .addComponents(
									new ButtonBuilder()
                    .setCustomId('wr')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('bb')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const bb = new ActionRowBuilder()
            .addComponents(
									new ButtonBuilder()
                    .setCustomId('abeans')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('budget')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const budget = new ActionRowBuilder()
            .addComponents(
							          new ButtonBuilder()
                    .setCustomId('bbeans')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('jb')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const jbe = new ActionRowBuilder()
            .addComponents(
							          new ButtonBuilder()
                    .setCustomId('bud')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('mid')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const mids = new ActionRowBuilder()
            .addComponents(
							          new ButtonBuilder()
                    .setCustomId('jbe')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('mill')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const mill = new ActionRowBuilder()
            .addComponents(
							 new ButtonBuilder()
                    .setCustomId('mids')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('mb')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const mb = new ActionRowBuilder()
            .addComponents(
							 new ButtonBuilder()
                    .setCustomId('mids')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('tp')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const tpeas = new ActionRowBuilder()
            .addComponents(
							 new ButtonBuilder()
                    .setCustomId('mblower')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('smf')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const smflower = new ActionRowBuilder()
            .addComponents(
							 new ButtonBuilder()
                    .setCustomId('tpeas')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('tsu')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
	const tsu = new ActionRowBuilder()
							.addComponents(
											 new ButtonBuilder()
									.setCustomId('smflower')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('yule')
									.setLabel('⏭')
									.setStyle(ButtonStyle.Primary)
											);
			const yule = new ActionRowBuilder()
            .addComponents(
							 new ButtonBuilder()
                    .setCustomId('tsunion')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('help')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
const decks = [
		"100%winrate",
		"abeans",
		"bbeans",
		"budgetmopshadow",
		"helpgs",
		"jbeans",
		"midshadow",
		"millie",
		"mindblower",
		"peatempo",
		"randomgs",
		"savagemayflower",
		"sovietonion",
		,
		"yuletide"
]
let toBuildString = "";
for (let i = 0; i < decks.length; i++) {
	let deck = decks[i];
	toBuildString += `\n<@1043528908148052089> **${deck}**`;
}
			let embed = new EmbedBuilder()
		.setThumbnail("https://cdn.discordapp.com/attachments/1044626284346605588/1090602694206574692/IMG_1903.png")
	.setTitle("GS Commands")
	.setDescription(`My commands for Green Shadow(GS) are ${toBuildString}`)
		.setColor("Random")
				.setFooter({text: `To view the Green Shadow decks please use the commands listed above or click on the buttons below!
Note: Green Shadow has ${decks.length - 3} total decks in Tbot`})
let [result] = await db.query(`SELECT * from gsdecks`);
		let test = new EmbedBuilder()
		.setTitle("100% Winrate")
		.setDescription(`${result[2].wr100}`)
		.setFooter({text: `${result[1].wr100}`})
				.addFields({name: "Deck Cost", value: `${result[0].wr100}`})
			.setColor("Random")
	.setImage(`${result[3].wr100}`)
			let abean = new EmbedBuilder()
			.setTitle("A-Beans")
			.setDescription(`${result[2].abeans}`)
			.setFooter({text: `${result[1].abeans}`})
					.addFields({name: "Deck Cost", value: `${result[0].abeans}`})
				.setColor("Random")
				.setImage(`${result[3].abeans}`)
		let bbeans = new EmbedBuilder()
		.setTitle("BBeans")
		.setDescription(`${result[2].bbeans}`)
		.addFields({name: "Deck Cost", value: `${result[0].bbeans}`})
		.setColor("Random")
		.setFooter({text: `${result[1].bbeans}`})
		.setImage(`${result[3].bbeans}`)
				let bt = new EmbedBuilder()
				.setTitle("GS Budget Mop")
	.setDescription(`${result[2].budgetgs}`)
	.setFooter({text:`${result[1].budgetgs}`})
			.addFields({name: "Deck Cost", value:`${result[0].budgetgs}`})
		.setColor("Random")
.setImage(`${result[3].budgetgs}`)
				let jb = new EmbedBuilder()
				.setTitle("Jbeans")
				.setDescription(`${result[2].jbeans}`)
				.setFooter({text: `${result[1].jbeans}`})
						.addFields({name: "Deck Cost", value: `${result[0].jbeans}`})
					.setColor("Random")
			.setImage(`${result[3].jbeans}`)
			let mid = new EmbedBuilder()
			.setTitle("Mid Shadow")	
			.setDescription(`${result[2].midshadow}`)
	.setFooter({text: `${result[1].midshadow}`})
			.addFields({name: "Deck Cost", value: `${result[0].midshadow}`})
		.setColor("Random")					
		.setImage(`${result[3].midshadow}`)
	
		let mil = new EmbedBuilder()
		.setTitle("Millie")
		.setDescription(`${result[2].millie}`)
		.setColor("Random")
		.setFooter({text: `${result[1].millie}`})
		.addFields({name: "Deck Cost",
							 	value: `${result[0].millie}`})
		.setImage(`${result[3].millie}`)
				let mblower = new EmbedBuilder()
				.setTitle("Mind Blower")
				.setDescription(`${result[2].mindblower}`)
				.setColor("Random")
				.setFooter({text: `${result[1].mindblower}`})
			.addFields({name: "Deck Cost", value: `${result[0].mindblower}`})
				.setImage(`${result[3].mindblower}`)
		let pt = new EmbedBuilder()
		.setTitle("Igma Pea Tempo")
		.setDescription(`${result[2].peatempo}`)
		.setColor("Random")
		.setImage(`${result[3].peatempo}`)
		.addFields({name: "Deck Cost",
							 	value: `${result[0].peatempo}`})
		.setFooter({text: `${result[1].peatempo}`})
		let smf = new EmbedBuilder()
		.setTitle("Savage Mayflower")
		.setDescription(`${result[2].savagemayflower}`)
		.setColor("Random")
		.addFields({name: "Deck Cost", value:`${result[0].savagemayflower}`})
		.setFooter({text: `${result[1].savagemayflower}`})
		.setImage(`${result[3].savagemayflower}`)
	let tsunion = new EmbedBuilder()
	.setTitle("The Soviet Onion")
	.setDescription(`${result[2].sovietonion}`)
	.setFooter({text: `${result[1].sovietonion}`})
	.addFields({name: "Deck Cost", value: `${result[0].sovietonion}`})
	.setColor("Random")
	.setImage(`${result[3].sovietonion}`)
		let yuletide = new EmbedBuilder()
		.setTitle("Yuletide")
	.setDescription(`${result[2].yuletide}`)
	.setFooter({text:`${result[1].yuletide}`})
			.addFields({name: "Deck Cost", value: `${result[0].yuletide}`})
		.setColor("Random")
.setImage(`${result[3].yuletide}`)
	
			const m = await	message.channel.send({embeds: [embed], components: [row] } )
			const Filter = i => i.user.id === message.author.id
			const collect = m.createMessageComponentCollector({filter: Filter})
		collect.on('collect', async i  => {
				if(i.customId == '100'){
					await i.update({embeds: [test], components: [wr]})
				}
			if(i.customId == 'helpgs'){
				await i.update({embeds: [embed], components: [row] })
			}
			if(i.customId == 'ab'){
				await i.update({embeds: [abean], components: [ab]})
			}
			if(i.customId == 'wr'){
					await i.update({embeds: [test], components: [wr]})
				}
			if(i.customId == 'abeans'){
				await i.update({embeds: [abean], components: [ab]})
			}
			if(i.customId == 'bb'){
				await i.update({embeds: [bbeans], components: [bb]})
			}
				if(i.customId == 'bbeans'){
				await i.update({embeds: [bbeans], components: [bb]})
			}
			if(i.customId == 'budget'){
				await i.update({embeds: [bt], components: [budget]})
			}
			if(i.customId == 'yule'){
				await i.update({embeds: [yuletide], components: [yule]})
			}
			if(i.customId == 'mb'){
				await i.update({embeds: [mblower], components: [mb]})
			}
				if(i.customId == 'mblower'){
				await i.update({embeds: [mblower], components: [mb]})
			}
				if(i.customId == 'yuletide'){
				await i.update({embeds: [yuletide], components: [yule]})
			}
			if(i.customId == 'bud'){
				await i.update({embeds: [bt], components: [budget]})
			}
			if(i.customId == 'jb'){
				await i.update({embeds: [jb], components: [jbe]})
			}
			if(i.customId == 'jbe'){
					await i.update({embeds: [jb], components: [jbe]})
			}
			if(i.customId == 'mid'){
				await i.update({embeds: [mid], components: [mids]})
			}
		
					if(i.customId == 'mids'){
				await i.update({embeds: [mid], components: [mids]})
			}
			if(i.customId == 'mill'){
				await i.update({embeds: [mil], components: [mill]})
			}
			if(i.customId == 'millie'){
				await i.update({embeds: [mil], components: [mill]})
			}
			if(i.customId == 'smf'){
				await i.update({embeds: [smf], components: [smflower]})
			}
			if(i.customId == 'smflower'){
				await i.update({embeds: [smf], components: [smflower]})
			}
				if(i.customId == 'help'){
				await i.update({embeds: [embed], components: [row] })
			}
			if(i.customId == 'tsu'){
				await i.update({embeds: [tsunion], components: [tsu]})
			}
			if(i.customId == 'tsunion'){
				await i.update({embeds: [tsunion], components: [tsu]})
			}
			if(i.customId == 'tp'){
				await i.update({embeds: [pt], components: [tpeas]})
			}
					if(i.customId == 'tpeas'){
				await i.update({embeds: [pt], components: [tpeas]})
			}
		})
	}
	}
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
let db = require("../../index.js");
module.exports = {
	name: `helpnc`,
	aliases: [`nccommands`, `commandsnc`, `nchelp`, `helpnightcap`, `nightcaphelp`, `helpcap`, 
`helpnight`,`nightcapdecks`, `ncdecks`, `capdecks`],
	category: `NightCap(NC)`,
		run: async(client, message, args) => {
			const row = new ActionRowBuilder()
            .addComponents(
							 new ButtonBuilder()
                    .setCustomId('speed')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('bc')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
							const bc = new ActionRowBuilder()
							.addComponents(
											 new ButtonBuilder()
									.setCustomId('helpnc')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('bnc')
									.setLabel('⏭')
									.setStyle(ButtonStyle.Primary)
											);
					const bnc = new ActionRowBuilder()
							.addComponents(
								new ButtonBuilder()
									.setCustomId('bclones')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
												new ButtonBuilder()
													.setCustomId('bcy')
													.setLabel('⏭️')
													.setStyle(ButtonStyle.Primary)
										);
								//budgetcyburn
								const bcy = new ActionRowBuilder()
										.addComponents(
											new ButtonBuilder()
												.setCustomId('ncbud')
												.setLabel('🔙')
												.setStyle(ButtonStyle.Primary),
															new ButtonBuilder()
																.setCustomId('buff')
																.setLabel('⏭️')
																.setStyle(ButtonStyle.Primary)
													);
			const buff = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('cybud')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('cyb')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
				const cyb = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('buf')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('cyg')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
				const cygg = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('cburn')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('gp')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
				const gp= new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('cygg')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('hs')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
			const hs= new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('gpp')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('js')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
			const js= new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('hsw')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('mc')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
			const mc= new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('joa')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('sp')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
			const sp = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('mid')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('help')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
let decks = [
	"brainclones",
	"budgetnc",
	"budgetcyburn",
	"buffswarm",
	"cyburn",
	"cyggro",
	"gangstaparadise",
	"helpnc",
	"hyperswarm",
	"joashrooms",
	"midcap",
	"randomnc",
	"speeddemon",
	
]
let toBuildString = "";
for (let i = 0; i < decks.length; i++) {
	let deck = decks[i];
	toBuildString += `\n<@1043528908148052089> **${deck}**`;
}
			let embed = new EmbedBuilder()
      .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/32/HD_Night_Cap%27s_victory_pose.png/revision/latest?cb=20160507044044")
			.setTitle("NC Commands")
			.setDescription(`My commands for NightCap(NC) are ${toBuildString}`)
				.setColor("Random")
				.setFooter({text: `To view the NightCap decks please use the commands listed above or click on the buttons below!
Note: NightCap has ${decks.length -3 } total decks in Tbot`})
let [result] = await db.query(`SELECT * from ncdecks`);
				let bclones = new EmbedBuilder()
				.setTitle("BrainClones")
				.setDescription(`${result[2].brainclones}`)
				.setColor("Random")
				.setFooter({text: `${result[1].brainclones}`})
				.addFields({name: "Deck Cost", value: `${result[0].brainclones}`})
		.setImage(`${result[3].brainclones}`)
			let ncb = new EmbedBuilder()
			.setTitle("NC Budget Cyburn")
                .setDescription(`${result[2].budgetcyburn}`)
                .setFooter({text: `${result[1].budgetcyburn}`})
                .addFields({name: "Deck Cost", value: `${result[0].budgetcyburn}`})
                .setColor("Random")
                .setImage(`${result[3].budgetcyburn}`)
		//budgetcyburn
		let budgetcyburn = new EmbedBuilder()
		.setTitle("NC Budget Swarm")
	.setDescription(`${result[2].budgetnc}`)
	.setFooter({text: `${result[1].budgetnc}`})
			.addFields({name: "Deck Cost", value: `${result[0].budgetnc}`})
		.setColor("Random")
.setImage(`${result[3].budgetnc}`)
		//buffswarm	
		let bs = new EmbedBuilder()
		.setTitle("Buff Swarm")	
			.setDescription(`${result[2].buffswarm}`)
	.setFooter({text: `${result[1].buffswarm}`})
			.addFields({name: "Deck Cost", value: `${result[0].buffswarm}`})
		.setColor("Random")
.setImage(`${result[3].buffswarm}`)
			let cy = new EmbedBuilder()
			.setTitle("Cyburn")
			.setDescription(`${result[2].cyburn}`)
			.setFooter({text: `${result[1].cyburn}`})
					.addFields({name: "Deck Cost", value:`${result[0].cyburn}`})
				.setColor("Random")
				.setImage(`${result[3].cyburn}`)
			let cyg = new EmbedBuilder()
			.setTitle("Cyggro")
			.setDescription(`${result[2].cyggro}`)
			.setFooter({text: `${result[1].cyggro}`})
					.addFields({name: "Deck Cost", value: `${result[0].cyggro}`})
				.setColor("Random")	
				.setImage(`${result[3].cyggro}`)
			
			let gangster = new EmbedBuilder()
			.setTitle("Gangsta's Paradise")
			.setDescription(`${result[2].gangstaparadise}`)
		.setColor("Random")
		.addFields({name: "Deck Cost", value: `${result[0].gangstaparadise}`})	
		.setImage(`${result[3].gangstaparadise}`)
		.setFooter({text: `${result[1].gangstaparadise}`})
		
			let hswarm = new EmbedBuilder()
			.setTitle("Hyper Swarn")	
			.setDescription(`${result[2].hyperswarm}`)
	.setFooter({text: `${result[1].hyperswarm}`})
			.addFields({name: "Deck Cost", value: `${result[0].hyperswarm}`})
		.setColor("Random")		
		.setImage(`${result[3].hyperswarm}`)
			let joa = new EmbedBuilder()
			.setTitle("Joa Shrooms")
			.setDescription(`${result[2].joashrooms}`)
			.setFooter({text: `${result[1].joashrooms}`})
					.addFields({name: "Deck Cost", value: `${result[0].joashrooms}`})
				.setColor("Random")
				.setImage(`${result[3].joashrooms}`)
			let mid = new EmbedBuilder()
			.setTitle("Midcap")
			.setDescription(`${result[2].midcap}`)
			.setFooter({text: `${result[1].midcap}`})
					.addFields({name: "Deck Cost", value:`${result[0].midcap}`})
				.setColor("Random")		
				.setImage(`${result[3].midcap}`)
			let spd = new EmbedBuilder()
			.setTitle("Speed Demon")
			.setDescription(`${result[2].speeddemon}`)
			.setFooter({text:`${result[1].speeddemon}`})
					.addFields({name: "Deck Cost", value: `${result[0].speeddemon}`})
				.setColor("Random")		
			.setImage(`${result[3].speeddemon}`)
		const m = await	message.channel.send({embeds: [embed], components: [row] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter})
			collector.on('collect', async i=> {
				if(i.customId == 'ncbud'){
					await i.update({embeds: [ncb], components: [bnc]})
				}
				if(i.customId == 'helpnc'){
					await i.update({embeds: [embed], components: [row] } )
				}
				if(i.customId == 'buf'){
					await i.update({embeds: [bs], components: [buff]})
				}
				if(i.customId == 'bnc'){
					await i.update({embeds: [ncb], components: [bnc]})
				}
				if(i.customId == 'bc'){
					await i.update({embeds: [bclones], components: [bc]})
				}
					if(i.customId == 'bclones'){
					await i.update({embeds: [bclones], components: [bc]})
				}
				if(i.customId == 'cyb'){
					await i.update({embeds: [cy], components: [cyb]})
				}
				//budgetcyburn
				if(i.customId == 'cybud'){
					await i.update({embeds: [budgetcyburn], components: [bcy]})
				}
				if(i.customId == 'bcy'){
					await i.update({embeds: [budgetcyburn], components: [bcy]})
				}
				if(i.customId == 'buff'){
				await i.update({embeds: [bs], components: [buff]})	
				}
				if(i.customId == 'cyg'){
					await i.update({embeds: [cyg], components: [cygg]})
				}
				if(i.customId == 'cburn'){
					await i.update({embeds: [cy], components: [cyb]})
				}
				if(i.customId == 'cygg'){
					await i.update({embeds: [cyg], components: [cygg]})
				}
				if(i.customId == 'gp'){
					await i.update({embeds: [gangster], components: [gp]})
				}
				if(i.customId == 'hs'){
					await i.update({embeds: [hswarm], components: [hs]})
				}
				if(i.customId == 'gpp'){
						await i.update({embeds: [gangster], components: [gp]})
				}
				if(i.customId == 'js'){
					await i.update({embeds: [joa], components: [js]})
				}
				if(i.customId == 'hsw'){
					await i.update({embeds: [hswarm], components: [hs]})
				}
				if(i.customId == 'mc'){
					await i.update({embeds: [mid], components: [mc]})
				}
				if(i.customId == 'joa'){
					await i.update({embeds: [joa], components: [js]})
				}
				if(i.customId == 'sp'){
					await i.update({embeds: [spd], components: [sp]})
				}
				if(i.customId == 'speed'){
					await i.update({embeds: [spd], components: [sp]})
				}
				if(i.customId == 'mid'){
					await i.update({embeds: [mid], components: [mc]})
				}
				if(i.customId == 'help'){
					await i.update({embeds: [embed], components: [row] } )
				}
			})
		}
}
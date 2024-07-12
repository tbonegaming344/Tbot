const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
let db = require("../../index.js");
module.exports = {
	name: `rose`,
	aliases: [`ro`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
			const cmd = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
			.setCustomId('cmd')
			.setLabel('RO Commands')
			.setEmoji('<:DeadInside:1100168228027760800>')
			.setStyle(ButtonStyle.Primary)
		)
			const row = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
							  .setCustomId('vmid')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('br')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
							const br = new ActionRowBuilder()
							.addComponents(
								new ButtonBuilder()
									.setCustomId('helpro')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
												new ButtonBuilder()
													.setCustomId('comb')
													.setLabel('⏭️')
													.setStyle(ButtonStyle.Primary)
											);
						const comb = new ActionRowBuilder()
							.addComponents(
								new ButtonBuilder()
									.setCustomId('budro')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
												new ButtonBuilder()
													.setCustomId('fr')
													.setLabel('⏭️')
													.setStyle(ButtonStyle.Primary)
											);
								const fr = new ActionRowBuilder()
							.addComponents(
								new ButtonBuilder()
									.setCustomId('com')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
												new ButtonBuilder()
													.setCustomId('fmr')
													.setLabel('⏭️')
													.setStyle(ButtonStyle.Primary)
											);
						const fmid = new ActionRowBuilder()
							.addComponents(
								new ButtonBuilder()
									.setCustomId('freal')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
												new ButtonBuilder()
													.setCustomId('hmr')
													.setLabel('⏭️')
													.setStyle(ButtonStyle.Primary)
											);
						const healmid = new ActionRowBuilder()
							.addComponents(
								new ButtonBuilder()
									.setCustomId('fmid')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
												new ButtonBuilder()
													.setCustomId('mid')
													.setLabel('⏭️')
													.setStyle(ButtonStyle.Primary)
											);
						const mid = new ActionRowBuilder()
							.addComponents(
								new ButtonBuilder()
									.setCustomId('hm')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
												new ButtonBuilder()
													.setCustomId('omr')
													.setLabel('⏭️')
													.setStyle(ButtonStyle.Primary)
											);
						const omid = new ActionRowBuilder()
							.addComponents(
								new ButtonBuilder()
									.setCustomId('midr')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
												new ButtonBuilder()
													.setCustomId('rmr')
													.setLabel('⏭️')
													.setStyle(ButtonStyle.Primary)
											);
						const rmr = new ActionRowBuilder()
							.addComponents(
								new ButtonBuilder()
									.setCustomId('omid')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
												new ButtonBuilder()
													.setCustomId('vm')
													.setLabel('⏭️')
													.setStyle(ButtonStyle.Primary)
											);
							const vm = new ActionRowBuilder()
							.addComponents(
								new ButtonBuilder()
									.setCustomId('rm')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
												new ButtonBuilder()
													.setCustomId('help')
													.setLabel('⏭️')
													.setStyle(ButtonStyle.Primary)
											);
		let ro = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/vsbattles/images/1/1f/RosePVZ.png/revision/latest?cb=20181016204100")
		.setTitle("Rose | <:Smarty:1062502890448638022><:Solar:1062502678384607262>")
		.setDescription("**- Flower Hero  -**")
		.setColor("Random")
		
		.addFields({name: "Superpowers",
							 value: "Transmogrify <:Smarty:1062502890448638022> \n Transform a Zombie into a random Zombie that costs 1<:Brainz:1062503146745774183>. \nBig Chill <:Smarty:1062502890448638022> \n <:IceCube:1008531889906253937>Freeze a Zombie. \n Draw a card. \nWeed Whack <:Solar:1062502678384607262> \n A Zombies gets -2<:Strength:1062501774612779039>/-2<:Health:1062515540712751184>. \nGoatify <:Smarty:1062502890448638022><:Solar:1062502678384607262> \n Transform a Zombie with the highest Strength into a Goat. \n Goat 1<:Strength:1062501774612779039>/1<:Health:1062515540712751184>, Gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> when any Goat is hurt. "},
						{
								name: "Set-Rarity",
								value: "**Premium - Hero**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Refuses to be nerfed."
							 })
							 let decks = [
								"budgetro",
								"combose",
								"freezeheal",
								"frymidrose",
								"healmidrose",
								"helpro",
								"midrose",
								"oldmidrose",
								"rampmidrose",
								"randomro",
								"violetmid",
								
							]
	let toBuildString = "";
	for (let i = 0; i < decks.length; i++) {
		let deck = decks[i];
		toBuildString += `\n<@1043528908148052089> **${deck}**`;
	}
	let embed = new EmbedBuilder()
	.setThumbnail("https://static.wikia.nocookie.net/pvzcc/images/2/2f/RoseBYL.png/revision/latest?cb=20200707025517")
	.setTitle("RO Commands")
	.setDescription(`My commands for Rose(RO) are ${toBuildString}`)
	.setColor("Random")
	.setFooter({text: `To view the Rose decks please use the commands listed above or click on the buttons below!
Note: Rose has ${decks.length - 3} total decks in Tbot`})
let [result] = await db.query(`SELECT * from rodecks`);
let bmh = new EmbedBuilder()
.setTitle("Budget Heal Midrose")
.setDescription(`${result[2].budgetro}`)
.setFooter({text:`${result[1].budgetro}`})
		.addFields({name: "Deck Cost", value: `${result[0].budgetro}`})
	.setColor("Random")
.setImage(`${result[3].budgetro}`)
let com = new EmbedBuilder()
.setTitle("Combose")	
.setDescription(`${result[2].combose}`)
.setFooter({text:`${result[1].combose}`})
.addFields({name: "Deck Cost", value: `${result[0].combose}`})
.setColor("Random")			
.setImage(`${result[3].combose}`)
let freal = new EmbedBuilder()
.setTitle("Freeze Heal")
.setDescription(`${result[2].freezeheal}`)
.setFooter({text: `${result[1].freezeheal}`})
.setColor("Random")
.addFields({name: "Deck Cost", value: `${result[0].freezeheal}`})
.setImage(`${result[3].freezeheal}`)
let fmr = new EmbedBuilder()
.setTitle("Fry Midrose")
.setDescription(`${result[2].frymidrose}`)
.setFooter({text: `${result[1].frymidrose}`})
		.addFields({name: "Deck Cost", value: `${result[0].frymidrose}`})
	.setColor("Random")
.setImage(`${result[3].frymidrose}`)

let hmr = new EmbedBuilder()
.setTitle("Heal Midrose")
.setDescription(`${result[2].hmr}`)
.setFooter({text: `${result[1].hmr}`})
		.addFields({name: "Deck Cost", value: `${result[0].hmr}`})
	.setColor("Random")
	.setImage(`${result[3].hmr}`)
let mr = new EmbedBuilder()
.setTitle("Mid Rose")
.setDescription(`${result[2].midrose}`)
.setFooter({text: `${result[1].midrose}`})
		.addFields({name: "Deck Cost", value: `${result[0].midrose}`})
	.setColor("Random")
	.setImage(`${result[3].midrose}`)
let omr = new EmbedBuilder()
.setTitle("Old Midrose")	
.setDescription(`${result[2].oldmidrose}`)
.setFooter({text: `${result[1].oldmidrose}`})
.addFields({name: "Deck Cost", value: `${result[0].oldmidrose}`})
.setColor("Random")					
.setImage(`${result[3].oldmidrose}`)

let ramp = new EmbedBuilder()
.setTitle("Ramp Midrose")
.setDescription(`${result[2].rampmidrose}`)
.setFooter({text:`${result[1].rampmidrose}`})
	.setColor("Random")
			.addFields({name: "Deck Cost", value: `${result[0].rampmidrose}`})	
			.setImage(`${result[3].rampmidrose}`)
let vmid = new EmbedBuilder()
.setTitle("Violet Mid")
.setDescription(`${result[2].violetmid}`)
.setFooter({text: `${result[1].violetmid}`})
		.addFields({name: "Deck Cost", value:`${result[0].violetmid}`})
	.setColor("Random")
.setImage(`${result[3].violetmid}`)
	const m = await	message.channel.send({embeds: [ro], components: [cmd] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter})
		collector.on('collect', async i => {
			if(i.customId == 'br'){
				await i.update({embeds: [bmh], components: [br]})
			}
			if(i.customId == 'cmd'){
					await i.update({embeds: [embed], components: [row] } )
				}
						if(i.customId == 'fr'){
				await i.update({embeds: [freal], components: [fr]})
			}
					if(i.customId == 'freal'){
				await i.update({embeds: [freal], components: [fr]})
			}
			if(i.customId == 'helpro'){
				await i.update({embeds: [embed], components: [row] } )
			}
			if(i.customId == 'comb'){
				await i.update({embeds: [com], components: [comb]})
			}
			if(i.customId == 'budro'){
				await i.update({embeds: [bmh], components: [br]})
			}
			if(i.customId == 'fmr'){
				await i.update({embeds: [fmr], components: [fmid]})
			}
			if(i.customId == 'com'){
				await i.update({embeds: [com], components: [comb]})
			}
			if(i.customId == 'hmr'){
				await i.update({embeds: [hmr], components: [healmid]})
			}
			if(i.customId == 'fmid'){
				await i.update({embeds: [fmr], components: [fmid]})
			}
			if(i.customId == 'mid'){
				await i.update({embeds: [mr], components: [mid]})
			}
			if(i.customId == 'hm'){
				await i.update({embeds: [hmr], components: [healmid]})
			}
			if(i.customId == 'omr'){
				await i.update({embeds: [omr], components: [omid]})
			}
			if(i.customId == 'midr'){
				await i.update({embeds: [mr], components: [mid]})
			}
			if(i.customId == 'rmr'){
				await i.update({embeds: [ramp], components: [rmr]})
			}
			if(i.customId == 'omid'){
				await i.update({embeds: [omr], components: [omid]})
			}
			if(i.customId == 'rm'){
				await i.update({embeds: [ramp], components: [rmr]})
			}
			if(i.customId == 'vm'){
				await i.update({embeds: [vmid], components: [vm]})
			}
				if(i.customId == 'vmid'){
				await i.update({embeds: [vmid], components: [vm]})
			}
			if(i.customId == 'help'){
				await i.update({embeds: [embed], components: [row] } )
			}
		})
	}
}
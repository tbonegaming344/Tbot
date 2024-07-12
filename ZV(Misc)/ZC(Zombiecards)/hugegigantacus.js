const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
let db = require("../../index.js")
module.exports = {
	name: `hugegigantacus`,
	aliases: [`hg`, `huge`, `gigantacus`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		const row = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
			.setCustomId('teleport')
			.setLabel('Teleport')
			.setStyle(ButtonStyle.Primary)
			.setEmoji('<:teleport:1087160283534991472>'),
				new ButtonBuilder()
			.setCustomId('helphg')
			.setLabel('HG Commands')
			.setStyle(ButtonStyle.Primary)
			.setEmoji('<:hg:1087736553557725217>')
		)
			const jer = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('huge')
                    .setLabel('Huge Gigantacus')
										.setEmoji('<:hg:1087736553557725217>')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('hgh')
                    .setLabel('HG help')
										.setEmoji('<:hg:1087736553557725217>')
                    .setStyle(ButtonStyle.Primary)
							);
		const test = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('tkm')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('bwrap')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
							const bwrap = new ActionRowBuilder()
							.addComponents(
								new ButtonBuilder()
											.setCustomId('helphg')
											.setLabel('🔙')
											.setStyle(ButtonStyle.Primary),
									new ButtonBuilder()
											.setCustomId('bgus')
											.setLabel('⏭')
											.setStyle(ButtonStyle.Primary)
								);
							const bgus = new ActionRowBuilder()
								.addComponents(
												new ButtonBuilder()
										.setCustomId('bwrappers')
										.setLabel('🔙')
										.setStyle(ButtonStyle.Primary),
									new ButtonBuilder()
										.setCustomId('cl')
										.setLabel('⏭')
										.setStyle(ButtonStyle.Primary)
												);
							const cl = new ActionRowBuilder()
								.addComponents(
												new ButtonBuilder()
										.setCustomId('bg')
										.setLabel('🔙')
										.setStyle(ButtonStyle.Primary),
									new ButtonBuilder()
										.setCustomId('ft')
										.setLabel('⏭')
										.setStyle(ButtonStyle.Primary)
												);
								const ft = new ActionRowBuilder()
								.addComponents(
												new ButtonBuilder()
										.setCustomId('cleap')
										.setLabel('🔙')
										.setStyle(ButtonStyle.Primary),
									new ButtonBuilder()
										.setCustomId('ftk')
										.setLabel('⏭')
										.setStyle(ButtonStyle.Primary)
												);
												const ftk = new ActionRowBuilder()
								.addComponents(
												new ButtonBuilder()
										.setCustomId('fti')
										.setLabel('🔙')
										.setStyle(ButtonStyle.Primary),
									new ButtonBuilder()
										.setCustomId('gs')
										.setLabel('⏭')
										.setStyle(ButtonStyle.Primary)
												);
									const gs = new ActionRowBuilder()
								.addComponents(
												new ButtonBuilder()
										.setCustomId('ftkill')
										.setLabel('🔙')
										.setStyle(ButtonStyle.Primary),
									new ButtonBuilder()
										.setCustomId('gster')
										.setLabel('⏭')
										.setStyle(ButtonStyle.Primary)
												);
							const gster = new ActionRowBuilder()
								.addComponents(
												new ButtonBuilder()
										.setCustomId('gstache')
										.setLabel('🔙')
										.setStyle(ButtonStyle.Primary),
									new ButtonBuilder()
										.setCustomId('gus')
										.setLabel('⏭')
										.setStyle(ButtonStyle.Primary)
												);
								const gus = new ActionRowBuilder()
								.addComponents(
												new ButtonBuilder()
										.setCustomId('gst')
										.setLabel('🔙')
										.setStyle(ButtonStyle.Primary),
									new ButtonBuilder()
										.setCustomId('khg')
										.setLabel('⏭')
										.setStyle(ButtonStyle.Primary)
												);
								const khg = new ActionRowBuilder()
								.addComponents(
												new ButtonBuilder()
										.setCustomId('g')
										.setLabel('🔙')
										.setStyle(ButtonStyle.Primary),
									new ButtonBuilder()
										.setCustomId('lg')
										.setLabel('⏭')
										.setStyle(ButtonStyle.Primary)
												);
								const lg = new ActionRowBuilder()
								.addComponents(
												new ButtonBuilder()
										.setCustomId('k')
										.setLabel('🔙')
										.setStyle(ButtonStyle.Primary),
									new ButtonBuilder()
										.setCustomId('sa')
										.setLabel('⏭')
										.setStyle(ButtonStyle.Primary)
												);
							const sa = new ActionRowBuilder()
								.addComponents(
												new ButtonBuilder()
										.setCustomId('lgcon')
										.setLabel('🔙')
										.setStyle(ButtonStyle.Primary),
									new ButtonBuilder()
										.setCustomId('sw')
										.setLabel('⏭')
										.setStyle(ButtonStyle.Primary)
												);
								const se = new ActionRowBuilder()
								.addComponents(
												new ButtonBuilder()
										.setCustomId('saggro')
										.setLabel('🔙')
										.setStyle(ButtonStyle.Primary),
									new ButtonBuilder()
										.setCustomId('ti')
										.setLabel('⏭')
										.setStyle(ButtonStyle.Primary)
												);
								const ti = new ActionRowBuilder()
								.addComponents(
												new ButtonBuilder()
										.setCustomId('swe')
										.setLabel('🔙')
										.setStyle(ButtonStyle.Primary),
									new ButtonBuilder()
										.setCustomId('ykm')
										.setLabel('⏭')
										.setStyle(ButtonStyle.Primary)
												);
								const ykm = new ActionRowBuilder()
								.addComponents(
												new ButtonBuilder()
										.setCustomId('timps')
										.setLabel('🔙')
										.setStyle(ButtonStyle.Primary),
									new ButtonBuilder()
										.setCustomId('help')
										.setLabel('⏭')
										.setStyle(ButtonStyle.Primary)
												);
		let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/Huge-Gigantacus%27s_victory_pose.png/revision/latest/scale-to-width-down/250?cb=20190116051349")
		.setTitle("Huge-Gigantacus | <:Brainy:1062500939908530246><:Sneaky:1062502187781075094>")
		.setDescription("**- Science Imp Hero  -**")
		.addFields({name: "Superpowers", 
								value: "Iron Boarder <:Brainy:1062500939908530246> \n 2<:Bullseye:1062501003313819678>/3<:Health:1062515540712751184>, <:Bullseye:1062501003313819678>Bullseye, **While in an Environment:** This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>. \n Teleportation Station <:Brainy:1062500939908530246> \n **Start of Turn:** If there's a Zombie here, gain a Teleport. \n Ice Moon <:Sneaky:1062502187781075094> \n Zombies here get <:Strikethrough:1062502987425140806>__Strikethrough__. \n **When played:** <:IceCube:1008531889906253937>__Freeze__ all Plants here. \n Terror-Former 10,000 <:Brainy:1062500939908530246><:Sneaky:1062502187781075094> \n __Conjure__ an Environment. All cards in your hand costs 1<:Brainz:1062503146745774183> less. "},
							 {
								 name: "Set-Rarity", 
								 value: "**Premium - Hero**"
							 },
							 {
								 name: "Flavor Text", 
								 value: "Go on, tell him he's actually quite small. \n See what happens. \n You're not going to like it."
							 })
		.setColor("Random")
		
			let teleport = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/4c/Teleport_HD.png/revision/latest?cb=20181016041010")
			.setTitle("Teleport | <:Brainy:1062500939908530246>")
			.setDescription("**- Science Trick  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "You may play a Zombie when it's time for Tricks this turn. \n Draw a card." 
								 },
								 {
									name: "Set-Rarity", 
									value: "**Premium - Legendary**" 
								 },
								 {
									 name: "Flavor Text", 
									 value: `Feels like cheating.`
								 })
		.setColor("Random")			
	
	let decks= [
		"blobfishwrappers",
		"budgetykm",
		"conjureleap",
		"frozentelimps",
		"firstturnkill",
		"gravestache",
		"gravester",
		"gus",
		"helphg",
		"kitchenhg",
		"lgconjure",
		"randomhg",
		"sushiaggro",
		"sweap",
		"telimps",
		,
		"ykm"
	]
	let toBuildString = "";
	for(let i = 0; i < decks.length; i++){
		toBuildString += `\n<@1043528908148052089> **${decks[i]}**`
	}
		let hghelp= new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/Huge-Gigantacus%27s_victory_pose.png/revision/latest/scale-to-width-down/250?cb=20190116051349")
		.setTitle("Help HG")
.setDescription(`My commands for Huge-Gigantacus(HG) are ${toBuildString}`)
		.setColor("Random")
			.setFooter({text: `To view the Huge Gigantacus decks please use the commands listed above or click on the buttons below!
Note: there are ${decks.length - 3 } total decks for Huge Gigantacus in Tbot`})
let [result] = await db.query(`SELECT * FROM hgdecks`)
			let bwrappers = new EmbedBuilder()
			.setTitle("Blobfish Wrappers")	
			.setDescription(`${result[2].blobfishwrappers}`)
	.setFooter({text:`${result[1].blobfishwrappers}`})
			.addFields({name: "Deck Cost", value: `${result[0].blobfishwrappers}`})
		.setColor("Random")			
		.setImage(`${result[3].blobfishwrappers}`)
		let bg = new EmbedBuilder()
.setTitle("Budget YKM")
.setDescription(`${result[2].budgetykm}`)
.setFooter({text: `${result[1].budgetykm}`})
		.addFields({name: "Deck Cost", value: `${result[0].budgetykm}`})
	.setColor("Random")
.setImage(`${result[3].budgetykm}`)
		let cleap = new EmbedBuilder()
		.setTitle("Conjure Leap")	
			.setDescription(`${result[2].conjureleap}`)
	.setFooter({text: `${result[1].conjureleap}`})
			.addFields({name: "Deck Cost", value: `${result[0].conjureleap}`})
		.setColor("Random")			
		.setImage(`${result[3].conjureleap}`)
		let fti = new EmbedBuilder()
		.setTitle("Softcore Bigfeet Fetish")
		.setDescription(`${result[2].frozentelimps}`)
	.setColor("Random")
		.setImage(`${result[3].frozentelimps}`)
		.addFields({name: "Deck Cost", 
							 	value: `${result[0].frozentelimps}`})
		.setFooter({text: `${result[1].frozentelimps}`})
		let ftkill = new EmbedBuilder() 
        .setTitle("First Turn Kill")
        .setDescription(`${result[2].ftk}`)
        .setColor("Random")
        .setFooter({text: `${result[1].ftk}`})
        .addFields({name: "Deck Cost", value:`${result[0].ftk}`})
        .setImage(`${result[3].ftk}`)
		let gstache = new EmbedBuilder()
		.setTitle("Gravestache")
		.setDescription(`${result[2].gravestache}`)
		.addFields({name: "Deck Cost",
							 	value: `${result[0].gravestache}`})
		.setFooter({text: `${result[1].gravestache}`})
		.setColor("Random")
			.setImage(`${result[3].gravestache}`)
		let gr = new EmbedBuilder()
		.setTitle("Gravester")	
			.setDescription(`${result[2].gravester}`)
	.setFooter({text:`${result[1].gravester}`})
			.addFields({name: "Deck Cost", value:`${result[0].gravester}`})	
			.setImage(`${result[3].gravester}`)
		.setColor("Random")			
		let g = new EmbedBuilder()
		.setTitle("Gus")
	.setDescription(`${result[2].gus}`)
	.setFooter({text: `${result[1].gus}`})
			.addFields({name: "Deck Cost", value: `${result[0].gus}`})
		.setColor("Random")
.setImage(`${result[3].gus}`)
		let k = new EmbedBuilder()
		.setTitle("Kitchen Sink Has Everything")
		.setDescription(`${result[2].kitchenhg}`)
		.setFooter({text: `${result[1].kitchenhg}`})
		.addFields({name: "Deck Cost", value: `${result[0].kitchenhg}`})
	.setColor("Random")
.setImage(`${result[3].kitchenhg}`)

		let lgcon = new EmbedBuilder()
		.setTitle("LG Conjure")	
		.setDescription(`${result[2].lgconjure}`)
.setFooter({text: `${result[1].lgconjure}`})
		.addFields({name: "Deck Cost", value: `${result[0].lgconjure}`})
		.setImage(`${result[3].lgconjure}`)
	.setColor("Random")		
		let saggro = new EmbedBuilder()
		.setTitle("Sushi Aggro")	
		.setDescription(`${result[2].sushiaggro}`)
.setFooter({text: `${result[1].sushiaggro}`})
		.addFields({name: "Deck Cost", value: `${result[0].sushiaggro}`})	
		.setImage(`${result[3].sushiaggro}`)
	.setColor("Random")			
		let swe = new EmbedBuilder()
		.setTitle("Sweap")	
		.setDescription(`${result[2].sweap}`)
.setFooter({text: `${result[1].sweap}`})
		.addFields({name: "Deck Cost", value: `${result[0].sweap}`})
	.setColor("Random")			
	.setImage(`${result[3].sweap}`)
		let timps = new EmbedBuilder()
		.setTitle("Telimps")
		.setDescription(`${result[2].telimps}`)
		.setFooter({text: `${result[1].telimps}`})
				.addFields({name: "Deck Cost", value: `${result[0].telimps}`})
			.setColor("Random")
			.setImage(`${result[3].telimps}`)
			let tkm = new EmbedBuilder()
			.setTitle("YKM")	
			.setDescription(`${result[2].ykm}`)
	.setFooter({text:`${result[1].ykm}`})
			.addFields({name: "Deck Cost", value: `${result[0].ykm}`})
		.setColor("Random")
		.setImage(`${result[3].ykm}`)
			const t = await	message.channel.send({embeds: [ embed ], components: [row] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = t.createMessageComponentCollector({filter: iFilter})
		collector.on('collect', async i  => {
			if (i.customId == 'teleport')  {
				await i.update({embeds: [ teleport ], components: [jer]} )
			}
			if(i.customId == 'huge'){
				await i.update({embeds: [ embed ], components: [row] } )
			}
			if (i.customId == 'helphg'){
				await i.update({embeds: [hghelp], components: [test]})
			}
				if (i.customId == 'hgh'){
				await i.update({embeds: [hghelp], components: [test]})
			}
			if(i.customId == 'bgus'){
				await i.update({embeds: [bg], components: [bgus]})
			}
			if(i.customId == 'bwrap'){
				await i.update({embeds: [bwrappers], components: [bwrap]})
			}
			if(i.customId == 'bwrappers'){
				await i.update({embeds: [bwrappers], components: [bwrap]})
			}
			if(i.customId == 'helphuge'){
				await i.update({embeds: [hghelp], components: [test]})
			}
			if(i.customId == 'cl'){
				await i.update({embeds: [cleap], components: [cl]})
			}
			if(i.customId == 'bg'){
				await i.update({embeds: [bg], components: [bgus]})
			}
			if(i.customId == 'ft'){
				await i.update({embeds: [fti], components: [ft]})
			}
			if(i.customId == 'cleap'){
				await i.update({embeds: [cleap], components: [cl]})
			}
			if(i.customId == 'gs'){
				await i.update({embeds: [gstache], components: [gs]})
			}
			if(i.customId == 'fti'){
				await i.update({embeds: [fti], components: [ft]})
			}
				//ftk
				if(i.customId == 'ftk'){
					await i.update({embeds: [ftkill], components: [ftk]})
				}
				if(i.customId == 'ftkill'){
					await i.update({embeds: [ftkill], components: [ftk]})
				}
						if(i.customId == 'gstache'){
				await i.update({embeds: [gstache], components: [gs]})
			}
			if(i.customId == 'gster'){
				await i.update({embeds: [gr], components: [gster]})
			}
			if(i.customId == 'gus'){
				await i.update({embeds: [g], components: [gus]})
			}
			if(i.customId == 'g'){
				await i.update({embeds: [g], components: [gus]})
			}
				if(i.customId == 'gst'){
				await i.update({embeds: [gr], components: [gster]})
			}
			if(i.customId == 'id'){
				await i.update({embeds: [impdiff],components: [id]})
			}
			if(i.customId == 'khg'){
				await i.update({embeds: [k], components: [khg]})
			}
			if(i.customId == 'impd'){
				await i.update({embeds: [impdiff],components: [id]})
			}
			if(i.customId == 'lg'){
				await i.update({embeds: [lgcon], components: [lg]})
			}
			if(i.customId == 'k'){
				await i.update({embeds: [k], components: [khg]})
			}
			if(i.customId == 'm'){
				await i.update({embeds: [mid], components: [m]})
			}
			if(i.customId == 'lgcon'){
				await i.update({embeds: [lgcon], components: [lg]})
			}
			if(i.customId == 'sa'){
				await i.update({embeds: [saggro], components: [sa]})
			}
			if(i.customId == 'mid'){
				await i.update({embeds: [mid], components: [m]})
			}
			if(i.customId == 'sw'){
				await i.update({embeds: [swe], components: [se]})
			}	
			if(i.customId == 'swe'){
				await i.update({embeds: [swe], components: [se]})
			}	
			if(i.customId == 'saggro'){
				await i.update({embeds: [saggro], components: [sa]})
			}
			if(i.customId == 'ti'){
				await i.update({embeds: [timps], components: [ti]})
			}
			if(i.customId == 'ykm'){
				await i.update({embeds: [tkm], components: [ykm]})
			}
			if(i.customId == 'timps'){
				await i.update({embeds: [timps], components: [ti]})
			}
			if(i.customId == 'tkm'){
				await i.update({embeds: [tkm], components: [ykm]})
			}
			if(i.customId == 'help'){
				await i.update({embeds: [hghelp], components: [test]})
			}
		})
	}
}
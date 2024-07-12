const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
let db = require("../../index.js");
module.exports = {
	name: `immorticia`,
	aliases: [`im`, `ticia`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		const row = new ActionRowBuilder()
            .addComponents(
              new ButtonBuilder()
                    .setCustomId('Zombats')
                    .setLabel('Zombats')
                    .setStyle(ButtonStyle.Primary)
										.setEmoji('<:zombats:1087159395965734962>'),
								new ButtonBuilder()
			.setCustomId('imhelp')
			.setLabel('IM Commands')
			.setStyle(ButtonStyle.Primary)
			.setEmoji('<:Immorticia_Website:1087749695322988634>')
            );
			const jer = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('huge')
                    .setLabel('Immortica')
										.setEmoji('<:Immorticia_Website:1087749695322988634>')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('hgh')
                    .setLabel('IM help')
										.setEmoji('<:Immorticia_Website:1087749695322988634>')
                    .setStyle(ButtonStyle.Primary)
							);
		const test = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('ycm')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('btoss')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
							const btoss = new ActionRowBuilder()
							.addComponents(
											new ButtonBuilder()
									.setCustomId('helpim')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('bim')
									.setLabel('⏭')
									.setStyle(ButtonStyle.Primary)
											);
							const bim = new ActionRowBuilder()
							.addComponents(
											new ButtonBuilder()
									.setCustomId('blomb')
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
									.setCustomId('bs')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('to')
									.setLabel('⏭')
									.setStyle(ButtonStyle.Primary)
											);
											const to = new ActionRowBuilder()
							.addComponents(
											new ButtonBuilder()
									.setCustomId('bticia')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('ht')
									.setLabel('⏭')
									.setStyle(ButtonStyle.Primary)
											);
						const ht = new ActionRowBuilder()
							.addComponents(
											new ButtonBuilder()
									.setCustomId('tos')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('it')
									.setLabel('⏭')
									.setStyle(ButtonStyle.Primary)
											);
							const it = new ActionRowBuilder()
							.addComponents(
											new ButtonBuilder()
									.setCustomId('hticia')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('otkt')
									.setLabel('⏭')
									.setStyle(ButtonStyle.Primary)
											);
							const otkt = new ActionRowBuilder()
							.addComponents(
											new ButtonBuilder()
									.setCustomId('iticia')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('rim')
									.setLabel('⏭')
									.setStyle(ButtonStyle.Primary)
											);
								const rim = new ActionRowBuilder()
							.addComponents(
											new ButtonBuilder()
									.setCustomId('otk')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('st')
									.setLabel('⏭')
									.setStyle(ButtonStyle.Primary)
											);
						const st = new ActionRowBuilder()
							.addComponents(
											new ButtonBuilder()
									.setCustomId('r')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('stac')
									.setLabel('⏭')
									.setStyle(ButtonStyle.Primary)
											);
								const stac = new ActionRowBuilder()
							.addComponents(
											new ButtonBuilder()
									.setCustomId('stemp')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('tp')
									.setLabel('⏭')
									.setStyle(ButtonStyle.Primary)
											);
							const tp = new ActionRowBuilder()
							.addComponents(
											new ButtonBuilder()
									.setCustomId('stache')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('toa')
									.setLabel('⏭')
									.setStyle(ButtonStyle.Primary)
											);
						const toa = new ActionRowBuilder()
						.addComponents(
							new ButtonBuilder()
										.setCustomId('tpets')
										.setLabel('🔙')
										.setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
										.setCustomId('yc')
										.setLabel('⏭')
										.setStyle(ButtonStyle.Primary)
							);
						const yc = new ActionRowBuilder()
							.addComponents(
											new ButtonBuilder()
									.setCustomId('toast')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('help')
									.setLabel('⏭')
									.setStyle(ButtonStyle.Primary)
											);
		let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/magnificentbaddie/images/d/d1/Immortica.webp/revision/latest?cb=20220530183408")
		.setTitle("Immorticia | <:Brainy:1062500939908530246><:Beastly:1062500894744264714>")
		.setDescription("**- Pet Hero -**")
		.addFields({name: "Superpowers", 
								value: "Summoning <:Brainy:1062500939908530246> \n Make a random Zombie that costs 2<:Brainz:1062503146745774183> or less. \n Evaporate <:Beastly:1062500894744264714> \n Destroy a damaged Plant. \n Draw a card. \n Acid Rain <:Beastly:1062500894744264714> \n All Plants on the Ground get -1<:Strength:1062501774612779039>/-1<:Health:1062515540712751184>. \n Witch's Familiar <:Brainy:1062500939908530246><:Beastly:1062500894744264714> \n Make __Zom-Bats__. "},
							 {
								name: "Set-Rarity", 
								value: "**Premium - Hero**" 
							 },
							 {
								name:  "Flavor Text", 
								value: "Yes, she's a Zombie AND a witch. She believes death is too short to limit oneself."
							 })
		.setColor("Random")
		
					let tes = new EmbedBuilder()
						.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/f5/Zom-Bats_%28Card%29.png/revision/latest/scale-to-width-down/250?cb=20161026140138")
			.setTitle("Zom-Bats | <:Brainy:1062500939908530246><:Beastly:1062500894744264714>")
			.setDescription("**- Pet Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait",  
									value: "__Amphibious__" 
								 },
								 {
									 name: "Ability", 
									 value: "When this hurts a Plant, draw a card."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Token**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Like chihuahuas with wings... and fangs... and a taste for Plants.`
								 })
		.setColor("Random")			
	let decks = [
		"blomboticia",
		"budgetim",
		"burnticia",
		"comboticia",
		"happyticia",
		"igmaticia",
		"otktrickster",
		"rampim",
		"randomim",
		"scimmort",
		"stacheticia",
		"telepets",
		"toaster",
		,
		"ycm"
	]
	let toBuildString = "";
	for (let i = 0; i < decks.length; i++) {
		let deck = decks[i];
		toBuildString += `\n<@1043528908148052089> **${deck}**`
	}
			let helpim = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/magnificentbaddie/images/d/d1/Immortica.webp/revision/latest?cb=20220530183408")
			.setTitle("IM Commmands")
			.setDescription(`My commands for Immorticia(IM) are ${toBuildString}`)
				.setFooter({text: `To view the Immorticia decks please use the commands listed above or click on the buttons below!
Note: Immorticia has ${decks.length - 3} toal decks in Tbot`})
				.setColor("Random")
	
	let [result] = await db.query(`SELECT * FROM imdecks`)
					let blomb = new EmbedBuilder()
					.setTitle("Budget Blomboticia")
					.setDescription(`${result[2].blomboticia}`)
					.setColor("Random")
			.addFields({name: "Deck Cost", value: `${result[0].blomboticia}`})	
				.setImage(`${result[3].blomboticia}`)
					.setFooter({text: `${result[1].blomboticia}`})
				let bs = new EmbedBuilder()
				.setTitle("Budget Blob")	
				.setDescription(`${result[2].budgetim}`)
		.setFooter({text:`${result[1].budgetim}`})
				.addFields({name: "Deck Cost", value: `${result[0].budgetim}`})	
				.setImage(`${result[3].budgetim}`)
			.setColor("Random")				
			let bticia = new EmbedBuilder()
			.setTitle("Burnticia")
				.setDescription(`${result[2].burnticia}`)
				.setFooter({text: `${result[1].burnticia}`})
				.addFields({name: "Deck Cost", value: `${result[0].burnticia}`})
			.setColor("Random")
	.setImage(`${result[3].burnticia}`)
			let hticia = new EmbedBuilder()
			.setTitle("Happyticia")
			.setDescription(`${result[2].happyticia}`)
			.setFooter({text: `${result[1].happyticia}`})
					.addFields({name: "Deck Cost", value: `${result[0].happyticia}`})
				.setColor("Random")
		.setImage(`${result[3].happyticia}`)
				let iticia = new EmbedBuilder()
				.setTitle("Igmaticia")
				.setDescription(`${result[2].igmaticia}`)
				.setFooter({text: `${result[1].igmaticia}`})
						.addFields({name: "Deck Cost", value: `${result[0].igmaticia}`})
					.setColor("Random")
					.setImage(`${result[3].igmaticia}`)
			let otk = new EmbedBuilder()
			.setTitle("OTK Trickster")
			.setDescription(`${result[2].otktrickster}`)
			.setFooter({text:`${result[1].otktrickster}`})
					.addFields({name: "Deck Cost", value: `${result[0].otktrickster}`})
				.setColor("Random")
				.setImage(`${result[3].otktrickster}`)
			let r = new EmbedBuilder()
			.setTitle("Ramp Immorticia")
			.setDescription(`${result[2].rampticia}`)
			.setFooter({text:`${result[1].rampticia}`})
					.addFields({name: "Deck Cost", value:`${result[0].rampticia}`})
				.setColor("Random")		
				.setImage(`${result[3].rampticia}`)
				let stemp = new EmbedBuilder()
				.setTitle("Scimmort")
				.setDescription(`${result[2].scimmort}`)
				.setFooter({text: `${result[1].scimmort}`})
						.addFields({name: "Deck Cost", value: `${result[0].scimmort}`})
					.setColor("Random")
			.setImage(`	${result[3].scimmort}`)
					let stache = new EmbedBuilder()
					.setTitle("Stacheticia")
					.setDescription(`${result[2].stacheticia}`)
					.setColor("Random")
					.addFields({name: "Deck Cost",
											 value: `${result[0].stacheticia}`})
					.setFooter({text: `${result[1].stacheticia}`})
					.setImage(`${result[3].stacheticia}`)
			let tpets = new EmbedBuilder()
			.setTitle("Telepets")
			.setDescription(`${result[2].telepets}`)
			.setFooter({text:`${result[1].telepets}`})
					.addFields({name: "Deck Cost", value: `${result[0].telepets}`})
				.setColor("Random")
		.setImage(`${result[3].telepets}`)
		let toast = new EmbedBuilder()
		.setTitle("Toaster")
			.setDescription(`${result[2].toaster}`)
			.setColor("Random")
			.setFooter({text: `${result[1].toaster}`})
			.addFields({name: "Deck Cost", value: `${result[0].toaster}`})
			.setImage(`${result[3].toaster}`)
				let tos = new EmbedBuilder()
				.setTitle("Comboticia AKA Toss")
				.setDescription(`${result[2].comboticia}`)
				.setFooter({text: `${result[1].comboticia}`})
						.addFields({name: "Deck Cost", value: `${result[0].comboticia}`})
					.setColor("Random")
					.setImage(`${result[3].comboticia}`)
				let ycm = new EmbedBuilder()
				.setTitle("Young Cat Martin")	
				.setDescription(`${result[2].ycm}`)
		.setFooter({text:`${result[1].ycm}`})
				.addFields({name: "Deck Cost", value: `${result[0].ycm}`})
			.setColor("Random")			
				.setImage(`${result[3].ycm}`)
	const m = await	message.channel.send({embeds: [ embed ], components: [row] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter})
		collector.on('collect', async i  => {
			if (i.customId == 'Zombats') {	
				await i.update({embeds: [ tes ], components: [jer]} )
			}
			if(i.customId == 'imhelp'){
				await i.update({embeds: [helpim], components: [test]})
			}
			if(i.customId == 'huge'){
				await i.update({embeds: [ embed ], components: [row] } )
			}
				if(i.customId == 'bim'){
				await i.update({embeds: [bs], components: [bim]})
			}
				if (i.customId == 'hgh'){
				await i.update({embeds: [helpim], components: [test]})
			}
			if(i.customId == 'helpim'){
				await i.update({embeds: [helpim], components: [test]})
			}
			if(i.customId == 'bt'){
				await i.update({embeds:[bticia], components: [bt]})
			}
				if(i.customId == 'bs'){
				await i.update({embeds: [bs], components: [bim]})
			}
			if(i.customId == 'bticia'){
				await i.update({embeds:[bticia], components: [bt]})
			}
			if(i.customId == 'ht'){
				await i.update({embeds: [hticia], components: [ht]})
			}
						if(i.customId == 'hticia'){
				await i.update({embeds: [hticia], components: [ht]})
			}
			if(i.customId == 'it'){
				await i.update({embeds: [iticia], components: [it]})
			}
			if(i.customId == 'otkt'){
				await i.update({embeds: [otk], components: [otkt]})
			}
			if(i.customId == 'toa'){
				await i.update({embeds: [toast], components: [toa]})
			}
			if(i.customId == 'toast'){
				await i.update({embeds: [toast], components: [toa]})
			}
				if(i.customId == 'iticia'){
				await i.update({embeds: [iticia], components: [it]})
			}
			if(i.customId == 'rim'){
				await i.update({embeds: [r], components: [rim]})
			}
			if(i.customId == 'otk'){
				await i.update({embeds: [otk], components: [otkt]})
			}
			if(i.customId == 'st'){
				await i.update({embeds: [stemp], components: [st]})
			}
			if(i.customId == 'r'){
				await i.update({embeds: [r], components: [rim]})
			}
		if(i.customId == 'stemp'){
				await i.update({embeds: [stemp], components: [st]})
			}
			if(i.customId == 'tp'){
				await i.update({embeds: [tpets], components: [tp]})
			}
			if(i.customId == 'to'){
				await i.update({embeds: [tos], components: [to]})
			}
			if(i.customId == 'tpets'){
				await i.update({embeds: [tpets], components: [tp]})
			}
			if(i.customId == 'yc'){
				await i.update({embeds: [ycm], components: [yc]})
			}
			if(i.customId == 'tos'){
				await i.update({embeds: [tos], components: [to]})
			}
					if(i.customId == 'btoss'){
				await i.update({embeds: [blomb], components: [btoss]})
			}
				if(i.customId == 'blomb'){
				await i.update({embeds: [blomb], components: [btoss]})
			}
			if(i.customId == 'ycm'){
				await i.update({embeds: [ycm], components: [yc]})
			}
						if(i.customId == 'stac'){
				await i.update({embeds: [stache], components: [stac]})
			}
			if(i.customId == 'stache'){
				await i.update({embeds: [stache], components: [stac]})
			}
			if(i.customId == 'help'){
				await i.update({embeds: [helpim], components: [test]})
			}
		})
	}
}
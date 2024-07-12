const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
let db = require("../../index.js");
module.exports = {
	name: `citron`,
	aliases: [`ct`, `tron`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
			const cmd = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
			.setCustomId('cmd')
			.setLabel('CT Commands')
			.setEmoji('<:Citron_Pog:1100168420743450654>')
			.setStyle(ButtonStyle.Primary)
		)
		const row = new ActionRowBuilder()
            .addComponents(
							 new ButtonBuilder()
                    .setCustomId('sta')
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
                    .setCustomId('helpbc')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('cou')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
			const bct = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('bct')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('elu')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
		const cycle = new ActionRowBuilder()
            .addComponents(
                    new ButtonBuilder()
									.setCustomId('counter')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('cycle')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
		const  test = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('test')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('gn3')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
		const gn = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('el')
                    .setLabel('🔙')
                    
							.setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('joa')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
		const jo = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('gn')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('star')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
		const sta = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('jo')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('help')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
		let ct = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/HD_Citron%27s_victory_pose.png/revision/latest?cb=20160616013747")
		.setTitle("Citron | <:Guardian:1062501130501885973><:Smarty:1062502890448638022>")
		.setDescription("**- Fruit Hero  -**")
		.setColor("Random")
		
		.addFields({name: "Superpowers",
							 	value: `Transmogrify <:Smarty:1062502890448638022> \n Transform a Zombie into a random Zombie that costs 1<:Brainz:1062503146745774183>. \n Nut Signal <:Guardian:1062501130501885973> \n Make a Wall-Nut. Draw a card. \n Wall-Nut
0<:Strength:1062501774612779039>/6<:Health:1062515540712751184>, __Team-Up__ \n Root Wall <:Guardian:1062501130501885973> \n A Plant gets +2<:Health:1062515540712751184> and can't be hurt this turn. \n Peel Shield <:Guardian:1062501130501885973><:Smarty:1062502890448638022> \n Plants can't be hurt this turn. \n Draw a card. `},
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Hero**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Wanted to be a poet, but couldn't find anything that rhymed with orange."
							 })
let decks = [
	"budgetct",
	"countertron",
	"cycletron",
	"elusives",
	"goingnuts3",
	"helpct",
	"joaburst",
	"randomct",
	"startron",
]
let toBuildString = "";
for (let i = 0; i < decks.length; i++) {
	let deck = decks[i];
	toBuildString += `\n<@1043528908148052089> **${deck}**`;
}
			let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/HD_Citron%27s_victory_pose.png/revision/latest?cb=20160616013747")
			.setTitle("CT Commands")
			.setDescription(`My commands for Citron(CT) are ${toBuildString}`)
				.setColor("Random")
				.setFooter({text: `To view the Citron decks please use the commands listed above or click on the buttons below!
Note: Citron has ${decks.length -3 } total decks in Tbot`})
let [result] = await db.query("SELECT * FROM ctdecks");
		let ba = new EmbedBuilder()
		.setTitle("Budget Tempo")
	.setDescription(`${result[2].budgetct}`)
	.setFooter({text: `${result[1].budgetct}`})
			.addFields({name: "Deck Cost", value: `${result[0].budgetct}`})
		.setColor("Random")
	.setImage(`${result[3].budgetct}`)
		let cou = new EmbedBuilder()
		.setTitle("Countertron")
		.setDescription(`${result[2].countertron}`)
		.setFooter({text: `${result[1].countertron}`})
				.addFields({name: "Deck Cost", value: `${result[0].countertron}`})
			.setColor("Random")
			.setImage(`${result[3].countertron}`)
			let cy = new EmbedBuilder()
			.setTitle("Cycletron")
			.setDescription(`${result[2].cycletron}`)
			.setFooter({text: `${result[1].cycletron}`})
					.addFields({name: "Deck Cost", value: `${result[0].cycletron}`})
				.setColor("Random")	
				.setImage(`${result[3].cycletron}`)
			
			let elu = new EmbedBuilder()
			.setTitle("Elusives")
			.setDescription(`${result[2].elusives}`)
			.setFooter({text: `${result[1].elusives}`})
					.addFields({name: "Deck Cost", value: `${result[0].elusives}`})
				.setColor("Random")
				.setImage(`${result[3].elusives}`)
		let gn3 = new EmbedBuilder()
		.setTitle("Going Nuts 3")
		.setDescription(`${result[2].going3nuts}`)
		.setColor("Random")
		.setFooter({text: `${result[1].going3nuts}`})
		.addFields({name: "Deck Cost",
							 	value: `${result[0].going3nuts}`})
		.setImage(`${result[3].going3nuts}`)
		let joa = new EmbedBuilder()
		.setTitle("Joa Burst")
		.setDescription(`${result[2].joaburst}`)
		.setFooter({text: `${result[1].joaburst}`})
				.addFields({name: "Deck Cost", value: `${result[0].joaburst}`})
			.setColor("Random")		
			.setImage(`${result[3].joaburst}`)
		let star = new EmbedBuilder()
		.setTitle("Startron")	
		.setDescription(`${result[2].startron}`)
	.setFooter({text: `${result[1].startron}`})
		.addFields({name: "Deck Cost", value: `${result[0].startron}`})	
		.setImage(`${result[3].startron}`)
	.setColor("Random")	
		const m = await	message.channel.send({embeds: [ct], components: [cmd] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter, time: 300000})
		collector.on('collect', async i => {
			if(i.customId == 'bc'){
				await i.update({embeds: [ba], components: [bc]})
			}
			if(i.customId == 'cmd'){
					await i.update({embeds: [embed], components: [row] } )
				}
			if(i.customId == 'helpbc'){
				await i.update({embeds: [embed], components: [row] } )
			}
			if(i.customId == 'bct'){
				await i.update({embeds: [ba], components: [bc]})
			}
			if(i.customId == 'cou'){
				await i.update({embeds: [cou], components: [bct]})
			}
			if(i.customId== 'elu'){
				await i.update({embeds: [cy], components: [cycle]})
			}
			if(i.customId == 'counter'){
				await i.update({embeds: [cou], components: [bct]})
			}
			if(i.customId == 'cycle'){
				await i.update({embeds: [elu], components: [test]})
			}
			if(i.customId == 'test'){
				await i.update({embeds: [cy], components: [cycle]})
			}
			if(i.customId == 'gn3'){
				await i.update({embeds: [gn3], components: [gn]})
			}
			if(i.customId == 'el'){
					await i.update({embeds: [elu], components: [test]})
			}
			if(i.customId == 'joa'){
				await i.update({embeds: [joa], components: [jo]})
			}
			if(i.customId== 'gn'){
				await i.update({embeds: [gn3], components: [gn]})
			}
			if(i.customId== 'meme'){
				await i.update({embeds: [meme], components: [me]})
			}
			if(i.customId == 'jo'){
				await i.update({embeds: [joa], components: [jo]})
			}
			if(i.customId == 'star'){
				await i.update({embeds: [star], components: [sta]})
			}
				if(i.customId == 'sta'){
				await i.update({embeds: [star], components: [sta]})
			}
			if(i.customId == 'me'){
					await i.update({embeds: [meme], components: [me]})
			}
			if(i.customId == 'help'){
					await i.update({embeds: [embed], components: [row] } )
			}
		})
	}
}
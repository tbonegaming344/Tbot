const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
let db = require("../../index.js");
module.exports = {
	name: `helpsp`,
	aliases: [`sphelp`, `spcommands`, `commmandssp`, `spdecks`, `spudowhelp`, 
	`helpspudow`, `spudowdecks`, `helpsd`, `sdhelp`],
	category: `Spudow(SP)`,
	run: async(client, message, args) => {
		const row = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('taggro')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('bart')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const bart = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('helpsp')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('br')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
		const br = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('bartin')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('bsp')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
		const bsp = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('broots')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('csp')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
		const csp = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('spb')
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
                    .setCustomId('cysp')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('pb')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
		const pb = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('magm')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('rm')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
			const rm = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('pburn')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('tdr')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
		const tdr = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('rkale')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('ta')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
		const ta = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('ttdr')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('help')
									.setLabel('⏭️')
									.setStyle(ButtonStyle.Primary)
							);
let decks = [
	"bartin",
	"bartinroots",
	"budgetsp",
	"cyclesp",
	"helpsp",
	"magnoliamartin",
	"pranksterburn",
	"randomsp",
	"reliablemolekale",
	"tempodinoroots",
	"tokenaggro",
	
]
let toBuildString = "";
for (let i = 0; i < decks.length; i++) {
	let deck = decks[i];
	toBuildString += `\n<@1043528908148052089> **${deck}**`;
}
		let embed = new EmbedBuilder()
    .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/ff/Spudow%27s_Winning_Pose.png/revision/latest/scale-to-width-down/250?cb=20161022004719")
		.setTitle("SP Commands")
		.setDescription(`My commands for Spudow(SP) are ${toBuildString}`)
		.setColor("Random")
			.setFooter({text: `To view the Spudow decks please use the commands listed above or click on the buttons below!
Note: Spudow has ${decks.length - 3} total decks in Tbot`})
let [result] = await db.query(`SELECT * from spdecks`);
		let bar = new EmbedBuilder()
		.setTitle("Burst Martin")
		.setDescription(`${result[2].bartin}`)
		.setFooter({text: `${result[1].bartin}`})
				.addFields({name: "Deck Cost", value: `${result[0].bartin}`})
			.setColor("Random")
	.setImage(`${result[3].bartin}`)
			let broots = new EmbedBuilder()
			.setTitle("Bartin Roots")
			.setDescription(`${result[2].bartinroots}`)
			.setFooter({text: `${result[1].bartinroots}`})
					.addFields({name: "Deck Cost", value: `${result[0].bartinroots}`})
				.setColor("Random")
		.setImage(`${result[3].bartinroots}`)
		let spba = new EmbedBuilder()
		.setTitle("SP Budget Burst")
		.setDescription(`${result[2].budgetburstsp}`)
		.setFooter({text: `${result[1].budgetburstsp}`})
				.addFields({name: "Deck Cost", value: `${result[0].budgetburstsp}`})
			.setColor("Random")
	.setImage(`${result[3].budgetburstsp}`)
		let cysp = new EmbedBuilder()
		.setTitle("Cycle Spudow")
	.setDescription(`${result[2].cyclesp}`)
	.setFooter({text:`${result[1].cyclesp}`})
			.addFields({name: "Deck Cost", value:`${result[0].cyclesp}`})
		.setColor("Random")
		.setImage(`${result[3].cyclesp}`)
		let magm = new EmbedBuilder()
		.setTitle("Magnolia Martin")
	.setDescription(`${result[2].magmartin}`)
	.setFooter({text: `${result[1].magmartin}`})
			.addFields({name: "Deck Cost", value: `${result[0].magmartin}`})
		.setColor("Random")
.setImage(`${result[3].magmartin}`)
		let pburn = new EmbedBuilder()
		.setTitle("Prankster Burn")	
			.setDescription(`${result[2].pranksterburn}`)
	.setFooter({text: `${result[1].pranksterburn}`})
			.addFields({name: "Deck Cost", value: `${result[0].pranksterburn}`})	
			.setImage(`${result[3].pranksterburn}`)
		.setColor("Random")			
		let rkale = new EmbedBuilder()
		.setTitle("Reliable Molekale")
		.setDescription(`${result[2].reliablemolekale}`)
		.setFooter({text: `${result[1].reliablemolekale}`})
				.addFields({name: "Deck Cost", value: `${result[0].reliablemolekale}`})
			.setColor("Random")
	.setImage(`${result[3].reliablemolekale}`)
		let ttdr = new EmbedBuilder()
		.setTitle("TCC Tempo Dino Roots")
		.setDescription(`${result[2].tempodinoroots}`)
		.setFooter({text: `${result[1].tempodinoroots}`})
				.addFields({name: "Deck Cost", value: `${result[0].tempodinoroots}`})
			.setColor("Random")
	.setImage(`${result[3].tempodinoroots}`)
		let taggro = new EmbedBuilder()
		.setTitle("Token Aggro")	
			.setDescription(`${result[2].tokenaggro}`)
		.setFooter({text: `${result[1].tokenaggro}`})
			.addFields({name: "Deck Cost", value: `${result[0].tokenaggro}`})
			.setImage(`${result[3].tokenaggro}`)
		.setColor("Random")		
	const m = await	message.channel.send({embeds: [embed], components: [row] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter})
		collector.on('collect', async i=> {
			if(i.customId == 'bart'){
				await i.update({embeds: [bar], components: [bart]})
			}
			if(i.customId == 'helpsp'){
				await i.update({embeds: [embed], components: [row] } )
			}
			if(i.customId == 'br'){
				await i.update({embeds: [broots], components: [br]})
			}
			if(i.customId == 'bartin'){
				await i.update({embeds: [bar], components: [bart]})
			}
			if(i.customId == 'bsp'){
				await i.update({embeds: [spba], components: [bsp]})
			}
			if(i.customId == 'broots'){
				await i.update({embeds: [broots], components: [br]})
			}
			if(i.customId == 'csp'){
				await i.update({embeds: [cysp], components: [csp]})
			}
			if(i.customId == 'spb'){
				await i.update({embeds: [spba], components: [bsp]})
			}
			if(i.customId == 'mm'){
				await i.update({embeds: [magm], components: [mm]})
			}
			if(i.customId == 'cysp'){
				await i.update({embeds: [cysp], components: [csp]})
			}
			if(i.customId== 'pb'){
				await i.update({embeds: [pburn], components: [pb]})
			}
			if(i.customId == 'magm'){
				await i.update({embeds: [magm], components: [mm]})
			}
			if(i.customId == 'rm'){
				await i.update({embeds: [rkale], components: [rm]})
			}
			if(i.customId == 'pburn'){
				await i.update({embeds: [pburn], components: [pb]})
			}
			if(i.customId == 'tdr'){
				await i.update({embeds: [ttdr], components: [tdr]})
			}
			if(i.customId == 'rkale'){
				await i.update({embeds: [rkale], components: [rm]})
			}
			if(i.customId == 'ta'){
				await i.update({embeds: [taggro], components: [ta]})
			}
			if(i.customId == 'taggro'){
				await i.update({embeds: [taggro], components: [ta]})
			}
			if(i.customId == 'ttdr'){
				await i.update({embeds: [ttdr], components: [tdr]})
			}
			if(i.customId == 'help'){
				await i.update({embeds: [embed], components: [row] } )
			}
		})
	}
}
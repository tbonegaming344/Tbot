const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
let db = require('../../index.js')
module.exports = {
	name: `impfinity`,
	aliases: [`if`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
			const row = new ActionRowBuilder()
            .addComponents(
              new ButtonBuilder()
                    .setCustomId('ifhelp')
                    .setLabel('IF Commands')
                    .setStyle(ButtonStyle.Primary)
										.setEmoji('<:Impfinity:1087754523050774659>')
							);
		const test = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('wrm')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('ag')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
					const ag = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('helpif')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('bp')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const bp = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('aconjure')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('bif')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const bif = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('bpir')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('cheap')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const cheaper = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('ifb')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('cp')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const cp = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('cheaper')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('cj')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const cj = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('cpack')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('ifp')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const ifp = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('crates')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('mp')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const mp = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('pc')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('stars')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const stars = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('mpirates')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('spl')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
						const spl = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('spt')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('uno')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const uno = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('splimps')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('wm')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const wm = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('ifu')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('help')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/magnificentbaddie/images/8/83/Impfinity.webp/revision/latest?cb=20220421015258")
			.setTitle("Impfinity | <:Sneaky:1062502187781075094><:Crazy:1062502046474973224>")
			.setDescription("**-  Imp Hero -**")
				.addFields({name: "Superpowers",  
										value: "Super Stench <:Sneaky:1062502187781075094> \n All Zombies get <:Deadly:1062501985795964928>__Deadly__.  \n In-Crypted <:Sneaky:1062502187781075094> \n A Zombie hides in a __Gravestone__.  \n Brute Strength <:Crazy:1062502046474973224> \n A Zombie gets +3<:Strength:1062501774612779039>. \n Triple Threat <:Sneaky:1062502187781075094><:Crazy:1062502046474973224> \n Make two 2<:Strength:1062501774612779039>/1<:Health:1062515540712751184> Impfinity Clones with __Amphibious__ in random lanes."},
									 {
										 name: "Set-Rarity", 
										 value: "**Premium - Hero**"
									 },
									 {
										 name: "Flavor Text", 
										 value: `He believes good things come in small packages. And in threes.`
									 })
		.setColor("Random")			
	
	let decks = [
		"aggroconjure",
		"barrelpirates",
		"budgetif",
		"cheaperpirates",
		"conjurepackage",
		"conjurerates",
		"helpif",
		"ifplankcontrol",
		"midpirates",
		"randomif",
		"spacestars",
		"splimps",
		"unoif",
		,
		"wrathmartin"
	]
	let toBuildString = "";
	for (let i = 0; i < decks.length; i++) {
		let deck = decks[i];
		toBuildString += `\n<@1043528908148052089> **${deck}**`
	}
	let helpif = new EmbedBuilder()
	.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/d/d6/A_PVZH_Z_Imp%403x.png/revision/latest/scale-to-width-down/250?cb=20161028000520")
.setTitle("IF Commands")
.setDescription(`My commands for Impfinity(IF) are ${toBuildString}`)
	.setFooter({text:`To view the Impfinity decks please use the commands listed above or click on the buttons below!
Note: Impfinity has ${decks.length - 3} total decks in Tbot`})
.setColor("Random")

let [result] = await db.query(`SELECT * FROM ifdecks`)
let aconjure = new EmbedBuilder()
.setTitle("Aggro Conjure")	
.setDescription(`${result[2].aggroconjure}`)
.setFooter({text: `${result[1].aggroconjure}`})
.addFields({name: "Deck Cost", value: `${result[0].aggroconjure}`})	
.setImage(`${result[3].aggroconjure}`)
.setColor("Random")			
	let ifb = new EmbedBuilder()
	.setTitle("IF Budget Grave Burn")	
	.setDescription(`${result[2].budgetif}`)
	.setFooter({text: `${result[1].budgetif}`})
			.addFields({name: "Deck Cost", value: `${result[0].budgetif}`})
		.setColor("Random")			
		.setImage(`${result[3].budgetif}`)
		let bpir = new EmbedBuilder()
		.setTitle("2.1")
		.setDescription(`${result[2].barrelpirates}`)
		.setFooter({text:`${result[1].barrelpirates}`})
				.addFields({name: "Deck Cost", value: `${result[0].barrelpirates}`})
			.setColor("Random")
			.setImage(`${result[3].barrelpirates}`)
let cheap = new EmbedBuilder()
.setTitle("Cheaper pirates")
.setDescription(`${result[2].cheaperpirates}`)
.setImage(`${result[3].cheaperpirates}`)
	.setFooter({text: `${result[1].cheaperpirates}`})
		.addFields({name: "Deck Cost", value: `${result[0].cheaperpirates}`})
.setColor("Random")
	let cpack = new EmbedBuilder()
	.setTitle("Conjure Package")	
	.setDescription(`${result[2].conjurepackage}`)
.setFooter({text: `${result[1].conjurepackage}`})
	.addFields({name: "Deck Cost", value: `${result[0].conjurepackage}`})	
	.setImage(`${result[3].conjurepackage}`)
.setColor("Random")		
	let crates = new EmbedBuilder()
	.setTitle("Conjurates")
	.setDescription(`${result[2].conjurates}`)
	.setFooter({text:`${result[1].conjurates}`})
			.addFields({name: "Deck Cost", value: `${result[0].conjurates}`})
		.setColor("Random")
		.setImage(`${result[3].conjurates}`)
		
let pc = new EmbedBuilder()
.setTitle("IF Plank Control")
.setDescription(`${result[2].ifplankcontrol}`)
.setFooter({text:`${result[1].ifplankcontrol}`})
	.setColor("Random")
	.setImage(`${result[3].ifplankcontrol}`)
		.addFields({name: "Deck Cost", value: `${result[0].ifplankcontrol}`})
	let mpirates = new EmbedBuilder()
	.setTitle("Mid-Pirates")
.setDescription(`${result[2].midpirates}`)
.setColor("Random")
.setFooter({text: `${result[1].midpirates}`})
.addFields({name: "Deck Cost", value: `${result[0].midpirates}`})
.setImage(`${result[3].midpirates}`)
let spt = new EmbedBuilder()
.setTitle("Spacestars")
.setDescription(`${result[2].spacestars}`)
.setFooter({text: `${result[1].spacestars}`})
		.addFields({name: "Deck Cost", value: `${result[0].spacestars}`})
	.setColor("Random")
	.setImage(`${result[3].spacestars}`)
let splimps = new EmbedBuilder()
.setTitle("Splimps")
.setDescription(`${result[2].splimps}`)
.setFooter({text: `${result[1].splimps}`})
		.addFields({name: "Deck Cost", value: `${result[0].splimps}`})
	.setColor("Random")
	.setImage(`${result[3].splimps}`)
	let ifu = new EmbedBuilder()
	.setTitle("IF Uno")
	.setDescription(`${result[2].unoif}`)
	.setFooter({text: `${result[1].unoif}`})
		.setColor("Random")
				.addFields({name: "Deck Cost", value:`${result[0].unoif}`})	
			.setImage(`${result[3].unoif}`)
let wrm = new EmbedBuilder()
.setTitle("Wraith Martin")	
.setDescription(`${result[2].wrathmartin}`)
.setFooter({text: `${result[1].wrathmartin}`})
.addFields({name: "Deck Cost", value: `${result[0].wrathmartin}`})
.setColor("Random")
.setImage(`${result[3].wrathmartin}`)
const m = await	message.channel.send({embeds: [ embed ], components: [row] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter})
		collector.on('collect', async i  => {
			if(i.customId == 'ifhelp'){
				await i.update({embeds: [helpif], components: [test]})
			}
				if(i.customId == 'ag'){
				await i.update({embeds: [aconjure], components: [ag]})
			}
			if(i.customId == 'helpif'){
				await i.update({embeds: [helpif], components: [test] } )
			}
			if(i.customId == 'bp'){
				await i.update({embeds: [bpir], components: [bp]})
			}
			if(i.customId == 'aconjure'){
				await i.update({embeds: [aconjure], components: [ag]})
			}
				if(i.customId == 'bpir'){
				await i.update({embeds: [bpir], components: [bp]})
			}
			if(i.customId == 'cp'){
			await i.update({embeds: [cpack], components: [cp]})
		}
		if(i.customId == 'bif'){
			await i.update({embeds: [ifb], components: [bif]})
		}
					if(i.customId == 'ifb'){
			await i.update({embeds: [ifb], components: [bif]})
		}
		if(i.customId == 'cj'){
			await i.update({embeds: [crates], components: [cj]})
		}
				if(i.customId == 'cpack'){
			await i.update({embeds: [cpack], components: [cp]})
		}
			if(i.customId == 'crates'){
			await i.update({embeds: [crates], components: [cj]})
		}
			if(i.customId == 'ifp'){
				await i.update({embeds: [pc], components: [ifp]})
			}
			if(i.customId == 'mp'){
				await i.update({embeds: [mpirates], components: [mp]})
			}
				if(i.customId == 'mpirates'){
				await i.update({embeds: [mpirates], components: [mp]})
			}
			if(i.customId == 'pc'){
				await i.update({embeds: [pc], components: [ifp]})
			}
			if(i.customId == 'stars'){
				await i.update({embeds: [spt], components: [stars]})
			}
					if(i.customId == 'spt'){
				await i.update({embeds: [spt], components: [stars]})
			}
			if(i.customId == 'uno'){
				await i.update({embeds: [ifu], components: [uno]})
			}
				if(i.customId == 'ifu'){
				await i.update({embeds: [ifu], components: [uno]})
			}
				if(i.customId == 'cheap'){
				await i.update({embeds: [cheap], components: [cheaper]})
			}
					if(i.customId == 'cheaper'){
				await i.update({embeds: [cheap], components: [cheaper]})
			}
			if(i.customId == 'wm'){
				await i.update({embeds: [wrm], components: [wm]})
			}
			if(i.customId == 'wrm'){
				await i.update({embeds: [wrm], components: [wm]})
			}
			if(i.customId == 'help'){
					await i.update({embeds: [helpif], components: [test] } )
			}
			if(i.customId == 'spl'){
				await i.update({embeds: [splimps], components: [spl]})
			}
						if(i.customId == 'splimps'){
				await i.update({embeds: [splimps], components: [spl]})
			}
		})
	}
}
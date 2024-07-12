const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
let db = require("../../index.js")
module.exports = {
	name: `helprb`,
	aliases: [`rbhelp`, `rbcommands`, `commandsrb`, `helprust`, `helpbolt`, `helprustbolt`, `rustcommands`, `boltcommands`, `rustboltcommands`, `rbdecks`, `rustboltdecks`, `rustbolthelp`],
	category: `Rustbolt(RB)`,
	run: async(client, message, args) => {
		const row = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('tbolt')
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
                    .setCustomId('helprb')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('bol')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const bol = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('saggro')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('bo')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const bo = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('b')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('brick')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const brickster = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('boss')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('brb')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const brb = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('brickster')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('bust')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const bust = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('bs')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('igb')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const igb = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('bustbolt')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('jb')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const jb = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('igbc')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('kl')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const kl = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('jbolt')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('l')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const l = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('kleap')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('marx')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const marx = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
						.setCustomId('loop')
						.setLabel('🔙')
						.setStyle(ButtonStyle.Primary),
				new ButtonBuilder()
						.setCustomId('msb')
						.setLabel('⏭')
						.setStyle(ButtonStyle.Primary)
			);
		const msb = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
						.setCustomId('marxbolt')
						.setLabel('🔙')
						.setStyle(ButtonStyle.Primary),
				new ButtonBuilder()
						.setCustomId('mc')
						.setLabel('⏭')
						.setStyle(ButtonStyle.Primary)
			);
		const mc = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('msbolt')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('ps')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const ps = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('mcon')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('pog')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const pog = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('pstar')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('sb')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const sb = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('pogg')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('tb')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const tb = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('sband')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('trb')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const trb = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('tblob')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('help')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
let decks = [
	"aggroscience",
	"boltbolt",
	"boss",
	"brickster",
	"budgetrb",
	"bustbolt",
	"helprb",
	"igmablobchum",
	"josebolt",
	"kingleap",
	"loop",
	"marxbolt",
	"mimescibolt",
	"mechacontrol",
	"pharaohster",
	"poggerrazzi",
	"randomrb",
	"sunbandits",
	"trickblob",
	"trickbolt",
	"wheelrb"
]
let toBuildString = "";
for (let i = 0; i < decks.length; i++) {
	let deck = decks[i];
	toBuildString += `\n<@1043528908148052089> **${deck}**`
}
		let helprb = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/villains/images/b/ba/HD_Rustbolt.png/revision/latest/scale-to-width-down/701?cb=20190807152027")
		.setTitle("RB Commands")
		.setDescription(`My commands for Rustbolt(RB) are ${toBuildString}`)
			.setFooter({text: `To view the RustBolt decks please use the commands listed above or click on the buttons below!
Note: Rustbolt has ${decks.length - 3} toal decks in Tbot`})
						.setColor("Random")
					let [result] = await db.query(`select * from rbdecks`)
						let saggro = new EmbedBuilder()
						.setTitle("Aggro Science")
						.setDescription(`${result[2].aggroscience}`)
						.setFooter({text: `${result[1].aggroscience}`})
								.addFields({name: "Deck Cost", value: `${result[0].aggroscience}`})
							.setColor("Random")
					.setImage(`${result[3].aggroscience}`)
		let b = new EmbedBuilder()
		.setTitle("Bolt Bolt")
		.setDescription(`${result[2].boltbolt}`)
		.setFooter({text: `${result[1].boltbolt}`})
				.addFields({name: "Deck Cost", value:`${result[0].boltbolt}`})
			.setColor("Random")
			.setImage(`${result[3].boltbolt}`)
		let boss = new EmbedBuilder()
		.setTitle("Bolt Of Some Size")
		.setDescription(`${result[2].boss}`)
		.setFooter({text: `${result[1].boss}`})
		.setColor("Random")
		.addFields({name: "Deck Cost",
							 	value:`${result[0].boss}`})
		.setImage(`${result[3].boss}`)
		let brick = new EmbedBuilder()
		.setTitle("Brickster")
		.setDescription(`${result[2].brickster}`)
		.setColor("Random")
		.setFooter({text:`${result[1].brickster}`})
		.addFields({name: "Deck Cost",
							 	value: `${result[0].brickster}`
							 })
		.setImage(`${result[3].brickster}`)
		let bs = new EmbedBuilder()
		.setTitle("Budget Swarm")	
			.setDescription(`${result[2].budgetrb}`)
	.setFooter({text: `${result[1].budgetrb}`})
			.addFields({name: "Deck Cost", value: `${result[0].budgetrb}`})	
			.setImage(`${result[3].budgetrb}`)
		.setColor("Random")			
			let bustbolt = new EmbedBuilder()
			.setTitle("BustBolt")
			.setDescription(`${result[2].bustbolt}`)
			.setColor("Random")
				.setFooter({text: `${result[1].bustbolt}`})
			.addFields({name: "Deck Cost", value: `${result[0].bustbolt}`})
			.setImage(`${result[3].bustbolt}`)
			let igbc = new EmbedBuilder()
			.setTitle("Igma Blob Chum")
			.setDescription(`${result[2].igmablobchum}`)
			.setFooter({text: `${result[1].igmablobchum}`})
					.addFields({name: "Deck Cost", value: `${result[0].igmablobchum}`})
				.setColor("Random")
				.setImage(`${result[3].igmablobchum}`)
		let jbolt = new EmbedBuilder()
		.setTitle("Jose Bolt")
		.setDescription(`${result[2].josebolt}`)
		.setFooter({text: `${result[1].josebolt}`})
				.addFields({name: "Deck Cost", value: `${result[0].josebolt}`})
			.setColor("Random")
			.setImage(`${result[3].josebolt}`)
		let kleap = new EmbedBuilder()
		.setTitle("King Leap")
		.setDescription(`${result[2].kingleap}`)
		.setFooter({text:`${result[1].kingleap}`})
				.addFields({name: "Deck Cost", value: `${result[0].kingleap}`})
			.setColor("Random")
			.setImage(`	${result[3].kingleap}`)
		let loop = new EmbedBuilder()
		.setTitle("Loop")
		.setDescription(`${result[2].l00p}`)
		.setFooter({text: `${result[1].l00p}`})
				.addFields({name: "Deck Cost", value: `${result[0].l00p}`})
			.setColor("Random")
			.setImage(`${result[3].l00p}`)
		let marxbolt = new EmbedBuilder()
		.setTitle("Marxbolt")
		.setDescription(`${result[2].marxbolt}`)
		.setFooter({text: `${result[1].marxbolt}`})
		.addFields({name: "Deck Cost:", value: `${result[0].marxbolt}`})
		.setColor("Random")
		.setImage(`${result[3].marxbolt}`)
		let msbolt = new EmbedBuilder()
		.setTitle("Mime SciBolt")
		.setDescription(`${result[2].mimescibolt}`)
		.setFooter({text:`${result[1].mimescibolt}`})
		.addFields({name: "Deck Cost:", value: `${result[0].mimescibolt}`})
		.setColor("Random")
		.setImage(`${result[3].mimescibolt}`)
		let mcon = new EmbedBuilder()
		.setTitle("Brickasaur Control")
		.setDescription(`${result[2].mechacontrol}`)
		.setFooter({text: `${result[1].mechacontrol}`})
		.setColor("Random")
		.addFields({name: "Deck Cost",
							 	value:`${result[0].mechacontrol}`})
		.setImage(`${result[3].mechacontrol}`)
		let pstar = new EmbedBuilder()
		.setTitle("Pharaohster")
		.setDescription(`${result[2].pharaohster}`)
		.setFooter({text: `${result[1].pharaohster}`})
					.addFields({name: "Deck Cost", value: `${result[0].pharaohster}`})
			.setColor("Random")
			.setImage(`${result[3].pharaohster}`)
		let pogg = new EmbedBuilder()
		.setTitle("Poggerrazzi")
		.setDescription(`${result[2].poggerrazzi}`)
		.setFooter({text: `${result[1].poggerrazzi}`})
					.addFields({name: "Deck Cost", value: `${result[0].poggerrazzi}`})
			.setColor("Random")
			.setImage(`${result[3].poggerrazzi}`)
			let sband = new EmbedBuilder()
			.setTitle("Sun Bandits")
			.setDescription(`${result[2].sunbandits}`)
			.setFooter({text: `${result[1].sunbandits}`})
					.addFields({name: "Deck Cost", value: `${result[0].sunbandits}`})
				.setColor("Random")
				.setImage(`${result[3].sunbandits}`)
			let tblob = new EmbedBuilder()
			.setTitle("TrickBlob")
			.setDescription(`${result[2].trickblob}`)
			.setColor("Random")
			.setFooter({text: `${result[1].trickblob}`})
			.setImage(`${result[3].trickblob}`)
			.addFields({name: "Deck Cost", 
									 value: `${result[0].trickblob}`})
				let tbolt = new EmbedBuilder()
				.setTitle("Trick Bolt")
				.setDescription(`${result[2].trickbolt}`)
				.setFooter({text:`${result[1].trickbolt}`})
						.addFields({name: "Deck Cost", value: `${result[0].trickbolt}`})
					.setColor("Random")
					.setImage(`${result[3].trickbolt}`)
	const m = await	message.channel.send({embeds: [helprb], components: [row] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter})
		collector.on('collect', async i => {
		if(i.customId == 'bb'){
			await i.update({embeds: [band], components: [bb]})
		}
			if(i.customId == 'helprb'){
				await i.update({embeds: [helprb], components: [row]})
			}
			if(i.customId == 'bol'){
				await i.update({embeds: [b], components: [bol]})
			}	
			if(i.customId == 'bo'){
				await i.update({embeds: [boss], components: [bo]})
			}
				if(i.customId == 'b'){
				await i.update({embeds: [b], components: [bol]})
			}
			if(i.customId == 'brb'){
				await i.update({embeds: [bs], components: [brb]})
			}
					if(i.customId == 'boss'){
				await i.update({embeds: [boss], components: [bo]})
			}
			if(i.customId == 'bs'){
				await i.update({embeds: [bs], components: [brb]})
			}
			if(i.customId == 'igb'){
				await i.update({embeds: [igbc], components: [igb]})
			}
			if(i.customId == 'jb'){
				await i.update({embeds: [jbolt], components: [jb]})
			}
				if(i.customId == 'igbc'){
				await i.update({embeds: [igbc], components: [igb]})
			}
			if(i.customId == 'kl'){
				await i.update({embeds: [kleap], components: [kl]})
			}
			if(i.customId == 'bust'){
				await i.update({embeds: [bustbolt], components: [bust]})
			}
					if(i.customId == 'bustbolt'){
				await i.update({embeds: [bustbolt], components: [bust]})
			}
				if(i.customId == 'jbolt'){
				await i.update({embeds: [jbolt], components: [jb]})
			}
			if(i.customId == 'l'){
				await i.update({embeds: [loop], components: [l]})
			}
			if(i.customId== 'marx'){
				await i.update({embeds: [marxbolt], components: [marx]})
			}
			if(i.customId== 'marxbolt'){
				await i.update({embeds: [marxbolt], components: [marx]})
			}
			if(i.customId == 'msb'){
				await i.update({embeds: [msbolt], components: [msb]})
			}
			if(i.customId == 'msbolt'){
				await i.update({embeds: [msbolt], components: [msb]})
			}
				if(i.customId == 'kleap'){
				await i.update({embeds: [kleap], components: [kl]})
			}
			if(i.customId == 'mc'){
				await i.update({embeds: [mcon], components: [mc]})
			}
			if(i.customId == 'loop'){
				await i.update({embeds: [loop], components: [l]})
			}
			if(i.customId == 'ps'){
				await i.update({embeds: [pstar], components: [ps]})
			}
						if(i.customId == 'mcon'){
				await i.update({embeds: [mcon], components: [mc]})
			}
			if(i.customId == 'pog'){
				await i.update({embeds: [pogg], components: [pog]})
			}
				if(i.customId == 'pstar'){
				await i.update({embeds: [pstar], components: [ps]})
			}
			if(i.customId == 'pogg'){
				await i.update({embeds: [pogg], components: [pog]})
			}
			if(i.customId == 'sa'){
				await i.update({embeds: [saggro], components: [sa]})
			}
			if(i.customId == 'sb'){
				await i.update({embeds: [sband], components: [sb]})
			}
					if(i.customId == 'saggro'){
				await i.update({embeds: [saggro], components: [sa]})
			}
			if(i.customId == 'brick'){
				await i.update({embeds: [brick], components: [brickster]})
			}
				if(i.customId == 'brickster'){
				await i.update({embeds: [brick], components: [brickster]})
			}
			if(i.customId == 'tb'){
				await i.update({embeds: [tblob], components: [tb]})
			}
					if(i.customId == 'sband'){
				await i.update({embeds: [sband], components: [sb]})
			}
			if(i.customId == 'trb'){
				await i.update({embeds: [tbolt], components: [trb]})
			}
				if(i.customId == 'tblob'){
				await i.update({embeds: [tblob], components: [tb]})
			}
			if(i.customId == 'help'){
				await i.update({embeds: [helprb], components: [row]})
			}
			if(i.customId == 'tbolt'){
				await i.update({embeds: [tbolt], components: [trb]})
			}
		})
	}
}
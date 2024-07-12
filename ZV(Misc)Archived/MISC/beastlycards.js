const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
module.exports = {
	name: `beastlycards`, 
	aliases: [`beastyhelp`, `helpbeastly`, `beastly`, `cardsbeastly`, `beastlyminions`],
	category: `Miscellaneous`,
	run: async(client, message, args)=> {
			const row = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('zombot')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('go')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const go = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('helpb')
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
                    .setCustomId('goat')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('cc')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const cc = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('clady')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('dw')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
					const dw = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('ccut')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('fc')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const fc = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('dwalk')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('nib')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const nib = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('fcat')
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
                    .setCustomId('nibble')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('sp')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
					const sp = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('sagent')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('sz')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const sz = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('spunk')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('ylb')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const ylb = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('szomb')
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
                    .setCustomId('ylbox')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('cz')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const cz = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('bbot')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('edz')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const edz = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('czombie')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('ee')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
					const ee = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('edzombie')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('hgho')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const hgho = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('eevent')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('hz')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const hz = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('hghost')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('hunt')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const hunt = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('hzombie')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('kw')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const kw = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('huntgrounds')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('pp')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const pp = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('kwhale')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('sh')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const sh = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('ppip')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('sync')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const sync = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('sherd')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('te')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const te = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('syncswimmer')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('zk')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
					const zk = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('tecl')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('ao')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const ao = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('zkeep')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('a22')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const a22 = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('aooze')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('dr')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const dr = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('area22')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('hg')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const hg = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('drider')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('lm')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const lm = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('hgoat')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('vimp')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const vimp = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('lmouth')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('vit')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const vit = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('vimpire')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('zy')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const zy = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('vitamin')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('av')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const av = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('zyeti')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('bf')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const bf = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('avimp')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('ibh')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const ibh = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('bflat')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('kr')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
					const kr = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('ibhunter')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('osz')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const osz = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('krider')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('pcs')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const pcs = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('oszombie')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('szom')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const szom = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('pcshover')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('surf')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const surf = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('szombie')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('loc')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const loc = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('surfer')
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
                    .setCustomId('locust')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('sg')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const sg = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('mbronto')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('nova')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const nova = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('sgarg')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('vczom')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const vczom = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('novagarg')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('dsg')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const dsg = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('vczombie')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('kotg')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const kotg = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('dsgarg')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('ml')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const ml = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('kotgrill')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('gtg')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
					const gtg = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('kotgrill')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('ng')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const ng = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('gtgarg')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('oz')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const oz = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('ngarg')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('bot')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const bot = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('ozombie')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('help')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const vcz = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('vcz')
                    .setLabel('Vengeful Cyborg')
                    .setStyle(ButtonStyle.Primary)
										.setEmoji('<:cyborg:1087161586487152753>')
            );
			const boo = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
			.setCustomId('boo')
			.setLabel('Haunting Ghost')
			.setStyle(ButtonStyle.Primary)
			.setEmoji('<:boo:1087162445627400292>')
		);
		const lunch = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('lunch')
                    .setLabel('Lunchbox')
                    .setStyle(ButtonStyle.Primary )
										.setEmoji('<:lunchbox:1089227004450181240>')
            );
		let bcards = new EmbedBuilder()
		.setTitle("Beastly Cards")
		.setDescription("The cards in the beastly cards are \n<@1043528908148052089> goat \n<@1043528908148052089> catlady \n<@1043528908148052089> cheesecutter \n<@1043528908148052089> dogwalker \n<@1043528908148052089> fraidycat \n<@1043528908148052089> nibble \n<@1043528908148052089> secretagent \n<@1043528908148052089> skunkpunk \n<@1043528908148052089> snorkelzombie \n<@1043528908148052089> yetilunchbox \n<@1043528908148052089> biodomebotanist \n<@1043528908148052089> cyborgzombie \n<@1043528908148052089> energydrinkzombie \n<@1043528908148052089> extinctionevent \n<@1043528908148052089> hauntingghost \n<@1043528908148052089> hauntingzombie \n<@1043528908148052089> huntinggrounds \n<@1043528908148052089> killerwhale \n<@1043528908148052089> piedpiper \n<@1043528908148052089> squirrelherder \n<@1043528908148052089> synchronizedswimmer \n<@1043528908148052089> totaleclipse \n<@1043528908148052089> zookeeper \n<@1043528908148052089> alienooze \n<@1043528908148052089> area22 \n<@1043528908148052089> dolphinrider \n<@1043528908148052089> hovergoat3000 \n<@1043528908148052089> loudmouth \n<@1043528908148052089> vimpire \n<@1043528908148052089> vitaminz \n<@1043528908148052089> zombieyeti \n<@1043528908148052089> anicentvimpire \n<@1043528908148052089> bflat \n<@1043528908148052089> cosmicyeti \n<@1043528908148052089> interstellarbountyhunter \n<@1043528908148052089> kangaroorider \n<@1043528908148052089> overstuffedzombie \n<@1043528908148052089> primordialcheeseshover \n<@1043528908148052089> sneezingzombie \n<@1043528908148052089> surferzombie \n<@1043528908148052089> locustswarm \n<@1043528908148052089> mondobronto \n<@1043528908148052089> smashinggarg \n<@1043528908148052089> supernovagarg \n<@1043528908148052089> vengefulcyborg \n<@1043528908148052089> deepseagarg \n<@1043528908148052089> kingofthegrill \n<@1043528908148052089> maniacallaugh \n<@1043528908148052089> gargthrowinggarg \n<@1043528908148052089> nursegarg \n<@1043528908148052089> octozombie \n<@1043528908148052089> zombot")
		.setThumbnail("https://tiermaker.com/images/templates/3403531587531359.png")
		.setColor("Random")
		
			.setFooter({text: "To find out more info about the cards in Beastly class please use the commands listed above or click on the buttons below ⏬!"})
		let goat = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/a0/GoatCardImage.png/revision/latest?cb=20180923071125")
			.setTitle("Goat | <:Beastly:1062500894744264714>")
			.setDescription("**- Pet Zombie -**")
			.addFields({name: "Stats", 
									value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 0 <:Brainz:1062503146745774183>"},
								 {
								name: "Ability", 
								value: "This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> when any kind of Goat is hurt."	 
								 },
								 {
									name: "Set-Rarity", 
									value: "**Triassic - Uncommon**" 
								 },
								 {
									 name: "Flavor Text", 
									 value: `Hungry... Smelly... A lot like a Zombie but with 100% more goat.`
								 })
		.setColor("Random")			
	
			let clady = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/2d/CatLadyCardImage.png/revision/latest/scale-to-width-down/250?cb=20170228171957")
			.setTitle("Cat Lady | <:Beastly:1062500894744264714>")
			.setDescription("**- Pet Zombie  -**")
			.addFields({name: "Stats", 
									value: "0 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  value: "This gets +3<:Strength:1062501774612779039> this turn when you play a Pet."
								 },
								 {
									name: "Set-Rarity", 
									value: "**Premium - Super-Rare**" 
								 },
								 {
									 name: "Flavor Text", 
									 value: `The cat on the left is a Z-Tube celebrity.`
								 })
		.setColor("Random")			
	
		let ccut = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/ab/CheeseCutter.png/revision/latest?cb=20180209041700")
			.setTitle("Cheese Cutter | <:Beastly:1062500894744264714>")
			.setDescription("**- Gourmet Mustache Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "**When this hurts the Plant Hero**: __Conjure__ a Gourmet card, and it costs 1<:Brainz:1062503146745774183> less."
								 },
								 {
									 name: "Set-Rarity", value: "**Galatic - Super-Rare**"
								 },
								 {
									name: "Flavor Text", 
									 value: `Is that the exquisite scent of an aged Camembert, or just rotting flesh?`
								 })
		.setColor("Random")			
	
			let dwalk = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/97/Dog_WalkerH.png/revision/latest?cb=20160527113340")
			.setTitle("Dog Walker | <:Beastly:1062500894744264714>")
			.setDescription("**- Pet Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Hunt__" 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Is the Zombie walking the dog, or is the dog walking the Zombie? Hard to say.`
								 })
		.setColor("Random")			
	
			let spunk = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/ac/SkunkPunkCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226110047")
			.setTitle("Skunk Punk | <:Beastly:1062500894744264714>")
			.setDescription("**- Pet Zombie -**")
			.addFields({name: "Stats", 
									value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									name: "Set-Rarity", 
									value: "**Basic - Common**" 
								 },
								 {
									 name: "Flavor Text", 
									 value: `Smelly Zombie is the only Zombie who really gets him, you know?`
								 })
		.setColor("Random")			
	
		let fcat = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/2c/Fraidy-cat-HD.png/revision/latest/scale-to-width-down/250?cb=20170827013854")
			.setTitle("Fraidy Cat | <:Beastly:1062500894744264714>")
			.setDescription("**- Pet Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "When a Plant Trick is played, this gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> and moves to a random lane."
								 },
								 {
									name: "Set-Rarity", 
									value: "**Event**" 
								 },
								 {
									name: "Flavor Text", 
									value: `What's a black cat's favorite color? Purrrrr-ple.`
								 })
		.setColor("Random")			
	
		let nibble = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/10/NibbleCardImage.png/revision/latest/scale-to-width-down/250?cb=20170301171659")
			.setTitle("Nibble | <:Beastly:1062500894744264714>")
			.setDescription("**- Gourmet Trick  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "A Plant gets -1<:Strength:1062501774612779039>/-1<:Health:1062515540712751184>. Heal your Hero for 2." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Just a quick bite.`
								 })
		.setColor("Random")			
	
			let sagent = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/71/SecretAgentHD_CardImage.png/revision/latest?cb=20170403165035")
			.setTitle("Secret Agent | <:Beastly:1062500894744264714>")
			.setDescription("**- Professional Trick  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "__Bounce__ a Zombie, and it gets +3<:Strength:1062501774612779039>/+3<:Health:1062515540712751184>." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Event**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `He likes his brains shaken, not stirred.`
								 })
		.setColor("Random")			
	
			let szomb = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/15/SnorkelZombieCardIcon.png/revision/latest/scale-to-width-down/250?cb=20170228165857")
			.setTitle("Snorkel Zombie | <:Beastly:1062500894744264714>")
			.setDescription("**- Party Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait",  
									value: "__Amphibious__" 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Breathing out: check. Breathing in? Not so much.`
								 })
		.setColor("Random")			
	
			let ylbox = new EmbedBuilder()
      .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e5/Yeti%27s_Lunchbox_PvZH.png/revision/latest/scale-to-width-down/250?cb=20170830134119")
			.setTitle("Yeti Lunchbox | <:Beastly:1062500894744264714>")
			.setDescription("**- Gourmet Pet Trick  -**")
			.addFields({name: "Stats", 
                  value: "1 <:Brainz:1062503146745774183>"
                 },
                 {
                   name: "Ability", 
                   value: "A Zombie gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>."
                 },
                 {
                   name: "Set-Rarity", 
                   value: "**Premium - Uncommon**"
                 },
                 {
                   name: "Flavor Text", 
                   value: `What's inside? A peanut butter and brains sandwich... with the crusts cut off.`
                 })
		.setColor("Random")			
	
			let bbot = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/5c/InterplanetaryGardenerCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226141751")
			.setTitle("Biodome Botanist | <:Beastly:1062500894744264714>")
			.setDescription("**- Mustache Science Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "**When played**: Make a 1<:Strength:1062501774612779039>/1<:Health:1062515540712751184> Plant with no abilities."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Growing Plants in Space? Some of his fellow Zombies think he's crazy, but others appreciate the effort.`
								 })
		.setColor("Random")			
	
		let czombie = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/cb/HD_Cyborg_Zombie_by_Flag_Zombie.png/revision/latest/scale-to-width-down/250?cb=20210304225649")
			.setTitle("Cyborg Zombie | <:Beastly:1062500894744264714>")
			.setDescription("**- Science Zombie  -**")
			.addFields({name: "Stats", 
									value: "3 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"
								 },
								 {
									 name: "Trait", 
									 value: "__Hunt__"
								 },
								 {
									 name: "Ability",  
									 value: "**When destroyed**: Gain a __Vengeful Cyborg__"
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Super-Rare**"
								 },
								 {
									 name: "Flavor Text",
									 value: `He'll be back.`
								 })
		.setColor("Random")			
	
			let edzombie = new EmbedBuilder()
			.setThumbnail("https://pbs.twimg.com/media/C2aG6pFXUAA7MF1.png:large")
			.setTitle("Energy Drink Zombie | <:Beastly:1062500894744264714>")
			.setDescription("**- Gourmet Sports Zombie-**")
			.addFields({name: "Stats", 
									value: "1 <:Frenzy:1062501819592491108>, 1 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Frenzy__" 
								 },
								 {
									 name: "Ability",  
									 value: "**Start of Tricks**: This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> and moves to a random lane."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Event**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `He can quit any time he wants.`
								 })
		.setColor("Random")			
	
			let eevent = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e0/Extinction_Event.png/revision/latest?cb=20171031020147")
			.setTitle("Extinction Event | <:Beastly:1062500894744264714>")
			.setDescription("**- History Trick  -**")
			.addFields({name: "Stats", 
									value: "2 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "A Plant gets -2<:Strength:1062501774612779039>/-2<:Health:1062515540712751184>. All others copies of that Plant also get -2<:Strength:1062501774612779039>/-2<:Health:1062515540712751184>." 
								 }, 
								 {
									name: "Set-Rarity", 
									value: "**Colossal - Super-Rare**" 
								 },
								 {
									 name: "Flavor Text", 
									 value: `Sometimes the evolutionary tree withers at the root`
								 })
		.setColor("Random")			
	
				let hghost = new EmbedBuilder()
      .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/0/04/HD_Haunting_Ghost_by_Flag_Zombie.png/revision/latest/scale-to-width-down/250?cb=20221022222105")
			.setTitle("Haunting Ghost | <:Beastly:1062500894744264714>")
			.setDescription("**- Monster Zombie  -**")
			.addFields({name: "Stats", 
                  value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"
                 }, 
                 {
                   name: "Trait", 
                   value: "__Amphibious__"
                 }, 
                 {
                   name: "Ability",  
                   value: "**When played**: A Plant gets -1<:Strength:1062501774612779039>/-1<:Health:1062515540712751184>."
                 }, 
                 {
                   name: "Set-Rarity", 
                   value: "**Colossal - Uncommon**"
                 }, 
                 {
                   name: "Flavor Text", 
                   value: `HIs he a Zombie? Is he a ghost? He refuses to be pigeonholed.`
                 })
		.setColor("Random")			
	
			let venge = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/a8/HD_Vengeful_Cyborg_by_Flag_Zombie.png/revision/latest/scale-to-width-down/250?cb=20210304225754")
			.setTitle("Vengeful Cyborg | <:Beastly:1062500894744264714>")
					.setDescription("**- Science Zombie  -**")
			.addFields({name: "Stats", 
									value: "5 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 5 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Hunt__" 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Triassic - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: "His toupee went missing in the heat of battle and he's been furious about it ever since"
								 })
			let hzombie = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/15/HauntingZombieCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226203920")
			.setTitle("Haunting Zombie | <:Beastly:1062500894744264714>")
			.setDescription("**- Monster Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "**When destroyed**: Gain a __Haunting Ghost__" 
								 },
								 {
									name: "Set-Rarity", 
									value: "**Premium - Uncommon**" 
								 },
								 {
									 name: "Flavor Text", 
									 value: `He doesn't realize he would look even scarier without the spooky ghost costume.`
								 })
		.setColor("Random")			
	
		let huntgrounds = new EmbedBuilder()
			.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1125140458545365032/hunt.webp")
			.setTitle("Hunting Grounds | <:Beastly:1062500894744264714>")
			.setDescription("**- History Pet Environment  -**")
			.addFields({name: "Stats", 
									value: "2 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "Zombies here have __Hunt__. When a Zombie enters or leaves this lane, it gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Triassic - Super-Rare**"
								 },
								 {
									 name: "Flavor Text",
									 value: `Are the Zombies hunting dinosaurs, or are the dinosaurs hunting them?`
								 })
		.setColor("Random")			
	
			let kwhale = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/48/KillerWhale.png/revision/latest/scale-to-width-down/250?cb=20180213104922")
			.setTitle("Killer Whale | <:Beastly:1062500894744264714>")
			.setDescription("**- Pet Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									 name: "Traits", 
									 value: "__Amphibious__"
								 },
								 {
									name: "Ability",  
									value: "__Fusion__: A Zombie played on this gets +2<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> and __Amphibious__. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Triassic - Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: "Flooding Hollow Earth with water from above, Neptuna attacked with flying whale cavalry. Or really, falling whale cavalry."
								 })
		.setColor("Random")			
	
			let ppip = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/ed/PiedPiperCardSprite.png/revision/latest/scale-to-width-down/250?cb=20170225135002")
			.setTitle("Pied Piper | <:Beastly:1062500894744264714>")
			.setDescription("**- Dancing Pet Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Gravestone__" 
								 },
								 {
									 name: "Ability",  
									 value: "**When revealed**: Plants here get -1<:Strength:1062501774612779039>/-1<:Health:1062515540712751184>."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Basic - Common**"
								 },
								 {
									 name: "Flavor Text", 
									 value: "He was told that playing the pipe would summon raccoon. But whatevs."
								 })
		.setColor("Random")			
	
		let sherd = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/18/Squirrel_Herder_HD.png/revision/latest/scale-to-width-down/250?cb=20161012010733")
			.setTitle("Squirrel Herder | <:Beastly:1062500894744264714>")
			.setDescription("**- Pet Professional Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Gravestone__" 
								 },
								 {
									 name: "Ability",  
									 value: "**When revealed**: Destroy one of their Nuts or Berries."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: "The only thing more difficult than herding cats."
								 })
		.setColor("Random")			
	
		let syncswimmer = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/6e/SynchronizedSwimmerCardImage.png/revision/latest?cb=20171022064547")
			.setTitle("Synchronized Swimmer | <:Beastly:1062500894744264714>")
			.setDescription("**- Dancing Sports Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Amphibious__" 
								 },
								 {
									 name: "Ability", 
									 value: "**When played**: This Zombie copies the <:Strength:1062501774612779039> and <:Health:1062515540712751184> of another Zombie. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Event**"
								 },
								 {
									 name: "Flavor Text", 
									 value: "It takes a lot of practice for two Zombies' heads to fall off at the exact same time."
								 })
		.setColor("Random")			
	
			let tecl = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/53/StinkyMistCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226143820")
			.setTitle("Total Eclipse | <:Beastly:1062500894744264714>")
			.setDescription("**- Environment  -**")
			.addFields({name: "Stats", 
									value: "2 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "Plants here get -1<:Strength:1062501774612779039>/-1<:Health:1062515540712751184>. " 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: "Zombies love a good eclipse. They usually celebrate by eating Plants. And brains."
								 })
		.setColor("Random")			
	
				let zkeep = new EmbedBuilder()
      .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e6/ZookeeperCardImage.png/revision/latest/scale-to-width-down/250?cb=20170302210404")
			.setTitle("Zookeeper | <:Beastly:1062500894744264714>")
			.setDescription("**- Pet Professional Zombie  -**")
			.addFields({name: "Stats", 
                  value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"
                 },
                 {
                   name: "Ability", 
                   value: "When you play a Pet, all Pets get +1<:Strength:1062501774612779039>."
                 },
                 {
                   name: "Set-Rarity", 
                   value: "**Basic - Common**"
                 },
                 {
                   name: "Flavor Text", 
                   value: `Snaaaaake!`
                 })
		.setColor("Random")			
	
		let aooze = new EmbedBuilder()
.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/67/AlienOozeCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226135133")
			.setTitle("Alien Ooze | <:Beastly:1062500894744264714>")
			.setDescription("**- Monster Trick  -**")
			.addFields({name: "Stats", value: "3 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  value: "A Plant here gets -2<:Strength:1062501774612779039>/-2<:Health:1062515540712751184>. \n If it's on heights or an Environment, it gets -6<:Strength:1062501774612779039>/-6<:Health:1062515540712751184> instead. "
								 },
								 {
									 name: "Set-Rarity", value: "**Galactic - Uncommon**"
								 },
								 {
									 name: "Flavor Text", value: `Oozin' for a bruisin'!`
								 })
		.setColor("Random")			
	
		let area22 = new EmbedBuilder()
.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e5/ZombossLabCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226144459")
			.setTitle("Area 22 | <:Beastly:1062500894744264714>")
			.setDescription("**- Science Environment  -**")
			.addFields({name: "Stats", value: "3 <:Brainz:1062503146745774183>"},
								 {name: "Ability",  value: "Zombies here get +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184> and <:Frenzy:1062501819592491108>__Frenzy__."},
									{
										name: "Set-Rarity", value: "**Galactic - Super-Rare**"
									},
								 {
									name: "Flavor Text", value: `"Zombies from outer space? What an absurd conspiracy theory! Now move along. Nothing to see here." - Dr. Zomboss ` 
								 })
		.setColor("Random")			
	
		let drider = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/0/0a/DolphinRider.png/revision/latest/scale-to-width-down/250?cb=20180213105007")
			.setTitle("Dolphin Rider | <:Beastly:1062500894744264714>")
			.setDescription("**- Pet Zombie  -**")
			.addFields({name: "Stats", 
									value: "3 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait",  
									value: "__Amphibious__" 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Basic - Common**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `The dolphin is also a Zombie.`
								 })
		.setColor("Random")			
	
		let hgoat = new EmbedBuilder()
			.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1125142122148941824/HD_Hover-Goat_3000.webp")
			.setTitle("Hover-Goat 3000 | <:Beastly:1062500894744264714>")
			.setDescription("**- Science Pet Zombie  -**")
			.addFields({name: "Stats", 
									value: "1 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Amphibious__" 
								 },
								 {
									 name: "Ability",  
									 value: "**When played**: Another Zombie gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184> \n **When hurt**: __Bounce__ this Goat."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Event**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `The future is Hovering. The future is Radical. The future is Goat.`
								 })
		.setColor("Random")			
	
		let lmouth = new EmbedBuilder()
			.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1125143221362757742/loudmouth.webp")
			.setTitle("Loudmouth | <:Beastly:1062500894744264714>")
			.setDescription("**- Dancing Imp Zombie  -**")
			.addFields({name: "Stats", 
									value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Gravestone__" 
								 },
								 {
									 name: "Ability",  
									 value: "**When revealed**: A Zombie gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184>"
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `What he lacks in size, he makes up for in volume.`
								 })
		.setColor("Random")			
	
			let vimpire = new EmbedBuilder()
      .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/0/03/HD_Vimpire.png/revision/latest/scale-to-width-down/250?cb=20161030151001")
			.setTitle("Vimpire | <:Beastly:1062500894744264714>")
			.setDescription("**- Imp Monster Zombie  -**")
			.addFields({name: "Stats", 
                  value: "2 <:Frenzy:1062501819592491108>, 3 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"
                 },
                 {
                   name: "Trait", 
                   value: "<:Frenzy:1062501819592491108>__Frenzy__"
                 },
                 {
                   name: "Ability", 
                   value: "This gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184> when it destroys a Plant."
                 },
                 {
                   name: "Set-Rarity", 
                   value: "**Premium - Rare**"
                 },
                 {
                   name: "Flavor Text", 
                   value: `He vants to suck your cholorphyll.`
                 })
		.setColor("Random")			
	
		let vitamin = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/82/VitaminZCardImage.png/revision/latest/scale-to-width-down/250?cb=20170225161700")
			.setTitle("Vitamin Z | <:Beastly:1062500894744264714>")
			.setDescription("**- Gourmet Trick  -**")
			.addFields({name: "Stats", 
									value: "3 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									 value: "A Zombie gets +3<:Strength:1062501774612779039>/+3<:Health:1062515540712751184>." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Side effects include headaches, blurred vision, and insatiable hunger.`
								 })
		.setColor("Random")			
	
			let zyeti = new EmbedBuilder()
      .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/3c/Full_HD_Zombie_Yeti.png/revision/latest/scale-to-width-down/1200?cb=20220910010512")
			.setTitle("Zombie Yeti | <:Beastly:1062500894744264714>")
			.setDescription("**- Pet Monster Zombie  -**")
			.addFields({name: "Stats", 
                  value: "3 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"
                 },
                 {
                   name: "Ability", 
                   value: "**When played**: Gain a Yeti Lunchbox. \n **End of turn**: __Bounce__ this Yeti."
                 },
                 {
                   name: "Set-Rarity", 
                   value: "**Premium - Super-Rare**"
                 },
                 {
                   name: "Flavor Text", 
                   value: "Enjoys warm hugs."
                 })
		.setColor("Random")			
	
		let avimp = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/b9/Ancient_Vimpire_cardface.png/revision/latest?cb=20170701125643")
			.setTitle("Ancient Vimpire | <:Beastly:1062500894744264714>")
			.setDescription("**- Imp Monster Zombie  -**")
			.addFields({name: "Stats", value: "3 <:Frenzy:1062501819592491108>, 4 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>"},
								 {
									 name: "Traits", value: "__Amphibious__, <:Frenzy:1062501819592491108>__Frenzy__"
								 }, 
								 {
									name: "Ability",  value: "When any Zombie with <:Frenzy:1062501819592491108>__Frenzy__ destroys a Plant, that Zombie gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184>."
								 },
								 {
									 name: "Set-Rarity", value: "**Colossal - Super-Rare**"
								 },
								 {
									 name: "Flavor Text", value: `Vimpirism - an ancient curse evolved from the dawn of time. `
								 })
		.setColor("Random")			
	
		let bflat = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/b7/BflatCardImage.png/revision/latest/scale-to-width-down/250?cb=20170225185027")
			.setTitle("B-flat | <:Beastly:1062500894744264714>")
			.setDescription("**- Dancing Trick  -**")
			.addFields({name: "Stats", 
									value: "4 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "Destroy a random Plant."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Just wait until you C-Sharp.`
								 })
		.setColor("Random")			
	
		let ibhunter = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/3b/BountyHunterHD.png/revision/latest/scale-to-width-down/250?cb=20180118122906")
			.setTitle("Interstellar Bounty Hunter | <:Beastly:1062500894744264714>")
			.setDescription("**- Science Pirate Zombie  -**")
			.addFields({name: "Stats", 
									value: "4 <:Frenzy:1062501819592491108>, 4 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>"},
								 {
									 name: "Traits", 
									 value: "__Hunt__, <:Frenzy:1062501819592491108>__Frenzy__"
								 },
								 {
									 name: "Ability",  
									 value: "When this destroys a plant, draw a card. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Legendary**"
								 },
								 {
									 name: "Flavor Text", 
									 value: "If you have a bounty on your head, she won't stop until she eats your brains. It's not personal. It's just business."
								 })
		.setColor("Random")			
	
		let krider = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/fd/Kangaroo_Rider_HD.png/revision/latest?cb=20161012004842")
			.setTitle("Kangaroo Rider | <:Beastly:1062500894744264714>")
			.setDescription("**- Imp Pet Zombie  -**")
			.addFields({name: "Stats", 
									value: "4 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "**When hurt**: __Bounce__ this Kangaroo." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: "Sure, it's a bumpy ride, but it beats walking. Have you seen an Imp's legs?"
								 })
		.setColor("Random")			
	
		let oszombie = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e2/Fat-Obi.png/revision/latest/scale-to-width-down/250?cb=20220116164347")
			.setTitle("Overstuffed Zombie | <:Beastly:1062500894744264714>")
			.setDescription("**- Gourmet Mustache Zombie  -**")
			.addFields({name: "Stats", 
									value: "4 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "This heals to full and gets +2 <:Health:1062515540712751184> when it destroys a Plant."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Event**"
								 },
								 {
									 name: "Flavor Text", 
									 value: "His cholesterol level is off the charts, and yet he seems to be in remarkably good Health. "
								 })
		.setColor("Random")			
	
		let pcshover = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1125145336042762331/PrimordialCheeseShover.webp")
		.setTitle("Primordial Cheese Shover | <:Beastly:1062500894744264714>")
		.setDescription("- **Gourmet History Zombie** -")	
		.addFields({name: "Stats", 
								value: "4 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>"},
							 {
								name: "Ability",  
								value: "__Zombie Evolution__: Destroy a Plant." 
							 },
							 {
								 name: "Set-Rarity", 
								 value: "**Colossal - Rare**"
							 },
							 {
								 name: "Flavor Text", 
								 value: "He's wheely cheesy."
							 })
		.setColor("Random")			
	
	let szombie = new EmbedBuilder()
			.setThumbnail("https://o.remove.bg/downloads/befe4fa9-fd6a-4fa3-aebb-3a40efa66e6c/df3cmcj-425b1cbd-6172-434e-9032-d9c1057baabe-removebg-preview.png")
			.setTitle("Sneezing Zombie | <:Beastly:1062500894744264714>")
					.setDescription("**- Party Zombie -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "Plants and the Plant Hero can't be healed. \n **When played**: All Plants get-1<:Strength:1062501774612779039>/-1<:Health:1062515540712751184>. " 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Event**"
								 },
								 {
									 name: "Flavor Text", 
									 value: "Flowers give her awful allergies and sickening sneezes. Is that why she wears one on her head?"
								 })
			.setColor("Random")			
	
		let surfer = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/c2/SurferZombieCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226143948")
		.setTitle("Surfer Zombie | <:Beastly:1062500894744264714>")
		.setDescription("- **Party Sports Zombie** -")	
		.addFields({name: "Stats", 
								value: "4 <:Frenzy:1062501819592491108>, 3 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>"},
							 {
								 name: "Ability",  
								 value: "__Amphibious__, <:Frenzy:1062501819592491108>__Frenzy__"
							 },
							 {
								 name: "Set-Rarity", 
								 value: "**Galactic - Uncommon**"
							 },
							 {
								 name: "Flavor Text", 
								 value: "He used to hang 10 with the best of them, but ever since he lost that toe to a shark he hasn't been able to hang more than 9."
							 })
		.setColor("Random")			
	
		let locust = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/f1/LocustSwarmCardImage.png/revision/latest/scale-to-width-down/250?cb=20170301150816")
		.setTitle("Locust Swarm | <:Beastly:1062500894744264714>")
		.setDescription("- **Pet Trick** -")	
		.addFields({name: "Stats", 
								value: "5 <:Brainz:1062503146745774183>"},
							 {
								name: "Ability",  
								value: "**When Played**: Destroy a Plant." 
							 },
							 {
								 name: "Set-Rarity", 
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text", 
								 value: "A plague upon your lawns!"
							 })
		.setColor("Random")			
	
		let mbronto = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/c5/HD_Mondo_Bronto_by_Flag_Zombies.png/revision/latest/scale-to-width-down/250?cb=20210227224646")
		.setTitle("Mondo Bronto | <:Beastly:1062500894744264714>")
		.setDescription("-**History Pet Zombie**-")	
		.addFields({name: "Stats", 
								value: "5 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 5 <:Brainz:1062503146745774183>"},
							 {
								name: "Traits", 
								value: "__Amphibious__" 
							 },
							 {
								 name: "Ability",  
								 value: "__Dino-Roar__: This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> and destroy all Plants here."
							 },
							 {
								 name: "Set-Rarity", 
								 value: "**Colossal - Legendary**"
							 },
							 {
								 name: "Flavor Text", 
								 value: "Deep in Hollow Earth, Zombie warrior women tame herds of enormous dinosaurs. Any good history book will tell you that."
							 })
		.setColor("Random")			
	
		let sgarg = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/villains/images/1/18/HDsmashinggarg.png/revision/latest?cb=20200124222546")
			.setTitle("Smashing Gargantuar | <:Beastly:1062500894744264714>")
					.setDescription("**- Gargantuar Zombie -**")
			.addFields({name: "Stats", 
									value: "5 <:Frenzy:1062501819592491108>, 5 <:Health:1062515540712751184>, 5 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability", 
									value: "All Gargantuars have <:Frenzy:1062501819592491108>__Frenzy__." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Rare**"
								 },
								 {
									 name: "Flavor Text",
									 value: "When he phones home, it means something completely different."
								 })
			.setColor("Random")			
	
			let novagarg = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/f5/Supernova_Gargantuar_HD.png/revision/latest/scale-to-width-down/250?cb=20170603161735")
			.setTitle("Supernova Gargantuar | <:Beastly:1062500894744264714>")
					.setDescription("**- Science Gargantuar Zombie -**")
			.addFields({name: "Stats", 
									value: "5 <:Frenzy:1062501819592491108>, 7 <:Health:1062515540712751184>, 5 <:Brainz:1062503146745774183>"},
								 {
									name: "Traits", 
									value: "<:Frenzy:1062501819592491108> __Frenzy__"  
								 },
								 {
									 name: "Ability",  
									 value: "When a Gargantuar destroys a Plant, destroy all copies of that Plant."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Legendary**"
								 },
								 {
									 name: "Flavor Text", 
									 value: "This one's got a real temper on him. When he decides to take out a Plant...it's brutal. Just brutal."
								 })
			.setColor("Random")			
	
			let dsgarg = new EmbedBuilder()
			.setThumbnail("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/11c1d4dc-5483-433e-a5e6-d51a36c6ca1d/deneq38-7877cec2-6c67-4c15-9137-cdceb4a78c74.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzExYzFkNGRjLTU0ODMtNDMzZS1hNWU2LWQ1MWEzNmM2Y2ExZFwvZGVuZXEzOC03ODc3Y2VjMi02YzY3LTRjMTUtOTEzNy1jZGNlYjRhNzhjNzQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.X9nAWErs97baiwAhgyIo0pkGEa0IZEan_BxQ4zfvPaM")
			.setTitle("Deep Sea Gargantuar | <:Beastly:1062500894744264714>")
			.setDescription("**- Gargantuar Monster Zombie  -**")
			.addFields({name: "Stats", 
									value: "7 <:Strength:1062501774612779039>, 8 <:Health:1062515540712751184>, 6 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait",  
									value: "__Amphibious__" 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: "Has every single issue of Deep Sea Quarterly, but rarely has time to read them. "
								 })
		.setColor("Random")			
	
		let kotgrill = new EmbedBuilder()
			.setThumbnail("https://o.remove.bg/downloads/3fcfdec3-53b0-4925-bb73-320254393b66/demperv-04b41a8c-96b6-4725-ba0c-542eeae6ccef-removebg-preview.png")
			.setTitle("King of the Grill | <:Beastly:1062500894744264714>")
			.setDescription("**- Professional Gargantuar Zombie -**")
			.addFields({name: "Stats", 
									value: "6 <:Frenzy:1062501819592491108>, 6 <:Health:1062515540712751184>, 6 <:Brainz:1062503146745774183>"},
									{
									name: "Trait", 
									value: "<:Frenzy:1062501819592491108> __Frenzy__"
									},
								 {
									 name: "Ability",  
									 value: "When a Gargantuar destroys a Plant, __Conjure__ a Gourmet card."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Event**"
								 },
								 {
									 name: "Flavor Text", 
									 value: "Chillin' beside the ol' backyard grill, cookin' up some brains, hangin' with his zombies... that's the good unlife."
								 })
		.setColor("Random")			
	
			let mlaugh = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/c9/ManiacalLaughHD.png/revision/latest/scale-to-width-down/250?cb=20170419204237")
			.setTitle("Maniacal Laugh | <:Beastly:1062500894744264714>")
			.setDescription("**- Trick -**")
			.addFields({name: "Stats", 
									value: "6 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "A Zombie gets +5<:Strength:1062501774612779039>/+5<:Health:1062515540712751184> and \n <:Frenzy:1062501819592491108>__Frenzy__."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `It's not so much "hahaha" as it is "mwahahaha."`
								 })
		.setColor("Random")			
	
			let gtgarg = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/a5/Gargantuar-Throwing_Gargatuar_Card_Face.png/revision/latest/scale-to-width-down/250?cb=20170725062254")
		.setTitle("Gargantuar-Throwing Gargantuar | <:Beastly:1062500894744264714>")
		.setDescription("**- Pirate Gargantuar Zombie -**")	
		.addFields({name: "Stats", 
								value: "6 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 7 <:Brainz:1062503146745774183>"},
							 {
								name: "Ability",  
								value: "**When hurt**: Make another random Gargantuar in a random lane." 
							 },
							 {
								 name: "Set-Rarity", 
								 value: "**Premium - Legendary**"
							 })
		.setColor("Random")			
	
			let ngarg = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/pvzcc/images/a/a2/NurseGargatuar_PvZ2.png/revision/latest?cb=20180804101947")
			.setTitle("Nurse Gargantuar | <:Beastly:1062500894744264714>")	
			.setDescription("**- Professional Gargantuar Zombie -**") 
				.addFields({name: "Stats", 
										value: "6 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 7 <:Brainz:1062503146745774183>"},
									 {
										 name:"Ability",  
										 value: "When this does damage, heal your Hero that much."
									 },
									 {
										 name: "Set-Rarity", 
										 value: "**Premium - Legendary**"
									 },
									 {
										 name: "Flavor Text", 
										 value: "Their bedside manner could use some work."
									 }) 
				.setColor("Random")
				 
		let ozombie = new EmbedBuilder()
		.setThumbnail("https://o.remove.bg/downloads/b91f62b8-b1f6-4e23-b7d6-c82c82f4e501/octo_zombie_pvz_heroes_hd_image_by_allstarzombie55_ddfsqjy-fullview-removebg-preview.png")
		.setTitle("Octo Zombie | <:Beastly:1062500894744264714>")
		.setDescription("**- Pet Zombie -**")
			.addFields({name: "Stats", 
									value: "8<:Frenzy:1062501819592491108>, 8 <:Health:1062515540712751184>"},
								 {
									name: "Traits", 
									 value: "__Amphibious__, <:Frenzy:1062501819592491108>__Frenzy__" 
								 },
								 {
									 name: "Ability", 
									 value: "**When destroyed**: Gain an Octo Zombie"
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Legendary**"
								 },
								 {
									 name: "Flavor Text", 
									 value: "Is the correct term 'octopuses' or 'octopi'? \n You'd think he'd have an opinion, but he doesn't."
								 })
		.setColor("Random")			
	
		let zombot = new EmbedBuilder()
    .setThumbnail("https://static.wikia.nocookie.net/pvzcc/images/6/63/Zombot_1000.png/revision/latest?cb=20190407121915")
		.setTitle("Zombot 1000 | <:Beastly:1062500894744264714>")
		.setDescription("**- Science Gargantuar Zombie -**")
		.addFields({name: "Stats", 
                value: "9 <:Strength:1062501774612779039>, 9 <:Health:1062515540712751184>, 9 <:Brainz:1062503146745774183>"
               },
               {
                 name: "Ability", 
                 value: "**When played**: Destroy all Plants"
               },
               {
                 name: "Set-Rarity", 
                 value: "**Premium - Legendary**"
               },
               {
                 name: "Flavor Text", 
                 value: "The first 999 Zombots are now considered classics."
               })
		.setColor("Random")			
	
			const m = await	message.channel.send({embeds: [bcards], components: [row] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter})
		collector.on("collect", async i => {
			if(i.customId == 'go'){
				await i.update({embeds: [goat], components: [go]})
			}
			if(i.customId == 'cl'){
				await i.update({embeds: [clady], components: [cl]})
			}
			if(i.customId == 'helpb'){
				await i.update({embeds: [bcards], components: [row] } )
			}
				if(i.customId == 'goat'){
				await i.update({embeds: [goat], components: [go]})
			}
			if(i.customId == 'cc'){
				await i.update({embeds: [ccut], components: [cc]})
			}
						if(i.customId == 'clady'){
				await i.update({embeds: [clady], components: [cl]})
			}
			if(i.customId == 'dw'){
				await i.update({embeds: [dwalk], components: [dw]})
			}
				if(i.customId == 'ccut'){
				await i.update({embeds: [ccut], components: [cc]})
			}
			if(i.customId == 'fc'){
				await i.update({embeds: [fcat], components: [fc]})
			}
				if(i.customId == 'dwalk'){
				await i.update({embeds: [dwalk], components: [dw]})
			}
			if(i.customId == 'nib'){
				await i.update({embeds: [nibble], components: [nib]})
			}
			if(i.customId == 'sa'){
				await i.update({embeds: [sagent], components: [sa]})
			}
						if(i.customId == 'fcat'){
				await i.update({embeds: [fcat], components: [fc]})
			}
			if(i.customId == 'sz'){
				await i.update({embeds: [szomb], components: [sz]})
			}
			if(i.customId == 'sagent'){
				await i.update({embeds: [sagent], components: [sa]})
			}
			if(i.customId == 'sp'){
			await i.update({embeds: [spunk], components: [sp]})
			}
					if(i.customId == 'spunk'){
			await i.update({embeds: [spunk], components: [sp]})
			}
						if(i.customId == 'szomb'){
				await i.update({embeds: [szomb], components: [sz]})
			}
			if(i.customId == 'ylb'){
				await i.update({embeds: [ylbox], components: [ylb]})
			}
			if(i.customId == 'bb'){
				await i.update({embeds: [bbot], components: [bb]})
			}
					if(i.customId == 'ylbox'){
				await i.update({embeds: [ylbox], components: [ylb]})
			}
			if(i.customId == 'cz'){
				await i.update({embeds: [czombie], components: [cz, vcz]})
			}
						if(i.customId == 'bbot'){
				await i.update({embeds: [bbot], components: [bb]})
			}
			if(i.customId == 'edz'){
				await i.update({embeds: [edzombie], components: [edz]})
			}
				if(i.customId == 'czombie'){
				await i.update({embeds: [czombie], components: [cz, vcz]})
			}
			if (i.customId == 'vcz')  {	
				await i.reply({embeds: [venge], ephemeral: true } )
			}
			if(i.customId == 'ee'){
				await i.update({embeds: [eevent], components: [ee]})
			}
						if(i.customId == 'edzombie'){
				await i.update({embeds: [edzombie], components: [edz]})
			}
			if(i.customId == 'hgho'){
				await i.update({embeds: [hghost], components: [hgho]})
			}
					if(i.customId == 'eevent'){
				await i.update({embeds: [eevent], components: [ee]})
			}
			if(i.customId == 'hz'){
				await i.update({embeds: [hzombie], components: [hz, boo]})
			}
					if (i.customId == 'boo') {
				await i.reply({embeds: [hghost],ephemeral: true } )
			}
				if(i.customId == 'hghost'){
				await i.update({embeds: [hghost], components: [hgho]})
			}
			if(i.customId == 'hunt'){
				await i.update({embeds: [huntgrounds], components: [hunt]})
			}
					if(i.customId == 'hzombie'){
				await i.update({embeds: [hzombie], components: [hz, boo]})
			}
			if(i.customId == 'kw'){
				await i.update({embeds: [kwhale], components: [kw]})
			}
				if(i.customId == 'huntgrounds'){
				await i.update({embeds: [huntgrounds], components: [hunt]})
			}
			if(i.customId == 'pp'){
				await i.update({embeds: [ppip], components: [pp]})
			}
			if(i.customId == 'kwhale'){
				await i.update({embeds: [kwhale], components: [kw]})
			}
			if(i.customId == 'sh'){
				await i.update({embeds: [sherd], components: [sh]})
			}
					if(i.customId == 'ppip'){
				await i.update({embeds: [ppip], components: [pp]})
			}
			if(i.customId == 'sync'){
				await i.update({embeds: [syncswimmer], components: [sync]})
			}
						if(i.customId == 'sherd'){
				await i.update({embeds: [sherd], components: [sh]})
			}
			if(i.customId == 'te'){
				await i.update({embeds: [tecl], components: [te]})
			}
						if(i.customId == 'syncswimmer'){
				await i.update({embeds: [syncswimmer], components: [sync]})
			}
			if(i.customId == 'zk'){
				await i.update({embeds: [zkeep], components: [zk]})
			}
						if(i.customId == 'tecl'){
				await i.update({embeds: [tecl], components: [te]})
			}
			if(i.customId == 'ao'){
				await i.update({embeds: [aooze], components: [ao]})
			}
					if(i.customId == 'zkeep'){
				await i.update({embeds: [zkeep], components: [zk]})
			}
			if(i.customId == 'a22'){
				await i.update({embeds: [area22], components: [a22]})
			}
				if(i.customId == 'aooze'){
				await i.update({embeds: [aooze], components: [ao]})
			}
			if(i.customId == 'dr'){
				await i.update({embeds: [drider], components: [dr]})
			}
					if(i.customId == 'area22'){
				await i.update({embeds: [area22], components: [a22]})
			}
			if(i.customId == 'hg'){
				await i.update({embeds: [hgoat], components: [hg]})
			}
					if(i.customId == 'drider'){
				await i.update({embeds: [drider], components: [dr]})
			}
			if(i.customId == 'lm'){
				await i.update({embeds: [lmouth], components: [lm]})
			}
					if(i.customId == 'hgoat'){
				await i.update({embeds: [hgoat], components: [hg]})
			}
			if(i.customId == 'vimp'){
				await i.update({embeds: [vimpire], components: [vimp]})
			}
					if(i.customId == 'lmouth'){
				await i.update({embeds: [lmouth], components: [lm]})
			}
			if(i.customId == 'vit'){
				await i.update({embeds: [vitamin], components: [vit]})
			}
					if(i.customId == 'vimpire'){
				await i.update({embeds: [vimpire], components: [vimp]})
			}
			if(i.customId == 'zy'){
				await i.update({embeds: [zyeti], components: [zy, lunch]})
			}
					if (i.customId == 'lunch')  {
				await i.reply({embeds: [ylbox], ephemeral: true } )
			}
					if(i.customId == 'vitamin'){
				await i.update({embeds: [vitamin], components: [vit]})
			}
			if(i.customId == 'av'){
				await i.update({embeds: [avimp], components: [av]})
			}
						if(i.customId == 'zyeti'){
				await i.update({embeds: [zyeti], components: [zy, lunch]})
			}
			if(i.customId == 'bf'){
				await i.update({embeds: [bflat], components: [bf]})
			}
				if(i.customId == 'avimp'){
				await i.update({embeds: [avimp], components: [av]})
			}
			if(i.customId == 'ibh'){
				await i.update({embeds: [ibhunter], components: [ibh]})
			}
				if(i.customId == 'bflat'){
				await i.update({embeds: [bflat], components: [bf]})
			}
			if(i.customId == 'kr'){
				await i.update({embeds: [krider], components: [kr]})
			}
				if(i.customId == 'ibhunter'){
				await i.update({embeds: [ibhunter], components: [ibh]})
			}
			if(i.customId == 'osz'){
				await i.update({embeds: [oszombie], components: [osz]})
			}
			if(i.customId == 'krider'){
				await i.update({embeds: [krider], components: [kr]})
			}
			if(i.customId == 'pcs'){
				await i.update({embeds: [pcshover], components: [pcs]})
			}
			if(i.customId == 'oszombie'){
				await i.update({embeds: [oszombie], components: [osz]})
			}
			if(i.customId == 'szom'){
				await i.update({embeds: [szombie], components: [szom]})
			}
						if(i.customId == 'pcshover'){
				await i.update({embeds: [pcshover], components: [pcs]})
			}
			if(i.customId == 'surf'){
				await i.update({embeds: [surfer], components: [surf]})
			}
				if(i.customId == 'szombie'){
				await i.update({embeds: [szombie], components: [szom]})
			}
			if(i.customId == 'loc'){
				await i.update({embeds: [locust], components: [loc]})
			}
				if(i.customId == 'surfer'){
				await i.update({embeds: [surfer], components: [surf]})
			}
			if(i.customId == 'mb'){
				await i.update({embeds: [mbronto], components: [mb]})
			}
					if(i.customId == 'locust'){
				await i.update({embeds: [locust], components: [loc]})
			}
			if(i.customId == 'sg'){
				await i.update({embeds: [sgarg], components: [sg]})
			}
			if(i.customId == 'mbronto'){
				await i.update({embeds: [mbronto], components: [mb]})
			}
			if(i.customId == 'nova'){
				await i.update({embeds: [novagarg], components: [nova]})
			}
				if(i.customId == 'sgarg'){
				await i.update({embeds: [sgarg], components: [sg]})
			}
				if (i.customId == 'vczom')  {	
				await i.update({embeds: [venge], components: [vczom] } )
			}
					if(i.customId == 'novagarg'){
				await i.update({embeds: [novagarg], components: [nova]})
			}
			if(i.customId == 'dsg'){
				await i.update({embeds: [dsgarg], components: [dsg]})
			}
				if (i.customId == 'vczombie')  {	
				await i.update({embeds: [venge], components: [vczom] } )
			}
			if(i.customId == 'kotg'){
				await i.update({embeds: [kotgrill], components: [kotg]})
			}
				if(i.customId == 'dsgarg'){
				await i.update({embeds: [dsgarg], components: [dsg]})
			}
			if(i.customId == 'ml'){
				await i.update({embeds: [mlaugh], components: [ml]})
			}
						if(i.customId == 'kotgrill'){
				await i.update({embeds: [kotgrill], components: [kotg]})
			}
			if(i.customId == 'gtg'){
				await i.update({embeds: [gtgarg], components: [gtg]})
			}
				if(i.customId == 'mlaugh'){
				await i.update({embeds: [mlaugh], components: [ml]})
			}
			if(i.customId == 'ng'){
				await i.update({embeds: [ngarg], components: [ng]})
			}
			if(i.customId == 'gtgarg'){
				await i.update({embeds: [gtgarg], components: [gtg]})
			}
			if(i.customId == 'oz'){
				await i.update({embeds: [ozombie], components: [oz]})
			}
					if(i.customId == 'ngarg'){
				await i.update({embeds: [ngarg], components: [ng]})
			}
			if(i.customId == 'bot'){
				await i.update({embeds: [zombot], components: [bot]})
			}
				if(i.customId == 'ozombie'){
				await i.update({embeds: [ozombie], components: [oz]})
			}
			if(i.customId == 'zombot'){
				await i.update({embeds: [zombot], components: [bot]})
			}
			if(i.customId == 'help'){
				await i.update({embeds: [bcards], components: [row] } )
			}
		})
	}
}
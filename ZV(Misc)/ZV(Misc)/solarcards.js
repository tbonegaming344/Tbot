const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
module.exports = {
	name: `solarcards`,
	aliases: [`solarhelp`, `helpsolar`, `solar`, `cardssolar`, `cardsolar`],
	category: `Miscellaneous`,
	run: async(client, message, args)=> {
				const row = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('copia')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('lb')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const lb = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('helps')
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
                    .setCustomId('lbuddy')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('cm')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const cm = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('bflower')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('hp')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const hp = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('cmoss')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('kp')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const kp = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('hpumpkin')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('mg')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const mg = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('kpult')
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
                    .setCustomId('mglory')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('sf')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const sf = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('psf')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('as')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const as = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('sflower')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('es')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const es = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('asaucer')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('fs')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const fs = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('espore')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('pm')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const pm = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('fshroom')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('ss')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const ss = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('pmd')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('sun')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
					const sun = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('ssage')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('tsf')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const tsf = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('sunshroom')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('wb')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const wb = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('tsflower')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('t')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const t = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('wballons')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('cf')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const cf = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('taco')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('j')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const j = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('cflower')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('km')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const km = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('jack')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('mgr')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const mgr= new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('kmech')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('mn')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const mn = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('mgrass')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('sw')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const sw = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('mnuts')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('seed')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const seed = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('swinds')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('ss2')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const ss2 = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('sunseed')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('vft')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const vft = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('ss3')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('waz')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
					const waz = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('vftrap')
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
                    .setCustomId('wazombie')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('chomp')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const chomp = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('brang')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('eb')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const eb = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('chomper')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('hc')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const hc = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('eberry')
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
                    .setCustomId('hchoke')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('mpsf')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const mpsf = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('lmower')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('str')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const str = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('mpsflower')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('vftp')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const vftp = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('strike')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('wing')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const wing = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('vftplanet')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('aloe')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const aloe = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('wingnut')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('astro')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const astro = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('aloesa')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('briar')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const briar = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('cado')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('pf')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const pf = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('brose')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('squ')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const squ = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('pflower')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('cob')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const cob = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('squash')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('laser')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const laser = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('cobcan')
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
                    .setCustomId('laserbean')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('tc')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const tc = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('spumpkin')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('thc')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const thc = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('tcuke')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('ts')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const ts = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('thchomper')
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
                    .setCustomId('tstool')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('corn')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const corn = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('avera')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('help')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const sunnier = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('sunnier')
                    .setLabel('Sunnier Shroom')
                    .setStyle(ButtonStyle.Primary)
										.setEmoji('<:SunnierShroom_HD:1107382878540660736>')
            );
		const sunflower = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('sunflower')
                    .setLabel('Sunflower')
                    .setStyle(ButtonStyle.Primary)
										.setEmoji('<:sunflowers:1107425771263361174>')
            );
				const pit = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('pit')
                    .setLabel('Astrocado Pit')
                    .setStyle(ButtonStyle.Success)
										.setEmoji('<:AstrocadoPitCardImage:1107464101103411280>')
            );
		let solar = new EmbedBuilder()
		.setTitle("Solar Cards | <:Solar:1062502678384607262>")
		.setDescription("The cards in the solar class are \n<@1043528908148052089> lilbuddy \n<@1043528908148052089> bellflower \n<@1043528908148052089> cosmoss \n<@1043528908148052089> hauntedpumpking \n<@1043528908148052089> kernelpult \n<@1043528908148052089> morningglory \n<@1043528908148052089> primalsunflower \n<@1043528908148052089> sunflower \n<@1043528908148052089> applesaucer \n<@1043528908148052089> eyespore \n<@1043528908148052089> fumeshroom \n<@1043528908148052089> peppermd \n<@1043528908148052089> sagesage \n<@1043528908148052089> sunshroom \n<@1043528908148052089> twinsunflower \n<@1043528908148052089> waterballons \n<@1043528908148052089> taco \n<@1043528908148052089> cosmicflower \n<@1043528908148052089> jackolantern \n<@1043528908148052089> ketchupmechanic \n<@1043528908148052089> maginifyinggrass \n<@1043528908148052089> mixednuts \n<@1043528908148052089> solarwinds \n<@1043528908148052089> sunflowerseed \n<@1043528908148052089> sunniershroom \n<@1043528908148052089> venusflytrap \n<@1043528908148052089> whackazombie \n<@1043528908148052089> bloomerang \n<@1043528908148052089> chomper \n<@1043528908148052089> elderberry \n<@1043528908148052089> heartichoke \n<@1043528908148052089> lawnmower \n<@1043528908148052089> metalpetalsunflower \n<@1043528908148052089> sunstrike \n<@1043528908148052089> venusflytraplanet \n<@1043528908148052089> wingnut \n<@1043528908148052089> aloesaurus \n<@1043528908148052089> astrocado \n<@1043528908148052089> briarrose \n<@1043528908148052089> powerflower \n<@1043528908148052089> squash \n<@1043528908148052089> cobcannon \n<@1043528908148052089> laserbean \n<@1043528908148052089> smashingpumpkin \n<@1043528908148052089> tacticalcuke \n<@1043528908148052089> threeheadedchomper \n<@1043528908148052089> toadstool \n<@1043528908148052089> astrovera \n<@1043528908148052089> cornucopia")
		.setColor("Random")
		
		.setThumbnail("https://static.wikia.nocookie.net/pvzcc/images/1/15/PvZH_Solar_Icon.png/revision/latest?cb=20160803221419") 
			.setFooter({text: "To find out more info about the cards in Solar class please use the commands listed above or click on the buttons below ⏬!"})
		let lbuddy = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/16/LilBuddyHD.png/revision/latest/scale-to-width-down/250?cb=20220402085330")
		.setTitle("Lil' Buddy | <:Solar:1062502678384607262>")
		.setDescription("**- Flower Seed Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 0 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "**When played:** Heal your Hero for 2. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Wait, you want me to go in *front*?!?"
							 })
		let bflower = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1106977548925157446/Bellflower.webp")
		.setTitle("Bellflower | <:Solar:1062502678384607262>")
		.setDescription("**- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: "She wants to be friends with Snowdrop soooo badly, but she feels like she's always getting the cold shoulder."
							 })
				let cmoss = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1107113340502806629/CosmossTrue.webp")
		.setTitle("Cosmoss | <:Solar:1062502678384607262>")
		.setDescription("**- Moss Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When an Environment is played, this gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "He's Peel deGrass Lichen's biggest fan."
							 })
		let hpumpkin = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1107115930577813595/Pumpking_HD.webp")
		.setTitle("Haunted Pumpking | <:Solar:1062502678384607262>")
		.setDescription("**- Squash Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** The Zombie player __Conjures__ a Monster."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: "For generations, the Pumpkings have kept their realms safe from a terrible curse. Tonight, they finally face their greatest fear."
							 })
		let kpult = new EmbedBuilder()
	.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1107309838100344842/KernelPult.webp")
.setTitle("Kernel-Pult | <:Solar:1062502678384607262>")
	.setDescription("**- Corn Plant -**")
	.setColor("Random")
	
	.addFields({name: "Stats",
						 	value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
						 {
							 name: "Trait",
							 value: "__Team-Up__"
						 },
						 {
							 name: "Ability",
							 value: "**When played on the Heights:** A Zombie gets -1<:Strength:1062501774612779039>/-1<:Health:1062515540712751184>."
						 },
						 {
							 name: "Set-Rarity",
							 value: "**Colossal - Uncommon**"
						 },
						 {
							 name: "Flavor Text",
							 value: "Insert corny joke here."
						 })
		let mglory = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/d/d3/HD_Morning_Glory%282%29.png/revision/latest?cb=20161021055433")
	.setTitle("Morning Glory | <:Solar:1062502678384607262>")
	.setDescription("**- Flower Plant -**")
	.setColor("Random")
	
	.addFields({name: "Stats",
						 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
						 {
							 name: "Ability",
							 value: "**When played:** This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> if you made at least 6<:Sun:1062501177679413409> this turn."
						 },
						 {
							 name: "Set-Rarity",
							 value: "**Premium - Uncommon**"
						 },
						 {
							 name: "Flavor Text",
							 value: "Just don't talk to her before she's had her Coffee Bean."
						 })
		let psf = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/89/PrimalSunflowerHD.png/revision/latest/scale-to-width-down/250?cb=20170804165257")
		.setTitle("Primal Sunflower | <:Solar:1062502678384607262>")
		.setDescription("**- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**Start of Turn:** You get +1<:Sun:1062501177679413409>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Sunflowers are notorious pacifists. But isolated in the center of Hollow Earth, they evolved a new savagery. Sunny, adorable savagery."
							 })
				let sflower = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/p__/images/b/b3/HD_Sunflower.png/revision/latest?cb=20201121031511&path-prefix=protagonist")
		.setTitle("Sunflower | <:Solar:1062502678384607262>")
		.setDescription("**- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "**Start of Turn:** You get +1<:Sun:1062501177679413409>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Not to brag, but I'm pretty much your basic franchise-founding superstar."`
							 })
			let asaucer = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/4a/Apple_Saucer_HD.png/revision/latest/scale-to-width-down/250?cb=20170227033131")
		.setTitle("Apple-Saucer | <:Solar:1062502678384607262>")
		.setDescription("**- Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** If you made at least 6<:Sun:1062501177679413409> this turn, this gets <:Strikethrough:1062502987425140806>__Strikethrough__."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Watchful Quasar Wizards sometimes spot an Unidentified Fruiting Object."
							 })
		let espore = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/93/Eye-Spore.png/revision/latest/scale-to-width-down/250?cb=20201120095447")
		.setTitle("Eyespore | <:Solar:1062502678384607262>")
		.setDescription("**- Moss Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**__Fusion__:** Destroy a Zombie here."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Really good at staring contests."
							 })
			let fshroom = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1107357801153568931/HD_Fume-Shroom.webp")
		.setTitle("Fume-Shroom | <:Solar:1062502678384607262>")
		.setDescription("**- Mushroom Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strikethrough:1062502987425140806>, 1 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:Strikethrough:1062502987425140806>__Strikethrough__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"I'm like the wind. Near a hog farm."`
							 })
			let pmd = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/9c/HD_Pepper_M.D..png/revision/latest?cb=20160502034855")
		.setTitle("Pepper M.D. | <:Solar:1062502678384607262>")
		.setDescription("**- Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "This gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184> when a Plant or your Hero is healed. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"A toast to your health... and mine!"`
							 })
		let ssage = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/ea/HD_Sage_Sage.png/revision/latest?cb=20160429141436")
		.setTitle("Sage Sage | <:Solar:1062502678384607262>")
		.setDescription("**- Leafy Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** If you made at least 6<:Sun:1062501177679413409> this turn, draw a card. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Got his start writing messages for fortune cookies."
							 })
		let sunshroom = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1107378071859908738/SunShroomPvZH.webp?width=527&height=567")
		.setTitle("Sun-Shroom | <:Solar:1062502678384607262>")
		.setDescription("**- Mushroom Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "**Start of Turn:** You get +1<:Sun:1062501177679413409> this turn and this transforms into a __Sunnier-Shroom__."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Fun in the Sun? That's for other Plants. I just make the stuff. I don't actually enjoy it."`
							 })
		let tsflower = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/poohadventures/images/4/42/Twin_Sunflower_%28PvZH%29.png/revision/latest/scale-to-width-down/250?cb=20211125200301")
		.setTitle("Twin Sunflower | <:Solar:1062502678384607262>")
		.setDescription("**- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "**Start of Turn:** You get +2<:Sun:1062501177679413409> this turn. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"We're actually only fraternal twins."`
							 })
		const ss1 = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/5b/Sunnier-Shroom_HD.png/revision/latest?cb=20200805002257")
		.setTitle("Sunnier-Shroom | <:Solar:1062502678384607262>")
		.setDescription("**- Mushroom Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "**Start of Turn:** You get +2<:Sun:1062501177679413409> this turn. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Compared to his little brother, he's the one with the sunnier disposition."
							 })
		let wballons = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/9e/HD_Water_Balloons.png/revision/latest?cb=20160606171525")
		.setTitle("Water Balloons | <:Solar:1062502678384607262>")
		.setDescription("**- Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "A Zombie gets -1<:Strength:1062501774612779039>/-1<:Health:1062515540712751184>. \n If you made at least 6<:Sun:1062501177679413409> this turn, it gets -2<:Strength:1062501774612779039>/-2<:Health:1062515540712751184> instead."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "You're gonna need a towel for this one."
							 })
			let taco = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/af/2nd_Best_Taco_HD.png/revision/latest?cb=20160604175353")
		.setTitle("2nd-Best Taco of All Time | <:Solar:1062502678384607262>")
		.setDescription("**- Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Heal 4. \nDraw a card. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Significantly better than the 3rd-Best Taco of All Time."
							 })
		let cflower = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1107401936715661342/CosmicFlowerCardImage.webp")
		.setTitle("Cosmic Flower | <:Solar:1062502678384607262>")
		.setDescription("**- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strikethrough:1062502987425140806>, 1 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:Strikethrough:1062502987425140806>__Strikethrough__"
							 },
							 {
								 name: "Ability",
								 value: "**When played:** __Conjure__ a Flower, and it gets <:Strikethrough:1062502987425140806>__Strikethrough__."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "She enjoys the simple things in life - hanging out with friends, fighting Zombies, and basking in cosmic rays."
							 })
		let jack = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1107413783871234048/JackOLantern.webp")
		.setTitle("Jack O' Lantern | <:Solar:1062502678384607262>")
		.setDescription("**- Squash Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strikethrough:1062502987425140806>, 3 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:Strikethrough:1062502987425140806>__Strikethrough__"
							 },
							 {
								 name: "Ability",
								 value: "This gets +1<:Strength:1062501774612779039> when it hurts the Zombie Hero. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"I just love to get Zombies all fired up. If you catch my drift."`
							 })
			const kmech = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e9/Ketchup_Mechanic_cardface.png/revision/latest?cb=20170701155932")
		.setTitle("Ketchup Mechanic | <:Solar:1062502678384607262>")
		.setDescription("**- Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** For each Zombie, this gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> and Heal the Plant Hero for 1. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Catchup mechanics help you get back in a game when you're behind. Ketchup Mechanics fix your fruit."
							 })
		let mgrass = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/53/MagnifyingGrass.png/revision/latest/scale-to-width-down/250?cb=20170906160729")
		.setTitle("Magnifying Grass | <:Solar:1062502678384607262>")
		.setDescription("**- Leafy Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** This gets +1<:Strength:1062501774612779039> for each Sun you made this turn."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Zombies may appear closer than they are."
							 })
			let mnuts = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/87/HD_Mixed_Nuts.png/revision/latest?cb=20160502061054")
		.setTitle("Mixed Nuts | <:Solar:1062502678384607262>")
		.setDescription("**- Nut Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** This gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184> if there's a Plant with Team-Up here."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: "They work hard but they also like to party. That's them in a nutshell."
							 })
			let swinds = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/b5/ZenGardenCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226144402")
		.setTitle("Solar Winds | <:Solar:1062502678384607262>")
		.setDescription("**- Environment -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**End of Turn:** If there are no Zombies here, make a __Sunflower__ here. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "There's something in the wind. Sunflower seeds, in fact."
							 })
		let sunseed = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/5b/Wee_seed.png/revision/latest/scale-to-width-down/250?cb=20170827202811")
		.setTitle("Sunflower Seed | <:Solar:1062502678384607262>")
		.setDescription("**- Flower Seed Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When destroyed:** Make a __Sunflower__ here. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "From every night's end comes the beginning of a new Sunflower's dawn."
							 })
			const ss3 = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/5b/Sunnier-Shroom_HD.png/revision/latest?cb=20200805002257")
		.setTitle("Sunnier-Shroom | <:Solar:1062502678384607262>")
		.setDescription("**- Mushroom Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "**Start of Turn:** You get +2<:Sun:1062501177679413409> this turn. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Compared to his little brother, he's the one with the sunnier disposition."
							 })
			let vftrap = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1107430921520558161/HD_Venus_Flytrap.webp")
		.setTitle("Venus Flytrap | <:Solar:1062502678384607262>")
		.setDescription("**- Flytrap Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When this does damage, heal your Hero that much. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "Premium - Uncommon"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Mom always said, 'If you leave your trap open like that, you'll catch Zombies.' So I did."`
							 })
		let wazombie = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/34/Whack-a-Zombie_HD.png/revision/latest?cb=20160531183216")
		.setTitle("Whack-a-Zombie | <:Solar:1062502678384607262>")
		.setDescription("**- Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Destroy a Zombie with 3<:Strength:1062501774612779039> or less. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "It's hammer time. #hadtobesaid"
							 })
		let brang = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/6a/Plants-vs-Zombies-2-13.png/revision/latest/scale-to-width-down/1200?cb=20200407205412")
		.setTitle("Bloomerang | <:Solar:1062502678384607262>")
		.setDescription("**- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strikethrough:1062502987425140806>, 3 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:Strikethrough:1062502987425140806>__Strikethrough__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Magnets? Gravity? Crikey, I don't have a clue why they come back."`
							 })
			let chomper = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/p__/images/c/c5/HD_Chomper.png/revision/latest?cb=20201123212500&path-prefix=protagonist")
		.setTitle("Chomper | <:Solar:1062502678384607262>")
		.setDescription("**- Flytrap Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Destroy a Zombie here with 3<:Strength:1062501774612779039> or less. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"A free buffet? How kind! Don't mind if I do!"`
							 })
			let eberry = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/31/Elderberry_cardface.png/revision/latest?cb=20170701155820")
		.setTitle("Elderberry | <:Solar:1062502678384607262>")
		.setDescription("**- Flower Berry Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strikethrough:1062502987425140806>, 4 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:Strikethrough:1062502987425140806>__Strikethrough__"
							 },
							 {
								 name: "Ability",
								 value: "**__Plant Evolution__:** This gets +3<:Strength:1062501774612779039>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `He makes yelling "Get off my lawn" into an art form.`
							 })
				let hchoke = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/bd/Heartichoke_HD.png/revision/latest?cb=20170423042924")
		.setTitle("Heartichoke | <:Solar:1062502678384607262>")
		.setDescription("**- Leafy Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When a Plant or your Hero is healed, do that much damage to the Zombie Hero. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "She's a sweetheart, she really is. But fighting Zombies ... it's made her hard."
							 })
			let lmower = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/ea/Lawn_Mower_HD.png/revision/latest?cb=20160602163233")
		.setTitle("Lawnmower | <:Solar:1062502678384607262>")
		.setDescription("**- Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Destroy a Zombie on the Ground. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "The thing of Zombie nightmares"
							 })
			let mpsflower = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/39/HD_Metal_Petal_Sunflower.png/revision/latest?cb=20161004034638")
		.setTitle("Metal Petal Sunflower | <:Solar:1062502678384607262>")
		.setDescription("**- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**Start of Turn:** You get +1<:Sun:1062501177679413409> this turn."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Time to put the metal to the petal, baby!"`
							 })
			let strike = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1107453235092004934/sunstrike.webp?width=384&height=384")
		.setTitle("Sun Strike | <:Solar:1062502678384607262>")
		.setDescription("**- Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "All Plants get <:Strikethrough:1062502987425140806>__Strikethrough__ this turn. \n__Conjure__ a Trick."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Each Plant is grown with the power of solar radiation. Sometimes you just have to let it out."
							 })
				let vftplanet = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1107455473965342820/FlytraplandCardImage.webp?width=384&height=384")
		.setTitle("Venus Flytraplanet | <:Solar:1062502678384607262>")
		.setDescription("**- Flytrap Environment -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
								value: "4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When a Plant here does damage and survives, heal your Hero that much."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Not far from Mercury Flytraplanet."
							 })
			let wingnut = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/d/d8/Wing-Nut_HD.png/revision/latest?cb=20170227030617")
		.setTitle("Wing-Nut | <:Solar:1062502678384607262>")
		.setDescription("**- Pea Nut Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 7 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Zombies can't do Bonus Attacks. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Firmly believes that Elvis is alive, Zombies never walked on the Moon, and that Dr. Zomboss is secretly studying aliens at Area 22. Crazy!"
							 })
			let aloesau = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/fe/Aloesaurus.png/revision/latest/scale-to-width-down/250?cb=20170824144955")
		.setTitle("Aloesaurus | <:Solar:1062502678384607262>")
		.setDescription("**- Cactus Animal Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Strength:1062501774612779039>, 7 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**Dino-Roar:** Heal all Plants and the Plant Hero for 1. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "A roaring force of life. A crushing force of destruction."
							 })
			let cado = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/22/AstrocadoCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226135303")
		.setTitle("Astrocado | <:Solar:1062502678384607262>")
		.setDescription("**- Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "5 <:Strikethrough:1062502987425140806>, 3 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:Strikethrough:1062502987425140806>__Strikethrough__"
							 },
							 {
								 name: "Ability",
								 value: "**When destroyed:** Gain an __Astrocado Pit__. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Holy guacamole!"`
							 })
		const apit = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/c7/AstrocadoPitCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226135314")
		.setTitle("Astrocado Pit | <:Solar:1062502678384607262>")
		.setDescription("**- Seed Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**Start of Turn:** This transforms into an Astrocado. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Token**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Getting defeated is the pits."
							 })
		let brose = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/95/BriarRoseCardImage.png/revision/latest/scale-to-width-down/250?cb=20170303220252")
		.setTitle("Briar Rose | <:Solar:1062502678384607262>")
		.setDescription("**- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When a Zombie hurts a Flower, destroy that Zombie."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"You mess with the rose, you get the thorns!"`
							 })
			let pflower = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/13/Power_Flower....png/revision/latest?cb=20160423151116")
		.setTitle("Power Flower | <:Solar:1062502678384607262>")
		.setDescription("**- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strikethrough:1062502987425140806>, 5 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:Strikethrough:1062502987425140806>__Strikethrough__"
							 },
							 {
								 name: "Ability",
								 value: "**Start of Turn:** Heal you Hero for 1 for each Flower. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Dropped out of Kale University to practice natural medicine."
							 })
		let squash = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1107477157732692058/squash.webp?width=231&height=282")
		.setTitle("Squash | <:Solar:1062502678384607262>")
		.setDescription("**- Squash Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "5 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Destroy a Zombie. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Has a bad case of Resting Squash Face. "
							 })
		let cobcan = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1107480342337691748/Cob_Cannon_cardface.webp?width=294&height=270")
		.setTitle("Cob Cannon | <:Solar:1062502678384607262>")
		.setDescription("**- Corn Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "6 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 6 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Zombies here and next door get -1<:Strength:1062501774612779039>/-1<:Health:1062515540712751184>. \n**__Team-Up Evolution__:** Destroy a Zombie. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: `He focuses his fearsome firepower with a single, ringing credo: "One Team. One Dream."`
							 })
		let laserbean = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/poohadventures/images/f/fd/HD_Laser_Bean%28PvZH%29.png/revision/latest?cb=20211221073709")
		.setTitle("Laser Bean | <:Solar:1062502678384607262>")
		.setDescription("**- Bean Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 value: "5 <:Strikethrough:1062502987425140806>, 7 <:Health:1062515540712751184>, 6 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:Strikethrough:1062502987425140806>__Strikethrough__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Physics, baby! I'm emittin' all KINDS of coherent radiation!"`
							 })
			let spumpkin = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/pvzcc/images/9/90/HD_Smashing_Pumpkin.png/revision/latest?cb=20200508150708")
		.setTitle("Smashing Pumpkin | <:Solar:1062502678384607262>")
		.setDescription("**- Squash Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "6 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 6 <:Sun:1062501177679413409>"},
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Sure, he and Squash are pals. But there's always an undercurrent of competition between them."
							 })
			let tcuke = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e2/Tactical_Cuke_HD.png/revision/latest?cb=20170227010025")
		.setTitle("Tactical Cuke | <:Solar:1062502678384607262>")
		.setDescription("**- Fruit Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "6 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Destroy all Plants and Zombies on the Ground. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "He comes from a long line of very precise cucumbers."
							 })
		let thchomper = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/ef/HD_Three-Headed_Chomper.png/revision/latest?cb=20200808213148")
		.setTitle("Three-Headed Chomper | <:Solar:1062502678384607262>")
		.setDescription("**- Flytrap Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "6 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 6 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**End of Turn:** Destroy all Zombies here and next door. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"You know that old saying, 'Three heads are better than one'? Totally true."`
							 })
				let tstool = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/4d/ToadstoolHD.png/revision/latest/scale-to-width-down/250?cb=20150701111051")
		.setTitle("Toadstool | <:Solar:1062502678384607262>")
		.setDescription("**- Mushroom Animal Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 6 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Destroy a Zombie with 4<:Strength:1062501774612779039> or less. \n**Start of Turn:** You get +1<:Sun:1062501177679413409> this turn. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Toadstool can't stand being idle. When there's work to be done, she's always the first to hop on it."
							 })
		let avera = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/4f/Astrovera_HD.png/revision/latest?cb=20170423042934")
		.setTitle("Astro Vera | <:Solar:1062502678384607262>")
		.setDescription("**- Cactus Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 value: "5 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 8 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Increase your Hero's maximum <:Health:1062515540712751184> by 10. Heal your Hero for 10. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Your Hero will feel out of this world. And so will your skin."
							 })
			let copia = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/85/CornucopiaCardImage.png/revision/latest/scale-to-width-down/250?cb=20170301181311")
		.setTitle("Cornucopia | <:Solar:1062502678384607262>")
		.setDescription("**- Corn Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "6 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 10 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Make a random Plant in each other lane. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Thanksgiving came early this year."
							 })
			const m = await	message.channel.send({embeds: [solar], components: [row] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter})
		collector.on("collect", async i => {
			if(i.customId == 'lb'){
				await i.update({embeds: [lbuddy], components: [lb]})
			}
			if(i.customId == 'helps'){
				await i.update({embeds: [solar], components: [row] } )
			}
			if(i.customId == 'bf'){
				await i.update({embeds: [bflower], components: [bf]})
			}
				if(i.customId == 'lbuddy'){
				await i.update({embeds: [lbuddy], components: [lb]})
			}
			if(i.customId == 'cm'){
				await i.update({embeds: [cmoss], components: [cm]})
			}
			if(i.customId == 'bflower'){
				await i.update({embeds: [bflower], components: [bf]})
			}
			if(i.customId == 'hp'){
				await i.update({embeds: [hpumpkin], components: [hp]})
			}
				if(i.customId == 'cmoss'){
				await i.update({embeds: [cmoss], components: [cm]})
			}
			if(i.customId == 'kp'){
				await i.update({embeds: [kpult], components: [kp]})
			}
				if(i.customId == 'hpumpkin'){
				await i.update({embeds: [hpumpkin], components: [hp]})
			}
			if(i.customId == 'mg'){
				await i.update({embeds: [mglory], components: [mg]})
			}
				if(i.customId == 'kpult'){
				await i.update({embeds: [kpult], components: [kp]})
			}
			if(i.customId == 'ps'){
				await i.update({embeds: [psf], components: [ps]})
			}
						if(i.customId == 'mglory'){
				await i.update({embeds: [mglory], components: [mg]})
			}
			if(i.customId == 'sf'){
				await i.update({embeds: [sflower], components: [sf]})
			}
					if(i.customId == 'psf'){
				await i.update({embeds: [psf], components: [ps]})
			}
			if(i.customId == 'as'){
				await i.update({embeds: [asaucer], components: [as]})
			}
				if(i.customId == 'sflower'){
				await i.update({embeds: [sflower], components: [sf]})
			}
			if(i.customId == 'es'){
				await i.update({embeds: [espore], components: [es]})
			}
						if(i.customId == 'asaucer'){
				await i.update({embeds: [asaucer], components: [as]})
			}
			if(i.customId == 'fs'){
				await i.update({embeds: [fshroom], components: [fs]})
			}
				if(i.customId == 'espore'){
				await i.update({embeds: [espore], components: [es]})
			}
			if(i.customId == 'pm'){
				await i.update({embeds: [pmd], components: [pm]})
			}
			if(i.customId == 'fshroom'){
				await i.update({embeds: [fshroom], components: [fs]})
			}
			if(i.customId == 'ss'){
				await i.update({embeds: [ssage], components: [ss]})
			}
					if(i.customId == 'pmd'){
				await i.update({embeds: [pmd], components: [pm]})
			}
			if(i.customId == 'sun'){
				await i.update({embeds: [sunshroom], components: [sun, sunnier]})
			}
						if(i.customId == 'ssage'){
				await i.update({embeds: [ssage], components: [ss]})
			}
			if(i.customId == 'tsf'){
				await i.update({embeds: [tsflower], components: [tsf]})
			}
					if(i.customId == 'sunshroom'){
				await i.update({embeds: [sunshroom], components: [sun, sunnier]})
			}
			if(i.customId == 'sunnier'){
				await i.reply({embeds: [ss1], ephemeral: true})
			}
			if(i.customId == 'wb'){
				await i.update({embeds: [wballons], components: [wb]})
			}
					if(i.customId == 'tsflower'){
				await i.update({embeds: [tsflower], components: [tsf]})
			}
			if(i.customId == 't'){
				await i.update({embeds: [taco], components: [t]})
			}
						if(i.customId == 'wballons'){
				await i.update({embeds: [wballons], components: [wb]})
			}
			if(i.customId == 'cf'){
				await i.update({embeds: [cflower], components: [cf]})
			}
						if(i.customId == 'taco'){
				await i.update({embeds: [taco], components: [t]})
			}
			if(i.customId == 'j'){
				await i.update({embeds: [jack], components: [j]})
			}
					if(i.customId == 'cflower'){
				await i.update({embeds: [cflower], components: [cf]})
			}
			if(i.customId == 'km'){
				await i.update({embeds: [kmech], components: [km]})
			}
					if(i.customId == 'jack'){
				await i.update({embeds: [jack], components: [j]})
			}
			if(i.customId == 'mgr'){
				await i.update({embeds: [mgrass], components: [mgr]})
			}
					if(i.customId == 'kmech'){
				await i.update({embeds: [kmech], components: [km]})
			}
			if(i.customId == 'mn'){
				await i.update({embeds: [mnuts], components: [mn]})
			}
			if(i.customId == 'mgrass'){
				await i.update({embeds: [mgrass], components: [mgr]})
			}
			if(i.customId == 'sw'){
				await i.update({embeds: [swinds], components: [sw, sunflower]})
			}
			if(i.customId == 'sunflower'){
					await i.reply({embeds: [sflower], ephemeral: true})
			}
						if(i.customId == 'mnuts'){
				await i.update({embeds: [mnuts], components: [mn]})
			}
			if(i.customId == 'seed'){
				await i.update({embeds: [sunseed], components: [seed, sunflower]})
			}
					if(i.customId == 'swinds'){
				await i.update({embeds: [swinds], components: [sw, sunflower]})
			}
			if(i.customId == 'ss2'){
				await i.update({embeds: [ss3], components: [ss2]})
			}
					if(i.customId == 'sunseed'){
				await i.update({embeds: [sunseed], components: [seed, sunflower]})
			}
			if(i.customId == 'vft'){
				await i.update({embeds: [vftrap], components: [vft]})
			}
				if(i.customId == 'ss3'){
				await i.update({embeds: [ss3], components: [ss2]})
			}
				if(i.customId == 'waz'){
				await i.update({embeds: [wazombie], components: [waz]})
			}
					if(i.customId == 'vftrap'){
				await i.update({embeds: [vftrap], components: [vft]})
			}
			if(i.customId == 'br'){
				await i.update({embeds: [brang], components: [br]})
			}
					if(i.customId == 'wazombie'){
				await i.update({embeds: [wazombie], components: [waz]})
			}
			if(i.customId == 'chomp'){
				await i.update({embeds: [chomper], components: [chomp]})
			}
				if(i.customId == 'brang'){
				await i.update({embeds: [brang], components: [br]})
			}
			if(i.customId == 'eb'){
				await i.update({embeds: [eberry], components: [eb]})
			}
			if(i.customId == 'chomper'){
				await i.update({embeds: [chomper], components: [chomp]})
			}
			if(i.customId == 'hc'){
				await i.update({embeds: [hchoke], components: [hc]})
			}
						if(i.customId == 'eberry'){
				await i.update({embeds: [eberry], components: [eb]})
			}
			if(i.customId == 'lm'){
				await i.update({embeds: [lmower], components: [lm]})
			}
						if(i.customId == 'hchoke'){
				await i.update({embeds: [hchoke], components: [hc]})
			}
			if(i.customId == 'mpsf'){
				await i.update({embeds: [mpsflower], components: [mpsf]})
			}
			if(i.customId == 'str'){
				await i.update({embeds: [strike], components: [str]})
			}
			if(i.customId == 'mpsflower'){
				await i.update({embeds: [mpsflower], components: [mpsf]})
			}
			if(i.customId == 'lmower'){
				await i.update({embeds: [lmower], components: [lm]})
			}
			if(i.customId == 'vftp'){
				await i.update({embeds: [vftplanet], components: [vftp]})
			}
				if(i.customId == 'strike'){
				await i.update({embeds: [strike], components: [str]})
			}
			if(i.customId == 'wing'){
				await i.update({embeds: [wingnut], components: [wing]})
			}
			if(i.customId == 'vftplanet'){
				await i.update({embeds: [vftplanet], components: [vftp]})
			}
			if(i.customId == 'aloe'){
				await i.update({embeds: [aloesau], components: [aloe]})
			}
				if(i.customId == 'wingnut'){
				await i.update({embeds: [wingnut], components: [wing]})
			}
			if(i.customId == 'astro'){
				await i.update({embeds: [cado], components: [astro, pit]})
			}
			if(i.customId == 'aloesa'){
				await i.update({embeds: [aloesau], components: [aloe]})
			}
				if (i.customId == 'pit')  {
				await i.reply({embeds: [apit], ephemeral: true})
			}
			if(i.customId == 'briar'){
				await i.update({embeds: [brose], components: [briar]})
			}
					if(i.customId == 'cado'){
				await i.update({embeds: [cado], components: [astro, pit]})
			}
			if(i.customId == 'pf'){
				await i.update({embeds: [pflower], components: [pf]})
			}
				if(i.customId == 'brose'){
				await i.update({embeds: [brose], components: [briar]})
			}
			if(i.customId == 'squ'){
				await i.update({embeds: [squash], components: [squ]})
			}
					if(i.customId == 'pflower'){
				await i.update({embeds: [pflower], components: [pf]})
			}
			if(i.customId == 'cob'){
				await i.update({embeds: [cobcan], components: [cob]})
			}
			if(i.customId == 'squash'){
				await i.update({embeds: [squash], components: [squ]})
			}
			if(i.customId == 'laser'){
				await i.update({embeds: [laserbean], components: [laser]})
			}
				if(i.customId == 'cobcan'){
				await i.update({embeds: [cobcan], components: [cob]})
			}
			if(i.customId == 'sp'){
				await i.update({embeds: [spumpkin], components: [sp]})
			}
				if(i.customId == 'laserbean'){
				await i.update({embeds: [laserbean], components: [laser]})
			}
			if(i.customId == 'tc'){
				await i.update({embeds: [tcuke], components: [tc]})
			}
			if(i.customId == 'spumpkin'){
				await i.update({embeds: [spumpkin], components: [sp]})
			}
			if(i.customId == 'thc'){
				await i.update({embeds: [thchomper], components: [thc]})
			}
						if(i.customId == 'tcuke'){
				await i.update({embeds: [tcuke], components: [tc]})
			}
			if(i.customId == 'ts'){
				await i.update({embeds: [tstool], components: [ts]})
			}
			if(i.customId == 'thchomper'){
				await i.update({embeds: [thchomper], components: [thc]})
			}
			if(i.customId == 'av'){
				await i.update({embeds: [avera], components: [av]})
			}
				if(i.customId == 'tstool'){
				await i.update({embeds: [tstool], components: [ts]})
			}
			if(i.customId == 'corn'){
				await i.update({embeds: [copia], components: [corn]})
			}
			if(i.customId == 'avera'){
				await i.update({embeds: [avera], components: [av]})
			}
				if(i.customId == 'help'){
				await i.update({embeds: [solar], components: [row] } )
			}
						if(i.customId == 'copia'){
				await i.update({embeds: [copia], components: [corn]})
			}
		})
	}
	}
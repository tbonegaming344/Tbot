const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
module.exports = {
	name: `smartycards`,
	aliases: [`smartyhelp`, `helpsmarty`, `smarty`, `cardssmarty`, `cardsmarty`], 
	category: `Miscellaneous`,
	run: async(client, message, args)=> {	
		const row = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('great')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('anb')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const anb = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('helps')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('il')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const il = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('anbean')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('lp')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const lp = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('ilet')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('lima')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const lima = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('lpad')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('mft')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const mft = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('limap')
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
                    .setCustomId('mftrap')
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
                    .setCustomId('prim')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('sd')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const sd = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('shell')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('spy')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const spy = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('sdrop')
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
                    .setCustomId('spyris')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('bog')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const bog = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('wbean')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('cb')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const cb = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('boe')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('gm')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const gm = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('cbean')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('lct')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const lct = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('gflick')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('lr')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const lr = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('lctail')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('pear')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const pear = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('lreed')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('rb')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const rb = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('pal')
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
                    .setCustomId('rbaga')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('smb')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const smb = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('spea')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('ct')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const ct = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('smbeans')
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
                    .setCustomId('ctail')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('cbe')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
					const cbe = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('cpepper')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('gn')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
					const gn = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('coolbean')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('mf')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const mf = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('gonuts')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('potg')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
					const potg = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('mflower')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('rr')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const rr = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('potgrapes')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('sc')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const sc = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('rad')
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
                    .setCustomId('scaus')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('van')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const van = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('sbean')
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
                    .setCustomId('v')
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
                    .setCustomId('bcount')
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
                    .setCustomId('c')
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
                    .setCustomId('jbean')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('nb')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const nb = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('lblow')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('sv')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const sv = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('nbean')
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
                    .setCustomId('sviolet')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('sdrag')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const sdrag = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('sgrass')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('ws')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const ws = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('sdragon')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('wh')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const wh = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('wsquash')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('bop')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const bop = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('whazel')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('jh')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const jh = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('bopard')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('jump')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const jump = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('jholly')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('mpu')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const mpu = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('jumping')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('shoot')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const shoot = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('mpult')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('smoosh')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const smoosh = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('shooting')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('three')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const three = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('sshroom')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('brain')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const brain = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('threepea')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('sfl')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const sfl = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('brainana')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('tri')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const tri = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('sfling')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('wme')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const wme = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('tricorn')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('dmd')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const dmd = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('wmelon')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('tgz')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const tgz = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('dmdragon')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('help')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
					const mgb = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
			.setCustomId('mgb')
			.setLabel('Magic Beanstalks')
			.setEmoji('<:MagicBeanstalk:1104902066104696872>')
			.setStyle(ButtonStyle.Success)
			);
			const sap = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('sap')
                    .setLabel('Sappy Place')
                    .setStyle(ButtonStyle.Primary)
										.setEmoji('<:Sappy_Place:1106931786136694904>')
            );
		let smart = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/pvzcc/images/6/62/PvZH_Smarty_IconHD.png/revision/latest?cb=20160622210421")
		.setTitle("Smarty Cards | <:Smarty:1062502890448638022>")
		.setDescription("The cards in the Smarty class are \n<@1043528908148052089> admiralnavybean \n<@1043528908148052089> iceberglettuce \n<@1043528908148052089> lilypad \n<@1043528908148052089> limapleurodon \n<@1043528908148052089> marsflytrap \n<@1043528908148052089> primalpeashooter \n<@1043528908148052089> shellery \n<@1043528908148052089> snowdrop \n<@1043528908148052089> spyris \n<@1043528908148052089> wenniebeanie \n<@1043528908148052089> bogofenlightenment \n<@1043528908148052089> cosmicbean \n<@1043528908148052089> gravemistake \n<@1043528908148052089> lasercattail \n<@1043528908148052089> lightningreed \n<@1043528908148052089> pearpal \n<@1043528908148052089> rotobaga \n<@1043528908148052089> snowpea \n<@1043528908148052089> sowmagicbeans \n<@1043528908148052089> cattail \n<@1043528908148052089> chillypepper \n<@1043528908148052089> coolbean \n<@1043528908148052089> gonuts \n<@1043528908148052089> mayflower \n<@1043528908148052089> planetofthegrapes \n<@1043528908148052089> rescueradish \n<@1043528908148052089> sportacus \n<@1043528908148052089> springbean \n<@1043528908148052089> vanilla \n<@1043528908148052089> beancounter \n<@1043528908148052089> carrotillery \n<@1043528908148052089> jellybean \n<@1043528908148052089> leafblower \n<@1043528908148052089> navybean \n<@1043528908148052089> shrinkingviolet \n<@1043528908148052089> snakegrass \n<@1043528908148052089> snapdragon \n<@1043528908148052089> wintersquash \n<@1043528908148052089> witchhazel \n<@1043528908148052089> birdofparadise \n<@1043528908148052089> jollyholly \n<@1043528908148052089> jumpingbean \n<@1043528908148052089> melonpult \n<@1043528908148052089> shootingstarfruit \n<@1043528908148052089> smooshshoom \n<@1043528908148052089> threepeater \n<@1043528908148052089> brainana \n<@1043528908148052089> sapfling \n<@1043528908148052089> tricorn \n<@1043528908148052089> wintermelon \n<@1043528908148052089> darkmatterdragonfruit \n<@1043528908148052089> thegreatzucchini")
		.setColor("Random")
		
			.setFooter({text: "To find out more info about the cards in Smarty class please use the commands listed above or click on the buttons below ⏬!"})
		let anbean = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/80/Another_HD_Admiral_Navy_Bean.png/revision/latest?cb=20161023084810")
		.setTitle("Admiral Navy Bean | <:Smarty:1062502890448638022>")
		.setDescription("**- Bean Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Traits",
								 value: "__Amphibious__, __Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "When you play a Bean, do 2 damage to the Zombie Hero."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Heavy is the weight of command. And my cap. Heavy is the cap."`
							 })
		let ilet = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/a2/HD_Iceberg_Lettuce%EF%BC%88PvZH%EF%BC%89.png/revision/latest?cb=20160429142558")
		.setTitle("Iceberg Lettuce | <:Smarty:1062502890448638022>")
		.setDescription("**- Leafy Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "<:IceCube:1008531889906253937>__Freeze__ a Zombie."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"FREEZE! Ha, just kidding. Little Iceberg humor there."`
							 })
			let lpad = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1105880151377575986/78-782316_lily-pad-tried-it-out-lily-pad-pvz-removebg-preview.png")
		.setTitle("Lily Pad | <:Smarty:1062502890448638022>")
		.setDescription("**- Leafy Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Amphibious__"
							 },
							 {
								 name: "Ability",
								 value: "**__Fusion__:** A Plant played on this gets __Amphibious__. __Conjure__ a Leafy card. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "When Neptuna's Triassic Invasion flooded Hollow Earth with vast new oceans, Plants quickly evolved to survive."
							 })
		let limap = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/34/Lima-Pleurodon_cardface.png/revision/latest?cb=20171018094240")
		.setTitle("Lima-Pleurodon | <:Smarty:1062502890448638022>")
		.setDescription("**- Bean Animal Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Amphibious__"
							 },
							 {
								 name: "Abiliy",
								 value: "**__Dino-Roar__:** Shuffle a __Magic Beanstalk__ into your deck. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Sometimes one Plant provides both the Army and the Navy."
							 })
		let mgbean = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/1f/MagicBeanstalk.png/revision/latest/scale-to-width-down/250?cb=20180212114409")
		.setTitle("Magic Beanstalk | <:Smarty:1062502890448638022>")
		.setDescription("**- Leafy Bean Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Draw a card."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Token**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Giant not included."
							 })
				let mftrap = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/38/MarsFlytrapCardIMage.png/revision/latest/scale-to-width-down/250?cb=20170226142427")
		.setTitle("Mars Flytrap | <:Smarty:1062502890448638022>")
		.setDescription("**- Flytrap Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When this hurts the Zombie Hero, steal a section from their Super-Block Meter. "
							 },
							 {
								 name: "Set-Rartity",
								 value: "**Galactic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "He loves Venus Flytrap, but sometimes they see things SO differently!"
							 })
		let prim = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/f7/Primalpeashooterpvz2.png/revision/latest/scale-to-width-down/250?cb=20190502155146")
		.setTitle("Primal Peashooter | <:Smarty:1062502890448638022>")
		.setDescription("**- Pea Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value:"2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When this hurts a Zombie, __Bounce__ that Zombie."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Found in groups of 3, 5, 7, 11, and 31."
							 })
		let shell = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/d/d0/HD_Shellery.png/revision/latest?cb=20160619054822")
		.setTitle("Shellery | <:Smarty:1062502890448638022>")
		.setDescription("**- Leafy Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Ordinance is most effective with peanut butter and raisins."
							 })
		let sdrop = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/7f/SnowdropHD.png/revision/latest/scale-to-width-down/250?cb=20170426234746")
		.setTitle("Snowdrop | <:Smarty:1062502890448638022>")
		.setDescription("**- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "This gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184> when a Zombie is frozen. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Zombies are always looking at her with a frozen expression."
							 })
		const spyris = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/9f/SpyrisHD.png/revision/latest/scale-to-width-down/250?cb=20170329014649")
		.setTitle("Spyris | <:Smarty:1062502890448638022>")
		.setDescription("**- Flower Root Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait", 
								 value: "__Amphibious__"
							 },
							 {
								 name: "Ability",
								 value: "You can tap Gravestones to see which Zombies are hiding in them."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: "You can't hide anything from her. Don't even try. She'll get inside your HEAD."
							 })
		let wbean = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/6f/HD_Weenie_Beanie.png/revision/latest?cb=20160606171414")
		.setTitle("Weenie Beanie | <:Smarty:1062502890448638022>")
		.setDescription("**- Bean Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: `Prefers to be called "Vertically Challenged Beanie."`
							 })
			let boe = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/99/Bog_of_Enlightenment_HD.png/revision/latest?cb=20170616162337")
		.setTitle("Bog of Enlightenment | <:Smarty:1062502890448638022>")
		.setDescription("**- Environment -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Plants here that are __Amphibious__ get +2<:Strength:1062501774612779039>. \n Zombies here that aren't __Amphibious__ get -2<:Strength:1062501774612779039>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Good for Plants, it is. Good for Zombies, it is not!"
							 })
		let cbean = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/26/CosmicBeanCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226140040")
		.setTitle("Cosmic Bean | <:Smarty:1062502890448638022>")
		.setDescription("**- Bean Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "**When played:** __Conjure__ a Bean, and it gets __Team-Up__."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "It IS a magical fruit."
							 })
			let gflick = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/35/Grave_Mistake_cardface.png/revision/latest?cb=20170701135045")
		.setTitle("Grave Mistake | <:Smarty:1062502890448638022>")
		.setDescription("**- Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "__Bounce__ a Gravestone. \nDraw a card."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Warning: Don't flick gravestones in real life."
							 })
		let lctail = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/b9/LaserCattailCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226142031")
		.setTitle("Laser Cattail | <:Smarty:1062502890448638022>")
		.setDescription("**- Animal Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Traits",
								 value: "__Amphibious__, __Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> when you play a Plant here."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "He's really good at entertaining himself."
							 })
		let lreed = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/0/0b/PvZ2_Plants_Lightning_Reed.png/revision/latest/scale-to-width-down/1200?cb=20200407233507")
		.setTitle("Lightning Reed | <:Smarty:1062502890448638022>")
		.setDescription("**- Leafy Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Traits",
								 value: "__Amphibious__, __Splash Damage 1__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"I do it for the shock value."`
							 })
			let pal = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/0/04/PearPalPair.png/revision/latest/scale-to-width-down/250?cb=20180218135748")
		.setTitle("Pear Pal | <:Smarty:1062502890448638022>")
		.setDescription("**- Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Traits",
								 value: "__Amphibious__, __Team-Up__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Has codependency issues, but he's working on it."
							 })
			let rbaga = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/f2/Rotobaga_PvZH_hd_i_think.png/revision/latest/scale-to-width-down/250?cb=20210828214738")
		.setTitle("Rotobaga | <:Smarty:1062502890448638022>")
		.setDescription("**- Root Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Amphibious__"
							 },
							 {
								 name: "Ability",
								 value: "This attacks both lanes next door instead of this lane. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Super-Rare**"
							 }, 
							 {
								 name: "Flavor Text",
								 value: "Without flying roots, how would we get Sky-Trees??"
							 })
				let spea = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/a2/Snow_Pea_%28HD_size%29.png/revision/latest/scale-to-width-down/250?cb=20230328030953")
		.setTitle("Snow Pea | <:Smarty:1062502890448638022>")
		.setDescription("**- Pea Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When this hurts a Zombie, <:IceCube:1008531889906253937>__Freeze__ that Zombie. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Learned everything he knows during the Great Freeze Tag Wars of '08."
							 })
		let smbeans = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/4a/SowMagicBeansCardImage.png/revision/latest/scale-to-width-down/250?cb=20180217015402")
		.setTitle("Sow Magic Beans | <:Smarty:1062502890448638022>")
		.setDescription("**- Leafy Bean Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Shuffle four __Magic Beanstalks__ into your deck. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Totally worth the cow."
							 })
			let ctail = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/poohadventures/images/2/23/HD_Cattail_%28PvZH%29.png/revision/latest?cb=20211126172453")
		.setTitle("Cattail | <:Smarty:1062502890448638022>")
		.setDescription("**- Animal Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
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
								 value: `"My secret weapon? It's my cute little hat!"`
							 })
		let cpepper = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1106217265822707854/HD_Chilly_Pepper.webp")
		.setTitle("Chilly Pepper | <:Smarty:1062502890448638022>")
		.setDescription("**- Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** <:IceCube:1008531889906253937>__Freeze__ a Zombie."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"It's not easy being both hot *and* cold. A comfortable lukewarm might be nice for a change."`
							 })
			let coolbean = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1106221433996181645/Carbeanite_HD.webp")
		.setTitle("Cool Bean | <:Smarty:1062502890448638022>")
		.setDescription("**- Bean Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** <:IceCube:1008531889906253937>__Freeze__ all Gravestones."
							 },
							 {
								 name: "Set-Rarity",
								value: "**Galactic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Chance of meeting Gravestones? Never tell me the odds!"`
							 })
			let gonuts = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1106223694889623652/Gonuts.webp")
		.setTitle("Go-Nuts | <:Smarty:1062502890448638022>")
		.setDescription("**- Flower Nut Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "When you play a __Team-Up__ Plant, all __Team-Up__ Plants get +1<:Strength:1062501774612779039>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"GROW-Nuts! THROW-Nuts! When we get big we GO-Nuts! Goooooooo PLANTS!"`
							 })
			let mflower = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/0/06/HD_Mayflower.png/revision/latest?cb=20161120091038")
		.setTitle("Mayflower |<:Smarty:1062502890448638022>")
		.setDescription("**- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Amphibious__"
							 },
							 {
								 name: "Ability",
								 value: "When this hurts the Zombie Hero, __Conjure__ a Corn, Squash, or Bean. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Do April showers bring Mayflowers? My goodness, isn't that a personal question!"
							 })
				let potgrapes = new EmbedBuilder()
		.setThumbnail("https://images-ext-2.discordapp.net/external/mwvcig1p9OF10m6xMeCced8W3CReA5w5CuMVY_EF4YQ/%3Fcb%3D20170627005948/https/static.wikia.nocookie.net/plantsvszombies/images/4/4c/Planet_of_the_Grapes_HD.png/revision/latest/scale-to-width-down/250")
		.setTitle("Planet of the Grapes | <:Smarty:1062502890448638022>")
		.setDescription("**- Berry Environment -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When a Plant here hurts the Zombie Hero, draw a card. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "How this planet came to be? It's another of life's grape mysteries."
							 })
		let rad = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1106233813375393882/RescueRadish.webp?width=486&height=567")
		.setTitle("Rescue Radish | <:Smarty:1062502890448638022>")
		.setDescription("**- Root Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** __Bounce__ another Plant. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "He puts the rad in radish."
							 })
			let scaus = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/b1/HDSportaflop.png/revision/latest/scale-to-width-down/250?cb=20170217102230")
		.setTitle("Sportacus | <:Smarty:1062502890448638022>")
		.setDescription("**- Mushroom Nut Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When a Zombie Trick is played, do 2 damage to the Zombie Hero."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"I am Sportacus!"`
							 })
		let sbean = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/poohadventures/images/6/6f/Spring_Bean_HD.png/revision/latest?cb=20220118164514")
		.setTitle("Spring Bean | <:Smarty:1062502890448638022>")
		.setDescription("**- Bean Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "__Bounce__ a Zombie."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "His favorite season is Fall."
							 })
			let v = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/31/1598834321656.png/revision/latest/scale-to-width-down/250?cb=20200831003941")
		.setTitle("Vanilla | <:Smarty:1062502890448638022>")
		.setDescription("**- Bean Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"I'm sorry, it's just... I have nothing interesting to say."`
							 })
		let bcount = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/d/d5/HD_Bean_Counter.png/revision/latest?cb=20160630041122")
		.setTitle("Bean Counter | <:Smarty:1062502890448638022>")
		.setDescription("**- Bean Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> when you play a Bean. \n **When played:** Gain two 1<:Strength:1062501774612779039>/1<:Health:1062515540712751184> Weenie Beanies. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Every Bean is accounted for. I assure you, they all add up."`
							 })
		let c = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/ec/Carrotillery_vectorized.png/revision/latest/scale-to-width-down/250?cb=20180120102128")
		.setTitle("Carrotillery | <:Smarty:1062502890448638022>")
		.setDescription("**- Root Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "5 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "His artillery is a rich source of vitamin A and beta-carotene - a fact the Zombies do not seem to appreciate."
							 })
			let jbean = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/38/Jelly_Bean_cardface.png/revision/latest?cb=20170701141516")
		.setTitle("Jelly Bean | <:Smarty:1062502890448638022>")
		.setDescription("**- Bean Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> when anything is __Bounced__. \n  **__Bean Evolution__:** __Bounce__ a Zombie. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"It's not how hard the Zombies knock you down. It's how hard you bounce back."`
							 })
		let lblow = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/90/Leaf_Blower_HD.png/revision/latest?cb=20170423042942")
		.setTitle("Leaf Blower | <:Smarty:1062502890448638022>")
		.setDescription("**- Leafy Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Amphibious__"
							 },
							 {
								 name: "Ability",
								 value: "**When played in an Environment:** __Bounce__ a Zombie."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"You wanna keep your lawn tidy? Tired of lookin' at those unsightly Zombies? Then I'M your guy."`
							 })
		let nbean = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/79/NavyBeanCardImage.png/revision/latest?cb=20180217014822")
		.setTitle("Navy Bean | <:Smarty:1062502890448638022>")
		.setDescription("**- Bean Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Traits",
								 value: "__Amphibious__, __Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "**When played:** All Amphibious Plants get +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Was **this** close to becoming an Army Bean."
							 })
		let sviolet = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/98/Shrinking_Ultra_Violet_cardface.png/revision/latest?cb=20170826054940")
		.setTitle("Shrinking Violet | <:Smarty:1062502890448638022>")
		.setDescription("**- Flower Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "A Zombie and Zombies next door to it get -2<:Strength:1062501774612779039>. Then destroy any of those that have 0<:Strength:1062501774612779039>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Is she cute or terrifying? Yes."
							 })
			let sgrass = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1106271469719261286/SnakeGrassHD.webp")
		.setTitle("Snake Grass | <:Smarty:1062502890448638022>")
		.setDescription("**- Leafy Animal Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Amphibious__"
							 },
							 {
								 name: "Ability",
								 value: "**Start of Turn:** Make another Snake Grass in the lane to the right. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Snakes. Why'd it have to be snakes?"`
							 })
		let sdragon = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/3f/SnapdragonPvZH.png/revision/latest?cb=20170902104555")
		.setTitle("Snapdragon | <:Smarty:1062502890448638022>")
		.setDescription("**- Dragon Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Splash Damage 3__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"I'm a dragon; I'm a Plant... I'm a mystery!"`
							 })
		let wsquash = new EmbedBuilder()
		.setThumbnail("https://pbs.twimg.com/media/CzaRsidWIAA9MeK.png")
		.setTitle("Winter Squash | <:Smarty:1062502890448638022>")
		.setDescription("**- Squash Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When a Zombie or Gravestone is frozen, destroy it."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"My complexion is more of a summer."`
							 })
			let whazel = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/7c/HD_Witch_Hazel.png/revision/latest?cb=20161002014613")
		.setTitle("Witch Hazel | <:Smarty:1062502890448638022>")
		.setDescription("**- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 value: "0 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**End of Turn:** Destroy a random Zombie and make a 1<:Strength:1062501774612779039>/1<:Health:1062515540712751184> Puff-Shroom with __Team-Up__ there. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Zombies are always trying to build a bridge out of her."
							 })
		let bopard = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e6/Cheesebirder_in_paradise.png/revision/latest/scale-to-width-down/250?cb=20170816201939")
		.setTitle("Bird of Paradise | <:Smarty:1062502890448638022>")
		.setDescription("**- Flower Animal Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
								value: "4 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Amphibious__"
							 },
							 {
								 name: "Ability",
								 value: "**Start of Turn:** __Conjure__ a Superpower."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Her beautiful melodies are echoed by the roars of dinosaurs."
							 })
			let jholly = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/95/JollyHollyHD.png/revision/latest/scale-to-width-down/250?cb=20181201024713")
		.setTitle("Jolly Holly | <:Smarty:1062502890448638022>")
		.setDescription("**- Leafy Berry Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Amphibious__"
							 },
							 {
								 name: "Ability",
								 value: "**When played:** <:IceCube:1008531889906253937>__Freeze__ Zombies next door."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: `No exaggeration, she is ALWAYS in a great mood. Even when fighting Zombies. "What's not to love about saving the world?" she says.`
							 })
				let jumping = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/af/JumpingBeanCardSprite.png/revision/latest/scale-to-width-down/250?cb=20180217015109")
		.setTitle("Jumping Bean | <:Smarty:1062502890448638022>")
		.setDescription("**- Bean Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** __Bounce__ a Zombie. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"I'm more than just a jumper... I can also leap and vault!"`
							 })
		let mpult = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1106292177681784974/MelonpultPvZH.webp")
		.setTitle("Melon-Pult | <:Smarty:1062502890448638022>")
		.setDescription("**- Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Splash Damage 3__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "People who live in grass houses shouldn't throw stones. But melons, sure, why not?"
							 })
		let shooting = new EmbedBuilder()
		.setThumbnail("https://i.imgur.com/8DdQp7j.jpg")
		.setTitle("Shooting Starfruit | <:Smarty:1062502890448638022>")
		.setDescription("** - Fruit Plant - **")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "This attacks in all five lanes. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "When you see a Shooting Starfruit, make a wish, any wish! Any wish that involves takin' down Zombies, that is."
							 })
		let sshroom = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/ae/SmooshShroomHD.png/revision/latest/scale-to-width-down/250?cb=20170831060015")
	.setTitle("Smoosh-Shroom | <:Smarty:1062502890448638022>")
	.setDescription("**- Mushroom Plant -**")
	.setColor("Random")
	
	.addFields({name: "Stats",
						 	value: "5 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
						 {
							 name: "Set-Rarity",
							 value: "**Basic - Common**"
						 },
						 {
							 name: "Flavor Text",
							 value: `"If I had a hammer... Wait a sec... I AM a hammer!"`
						 })
		let threepea = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1106573600863043584/HD_Threepeater_29.webp")
		.setTitle("Threepeater | <:Smarty:1062502890448638022>")
		.setDescription("**- Pea Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "This attacks here and next door."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"My favorite number is 5."`
							 })
		let brainana = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/90/HD-Brainana.png/revision/latest?cb=20160530173509")
	.setTitle("Brainana | <:Smarty:1062502890448638022>")
		.setDescription("**- Banana Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 6 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Amphibious__"
							 },
							 {
								 name: "Ability",
								 value: "**When played:** The Zombie Hero loses their Brains."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: `In this case, "brain drain" is a good thing.`
							 })
		let sfling = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/7e/SapFlingCardImage.png/revision/latest?cb=20180217032517")
		.setTitle("Sap-Fling | <:Smarty:1062502890448638022>")
		.setDescription("**- Pinecone Tree Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "5 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 6 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Make a __Sappy Place__ Environment."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: "He dates a lot of different branches, but nothing ever sticks."
							 })
			const sappy = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/7d/Sappy_Place_card_face.png/revision/latest?cb=20180216052701")
		.setTitle("Sappy Place | <:Smarty:1062502890448638022>")
		.setDescription("**- Environment -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Zombies here get -3 <:Strength:1062501774612779039>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Token**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Zombies just hate a sappy ending."
							 })
		let tricorn = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/8b/HDTricorn.png/revision/latest/scale-to-width-down/250?cb=20191005185131")
		.setTitle("Tricorn | <:Smarty:1062502890448638022>")
		.setDescription("**- Nut Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 6 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Attacks here and next door. \n **__Plant Evolution__:** This gets +2<:Strength:1062501774612779039>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Labor to keep alive in your breast that little spark of celestial fire called conscience." -Gourd Squashington`
							 })
			let wmelon = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1106938632394260552/Wintahmelon.webp")
		.setTitle("Winter Melon | <:Smarty:1062502890448638022>")
		.setDescription("**- Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 6 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Splash Damage 4__"
							 },
							 {
								 name: "Ability",
								 value: "When this hurts a Zombie, <:IceCube:1008531889906253937>__Freeze__ that Zombie."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Perfect for your winter picnics."
							 })
		let dmdragon = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/12/Deep_Space_Dragonfruit_HD.png/revision/latest?cb=20170225055135")
		.setTitle("Dark Matter Dragonfruit | <:Smarty:1062502890448638022>")
		.setDescription("**- Dragon Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "6 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 8 <:Sun:1062501177679413409>"},
							 {
								 name: "Traits",
								 value: "__Amphibious__, __Splash Damage 6__"
							 },
							 {
								 name: "Ability",
								 value: "Zombie Tricks cost 6<:Brainz:1062503146745774183> more. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Their ancestors were hunted to the depths of space. Now their descendants are back for cold fruity vengeance."
							 })
		let great = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/2e/Official_HD_The_Great_Zucchini.png/revision/latest/scale-to-width-down/250?cb=20160623214711")
		.setTitle("The Great Zucchini | <:Smarty:1062502890448638022>")
		.setDescription("**- Squash Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 value: "7 <:Strength:1062501774612779039>, 7 <:Health:1062515540712751184>, 9 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Amphibious__"
							 },
							 {
								 name: "Ability",
								 value: "When played: Transform all Zombies into 1<:Strength:1062501774612779039>/1<:Health:1062515540712751184> Zombies with no abilities. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Presto change-o! Now you see a powerful Zombie. Now you don't!"`
							 })
	const m = await	message.channel.send({embeds: [smart], components: [row] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter})
		collector.on("collect", async i => {
			if(i.customId == 'anb'){
				await i.update({embeds: [anbean], components: [anb]})
			}
			if(i.customId == 'helps'){
				await i.update({embeds: [smart], components: [row] } )
			}
			if(i.customId == 'il'){
				await i.update({emebds: [ilet], components: [il]})
			}
				if(i.customId == 'anbean'){
				await i.update({embeds: [anbean], components: [anb]})
			}
			if(i.customId == 'lp'){
				await i.update({embeds: [lpad], components: [lp]})
			}
			if(i.customId == 'ilet'){
				await i.update({emebds: [ilet], components: [il]})
			}
			if(i.customId == 'lima'){
				await i.update({embeds: [limap], components: [lima, mgb]})
			}
				if(i.customId == 'lpad'){
				await i.update({embeds: [lpad], components: [lp]})
			}
						if(i.customId == 'limap'){
				await i.update({embeds: [limap], components: [lima, mgb]})
			}
			if(i.customId == 'mgb'){
				await i.reply({embeds: [mgbean], ephemeral: true})
			}
			if(i.customId == 'mft'){
				await i.update({embeds: [mftrap], components: [mft]})
			}
			if(i.customId== 'pp'){
				await i.update({embeds: [prim], components: [pp]})
			}
			if(i.customId == 'mftrap'){
				await i.update({embeds: [mftrap], components: [mft]})
			}
			if(i.customId == 'sh'){
				await i.update({embeds: [shell], components: [sh]})
			}
				if(i.customId== 'prim'){
				await i.update({embeds: [prim], components: [pp]})
			}
			if(i.customId == 'sd'){
				await i.update({embeds: [sdrop], components: [sd]})
			}
				if(i.customId == 'shell'){
				await i.update({embeds: [shell], components: [sh]})
			}
			if(i.customId == 'spy'){
				await i.update({embeds: [spyris], components: [spy]})
			}
						if(i.customId == 'sdrop'){
				await i.update({embeds: [sdrop], components: [sd]})
			}
			if(i.customId == 'wb'){
				await i.update({embeds: [wbean], components: [wb]})
			}
						if(i.customId == 'spyris'){
				await i.update({embeds: [spyris], components: [spy]})
			}
			if(i.customId == 'bog'){
				await i.update({embeds: [boe], components: [bog]})
			}
				if(i.customId == 'wbean'){
				await i.update({embeds: [wbean], components: [wb]})
			}
			if(i.customId == 'cb'){
				await i.update({embeds: [cbean], components: [cb]})
			}
						if(i.customId == 'boe'){
				await i.update({embeds: [boe], components: [bog]})
			}
			if(i.customId == 'gm'){
				await i.update({embeds: [gflick], components: [gm]})
			}
					if(i.customId == 'cbean'){
				await i.update({embeds: [cbean], components: [cb]})
			}
			if(i.customId == 'lct'){
				await i.update({embeds: [lctail], components: [lct]})
			}
						if(i.customId == 'gflick'){
				await i.update({embeds: [gflick], components: [gm]})
			}
			if(i.customId == 'lr'){
				await i.update({embeds: [lreed], components: [lr]})
			}
						if(i.customId == 'lctail'){
				await i.update({embeds: [lctail], components: [lct]})
			}
			if(i.customId == 'pear'){
				await i.update({embeds: [pal], components: [pear]})
			}
						if(i.customId == 'lreed'){
				await i.update({embeds: [lreed], components: [lr]})
			}
			if(i.customId == 'rb'){
				await i.update({embeds: [rbaga], components: [rb]})
			}
						if(i.customId == 'pal'){
				await i.update({embeds: [pal], components: [pear]})
			}
			if(i.customId == 'sp'){
				await i.update({embeds: [spea], components: [sp]})
			}
					if(i.customId == 'rbaga'){
				await i.update({embeds: [rbaga], components: [rb]})
			}
			if(i.customId == 'smb'){
				await i.update({embeds: [smbeans], components: [smb, mgb]})
			}
				if(i.customId == 'spea'){
				await i.update({embeds: [spea], components: [sp]})
			}
			if(i.customId == 'ct'){
				await i.update({embeds: [ctail], components: [ct]})
			}
				if(i.customId == 'smbeans'){
				await i.update({embeds: [smbeans], components: [smb, mgb]})
			}
			if(i.customId == 'cp'){
				await i.update({embeds: [cpepper], components: [cp]})
			}
			if(i.customId == 'ctail'){
				await i.update({embeds: [ctail], components: [ct]})
			}
			if(i.customId == 'cbe'){
				await i.update({embeds: [coolbean], components: [cbe]})
			}
				if(i.customId == 'cpepper'){
				await i.update({embeds: [cpepper], components: [cp]})
			}
			if(i.customId == 'gn'){
				await i.update({embeds: [gonuts], components: [gn]})
			}
					if(i.customId == 'coolbean'){
				await i.update({embeds: [coolbean], components: [cbe]})
			}
			if(i.customId == 'mf'){
				await i.update({embeds: [mflower], components: [mf]})
			}
				if(i.customId == 'gonuts'){
				await i.update({embeds: [gonuts], components: [gn]})
			}
			if(i.customId == 'potg'){
				await i.update({embeds: [potgrapes], components: [potg]})
			}
					if(i.customId == 'mflower'){
				await i.update({embeds: [mflower], components: [mf]})
			}
			if(i.customId == 'rr'){
				await i.update({embeds: [rad], components: [rr]})
			}
					if(i.customId == 'potgrapes'){
				await i.update({embeds: [potgrapes], components: [potg]})
			}
			if(i.customId == 'sc'){
				await i.update({embeds: [scaus], components: [sc]})
			}
				if(i.customId == 'rad'){
				await i.update({embeds: [rad], components: [rr]})
			}
			if(i.customId == 'sb'){
				await i.update({embeds: [sbean], components: [sb]})
			}
			if(i.customId == 'scaus'){
				await i.update({embeds: [scaus], components: [sc]})
			}
			if(i.customId == 'van'){
				await i.update({embeds: [v], components: [van]})
			}
				if(i.customId == 'sbean'){
				await i.update({embeds: [sbean], components: [sb]})
			}
			if(i.customId == 'bc'){
				await i.update({embeds: [bcount], components: [bc]})
			}
			if(i.customId == 'v'){
				await i.update({embeds: [v], components: [van]})
			}
			if(i.customId == 'cl'){
				await i.update({embeds: [c], components: [cl]})
			}
			if(i.customId == 'bcount'){
				await i.update({embeds: [bcount], components: [bc]})
			}
			if(i.customId == 'jb'){
				await i.update({embeds: [jbean], components: [jb]})
			}
				if(i.customId == 'c'){
				await i.update({embeds: [c], components: [cl]})
			}
			if(i.customId == 'lb'){
				await i.update({embeds: [lblow], components: [lb]})
			}
			if(i.customId == 'jbean'){
				await i.update({embeds: [jbean], components: [jb]})
			}
			if(i.customId == 'nb'){
				await i.update({embeds: [nbean], components: [nb]})
			}
					if(i.customId == 'lblow'){
				await i.update({embeds: [lblow], components: [lb]})
			}
			if(i.customId == 'sv'){
				await i.update({embeds: [sviolet], components: [sv]})
			}
				if(i.customId == 'nbean'){
				await i.update({embeds: [nbean], components: [nb]})
			}
			if(i.customId == 'sg'){
				await i.update({embeds: [sgrass], components: [sg]})
			}
				if(i.customId == 'sviolet'){
				await i.update({embeds: [sviolet], components: [sv]})
			}
			if(i.customId == 'sdrag'){
				await i.update({embeds: [sdragon], components: [sdrag]})
			}
				if(i.customId == 'sgrass'){
				await i.update({embeds: [sgrass], components: [sg]})
			}
			if(i.customId == 'ws'){
				await i.update({embeds: [wsquash], components: [ws]})
			}
					if(i.customId == 'sdragon'){
				await i.update({embeds: [sdragon], components: [sdrag]})
			}
			if(i.customId == 'wh'){
				await i.update({embeds: [whazel], components: [wh]})
			}
			if(i.customId == 'wsquash'){
				await i.update({embeds: [wsquash], components: [ws]})
			}
			if(i.customId == 'bop'){
				await i.update({embeds: [bopard], components: [bop]})
			}
			if(i.customId == 'whazel'){
				await i.update({embeds: [whazel], components: [wh]})
			}
			if(i.customId == 'jh'){
				await i.update({embeds: [jholly], components: [jh]})
			}
			if(i.customId == 'bopard'){
				await i.update({embeds: [bopard], components: [bop]})
			}
			if(i.customId == 'jump'){
				await i.update({embeds: [jumping], components: [jump]})
			}
			if(i.customId == 'jholly'){
				await i.update({embeds: [jholly], components: [jh]})
			}
			if(i.customId == 'mpu'){
				await i.update({embeds: [mpult], components: [mpu]})
			}
			if(i.customId == 'jumping'){
				await i.update({embeds: [jumping], components: [jump]})
			}
			if(i.customId == 'shoot'){
				await i.update({embeds: [shooting], components: [shoot]})
			}
					if(i.customId == 'mpult'){
				await i.update({embeds: [mpult], components: [mpu]})
			}
			if(i.customId == 'smoosh'){
				await i.update({embeds: [sshroom], components: [smoosh]})
			}
				if(i.customId == 'shooting'){
				await i.update({embeds: [shooting], components: [shoot]})
			}
			if(i.customId == 'three'){
				await i.update({embeds: [threepea], components: [three]})
			}
						if(i.customId == 'sshroom'){
				await i.update({embeds: [sshroom], components: [smoosh]})
			}
			if(i.customId == 'brain'){
				await i.update({embeds: [brainana], components: [brain]})
			}
			if(i.customId == 'threepea'){
				await i.update({embeds: [threepea], components: [three]})
			}
			if(i.customId == 'sfl'){
				await i.update({embeds: [sfling], components: [sfl, sap]})
			}
				if(i.customId == 'brainana'){
				await i.update({embeds: [brainana], components: [brain]})
			}
				if (i.customId == 'sap')  {
				await i.reply({embeds: [sappy], ephemeral: true})
			}
			if(i.customId == 'tri'){
				await i.update({embeds: [tricorn], components: [tri]})
			}
				if(i.customId == 'sfling'){
				await i.update({embeds: [sfling], components: [sfl, sap]})
			}
			if(i.customId == 'wme'){
				await i.update({embeds: [wmelon], components: [wme]})
			}
			if(i.customId == 'tricorn'){
				await i.update({embeds: [tricorn], components: [tri]})
			}
			if(i.customId == 'dmd'){
				await i.update({embeds: [dmdragon], components: [dmd]})
			}
			if(i.customId == 'wmelon'){
				await i.update({embeds: [wmelon], components: [wme]})
			}
			if(i.customId == 'tgz'){
				await i.update({embeds: [great], components: [tgz]})
			}
				if(i.customId == 'dmdragon'){
				await i.update({embeds: [dmdragon], components: [dmd]})
			}
				if(i.customId == 'great'){
				await i.update({embeds: [great], components: [tgz]})
			}
					if(i.customId == 'help'){
				await i.update({embeds: [smart], components: [row] } )
			}
		})
	}
}
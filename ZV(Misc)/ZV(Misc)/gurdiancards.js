const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
module.exports = {
	name: `gurdiancards`,
	aliases: [`gurdianhelp`, `helpgurdian`, `gurdian`, `cardsgurdian`],
	category: `Miscellaneous`,
	run: async(client, message, args)=> {
			const row = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('wnb')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('fmn')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const fmnuts = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('helpg')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('gc')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const gc = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('fmnuts')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('garg')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const garg = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('gaca')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('gr')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const gr = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('garc')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('ph')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const ph = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('grape')
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
                    .setCustomId('photo')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('ppm')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const ppm = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('mine')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('sn')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const sn = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('ppmine')
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
                    .setCustomId('snut')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('wn')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const wn = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('sting')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('c')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const c = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('wnut')
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
                    .setCustomId('cac')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('gard')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const gard = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('cd')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('gb')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const gb = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('gg')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('hd')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const hd = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('gbust')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('jn')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const jn = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('hdate')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('p')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const p = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('jnut')
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
                    .setCustomId('pis')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('spike')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const spike = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('sea')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('tric')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const trica = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('dick')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('wc')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const wc = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('trica')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('hn')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const hn = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('wcnut')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('hb')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const hb = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('hnut')
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
                    .setCustomId('hber')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('pn')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const pn = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('mbean')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('pc')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const pc = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('pnut')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('pl')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const pl = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('pcub')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('pwn')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const pwn = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('late')
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
                    .setCustomId('pwnut')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('sham')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const sham = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('pshell')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('spin')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const spin = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('shame')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('smag')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const smag = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('spi')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('tn')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const tn = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('sm')
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
                    .setCustomId('tnut')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('cn')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const cn = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('bust')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('ff')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const ff = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('cnut')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('guac')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const guac = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('f')
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
                    .setCustomId('gua')
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
                    .setCustomId('mnut')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('rs')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const rs = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('prick')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('sl')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const sl = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('rsting')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('bg')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const bg = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('slord')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('ds')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const ds = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('body')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('gp')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const gp = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('dshroom')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('pe')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const pe = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('gpear')
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
                    .setCustomId('pecan')
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
                    .setCustomId('smack')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('gt')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const gt = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('tbeets')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('lc')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const lc = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('grav')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('pop')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const pop = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('loco')
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
                    .setCustomId('popping')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('wnbowl')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const wnbowl = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('soul')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('help')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const wnut = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('nut')
                    .setLabel('Wallnut')
                    .setStyle(ButtonStyle.Primary)
										.setEmoji('<:HD_Wallnut:1089674209443205192>')
            );
			const bud = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('bud')
                    .setLabel('Lil Buddy')
                    .setStyle(ButtonStyle.Success)
										.setEmoji('<:LilBuddyHD:1089676851653394463>')
            );
		let gh = new EmbedBuilder()
		.setTitle("Gurdian Cards | <:Guardian:1062501130501885973>")
		.setDescription("The Cards in the Gurdian class are \n<@1043528908148052089> forgetmenuts \n<@1043528908148052089> galactacactus \n<@1043528908148052089> garlic \n<@1043528908148052089> graperesponsibility \n<@1043528908148052089> photosynthesizer \n<@1043528908148052089> potatomine \n<@1043528908148052089> primalpotatomine \n<@1043528908148052089> smallnut \n<@1043528908148052089> stingbean \n<@1043528908148052089> wallnut \n<@1043528908148052089> cactus \n<@1043528908148052089> corndog \n<@1043528908148052089> gardeninggloves \n<@1043528908148052089> gravebuster \n<@1043528908148052089> hotdate \n<@1043528908148052089> juggernaut \n<@1043528908148052089> pismashio \n<@1043528908148052089> seashroom \n<@1043528908148052089> spikeweedsector \n<@1043528908148052089> tricarrotops \n<@1043528908148052089> waterchestnut \n<@1043528908148052089> healthnut \n<@1043528908148052089> hibernatingberry \n<@1043528908148052089> marinebean \n<@1043528908148052089> peanut \n<@1043528908148052089> pearcub \n<@1043528908148052089> platern \n<@1043528908148052089> primalwallnut \n<@1043528908148052089> pumpkinshell \n<@1043528908148052089> shamrocket \n<@1043528908148052089> spineapple \n<@1043528908148052089> steelmagnolia \n<@1043528908148052089> threenut \n<@1043528908148052089> blockbuster \n<@1043528908148052089> cosmicnut \n<@1043528908148052089> forcefield \n<@1043528908148052089> guacodile \n<@1043528908148052089> mirrornut \n<@1043528908148052089> pricklypear \n<@1043528908148052089> redstinger \n<@1043528908148052089> starchlord \n<@1043528908148052089> bodygourd \n<@1043528908148052089> doomshroom \n<@1043528908148052089> grizzlypear \n<@1043528908148052089> peacanolith \n<@1043528908148052089> smackadamia \n<@1043528908148052089> toughbeets \n<@1043528908148052089> gravitree \n<@1043528908148052089> locococo \n<@1043528908148052089> poppingpoppies \n<@1043528908148052089> soulpatch \n<@1043528908148052089> wallnutbowling")
		.setColor("Random")
		
		.setFooter({text: "To find out more info about the cards in Gurdian please use the commands listed above or click on the buttons below ⏬!"})
		.setThumbnail("https://static.wikia.nocookie.net/pvzcc/images/e/ec/PvZH_Guardian_IconHD.png/revision/latest?cb=20160622210557")
		let fmn = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/8f/HD_ForgetMeNuts.png/revision/latest/scale-to-width-down/250?cb=20170814002443")
		.setTitle("Forget-Me-Nuts | <:Guardian:1062501130501885973>")
		.setDescription("**- Flower Nut Plant -**")
		.addFields({name: "Stats", 
							 value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Zombie Tricks cost 1<:Brainz:1062503146745774183> more."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"I'd forget my own flower if it wasn't stuck to my head. Wait, what were we talking about?"`
							 })
			.setColor("Random")
			
				let gaca = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/b8/Galacta-Cactus_HD.png/revision/latest?cb=20170702052305")
		.setTitle("Galacta-Cactus | <:Guardian:1062501130501885973>")
		.setDescription("**- Cactus Flower Plant -**")
		.addFields({name: "Stats", 
							 value: "2 <:Bullseye:1062501003313819678>, 2 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:Bullseye:1062501003313819678>__Bullseye__"
							 },
							 {
								 name: "Ability",
								 value: "**When destroyed:** Do 1 damage to everything."
							 },
							 {
								 name: "Set-Rarity",
								 value: "Galactic - Super-Rare"
							 },
							 {
								 name: "Flavor Text",
								 value: `"I take pity on no one. For I am Galacta-Cactus."`
							 })
			.setColor("Random")
			
			let garlic = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/cc/Garlic.png/revision/latest/scale-to-width-down/250?cb=20201226145126")
		.setTitle("Garlic | <:Guardian:1062501130501885973>")
		.setDescription("**- Root Plant -**")
		.addFields({name: "Stats", 
							 value: "1 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "When a Zombie hurts this, move that Zombie to the left. If it's a Vimpire, destroy it."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Vimpires. They're the worst. I don't like to use the word 'hate' but yeah, I hate 'em."`
							 })
						.setColor("Random")
						
		const grape = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/4d/Grape_Responsibility_cardface.png/revision/latest?cb=20171014120033")
		.setTitle("Grape Responsibility | <:Guardian:1062501130501885973>")
		.setDescription("**- Berry Trick -**")
		.addFields({name: "Stats",
							 value: "1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Double a Plant's <:Health:1062515540712751184>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "When you think of responsibility, think of grapes."
							 })
			.setColor("Random")
			
		let photo = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/33/PhotosynthesizerHD.png/revision/latest/scale-to-width-down/250?cb=20171128203234")
		.setTitle("Photosynthesizer | <:Guardian:1062501130501885973>")
		.setDescription("**- Trick -**")
		.addFields({name: "Stats", 
							 value: "1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "A Plant gets +2<:Health:1062515540712751184>. \n __Conjure__ a Galactic Gardens card. "
							 },
							 {
								name: "Set-Rarity",
								value: "**Galactic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "The galaxy is one beautiful melody, so play!"
							 })
			.setColor("Random")
			
		let mine = new EmbedBuilder()
		.setThumbnail("https://images-ext-2.discordapp.net/external/XRbcdJFlzhU3ymB6TUZxtLCkS7jE7_1tFmzJIcWdQAQ/https/o.remove.bg/downloads/15bd2a0e-c476-4f3d-886b-955f70f1e0f9/101-1014323_zombies-2-generator-site-_new_-plants-vs-pvz-2-potato-mine-removebg-preview.png")
		.setTitle("Potato Mine | <:Guardian:1062501130501885973>")
		.setDescription("**- Root Plant -**")
		.addFields({name: "Stats",
							 value: "0 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "**When destroyed:** Do 2 damage to a Zombie here. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"I'm starchy and explosive!"`
							 })
		.setColor("Random")
		
			let ppmine = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/42/Primal_Potato_Mine%28PVZH%29.png/revision/latest?cb=20190820055525")
	.setTitle("Primal Potato Mine | <:Guardian:1062501130501885973>")
	.setDescription("**- Root Plant -**")
	.addFields({name: "Stats",
						 value: "0 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
						 {
							 name: "Ability",
							 value: "**When destroyed:** Do 3 damage to a Zombie here."
						 },
						 {
							 name: "Set-Rarity",
							 value: "**Colossal - Uncommon**"
						 },
						 {
							 name: "Flavor Text",
							 value: "Hidden long ago in Hollow Earth, Dinosaurs ran rampant in The Land Before Mine."
						 })
			.setColor("Random")
			
		let snut = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/6a/HD_Small-Nut.png/revision/latest?cb=20160630003856")
		.setTitle("Small-Nut | <:Guardian:1062501130501885973>")
		.setDescription("**- Nut Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats", 
							 value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: "A violin virtuoso, Small-Nut began taking lessons when he was still in the shell."
							 })
			let sting = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/43/HD_Sting_Bean.png/revision/latest?cb=20160528083741")
		.setTitle("Sting Bean | <:Guardian:1062501130501885973>")
		.setDescription("**- Bean Pea Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 value: "1 <:Bullseye:1062501003313819678>, 2 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Traits",
								 value: "__Amphibious__, <:Bullseye:1062501003313819678>__Bullseye__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: `I try to warn them, 'This is going to sting.' But the Zombies, they never listen."`
							 })
		let nut = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/67/HD_Wall-nut.png/revision/latest?cb=20220414061652")
		.setTitle("Wall-Nut | <:Guardian:1062501130501885973>")
		.setDescription("**- Nut Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 value: "0 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Works well with others. Says so, right there on his resume."
							 })
		let cac = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/poohadventures/images/d/d2/HD_Cactus%28PvZH%29.webp/revision/latest?cb=20211114213945")
		.setTitle("Cactus | <:Guardian:1062501130501885973>")
		.setDescription("**- Cactus Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 value: "1 <:Bullseye:1062501003313819678>, 5 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:Bullseye:1062501003313819678>__Bullseye__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"It's true." I'm prickly on the outside but spongy on the inside."`
							 })
		let cd = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/8b/HDCornDog-Better.png/revision/latest?cb=20201120101328")
		.setTitle("Corn Dog | <:Guardian:1062501130501885973>")
		.setDescription("**- Corn Animal Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Traits",
								 value: "__Amphibious__, __Hunt__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name:"Flavor Text",
								 value: "Who's a good vegetable? You are! Yes, you are!"
							 })
		const gg = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/64/GardeningGlovesCardImage.png/revision/latest?cb=20180205090332")
		.setTitle("Gardening Gloves | <:Guardian:1062501130501885973>")
		.setDescription("**- Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Move a Plant. \n Draw a card. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Made of the softest fabric for that gentle Plant touch."
							 })
		const gbust = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvs-zombies/images/0/02/Grave_Buster_%28PvZH%29.png/revision/latest?cb=20160521185515&path-prefix=ru")
		.setTitle("Grave Buster | <:Guardian:1062501130501885973>")
		.setDescription("**- Root Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Destroy a Gravestone."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"MUST. DESTROY. GRAVES."`
							 })
		const hdate = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/b8/HD-for-Hot-date.png/revision/latest/scale-to-width-down/250?cb=20170207101219")
		.setTitle("Hot Date | <:Guardian:1062501130501885973>")
		.setDescription("**- Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Move a Zombie to this lane. \n **When destroyed:** Do 3 damage to a Zombie here."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: "He's a hot commodity on dating sites such as eGardening, Thatch.com, and OKTulip."
							 })
			let jugger = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/53/JuggerNutCardImage.png/revision/latest?cb=20180206041950")
		.setTitle("Jugger-Nut | <:Guardian:1062501130501885973>")
		.setDescription("**- Nut Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Bullseye:1062501003313819678>, 2 <:Armored:1062502392005922919>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Traits",
								 value: "<:Armored:1062502392005922919>__Armored 1__, <:Bullseye:1062501003313819678>__Bullseye__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "What's a better than a Wall-Nut? A Wall-Nut in a suit of armor, that's what."
							 })
		let pis = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/74/PismashioCardImage.png/revision/latest?cb=20170924175510")
		.setTitle("Pismashio | <:Guardian:1062501130501885973>")
		.setDescription("**- Nut Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"I'm a kind of ice cream! Sort of!"`
							 })
		let sea = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e4/Heroes_seashroom.png/revision/latest/scale-to-width-down/250?cb=20190313160408")
		.setTitle("Sea-Shroom | <:Guardian:1062501130501885973>")
		.setDescription("**- Mushroom Plant -**")
		.setColor("Random")
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
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
								 value: "Teaches swimming lessons to disadvantaged Plants in his spare time."
							 })
		let dickweed = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e4/HD_SIKRE.png/revision/latest/scale-to-width-down/1200?cb=20200411233900")
		.setTitle("Spikeweed Sector | <:Guardian:1062501130501885973>")
		.setDescription("**- Root Enviromment -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**Before combat here:** Do 2 damage to a Zombie here. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Quite similar to the region known as Pokey Province."
							 })
		let tric = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e0/Carrot_cutie.png/revision/latest/scale-to-width-down/250?cb=20170819182039")
		.setTitle("Tricarrotops | <:Guardian:1062501130501885973>")
		.setDescription("**- Root Animal Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Bullseye:1062501003313819678>, 3 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:Bullseye:1062501003313819678>__Bullseye__"
							 },
							 {
								 name: "Ability",
								 value: "__Dino-Roar__: This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Beta-Carrotina tracked Huge-Gigantacus down the tunnel Meteor Z opened to Hollow Earth. Carrots there had evolved in a very different direction."
							 })
			let wcnut = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/57/WaterChestnut.png/revision/latest/scale-to-width-down/250?cb=20170901170011")
		.setTitle("Water Chestnut | <:Guardian:1062501130501885973>")
		.setDescription("**- Root Nut Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 8 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Traits",
								 value: "__Amphibious__, __Team-Up__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"300 laps a day, every day. That's how I do it."`
							 })
			let hnut = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/a4/Health-Nut_HD.png/revision/latest?cb=20170227010004")
		.setTitle("Health-Nut | <:Guardian:1062501130501885973>")
		.setDescription("**- Nut Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats", 
							 	value: "0 <:Strength:1062501774612779039>, 4 <:healthstrength:1062502584256045147>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "This attacks using its <:Health:1062515540712751184> instead of its <:Strength:1062501774612779039>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: "He always skips leg day."
							 })
		let hber = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/36/HD_Hibernating_Beary.PNG/revision/latest?cb=20160705042211")
		.setTitle("Hibernating Beary | <:Guardian:1062501130501885973>")
		.setDescription("**- Berry Animal Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 8 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When hurt:** This gets +4<:Strength:1062501774612779039>." 
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Don't poke the beary."
							 })
			const mbean = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/92/Gilly_Bean_cardface.png/revision/latest?cb=20170701062547")
		.setTitle("Marine Bean | <:Guardian:1062501130501885973>")
		.setDescription("**- Bean Animal Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Amphibious__"
							 },
							 {
								 name: "Ability",
								 value: "**When played:** This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> for each other __Amphibious__ Plant. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Of course beans evolved gills. How else would they breathe underwater?"
							 })
		const pnut = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/5f/HD_peanut2.png/revision/latest/scale-to-width-down/250?cb=20200409182803")
		.setTitle("Pea-Nut | <:Guardian:1062501130501885973>")
		.setDescription("**- Pea Nut Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Set-Rartiy",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Mom was a Peashooter. Dad was a Nut. Everyone said it wouldn't work, but they were wrong."`
							 })
		let pcub = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/c5/HD_Pear_Cub.png/revision/latest?cb=20161215105551")
		.setTitle("Pear Cub | <:Guardian:1062501130501885973>")
		.setDescription("**- Fruit Animal Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Amphibious__"
							 },
							 {
								 name: "Ability",
								 value: "**When destroyed:** Make a 5<:Strength:1062501774612779039>/4<:Health:1062515540712751184> Grizzly Pear with __Amphibious__ here. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: "So cute and cuddly and... wait, what's that growling sound?"
							 })
		let late = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/fb/PlanternPvZAS.png/revision/latest?cb=20140620094543")
		.setTitle("Plantern | <:Guardian:1062501130501885973>")
		.setDescription("**- Tree Root Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**While in an Environment:** This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> and <:Bullseye:1062501003313819678>__Bullseye__. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Past job experience includes: Shooing away creepy fog."
							 })
		let pwnut = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/70/HD_Primal_Wall-Nut.png/revision/latest?cb=20200224084305")
		.setTitle("Primal Wall-Nut | <:Guardian:1062501130501885973>")
		.setDescription("**- Nut Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 value: "0 <:Strength:1062501774612779039>, 9 <:Untrickable:1062501535126409277>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Traits",
								 value: "__Team-Up__, <:Untrickable:1062501535126409277>__Untrickable__"
							 },
							 {
								 name: "Ability",
								 value: "**When played:** __Conjure__ a card that costs 4<:Sun:1062501177679413409> or more. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
									value: "You can't be destroyed by a Rolling Stone when you basically are a Rolling Stone."
							 })
		let pshell = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/98/HDPumpkinShell.png/revision/latest/scale-to-width-down/250?cb=20180423080705")
		.setTitle("Pumpkin Shell | <:Guardian:1062501130501885973>")
		.setDescription("**- Squash Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**__Fusion__:** A Plant played on this gets +2<:Strength:1062501774612779039>/+4<:Health:1062515540712751184>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Build your house on a solid foundation," they said. "Build our house on pumpkin."`
							 })
			let shame = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/24/HD-Shamrocket.png/revision/latest?cb=20170223121851")
		.setTitle("Shamrocket | <:Guardian:1062501130501885973>")
		.setDescription("**- Leafy Pinecone Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Destroy a Zombie that has 4<:Strength:1062501774612779039> or more. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: "The bigger they are, the harder they go boom."
							 })
		let spi = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/be/Spineapple_HD.png/revision/latest?cb=20190118035009")
		.setTitle("Spineapple | <:Guardian:1062501130501885973>")
		.setDescription("**- Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Plants with no Strength get +2<:Strength:1062501774612779039>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Don't let his gruff exterior fool you. He's always looking out for the little guy."
							 })
		let sm = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/af/Not_HD_Steel_Magnolia.png/revision/latest/scale-to-width-down/250?cb=20200224084250")
		.setTitle("Steel Magnolia | <:Guardian:1062501130501885973>")
		.setDescription("**- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Plants here and next door +2<:Health:1062515540712751184>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "She's got nerves of steel... and everything else of steel!"
							 })
			let tnut = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e8/Three-Nut_cardface.png/revision/latest?cb=20170701063428")
		.setTitle("Three-Nut | <:Guardian:1062501130501885973>")
		.setDescription("**- Pea Nut Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When you play a Plant, that Plant's <:Strength:1062501774612779039> becomes 3<:Strength:1062501774612779039>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "They say two heads are better than one. Three-Nut just took the next evolutionary step."
							 })
		let bust = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/0/00/Blockbuster_vectorized.png/revision/latest/scale-to-width-down/250?cb=20180118204243")
		.setTitle("Blockbuster | <:Guardian:1062501130501885973>")
		.setDescription("**- Root Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Bullseye:1062501003313819678>, 3 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:Bullseye:1062501003313819678>__Bullseye__"
							 },
							 {
								 name: "Ability",
								 value: "**__Plant Evolution__:** Destroy all Gravestones here and next door. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "They call it a graveyard. She calls it a buffet."
							 })
		let cnut = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/64/CosmicNutCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226140231")
		.setTitle("Cosmic Nut | <:Guardian:1062501130501885973>")
		.setDescription("**- Nut Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** __Conjure__ a Nut, and its <:Strength:1062501774612779039> becomes 3<:Strength:1062501774612779039>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "A staunch believer in numerology, he'll go on at length about the significance of the number 3 if you let him."
							 })
		let f = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/c0/Forcefield_card.png/revision/latest/scale-to-width-down/250?cb=20190609010220")
		.setTitle("Force Field | <:Guardian:1062501130501885973>")
		.setDescription("**- Environment -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Plants here can't be hurt."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "It's a force of nature."
							 })
			let gua = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/d/d1/HD_Guacodile%28PvZH%29.png/revision/latest?cb=20160508062551")
		.setTitle("Guacodile | <:Guardian:1062501130501885973>")
		.setDescription("**- Fruit Animal Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Amphibious__"
							 },
							 {
								 name: "Ability",
								 value: "**When destroyed:** Do 4 damage to a Zombie here. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Technically I'm a food, not a Plant."`
							 })
		let mnut = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/86/HD_Mirror-Nut.png/revision/latest/scale-to-width-down/250?cb=20220407000626")
		.setTitle("Mirror-Nut | <:Guardian:1062501130501885973>")
		.setDescription("**- Nut Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 8 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "When your Nuts get hurt, do 2 damage to the Zombie Hero. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Dressed up as a mirrorball for a disco-themed party. Never looked back."
							 })
		let prick = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/74/HD_Prickly_Pear.png/revision/latest?cb=20161004040503")
		.setTitle("Prickly Pear | <:Guardian:1062501130501885973>")
		.setDescription("**- Cactus Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "**When hurt:** Do 4 damage to a Zombie here. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"You hurt me, I hurt you. That's how this works."`
							 })
			let rsting = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/10/Red_Stinger_HD.png/revision/latest?cb=20150603123043")
		.setTitle("Red Stinger | <:Guardian:1062501130501885973>")
		.setDescription("**- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 value: "2 <:Strength:1062501774612779039>, 7 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "**When played behind a Plant:** This becomes 7<:Strength:1062501774612779039>/2<:Health:1062515540712751184>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"I do stretching exercises every morning," he says. "It's important to stay physically and mentally nimble."`
							 })
		let slord = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/bb/Starch-Lord_HD.png/revision/latest?cb=20170613051039")
		.setTitle("Starch Lord | <:Guardian:1062501130501885973>")
		.setDescription("**- Root Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When you play a Root, that Root gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>. \n **Start of Turn:** __Conjure__ a Root. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "His destiny is written in the starch."
							 })
		let body = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/75/BodyGourdPvZH.png/revision/latest/scale-to-width-down/250?cb=20170830133641")
		.setTitle("Body Gourd | <:Guardian:1062501130501885973>")
		.setDescription("**- Squash Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Traits",
								 value: "__Amphibious__, __Team-Up__"
							 },
							 {
								name: "Ability",
								 value: "**When played:** Fill your Super-Block Meter to full. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "He moonlights as a decorative center piece during the fall."
							 })
		let dshroom = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/b4/Doom-shroom-hd.png/revision/latest?cb=20220410211537")
		.setTitle("Doom-Shroom | <:Guardian:1062501130501885973>")
		.setDescription("**- Mushroom Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "5 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Destroy all Plants and Zombies with 4<:Strength:1062501774612779039> or more. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"I could destroy everything you hold dear. It wouldn't be hard."`
							 })
		let gpear = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/1f/HDGrizzlyPear.png/revision/latest?cb=20170217102445")
		.setTitle("Grizzly Pear | <:Guardian:1062501130501885973>")
		.setDescription("**- Fruit Animal Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 value: "5 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Amphibious__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: `It's true what they say, "Never get between a Grizzly Pear and her cub." Double true for Zombies.`
							 })
		let pecan = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/pvzcc/images/b/b3/Pecanolith_HD.png/revision/latest?cb=20180212042554")
		.setTitle("Pecanolith | <:Guardian:1062501130501885973>")
		.setDescription("**- Nut Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 7 <:healthstrength:1062502584256045147>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "All Plants and Zombies attack using their <:Health:1062515540712751184> instead of their  <:Strength:1062501774612779039>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "No one knows where he came from. He just appeared one day. But everyone who comes in contact with him feels... changed somehow."
							 })
		let smack = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/79/HD_Smackadamia.png/revision/latest?cb=20160429142535")
		.setTitle("Smackadamia | <:Guardian:1062501130501885973>")
		.setDescription("**- Nut Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Amphibious__"
							 },
							 {
								 name: "Ability",
								 value: "**When played:** Your Nuts get +2<:Health:1062515540712751184>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Smackadamia wasn't born with smack smarts. He studied hard. He's a smackademic."
							 })
		let tbeets = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/54/HD_Tough_Beets.png/revision/latest?cb=20160429141931")
		.setTitle("Tough Beets | <:Guardian:1062501130501885973>")
		.setDescription("** - Root Plant - **")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "6 <:Strength:1062501774612779039>, 1 <:Armored:1062502392005922919>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Armored 1__"
							 },
							 {
								 name: "Ability",
								 value: "**When played:** This gets +1 for each other Plant and Zombie."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "He grew up on the wrong side of the garden."
							 })
		let grav = new EmbedBuilder()	.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/d/d9/Gravitree_HD.png/revision/latest/scale-to-width-down/250?cb=20170702201533")
		.setTitle("Gravitree | <:Guardian:1062501130501885973>")
		.setDescription("**- Fruit Tree Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "7 <:Strength:1062501774612779039>, 7 <:Armored:1062502392005922919>, 6 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Armored 1__"
							 },
							 {
								 name: "Ability",
								 value: "When a Zombie is played, move it here. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "The apple doesn't fall far from the tree. Neither does anything else."
							 })
		let loco = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/33/LocoCoco.png/revision/latest/scale-to-width-down/250?cb=20180212025014")
		.setTitle("Loco Coco | <:Guardian:1062501130501885973>")
		.setDescription("**- Fruit Nut Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 6 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Make __Wall-Nuts__ next door. \n **__Nut Evolution__:** Plants with no <:Strength:1062501774612779039> get +3<:Strength:1062501774612779039>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "He crowned himself King of All Hollow Earth. No one had the heart to tell him it was actually a parliamentary democracy."
							 })
		let popping = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/30/HD_Poppin%27_Poppies.png/revision/latest/scale-to-width-down/250?cb=20160619021325")
		.setTitle("Poppin' Poppies | <:Guardian:1062501130501885973>")
		.setDescription("**- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 value: "4 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 6 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Make __Lil' Buddies__ here and next door. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Makes friends wherever she goes."
							 })
		let buddy = new EmbedBuilder()
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
		let soul = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/54/HD_Soul_Patch.png/revision/latest?cb=20161004033306")
		.setTitle("Soul Patch | <:Guardian:1062501130501885973>")
		.setDescription("**- Flower Root Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "5 <:Strength:1062501774612779039>, 10 <:Armored:1062502392005922919>, 7 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Armored 1__"
							 },
							 {
								 name: "Ability",
								 value: "If your Hero would get hurt, this gets hurt instead. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Has been gently encouraging Cherry Bomb and Sour Grapes to attend his meditation class."
							 })
		let wnb = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/b9/Wall-Nut_Bowling_HD.png/revision/latest?cb=20160610205319")
		.setTitle("Wall-Nut Bowling | <:Guardian:1062501130501885973>")
		.setDescription("**- Nut Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "9 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Make a __Wall-Nut__ in each Ground lane. \n Attack for 6 damage in those lanes. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Ugly shoes not required!"
							 })
		const m = await	message.channel.send({embeds: [gh], components: [row] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter})
		collector.on("collect", async i => {
			if(i.customId == 'fmn'){
				await i.update({embeds: [fmn], components: [fmnuts]})
			}
			if(i.customId == 'helpg'){
				await i.update({embeds: [gh], components: [row] } )
			}
			if(i.customId == 'gc'){
				await i.update({embeds: [gaca], components: [gc]})
			}
						if(i.customId == 'fmnuts'){
				await i.update({embeds: [fmn], components: [fmnuts]})
			}
			if(i.customId === 'garg'){
				await i.update({embeds: [garlic], components: [garg]})
			}
				if(i.customId == 'gaca'){
				await i.update({embeds: [gaca], components: [gc]})
			}
			if(i.customId == 'gr'){
				await i.update({embeds: [grape], components: [gr]})
			}
				if(i.customId === 'garc'){
				await i.update({embeds: [garlic], components: [garg]})
			}
			if(i.customId == 'ph'){
				await i.update({embeds: [photo], components: [ph]})
			}
				if(i.customId == 'grape'){
				await i.update({embeds: [grape], components: [gr]})
			}
			if(i.customId == 'pm'){
				await i.update({embeds: [mine], components: [pm]})
			}
				if(i.customId == 'photo'){
				await i.update({embeds: [photo], components: [ph]})
			}
			if(i.customId == 'ppm'){
				await i.update({embeds: [ppmine], components: [ppm]})
			}
			if(i.customId == 'mine'){
				await i.update({embeds: [mine], components: [pm]})
			}
			if(i.customId == 'sn'){
				await i.update({embeds: [snut], components: [sn]})
			}
			if(i.customId == 'ppmine'){
				await i.update({embeds: [ppmine], components: [ppm]})
			}
			if(i.customId == 'sb'){
				await i.update({embeds: [sting], components: [sb]})
			}
						if(i.customId == 'snut'){
				await i.update({embeds: [snut], components: [sn]})
			}
			if(i.customId == 'wnut'){
				await i.update({embeds: [nut], components: [wn]})
			}
			if(i.customId == 'wn'){
				await i.update({embeds: [nut], components: [wn]})
			}
			if(i.customId == 'sting'){
				await i.update({embeds: [sting], components: [sb]})
			}
			if(i.customId == 'c'){
				await i.update({embeds: [cac], components: [c]})
			}
				if(i.customId == 'wnuts'){
				await i.update({embeds: [nut], components: [wn]})
			}
			if(i.customId == 'corn'){
				await i.update({embeds: [cd], components: [corn]})
			}
				if(i.customId == 'cac'){
				await i.update({embeds: [cac], components: [c]})
			}
			if(i.customId == 'gard'){
				await i.update({embeds: [gg], components: [gard]})
			}
					if(i.customId == 'cd'){
				await i.update({embeds: [cd], components: [corn]})
			}
			if(i.customId == 'gb'){
				await i.update({embeds: [gbust], components: [gb]})
			}
			if(i.customId == 'gg'){
				await i.update({embeds: [gg], components: [gard]})
			}
			if(i.customId == 'hd'){
				await i.update({embeds: [hdate], components: [hd]})
			}
						if(i.customId == 'gbust'){
				await i.update({embeds: [gbust], components: [gb]})
			}
			if(i.customId == 'hdate'){
				await i.update({embeds: [hdate], components: [hd]})
			}
			if(i.customId == 'jn'){
				await i.update({embeds: [jugger], components: [jn]})
			}
			if(i.customId== 'p'){
				await i.update({embeds: [pis], components: [p]})
			}
			if(i.customId == 'jnut'){
				await i.update({embeds: [jugger], components: [jn]})
			}
			if(i.customId == 'ss'){
				await i.update({embeds: [sea], components: [ss]})
			}
			if(i.customId== 'pis'){
				await i.update({embeds: [pis], components: [p]})
			}
			if(i.customId == 'spike'){
				await i.update({embeds: [dickweed], components: [spike]})
			}
					if(i.customId == 'sea'){
				await i.update({embeds: [sea], components: [ss]})
			}
			if(i.customId == 'tric'){
				await i.update({embeds: [tric], components: [trica]})
			}
				if(i.customId == 'dick'){
				await i.update({embeds: [dickweed], components: [spike]})
			}
			if(i.customId == 'wc'){
				await i.update({embeds: [wcnut], components: [wc]})
			}
						if(i.customId == 'trica'){
				await i.update({embeds: [tric], components: [trica]})
			}
			if(i.customId == 'hn'){
				await i.update({embeds: [hnut], components: [hn]})
			}
					if(i.customId == 'wcnut'){
				await i.update({embeds: [wcnut], components: [wc]})
			}
			if(i.customId== 'hb'){
				await i.update({embeds: [hber], components: [hb]})
			}
			if(i.customId == 'hnut'){
				await i.update({embeds: [hnut], components: [hn]})
			}
			if(i.customId== 'mb'){
				await i.update({embeds: [mbean], components: [mb]})
			}
				if(i.customId== 'hber'){
				await i.update({embeds: [hber], components: [hb]})
			}
			if(i.customId == 'pn'){
				await i.update({embeds: [pnut], components: [pn]})
			}
			if(i.customId== 'mbean'){
				await i.update({embeds: [mbean], components: [mb]})
			}
			if(i.customId == 'pc'){
				await i.update({embeds: [pcub], components: [pc]})
			}
				if(i.customId == 'pnut'){
				await i.update({embeds: [pnut], components: [pn]})
			}
			if(i.customId == 'pl'){
				await i.update({embeds: [late], components: [pl]})
			}
				if(i.customId == 'pcub'){
				await i.update({embeds: [pcub], components: [pc]})
			}
			if(i.customId == 'pwn'){
				await i.update({embeds: [pwnut], components: [pwn]})
			}
					if(i.customId == 'late'){
				await i.update({embeds: [late], components: [pl]})
			}
			if(i.customId == 'ps'){
				await i.update({embeds: [pshell], components: [ps]})
			}
				if(i.customId == 'pwnut'){
				await i.update({embeds: [pwnut], components: [pwn]})
			}
			if(i.customId == 'sham'){
				await i.update({embeds: [shame], components: [sham]})
			}
				if(i.customId == 'pshell'){
				await i.update({embeds: [pshell], components: [ps]})
			}
			if(i.customId == 'spin'){
				await i.update({embeds: [spi], components: [spin]})
			}
						if(i.customId == 'shame'){
				await i.update({embeds: [shame], components: [sham]})
			}
			if(i.customId == 'smag'){
				await i.update({embeds: [sm], components: [smag]})
			}
			if(i.customId == 'spi'){
				await i.update({embeds: [spi], components: [spin]})
			}
			if(i.customId == 'tn'){
				await i.update({embeds: [tnut], components: [tn]})
			}
				if(i.customId == 'sm'){
				await i.update({embeds: [sm], components: [smag]})
			}
			if(i.customId == 'bb'){
				await i.update({embeds: [bust], components: [bb]})
			}
					if(i.customId == 'tnut'){
				await i.update({embeds: [tnut], components: [tn]})
			}
			if(i.customId == 'cn'){
				await i.update({embeds: [cnut], components: [cn]})
			}
			if(i.customId == 'bust'){
				await i.update({embeds: [bust], components: [bb]})
			}
			
					if(i.customId == 'cnut'){
				await i.update({embeds: [cnut], components: [cn]})
			}
			if(i.customId == 'ff'){
				await i.update({embeds: [f], components: [ff]})
			}
			if(i.customId == 'guac'){
				await i.update({embeds: [gua], components: [guac]})
			}
			if(i.customId == 'f'){
				await i.update({embeds: [f], components: [ff]})
			}
			if(i.customId == 'mn'){
				await i.update({embeds: [mnut], components: [mn]})
			}
			if(i.customId == 'gua'){
				await i.update({embeds: [gua], components: [guac]})
			}
			if(i.customId == 'pp'){
				await i.update({embeds: [prick], components: [pp]})
			}
				if(i.customId == 'mnut'){
				await i.update({embeds: [mnut], components: [mn]})
			}
			if(i.customId == 'rs'){
				await i.update({embeds: [rsting], components: [rs]})
			}
				if(i.customId == 'prick'){
				await i.update({embeds: [prick], components: [pp]})
			}
			if(i.customId == 'sl'){
				await i.update({embeds: [slord], components: [sl]})
			}
			if(i.customId == 'rsting'){
				await i.update({embeds: [rsting], components: [rs]})
			}
			if(i.customId== 'bg'){
				await i.update({embeds: [body], components: [bg]})
			}
			if(i.customId == 'slord'){
				await i.update({embeds: [slord], components: [sl]})
			}
			if(i.customId == 'ds'){
				await i.update({embeds: [dshroom], components: [ds]})
			}
			if(i.customId== 'body'){
				await i.update({embeds: [body], components: [bg]})
			}
			if(i.customId == 'gp'){
				await i.update({embeds: [gpear], components: [gp]})
			}
				if(i.customId == 'dshroom'){
				await i.update({embeds: [dshroom], components: [ds]})
			}
			if(i.customId == 'pe'){
				await i.update({embeds: [pecan], components: [pe]})
			}
				if(i.customId == 'gpear'){
				await i.update({embeds: [gpear], components: [gp]})
			}
			if(i.customId == 'sd'){
				await i.update({embeds: [smack], components: [sd]})
			}
			if(i.customId == 'pecan'){
				await i.update({embeds: [pecan], components: [pe]})
			}
			if(i.customId == 'tb'){
				await i.update({embeds: [tbeets], components: [tb]})
			}
				if(i.customId == 'smack'){
				await i.update({embeds: [smack], components: [sd]})
			}
			if(i.customId == 'gt'){
				await i.update({embeds: [grav], components: [gt]})
			}
			if(i.customId == 'grav'){
				await i.update({embeds: [grav], components: [gt]})
			}
				if(i.customId == 'tbeets'){
				await i.update({embeds: [tbeets], components: [tb]})
			}
			if(i.customId == 'lc'){
				await i.update({embeds: [loco], components: [lc, wnut]})
			}
			if(i.customId == 'nut'){
				await i.reply({embeds: [nut], ephemeral: true})
			}
			if(i.customId == 'pop'){
				await i.update({embeds: [popping], components: [pop, bud]})
			}
			if (i.customId == 'bud')  {
				await i.reply({embeds: [buddy], ephemeral: true} )
			}
				if(i.customId == 'loco'){
				await i.update({embeds: [loco], components: [lc, wnut]})
			}
			if(i.customId == 'sp'){
				await i.update({embeds: [soul], components: [sp]})
			}
					if(i.customId == 'popping'){
				await i.update({embeds: [popping], components: [pop, bud]})
			}
			if(i.customId == 'wnbowl'){
				await i.update({embeds: [wnb], components: [wnbowl, wnut]})
			}
				if(i.customId == 'soul'){
				await i.update({embeds: [soul], components: [sp]})
			}
				if(i.customId == 'wnb'){
				await i.update({embeds: [wnb], components: [wnbowl, wnut]})
			}
					if(i.customId == 'help'){
				await i.update({embeds: [gh], components: [row] } )
			}
		})
	}
}
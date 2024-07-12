const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
module.exports = {
	name: `kabloomcards`,
	aliases: [`kabloomhelp`, `helpkabloom`, `kabloom`, `cardskabloom`],
	category: `Miscellaneous`,
	run: async(client, message, args)=> {
		const row = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('kcorn')
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
                    .setCustomId('helpk')
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
                    .setCustomId('puff')
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
                    .setCustomId('ashroom')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('bh')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const bh = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('bbomb')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('bm')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const bm = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('bheart')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('hvc')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const hvc = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('bmush')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('hl')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const hl = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('hvcur')
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
                    .setCustomId('hlava')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('re')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const re = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('pmush')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('sft')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const sft = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('rec')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('vr')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const vr = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('sf2')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('bl')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const bl = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('vrh')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('blast')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const bblast = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('blaunch')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('bs')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const bs = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('bblast')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('fw')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const fw = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('bshroom')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('s')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const s = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('fire')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('sm')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const sm = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('seed')
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
                    .setCustomId('shelf')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('ba')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const ba = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('wild')
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
                    .setCustomId('bangry')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('cmag')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const cmag = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('cmush')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('imi')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const imi = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('cromag')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('is')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const is = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('tat')
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
                    .setCustomId('isp')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('mr')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const mr = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('mgr')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('pi')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const pi = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('mrl')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('pun')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const pun = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('pivy')
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
                    .setCustomId('puni')
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
                    .setCustomId('str')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('zap')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const zap = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('hunters')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('mole')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const mole = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('cot')
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
                    .setCustomId('kale')
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
                    .setCustomId('pairs')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('morp')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const morp = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('pard')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('pine')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const pine = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('pmorph')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('serg')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);	
			const serg = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('pclone')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('sonic')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);	
		const sonic = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('strong')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('sour')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);	
				const sour = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('sbloom')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('fig')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);	
		const fig = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('sourg')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('abomb')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);	
			const abomb = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('transfig')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('blue')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);	
				const blue = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('atom')
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
                    .setCustomId('blues')
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
                    .setCustomId('electric')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('lavag')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);	
				const lavag = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('gloom')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('si')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);	
			const si = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('lg')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('cbomb')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);	
		const cbomb = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('sizz')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('dlk')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);	
		const dlk = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('cb')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('po')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);	
			const po = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('dlking')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('gow')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);	
		const gow = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('poak')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('kecorn')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);	
			const kcorn = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('gw')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('help')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);	
			const bomb = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('bomb')
                    .setLabel('Banna Bomb')
                    .setStyle(ButtonStyle.Primary)
										.setEmoji('<:bbomb:1091067039818461224>')
            );
				const lava = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('hot')
                    .setLabel('Hot Lava')
                    .setStyle(ButtonStyle.Danger)
							.setEmoji('<:hotlava:1091074880251891893>')
							);
		const blasting = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('blasting')
                    .setLabel('Berry Blast')
                    .setStyle(ButtonStyle.Danger)
										.setEmoji('<:BerryBlastCardImage:1092164792082505849>')
            );
		const test = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('test')
                    .setLabel('Seedling')
                    .setStyle(ButtonStyle.Success)
										.setEmoji('<:seed:1094704185074794578>')
            );
		let kc = new EmbedBuilder()
		.setTitle("Kabloom Cards | <:Kabloom:1062502137826910268>")
		.setThumbnail("https://tiermaker.com/images/templates/3403531587272505.png")
		.setDescription("The Cards in the Kabloom class are \n<@1043528908148052089> puffshroom \n<@1043528908148052089> astroshroom \n<@1043528908148052089> bananabomb \n<@1043528908148052089> bloomngheart \n<@1043528908148052089> buttonmushroom \n<@1043528908148052089> highvoltagecurrant \n<@1043528908148052089> hotlava \n<@1043528908148052089> poisonmushroom \n<@1043528908148052089> reincarnation \n<@1043528908148052089> shroomfortwo \n<@1043528908148052089> velociradishharchling \n<@1043528908148052089> bananalauncher \n<@1043528908148052089> berryblast \n<@1043528908148052089> buffshroom \n<@1043528908148052089> fireweed \n<@1043528908148052089> seedling \n<@1043528908148052089> shelfmushroom \n<@1043528908148052089> wildberry \n<@1043528908148052089> berryangry \n<@1043528908148052089> cosmicmushroom \n<@1043528908148052089> cromagnolia \n<@1043528908148052089> imitater \n<@1043528908148052089> invasivespecies \n<@1043528908148052089> mushroomgrotto \n<@1043528908148052089> mushroomringleader \n<@1043528908148052089> poisonivy \n<@1043528908148052089> punishshroom \n<@1043528908148052089> strawberrian \n<@1043528908148052089> velociradishhunter \n<@1043528908148052089> zapricot \n<@1043528908148052089> molekale \n<@1043528908148052089> pairofpears \n<@1043528908148052089> pairpearadise \n<@1043528908148052089> petalmorphosis \n<@1043528908148052089> pineclone \n<@1043528908148052089> sergeantstrongberry \n<@1043528908148052089> sonicbloom \n<@1043528908148052089> sourgrapes \n<@1043528908148052089> transfiguration \n<@1043528908148052089> atomicbombegrante \n<@1043528908148052089> bluesberry \n<@1043528908148052089> electricblueberry \n<@1043528908148052089> gloomshroom \n<@1043528908148052089> lavaguava \n<@1043528908148052089> sizzle \n<@1043528908148052089> cherrybomb \n<@1043528908148052089> dandylionking \n<@1043528908148052089> poisonoak \n<@1043528908148052089> grapesofwrath \n<@1043528908148052089> kernelcorn")
				.setColor("Random")
		
		.setFooter({text: "To find out more info about the cards in Kabloom class please use the commands listed above or click on the buttons below ⏬!"})
			let puff = new EmbedBuilder()
.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1090716028352352327/puff-removebg-preview.png?width=249&height=261")
		.setTitle("Puff-Shroom | <:Kabloom:1062502137826910268>")
		.setDescription("**- Mushroom Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 0 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "He huffs and puffs and, occasionally, blows a Zombie down."
							 })
		let ashroom = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/94/Astro-shroom_HD.png/revision/latest?cb=20170225005845")
		.setTitle("Astro-Shroom | <:Kabloom:1062502137826910268>")
		.setDescription("**- Mushroom Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Bullseye:1062501003313819678>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:Bullseye:1062501003313819678>__Bullseye__"
							 },
							 {
								 name: "Ability",
								 value: "When you play a Plant, do 1 damage to the Zombie Hero. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "He's had good meetings with a lot of smaller asteroids. They really made an impression."
							 })
		let bbomb = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/a4/BananaLTarget.png/revision/latest/scale-to-width-down/334?cb=20221031054544")
		.setTitle("Banana Bomb | <:Kabloom:1062502137826910268>")
		.setDescription("**- Banana Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Do 2 damage to a Zombie."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Beware fruity vengeance from above."
							 })
		let bheart = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/47/Blooming_Heart.png/revision/latest?cb=20190502193328")
		.setTitle("Blooming Heart | <:Kabloom:1062502137826910268>")
		.setDescription("**- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability", 
								 value: "When this does damage, it gets +1<:Strength:1062501774612779039>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Sometimes we hurt the ones we love. Blooming Heart knows this all too well."
							 })
		let bmush = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/bb/HD_Button_Mushroom.png/revision/latest?cb=20160607014803")
		.setTitle("Button Mushroom | <:Kabloom:1062502137826910268>")
		.setDescription("**- Mushroom Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: `Everyone's always telling her, "You're cute as a button!" But she's not just cute. She's smart and funny too.`
							 })
		let hvcur = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/10/HighVoltageCurrant_RealHD.png/revision/latest/scale-to-width-down/250?cb=20181117025735")
		.setTitle("High-Voltage Currant | <:Kabloom:1062502137826910268>")
		.setDescription("**- Berry Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "This gets +1<:Strength:1062501774612779039> when another Berry does damage. \n When played: __Conjure__ a Berry." 
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: "These trouble makers are just asking to get grounded."
							 })
		let hlava = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/8a/Hot_Lava_Environment.png/revision/latest/scale-to-width-down/148?cb=20170625202848")
		.setTitle("Hot Lava | <:Kabloom:1062502137826910268>")
		.setDescription("**- Environment -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**Before combat here:** Do 1 damage to each Plant and Zombie here."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Lava has no loyalty. It's just hot. It just IS."
							 })
		let pmush = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/25/Poison_Mushroom_HD_PvZ_twitter_post.png/revision/latest/scale-to-width-down/250?cb=20161109010321")
		.setTitle("Poison Mushroom | <:Kabloom:1062502137826910268>")
		.setDescription("**- Mushroom Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:AntiHero:1062501067700568074>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:AntiHero:1062501067700568074>__Anti-Hero 2__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Zombie Heroes. Don't like 'em. Not one bit. Don't care who knows it, either."`
							 })
		let rec = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/36/Reincarnation_HD.png/revision/latest/scale-to-width-down/250?cb=20171207230413")
		.setTitle("Reincarnation | <:Kabloom:1062502137826910268>")
		.setDescription("**- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**While in your hand:** At end of Turn, this transforms into a random Plant with +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>. It keeps this ability."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"You never know what the next life has in store for you," she says. "So get the most out of this one while you can."`
							 })
		let sf2 = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/49/Shroom_for_TwoH.png/revision/latest/scale-to-width-down/225?cb=20160321142439")
		.setTitle("Shroom for Two | <:Kabloom:1062502137826910268>")
		.setDescription("**- Mushroom Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Make a 1<:Strength:1062501774612779039>/1<:Health:1062515540712751184> Puff-Shroom with __Team-Up__ here"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Shrooms, bless their hearts, always wanting to cuddle up cuddly-like."
							 })
		let vrh = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/af/Velociradish.png/revision/latest/scale-to-width-down/250?cb=20180131051119")
		.setTitle("Veloci-Radish Hatchling | <:Kabloom:1062502137826910268>")
		.setDescription("**- Root Animal Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "__Dino-Roar__: This gets +1<:Strength:1062501774612779039>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "The root of all primeval."
							 })
		let blaunch = new EmbedBuilder()
		.setThumbnail("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d5fa8d6d-871b-469c-9c1a-2422c6c23196/dbm0p56-3a32e815-f522-4ccc-b215-310785f40628.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q1ZmE4ZDZkLTg3MWItNDY5Yy05YzFhLTI0MjJjNmMyMzE5NlwvZGJtMHA1Ni0zYTMyZTgxNS1mNTIyLTRjY2MtYjIxNS0zMTA3ODVmNDA2MjgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yYEhbZJKXgCvPjzoykD4692L__Q-RcyLleM_FkSkSjc")
		.setTitle("Banana Launcher | <:Kabloom:1062502137826910268>")
		.setDescription("**- Banana Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**Start of Turn:** Gain a __Banana Bomb__."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "He only knows one word. But it's a good one."
							 })
			let blast = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/f0/BerryBlastCardImage.png/revision/latest?cb=20180207012728")
		.setTitle("Berry Blast | <:Kabloom:1062502137826910268>")
		.setDescription("**- Berry Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Do 3 damage."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Vicious AND nutritious."
							 })
			let bshroom = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/b1/HD_Buff-Shroom.png/revision/latest?cb=20160502034843")
		.setTitle("Buff-Shroom | <:Kabloom:1062502137826910268>")
		.setDescription("**- Mushroom Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** All Mushrooms get +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: `You might know him from his wildly popular series of workout videos called "30 Days to a Buff-Shroom Body."`
							 })
		let fire= new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/d/de/Blushing_bush.png/revision/latest/scale-to-width-down/250?cb=20170816030419")
		.setTitle("Fireweed | <:Kabloom:1062502137826910268>")
		.setDescription("**- Flower Root Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played on the Ground:** Make __Hot Lava__ here. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Don't touch the floor. The floor is lava."
							 })
		let seed = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/pvzcc/images/5/58/HD_Seedling.png/revision/latest?cb=20170421135619")
		.setTitle("Seedling | <:Kabloom:1062502137826910268>")
		.setDescription("**- Seed Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**Start of Turn:** This transforms into a random Plant that costs 6<:Sun:1062501177679413409> or less."
							 },
							 {
								 name:"Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: "It's the tiny seed of a... nobody actually knows."
							 })
			let shelf = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/7e/ShelfMushroomHD.png/revision/latest/scale-to-width-down/250?cb=20180217213710")
		.setTitle("Shelf Mushroom | <:Kabloom:1062502137826910268>")
		.setDescription("**- Mushroom Berry Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**__Fusion__:** Do 2 damage."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Legends of Hollow Earth whisper that if you stack up enough Shelf Mushrooms, you'll eventually reach the Surface World."
							 })
			let wild = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/70/HD_Wild_Berry.png/revision/latest/scale-to-width-down/250?cb=20160624030845")
		.setTitle("Wild Berry | <:Kabloom:1062502137826910268>")
		.setDescription("**- Berry Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** This moves to a random lane. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `What one word best describes Wild Berry? "Unpredictable."`
							 })
		let bangry  = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/9a/HD_Berry_Angry.png/revision/latest?cb=20160429141501")
		.setTitle("Berry Angry | <:Kabloom:1062502137826910268>")
		.setDescription("**- Berry Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "All Plants get +2<:Strength:1062501774612779039>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Now you've done it! That's the last straw! I'm gonna berry you!"`
							 })
			let cmush = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e4/Cosmic_Mushroom_HD.png/revision/latest?cb=20170619175749")
		.setTitle("Cosmic Mushroom | <:Kabloom:1062502137826910268>")
		.setDescription("**- Mushroom Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** __Conjure__ a Mushroom, and it gets +2<:Strength:1062501774612779039>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "He's far out all right. Like, waaaay far out."
							 })
			let cromag = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/9d/Mesozoic_Magnolia_card_face.png/revision/latest?cb=20170706062111")
		.setTitle("Cro-Magnolia | <:Kabloom:1062502137826910268>")
		.setDescription("**- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**__Plant Evolution__:** Plants here and next door get +2<:Strength:1062501774612779039>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "In the secret groves of Hollow Earth, Magnolias evolved to shun steely stoicism, boasting blunt barbarity."
							 })
			let tat = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/3b/Imitater-HD_PvZH.png/revision/latest/scale-to-width-down/250?cb=20180104205540")
		.setTitle("Imitater | <:Kabloom:1062502137826910268>")
		.setDescription("**- Root Mime Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When you play a Plant, this transforms into a copy of that Plant. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `When asked the secret to fighting zombies, Imitater replied "...." Truly a master of his craft.`
							 })
		let isp = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/4a/Not_HD_Invasive_Species.png/revision/latest?cb=20200224090056")
		.setTitle("Invasive Species | <:Kabloom:1062502137826910268>")
		.setDescription("**- Leafy Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**While in an Environment:** This gets +3<:Strength:1062501774612779039>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Call me a 'weed.' Go on. I consider it a compliment."`
							 })
		let mgr = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/a6/Mushroom_Grotto_Environment.png/revision/latest/scale-to-width-down/150?cb=20170614061958")
		.setTitle("Mushroom Grotto | <:Kabloom:1062502137826910268>")
		.setDescription("**- Mushroom Environment -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When you play a Plant here, make a 1<:Strength:1062501774612779039>/1<:Health:1062515540712751184> Puff-Shroom with __Team-Up__ in another random lane. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Sometimes beautiful things grow out of the darkest places. Ponder that for a few moments."
							 })
			let mrl = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/33/HD_Mushroom_Ringleader.png/revision/latest?cb=20160521045849")
		.setTitle("Mushroom Ringleader | <:Kabloom:1062502137826910268>")
		.setDescription("**- Mushroom Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 value: "0 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** This gets +2<:Strength:1062501774612779039> for each other Plant. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Leadership comes with a lot of responsibility, but he knew what he signed up for."
							 })
			let pivy = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/0/02/PoisonIvy.png/revision/latest/scale-to-width-down/250?cb=20170901023545")
		.setTitle("Poison Ivy | <:Kabloom:1062502137826910268>")
		.setDescription("**- Leafy Berry Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:AntiHero:1062501067700568074>, 3 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Anti-Hero 4__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Guess who's itching for a fight? This guy right here!"`
							 })
		let puni = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/1c/HD_Punish-Shroom.png/revision/latest?cb=20160626030135")
		.setTitle("Punish-Shroom | <:Kabloom:1062502137826910268>")
		.setDescription("**- Mushroom Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When a Mushroom is destroyed, do 2 damage to a random Zombie or Zombie Hero. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Believes revenge is best served. Period."
							 })
		let str = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/7a/StrawberrianHD.png/revision/latest/scale-to-width-down/250?cb=20180131202731")
		.setTitle("Strawberrian | <:Kabloom:1062502137826910268>")
		.setDescription("**- Berry Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When you play a Berry, do 1 damage to Zombies next door to Strawberrian. \n **__Berry Evolution__:** Gain a __Berry Blast__. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "When it's time to fight, he gets pretty juiced."
							 })
		let hunters = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/37/Veloci-Radish_card_face.png/revision/latest?cb=20170717214410")
		.setTitle("Veloci-Radish Hunter | <:Kabloom:1062502137826910268>")
		.setDescription("**- Root Animal Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Make a copy of this with __Team-Up__ here. \n **__Dino-Roar__:** This gets +1<:Strength:1062501774612779039>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Dedicated pack hunters, one roars a distraction while the other strikes from the side."
							 })
		let cot = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/45/HD_Zapricot.png/revision/latest?cb=20160429141945")
		.setTitle("Zapricot | <:Kabloom:1062502137826910268>")
		.setDescription("**- Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Some say that Zombie aren't easily shocked. I beg to differ."`
							 })
				let kale = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/45/Molekale_HD.png/revision/latest/scale-to-width-down/250?cb=20170225005916")
		.setTitle("Molekale | <:Kabloom:1062502137826910268>")
		.setDescription("**- Leafy Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Each other Plant transforms into a random Plant that costs 1<:Sun:1062501177679413409> more."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"And you thought spinach made you strong. Please. I am spinach times infinity."`
							 })
			let pairs = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/0/04/PearPalPair.png/revision/latest/scale-to-width-down/250?cb=20180218135748")
		.setTitle("Pair of Pears | <:Kabloom:1062502137826910268>")
		.setDescription("**- Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Make a 2<:Strength:1062501774612779039>/2<:Health:1062515540712751184> Pear Pal with __Team-Up__ here. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "It's cute how they're always completing each other's sentences."
							 })
		let pard = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/d/dd/PairPearadiseCardFace.png/revision/latest?cb=20220508044622")
		.setTitle("Pair Pearadise | <:Kabloom:1062502137826910268>")
		.setDescription("**- Fruit Environment -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When you play a Plant here, make a copy of that Plant with __Team-Up__ here."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Peter Piper's Planet precociously picked a pair of pickled peppered pairs."
							 })
		let pmorph = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/d/dc/PetalMorphosisCardImage.png/revision/latest?cb=20180208062943")
		.setTitle("Petal-Morphosis | <:Kabloom:1062502137826910268>")
		.setDescription("**- Flower Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Transform a Plant into a random Plant. \n Draw a card."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "For when it's time to turn over a new leaf."
							 })
			let pclone = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/8c/PinecloneHD.png/revision/latest/scale-to-width-down/250?cb=20180204225416")
		.setTitle("Pineclone | <:Kabloom:1062502137826910268>")
		.setDescription("**- Pinecone Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats", 
							 	value: "3 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Transform all Plants into 3<:Strength:1062501774612779039>/3<:Health:1062515540712751184> Pineclones. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "It's nothing personal. She just prefers the company of other Pineclones."
							 })
			let strong = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/f5/HD_Sergeant_Strongberry.png/revision/latest?cb=20200225001932")
		.setTitle("Sergeant Strongberry | <:Kabloom:1062502137826910268>")
		.setDescription("** - Berry Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When another Berry hurts a Zombie or Zombie Hero, Sergeant Strongberry does 2 more damage to that enemy. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "He's intense, sure. But he just wants the berries to be all they can be."
							 })
		let sbloom = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/c5/Sonic_Bloom_HD.png/revision/latest/scale-to-width-down/250?cb=20171126142501")
		.setTitle("Sonic Bloom | <:Kabloom:1062502137826910268>")
		.setDescription("**- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats", 
							 	value: "3 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Do 1 damage to the Zombie Hero for each Plant. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Victory faster than the speed of sound."
							 })
		let sourg = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/pvzcc/images/d/de/HD_Sour_Grapes.png/revision/latest?cb=20170427080626")
		.setTitle("Sour Grapes | <:Kabloom:1062502137826910268>")
		.setDescription("**- Berry Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Do 1 damage to each Zombie. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Sour. Bitter. Resentful. It's all true. But he's got his reasons."
							 })
		let transfig = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/a6/FIG_BOIII.png/revision/latest/scale-to-width-down/250?cb=20201007103550")
		.setTitle("Transfiguration | <:Kabloom:1062502137826910268>")
		.setDescription("**- Leafy Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 value: "4 <:Strength:1062501774612779039>, 7 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Whenever a Plant is hurt and survives, transform it into a random Plant. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"By Heisenberg's Uncertainty Principle, if you look at a Plant too closely, you actually change what that Plant is..."`
							 })
		let atom = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/75/AtomicBombegrenate.png/revision/latest/scale-to-width-down/250?cb=20180217024029")
		.setTitle("Atomic Bombegranate | <:Kabloom:1062502137826910268>")
		.setDescription("**- Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 value: "5 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When destroyed:** Make __Seedlings__ next door. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Remember: Never ever EVER split a fruit. Oh, hold on, actually fruits are OK, just never split an atom."
							 })
		let blues = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/51/HD_Bluesberry.png/revision/latest?cb=20160815080820")
		.setTitle("Bluesberry | <:Kabloom:1062502137826910268>")
		.setDescription("**- Berry Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Do 2 damage. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Loves to make Zombies sing the blues."
							 })
		let electric = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/ab/HD_Electric_Blueberry_a.png/revision/latest/scale-to-width-down/250?cb=20150929173024")
		.setTitle("Electric Blueberry | <:Kabloom:1062502137826910268>")
		.setDescription("**- Berry Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**After combat here:** Do 6 damage to a random Zombie or the Zombie Hero."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: `Does she strike a "random" Zombie with her lightning? Really? Or is she setting an old, unspoken score?`
							 })
			let gloom = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/ac/GloomShroomPVZH.png/revision/latest/scale-to-width-down/250?cb=20180209224112")
		.setTitle("Gloom-Shroom | <:Kabloom:1062502137826910268>")
		.setDescription("**- Mushroom Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats", 
								value:  "5 <:Bullseye:1062501003313819678>, 5 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:Bullseye:1062501003313819678>__Bullseye__"
							 },
							 {
								 name: "Ability",
								 value: "**Mushroom Evolution:** Do 3 damage to Zombies here and next door. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Some see him as depressed, but he's got a lot of sides."
							 })
		let lg = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/57/HD_Lava_Guava.png/revision/latest?cb=20220312093015")
		.setTitle("Lava Guava | <:Kabloom:1062502137826910268>")
		.setDescription("**- Fruit Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "5 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Do 2 damage to each Zombie here and next door. \n If played on the Ground, make __Hot Lava__ here. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"I try to stay cool, I really do. But Zombies! Man, they make me blow my top!"`
							 })
		let sizz = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/eb/HD_Sizzle.PNG/revision/latest?cb=20160702001107")
		.setTitle("Sizzle | <:Kabloom:1062502137826910268>")
		.setDescription("**- Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "5 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Do 5 damage to a Zombie."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Incredibly hot and full of electricity. So much ouch."
							 })
			let cb = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1094727365042634902/png-transparent-plants-vs-zombies-2-it-s-about-time-cherry-bomb-bomb-cartoon-thumbnail-removebg-preview.png")
		.setTitle("Cherry Bomb | <:Kabloom:1062502137826910268>")
		.setDescription("**- Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "6 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Do 4 damage to each Zombie here and next door."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `Explode? Detonate? ... Explodonate!"`
							 })
		let dlking = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/19/DandyLionKingCardImage.png/revision/latest?cb=20180208071438")
		.setTitle("Dandy Lion King | <:Kabloom:1062502137826910268>")
		.setDescription("**- Flower Animal Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 6 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Damage the Zombie Hero for __half__ their Health. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "He's developed a taste for Zombie Heroes."
							 },
							 {
								 name: "Half",
								 value: "Round down the damage."
							 })
			let poak = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/80/HD_Poison_Oak.png/revision/latest/scale-to-width-down/250?cb=20191005194804")
		.setTitle("Poison Oak | <:Kabloom:1062502137826910268>")
		.setDescription("**- Leafy Tree Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:AntiHero:1062501067700568074>, 5 <:Health:1062515540712751184>, 6 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:AntiHero:1062501067700568074>__Anti-Hero 5__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Gets lunch with Poison Ivy and Poison Mushroom every week. They have a lot to talk about."
							 })
			let gw = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/37/GrapesofWrathCardImage.png/revision/latest?cb=20180208070040")
		.setTitle("Grapes of Wrath | <:Kabloom:1062502137826910268>")
		.setDescription("**- Berry Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "6 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 7 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When destroyed:** Do 6 damage to the Zombie Hero. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Everyone's always asking, 'Why so angry?' Because ZOMBIES! Sheesh. Obviously."`
							 })
		let kecorn = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/5c/HD_Kernel_Corn.png/revision/latest?cb=20161026102119")
		.setTitle("Kernel Corn | <:Kabloom:1062502137826910268>")
		.setDescription("**- Corn Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "6 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 8 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Do 4 damage to each Zombie. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "What he lacks in a sense of humor, he makes up for with attitude... and dual Cob Busters."
							 })
			const m = await	message.channel.send({embeds: [kc], components: [row] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter})
		collector.on("collect", async i => {
			if(i.customId == 'ps'){
				await i.update({embeds: [puff], components: [ps]})
			}
			if(i.customId == 'helpk'){
				await i.update({embeds: [kc], components: [row] } )
			}
			if(i.customId == 'as'){
				await i.update({embeds: [ashroom], components: [as]})
			}
				if(i.customId == 'puff'){
				await i.update({embeds: [puff], components: [ps]})
			}
			if(i.customId == 'bb'){
				await i.update({embeds: [bbomb], components: [bb]})
			}
					if(i.customId == 'ashroom'){
				await i.update({embeds: [ashroom], components: [as]})
			}
			if(i.customId == 'bh'){
				await i.update({embeds: [bheart], components: [bh]})
			}
				if(i.customId == 'bbomb'){
				await i.update({embeds: [bbomb], components: [bb]})
			}
			if(i.customId == 'bheart'){
				await i.update({embeds: [bheart], components: [bh]})
			}
			if(i.customId == 'bm'){
				await i.update({embeds: [bmush], components: [bm]})
			}
			if(i.customId == 'hvc'){
				await i.update({embeds: [hvcur], components: [hvc]})
			}
				if(i.customId == 'bmush'){
				await i.update({embeds: [bmush], components: [bm]})
			}
			if(i.customId == 'hl'){
				await i.update({embeds: [hlava], components: [hl]})
			}
				if(i.customId == 'hvcur'){
				await i.update({embeds: [hvcur], components: [hvc]})
			}
			if(i.customId == 'pm'){
				await i.update({embeds: [pmush], components: [pm]})
			}
						if(i.customId == 'hlava'){
				await i.update({embeds: [hlava], components: [hl]})
			}
				if(i.customId == 'hot'){
				await i.reply({embeds: [hlava], ephemeral: true})
			}
			if(i.customId== 're'){
				await i.update({embeds: [rec], components: [re]})
			}
				if(i.customId == 'pmush'){
				await i.update({embeds: [pmush], components: [pm]})
			}
			if(i.customId == 'sft'){
				await i.update({embeds: [sf2], components: [sft]})
			}
				if(i.customId== 'rec'){
				await i.update({embeds: [rec], components: [re]})
			}
			if(i.customId == 'vr'){
				await i.update({embeds: [vrh], components: [vr]})
			}
			if(i.customId == 'sf2'){
				await i.update({embeds: [sf2], components: [sft]})
			}
			if(i.customId == 'bl'){
				await i.update({embeds: [blaunch], components: [bl, bomb]})
			}
			if(i.customId == 'bomb'){
				await i.reply({embeds: [bbomb], ephemeral: true})
			}
			if(i.customId == 'vrh'){
				await i.update({embeds: [vrh], components: [vr]})
			}
			if(i.customId == 'blast'){
				await i.update({embeds: [blast], components: [bblast]})
			}
			if(i.customId == 'blaunch'){
				await i.update({embeds: [blaunch], components: [bl, bomb]})
			}
			if(i.customId == 'bs'){
				await i.update({embeds: [bshroom], components: [bs]})
			}
				if(i.customId == 'bblast'){
				await i.update({embeds: [blast], components: [bblast]})
			}
			if(i.customId == 'fw'){
				await i.update({embeds: [fire], components: [fw, lava]})
			}
				if(i.customId == 'bshroom'){
				await i.update({embeds: [bshroom], components: [bs]})
			}
			if(i.customId == 's'){
				await i.update({embeds: [seed], components: [s]})
			}
					if(i.customId == 'fire'){
				await i.update({embeds: [fire], components: [fw, lava]})
			}
			if(i.customId == 'sm'){
				await i.update({embeds: [shelf], components: [sm]})
			}
				if(i.customId == 'seed'){
				await i.update({embeds: [seed], components: [s]})
			}
			if(i.customId == 'wb'){
				await i.update({embeds: [wild], components: [wb]})
			}
			if(i.customId == 'shelf'){
				await i.update({embeds: [shelf], components: [sm]})
			}
			if(i.customId == 'ba'){
				await i.update({embeds: [bangry], components: [ba]})
			}
				if(i.customId == 'wild'){
				await i.update({embeds: [wild], components: [wb]})
			}
			if(i.customId == 'cm'){
				await i.update({embeds: [cmush], components: [cm]})
			}
				if(i.customId == 'bangry'){
				await i.update({embeds: [bangry], components: [ba]})
			}
			if(i.customId == 'cmag'){
				await i.update({embeds: [cromag], components: [cmag]})
			}
						if(i.customId == 'cmush'){
				await i.update({embeds: [cmush], components: [cm]})
			}
			if(i.customId == 'imi'){
				await i.update({embeds: [tat], components: [imi]})
			}
				if(i.customId == 'cromag'){
				await i.update({embeds: [cromag], components: [cmag]})
			}
			if(i.customId == 'is'){
				await i.update({embeds: [isp], components: [is]})
			}
				if(i.customId == 'tat'){
				await i.update({embeds: [tat], components: [imi]})
				}
			if(i.customId == 'mg'){
				await i.update({embeds: [mgr], components: [mg]})
			}
						if(i.customId == 'isp'){
				await i.update({embeds: [isp], components: [is]})
			}
			if(i.customId == 'mr'){
				await i.update({embeds: [mrl], components: [mr]})
			}
				if(i.customId == 'mgr'){
				await i.update({embeds: [mgr], components: [mg]})
			}
			if(i.customId == 'pi'){
				await i.update({embeds: [pivy], components: [pi]})
			}
				if(i.customId == 'mrl'){
				await i.update({embeds: [mrl], components: [mr]})
			}
			if(i.customId == 'pun'){
				await i.update({embeds: [puni], components: [pun]})
			}
				if(i.customId == 'pivy'){
				await i.update({embeds: [pivy], components: [pi]})
			}
			if(i.customId == 'sb'){
				await i.update({embeds: [str], components: [sb, blasting]})
			}
			if(i.customId == 'blasting'){
				await i.reply({embeds: [blast], ephemeral: true})
			}
			if(i.customId == 'puni'){
				await i.update({embeds: [puni], components: [pun]})
			}
			if(i.customId == 'hunt'){
				await i.update({embeds: [hunters], components: [hunt]})
			}
				if(i.customId == 'str'){
				await i.update({embeds: [str], components: [sb, blasting]})
			}
			if(i.customId == 'zap'){
				await i.update({embeds: [cot], components: [zap]})
			}
					if(i.customId == 'hunters'){
				await i.update({embeds: [hunters], components: [hunt]})
			}
			if(i.customId == 'mole'){
				await i.update({embeds: [kale], components: [mole]})
			}
				if(i.customId == 'cot'){
				await i.update({embeds: [cot], components: [zap]})
			}
			if(i.customId== 'pop'){
				await i.update({embeds: [pairs], components: [pop]})
			}
				if(i.customId == 'kale'){
				await i.update({embeds: [kale], components: [mole]})
			}
			if(i.customId == 'pp'){
				await i.update({embeds: [pard], components: [pp]})
			}
				if(i.customId== 'pairs'){
				await i.update({embeds: [pairs], components: [pop]})
			}
			if(i.customId == 'morp'){
				await i.update({embeds: [pmorph], components: [morp]})
			}
					if(i.customId == 'pard'){
				await i.update({embeds: [pard], components: [pp]})
			}
			if(i.customId == 'pine'){
				await i.update({embeds: [pclone], components: [pine]})
			}
				if(i.customId == 'pmorph'){
				await i.update({embeds: [pmorph], components: [morp]})
			}
			if(i.customId == 'serg'){
				await i.update({embeds: [strong], components: [serg]})
			}
			if(i.customId == 'pclone'){
				await i.update({embeds: [pclone], components: [pine]})
			}
			if(i.customId == 'sonic'){
				await i.update({embeds: [sbloom], components: [sonic]})
			}
						if(i.customId == 'strong'){
				await i.update({embeds: [strong], components: [serg]})
			}
			if(i.customId == 'sour'){
				await i.update({embeds: [sourg], components: [sour]})
			}
			if(i.customId == 'sbloom'){
				await i.update({embeds: [sbloom], components: [sonic]})
			}
			if(i.customId == 'fig'){
				await i.update({embeds: [transfig], components: [fig]})
			}
				if(i.customId == 'sourg'){
				await i.update({embeds: [sourg], components: [sour]})
			}
			if(i.customId == 'abomb'){
				await i.update({embeds: [atom], components: [abomb, test]})
			}
			if(i.customId == 'test'){
				await i.reply({embeds: [seed], ephemeral: true})
			}
			if(i.customId == 'atom'){
				await i.update({embeds: [atom], components: [abomb, test]})
			}
					if(i.customId == 'transfig'){
				await i.update({embeds: [transfig], components: [fig]})
			}
			if(i.customId == 'blue'){
				await i.update({embeds: [blues], components: [blue]})
			}
			if(i.customId == 'eb'){
				await i.update({embeds: [electric], components: [eb]})
			}
			if(i.customId == 'blues'){
				await i.update({embeds: [blues], components: [blue]})
			}
			if(i.customId == 'gs'){
				await i.update({embeds: [gloom], components: [gs]})
			}
				if(i.customId == 'electric'){
				await i.update({embeds: [electric], components: [eb]})
			}
			if(i.customId == 'lavag'){
				await i.update({embeds: [lg], components: [lavag, lava]})
			}
				if(i.customId == 'gloom'){
				await i.update({embeds: [gloom], components: [gs]})
			}
			if(i.customId == 'si'){
				await i.update({embeds: [sizz], components: [si]})
			}
			if(i.customId == 'lg'){
				await i.update({embeds: [lg], components: [lavag, lava]})
			}
			if(i.customId == 'cbomb'){
				await i.update({embeds: [cb], components: [cbomb]})
			}
				if(i.customId == 'sizz'){
				await i.update({embeds: [sizz], components: [si]})
			}
			if(i.customId == 'dlk'){
				await i.update({embeds: [dlking], components: [dlk]})
			}
			if(i.customId == 'cb'){
				await i.update({embeds: [cb], components: [cbomb]})
			}
			if(i.customId == 'po'){
				await i.update({embeds: [poak], components: [po]})
			}
				if(i.customId == 'dlking'){
				await i.update({embeds: [dlking], components: [dlk]})
			}
			if(i.customId == 'gow'){
				await i.update({embeds: [gw], components: [gow]})
			}
				if(i.customId == 'poak'){
				await i.update({embeds: [poak], components: [po]})
			}
			if(i.customId == 'kecorn'){
				await i.update({embeds: [kecorn], components: [kcorn]})
			}
			if(i.customId == 'gw'){
				await i.update({embeds: [gw], components: [gow]})
			}
				if(i.customId == 'help'){
				await i.update({embeds: [kc], components: [row] } )
			}
				if(i.customId == 'kcorn'){
				await i.update({embeds: [kecorn], components: [kcorn]})
			}
		})
	}
	}
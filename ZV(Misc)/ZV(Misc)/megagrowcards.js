const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
module.exports = {
	name: `megagrowcards`,
	aliases: [`megagrowhelp`, `helpmegagrow`, `megagrow`, `cardsmegagrow`],
	category: `Miscellaneous`,
	run: async(client, message,args)=> {
		const row = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('efie')
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
                    .setCustomId('helpmg')
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
                    .setCustomId('bpeel')
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
                    .setCustomId('bchoy')
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
                    .setCustomId('cpeas')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('pt')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const pt = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('hban')
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
                    .setCustomId('pthyme')
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
                    .setCustomId('ppod')
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
                    .setCustomId('peashot')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('tw')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const tw = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('spot')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('ul')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const ul = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('twood')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('bep')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const bep = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('uleaf')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('cpu')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const cpu = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('bepea')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('cg')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const cg = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('cpult')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('dm')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const dm = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('cgrounds')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('fps')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const fps = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('dmint')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('lotv')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const lotv = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('fpshot')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('pat')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const pat = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('lotvalley')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('split')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const split = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('peapatch')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('sweet')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const sweet = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('splitpea')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('vm')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const vm = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('sweetpea')
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
                    .setCustomId('vmut')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('cosmic')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const cosmic = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('cucc')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('fert')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const fert = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('cosmicpea')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('flour')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const flour = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('fertilize')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('gpow')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const gpow = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('flourish')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('gsh')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const gsh = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('gpower')
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
                    .setCustomId('gshroom')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('ms')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const ms = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('moonbean')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('rep')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const rep = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('msprout')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('tpf')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const tpf = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('repeat')
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
                    .setCustomId('tpfather')
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
                    .setCustomId('typical')
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
                    .setCustomId('bsplit')
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
                    .setCustomId('brex')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('rm')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const rm = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('pfood')
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
                    .setCustomId('rmoss')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('sky')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const sky = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('sspin')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('gat')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const gat = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('skyshot')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('or')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const or = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('gatpea')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('pcl')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const pcl = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('orings')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('pfig')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const pfig = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('pclover')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('pot')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const pot = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('pfight')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('trp')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const trp = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('potted')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('whip')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const whip = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('red')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('apot')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const apot = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('vine')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('bam')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const bam = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('ap')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('spb')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const spb = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('bamb')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('ef')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const ef = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('phat')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('help')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const gr = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('gr')
                    .setLabel('Grape Responsibility')
                    .setStyle(ButtonStyle.Danger)
										.setEmoji('<:Grape_Responsibility:1104781603428896849>')
            );
		const mgb = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
			.setCustomId('mgb')
			.setLabel('Magic Beanstalks')
			.setEmoji('<:MagicBeanstalk:1104902066104696872>')
			.setStyle(ButtonStyle.Success)
			);
			let half = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
			.setCustomId("half")
			.setStyle(ButtonStyle.Primary)
			.setLabel("Half Banana")
			.setEmoji("<:Half_Banana:1105118939631059055>")
		)
		let mg = new EmbedBuilder()
			.setThumbnail("https://tiermaker.com/images/templates/3403531587531065.png")
		.setTitle("MegaGrow Cards | <:MegaGrow:1062501412992458802>")
		.setDescription("The Cards in the MegGrow class are \n<@1043528908148052089> bananapeel \n<@1043528908148052089> bonkchoy \n<@1043528908148052089> cliquepeas \n<@1043528908148052089> halfbanana \n<@1043528908148052089> partythyme \n<@1043528908148052089> peapod \n<@1043528908148052089> peashooter \n<@1043528908148052089> sweetpotato \n<@1043528908148052089> torchwood \n<@1043528908148052089> umbrellaleaf \n<@1043528908148052089> blackeyedpea \n<@1043528908148052089> cabbagepult \n<@1043528908148052089> coffeegrounds \n<@1043528908148052089> doubledmint \n<@1043528908148052089> firepeashooter \n<@1043528908148052089> lilyofthevalley \n<@1043528908148052089> peapatch \n<@1043528908148052089> splitpea \n<@1043528908148052089> sweetpea \n<@1043528908148052089> vegetationmutation \n<@1043528908148052089> captaincucumber \n<@1043528908148052089> cosmicpea \n<@1043528908148052089> fertilize \n<@1043528908148052089> flourish \n<@1043528908148052089> grapepower \n<@1043528908148052089> growshroom \n<@1043528908148052089> moonbean \n<@1043528908148052089> musclesprout \n<@1043528908148052089> repeater \n<@1043528908148052089> thepodfather \n<@1043528908148052089> typicalbeanstalk \n<@1043528908148052089> bananasplit \n<@1043528908148052089> bananasaurusrex \n<@1043528908148052089> plantfood \n<@1043528908148052089> repeatmoss \n<@1043528908148052089> savagespinach \n<@1043528908148052089> skyshooter \n<@1043528908148052089> gatlingpea \n<@1043528908148052089> onionrings \n<@1043528908148052089> pluckyclover \n<@1043528908148052089> podfighter \n<@1043528908148052089> pottedpowerhouse \n<@1043528908148052089> theredplantit \n<@1043528908148052089> whipvine \n<@1043528908148052089> apotatosaurus \n<@1043528908148052089> bamboozle \n<@1043528908148052089> superphatbeets \n<@1043528908148052089> espressofiesta")
		.setColor("Random")
		
				.setFooter({text: "To find out more info about the cards in MegaGrow class please use the commands listed above or click on the buttons below ⏬!"})
		let bpeel = new EmbedBuilder()
		.setTitle("Banana Peel | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Banana Trick -**")
		.setColor("Random")
		.addFields({name: "Stats", 
							 	value: "1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Move a Zombie. \n __Conjure__ a Banana."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Rare**"
							 },
							 {
								 name: "Flavor Text", 
								 value: "A slapstick comedy staple that, somehow, the Zombies never see coming."
							 })
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/fe/BananaPeelCardImage.png/revision/latest/scale-to-width-down/250?cb=20170923033450")
		
		let bchoy = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plants-vs-zombies-heroes-through-time/images/2/27/HD_Bonk_Choy_%28PvZH%29.png/revision/latest/thumbnail/width/360/height/360?cb=20170330140458")
		.setTitle("Bonk Choy | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Leafy Plant -**")
		.setColor("Random")
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** This gets +1<:Strength:1062501774612779039> this turn. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Little known fact: He used to have two teeth."
							 })
		
		let cpeas = new EmbedBuilder()
		.setThumbnail("https://pbs.twimg.com/media/DFwAtCsU0AE4INR.png")
		.setTitle("Clique Peas | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Bean Pea Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Shuffle two Clique Peas into your deck. For the rest of the game, all Clique Peas get +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> and cost +1<:Sun:1062501177679413409>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: "On Wednesdays we wear sunglasses."
							 })
			let hban = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/30/Half-Banana_card_face.png/revision/latest?cb=20171015065628")
		.setTitle("Half-Banana | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Banana Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats", 
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When destroyed:** All Bananas in your hand get +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Have you met my better half? She's around here somewhere."`
							 })
		let pthyme = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/d/df/PartyThyme.png/revision/latest/scale-to-width-down/250?cb=20190310190101")
		.setTitle("Party Thyme | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Leafy Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When a Plant does a Bonus Attack, draw a card."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "A real extrovert, this one."
							 })
			let ppod = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/c2/Pea_Pod%28Halloween%29.png/revision/latest/scale-to-width-down/250?cb=20131230014347")
		.setTitle("Pea Pod | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Pea Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**Start of Turn:** This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Sometimes they squabble, but they usually get along like five peas in a pod."
							 })
			let peashot = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/p__/images/1/1a/HD_Peashooter_28PvZH.png/revision/latest?cb=20201115221207&path-prefix=protagonist")
		.setTitle("Peashooter | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Pea Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Started fighting Zombies in 2009... and never stopped."
							 })
			let spot = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/4c/HDSweetPotato.png/revision/latest?cb=20200407234532")
		.setTitle("Sweet Potato | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Root Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 value: "0 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "**When played:** Move a Zombie to this lane."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Loves unicorns and rainbows... and watching cats on the Internet."
							 })
		let twood = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/p__/images/0/04/TorchwoodCardImage.png/revision/latest?cb=20191225214028&path-prefix=protagonist")
		.setTitle("Torchwood | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Tree Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 value: "0 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "Peas behind this get +2<:Strength:1062501774612779039>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Feel the burn, I COMMAND YOU!"`
							 })
		let uleaf = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1113170830080344235/umbrella.webp")
		.setTitle("Umbrella Leaf | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Leafy Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "0 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "__Team-Up__"
							 },
							 {
								 name: "Ability",
								 value: "Other Plants here and next door are <:Untrickable:1062501535126409277>__Untrickable__."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "She's not very frond of getting wet."
							 })
		let bepea = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/2d/HD_Black-Eyed_Pea.png/revision/latest?cb=20160630003911")
		.setTitle("Black-Eyed Pea | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Bean Pea Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> when a Zombie Trick is played."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"You shoulda seen the other guy!"`
							 })
		let cpult = new EmbedBuilder()
		.setThumbnail("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5556370e-b85c-44f4-9c5d-128164e3fe4f/d7bjbkf-dc602b95-4c13-4bd2-9ed3-4bb7917c1466.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzU1NTYzNzBlLWI4NWMtNDRmNC05YzVkLTEyODE2NGUzZmU0ZlwvZDdiamJrZi1kYzYwMmI5NS00YzEzLTRiZDItOWVkMy00YmI3OTE3YzE0NjYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.pRpwaZCUmOntnLn0co_he_EXS1KHxw7Eqy3X13ar4Kg")
		.setTitle("Cabbage-Pult | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Leafy Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played on Heights:** This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Coleslaw from above!"`
							 })
			let cgrounds = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/6c/CoffeeGroundsCardImage.png/revision/latest/scale-to-width-down/250?cb=20170923033112")
		.setTitle("Coffee Grounds | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Bean Environment -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Plants here get <:DoubleStrike:1062501703494160394>__Double Strike__."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Nothing wakes you up in the morning like extra attacks on Zombies. Well OK, coffee does."
							 })
		let dmint = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/28/DoubledMint.png/revision/latest/scale-to-width-down/250?cb=20170902104215")
		.setTitle("Doubled Mint | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Leafy Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**Start of Turn:** Double this Plant's <:Strength:1062501774612779039> and <:Health:1062515540712751184>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "He'll grow on you. Just give him time."
							 })
			let fpshot = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/1d/By_A.Qu%E1%BB%91c.png/revision/latest/scale-to-width-down/250?cb=20171127084525")
		.setTitle("Fire Peashooter | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Pea Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Is it getting hot in here or is it just me?"`
							 })
		let lotvalley = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/77/IMG_2736.png/revision/latest/scale-to-width-down/250?cb=20180404031433")
		.setTitle("Lily of the Valley | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Flower Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When you play a Plant on Heights, that Plant gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: "She's always trying to elevate her friends. She's good like that."
							 })
		const peapatch = new EmbedBuilder()
		.setThumbnail("https://images-ext-1.discordapp.net/external/p5oBA5_3xE-T7x12aN7N5WMuX2j_4Wbu-Sf6MZC0wek/%3Fcb%3D20211017015609/https/static.wikia.nocookie.net/plantsvszombies/images/d/d4/Pea_Patch_HD.png/revision/latest/scale-to-width-down/250")
		.setTitle("Pea Patch | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Leafy Pea Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**__Fusion__:** A plant played on this gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Don't let the Dog Walker anywhere near it."
							 })
			let splitpea = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/10/SplitPea.png/revision/latest/scale-to-width-down/250?cb=20220209001732")
		.setTitle("Split Pea | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Pea Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**Before combat here:** This does 1 damage to the Plant Hero."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"All I wanted in life was to get ahead. But it kinda grew on me. How to face the future? I'm on two minds."`
							 })
		let sweetpea = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/4e/Sweet_Pea_HD.png/revision/latest?cb=20170624185127")
		.setTitle("Sweet Pea | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Pea Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Move a Zombie to this lane."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Zombies may only have four teeth left, but one of them's a sweet tooth."
							 })
		let vmut = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1104070650936709221/InspireCardImage.webp")
		.setTitle("Vegetation Mutation | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "All Plants on Heights and Environments get +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Environmentalism at its finest."
							 })
		let cucc = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/2a/CaptainCucumberCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226135731")
		.setTitle("Captain Cucumber | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Fruit Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Cards you __Conjure__ cost 1<:Sun:1062501177679413409> less. \n When this does damage, __Conjure__ a Legendary card."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "He's steered his crew through many a pickle."
							 })
		let cosmicpea = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/bf/CosmicPeaCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226140258")
		.setTitle("Cosmic Pea | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Pea Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:DoubleStrike:1062501703494160394>, 1 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:DoubleStrike:1062501703494160394>__Double Strike__"
							 },
							 {
								 name: "Ability",
								 value: "**When played:** __Conjure__ a Pea, and it gets <:DoubleStrike:1062501703494160394>__Double Strike__. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"The cosmos is so big and a pea is so small. The juxtaposition just really makes me think, you know?"`
							 })
		let fertilize = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1104417231401664672/FertilizerCardImage.webp")
		.setTitle("Fertilize | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 value: "3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "A Plant gets +3<:Strength:1062501774612779039>/+3<:Health:1062515540712751184>."
							 },
							 {
								 name: "Set - Rarity",
								value: "Basic - Common"
							 },
							 {
								 name: "Flavor Text",
								 value: "Stinky, sure, but powerful stuff. Ask any Plant."
							 })
		let flourish = new EmbedBuilder()
			.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1104776610491678750/FlourishCardImage.webp")
		.setTitle("Flourish | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Draw two cards."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Call it a growth spurt."
							 })
			let gpower = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e2/Grape_Power_cardface.png/revision/latest?cb=20170701134111")
		.setTitle("Grape Power | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Berry Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Double a Plant's <:Strength:1062501774612779039>. \n Gain a __Grape Responsibility__."
							 },
							 {
								 name: "Flavor Text",
								 value: "**Colossal - Super-Rare**"
							 })
			let moonbean = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/95/Moon_Bean_HD.png/revision/latest?cb=20170225005923")
		.setTitle("Moonbean | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Bean Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When this does damage, shuffle two __Magic Beanstalks__ into your deck. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "She and Sunflower are besties. It's just too bad their schedules make it hard for them to get together."
							 })
		const gres = new EmbedBuilder()
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
				 let gshroom = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/09a1333c-54d3-4c0c-8f29-3a6a0619d29e/scale-to-width/755")
		.setTitle("Grow-Shroom | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Mushroom Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Another Plant gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: "She's always bringing out the best in others."
							 })
			.setColor("Random")
			
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
			let msprout = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/5a/HD_Muscle_Sprout.png/revision/latest?cb=20160813041930")
		.setTitle("Muscle Sprout | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Leafy Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> when you play a Plant. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Can you spot me bro?"`
							 })
			let repeat = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/poohadventures/images/f/f4/HD_Repeater_%28PvZH%29.webp/revision/latest/scale-to-width-down/250?cb=20211107175839")
		.setTitle("Repeater | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Pea Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:DoubleStrike:1062501703494160394>, 2 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:DoubleStrike:1062501703494160394>__Double Strike__"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Basic - Common**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Yes! Yes! Let's do this! Let's do this!"`
							 })
		let tpfather = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/ea/PodfatherHD.png/revision/latest/scale-to-width-down/250?cb=20170901023535")
		.setTitle("The Podfather | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Pea Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When you play a Pea, that Pea gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"It ain't easy keeping the peas in this family."`
							 })
			let typical = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/d/de/Typical_Beanstalk_card_face.png/revision/latest?cb=20170830152900")
		.setTitle("Typical Beanstalk | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Leafy Bean Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 3 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played next to a Leafy Plant:** __Conjure__ a Leafy card."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Everyone's magical in their own special way. Everyone except me."`
							 })
		let bsplit = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/16/Banana_Split_HD.png/revision/latest?cb=20170225005900")
		.setTitle("Banana Split | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Banana Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When destroyed:** Make two __Half-Bananas__ next door."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"I don't want to brag, hanging out in a tub full of ice cream all day... not a bad gig if you can get it."`
							 })
				let brex = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/b7/Bananasaurus_rex.png/revision/latest?cb=20160320230322")
		.setTitle("Bananasaurus Rex | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Banana Animal Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:DoubleStrike:1062501703494160394>, 3 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:DoubleStrike:1062501703494160394>__Double Strike__"
							 },
							 {
								 name: "Ability",
								 value: "**Dino-Roar:** This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "She's a banana first and a dinosaur second. But it's a close second."
							 })
		let pfood = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/fc/Pvz2plantfood.png/revision/latest?cb=20130821151547")
		.setTitle("Plant Food | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "A Plant gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> and does a Bonus Attack."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "The most important meal of the day."
							 })
		let rmoss = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/68/Re-PeatMoss.png/revision/latest/scale-to-width-down/250?cb=20170902104228")
		.setTitle("Repeat Moss | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Moss Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "2 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "When you play a Trick, this does a Bonus Attack."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"To do what I do... it's TRICKY. I'll leave it at that."`
							 })
	let sspin = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/38/SavageSpinachHD.png/revision/latest/scale-to-width-down/250?cb=20180209112308")
		.setTitle("Savage Spinach | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Leafy Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**__Leafy Evolution__:** All Plants in all lanes and your hand get +2<:Strength:1062501774612779039>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Neptuna planned her Triassic Invasion perfectly. But like so many conqueror before her, she underestimated the Spinach."
							 })
let skyshot = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/4e/SkyShooterHD.png/revision/latest/scale-to-width-down/250?cb=20170831054502")
		.setTitle("Skyshooter | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Pea Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 4 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played on Heights:** This gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Uncommon**"
							 },
							 {
								 name: "Flavor Text",
								 value: "The youngest Peashooter ever to earn a pilot's license. Also the only Peashooter ever to earn a pilot's license."
							 })
	let gatpea = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/7f/HDplus_gatling.png/revision/latest?cb=20161001120328")
		.setTitle("Gatling Pea | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Pea Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "5 <:DoubleStrike:1062501703494160394>, 4 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:DoubleStrike:1062501703494160394>__Double Strike__"
							 },
							 {
								 name: "Ability",
								 value: "**__Pea Evolution__:** This does a Bonus Attack"
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "There is no problem that cannot be solved by more peas."
							 })
	let orings = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/88/OnionRingsCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226142700")
		.setTitle("Onion Rings | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Root Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "4 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Each Plant in your hand becomes 4<:Strength:1062501774612779039>/4<:Health:1062515540712751184>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "So powerful it makes you cry."
							 })
let pclover = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/ad/UnpluckyC.png/revision/latest?cb=20180216045827")
		.setTitle("Plucky Clover | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Leafy Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 value: "1 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** __Conjure__ an Event card. Plucky Clover gets +<:Strength:1062501774612779039> equal to that card's cost."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Event**"
							 },
							 {
								 name: "Flavor Text",
								 value: "She's a giver, no doubt. But she feels like she gets a lot out of it too."
							 })
	let pfight = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/55/PodFighterCardImage.png/revision/latest/scale-to-width-down/250?cb=20171013043546")
		.setTitle("Pod Fighter | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Pea Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats", value: "3 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "This does a Bonus Attack when you play a Plant here or next door. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "They're just trying to create peas in our time."
							 })
let potted = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1113173306963677234/potted.webp")
		.setTitle("Potted Powerhouse | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Leafy Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats", 
							 	value: "3 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**While in your hand:** This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> when a Plant gains Strength or Health."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "She loves living out of a pot. It's not for every Plant. But to her, it's home."
							 })
let red = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/26/The_Red_Plant-It_%28Card%29.png/revision/latest/scale-to-width-down/250?cb=20170424025124")
		.setTitle("The Red Plant-It | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Root Environment -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "5 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Plants here get +5<:Strength:1062501774612779039>/+5<:Health:1062515540712751184>."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Galactic - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "It may seem an inhospitable place for Plants, but with a little TLC and some patience, it'll grow more than just potatoes. Much more."
							 })
let vine = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e7/HD_Whipvine.PNG/revision/latest?cb=20161002092657")
		.setTitle("Whipvine | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Root Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "5 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 5 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**When played:** Move a Zombie."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Get along, little Zombie."`
							 })
 let ap = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/ea/Tater_titan.png/revision/latest/scale-to-width-down/250?cb=20170816155348")
		.setTitle("Apotatosaurus | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Root Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "5 <:Strength:1062501774612779039>, 5 <:Untrickable:1062501535126409277>, 6 <:Sun:1062501177679413409>"},
							 {
								 name: "Trait",
								 value: "<:Untrickable:1062501535126409277>__Untrickable__"
							 },
							 {
								 name: "Ability",
								 value: "**When played:** __Conjure__ a Root. \n **__Dino-Roar__:** This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Triassic - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Some potatoes are sweet. Others are dinosaurs."
							 })
	let bamb = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/a9/Bamboozle_HD.png/revision/latest?cb=20170227030606")
		.setTitle("Bamboozle | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Leafy Root Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "5 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 6 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "**__Plant Evolution__:** Draw two cards. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Colossal - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Only among the hyper-evolved Plants of Hollow Earth can you be outwitted by a tree."
							 })
let phat = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/9c/HD_Super_Phat_Beets.png/revision/latest/scale-to-width-down/250?cb=20160323025515")
		.setTitle("Super-Phat Beets | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Root Plant -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "3 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 6 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "****When played:**** This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> for each other Plant and Zombie."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "When he drops the beet, everyone feels it. Especially the Zombies."
							 })
let efie = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/8d/EspressoFiestaCardImage.png/revision/latest?cb=20180216042710")
		.setTitle("Espresso Fiesta | <:MegaGrow:1062501412992458802>")
		.setDescription("**- Bean Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "8 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "A Plant does three Bonus Attacks."
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Super-Rare**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Don't consume after 5 p.m. You'll be up all night."
							 })
		const m = await	message.channel.send({embeds: [mg], components: [row] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter})
		collector.on("collect", async i=> {
			if(i.customId == 'bp'){
				await i.update({embeds: [bpeel], components: [bp]})
			}
			if(i.customId == 'helpmg'){
				await i.update({embeds: [mg], components: [row] } )
			}
			if(i.customId == 'bc'){
				await i.update({embeds: [bchoy], components: [bc]})
			}
			if(i.customId == 'bpeel'){
				await i.update({embeds: [bpeel], components: [bp]})
			}
			if(i.customId == 'cp'){
				await i.update({embeds: [cpeas], components: [cp]})
			}
				if(i.customId == 'bchoy'){
				await i.update({embeds: [bchoy], components: [bc]})
			}
			if(i.customId == 'hb'){
				await i.update({embeds: [hban], components: [hb]})
			}
			if(i.customId == 'cpeas'){
				await i.update({embeds: [cpeas], components: [cp]})
			}
			if(i.customId == 'pt'){
				await i.update({embeds: [pthyme], components: [pt]})
			}
				if(i.customId == 'hban'){
				await i.update({embeds: [hban], components: [hb]})
			}
			if(i.customId == 'pp'){
				await i.update({embeds: [ppod], components: [pp]})
			}
			if(i.customId == 'pthyme'){
				await i.update({embeds: [pthyme], components: [pt]})
			}
			if(i.customId == 'ps'){
				await i.update({embeds: [peashot], components: [ps]})
			}
			if(i.customId == 'ppod'){
				await i.update({embeds: [ppod], components: [pp]})
			}
			if(i.customId == 'sp'){
				await i.update({embeds: [spot], components: [sp]})
			}
			if(i.customId == 'peashot'){
				await i.update({embeds: [peashot], components: [ps]})
			}
			if(i.customId == 'tw'){
				await i.update({embeds: [twood], components: [tw]})
			}
			if(i.customId == 'spot'){
				await i.update({embeds: [spot], components: [sp]})
			}
			if(i.customId == 'ul'){
				await i.update({embeds: [uleaf], components: [ul]})
			}
				if(i.customId == 'twood'){
				await i.update({embeds: [twood], components: [tw]})
			}
			if(i.customId == 'bep'){
				await i.update({embeds: [bepea], components: [bep]})
			}
				if(i.customId == 'uleaf'){
				await i.update({embeds: [uleaf], components: [ul]})
			}
			if(i.customId == 'cpu'){
				await i.update({embeds: [cpult], components: [cpu]})
			}
			if(i.customId == 'bepea'){
				await i.update({embeds: [bepea], components: [bep]})
			}
			if(i.customId == 'cg'){
				await i.update({embeds: [cgrounds], components: [cg]})
			}
					if(i.customId == 'cpult'){
				await i.update({embeds: [cpult], components: [cpu]})
			}
			if(i.customId == 'dm'){
				await i.update({embeds: [dmint], components: [dm]})
			}
			if(i.customId == 'cgrounds'){
				await i.update({embeds: [cgrounds], components: [cg]})
			}
			if(i.customId == 'fps'){
				await i.update({embeds: [fpshot], components: [fps]})
			}
			if(i.customId == 'lotv'){
				await i.update({embeds: [lotvalley], components: [lotv]})
			}
				if(i.customId == 'fpshot'){
				await i.update({embeds: [fpshot], components: [fps]})
			}
			if(i.customId == 'dmint'){
				await i.update({embeds: [dmint], components: [dm]})
			}
			if(i.customId == 'pat'){
				await i.update({embeds: [peapatch], components: [pat]})
			}
				if(i.customId == 'lotvalley'){
				await i.update({embeds: [lotvalley], components: [lotv]})
			}
			if(i.customId == 'split'){
				await i.update({embeds: [splitpea], components: [split]})
			}
			if(i.customId == 'peapatch'){
				await i.update({embeds: [peapatch], components: [pat]})
			}
			if(i.customId == 'sweet'){
				await i.update({embeds: [sweetpea], components: [sweet]})
			}
				if(i.customId == 'splitpea'){
				await i.update({embeds: [splitpea], components: [split]})
			}
			if(i.customId == 'vm'){
				await i.update({embeds: [vmut], components: [vm]})
			}
				if(i.customId == 'sweetpea'){
				await i.update({embeds: [sweetpea], components: [sweet]})
			}
			if(i.customId == 'cc'){
				await i.update({embeds: [cucc], components: [cc]})
			}
			if(i.customId == 'vmut'){
				await i.update({embeds: [vmut], components: [vm]})
			}
			if(i.customId == 'cosmic'){
				await i.update({embeds: [cosmicpea], components: [cosmic]})
			}
				if(i.customId == 'cucc'){
				await i.update({embeds: [cucc], components: [cc]})
			}
			if(i.customId == 'fert'){
				await i.update({embeds: [fertilize], components: [fert]})
			}
			if(i.customId == 'cosmicpea'){
				await i.update({embeds: [cosmicpea], components: [cosmic]})
			}
			if(i.customId == 'flour'){
				await i.update({embeds: [flourish], components: [flour]})
			}
					if(i.customId == 'fertilize'){
				await i.update({embeds: [fertilize], components: [fert]})
			}
			if(i.customId == 'gpow'){
				await i.update({embeds: [gpower], components: [gpow, gr]})
			}
				if(i.customId == 'flourish'){
				await i.update({embeds: [flourish], components: [flour]})
			}
				if(i.customId == 'gpower'){
				await i.update({embeds: [gpower], components: [gpow, gr]})
			}
			if(i.customId == 'gr'){
				await i.reply({embeds: [gres], ephemeral: true})
			}
			if(i.customId == 'gsh'){
				await i.update({embeds: [gshroom], components: [gsh]})
			}
			if(i.customId == 'mb'){
				await i.update({embeds: [moonbean], components: [mb, mgb]})
			}
				if(i.customId == 'gshroom'){
				await i.update({embeds: [gshroom], components: [gsh]})
			}
			if(i.customId == 'mgb'){
				await i.reply({embeds: [mgbean], ephemeral: true})
			}
			if(i.customId == 'ms'){
				await i.update({embeds: [msprout], components: [ms]})
			}
				if(i.customId == 'moonbean'){
				await i.update({embeds: [moonbean], components: [mb, mgb]})
			}
			if(i.customId == 'rep'){
				await i.update({embeds: [repeat], components: [rep]})
			}
					if(i.customId == 'msprout'){
				await i.update({embeds: [msprout], components: [ms]})
			}
			if(i.customId == 'tpf'){
				await i.update({embeds: [tpfather], components: [tpf]})
			}
				if(i.customId == 'repeat'){
				await i.update({embeds: [repeat], components: [rep]})
			}
			if(i.customId == 'tb'){
				await i.update({embeds: [typical], components: [tb]})
			}
			if(i.customId == 'tpfather'){
				await i.update({embeds: [tpfather], components: [tpf]})
			}
				if(i.customId == 'typical'){
				await i.update({embeds: [typical], components: [tb]})
			}
			if(i.customId == 'bs'){
				await i.update({embeds: [bsplit], components: [bs, half]})
			}
			if(i.customId == 'half'){
				await i.reply({embeds: [hban], ephemeral: true})
			}
			if(i.customId == 'br'){
				await i.update({embeds: [brex], components: [br]})
			}
					if(i.customId == 'bsplit'){
				await i.update({embeds: [bsplit], components: [bs, half]})
			}
			if(i.customId == 'pf'){
				await i.update({embeds: [pfood], components: [pf]})
			}
			if(i.customId == 'brex'){
				await i.update({embeds: [brex], components: [br]})
			}
			if(i.customId == 'rm'){
				await i.update({embeds: [rmoss], components: [rm]})
			}
				if(i.customId == 'pfood'){
				await i.update({embeds: [pfood], components: [pf]})
			}
			if(i.customId == 'spin'){
				await i.update({embeds: [sspin], components: [spin]})
			}
					if(i.customId == 'rmoss'){
				await i.update({embeds: [rmoss], components: [rm]})
			}
			if(i.customId == 'sky'){
				await i.update({embeds: [skyshot], components: [sky]})
			}
			if(i.customId == 'sspin'){
				await i.update({embeds: [sspin], components: [spin]})
			}
			if(i.customId == 'gat'){
				await i.update({embeds: [gatpea], components: [gat]})
			}
			if(i.customId == 'skyshot'){
				await i.update({embeds: [skyshot], components: [sky]})
			}
				if(i.customId == 'gatpea'){
				await i.update({embeds: [gatpea], components: [gat]})
			}
			if(i.customId == 'or'){
				await i.update({embeds: [orings], components: [or]})
			}
			if(i.customId == 'pcl'){
				await i.update({embeds: [pclover], components: [pcl]})
			}
			if(i.customId == 'orings'){
				await i.update({embeds: [orings], components: [or]})
			}
			if(i.customId == 'pfig'){
				await i.update({embeds: [pfight], components: [pfig]})
			}
					if(i.customId == 'pclover'){
				await i.update({embeds: [pclover], components: [pcl]})
			}
			if(i.customId == 'pot'){
				await i.update({embeds: [potted], components: [pot]})
			}
				if(i.customId == 'pfight'){
				await i.update({embeds: [pfight], components: [pfig]})
			}
			if(i.customId == 'trp'){
				await i.update({embeds: [red], components: [trp]})
			}
				if(i.customId == 'potted'){
				await i.update({embeds: [potted], components: [pot]})
			}
			if(i.customId == 'whip'){
				await i.update({embeds: [vine], components: [whip]})
			}
					if(i.customId == 'red'){
				await i.update({embeds: [red], components: [trp]})
			}
			if(i.customId == 'apot'){
				await i.update({embeds: [ap], components: [apot]})
			}
				if(i.customId == 'vine'){
				await i.update({embeds: [vine], components: [whip]})
			}
			if(i.customId == 'bam'){
				await i.update({embeds: [bamb], components: [bam]})
			}
				if(i.customId == 'ap'){
				await i.update({embeds: [ap], components: [apot]})
			}
			if(i.customId == 'spb'){
				await i.update({embeds: [phat], components: [spb]})
			}
				if(i.customId == 'bamb'){
				await i.update({embeds: [bamb], components: [bam]})
			}
			if(i.customId == 'ef'){
				await i.update({embeds: [efie], components: [ef]})
			}
			if(i.customId == 'phat'){
				await i.update({embeds: [phat], components: [spb]})
			}
					if(i.customId == 'efie'){
				await i.update({embeds: [efie], components: [ef]})
			}
				if(i.customId == 'help'){
				await i.update({embeds: [mg], components: [row] } )
			}
		})
	}
}
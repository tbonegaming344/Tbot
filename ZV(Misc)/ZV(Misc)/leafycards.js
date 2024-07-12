const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
module.exports = {
	name: `leafycards`,
	aliases: [`leafy`, `leafyhelp`, `helpleafy`, `cardsleafy`],
	category: `Miscellaneous`,
	run: async(client, message, args)=> {
		const row = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('hchoke')
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
                    .setCustomId('helplc')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('sr')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
						const sr = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('ppump')
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
                    .setCustomId('srocket')
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
                    .setCustomId('isp')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('mk')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
					const mk = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('pivy')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('tf')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const tf = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('mkale')
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
                    .setCustomId('tfig')
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
                    .setCustomId('pthyme')
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
                    .setCustomId('uleaf')
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
                    .setCustomId('cpult')
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
                    .setCustomId('dmint')
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
                    .setCustomId('patch')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('tbs')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const tbs = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('msprout')
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
                    .setCustomId('tbstalk')
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
                    .setCustomId('spin')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('power')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const power = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('pclover')
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
                    .setCustomId('powerhouse')
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
                    .setCustomId('bamb')
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
                    .setCustomId('sh')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const sh = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('lpad')
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
                    .setCustomId('shell')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('swb')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const swb = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('lreed')
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
                    .setCustomId('swbeans')
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
                    .setCustomId('lblower')
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
                    .setCustomId('sgrass')
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
                    .setCustomId('jholly')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('mgr')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const mgr = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('sage')
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
                    .setCustomId('mgrass')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('help')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const mb = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
			.setCustomId('mb')
			.setLabel('Magic Beanstalks')
			.setEmoji('<:MagicBeanstalk:1104902066104696872>')
			.setStyle(ButtonStyle.Success)
			);
		let lcards = new EmbedBuilder()
		.setTitle("Leafy Cards")
		.setDescription("The leafy cards in pvzheroes are \n<@1043528908148052089> powerpummel \n<@1043528908148052089> shamrocket \n<@1043528908148052089> invasivespecies \n<@1043528908148052089> poisonivy \n<@1043528908148052089> molekale \n<@1043528908148052089> transfiguration \n<@1043528908148052089> poisonoak \n<@1043528908148052089> bonkchoy \n<@1043528908148052089> partythyme \n<@1043528908148052089> umbrellaleaf \n<@1043528908148052089> cabbagepult \n<@1043528908148052089> doubledmint \n<@1043528908148052089> peapatch \n<@1043528908148052089> musclesprout \n<@1043528908148052089> typicalbeanstalk \n<@1043528908148052089> savagespinach \n<@1043528908148052089> pluckyclover \n<@1043528908148052089> pottedpowerhouse \n<@1043528908148052089> bamboozle \n<@1043528908148052089> iceberglettuce \n<@1043528908148052089> lilypad \n<@1043528908148052089> shellery \n<@1043528908148052089> lightningreed \n<@1043528908148052089> sowmagicbeans \n<@1043528908148052089> leafblower \n<@1043528908148052089> snakegrass \n<@1043528908148052089> jollyholly \n<@1043528908148052089> sagesage \n<@1043528908148052089> magnifyinggrass \n<@1043528908148052089> heartichoke")
		.setFooter({text: "To find out more info about the leafy cards please use the commands listed above or click on the buttons below ⏬!"})
		let ppump = new EmbedBuilder()
		.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1107731730305142834/PowerPummelCardImage.webp")
		.setTitle("Power Pummel | <:MegaGrow:1062501412992458802><:Guardian:1062501130501885973>")
		.setDescription("**- Leafy Superpower Trick -**")
		.setColor("Random")
		
		.addFields({name: "Stats",
							 	value: "1 <:Sun:1062501177679413409>"},
							 {
								 name: "Ability",
								 value: "Attack for 2 damage in each Ground lane. "
							 },
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Legendary**"
							 },
							 {
								 name: "Flavor Text",
								 value: `"Knuckle sandwiches for all my enemies!"`
							 })
		let srocket = new EmbedBuilder()
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
		let mkale = new EmbedBuilder()
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
			let tfig = new EmbedBuilder()
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
			const patch = new EmbedBuilder()
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
		let tbstalk = new EmbedBuilder()
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
		let spin = new EmbedBuilder()
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
			let powerhouse = new EmbedBuilder()
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
		let swbeans = new EmbedBuilder()
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
		let mgb = new EmbedBuilder()
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
			let lblower = new EmbedBuilder()
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
		let sage = new EmbedBuilder()
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
		const m = await	message.channel.send({embeds: [lcards], components: [row] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter})
		collector.on("collect", async i => {
			if(i.customId == 'pp'){
				await i.update({embeds: [ppump], components: [pp]})
			}
			if(i.customId == 'helplc'){
				await i.update({embeds: [lcards], components: [row] } )
			}
			if(i.customId == 'sr'){
				await i.update({embeds: [srocket], components: [sr]})
			}
					if(i.customId == 'ppump'){
				await i.update({embeds: [ppump], components: [pp]})
			}
			if(i.customId == 'is'){
				await i.update({embeds: [isp], components: [is]})
			}
					if(i.customId == 'srocket'){
				await i.update({embeds: [srocket], components: [sr]})
			}
			if(i.customId == 'pi'){
				await i.update({embeds: [pivy], components: [pi]})
			}
			if(i.customId == 'isp'){
				await i.update({embeds: [isp], components: [is]})
			}
			if(i.customId == 'mk'){
				await i.update({embeds: [mkale], components: [mk]})
			}
			if(i.customId == 'pivy'){
				await i.update({embeds: [pivy], components: [pi]})
			}
			if(i.customId == 'tf'){
				await i.update({embeds: [tfig], components: [tf]})
			}
					if(i.customId == 'mkale'){
				await i.update({embeds: [mkale], components: [mk]})
			}
			if(i.customId == 'pt'){
				await i.update({embeds: [pthyme], components: [pt]})
			}
						if(i.customId == 'tfig'){
				await i.update({embeds: [tfig], components: [tf]})
			}
			if(i.customId == 'ul'){
				await i.update({embeds: [uleaf], components: [ul]})
			}
				if(i.customId == 'pthyme'){
				await i.update({embeds: [pthyme], components: [pt]})
			}
			if(i.customId == 'cp'){
				await i.update({embeds: [cpult], components: [cp]})
			}
						if(i.customId == 'uleaf'){
				await i.update({embeds: [uleaf], components: [ul]})
			}
			if(i.customId == 'dm'){
				await i.update({embeds: [dmint], components: [dm]})
			}
						if(i.customId == 'cpult'){
				await i.update({embeds: [cpult], components: [cp]})
			}
			if(i.customId== 'pat'){
				await i.update({embeds: [patch], components: [pat]})
			}
					if(i.customId == 'dmint'){
				await i.update({embeds: [dmint], components: [dm]})
			}
			if(i.customId == 'ms'){
				await i.update({embeds: [msprout], components: [ms]})
			}
						if(i.customId== 'patch'){
				await i.update({embeds: [patch], components: [pat]})
			}
			if(i.customId == 'tbs'){
				await i.update({embeds: [tbstalk], components: [tbs]})
			}
			if(i.customId == 'msprout'){
				await i.update({embeds: [msprout], components: [ms]})
			}
			if(i.customId == 'ss'){
				await i.update({embeds: [spin], components: [ss]})
			}
				if(i.customId == 'tbstalk'){
				await i.update({embeds: [tbstalk], components: [tbs]})
			}
			if(i.customId == 'pc'){
				await i.update({embeds: [pclover], components: [pc]})
			}
					if(i.customId == 'spin'){
				await i.update({embeds: [spin], components: [ss]})
			}
			if(i.customId == 'power'){
				await i.update({embeds: [powerhouse], components: [power]})
			}
				if(i.customId == 'pclover'){
				await i.update({embeds: [pclover], components: [pc]})
			}
			if(i.customId == 'bam'){
				await i.update({embeds: [bamb], components: [bam]})
			}
					if(i.customId == 'powerhouse'){
				await i.update({embeds: [powerhouse], components: [power]})
			}
			if(i.customId == 'il'){
				await i.update({embeds: [ilet], components: [il]})
			}
						if(i.customId == 'bamb'){
				await i.update({embeds: [bamb], components: [bam]})
			}
			if(i.customId == 'lp'){
				await i.update({embeds: [lpad], components: [lp]})
			}
					if(i.customId == 'ilet'){
				await i.update({embeds: [ilet], components: [il]})
			}
			if(i.customId == 'sh'){
				await i.update({embeds: [shell], components: [sh]})
			}
					if(i.customId == 'lpad'){
				await i.update({embeds: [lpad], components: [lp]})
			}
			if(i.customId == 'lr'){
				await i.update({embeds: [lreed], components: [lr]})
			}
				if(i.customId == 'shell'){
				await i.update({embeds: [shell], components: [sh]})
			}
			if(i.customId == 'swb'){
				await i.update({embeds: [swbeans], components: [swb, mb]})
			}
					if(i.customId == 'lreed'){
				await i.update({embeds: [lreed], components: [lr]})
			}
					if(i.customId == 'mb'){
				await i.reply({embeds: [mgb],  ephemeral: true})
			}
			if(i.customId == 'lb'){
				await i.update({embeds: [lblower], components: [lb]})
			}
						if(i.customId == 'swbeans'){
				await i.update({embeds: [swbeans], components: [swb, mb]})
			}
			if(i.customId == 'sg'){
				await i.update({embeds: [sgrass], components: [sg]})
			}
				if(i.customId == 'lblower'){
				await i.update({embeds: [lblower], components: [lb]})
			}
			if(i.customId == 'jh'){
				await i.update({embeds: [jholly], components: [jh]})
			}
						if(i.customId == 'sgrass'){
				await i.update({embeds: [sgrass], components: [sg]})
			}
			if(i.customId == 'sa'){
				await i.update({embeds: [sage], components: [sa]})
			}
					if(i.customId == 'jholly'){
				await i.update({embeds: [jholly], components: [jh]})
			}
			if(i.customId == 'mgr'){
				await i.update({embeds: [mgrass], components: [mgr]})
			}
					if(i.customId == 'sage'){
				await i.update({embeds: [sage], components: [sa]})
			}
			if(i.customId == 'hc'){
				await i.update({embeds: [hchoke], components: [hc]})
			}
						if(i.customId == 'mgrass'){
				await i.update({embeds: [mgrass], components: [mgr]})
			}
						if(i.customId == 'hchoke'){
				await i.update({embeds: [hchoke], components: [hc]})
			}
					if(i.customId == 'help'){
				await i.update({embeds: [lcards], components: [row] } )
			}
		})
	}
}
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
module.exports = {
	name: `plantsuperheroes`,
	aliases: [`plantheroes`, `planthero`, `plantsuperhero`, `plants`, `superheroesplants`, `heroesplants`, `superheroplants`],
	category: `Miscellaneous`,
	run: async(client, message, args)=> {
		const row = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('bcarrot')
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
                    .setCustomId('helps')
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
                    .setCustomId('gshadow')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('wk')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const wk = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('sflare')
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
                    .setCustomId('wknight')
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
                    .setCustomId('czilla')
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
                    .setCustomId('sdow')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('gk')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const gk = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('ctron')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('nc')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const nc = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('gknuckles')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('ro')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const ro = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('ncap')
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
                    .setCustomId('rose')
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
                    .setCustomId('ccomb')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('help')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
					const gsh = new ActionRowBuilder()
			.addComponents(
				new ButtonBuilder()
                    .setCustomId('gsh')
                    .setLabel('Help GS')
                    .setStyle(ButtonStyle.Success)
										.setEmoji('<a:GreenShadow:1100168011270328390>')
							);
		const sfh = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
			.setCustomId('sfh')
			.setLabel('SF Commands')
			.setEmoji('<:SFSip:1018934631531282532>')
			.setStyle(ButtonStyle.Danger)
		)
			const wkh = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
			.setCustomId('wkh')
			.setLabel('WK Commands')
			.setEmoji('<:wallnut:1100168145186062426>')
			.setStyle(ButtonStyle.Primary)
		)
			const czh = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
			.setCustomId('czh')
			.setLabel('CZ Commands')
			.setEmoji('<:LetsFrickenChomp:1100168574829596824>')
			.setStyle(ButtonStyle.Success)
		)
			const sph = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
			.setCustomId('sph')
			.setLabel('SP Commands')
			.setEmoji('<:spudgun:1100168090110656582>')
			.setStyle(ButtonStyle.Danger)
		)
			const cth = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
			.setCustomId('cth')
			.setLabel('CT Commands')
			.setEmoji('<:Citron_Pog:1100168420743450654>')
			.setStyle(ButtonStyle.Primary)
		)
		const gkh = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
			.setCustomId('gkh')
			.setLabel('GK Commands')
			.setEmoji('<:FUCKLES:1100168498363240518>')
			.setStyle(ButtonStyle.Success)
		)
		const nch = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
			.setCustomId('nch')
			.setLabel('NC Commands')
			.setEmoji('<:NCShrug:831993812788051978>')
			.setStyle(ButtonStyle.Primary)
		)
		const roh = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
			.setCustomId('roh')
			.setLabel('RO Commands')
			.setEmoji('<:DeadInside:1100168228027760800>')
			.setStyle(ButtonStyle.Primary)
		)
		const cch = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
			.setCustomId('cch')
			.setLabel('CC Commands')
			.setEmoji('<a:aCombustible:1100168807391166525>')
			.setStyle(ButtonStyle.Primary)
		)
		const bch = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
			.setCustomId('bch')
			.setLabel('BC Commands')
			.setEmoji('<:BetaJerratina:908525918174199900>')
			.setStyle(ButtonStyle.Primary)
		)
		let sheroes = new EmbedBuilder()
		.setTitle("Plant Heroes")
		.setDescription("The plant heroes in plants vs zombies heroes are \n<@1043528908148052089> greenshadow \n<@1043528908148052089> solarflare \n<@1043528908148052089> wallknight \n<@1043528908148052089> chompzilla \n<@1043528908148052089> spudow \n<@1043528908148052089> citron \n<@1043528908148052089> grassknuckles \n<@1043528908148052089> nightcap \n<@1043528908148052089> rose \n<@1043528908148052089> captaincombustible \n<@1043528908148052089> betacarrotina")
		.setFooter({text: "To find out more info about the plant heroes and their superpowers please use the commands listed above or click on the buttons below ⏬!"})
			.setColor("Random")
			
		.setImage("https://media.discordapp.net/attachments/1044626284346605588/1191030138687721602/heroes.jpg?ex=65a3f441&is=65917f41&hm=8adf90085c138c156815aa86&=&format=webp")
				let gshadow = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/pvzcc/images/2/26/GreenShadowBYL.png/revision/latest?cb=20200704033327")
		.setTitle("Green Shadow | <:MegaGrow:1062501412992458802><:Smarty:1062502890448638022>")
		.setDescription("**- Pea Hero  -**")
		.setColor("Random")
		
		.addFields({name: "Superpowers",
							 	value: "Big Chill <:Smarty:1062502890448638022>\n <:IceCube:1008531889906253937>__Freeze__ a Zombie. \n Draw a card. \n Whirlwind <:Smarty:1062502890448638022> \n __Bounce__ a random Zombie. \n Embiggen <:MegaGrow:1062501412992458802> \n A Plant gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184>. \n Precision Blast <:MegaGrow:1062501412992458802><:Smarty:1062502890448638022> \n Attack for 5 damage in the middle lane."},
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Hero**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Little known fact: When she takes off the cape and mask, she goes by the name Penelopea."
							 })
		let gshelp = new EmbedBuilder()
		.setThumbnail("https://cdn.discordapp.com/attachments/1044626284346605588/1090602694206574692/IMG_1903.png")
	.setTitle("GS Commands")
	.setDescription("Here are my commands for Green Shadow(GS) \n<@1043528908148052089> 100%winrate \n<@1043528908148052089> abeans \n<@1043528908148052089> budgetgs \n<@1043528908148052089> helpgs \n<@1043528908148052089> jbeans \n<@1043528908148052089> midshadow \n<@1043528908148052089> millie \n<@1043528908148052089> peatempo \n<@1043528908148052089> randomgs \n<@1043528908148052089> savagemayflower \n<@1043528908148052089> techbeans \n<@1043528908148052089> yuletide")
		.setColor("Random")

		let sflare = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/p__/images/5/57/SolarFlareTransparent.png/revision/latest?cb=20190624185221&path-prefix=protagonist")
		.setTitle("Solar Flare | <:Kabloom:1062502137826910268><:Solar:1062502678384607262>")
		.setDescription("**- Flower Hero  -**")
		.setColor("Random")
		
		.addFields({name: "Superpowers",
							 	value: "Weed Whack <:Solar:1062502678384607262> \n A Zombie gets -2<:Strength:1062501774612779039>/-2<:Health:1062515540712751184>. \n More Spore <:Kabloom:1062502137826910268> \n Make two 1<:Strength:1062501774612779039>/1<:Health:1062515540712751184> Button Mushrooms in random lanes. \n Scorched Earth <:Solar:1062502678384607262> \n All Zombies on the Ground get -1<:Strength:1062501774612779039>/-1<:Health:1062515540712751184>. \n Sunburn <:Kabloom:1062502137826910268><:Solar:1062502678384607262> \n Do 2 damage. \n You get +1<:Sun:1062501177679413409> for the rest of the game."},
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Hero**"
							 },
							 {
								 name: "Flavor Text",
								 value: "When she's on fire, she's on FIRE. And so are the Zombies."
							 })
			let sfhelp = new EmbedBuilder()
.setThumbnail("https://static.wikia.nocookie.net/p__/images/5/57/SolarFlareTransparent.png/revision/latest?cb=20190624185221&path-prefix=protagonist")
	.setTitle("SF Commands")
			.setDescription("Here are my commands for Solar Flare(SF) \n<@1043528908148052089> 101 \n<@1043528908148052089> aggrosf \n<@1043528908148052089> budgetsf \n<@1043528908148052089> ejection \n<@1043528908148052089> healaggrosf \n<@1043528908148052089> healburn \n<@1043528908148052089> healmidflare \n<@1043528908148052089> helpsf \n<@1043528908148052089> psychopineclones \n<@1043528908148052089> rampclones \n<@1043528908148052089> ramp2seedling \n<@1043528908148052089> randomsf \n<@1043528908148052089> solstice \n<@1043528908148052089> trollerflare")
				.setColor("Random")

			let wknight = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/poohadventures/images/f/ff/WallHD.webp/revision/latest?cb=20210927051854")
	.setTitle("Wall-Knight | <:Guardian:1062501130501885973><:Solar:1062502678384607262>")
		.setDescription("**- Nut Hero  -**")
		.setColor("Random")
		
		.addFields({name: "Superpowers",
							 	value: "Geyser <:Solar:1062502678384607262> \n Heal your Hero and all Plants for 4. \n Nut Signal <:Guardian:1062501130501885973> \n Make a __Wall-Nut__. Draw a card. \n Wall-Nut 0<:Strength:1062501774612779039>/6<:Health:1062515540712751184>, __Team-Up__ \n Bubble Up <:Guardian:1062501130501885973> \n Move a Plant. It gets +4<:Health:1062515540712751184>. \n Uncrackable <:Guardian:1062501130501885973><:Solar:1062502678384607262>\n You Hero can't be hurt this turn. Draw a card. "},
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Hero**"
							 },
							 {
								 name: "Flavor Text",
								 value: "He's a great guy - he just sometimes has a hard time coming out of his shell."
							 })
			let wkhelp = new EmbedBuilder()
  .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/16/WallHD.png/revision/latest/scale-to-width-down/250?cb=20170414165945")
	.setTitle("WK Commands")
			.setDescription("Here are my commands for Wall Knight(WK) \n<@1043528908148052089> 3mid \n<@1043528908148052089> budgetwk \n<@1043528908148052089> cancerknight \n<@1043528908148052089> cycleknight \n<@1043528908148052089> funnyknight \n<@1043528908148052089> healmidwk \n<@1043528908148052089> helpwk \n<@1043528908148052089> midmirror \n<@1043528908148052089> nivola \n<@1043528908148052089> obnoxious \n<@1043528908148052089> packagewk \n<@1043528908148052089> rampburst \n<@1043528908148052089> randomwk \n<@1043528908148052089> shitknight")
		.setColor("Random")

				let czilla = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e5/C1lUqjPUcAEp4F_.png/revision/latest/scale-to-width-down/250?cb=20170109212110")
		.setTitle("Chompzilla | <:MegaGrow:1062501412992458802><:Solar:1062502678384607262>")
		.setDescription("**- Flytrap Hero  -**")
		.setColor("Random")
		
		.addFields({name: "Superpowers",
							 	value: "Holo-Flora <:MegaGrow:1062501412992458802> \n Draw two cards. \n Geyser <:Solar:1062502678384607262> \n Heal your Hero and all Plants for 4. \n Scorched Earth <:Solar:1062502678384607262> \n All Zombies on the Ground get -1<:Strength:1062501774612779039>/-1<:Health:1062515540712751184>. \n Devour <:MegaGrow:1062501412992458802><:Solar:1062502678384607262> \n Destroy a Zombie with the lowest Health. "},
							 {
								 name: "Set-Rarity",
								 value: "Premium - Hero"
							 },
							 {
								 name: "Flavor Text",
								 value: "She flosses after every meal and still, Zombie Breath is a real problem."
							 })
		let czhelp = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e5/C1lUqjPUcAEp4F_.png/revision/latest/scale-to-width-down/250?cb=20170109212110")
	.setTitle("CZ Commands")
		.setDescription("Here are my commands for Chompzilla(CZ) \n<@1043528908148052089> aggroramppeas \n<@1043528908148052089> aggrozilla \n<@1043528908148052089> amonguszilla \n<@1043528908148052089> apotk \n<@1043528908148052089> budgetcz \n<@1043528908148052089> healmidzilla \n<@1043528908148052089> helpcz \n<@1043528908148052089> hrr \n<@1043528908148052089> midred \n<@1043528908148052089> mopribus \n<@1043528908148052089> otkpepper \n<@1043528908148052089> randomcz \n<@1043528908148052089> ringzilla \n<@1043528908148052089> savagezilla \n<@1043528908148052089> stallzilla")
				.setColor("Random")

			let sdow = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/p__/images/4/49/HD_Tater_Toss.png/revision/latest?cb=20190624184934&path-prefix=protagonist")
		.setTitle("Spudow | <:Kabloom:1062502137826910268><:Guardian:1062501130501885973>")
	.setDescription("**- Root Hero  -**")
		.setColor("Random")
		
		.addFields({name: "Superpowers",
							 value: "Bubble Up <:Guardian:1062501130501885973>\n Move a Plant. It gets +4<:Health:1062515540712751184>. \nStorm Front <:Kabloom:1062502137826910268> \n All Plants get +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>. \nMeteor Strike <:Kabloom:1062502137826910268> \n Do 3 damage to a Zombie. \nTater Toss <:Kabloom:1062502137826910268><:Guardian:1062501130501885973> \n Make a 1<:Health:1062515540712751184> \n Hothead that has __Team-Up__. \n **When destroyed:** Do 6 damage to a Zombie here."},
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Hero**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Always tries to keep his head in tough situations. Always loses it."
							 })
		let sphelp = new EmbedBuilder()
    .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/ff/Spudow%27s_Winning_Pose.png/revision/latest/scale-to-width-down/250?cb=20161022004719")
		.setTitle("SP Commands")
		.setDescription("My commands for Spudow(SP) are \n<@1043528908148052089> bartin \n<@1043528908148052089> bartinroots \n<@1043528908148052089> budgetsp \n<@1043528908148052089> cyclesp \n<@1043528908148052089> magnoliamartin \n<@1043528908148052089> helpsp \n<@1043528908148052089> pranksterburn \n<@1043528908148052089> randomsp \n<@1043528908148052089> reliablemolekale \n<@1043528908148052089> tempodinoroots \n<@1043528908148052089> tokenaggro")
		.setColor("Random")

		let ctron = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/HD_Citron%27s_victory_pose.png/revision/latest?cb=20160616013747")
		.setTitle("Citron | <:Guardian:1062501130501885973><:Smarty:1062502890448638022>")
		.setDescription("**- Fruit Hero  -**")
		.setColor("Random")
		
		.addFields({name: "Superpowers",
							 	value: `Transmogrify <:Smarty:1062502890448638022> \n Transform a Zombie into a random Zombie that costs 1<:Brainz:1062503146745774183>. \n Nut Signal <:Guardian:1062501130501885973> \n Make a Wall-Nut. Draw a card. \n Wall-Nut
0<:Strength:1062501774612779039>/6<:Health:1062515540712751184>, __Team-Up__ \n Root Wall <:Guardian:1062501130501885973> \n A Plant gets +2<:Health:1062515540712751184> and can't be hurt this turn. \n Peel Shield <:Guardian:1062501130501885973><:Smarty:1062502890448638022> \n Plants can't be hurt this turn. \n Draw a card. `},
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Hero**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Wanted to be a poet, but couldn't find anything that rhymed with orange."
							 })
			let cthelp = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/HD_Citron%27s_victory_pose.png/revision/latest?cb=20160616013747")
			.setTitle("CT Commands")
			.setDescription("My commands for Citron(CT) are \n<@1043528908148052089> budgetct \n<@1043528908148052089> countertron \n<@1043528908148052089> cycletron \n <@1043528908148052089> elusives \n<@1043528908148052089> goingnuts3 \n<@1043528908148052089> helpct \n<@1043528908148052089> joaburst \n<@1043528908148052089> memetron \n<@1043528908148052089> randomct \n<@1043528908148052089> startron")
				.setColor("Random")

			let gknuckles = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/p__/images/4/41/HD_Grass_Knuckles.png/revision/latest?cb=20200105024802&path-prefix=protagonist")
		.setTitle("Grass Knuckles | <:MegaGrow:1062501412992458802><:Guardian:1062501130501885973>")
	.setDescription("**- Leafy Hero  -**")
	.setColor("Random")
	
	.addFields({name: "Superpowers",
						 	value: "Holo-Flora <:MegaGrow:1062501412992458802> \n Draw two cards. \nTime To Shine <:MegaGrow:1062501412992458802> \n A Plant does a Bonus Attack. \nRoot Wall <:Guardian:1062501130501885973> \n A Plant gets +2<:Health:1062515540712751184> and can't be hurt this turn. \nPower Pummel <:MegaGrow:1062501412992458802><:Guardian:1062501130501885973> \n Attack for 2 damage in each Ground lane."},
						 {
							 name: "Set-Rarity",
							 value: "**Premium - Hero**"
						 },
						 {
							 name: "Flavor Text",
							 value: "He's the best at what he does... and what he does is punching!"
						 })
		let gkhelp = new EmbedBuilder()
.setThumbnail("https://static.wikia.nocookie.net/p__/images/4/41/HD_Grass_Knuckles.png/revision/latest?cb=20200105024802&path-prefix=protagonist")
		.setTitle("GK Commands")
		.setDescription("My commands for Grass Knuckles(GK) are \n<@1043528908148052089> 3int \n<@1043528908148052089> 3-pea \n<@1043528908148052089> budgetgk \n<@1043528908148052089> bullseyeaggro \n<@1043528908148052089> coffeerings \n<@1043528908148052089> grapeotk \n<@1043528908148052089> helpgk \n<@1043528908148052089> limbo \n<@1043528908148052089> r3d \n<@1043528908148052089> randomgk \n<@1043528908148052089> savagecucumber \n<@1043528908148052089> savagetempo \n<@1043528908148052089> sweetvm \n<@1043528908148052089> tryknuckles")
		.setColor("Random") 

		let ncap = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/32/HD_Night_Cap%27s_victory_pose.png/revision/latest?cb=20160507044044")
		.setTitle("Nightcap | <:Kabloom:1062502137826910268><:Smarty:1062502890448638022>")
		.setDescription("**- Mushroom Hero  -**")
		.setColor("Random")
		
		.addFields({name: "Superpowers",
							 	value: "More Spore <:Kabloom:1062502137826910268> \n Make two 1<:Strength:1062501774612779039>/1<:Health:1062515540712751184> Button Mushrooms in random lanes. \nWhirlwind <:Smarty:1062502890448638022> \n Bounce a random Zombie. \nStorm Front <:Kabloom:1062502137826910268> \n All Plants get +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>. \nMush-Boom <:Kabloom:1062502137826910268><:Smarty:1062502890448638022> \n Make a 1<:Strength:1062501774612779039>/1<:Health:1062515540712751184> Poison Mushroom with Anti-Hero 2. \n Do 2 damage to a Zombie there. "},
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Hero**"
							 },
							 {
								 name: "Flavor Text",
								 value: "He'a fun guy."
							 })
			let nchelp = new EmbedBuilder()
      .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/32/HD_Night_Cap%27s_victory_pose.png/revision/latest?cb=20160507044044")
			.setTitle("NC Commands")
			.setDescription("Here are my commands for NightCap(NC) \n<@1043528908148052089> brainclones \n<@1043528908148052089> budgetnc \n<@1043528908148052089> buffswarm \n<@1043528908148052089> cyburn \n<@1043528908148052089> cyggro \n<@1043528908148052089> evanshrooms \n<@1043528908148052089> gangstaparadise \n<@1043528908148052089> helpnc \n<@1043528908148052089> hyperswarm \n<@1043528908148052089> joashrooms \n<@1043528908148052089> midcap \n<@1043528908148052089> randomnc \n<@1043528908148052089> speeddemon")
				.setColor("Random")

			let rose = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/vsbattles/images/1/1f/RosePVZ.png/revision/latest?cb=20181016204100")
		.setTitle("Rose | <:Smarty:1062502890448638022><:Solar:1062502678384607262>")
		.setDescription("**- Flower Hero  -**")
		.setColor("Random")
		
		.addFields({name: "Superpowers",
							 value: "Transmogrify <:Smarty:1062502890448638022> \n Transform a Zombie into a random Zombie that costs 1<:Brainz:1062503146745774183>. \nBig Chill <:Smarty:1062502890448638022> \n <:IceCube:1008531889906253937>Freeze a Zombie. \n Draw a card. \nWeed Whack <:Solar:1062502678384607262> \n A Zombies gets -2<:Strength:1062501774612779039>/-2<:Health:1062515540712751184>. \nGoatify <:Smarty:1062502890448638022><:Solar:1062502678384607262> \n Transform a Zombie with the highest Strength into a Goat. \n Goat 1<:Strength:1062501774612779039>/1<:Health:1062515540712751184>, Gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184> when any Goat is hurt. "},
						{
								name: "Set-Rarity",
								value: "**Premium - Hero**"
							 },
							 {
								 name: "Flavor Text",
								 value: "Refuses to be nerfed."
							 })
	let rohelp = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/pvzcc/images/2/2f/RoseBYL.png/revision/latest?cb=20200707025517")
		.setTitle("RO Commands")
		.setDescription("Here are my commands for Rose(RO) \n<@1043528908148052089> budgetro \n<@1043528908148052089> combose \n<@1043528908148052089> frymidrose \n<@1043528908148052089> healmidrose \n<@1043528908148052089> helpro \n<@1043528908148052089> midrose \n<@1043528908148052089> oldmidrose \n<@1043528908148052089> rampmidrose \n<@1043528908148052089> randomro \n<@1043528908148052089> t3beans \n<@1043528908148052089> trysis \n<@1043528908148052089> violetmid")
		.setColor("Random")

			let ccomb = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/pvzcc/images/0/09/TRUEHD_Captain_Combustible.png/revision/latest?cb=20200729194212")
		.setTitle("Captain Combustible | <:Kabloom:1062502137826910268><:MegaGrow:1062501412992458802>")
		.setDescription("**- Tree Hero  -**")
		.setColor("Random")
		
		.addFields({name: "Superpowers",
							 	value: "Meteor Strike <:Kabloom:1062502137826910268> \n Do 3 damage to a Zombie. \nEmbiggen <:MegaGrow:1062501412992458802> \n A Plants gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184>. \nTime To Shine <:MegaGrow:1062501412992458802> \n A Plant does a Bonus Attack. \nBlazing Bark <:Kabloom:1062502137826910268><:MegaGrow:1062501412992458802> \n A Plant gets +4<:Strength:1062501774612779039>."},
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Hero**"
							 },
							 {
								 name: "Flavor Text",
								 value: `If you want to see him blow his top, try calling him "Stumpy". Go on. Try it.`
							 })
		let cchelp = new EmbedBuilder()
    .setThumbnail("https://static.wikia.nocookie.net/pvzcc/images/0/09/TRUEHD_Captain_Combustible.png/revision/latest?cb=20200729194212")
		.setTitle("CC Commands")
		.setDescription("My commands for Captain Combustible(CC) \n<@1043528908148052089> bempo \n<@1043528908148052089> budgetplantmop \n<@1043528908148052089> clownboss \n<@1043528908148052089> combased \n<@1043528908148052089> comboss \n<@1043528908148052089> gatlingtempo \n<@1043528908148052089> helpcc \n<@1043528908148052089> plantmop \n<@1043528908148052089> randomcc \n<@1043528908148052089> yrm")
		.setColor("Random")

		let bcarrot = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/p__/images/d/d2/Betacarrot.png/revision/latest?cb=20190624185039&path-prefix=protagonist")
		.setTitle("Beta-Carrotina | <:Guardian:1062501130501885973><:Smarty:1062502890448638022>")
		.setDescription("**- Root Hero  -**")
		.setColor("Random")
		
		.addFields({name: "Superpowers",
							 	value: "Ensign Uproot <:Guardian:1062501130501885973> \n **When played:** Move another Plant or Zombie. \nLieutenant Carrotron <:Smarty:1062502890448638022> \n **When played:** __Conjure__ a Root. \nLightspeed Seed <:Smarty:1062502890448638022> \n __Conjure__ two Tricks. \nGenetic Amplification <:Guardian:1062501130501885973><:Smarty:1062502890448638022> \n __Conjure__ a Plant that costs 2<:Sun:1062501177679413409>. It gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>, __Amphibious__, and __Team-Up__."},
							 {
								 name: "Set-Rarity",
								 value: "**Premium - Hero**"
							 },
							 {
								 name: "Flavor Text",
								 value: "As leader of the Plant-etary Guard, she's ready to root out Zombies wherever they crop up."
							 })
		let bchelp = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/p__/images/d/d2/Betacarrot.png/revision/latest?cb=20190624185039&path-prefix=protagonist")
	.setTitle("BC Commands")
			.setDescription("Here are my commands for Beta-Carrotina(BC) \n<@1043528908148052089> anti \n<@1043528908148052089> helpbc \n<@1043528908148052089> randombc \n<@1043528908148052089> shamcontrolbc")
		.setColor("Random")

		const m = await	message.channel.send({embeds: [sheroes], components: [row] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter})
		collector.on("collect", async i => {
			if(i.customId == 'gs'){
				await i.update({embeds: [gshadow], components: [gs, gsh]})
			}
			if(i.customId == 'helps'){
				await i.update({embeds: [sheroes], components: [row] } )
			}
			if(i.customId == 'gsh'){
				await i.reply({embeds: [gshelp], ephemeral: true})
			}
			if(i.customId == 'sf'){
				await i.update({embeds: [sflare], components: [sf, sfh]})
			}
					if(i.customId == 'gshadow'){
				await i.update({embeds: [gshadow], components: [gs, gsh]})
			}
			if(i.customId == 'sflare'){
				await i.update({embeds: [sflare], components: [sf, sfh]})
			}
			if(i.customId == 'wk'){
				await i.update({embeds: [wknight], components: [wk, wkh]})
			}
			if(i.customId == 'sfh'){
				await i.reply({embeds: [sfhelp], ephemeral: true})
			}
			if(i.customId == 'wkh'){
				await i.reply({embeds: [wkhelp], ephemeral: true})
			}
					if(i.customId == 'wknight'){
				await i.update({embeds: [wknight], components: [wk, wkh]})
			}
			if(i.customId == 'cz'){
				await i.update({embeds: [czilla], components: [cz, czh]})
			}
			if(i.customId == 'czh'){
				await i.reply({embeds: [czhelp], ephemeral: true})
			}
			if(i.customId == 'sp'){
				await i.update({embeds: [sdow], components: [sp, sph]})
			}
						if(i.customId == 'czilla'){
				await i.update({embeds: [czilla], components: [cz, czh]})
			}
			if(i.customId == 'sph'){
				await i.reply({embeds: [sphelp], ephemeral: true})
			}
			if(i.customId == 'ct'){
				await i.update({embeds: [ctron], components: [ct, cth]})
			}
				if(i.customId == 'sdow'){
				await i.update({embeds: [sdow], components: [sp, sph]})
			}
			if(i.customId == 'cth'){
				await i.reply({embeds: [cthelp], ephemeral: true})
			}
			if(i.customId == 'gk'){
				await i.update({embeds: [gknuckles], components: [gk, gkh]})
			}
				if(i.customId == 'ctron'){
				await i.update({embeds: [ctron], components: [ct, cth]})
			}
			if(i.customId == 'gkh'){
				await i.reply({embeds: [gkhelp], ephemeral: true})
			}
						if(i.customId == 'gknuckles'){
				await i.update({embeds: [gknuckles], components: [gk, gkh]})
			}
			if(i.customId == 'nc'){
				await i.update({embeds: [ncap], components: [nc, nch]})
			}
			if(i.customId == 'nch'){
				await i.reply({embeds: [nchelp], ephemeral: true})
			}
			if(i.customId == 'ro'){
				await i.update({embeds: [rose], components: [ro, roh]})
			}
					if(i.customId == 'ncap'){
				await i.update({embeds: [ncap], components: [nc, nch]})
			}
			if(i.customId == 'roh'){
				await i.reply({embeds: [rohelp], ephemeral: true})
			}
			if(i.customId == 'cc'){
				await i.update({embeds: [ccomb], components: [cc, cch]})
			}
			if(i.customId == 'rose'){
				await i.update({embeds: [rose], components: [ro, roh]})
			}
			if(i.customId == 'cch'){
				await i.reply({embeds: [cchelp], ephemeral: true})
			}
				if(i.customId == 'ccomb'){
				await i.update({embeds: [ccomb], components: [cc, cch]})
			}
			if(i.customId == 'bc'){
				await i.update({embeds: [bcarrot], components: [bc, bch]})
			}
			if(i.customId == 'bch'){
				await i.reply({embeds: [bchelp], ephemeral: true})
			}
				if(i.customId == 'bcarrot'){
				await i.update({embeds: [bcarrot], components: [bc, bch]})
			}
				if(i.customId == 'help'){
				await i.update({embeds: [sheroes], components: [row] } )
			}
		})
	}
}
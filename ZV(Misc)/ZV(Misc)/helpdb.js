const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
module.exports = {
	name: `helpdb`,
	aliases: [`dbhelp`, `dbcommands`, `dbdecks`, `decksdb`, `database`, `db`, `databasedecks`, `databasehelp`, `helpdatabase`],
	category: `Miscellaneous`,
		run: async(client, message, args) =>{ 
			const row = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('ykmartin')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('wr')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const wr = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('helpdb')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('one')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
	const one = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('wrate')
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
                    .setCustomId('oneone')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('agrp')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				//aggroramppeas
				const agrp = new ActionRowBuilder()
				.addComponents(
								new ButtonBuilder()
						.setCustomId('agraves')
						.setLabel('🔙')
						.setStyle(ButtonStyle.Primary),
					new ButtonBuilder()
						.setCustomId('an')
						.setLabel('⏭')
						.setStyle(ButtonStyle.Primary)
								);
							//anti
							const an = new ActionRowBuilder()
							.addComponents(
											new ButtonBuilder()
									.setCustomId('agrpeas')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('ap')
									.setLabel('⏭')
									.setStyle(ButtonStyle.Primary)
											);
							//apotk
							const ap = new ActionRowBuilder()
							.addComponents(
											new ButtonBuilder()
									.setCustomId('anti')
									.setLabel('🔙')
									.setStyle(ButtonStyle.Primary),
								new ButtonBuilder()
									.setCustomId('br')
									.setLabel('⏭')
									.setStyle(ButtonStyle.Primary)
											);
								//Bartinroots
								const br = new ActionRowBuilder()
								.addComponents(
												new ButtonBuilder()
										.setCustomId('apotk')
										.setLabel('🔙')
										.setStyle(ButtonStyle.Primary),
									new ButtonBuilder()
										.setCustomId('bb')
										.setLabel('⏭')
										.setStyle(ButtonStyle.Primary)
												);
								//Bbeans
								const bb = new ActionRowBuilder()
								.addComponents(
												new ButtonBuilder()
										.setCustomId('broots')
										.setLabel('🔙')
										.setStyle(ButtonStyle.Primary),
									new ButtonBuilder()
										.setCustomId('be')
										.setLabel('⏭')
										.setStyle(ButtonStyle.Primary)
												);
								//Bempo
								const be = new ActionRowBuilder()
								.addComponents(
												new ButtonBuilder()
										.setCustomId('bbeans')
										.setLabel('🔙')
										.setStyle(ButtonStyle.Primary),
									new ButtonBuilder()
										.setCustomId('bbolt')
										.setLabel('⏭')
										.setStyle(ButtonStyle.Primary)
												);
								//Boltbolt
								const bbolt = new ActionRowBuilder()
								.addComponents(
												new ButtonBuilder()
										.setCustomId('bempo')
										.setLabel('🔙')
										.setStyle(ButtonStyle.Primary),
									new ButtonBuilder()
										.setCustomId('bo')
										.setLabel('⏭')
										.setStyle(ButtonStyle.Primary)
												);
						//Boss
						const bo = new ActionRowBuilder()
								.addComponents(
												new ButtonBuilder()
										.setCustomId('boltbolt')
										.setLabel('🔙')
										.setStyle(ButtonStyle.Primary),
									new ButtonBuilder()
										.setCustomId('bs')
										.setLabel('⏭')
										.setStyle(ButtonStyle.Primary)
												);
					//Bsmash
					const bs = new ActionRowBuilder()
								.addComponents(
												new ButtonBuilder()
										.setCustomId('boss')
										.setLabel('🔙')
										.setStyle(ButtonStyle.Primary),
									new ButtonBuilder()
										.setCustomId('bust')
										.setLabel('⏭')
										.setStyle(ButtonStyle.Primary)
												);
					//Bustbolt
					const bust = new ActionRowBuilder()
					.addComponents(
									new ButtonBuilder()
							.setCustomId('bsmash')
							.setLabel('🔙')
							.setStyle(ButtonStyle.Primary),
						new ButtonBuilder()
							.setCustomId('ck')
							.setLabel('⏭')
							.setStyle(ButtonStyle.Primary)
									);
					//Cancerknight
					const ck = new ActionRowBuilder()
					.addComponents(
									new ButtonBuilder()
							.setCustomId('bustbolt')
							.setLabel('🔙')
							.setStyle(ButtonStyle.Primary),
						new ButtonBuilder()
							.setCustomId('ct')
							.setLabel('⏭')
							.setStyle(ButtonStyle.Primary)
									);
					//Chemotherapy
					const ct = new ActionRowBuilder()
					.addComponents(
									new ButtonBuilder()
							.setCustomId('cknight')
							.setLabel('🔙')
							.setStyle(ButtonStyle.Primary),
						new ButtonBuilder()
							.setCustomId('cr')
							.setLabel('⏭')
							.setStyle(ButtonStyle.Primary)
									);
					//Conjurerates
					const cr = new ActionRowBuilder()
					.addComponents(
									new ButtonBuilder()
							.setCustomId('chemo')
							.setLabel('🔙')
							.setStyle(ButtonStyle.Primary),
						new ButtonBuilder()
							.setCustomId('cy')
							.setLabel('⏭')
							.setStyle(ButtonStyle.Primary)
									);
					//Cyburn
					const cy = new ActionRowBuilder()
					.addComponents(
									new ButtonBuilder()
							.setCustomId('crates')
							.setLabel('🔙')
							.setStyle(ButtonStyle.Primary),
						new ButtonBuilder()
							.setCustomId('cyclek')
							.setLabel('⏭')
							.setStyle(ButtonStyle.Primary)
									);
					//Cycleknight
					const cyclek = new ActionRowBuilder()
					.addComponents(
									new ButtonBuilder()
							.setCustomId('cyburn')
							.setLabel('🔙')
							.setStyle(ButtonStyle.Primary),
						new ButtonBuilder()
							.setCustomId('csp')
							.setLabel('⏭')
							.setStyle(ButtonStyle.Primary)
									);
					//Cyclesp
					const csp = new ActionRowBuilder()
					.addComponents(
									new ButtonBuilder()
							.setCustomId('cycleknight')
							.setLabel('🔙')
							.setStyle(ButtonStyle.Primary),
						new ButtonBuilder()
							.setCustomId('dk')
							.setLabel('⏭')
							.setStyle(ButtonStyle.Primary)
									);
					//Devinknuckles
					const dk = new ActionRowBuilder()
					.addComponents(
									new ButtonBuilder()
							.setCustomId('cyclesp')
							.setLabel('🔙')
							.setStyle(ButtonStyle.Primary),
						new ButtonBuilder()
							.setCustomId('dm')
							.setLabel('⏭')
							.setStyle(ButtonStyle.Primary)
									);
					//Dozzamech
					const dm = new ActionRowBuilder()
					.addComponents(
									new ButtonBuilder()
							.setCustomId('dknuckles')
							.setLabel('🔙')
							.setStyle(ButtonStyle.Primary),
						new ButtonBuilder()
							.setCustomId('ej')
							.setLabel('⏭')
							.setStyle(ButtonStyle.Primary)
									);
						//ejection
						const ej = new ActionRowBuilder()
					.addComponents(
									new ButtonBuilder()
							.setCustomId('dmech')
							.setLabel('🔙')
							.setStyle(ButtonStyle.Primary),
						new ButtonBuilder()
							.setCustomId('fk')
							.setLabel('⏭')
							.setStyle(ButtonStyle.Primary)
									);
					//funnyknight
						//ejection
						const fk = new ActionRowBuilder()
					.addComponents(
									new ButtonBuilder()
							.setCustomId('eject')
							.setLabel('🔙')
							.setStyle(ButtonStyle.Primary),
						new ButtonBuilder()
							.setCustomId('hmr')
							.setLabel('⏭')
							.setStyle(ButtonStyle.Primary)
									);
							//healmidrose
									const hmr = new ActionRowBuilder()
					.addComponents(
									new ButtonBuilder()
							.setCustomId('fknight')
							.setLabel('🔙')
							.setStyle(ButtonStyle.Primary),
						new ButtonBuilder()
							.setCustomId('hb')
							.setLabel('⏭')
							.setStyle(ButtonStyle.Primary)
									);
					//hibird
					const hb = new ActionRowBuilder()
					.addComponents(
									new ButtonBuilder()
							.setCustomId('hmrose')
							.setLabel('🔙')
							.setStyle(ButtonStyle.Primary),
						new ButtonBuilder()
							.setCustomId('igbc')
							.setLabel('⏭')
							.setStyle(ButtonStyle.Primary)
									);
					//igma blob chum
					const igbc = new ActionRowBuilder()
					.addComponents(
									new ButtonBuilder()
							.setCustomId('hbird')
							.setLabel('🔙')
							.setStyle(ButtonStyle.Primary),
						new ButtonBuilder()
							.setCustomId('ifpc')
							.setLabel('⏭')
							.setStyle(ButtonStyle.Primary)
									);
						//ifplankcontrol
						const ifpc = new ActionRowBuilder()
					.addComponents(
									new ButtonBuilder()
							.setCustomId('igbchum')
							.setLabel('🔙')
							.setStyle(ButtonStyle.Primary),
						new ButtonBuilder()
							.setCustomId('ig')
							.setLabel('⏭')
							.setStyle(ButtonStyle.Primary)
									);
						//igmaticia
						const ig = new ActionRowBuilder()
					.addComponents(
									new ButtonBuilder()
							.setCustomId('ifpcontrol')
							.setLabel('🔙')
							.setStyle(ButtonStyle.Primary),
						new ButtonBuilder()
							.setCustomId('kc')
							.setLabel('⏭')
							.setStyle(ButtonStyle.Primary)
									);
					//kendycrush
					const kc = new ActionRowBuilder()
					.addComponents(
									new ButtonBuilder()
							.setCustomId('igma')
							.setLabel('🔙')
							.setStyle(ButtonStyle.Primary),
						new ButtonBuilder()
							.setCustomId('mi')
							.setLabel('⏭')
							.setStyle(ButtonStyle.Primary)
									);
						//mill
						const mi = new ActionRowBuilder()
					.addComponents(
									new ButtonBuilder()
							.setCustomId('kcrush')
							.setLabel('🔙')
							.setStyle(ButtonStyle.Primary),
						new ButtonBuilder()
							.setCustomId('og')
							.setLabel('⏭')
							.setStyle(ButtonStyle.Primary)
									);
						//oobltmidgargs
						const og = new ActionRowBuilder()
					.addComponents(
									new ButtonBuilder()
							.setCustomId('mill')
							.setLabel('🔙')
							.setStyle(ButtonStyle.Primary),
						new ButtonBuilder()
							.setCustomId('otk')
							.setLabel('⏭')
							.setStyle(ButtonStyle.Primary)
									);
						//otktrickster
						const otk = new ActionRowBuilder()
						.addComponents(
										new ButtonBuilder()
								.setCustomId('ogargs')
								.setLabel('🔙')
								.setStyle(ButtonStyle.Primary),
							new ButtonBuilder()
								.setCustomId('po')
								.setLabel('⏭')
								.setStyle(ButtonStyle.Primary)
										);
					//pirataout
					const po = new ActionRowBuilder()
						.addComponents(
										new ButtonBuilder()
								.setCustomId('otkster')
								.setLabel('🔙')
								.setStyle(ButtonStyle.Primary),
							new ButtonBuilder()
								.setCustomId('pog')
								.setLabel('⏭')
								.setStyle(ButtonStyle.Primary)
										);
							//poggerrazzi
							const pog = new ActionRowBuilder()
						.addComponents(
										new ButtonBuilder()
								.setCustomId('pout')
								.setLabel('🔙')
								.setStyle(ButtonStyle.Primary),
							new ButtonBuilder()
								.setCustomId('pe')
								.setLabel('⏭')
								.setStyle(ButtonStyle.Primary)
										);
						//pepega
						const pe = new ActionRowBuilder()
						.addComponents(
										new ButtonBuilder()
								.setCustomId('poggerazzi')
								.setLabel('🔙')
								.setStyle(ButtonStyle.Primary),
							new ButtonBuilder()
								.setCustomId('rmk')
								.setLabel('⏭')
								.setStyle(ButtonStyle.Primary)
										);
							//reliablemolekale
							const rmk = new ActionRowBuilder()
						.addComponents(
										new ButtonBuilder()
								.setCustomId('pepega')
								.setLabel('🔙')
								.setStyle(ButtonStyle.Primary),
							new ButtonBuilder()
								.setCustomId('se')
								.setLabel('⏭')
								.setStyle(ButtonStyle.Primary)
										);
							//seacret
							const se = new ActionRowBuilder()
						.addComponents(
										new ButtonBuilder()
								.setCustomId('rmkale')
								.setLabel('🔙')
								.setStyle(ButtonStyle.Primary),
							new ButtonBuilder()
								.setCustomId('sk')
								.setLabel('⏭')
								.setStyle(ButtonStyle.Primary)
										);
						//shitknight
						const sk = new ActionRowBuilder()
						.addComponents(
										new ButtonBuilder()
								.setCustomId('seacret')
								.setLabel('🔙')
								.setStyle(ButtonStyle.Primary),
							new ButtonBuilder()
								.setCustomId('ss')
								.setLabel('⏭')
								.setStyle(ButtonStyle.Primary)
										);
						//spacestars
						const ss = new ActionRowBuilder()
						.addComponents(
										new ButtonBuilder()
								.setCustomId('sknight')
								.setLabel('🔙')
								.setStyle(ButtonStyle.Primary),
							new ButtonBuilder()
								.setCustomId('sb')
								.setLabel('⏭')
								.setStyle(ButtonStyle.Primary)
										);
						//sunbandits
						const sb = new ActionRowBuilder()
						.addComponents(
										new ButtonBuilder()
								.setCustomId('sstars')
								.setLabel('🔙')
								.setStyle(ButtonStyle.Primary),
							new ButtonBuilder()
								.setCustomId('sd')
								.setLabel('⏭')
								.setStyle(ButtonStyle.Primary)
										);
						//speeddemon
						const sd = new ActionRowBuilder()
						.addComponents(
										new ButtonBuilder()
								.setCustomId('sband')
								.setLabel('🔙')
								.setStyle(ButtonStyle.Primary),
							new ButtonBuilder()
								.setCustomId('ti')
								.setLabel('⏭')
								.setStyle(ButtonStyle.Primary)
										);
						//telimps
						const ti = new ActionRowBuilder()
						.addComponents(
										new ButtonBuilder()
								.setCustomId('sdemon')
								.setLabel('🔙')
								.setStyle(ButtonStyle.Primary),
							new ButtonBuilder()
								.setCustomId('ts')
								.setLabel('⏭')
								.setStyle(ButtonStyle.Primary)
										);
						//trickstache
						const ts = new ActionRowBuilder()
						.addComponents(
										new ButtonBuilder()
								.setCustomId('timps')
								.setLabel('🔙')
								.setStyle(ButtonStyle.Primary),
							new ButtonBuilder()
								.setCustomId('wm')
								.setLabel('⏭')
								.setStyle(ButtonStyle.Primary)
										);
						//wrathmartin
						const wm = new ActionRowBuilder()
						.addComponents(
										new ButtonBuilder()
								.setCustomId('tstache')
								.setLabel('🔙')
								.setStyle(ButtonStyle.Primary),
							new ButtonBuilder()
								.setCustomId('yk')
								.setLabel('⏭')
								.setStyle(ButtonStyle.Primary)
										);
						//ykm
						const yk= new ActionRowBuilder()
						.addComponents(
										new ButtonBuilder()
								.setCustomId('wmartin')
								.setLabel('🔙')
								.setStyle(ButtonStyle.Primary),
							new ButtonBuilder()
								.setCustomId('help')
								.setLabel('⏭')
								.setStyle(ButtonStyle.Primary)
										);
let decks = [
	"100%winrate",
	"101",
	"agraves",
	"aggroramppeas",
	"anti",
	"apotk",
	"bartinroots",
	"bbeans",
	"bempo",
	"boltbolt",
	"boss",
	"bsmash",
	"bustbolt",
	"cancerknight",
	"chemotherapy",
	"conjurerates",
	"cyburn",
	"cycleknight",
	"cyclesp",
	"devinknuckles",
	"dozzamech",
	"ejection",
	"funnyknight",
	"healmidrose",
	"hibird",
	"igmablobchum",
	"ifplankcontrol",
	"igmaticia",
	"kendycrush",
	"mill",
	"oobltmidgargs",
	"otktrickster",
	"pirataout",
	"poggerrazzi",
	"pepega",
	"reliablemolekale",
	"seacret",
	"shitknight",
	"spacestars",
	"sunbandits",
	"speeddemon",
	"telimps",
	"trickstache",
	"wrathmartin",
	"ykm"
]
let toBuildString = "";
for (let i = 0; i < decks.length; i++) {
	let deck = decks[i];
	toBuildString += `\n<@1043528908148052089> **${deck}**`;
}
			let db = new EmbedBuilder()
			.setTitle("Help DB")
			.setDescription(`A collection of database commands ${toBuildString}`)
				.setColor("Random")
				.setFooter({text: "To view the collection of database decks please use the buttons below or use the commands listed above"})

//100 Winrate
let wrate= new EmbedBuilder()
	.setTitle("100% Winrate")
	.setDescription("100% winrate is a very interesting deck that tries to get as much beanstalk as possible outvaluing your opponent making sure you keep the 100% winrate.")
	.setFooter({text: "Created By Justini12"})
			.addFields({name: "Deck Cost", value: "Cost: 60,350 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
.setImage("https://media.discordapp.net/attachments/1044626284346605588/1052062278750568538/100.png?width=527&height=499")
	
	//101
	let oneone = new EmbedBuilder()
	.setTitle("101.1")
	.setDescription("Cycle Flare built in.")
	.setFooter({text: "Created By Tryhard"})
		.setColor("Random")
		.setImage("https://media.discordapp.net/attachments/1044626284346605588/1160923366736277576/IMG_5205.png?ex=65366d23&is=6523f823&hm=e444f9872c520ba2b97e099f&=&width=547&height=580")
					.addFields({name: "Deck Cost", value: "Cost: 58,400 Sparks <:spar:1057791557387956274>"})
	
	//A-Graves
	let agraves = new EmbedBuilder()
	.setTitle("A-Graves")
	.setDescription("A-Graves is an aggro gravestone deck that tries to outrace the opponent. Whether that works or not strictly depends on if your opponent heals but these are questions we don't think about.")
	.setFooter({text: "By TryHard"})
			.addFields({name: "Deck Cost", value: "Cost:  44,650 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
		.setImage("https://media.discordapp.net/attachments/1044626284346605588/1160926756153335828/IMG_5207.jpg?ex=6536704b&is=6523fb4b&hm=c442c397027575150d07ae10&=&width=526&height=580")
	
	//Anti
	let anti = new EmbedBuilder()
	.setTitle("Anti")
	.setDescription("Anti Gravestones + Anti Tricks + Anti Gargs. If that's the case what do you lose to??")
	.setFooter({text: "By TryHard"})
			.addFields({name: "Deck Cost", value: "Cost: 63,550 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
		.setImage("https://media.discordapp.net/attachments/1044626284346605588/1160928324256808960/IMG_5208.jpg?ex=653671c1&is=6523fcc1&hm=ecd5de1e84e14d50a5882a68&=&width=534&height=580")
	
	//aggroramppeas
	let agrampea = new EmbedBuilder()
	.setTitle("Aggro Ramp Peas")
	.setDescription("An incredibly explosive Chompzilla deck, and now with an ability to put out even more damage to its name! Start off with a torchwood to combo into the split / black eyed pea, or a clique pea / pumpking as a distraction to input your twin sunflower in. From there, you should be able to focus on as much combos and damage as possible, focusing solely on constant pressure and making your opponent wonder what kind of hash you are smoking to completely overwhelm your opponents. The podfather and banana peel is for buffing up your minions and clearing out lanes while making sure the bananasarus grows and you don't run out of cards. Finally, when all is said and done, a gatling pea, plant food, or brex should finish off the job.")
	.setFooter({text: "Created By mono#1492| Inspired by FryEmUp || Suggested On 01/18/23"})
			.addFields({name: "Deck Cost", value: "Cost:  54,100 parks <:spar:1057791557387956274>"})
		.setColor("Random")
.setImage("https://media.discordapp.net/attachments/1060317261690322994/1195138063685406761/IMG_4412.png?ex=65ce958e&is=65bc208e&hm=7999a21ae988d689144ea39bec2bbb4f2fe7a575450c4e54da6d22b04a065c55&=&format=webp&quality=lossless&width=528&height=570")
	//Apotk
	let apotk = new EmbedBuilder()
	.setTitle("Apotato OTK")
	.setDescription("Apotato OTK is a strategy centred around being able to reach Apotatosaurus and curve it into Expresso Fiesta for an effective way to deal over 18 damage in a single turn. Ketchup, Lil’ Buddy, and Pepper MD will secure the early game, create counter-tempo, and keep your health up for later turns.")
	.setFooter({text: "Created by Salt"})
			.addFields({name: "Deck Cost", value: "Cost: 60,550 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")		
		.setImage("https://media.discordapp.net/attachments/1044626284346605588/1183515298956050624/IMG_7739.jpg?ex=65889d83&is=65762883&hm=d856de0783fa936b0e9ca1fc&=&format=webp&width=579&height=568")
	
	//Bartinroots
	let broots = new EmbedBuilder()
	.setTitle("Bartin Roots")
	.setDescription("An upgraded version of <@1043528908148052089> bartin that runs roots and three nut with roots like veloci-Radish Hunter which is very good with both starch and threenut there are plenty of other cards in this deck that will benfit from three nut and starchlord whether it be roots or just poppies with 3 nut making a bunch of cards with three or more attack.")
	.setFooter({text: "By Rcch"})
			.addFields({name: "Deck Cost", value: "Cost: 59,750 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
.setImage("https://media.discordapp.net/attachments/780141103558295592/1045084475308134460/cachedImage.png?width=645&height=604")
	
	//Bbeans
	let bbeans = new EmbedBuilder()
		.setTitle("BBeans")
		.setDescription("This deck is based around the combos of half banana and it's buffing abilities. This deck lightens up on the bean synergy in order to take advantage of the amazing stats that Half Banana can grant. Overstats can be available as early as turn 2 and you’re able to get more value out of cards like B-Rex and Banana Peel. Jelly Bean and Brainana can then securely finish games with the amazing tempo lead that you’ll have and brainana + banana split can counter graveboy. Plus what more do you need in this life besides bananas and beans!")
		.addFields({name: "Deck Cost", value: "Cost: 67,300 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
		.setFooter({text: "Created By: RCCH"})
		.setImage("https://media.discordapp.net/attachments/1154031876407832678/1154031876818878474/IMG_4853.png?width=452&height=501")
		
		//Bempo
		let bempo = new EmbedBuilder()
		.setTitle("Bempo")
		.setDescription("Tempo and Bananas what more do you need in this life?")
		.setFooter({text: "Created by Sushi | Optimized by RCCH"})
				.addFields({name: "Deck Cost", value: "Cost: 54,300 Sparks <:spar:1057791557387956274>"})
			.setColor("Random")
			.setImage("https://media.discordapp.net/attachments/1153862977540329532/1153898607423016990/IMG_7137.png?width=510&height=501")
		
		//Boltbolt
		let boltbolt = new EmbedBuilder()
		.setTitle("Bolt Bolt")
		.setDescription("The Real Magic Is When You Have Dealt With Your Opponents Board And You Continue To Hoard Tricks Before You Unleash A Devastating Combo. The More Teachers On The Board The More Powerful. The Name Comes From The Ability To Draw One Of The 3 Lightning Bolts In The Game From The 4x Thinking Caps.")
		.setFooter({text: "Created By Ken Martin Modified By TryHard"})
				.addFields({name: "Deck Cost", value: "Cost:  70,000 Sparks <:spar:1057791557387956274>"})
			.setColor("Random")
			.setImage("https://media.discordapp.net/attachments/1044626284346605588/1160933596777947136/IMG_5209.jpg?ex=653676aa&is=652401aa&hm=df9ac1a0e78f9e67c34db094&=&width=534&height=580")
		
		//Boss
		let boss = new EmbedBuilder()
		.setTitle("Bolt Of Some Size")
		.setDescription("Ever wondered what it was like to play Stompadon pre-nerf? Now you don't have to, because this deck turns it into an absolute menace. Play Regifter and ZMM to proc Stompa before the Plants have a chance to remove it, or teleport it in, or rush it out with Flag! Whatever you do, ToSS's younger brother is sure to win victories of some size. Or lose spectacularly. There's only one way to find out")
		.setFooter({text: "Created by non || Suggested on 05/05/24"})
		.setColor("Random")
		.addFields({name: "Deck Cost",
							 	value: "Cost: 67,250 sparks <:spar:1057791557387956274>"})
		.setImage("https://media.discordapp.net/attachments/1088919723196035112/1236689658146983998/image.png?ex=663f83ff&is=663e327f&hm=da5c342a5d5f59c4adff283fd6a103fb1236ea3f318d2a90d02bcdb10bc2b7ab&=&format=webp&quality=lossless&width=613&height=570")
		//Bsmash
		let bsmash = new EmbedBuilder()
		.setTitle("B-Smash")
		.setDescription("A Pet Deck That Puts All Other Pet Decks To Shame. Secret Agent Your Cheap Cards To Play Them Later And Copy Stats To Swimmer. Token Piano For The Cherry On Top Last Ditch Removal.")
		.setFooter({text: "Created By Bobert"})
				.addFields({name: "Deck Cost", value: "Cost: 24,350 Sparks <:spar:1057791557387956274>"})
			.setColor("Random")
			.setImage("https://media.discordapp.net/attachments/1044626284346605588/1160937711943823510/IMG_5210.png?ex=65367a7f&is=6524057f&hm=5e781b0c2b451ead3c280cd2&=&width=540&height=580")
		
		//Bustbolt
		let bustbolt = new EmbedBuilder()
		.setTitle("BustBolt")
		.setDescription(`This is a control Rustbolt deck that takes things further than previous attempts. 
Your early game is often secured by Black Hole and Rolling Stone, while other turns are dominated by your 3-cost removals. 
Card advantage and value will begin to add up, and eventually you’re able to burst down your opponent’s health using Trickster and Teleport. 
Teacher can answer turn 1 Forget-Me-Nuts and make your hand cheaper, while your Mechasaurs are able to dominate the match when needed`)
		.setColor("Random")
			.setFooter({text: "Created by Salt || Suggested on 03/24/24"})
		.addFields({name: "Deck Cost", value: "Cost: 76,000 sparks <:spar:1057791557387956274>"})
		.setImage("https://media.discordapp.net/attachments/1044626284346605588/1229096070584340593/bustbolt.png?ex=662e6fea&is=661bfaea&hm=8fc1c174a9bc9b2bc571a1020138fec8d430edf1c37ec18655de5af9da12acd3&=&format=webp&quality=lossless&width=613&height=570")
		//Cancerknight
		let cknight = new EmbedBuilder()
		.setTitle("Cancer Knight")
		.setDescription("Have you ever wanted to play like cancer? Then this is the right deck for you. Just like cancer, it starts off quietly, only working to fend off threats whenever the need to. The more tempo there is to play, the more healing you can do, and the more damage it does. Just simply heal from whatever damage your opponent puts on the field, heal from it, and play astrovera whenever you can. Doom shroom is there in case if the opponent gains too much tempo within the following turns, and for efficiency. Soul patch is there just to gain you a bit of extra health, deal a bit more damage, and wasting your opponent's removal. And finally, wall nut bowling allows you to make you the most toxic person in the history in PVZHeroes and make you realise just how stupidly broken the deck actually is. Just beware of sudden damage and constant pressure.")
		.setColor("Random")
		
		.addFields({name: "Deck Cost",
							 value: "Cost: 70,850 Sparks <:spar:1057791557387956274>"})
		.setImage("https://media.discordapp.net/attachments/1060317261690322994/1088913176776675490/CancerKnight.png?width=647&height=604")
		.setFooter({text: "Created by Mono"})
		//Chemotherapy
		let chemotherapy = new EmbedBuilder()
		.setTitle("Chemotherapy")
		.setDescription("This version of wk control will burn your home down, kidnap your children, report you to the IRS, you hear he?? It will LITERALLY drag you to hell itself. Control the early game with Pepper MD and Galacta-Cactus. Block off threats with Primal Wall Nut, punish swarm with Ketchup Mechanic, remove any card with Shamrocket + Hammer, and top off your health with 2nd Best Taco of All Time. The sheer defensive tools this deck offers is genuinely ABSURD. Environment? Cover it with Spikeweed Sector. Gravestones? Blockbuster has you covered. The opponent wants to make a comeback? Well that's fine because you can take a nap while your opponent is dragged to the darkest pits of hell itself dealing with poppies and cob cannon. Chemotherapy vs Rustbolt: Truly the fastest, most fun matchup of all time. :3")
		.setFooter({text: "Created by: Salt"})
		.addFields({name: "Deck Cost", value: "Cost: 59,750 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
		.setImage("https://media.discordapp.net/attachments/1173902738858446858/1174031426207883446/IMG_7534.png?ex=656f5778&is=655ce278&hm=e0c9d9e280e9c99b2e93b274&=&format=webp&width=487&height=568")
		
		//Conjurerates
		let crates= new EmbedBuilder()
		.setTitle("Conjurates")
		.setDescription("Conjurates Is A Deck That Combines The Powerhouse That Is Pirates And Meshes It Together With Spacetime In The Middle For Added Value. Graveyard Cowboy Is One Of The Powerhouse Plays That This Deck Brings To The Table.")
		.setFooter({text: "Created By RCCH, Inspired By Sushi"})
				.addFields({name: "Deck Cost", value: "Cost: 55,800 Sparks <:spar:1057791557387956274>"})
			.setColor("Random")
			.setImage("https://media.discordapp.net/attachments/1044626284346605588/1160946943430766622/IMG_5215.png?ex=65368318&is=65240e18&hm=0bf9ff237db7f1f32334a408&=&width=594&height=580")
		
		//Cyburn
		let cyburn = new EmbedBuilder()
		.setTitle("Cyburn")
			.setDescription("Cyburn takes a page out of cycle cap and then burns the rest of the book. With interesting finishers like Sonic Bloom and decent answers like Jelly bean your opponent won't know what hit them until it's too late.")
			.setFooter({text: "Created By Salt and Badorni | Inspired by Chel"})
					.addFields({name: "Deck Cost", value: "Cost: 46,400 Sparks <:spar:1057791557387956274>"})
				.setColor("Random")
				.setImage("https://media.discordapp.net/attachments/1044626284346605588/1113117168570224670/IMG_7608.png?width=605&height=567")
				
				//Cycleknight
				let cycleknight = new EmbedBuilder()
				.setTitle("Cycle Knight")
				.setDescription("Cycle Knight Isn't Just A Deck. To many players its a way of life. To reach that near death experience and then come full circle and steal a match isn't just something the masses can ignore. The revolutionary combination of Heartichoke / Flytrap was no mistake.")
				.setFooter({text: "Created By Tryhard"})
						.addFields({name: "Deck Cost", value: "Cost: 39,700 Sparks <:spar:1057791557387956274>"})
					.setColor("Random")
					.setImage("https://media.discordapp.net/attachments/1044626284346605588/1160947924176486602/IMG_5217.jpg?ex=65368402&is=65240f02&hm=a6ebaf3749251352d3279b58&=&width=627&height=580")
				
		//Cyclesp
		let cyclesp = new EmbedBuilder()
		.setTitle("Cycle Spudow")
		.setDescription("The genius Ken Martin created yet another Gem. This time he hid cycle cap within the deck. Conjuring Planet Of The Grapes from Photosynthesizer/ High Voltage Currant to use for your Astro-Shroom might seem like something that's never going to happen. But with two cards that can draw it you best believe with a small amount of luck you'll have your opponent's head spinning in confusion as your deck seamlessly transforms into cycle cap.")
		.setFooter({text: "Created By Ken Martin, Modified By TryHard"})
				.addFields({name: "Deck Cost", value: "Cost: 55,450 Sparks <:spar:1057791557387956274>"})
			.setColor("Random")
			.setImage("https://media.discordapp.net/attachments/1044626284346605588/1160949488559603743/IMG_5218.png?ex=65368577&is=65241077&hm=146bd5a6e28ae63f60298893&=&width=606&height=580")
		
		//Devinknuckles
		let dknuckles = new EmbedBuilder()
		.setTitle("Devin Knuckles")
			.setDescription("Finally the bananas meta has come back to pvzheroes! In this legendary return bananas make a crossover with the gurdian class. This crossover allows a mix of well balanced and well design cards to join together in order to create a very destructive tempo and midrange overstats deck. What more do you need besides a legendary bananas return and a legendary crossover deck that creates desctruction!")
		.setColor("Random")
		.setFooter({text: "Created by: RCCH"})
		.setImage("https://media.discordapp.net/attachments/840248485467127855/1193547168154398720/IMG_8153.png?ex=65ad1c6b&is=659aa76b&hm=eee41ecfe55f76eb8456d88eefa3f59ffa2c9f6579a19cae8db6dea776ce9a96&=&format=webp&quality=lossless&width=658&height=614")
		.addFields({name: "Deck Cost", value: "Cost: 48,150 Sparks <:spar:1057791557387956274>"})
		
		//Dozzamech
		let dmech = new EmbedBuilder()
		.setTitle("Dozza Mech")
		.setDescription("Exhaust Fossilhead to the extreme. Although it is possible to win with Con man / Grobber Dumping all of your resources into Fossilhead should be top priority. Beware of Eyespore / Cobcannon and you got yourself a good old fashioned race.")
		.setFooter({text: "Created By Dozza"})
				.addFields({name: "Deck Cost", value: "Cost: 33,050 Sparks <:spar:1057791557387956274>"})
			.setColor("Random")
			.setImage("https://media.discordapp.net/attachments/1058720036547743744/1112961974251311115/Screenshot_20230530-143132.png?width=549&height=603")
		
		//Ejection
		let eject = new EmbedBuilder()
		.setTitle("Ejection")
		.setDescription("Eject Nearly Every Zombie In The Game With This.")
		.setFooter({text: "Created By Tryhard"})
				.addFields({name: "Deck Cost", value: "Cost: 68,150 Sparks <:spar:1057791557387956274>"})
			.setColor("Random")
			.setImage("https://media.discordapp.net/attachments/1044626284346605588/1160972209762881636/IMG_5219.png?ex=65369aa0&is=652425a0&hm=be0431c8f09bd6799ed83901&=&width=639&height=580")
		
		//Funnyknight
		let fknight = new EmbedBuilder()
		.setTitle("Funny Knight")
		.setDescription("Funny Knight is a deck that isn't so funny when your opponent can't deal with your Soul Patch. They will send the army and the navy to kill your astrocado / cob cannons but when the Soul Patch drops there will be nothing left for them to use...hopefully")
		.setFooter({text: "Created by sushi redefined by Snoring salt and Rcch"})
				.addFields({name: "Deck Cost", value: "Cost: 65,600 Sparks <:spar:1057791557387956274>"})
			.setColor("Random")
	.setImage("https://media.discordapp.net/attachments/1044626284346605588/1160974130712158299/IMG_5221.png?ex=65369c6a&is=6524276a&hm=80667483b979f81e9980218c&=&width=619&height=580")
		
		//Healmidrose
		let hmrose = new EmbedBuilder()
		.setTitle("Heal Midrose")
		.setDescription("Heal cards keep this deck stable through the earlygame, and pepper punishes any attempt to play aggressive. primal sunflower activates our lategame a turn earlier, letting us drop astrocado and elderberry on turn 3 and 4. when turn 6 hits, the dual threat of cob and brainana annihilate any threat.")
		.setFooter({text: "Created By Sushi Redefined by RCCH and Salt"})
				.addFields({name: "Deck Cost", value: "Cost: 53,850 Sparks <:spar:1057791557387956274>"})
			.setColor("Random")
			.setImage("https://media.discordapp.net/attachments/1044626284346605588/1160979019097981031/IMG_5222.png?ex=6536a0f8&is=65242bf8&hm=b8e4f5175750bb7753543fca&=&width=609&height=580")
		
		//Hibird
		let hbird = new EmbedBuilder()
	.setTitle("Hibird")
	.setDescription("Hibird is Valk Trickster Hybrid But With Conman. The deck attempts to utilize the early mid game to it's full potential while trying to find itself through the Valk or Trickster. Card Draw is amazing in that you can essentially draw into a card that is useful since the majority of the deck is two cost and below. All in all this deck can spell doom for any opponent who is not adequately prepared.")
	.setFooter({text: "Created By TryHard, Inspired By FryEmUp"})
			.addFields({name: "Deck Cost", value: "Cost: 93,250 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
		.setImage("https://media.discordapp.net/attachments/1044626284346605588/1140820258928726046/IMG_4139.png?width=561&height=621")
	
	//Igmablobchum
	let igbchum = new EmbedBuilder()
	.setTitle("Igma Blob Chum")
	.setDescription("2 Cost Gravestones Will Confuse Opponent.Brain Vendor Will Synergize With Blob And Chum Champion Viral Will Roll Over Everything Mid - Late Game.")
	.setFooter({text: "Created By IgmaRockers"})
			.addFields({name: "Deck Cost", value: "Cost: 54,300 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
		.setImage("https://media.discordapp.net/attachments/1044626284346605588/1160983306712662048/IMG_5223.png?ex=6536a4f6&is=65242ff6&hm=2be881667509e2b5999f6535&=&width=633&height=580")
	
	//Ifplankcontrol
	let ifpcontrol = new EmbedBuilder()
	.setTitle("IF Plank Control")
  .setDescription("Similar to Neptuna Plank Control but with impfinity. There are many different control cards you can use that are actually even powerful enough to win you the game outright. In fact if you removed Plank from this deck you wouldn't even notice that's how strong the foundation is.")
  .setFooter({text: "By IcyyyyInferno"})
	  .setColor("Random")
	  .setImage("https://media.discordapp.net/attachments/1044626284346605588/1160985263271579848/IMG_5224.png?ex=6536a6c8&is=652431c8&hm=19c9a8702bcff0476f45b531&=&width=616&height=580")
		  .addFields({name: "Deck Cost", value: "Cost:  76,950 Sparks <:spar:1057791557387956274>"})
  
  //Imgmaticia
  let igma = new EmbedBuilder()
  .setTitle("Igmaticia")
  .setDescription("Probably the most famous deck the THT1 + 2 Grandmaster has ever made. This is the deck that famously won the collab tournament with the reddit discord. Infinite control and late game that will obliterate the opponent if they do not kill you quickly.")
  .setFooter({text: "Created By IgmaRockers"})
		  .addFields({name: "Deck Cost", value: "Cost: 86,475 Sparks <:spar:1057791557387956274>"})
	  .setColor("Random")
	  .setImage("https://media.discordapp.net/attachments/1044626284346605588/1160987049499828264/IMG_5225.png?ex=6536a872&is=65243372&hm=00593ec7d3f2293b642a996f&=&width=628&height=580")
  
//kenedycrush
let kcrush = new EmbedBuilder()
.setTitle("Kendy Crush")
.setDescription("Ken Martin's Fossilhead exhaust deck. A Fossilhead in starting hand is usually a guaranteed win if the opponent is ill prepared. Also features infinite loop with teacher viral.")
.setFooter({text: "By Ken Martin"})
		.addFields({name: "Deck Cost", value: "Cost: 28,800 Sparks <:spar:1057791557387956274>"})
	.setColor("Random")
	.setImage("https://media.discordapp.net/attachments/1044626284346605588/1160990031096315985/IMG_5226.png?ex=6536ab39&is=65243639&hm=cfdf8ea7ce8b98ace3a29d8f&=&width=634&height=580")

//mill
let mill = new EmbedBuilder()
	.setTitle("Mill")
	.setDescription("In PvZ Heroes When You Have 10 Cards You Are unable To Block Because Drawing Your Super Power Would Be The 11th Card. This Deck Attempts To Fill Your Opponent's Hand Up With Hopefully Their Late Game Garbage So That You Can Hit Face Safely Basically Making This Entire Deck Bullseye. Brain Vendor + Mixed Up Grave Digger Can Be A Devastating Combo Especially If You Teleport The MUG In To Harvest Brains For The Following Turn To Potentially Unleash A Surprise BMR.")
	.setFooter({text: "Created by TryHard"})
			.addFields({name: "Deck Cost", value: "Cost: 55,750 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
		.setImage("https://media.discordapp.net/attachments/1044626284346605588/1161361958239473705/mill.png?ex=6538059b&is=6525909b&hm=4a83b6238984e783626ec549&=")
	
	//ooboltmidgargs
	let ogargs = new EmbedBuilder()
	.setTitle("Ooblt Midgargs")
	.setDescription("Ooblt's Midgargs Deck Mixes Amazing Early Game Presence With A Mid Game To Die For. Gargologist Synergizes With Smash Signature Making It Free But Besides That Support Her To Drop Your Gargs Early And Then Copying The Beefy Stats With Swimmer Will Surely Put Your Opponent In A Frenzy, No Pun Intended Of Course.")
	.setFooter({text: "Created By OOBLT"})
				.addFields({name: "Deck Cost", value: "Cost: 48,950 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
		.setImage("https://media.discordapp.net/attachments/1044626284346605588/1161342133236682842/oobltgargs.png?ex=6537f325&is=65257e25&hm=754559314967f2bd746e99c2&=&width=596&height=621")
	
	//otktrickster
	let otkster = new EmbedBuilder()
	.setTitle("OTK Trickster")
	.setDescription(`OTK Trickster has tools to absolutely demolish the plant heroes HP in one go. 
A well timed Teleport Trickster on an A22 does 16 damage but by the time that happens the plant player will surely be almost dead.`)
	.setFooter({text: "By Salt and RCCH || Inspired By Hector The 3rd || Suggested on 03/24/24"})
			.addFields({name: "Deck Cost", value: "Cost:  71,250 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
		.setImage("https://media.discordapp.net/attachments/1044626284346605588/1231983138616639568/otktrickster.png?ex=6627cd35&is=66267bb5&hm=57ddde1f586dda2b99412197a30f18e111458f39b977768a37e004572b8c717d&=&format=webp&quality=lossless")
		//piratout
		let pout = new EmbedBuilder()
	.setTitle("Pirataout")
	.setDescription(`This version of Lockout is far more aggressive than usual. 
It uses Flameface’s great synergy with Area 22 and Bounty Hunter to deal far more damage than usual, and Flameface itself can be difficult to trade with. 
Fraidy Cat helps tech powers and cheap tricks that can disrupt your early game, while Tomb Raiser is able to summon powerful zombies when used with Area 22`)
	.setFooter({text: "Created By RCCH || Inspired by Sushi || Suggested on 03/24/24"})
			.addFields({name: "Deck Cost", value: "Cost: 71,100 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
		.setImage("https://media.discordapp.net/attachments/1044626284346605588/1229069832516014091/pirateout.webp?ex=662e577b&is=661be27b&hm=be87dc763d8e6feb16fc12a75f11fa1989a6dfa695a2020a7870562e973067e0&=&format=webp")
		//poggerazzi
		let poggerazzi = new EmbedBuilder()
		.setTitle("Poggerrazzi")
		.setDescription("Taking Trick Spam To The Next Level. LG's Poggerrazzi is a force to be reckoned with. Watch As The Hail Mary Top Decks Into Extreme Value Pump Up Paparazzi To Stats Like No Other. With Support Cards Like Teacher Allowing You To Use More Tricks / Parasol Keeping Your Zombies Alive It's No Mistake To Say That The Cards Here Look Out For Each Other.")
		.setFooter({text: "Created By LGTYQZ"})
					.addFields({name: "Deck Cost", value: "Cost: 45,200 Sparks <:spar:1057791557387956274>"})
			.setColor("Random")
			.setImage("https://media.discordapp.net/attachments/1044626284346605588/1161277781762637934/pogerazzi.png?ex=6537b736&is=65254236&hm=f0650b18ff98f46c362671a3&=&width=619&height=580")
		
		//pepega
		let pepega = new EmbedBuilder()
		.setTitle("Pepega Smash")
		.setDescription("A Deck That Is More Or Less Pepega But With Good Reason. Similar To Horts You Are Building Up A Board You Are Proud Of And Then Wiping Out The Competition With Viral.")
		.setFooter({text: "Created By RCCH, and Salt, Inspired By FryEmUp"})
					.addFields({name: "Deck Cost", value: "Cost: 59,150 Sparks <:spar:1057791557387956274>"})
			.setColor("Random")
			.setImage("https://media.discordapp.net/attachments/1118010737068093492/1118010737516892160/IMG_7468.png?width=670&height=625")
		
		//reliablemolekale
		let rmkale = new EmbedBuilder()
		.setTitle("Reliable Molekale")
		.setDescription("Reliable Molekale is a control deck that make use of mokale with cards like poppies, soulpatch making your cards more expensive to get to that zucc or cornucopia this deck is also easily able to control early game minions with galatic, primial mine, hot date and fireweed with blockbuster taking out the graves its gonna be hard for your minions to deal with your late game cards.")
		.setFooter({text: "By Rcch"})
				.addFields({name: "Deck Cost", value: "Cost: 76,200 Sparks <:spar:1057791557387956274>"})
			.setColor("Random")
	.setImage("https://media.discordapp.net/attachments/780141103558295592/1045084546519011368/cachedImage.png?width=644&height=604")
		
		//seacret
		let seacret = new EmbedBuilder()
		.setTitle("Seacret")
		.setDescription(`An aggro deck focusing on getting 10/10 stats by t3. 
1-drops on t1 and t2, followed by a Secret Agent also on t2 on one of the minions, means you can get a 5/5 1-drop and 5/5 Swimmer by t3. 
This overwhelming tempo is resistant to removal as its spread on two or more minions, and also cannot be outhealed. 
EB is supported by Crazy removal and his superpowers, meaning you can consistently do 10 damage to face and win by t4 and t5!`)
		.setColor("Random")
		.setFooter({text: "Created by Salt || Inspired by Yoyo and Mono || Suggested on 03/24/24"})
		.addFields({name: "Deck Cost",
							 	value: "Cost: 49,000 sparks <:spar:1057791557387956274>"})		
		.setImage("https://media.discordapp.net/attachments/1044626284346605588/1229086722693005463/seacret.jpg?ex=662e6736&is=661bf236&hm=963e59e4f9503051f90fed0a4a8df55ce1c82e04205abf701300e53d12b1829c&=&format=webp&width=619&height=570")
		//shitknight
		let sknight = new EmbedBuilder()
		.setTitle("Shit Knight")	
				.setDescription("Not a good deck don't play this deck I'm not kidding you'll regret it. Just queuing into a game will result in not only a loss in-game, but tossing one's phone into your window. The resulting glass shards will blind you, causing you to go to the emergency room. Once you're in the hospital, your stretcher will fall over and you'll break your neck. The moral of the story is don't run shit knight.")
		.setFooter({text: "Created By: Snap"})
				.addFields({name: "Deck Cost", value: "Cost: 3,800 sparks <:spar:1057791557387956274>"})
			.setColor("Random")			
			.setImage("https://media.discordapp.net/attachments/1044626284346605588/1066421134502932611/cachedImage.png?width=669&height=625")
		
		//spacestars
		let sstars = new EmbedBuilder()
		.setTitle("Spacestars")
		.setDescription("Graveyard turns spacetime and cowboy into unstoppable monsters. a horde of discounted cards with barrel mission weakens our opponent. a single raptor, cowboy, or binary stars is enough to finish the game.")
		.setFooter({text: "Created By Salt, Inspired By RCCH"})
				.addFields({name: "Deck Cost", value: "Cost: 83,900 Sparks <:spar:1057791557387956274>"})
			.setColor("Random")
			.setImage("https://media.discordapp.net/attachments/1044626284346605588/1239491580352532652/IMG_6283.png?ex=66431dfd&is=6641cc7d&hm=a1e13bacfd93a840643e729d35ec07b80c1df2bfa342619bd34f752be46f008b&=&format=webp&quality=lossless&width=510&height=570")
		
		//sunbandits
		let sbandits = new EmbedBuilder()
		.setTitle("Sun Bandits")
		.setDescription("Ramp Into Deramp As Your Sun Stealing Zombies Cause Chaos For The Plant Hero. No Late Game Removal Because Dying Is Irrelevant With Pharaoh. Early Game Removal Is Necessary To Establish Your Mid Game Board. Leaping Ra Zombie Is Top Priority Since After His Ability Is Complete He Is No Longer A Threat... Or So The Plant Player Believes.")
		.setFooter({text: "Created By TryHard & Sushi"})
				.addFields({name: "Deck Cost", value: "Cost: 55,750 Sparks <:spar:1057791557387956274>"})
			.setColor("Random")
			.setImage("https://media.discordapp.net/attachments/1044626284346605588/1161326161503211610/IMG_5235.png?ex=6537e445&is=65256f45&hm=c7e0b8b6a9ca4821d8531351&=&width=615&height=580")
		
		//speeddemon
		let sdemon = new EmbedBuilder()
	.setTitle("Speed Demon")
	.setDescription("Speed Demon is a deck that either puts it's foot on the gas pedal and never stops or a deck that continues to wait patiently until the time is right to strike. With three different ways to play this deck your opponent will always be guessing.")
	.setFooter({text: "Created By TryHard Inspired By JPThaGod"})
			.addFields({name: "Deck Cost", value: "Cost: 58,550 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")		
	.setImage("https://media.discordapp.net/attachments/1044626284346605588/1065298249143037962/IMG_0925.png?width=554&height=587")
	
	//telimps
	let timps = new EmbedBuilder()
	.setTitle("Telimps")
	.setDescription("This is a deck which makes full use of every HG power, is consistent, and has both early-game power, limitless resources, and an inevitable finisher. It covers up the main weakness of the Brainy/Sneaky combination to aggressive decks to an incredible degree while doing many super unfair things with the synergies between the classes.")
	.setFooter({text: "Created By Sushi"})
			.addFields({name: "Deck Cost", value: "Cost: 65,150 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
		.setImage("https://media.discordapp.net/attachments/1130612055938965645/1130615542877802629/IMG_6329.png?width=641&height=625")
	
	//trickstache
	let tstache = new EmbedBuilder()
	.setTitle("Trickstache")
	.setDescription("Swarm the board with almost free mustaches. deal extra damage with barrel and final mission, and your opponent is on 12 health before they even know it. after trickster and teleport, the game is already over")
	.setFooter({text: "Created By YOYO"})
			.addFields({name: "Deck Cost", value: "Cost: 75,950 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
		.setImage("https://media.discordapp.net/attachments/1044626284346605588/1161349758770757784/trickstache.png?ex=6537fa3f&is=6525853f&hm=102c47e8f34b7efaaa72436f&=")
	
	//wrath martin
	let wmartin = new EmbedBuilder()
	.setTitle("Wraith Martin")	
			.setDescription("A Deck That Has One Goal. Flood The Board With Minions And When You Can Send A Max Wrath Face. There Aren't Many Opportunities In PvZ Heroes Where You Can Get Wrath To Full Potential But Wrath Martin Helps To Make That Dream Come True. With 8 Damage From Plumber, 12 Damage From Wrath, And Overshoot Environments, You'll Notice The Plant Heroe's HP Is No Problem.")
	.setFooter({text: "Created By Ken Martin"})
			.addFields({name: "Deck Cost", value: "Cost: 49,000 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
		.setImage("https://media.discordapp.net/attachments/1044626284346605588/1161360617198846011/wrathmartin.png?ex=6538045c&is=65258f5c&hm=c4564064c91ea2455bfacbf9&=")
	
	//young ken martin
	let ykmartin = new EmbedBuilder()
	.setTitle("YKM")	
			.setDescription("Young Ken Martin is one of the most powerful RNG Decks in PvZ Heroes. The deck uses Nebula + Treasure or Brain Vendor Combo to quickly harvest brains into a devastating finisher whether that be a grotesque Blob, Mechasaurus, or a Plank.")
	.setFooter({text: "By Ken Martin & TryHard"})
			.addFields({name: "Deck Cost", value: "Cost: 57,300 Sparks <:spar:1057791557387956274>"})
		.setColor("Random")
		.setImage("https://media.discordapp.net/attachments/1044626284346605588/1161358283853004891/YKM.jpg?ex=6538022f&is=65258d2f&hm=4caf37568545f3aadb1753c3&=")
	
		const m = await	message.channel.send({embeds: [db], components: [row] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter})
		collector.on("collect", async i => {
			//100 Winrate
			if(i.customId == "wr"){
				await i.update({embeds: [wrate], components: [wr] })
			}
			if(i.customId == "wrate"){
				await i.update({embeds: [wrate], components: [wr] })
			}
			//101
			if(i.customId == "one"){
				await i.update({embeds: [oneone], components: [one] })
			}
			if(i.customId == "oneone"){
				await i.update({embeds: [oneone], components: [one] })
			}
			//A-Graves
			if(i.customId == "ag"){
				await i.update({embeds: [agraves], components: [ag] })
			}
			if(i.customId == "agraves"){
				await i.update({embeds: [agraves], components: [ag] })
			}
			//aggroramppeas
			if(i.customId == "agrp"){
				await i.update({embeds: [agrampea], components: [agrp] })
			}
			if(i.customId == "agrpeas"){
				await i.update({embeds: [agrampea], components: [agrp] })
			}
			//Anti
			if(i.customId == "an"){
				await i.update({embeds: [anti], components: [an] })
			}
			if(i.customId == "anti"){
				await i.update({embeds: [anti], components: [an] })
			}
			//Apotk
			if(i.customId == "ap"){
				await i.update({embeds: [apotk], components: [ap] })
			}
			if(i.customId == "apotk"){
				await i.update({embeds: [apotk], components: [ap] })
			}
			//Bartinroots
			if(i.customId == "br"){
				await i.update({embeds: [broots], components: [br] })
			}
			if(i.customId == "broots"){
				await i.update({embeds: [broots], components: [br] })
			}
			//Bbeans
			if(i.customId == "bb"){
				await i.update({embeds: [bbeans], components: [bb] })
			}
			if(i.customId == "bbeans"){
				await i.update({embeds: [bbeans], components: [bb] })
			}
			//Bempo
			if(i.customId == "be"){
				await i.update({embeds: [bempo], components: [be] })
			}
			if(i.customId == "bempo"){
				await i.update({embeds: [bempo], components: [be] })
			}
			//Boltbolt
			if(i.customId == "bbolt"){
				await i.update({embeds: [boltbolt], components: [bbolt] })
			}
			if(i.customId == "boltbolt"){
				await i.update({embeds: [boltbolt], components: [bbolt] })
			}
			//Boss
			if(i.customId == "bo"){
				await i.update({embeds: [boss], components: [bo] })
			}
			if(i.customId == "boss"){
				await i.update({embeds: [boss], components: [bo] })
			}
			//Bsmash
			if(i.customId == "bs"){
				await i.update({embeds: [bsmash], components: [bs] })
			}
			if(i.customId == "bsmash"){
				await i.update({embeds: [bsmash], components: [bs] })
			}
			//Bustbolt
			if(i.customId == "bust"){
				await i.update({embeds: [bustbolt], components: [bust] })
			}
			if(i.customId == "bustbolt"){
				await i.update({embeds: [bustbolt], components: [bust] })
			}
			//Cancerknight
			if(i.customId == "ck"){
				await i.update({embeds: [cknight], components: [ck] })
			}
			if(i.customId == "cknight"){
				await i.update({embeds: [cknight], components: [ck] })
			}
			//Chemotherapy
			if(i.customId == "ct"){
				await i.update({embeds: [chemotherapy], components: [ct] })
			}
			if(i.customId == "chemo"){
				await i.update({embeds: [chemotherapy], components: [ct] })
			}
			//Conjurerates
			if(i.customId == "cr"){
				await i.update({embeds: [crates], components: [cr] })
			}
			if(i.customId == "crates"){
				await i.update({embeds: [crates], components: [cr] })
			}
			//Cyburn
			if(i.customId == "cy"){
				await i.update({embeds: [cyburn], components: [cy] })
			}
			if(i.customId == "cyburn"){
				await i.update({embeds: [cyburn], components: [cy] })
			}
			//Cycleknight
			if(i.customId == "cyclek"){
				await i.update({embeds: [cycleknight], components: [cyclek] })
			}
			if(i.customId == "cycleknight"){
				await i.update({embeds: [cycleknight], components: [cyclek] })
			}
			//Cyclesp
			if(i.customId == "csp"){
				await i.update({embeds: [cyclesp], components: [csp] })
			}
			if(i.customId == "cyclesp"){
				await i.update({embeds: [cyclesp], components: [csp] })
			}
			//Devinknuckles
			if(i.customId == "dk"){
				await i.update({embeds: [dknuckles], components: [dk] })
			}
			if(i.customId == "dknuckles"){
				await i.update({embeds: [dknuckles], components: [dk] })
			}
			//Dozzamech
			if(i.customId == "dm"){
				await i.update({embeds: [dmech], components: [dm] })
			}
			if(i.customId == "dmech"){
				await i.update({embeds: [dmech], components: [dm] })
			}
			//Ejection
			if(i.customId == "ej"){
				await i.update({embeds: [eject], components: [ej] })
			}
			if(i.customId == "eject"){
				await i.update({embeds: [eject], components: [ej] })
			}
			//Funnyknight
			if(i.customId == "fk"){
				await i.update({embeds: [fknight], components: [fk] })
			}
			if(i.customId == "fknight"){
				await i.update({embeds: [fknight], components: [fk] })
			}
			//Healmidrose
			if(i.customId == "hmr"){
				await i.update({embeds: [hmrose], components: [hmr] })
			}
			if(i.customId == "hmrose"){
				await i.update({embeds: [hmrose], components: [hmr] })
			}
			//Hibird
			if(i.customId == "hb"){
				await i.update({embeds: [hbird], components: [hb] })
			}
			if(i.customId == "hbird"){
				await i.update({embeds: [hbird], components: [hb] })
			}
			//Igmablobchum
			if(i.customId == "igbc"){
				await i.update({embeds: [igbchum], components: [igbc] })
			}
			if(i.customId == "igbchum"){
				await i.update({embeds: [igbchum], components: [igbc] })
			}
			//Ifplankcontrol
			if(i.customId == "ifpc"){
				await i.update({embeds: [ifpcontrol], components: [ifpc] })
			}
			if(i.customId == "ifpcontrol"){
				await i.update({embeds: [ifpcontrol], components: [ifpc] })
			}
			//Imgmaticia
			if(i.customId == "ig"){
				await i.update({embeds: [igma], components: [ig] })
			}
			if(i.customId == "igma"){
				await i.update({embeds: [igma], components: [ig] })
			}
			//Kenedycrush
			if(i.customId == "kc"){
				await i.update({embeds: [kcrush], components: [kc] })
			}
			if(i.customId == "kcrush"){
				await i.update({embeds: [kcrush], components: [kc] })
			}
			//Mill
			if(i.customId == "mi"){
				await i.update({embeds: [mill], components: [mi] })
			}
			if(i.customId == "mill"){
				await i.update({embeds: [mill], components: [mi] })
			}
			//Ooboltmidgargs
			if(i.customId == "og"){
				await i.update({embeds: [ogargs], components: [og] })
			}
			if(i.customId == "ogargs"){
				await i.update({embeds: [ogargs], components: [og] })
			}
			//Otktrickster
			if(i.customId == "otk"){
				await i.update({embeds: [otkster], components: [otk] })
			}
			if(i.customId == "otkster"){
				await i.update({embeds: [otkster], components: [otk] })
			}
			//Piratout
			if(i.customId == "po"){
				await i.update({embeds: [pout], components: [po] })
			}
			if(i.customId == "pout"){
				await i.update({embeds: [pout], components: [po] })
			}
			//Poggerazzi
			if(i.customId == "pog"){
				await i.update({embeds: [poggerazzi], components: [pog] })
			}
			if(i.customId == "poggerazzi"){
				await i.update({embeds: [poggerazzi], components: [pog] })
			}
			//Pepega
			if(i.customId == "pe"){
				await i.update({embeds: [pepega], components: [pe] })
			}
			if(i.customId == "pepega"){
				await i.update({embeds: [pepega], components: [pe] })
			}
			//Reliablemolekale
			if(i.customId == "rmk"){
				await i.update({embeds: [rmkale], components: [rmk] })
			}
			if(i.customId == "rmkale"){
				await i.update({embeds: [rmkale], components: [rmk] })
			}
			//Seacret
			if(i.customId == "se"){
				await i.update({embeds: [seacret], components: [se] })
			}
			if(i.customId == "seacret"){
				await i.update({embeds: [seacret], components: [se] })
			}
			//Shitknight
			if(i.customId == "sk"){
				await i.update({embeds: [sknight], components: [sk] })
			}
			if(i.customId == "sknight"){
				await i.update({embeds: [sknight], components: [sk] })
			}
			//Spacestars
			if(i.customId == "ss"){
				await i.update({embeds: [sstars], components: [ss] })
			}
			if(i.customId == "sstars"){
				await i.update({embeds: [sstars], components: [ss] })
			}
			//Sunbandits
			if(i.customId == "sb"){
				await i.update({embeds: [sbandits], components: [sb] })
			}
			if(i.customId == "sband"){
				await i.update({embeds: [sbandits], components: [sb] })
			}
			//Speeddemon
			if(i.customId == "sd"){
				await i.update({embeds: [sdemon], components: [sd] })
			}
			if(i.customId == "sdemon"){
				await i.update({embeds: [sdemon], components: [sd] })
			}
			//Telimps
			if(i.customId == "ti"){
				await i.update({embeds: [timps], components: [ti] })
			}
			if(i.customId == "timps"){
				await i.update({embeds: [timps], components: [ti] })
			}
			//Trickstache
			if(i.customId == "ts"){
				await i.update({embeds: [tstache], components: [ts] })
			}
			if(i.customId == "tstache"){
				await i.update({embeds: [tstache], components: [ts] })
			}
			//Wrathmartin
			if(i.customId == "wm"){
				await i.update({embeds: [wmartin], components: [wm] })
			}
			if(i.customId == "wmartin"){
				await i.update({embeds: [wmartin], components: [wm] })
			}
			//Youngkenmartin
			if(i.customId == "yk"){
				await i.update({embeds: [ykmartin], components: [yk] })
			}
			if(i.customId == "ykmartin"){
				await i.update({embeds: [ykmartin], components: [yk] })
			}
			//help	
			if(i.customId == "help"){
				await i.update({embeds: [db], components: [row] })
			}
			if(i.customId == "helpdb"){
				await i.update({embeds: [db], components: [row] })
			}
		})
		}
}
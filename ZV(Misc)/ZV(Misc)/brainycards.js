const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
module.exports = {
	name: `brainycards`,
	aliases: [`brainy`, `brainyhelp`, `cardsbrainy`, `helpbrainy`],
	category: `Miscellaneous`,
	run: async(client, message, args)=> {
		const row = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('ster')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('cbz')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const cbz = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('helpbc')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('cs')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const cs = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('cbzombie')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('idz')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const idz = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('csweep')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('li')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
					const li = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('idzombie')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('mw')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
					const mw = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('limp')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('ni')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const ni = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('mwaxer')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('pz')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const pz = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('mwaxer')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('tp')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const tp = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('pzombie')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('bmu')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const bmu = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('tport')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('cpz')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
            const cpz = new ActionRowBuilder()
                            .addComponents(
                                            new ButtonBuilder()
                                    .setCustomId('bmup')
                                    .setLabel('🔙')
                                    .setStyle(ButtonStyle.Primary),
                                new ButtonBuilder()
                                    .setCustomId('csci')
                                    .setLabel('⏭')
                                    .setStyle(ButtonStyle.Primary)
                                            );
             const csci = new ActionRowBuilder()
             .addComponents(
              new ButtonBuilder()
             .setCustomId('bmup')
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
          .setCustomId('cscience')
          .setLabel('🔙')
         .setStyle(ButtonStyle.Primary),
          new ButtonBuilder()
          .setCustomId('el')
          .setLabel('⏭')
          .setStyle(ButtonStyle.Primary)
       ); 
       const el = new ActionRowBuilder()
       .addComponents(
        new ButtonBuilder()
       .setCustomId('cbrain')
       .setLabel('🔙')
      .setStyle(ButtonStyle.Primary),
       new ButtonBuilder()
       .setCustomId('lfl')
       .setLabel('⏭')
       .setStyle(ButtonStyle.Primary)
    ); 
    const lfl = new ActionRowBuilder()
    .addComponents(
     new ButtonBuilder()
    .setCustomId('eleap')
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
 .setCustomId('lflunch')
 .setLabel('🔙')
.setStyle(ButtonStyle.Primary),
 new ButtonBuilder()
 .setCustomId('tpz')
 .setLabel('⏭')
 .setStyle(ButtonStyle.Primary)
);  
const tpz = new ActionRowBuilder()
.addComponents(
 new ButtonBuilder()
.setCustomId('pshark')
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
.setCustomId('tpzombie')
.setLabel('🔙')
.setStyle(ButtonStyle.Primary),
new ButtonBuilder()
.setCustomId('zde')
.setLabel('⏭')
.setStyle(ButtonStyle.Primary)
);   
const zde = new ActionRowBuilder()
.addComponents(
 new ButtonBuilder()
.setCustomId('tstation')
.setLabel('🔙')
.setStyle(ButtonStyle.Primary),
new ButtonBuilder()
.setCustomId('bv')
.setLabel('⏭')
.setStyle(ButtonStyle.Primary)
);  
 const bv = new ActionRowBuilder()
.addComponents(
 new ButtonBuilder()
.setCustomId('zdeng')
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
.setCustomId('bvendor')
.setLabel('🔙')
.setStyle(ButtonStyle.Primary),
new ButtonBuilder()
.setCustomId('ele')
.setLabel('⏭')
.setStyle(ButtonStyle.Primary)
);    
const ele = new ActionRowBuilder()
.addComponents(
 new ButtonBuilder()
.setCustomId('dstache')
.setLabel('🔙')
.setStyle(ButtonStyle.Primary),
new ButtonBuilder()
.setCustomId('fdr')
.setLabel('⏭')
.setStyle(ButtonStyle.Primary)
);     
const fdr = new ActionRowBuilder()
.addComponents(
 new ButtonBuilder()
.setCustomId('elect')
.setLabel('🔙')
.setStyle(ButtonStyle.Primary),
new ButtonBuilder()
.setCustomId('gz')
.setLabel('⏭')
.setStyle(ButtonStyle.Primary)
);    
const gz = new ActionRowBuilder()
.addComponents(
 new ButtonBuilder()
.setCustomId('fdraiser')
.setLabel('🔙')
.setStyle(ButtonStyle.Primary),
new ButtonBuilder()
.setCustomId('kf')
.setLabel('⏭')
.setStyle(ButtonStyle.Primary)
);   
const kf = new ActionRowBuilder()
.addComponents(
 new ButtonBuilder()
.setCustomId('gzombie')
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
.setCustomId('kflyer')
.setLabel('🔙')
.setStyle(ButtonStyle.Primary),
new ButtonBuilder()
.setCustomId('mwalk')
.setLabel('⏭')
.setStyle(ButtonStyle.Primary)
);    
const mwalk = new ActionRowBuilder()
.addComponents(
 new ButtonBuilder()
.setCustomId('mneb')
.setLabel('🔙')
.setStyle(ButtonStyle.Primary),
new ButtonBuilder()
.setCustomId('mm')
.setLabel('⏭')
.setStyle(ButtonStyle.Primary)
); 
const mm = new ActionRowBuilder()
.addComponents(
 new ButtonBuilder()
.setCustomId('mwalker')
.setLabel('🔙')
.setStyle(ButtonStyle.Primary),
new ButtonBuilder()
.setCustomId('rz')
.setLabel('⏭')
.setStyle(ButtonStyle.Primary)
);    
const rz = new ActionRowBuilder()
.addComponents(
 new ButtonBuilder()
.setCustomId('monument')
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
.setCustomId('rzombie')
.setLabel('🔙')
.setStyle(ButtonStyle.Primary),
new ButtonBuilder()
.setCustomId('tot')
.setLabel('⏭')
.setStyle(ButtonStyle.Primary)
);     
const tot = new ActionRowBuilder()
.addComponents(
 new ButtonBuilder()
.setCustomId('rscience')
.setLabel('🔙')
.setStyle(ButtonStyle.Primary),
new ButtonBuilder()
.setCustomId('wgk')
.setLabel('⏭')
.setStyle(ButtonStyle.Primary)
);         
 const wgk = new ActionRowBuilder()
.addComponents(
 new ButtonBuilder()
.setCustomId('totreater')
.setLabel('🔙')
.setStyle(ButtonStyle.Primary),
new ButtonBuilder()
.setCustomId('zb')
.setLabel('⏭')
.setStyle(ButtonStyle.Primary)
);      
 const zb = new ActionRowBuilder()
.addComponents(
 new ButtonBuilder()
.setCustomId('wgkeeper')
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
.setCustomId('zblob')
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
.setCustomId('dmajor')
.setLabel('🔙')
.setStyle(ButtonStyle.Primary),
new ButtonBuilder()
.setCustomId('mclimb')
.setLabel('⏭')
.setStyle(ButtonStyle.Primary)
); 
 const mclimb = new ActionRowBuilder()
.addComponents(
 new ButtonBuilder()
.setCustomId('mchemist')
.setLabel('🔙')
.setStyle(ButtonStyle.Primary),
new ButtonBuilder()
.setCustomId('pzomb')
.setLabel('⏭')
.setStyle(ButtonStyle.Primary)
);    
   const pzomb = new ActionRowBuilder()
.addComponents(
 new ButtonBuilder()
.setCustomId('mclimber')
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
.setCustomId('pzombi')
.setLabel('🔙')
.setStyle(ButtonStyle.Primary),
new ButtonBuilder()
.setCustomId('trip')
.setLabel('⏭')
.setStyle(ButtonStyle.Primary)
);    
const trip = new ActionRowBuilder()
.addComponents(
 new ButtonBuilder()
.setCustomId('tcap')
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
.setCustomId('triplication')
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
.setCustomId('commando')
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
.setCustomId('gscientist')
.setLabel('🔙')
.setStyle(ButtonStyle.Primary),
new ButtonBuilder()
.setCustomId('pb')
.setLabel('⏭')
.setStyle(ButtonStyle.Primary)
);      
  const pb = new ActionRowBuilder()
.addComponents(
 new ButtonBuilder()
.setCustomId('gmine')
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
.setCustomId('pbooty')
.setLabel('🔙')
.setStyle(ButtonStyle.Primary),
new ButtonBuilder()
.setCustomId('scv')
.setLabel('⏭')
.setStyle(ButtonStyle.Primary)
);                 
const scv = new ActionRowBuilder()
.addComponents(
 new ButtonBuilder()
.setCustomId('ptech')
.setLabel('🔙')
.setStyle(ButtonStyle.Primary),
new ButtonBuilder()
.setCustomId('hac')
.setLabel('⏭')
.setStyle(ButtonStyle.Primary)
);  
const hac = new ActionRowBuilder()
.addComponents(
 new ButtonBuilder()
.setCustomId('scviking')
.setLabel('🔙')
.setStyle(ButtonStyle.Primary),
new ButtonBuilder()
.setCustomId('ksz')
.setLabel('⏭')
.setStyle(ButtonStyle.Primary)
);             
const ksz = new ActionRowBuilder()
.addComponents(
 new ButtonBuilder()
.setCustomId('hacopter')
.setLabel('🔙')
.setStyle(ButtonStyle.Primary),
new ButtonBuilder()
.setCustomId('wg')
.setLabel('⏭')
.setStyle(ButtonStyle.Primary)
);   
const wg = new ActionRowBuilder()
.addComponents(
 new ButtonBuilder()
.setCustomId('kszombie')
.setLabel('🔙')
.setStyle(ButtonStyle.Primary),
new ButtonBuilder()
.setCustomId('bmr')
.setLabel('⏭')
.setStyle(ButtonStyle.Primary)
);   
const bmr = new ActionRowBuilder()
.addComponents(
 new ButtonBuilder()
.setCustomId('wgarg')
.setLabel('🔙')
.setStyle(ButtonStyle.Primary),
new ButtonBuilder()
.setCustomId('zdm')
.setLabel('⏭')
.setStyle(ButtonStyle.Primary)
);     
const zdm = new ActionRowBuilder()
.addComponents(
 new ButtonBuilder()
.setCustomId('bmrising')
.setLabel('🔙')
.setStyle(ButtonStyle.Primary),
new ButtonBuilder()
.setCustomId('trick')
.setLabel('⏭')
.setStyle(ButtonStyle.Primary)
);  
const trick = new ActionRowBuilder()
.addComponents(
 new ButtonBuilder()
.setCustomId('zdmech')
.setLabel('🔙')
.setStyle(ButtonStyle.Primary),
new ButtonBuilder()
.setCustomId('help')
.setLabel('⏭')
.setStyle(ButtonStyle.Primary)
);                      
			const pog = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
			.setCustomId('pog')
			.setLabel('Pot Of Gold')
			.setStyle(ButtonStyle.Success)
			.setEmoji('<:pot:1087161021602476182>')
		);
		const treats = new ActionRowBuilder()
		.addComponents(
			 new ButtonBuilder()
				.setCustomId('Sugarytreat')
				.setLabel('Sugarytreat')
				.setStyle(ButtonStyle.Success)
									.setEmoji('<:sugary:1087158928732860477>'),
						  new ButtonBuilder()
						 .setCustomId('Heartytreat')
				.setLabel('Healthytreat')
				.setStyle(ButtonStyle.Danger)
									.setEmoji('<:hearty:1087158979936919643>')
		);
		let bcards = new EmbedBuilder()
		.setTitle("Brainy Cards| <:Brainy:1062500939908530246>")
		.setDescription(`The cards in the brainhy class are 
 <@1043528908148052089> cardboardrobot
 <@1043528908148052089> chimmeneysweep 
 <@1043528908148052089> idz
 <@1043528908148052089> leprechaunimp 
 <@1043528908148052089> mustachewaxer 
 <@1043528908148052089> neutronimp 
 <@1043528908148052089> paparazzizombie 
 <@1043528908148052089> teleport 
 <@1043528908148052089> beammeup 
 <@1043528908148052089> cellphonezombie 
 <@1043528908148052089> cosmicscientist 
 <@1043528908148052089> cryobrain 
 <@1043528908148052089> evolutionaryleap 
 <@1043528908148052089> lurchforlunch 
 <@1043528908148052089> poolshark 
 <@1043528908148052089> teleportationzombie 
 <@1043528908148052089> leapstation
 <@1043528908148052089> zde
 <@1043528908148052089> brainvendor 
 <@1043528908148052089> duckstache 
 <@1043528908148052089> electrcian 
 <@1043528908148052089> funddeadraiser 
 <@1043528908148052089> gentlemanzombie 
 <@1043528908148052089> kiteflyer 
 <@1043528908148052089> medullanebula 
 <@1043528908148052089> moonwalker 
 <@1043528908148052089> mustachemonument 
 <@1043528908148052089> regiftingzombie 
 <@1043528908148052089> rocketscience 
 <@1043528908148052089> trickortreater 
 <@1043528908148052089> wgk
 <@1043528908148052089> zomblob 
 <@1043528908148052089> drummajor 
 <@1043528908148052089> madchemist 
 <@1043528908148052089> mountainclimber 
 <@1043528908148052089> parasolzombie 
 <@1043528908148052089> thinkingcap 
 <@1043528908148052089> triplication 
 <@1043528908148052089> coptercommando 
 <@1043528908148052089> gadetscientist 
 <@1043528908148052089> gargantuarmine 
 <@1043528908148052089> piratesbooty 
 <@1043528908148052089> portaltechnician 
 <@1043528908148052089> shieldcrusherviking 
 <@1043528908148052089> hailacopter 
 <@1043528908148052089> kitchensink 
 <@1043528908148052089> wizardgargantuar 
 <@1043528908148052089> badmoonrising 
 <@1043528908148052089> mecha
 <@1043528908148052089> trickster`
 )
.setThumbnail("https://media.discordapp.net/attachments/1044626284346605588/1126544909147570247/brainy.png")
		.setColor("Random")
		
			.setFooter({text: "To find out more info about the cards in Brainy class please use the commands listed above or click on the buttons below ⏬!"})
			const m = await	message.channel.send({embeds: [bcards], components: [row] } )
		let cbzombie = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/bb/CarboardRobotZombieCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226125917")
			.setTitle("Cardboard Robot Zombie | <:Brainy:1062500939908530246>")
			.setDescription("**- Science Zombie  -**")
			.addFields({name: "Stats", 
									value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									 name: "Set-Rarity", 
									 value: "**Basic - Common**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `He's Rustbolt's biggest fan.`
								 })
		.setColor("Random")			
	
			let csweep = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/b3/GrowthIndustry%21.png/revision/latest/scale-to-width-down/250?cb=20180701063258")
			.setTitle("Chimney Sweep | <:Brainy:1062500939908530246>")
			.setDescription("**- Professional Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability", 
									value: "**When played on Heights:** This gets +1<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Uncommon**"
								 },
								 {
									name: "Flavor Text",
									value: `It's a growth industry.`
								 })
		.setColor("Random")			
	
			let idzombie = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/75/Interdimensional_Zombie.png/revision/latest/scale-to-width-down/250?cb=20180209094903")
			.setTitle("Interdimensional Zombie | <:Brainy:1062500939908530246>")
			.setDescription("**- Science Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "When you play a Science card, this transforms into a random Zombie that costs 3<:Brainz:1062503146745774183>. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Legendary**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `In a parallel dimension, this Zombie is a Space Pirate. In another he's a Trash Can Zombie. Turns out, little choices in life can make a big difference.`
								 })
		.setColor("Random")			
	
			let limp = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/2c/Leprechaun_Imp_pvzh.png/revision/latest?cb=20180310220615")
			.setTitle("Leprechaun Imp | <:Brainy:1062500939908530246>")
			.setDescription("**-  Imp Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "**When played:** Shuffle a __Pot of Gold__ into your deck. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Event**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `When he offers to grant you a wish, do not wish for infinite wishes. It just doesn't work like that.`
								 })
		.setColor("Random")			
	
					let pot = new EmbedBuilder()
					.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/77/PotofGoldCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226110937")
			.setTitle("Pot of Gold | <:Brainy:1062500939908530246>")
			.setDescription("**- Party Trick  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "Draw three cards." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Token**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `The luck of the Zombies!`
								 })
		.setColor("Random")			
	
			let mwaxer = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/5d/MustacheWaxerHD.png/revision/latest/scale-to-width-down/250?cb=20180204185254")
			.setTitle("Mustache Waxer | <:Brainy:1062500939908530246>")
			.setDescription("**- Professional Mustache Zombie -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "When you play a Mustache, this gets +1<:Health:1062515540712751184> and you get +1<:Brainz:1062503146745774183>. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Triassic - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Customers have been telling him "Get a brain" for years now.`
								 })
		.setColor("Random")			
	
			let nimp = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/17/NeutronImp.png/revision/latest/scale-to-width-down/250?cb=20180510073630")
			.setTitle("Neutron Imp | <:Brainy:1062500939908530246>")
			.setDescription("**- Science Imp Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "When an Environment is played, this does a Bonus Attack."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `He's not small, he's just very compact.`
								 })
		.setColor("Random")			
	
		let pzombie = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/7d/Paparazzi.png/revision/latest/scale-to-width-down/250?cb=20180505173330")
			.setTitle("Paparazzi Zombie | <:Brainy:1062500939908530246>")
			.setDescription("**- Professional Party Zombie  -**")
			.addFields({name: "Stats", 
									value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability", 
									value: "This gets +1<:Strength:1062501774612779039>/+1 <:Health:1062515540712751184> when you play a Trick." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Basic - Common**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Why is everyone always screaming and running away in his photos?`
								 })
		.setColor("Random")			
	
					let tport = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/4c/Teleport_HD.png/revision/latest?cb=20181016041010")
			.setTitle("Teleport | <:Brainy:1062500939908530246>")
			.setDescription("**- Science Trick  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "You may play a Zombie when it's time for Tricks this turn. \n Draw a card." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Legendary**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Feels like cheating.`
								 })
		.setColor("Random")			
	
		let bmup = new EmbedBuilder()	
        .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/63/BeamMeUpCardImage.png/revision/latest/scale-to-width-down/250?cb=20170225221935")
			.setTitle("Beam Me Up | <:Brainy:1062500939908530246>")
			.setDescription("**- Science Trick  -**")
			.addFields({name: "Stats", 
									value: "2 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "Make a 2<:Strength:1062501774612779039>/3<:Health:1062515540712751184> Space Cadet Zombie." 
								 },
								 {
									name: "Set-Rarity", 
									value: "**Premium - Uncommon**" 
								 },
								 {
									name: "Flavor Text", 
									value: `A sure way to get a Space Cadet's attention.`
								 })
		.setColor("Random")			
	
    let cpzombie = new EmbedBuilder()
    .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/39/CellPhoneZombieCardImage.png/revision/latest/scale-to-width-down/250?cb=20170301204444")
.setTitle("Cell Phone Zombie | <:Brainy:1062500939908530246>")
.setDescription("**- Professional Zombie  -**")
.addFields({name: "Stats", 
                        value: "1 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
                     {
                         name: "Ability",  
                         value: "**When played:** Draw a card."
                     },
                     {
                         name: "Set-Rarity", 
                         value: "**Premium - Uncommon**"
                     },
                     {
                         name: "Flavor Text", 
                         value: `Hang on - he's got to take this.`
                     })
.setColor("Random")			

let cbrain = new EmbedBuilder()			
.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/8a/CryoBrainCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226140501")
.setTitle("Cryo-Brain | <:Brainy:1062500939908530246>")
.setDescription("**- Gourmet Science Trick  -**")
.addFields({name: "Stats", 
                        value: "2 <:Brainz:1062503146745774183>"},
                     {
                        name: "Ability",  
                        value: "You get +1<:Brainz:1062503146745774183> for the rest of the game." 
                     },
                     {
                         name: "Set-Rarity", 
                         value: "**Galactic - Uncommon**"
                     },
                     {
                         name: "Flavor Text", 
                         value: `Putting brains on ice is the best way to keep them fresh. Ask any Zombie.`
                     })
.setColor("Random")			

let eleap = new EmbedBuilder()
.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/88/Evolutionary_Leap_textures.png/revision/latest?cb=20170830154251")
.setTitle("Evolutionary Leap | <:Brainy:1062500939908530246>")
.setDescription("**- History Trick  -**")
.addFields({name: "Stats", 
                    value: "2 <:Brainz:1062503146745774183>"},
                 {
                    name: "Ability",  
                    value: "Transform a Zombie into a random Zombie that costs +1<:Brainz:1062503146745774183> more." 
                 },
                 {
                     name: "Set-Rarity", 
                     value: "**Colossal - Super-Rare**"
                 },
                 {
                     name: "Flavor Text", 
                     value: `When Dr. Zomboss sent Meteor Z and Huge-Gigantacus from space, they smashed a tunnel to the center of the Earth. There, Plants and Zombies have evolved into insane new forms.`
                 })
.setColor("Random")			

let lflunch = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/f4/LurchForLunchCardSprite.png/revision/latest/scale-to-width-down/250?cb=20170225125305")
			.setTitle("Lurch for Lunch | <:Brainy:1062500939908530246>")
			.setDescription("**- Gourmet Trick  -**")
			.addFields({name: "Stats", 
									value: "2 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "A Zombie does a Bonus Attack. " 
								 },
								 {
									 name:"Set-Rarity", 
									 value: "**Basic - Common**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Will work overtime for food.`
								 })
		.setColor("Random")			
	
	let psahark = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/13/PoolSharkCardSprite.png/revision/latest/scale-to-width-down/250?cb=20170225131633")
			.setTitle("Pool Shark | <:Brainy:1062500939908530246>")
			.setDescription("**- Mustache Sports Zombie  -**")
			.addFields({name: "Stats", 
									value: "3 <:Bullseye:1062501003313819678>, 1 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
								 {
									 name: "Traits", 
									 value: "<:Bullseye:1062501003313819678>__Bullseye__"
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Not actually a shark.`
								 })
		.setColor("Random")			
	
	let tpzombie = new EmbedBuilder()
	.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/Tpzombie.png/revision/latest/scale-to-width-down/250?cb=20180313113038")
	.setTitle("Teleportation Zombie | <:Brainy:1062500939908530246>")
	.setDescription("**- Science Zombie   -**")
	.addFields({name: "Stats", 
							value: "1 <:Bullseye:1062501003313819678>, 5 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
						 {
							 name: "Traits", 
							 value: "__Gravestone__, <:Bullseye:1062501003313819678>__Bullseye__"
						 },
						 {
							 name: "Ability",  
							 value: "You can play Zombies when it's time for Tricks. "
						 },
						 {
							 name: "Set-Rarity", 
							 value: "**Galactic - Legendary**"
						 },
						 {
							 name: "Flavor Text", 
							 value: `The phone cord stretches to another dimension.`
						 })
.setColor("Random")			

let tsation = new EmbedBuilder()
.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/1/11/RaptorGroundCardImage.png/revision/latest?cb=20170924012716")
.setTitle("Transformation Station | <:Brainy:1062500939908530246>")
.setDescription("**- Science Environment  -**")
.addFields({name: "Stats", 
						value: "2 <:Brainz:1062503146745774183>"},
					 {
						 name: "Ability",  
						 value: "**Start of Turn:** Transform the Zombie here into a random Zombie that costs 1<:Brainz:1062503146745774183> more."
					 },
					 {
						 name: "Set-Rarity", 
						 value: "**Galactic - Super-Rare**"
					 },
					 {
						 name: "Flavor Text", 
						 value: `According to the Transformation Station brochure, every Zombie who visits is guaranteed to shuffle away feeling like a brand new Zombie.`
					 })
.setColor("Random")			

let zdengineer = new EmbedBuilder()
      .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/b2/HD_Zombot_Drone_Engineer_by_Flag_Zombie.png/revision/latest?cb=20210110220602")
			.setTitle("Zombot Drone Engineer | <:Brainy:1062500939908530246>")
			.setDescription("**- Mustache Science Zombie  -**")
			.addFields({name: "Stats", 
                  value: "1 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"
                 },
                 {
                   name: "Trait", 
                   value: "__Gravestone__"
                 },
                 {
                   name: "Ability", 
                   value: "When a Science Zombie does damage, that Zombie gets +1<:Strength:1062501774612779039>. "
                 },
                 {
                   name: "Set-Rarity", 
                   value: "**Premium - Uncommon**"
                 },
                 {
                   name: "Flavor Text", 
                   value: "He's not entirely sure how to fly this thing."
                 })
		.setColor("Random")			
	
	let bvendor = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/5c/BrainVendorCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226165700")
			.setTitle("Brain Vendor | <:Brainy:1062500939908530246>")
			.setDescription("**- Gourmet Sports Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 1 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "**When played:** You get +3<:Brainz:1062503146745774183> this turn. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: "Sells only 100% organic brains."
								 }
							)
		.setColor("Random")			
	
	let dstatche = new EmbedBuilder()
	.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/d/dc/Duckstache_but_he_looks_edible.png/revision/latest/scale-to-width-down/250?cb=20191014003207")
	.setTitle("Duckstache | <:Brainy:1062500939908530246>")
	.setDescription("**- Pet Mustache Zombie  -**")
	.addFields({name: "Stats", 
							value: "3 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
						 {
							 name: "Ability",  value: "**When this does damage:** __Conjure__ a Mustache. \n __Mustache Evolution:__ This gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184>."
						 },
						 {
							 name: "Set-Rarity", 
							 value: "**Triassic - Super-Rare**"
						 },
						 {
							name: "Flavor Text", 
							value: "Determined to find every Mustache Monument in Hollow Earth., Neptuna brought in the experts."
						 })
.setColor("Random")			

let electrcian = new EmbedBuilder()
.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/7f/PvZH_Electrician_HD.png/revision/latest/scale-to-width-down/250?cb=20161012010103")
.setTitle("Electrician | <:Brainy:1062500939908530246>")
.setDescription("**- Mustache Science Zombie-**")
.addFields({name: "Stats", 
					value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
				 {
					 name: "Trait", 
					 value: "__Gravestone__"
				 },
				 {
					 name: "Ability", 
					 value: "**When revealed:** A Zombie does a Bonus Attack."
				 },
				 {
					 name: "Set-Rarity", 
					 value: "**Premium - Super-Rare**"
				 },
				 {
					 name: "Flavor Text", 
					 value: `He charges for the full hour.`
				 })
.setColor("Random")			

let fdraiser = new EmbedBuilder()
.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/93/FunDeadRaiserCardSprite.png/revision/latest?cb=20170225140016")
.setTitle("Fun-Dead Raiser | <:Brainy:1062500939908530246>")
.setDescription("**- Party Trick  -**")
.addFields({name: "Stats", 
						value: "3 <:Brainz:1062503146745774183>"},
					 {
						 name: "Ability", 
						 value: "Draw two cards."
					 },
					 {
						 name: "Set-Rarity", 
						 value:"**Basic - Common**"
					 },
					 {
						 name: "Flavor Text", 
						 value: `Pledge now and get two Zombies plus a free tote bag.`
					 })
.setColor("Random")

let gzombie = new EmbedBuilder()		
.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/ca/HDgentlemanzombie.png/revision/latest/scale-to-width-down/250?cb=20170104015931")
.setTitle("Gentleman Zombie | <:Brainy:1062500939908530246>")
.setDescription("**- Mustache Party Zombie  -**")
.addFields({name: "Stats", 
						value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
				{
					name: "Trait", value: "__Gravestone__"	 
					},
					 {
						name: "Ability",  
						value: "**Start of Tricks:** You get +2<:Brainz:1062503146745774183> this turn."
					 },
					 {
					name: "Set-Rarity", 	
					value: "**Premium - Rare**"	 
					 },
					 {
					name: "Flavor Text", 
					value: `Life comes and goes, but proper manners are forever.`})
.setColor("Random")			

let kflyer = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/36/KiteFlyerCardImage.png/revision/latest/scale-to-width-down/250?cb=20170301171553")
			.setTitle("Kite Flyer | <:Brainy:1062500939908530246>")
			.setDescription("**- History Science Zombie  -**")
			.addFields({name: "Stats", 
									value: "1 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
								 {
									 name: "Trait", 
									 value: "__Gravestone__"
								 },
								 {
									 name: "Ability",  
									 value: "When this does damage, draw a card."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `The naysayers were right. Flying a kite in lightning storm WAS a real bright idea.`
								 })
		.setColor("Random")			
	
	let mneb = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/a0/BrainSiloCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226135709")
			.setTitle("Medulla Nebula | <:Brainy:1062500939908530246>")
			.setDescription("**-  Gourmet Environment  -**")
			.addFields({name: "Stats", 
									value: "3 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "When you play a Zombie here, you get +2<:Brainz:1062503146745774183> this turn."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Zombies often find brains in space. It's usually the space between your ears.`
								 })
		.setColor("Random")			
	
	let mwalker = new EmbedBuilder()
	.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/92/MoonWalk.png/revision/latest/scale-to-width-down/250?cb=20180502114833")
	.setTitle("Moonwalker | <:Brainy:1062500939908530246>")
	.setDescription("**- Dancing Science Zombie  -**")
	.addFields({name: "Stats", 
							value: "2 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
						 {
							name: "Ability",  
							 value: "**When played on Heights or an Environment:** This gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184>." 
						 },
						 {
							 name: "Set-Rarity", 
							 value: "**Galactic - Uncommon**"
						 },
						 {
							 name: "Flavor Text", 
							 value: `That's one small nibble for Zombies, one giant bite for Zombiekind.`
						 })
.setColor("Random")			

let monument = new EmbedBuilder()
.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/44/HD-MustacheMonument.png/revision/latest/scale-to-width-down/250?cb=20180306223652")
.setTitle("Mustache Monument | <:Brainy:1062500939908530246>")
.setDescription("**- Mustache History Zombie  -**")
.addFields({name: "Stats", 
						value: "1 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
					 {
						name: "Ability",  
						value: "__Fusion:__ A Zombie played on this does a Bonus Attack. " 
					 },
					 {
						 name: "Set-Rarity", 
						 value: "**Triassic - Rare**"
					 },
					 {
						 name: "Flavor Text", 
						 value: `If Neptuna's Triassic invasion force can align all of Hollow Earth's Monuments at once, she will become truly unstoppable.`
					 })
.setColor("Random")			

let rzombie = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/5/51/REgift.png/revision/latest/scale-to-width-down/250?cb=20180325231534")
			.setTitle("Regifting Zombie | <:Brainy:1062500939908530246>")
			.setDescription("**- Party Pirate Zombie  -**")
			.addFields({name: "Stats", 
									value: "3 <:Strength:1062501774612779039>, 2 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
								 {
									 name: "Ability",  
									 value: "**When played:** Each player draws two cards."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Event**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Regifting: Is it really an embarrassing social faux pas? Or is it just good ol' recycling?`
								 })
		.setColor("Random")			
	
	let rscience= new EmbedBuilder()
	.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/cc/RocketScienceCardImage.png/revision/latest/scale-to-width-down/250?cb=20170227185504")
	.setTitle("Rocket Science | <:Brainy:1062500939908530246>")
	.setDescription("**-  Science Barrel Trick  -**")
	.addFields({name: "Stats", 
							value: "3 <:Brainz:1062503146745774183>"},
						 {
							 name: "Ability",  
							 value: "Destroy a Plant that has 4<:Strength:1062501774612779039> or more."
						 },
						 {
							 name: "Set-Rarity", 
							 value: "**Premium - Super-Rare**"
						 },
						 {
							 name: "Flavor Text", 
							 value: `Turns out, it IS rocket science.`
						 })
.setColor("Random")			

let totreater = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/2b/Trick_or_Treater.png/revision/latest/scale-to-width-down/250?cb=20171130094628")
			.setTitle("Trick-or-Treater | <:Brainy:1062500939908530246>")
			.setDescription("**- Gourmet Party Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Gravestone__" 
								 },
								 {
									 name: "Ability",  
									 value: "When you play your first Trick each turn, __Conjure__ a __Healthy Treat__ or __Sugary Treat.__"
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Event**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Trick or treat? He is haunted by that question - and by an answer that continues to elude him.`
								 })
	
			let sugary = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e2/SugaryTreatCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226102512")
			.setTitle("Sugary Treat | <:Crazy:1062502046474973224>")
			.setDescription("**- Gourmet Trick  -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "A Zombie gets +3<:Strength:1062501774612779039>/+1<:Health:1062515540712751184>." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Colossal - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Tooth decay: Not exactly a big concern for Zombies.`
								 })
		.setColor("Random")			
	
				let hearty = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/8e/Healthhh.png/revision/latest/scale-to-width-down/250?cb=20170107053505")
			.setTitle("Healthy Treat | <:Hearty:1062501636557242429>")
			.setDescription("**- Gourmet Trick -**")
			.addFields({name: "Stats", 
									value: "1 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "A Zombie gets +1<:Strength:1062501774612779039>/+3<:Health:1062515540712751184>." 
								 },
								 {
									name: "Set-Rarity", 
									value: "**Colossal - Uncommon**" 
								 },
								 {
									 name: "Flavor Text", 
									 value: `Great for Zombie Health. Like a vitamin only sweeter.`
								 })
		.setColor("Random")			
	
	let wgkeeper = new EmbedBuilder()
	.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/3/3c/Wormhole_Gatekeeper.png/revision/latest/scale-to-width-down/250?cb=20161019181010")
		  .setTitle("Wormhole Gatekeeper | <:Brainy:1062500939908530246>")
		  .setDescription("**- History Science Zombie  -**")
		  .addFields({name: "Stats", 
				value: "2 <:Bullseye:1062501003313819678>, 5 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"
			   },
			   {
				 name: "Trait", 
				 value: "<:Bullseye:1062501003313819678>__Bullseye__"
			   },
			   {
				 name: "Ability", 
				 value: "Each player draws an extra card each turn."
			   },
			   {
				 name: "Set-Rarity", 
				 value: "**Galactic - Super-Rare**"
			   },
			   {
				 name: "Flavor Text", 
				 value: `"Stand here and guard this gate with your unlife," she was told. And that's what she's been doing ever since.`
			   })
	  .setColor("Random")			
  
  let zblob = new EmbedBuilder()
  .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e1/Zomblob.png/revision/latest/scale-to-width-down/250?cb=20180510074144")
		.setTitle("Zom-Blob | <:Brainy:1062500939908530246>")
		.setDescription("**- Monster Zombie  -**")
		.addFields({name: "Stats", 
			  value: "1 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 3 <:Brainz:1062503146745774183>"
			 },
			 {
			   name: "Ability", 
			   value: "__Zombie Evolution:__ This gets +1<:Strength:1062501774612779039> for each Brain you got this turn."
			 },
			 {
			   name: "Set-Rarity", 
			   value: "**Colossal - Rare**"
			 },
			 {
			   name: "Flavor Text", 
			   value: `This is why you shouldn't drink primordial soup.`
			 })
	.setColor("Random")			

let dmajor = new EmbedBuilder()
.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/c/c3/HDrumm_Ajor.png/revision/latest/scale-to-width-down/250?cb=20170729231012")
.setTitle("Drum Major | <:Brainy:1062500939908530246>")
.setDescription("**- Dancing Sports Zombie  -**")
.addFields({name: "Stats", value: "4 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>"},
				 {
					 name: "Set-Rarity", 
					 value: "**Basic - Common**"
				 },
				 {
					name: "Flavor Text", 
					value: `Recently promoted from Drum Minor.` 
				 })
.setColor("Random")			

let mchemist = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/a7/MadChemistCardImage.png/revision/latest/scale-to-width-down/250?cb=20170302193332")
			.setTitle("Mad Chemist | <:Brainy:1062500939908530246>")
			.setDescription("**- Science Zombie  -**")
			.addFields({name: "Stats", 
									value: "3 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "__Gravestone__" 
								 },
								 {
									 name: "Ability",  
									 value: "When you play your first Trick each turn, __Conjure__ a Trick."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									value: `He's not much "mad" as he is "mildly annoyed."`
								 })
		.setColor("Random")			
	
	let mclimber = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/0/0a/Mountain_Climber_HD.png/revision/latest/scale-to-width-down/250?cb=20161012005142")
			.setTitle("Mountain Climber | <:Brainy:1062500939908530246>")
			.setDescription("**- Sports Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Bullseye:1062501003313819678>, 2 <:Health:1062515540712751184>, 4 <:Brainz:1062503146745774183>"},
								 {
									name: "Trait", 
									value: "<:Bullseye:1062501003313819678>__Bullseye__" 
								 },
								 {
									 name: "Ability",  
									 value: "**When played on Heights:** This gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184>.  "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Uncommon**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `She's climbed 'em all: Everest. K2. Your house.`
								 })
		.setColor("Random")			
	
	let pzombi = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/f/f6/Parasol_Zombie_Cardface.png/revision/latest?cb=20170701060011")
			.setTitle("Parasol Zombie | <:Brainy:1062500939908530246>")
			.setDescription("**- Party Zombie -**")
			.addFields({name: "Stats", 
									value: "3 <:Strength:1062501774612779039>, 6 <:Untrickable:1062501535126409277>, 4 <:Brainz:1062503146745774183>"},
								 {
									name: "Traits", 
									value: "<:Untrickable:1062501535126409277>__Untrickable__" 
								 },
								 {
									 name: "Ability",  
									 value: "Zombies next door are <:Untrickable:1062501535126409277>__Untrickable__. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Colossal - Super-Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Her favorite author is Brain Austen.`
								 })
		.setColor("Random")			
	
	let cscience = new EmbedBuilder()
	.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/41/CosmicScientistCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226140339")
.setTitle("Cosmic Scientist | <:Brainy:1062500939908530246>")
.setDescription("**- Science Zombie  -**")
.addFields({name: "Stats", 
						value: "1 <:Bullseye:1062501003313819678>, 2 <:Health:1062515540712751184>, 2 <:Brainz:1062503146745774183>"},
					 {
						name: "Trait",
						value: "<:Bullseye:1062501003313819678>__Bullseye__" 
					 },
					 {
						 name: "Ability",  
						 value: "**When played:** __Conjure__ a Science card, and it gets <:Bullseye:1062501003313819678>__Bullseye__."
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

	let tcap = new EmbedBuilder()
	.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/ed/Thinking_Cap_card_face.png/revision/latest?cb=20171022084127")
	.setTitle("Thinking Cap | <:Brainy:1062500939908530246>")
	.setDescription("**- Gourmet  Trick  -**")
	.addFields({name: "Stats", 
							value: "4 <:Brainz:1062503146745774183>"},
						 {
							name: "Ability",  
							value: "__Conjure__ two Superpowers." 
						 },
						 {
							 name: "Set-Rarity", 
							 value: "**Event**"
						 },
						 {
							 name: "Flavor Text", 
							 value: `Only the best and brainiest University Zombies graduate to using full-fledged Superpowers.`
						 })
.setColor("Random")			

let triplication = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/8/89/TriplicationCardImage.png/revision/latest/scale-to-width-down/250?cb=20170226144237")
			.setTitle("Triplication | <:Brainy:1062500939908530246>")
			.setDescription("**- Imp Gargantuar Trick  -**")
			.addFields({name: "Stats", 
									value: "4 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "__Conjure__ an Imp, a Zombie, and a Gargantuar. " 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Galactic - Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `An Imp, a Zombie, and a Gargantuar walk into a bar...`
								 })
		.setColor("Random")			
	
	let commando = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/d/d9/CopterCommandoCardImage.png/revision/latest/scale-to-width-down/250?cb=20170227185815")
			.setTitle("Copter Commando | <:Brainy:1062500939908530246>")
			.setDescription("**- Science Imp Zombie  -**")
			.addFields({name: "Stats", 
									value: "6 <:Strength:1062501774612779039>, 5 <:Health:1062515540712751184>, 5 <:Brainz:1062503146745774183>"},
								 {
									name: "Set-Rarity", 
									value: "**Colossal - Uncommon**" 
								 },
								 {
									 name: "Flavor Text", 
									 value: `Refuses to fly over water due to a severe case of aquaphobia.`
								 })
		.setColor("Random")			
	
	let gscientist = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/6b/GadgetScientistCardImage.png/revision/latest/scale-to-width-down/250?cb=20170302181404")
			.setTitle("Gadget Scientist | <:Brainy:1062500939908530246>")
			.setDescription("**- Science Zombie  -**")
			.addFields({name: "Stats", 
									value: "2 <:Strength:1062501774612779039>, 3 <:Health:1062515540712751184>, 5 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									 value: "**When played:** Each Science Zombie does a Bonus Attack." 
								 },
								 {
									name: "Set-Rarity", 
									value: "**Premium - Rare**" 
								 },
								 {
									 name: "Flavor Text", 
									 value: `Wishes the Mad Chemist would stop copying his hair style.`
								 })
		.setColor("Random")			
	
	let gmine = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/d/d6/MimeGargHD.png/revision/latest/scale-to-width-down/250?cb=20171128184309")
			.setTitle("Gargantuar Mime | <:Brainy:1062500939908530246>")
			.setDescription("**- Gargantuar Mime Zombie  -**")
			.addFields({name: "Stats", 
									value: "5 <:Strength:1062501774612779039>, 7 <:Health:1062515540712751184>, 5 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "When a non-Mime Plant or Zombie does a Bonus Attack, this does a Bonus Attack. " 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Colossal - Legendary**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `The Gargantuar Mime groans like any other zombie. He just does it silently and in French.`
								 })
		.setColor("Random")			
	
	let pbooty = new EmbedBuilder()
	.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/a/ae/Pot_of_Silver_cardface.png/revision/latest?cb=20170701060324")
	.setTitle("Pirate's Booty | <:Brainy:1062500939908530246>")
	.setDescription("**- Pirate Barrel Trick  -**")
	.addFields({name: "Stats", 
							value: "5 <:Brainz:1062503146745774183>"},
						 {
							name: "Ability",  
							value: "Draw a card for each Zombie. " 
						 },
						 {
							 name: "Set-Rarity", 
							 value: "**Triassic - Uncommon**"
						 },
						 {
							 name: "Flavor Text", 
							 value: `Zombie Pirates kick a lot of booty. Maybe someday they'll figure out to spend it.`
						 })
.setColor("Random")			

let ptech = new EmbedBuilder()
.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/e/e0/HDDD.png/revision/latest/scale-to-width-down/250?cb=20170107111400")
.setTitle("Portal Technician | <:Brainy:1062500939908530246>")
.setDescription("**- Mustache Science Zombie   -**")
.addFields({name: "Stats", 
						value: "4 <:Strength:1062501774612779039>, 4 <:Health:1062515540712751184>, 5 <:Brainz:1062503146745774183>"},
					 {
						name:"Ability",  
						value: "**When destroyed:** Make a random Zombie here. "	 
					 },
					 {
						 name: "Set-Rarity", 
						 value: "**Premium - Super-Rare**"
					 },
					 {
						 name: "Flavor Text", 
						 value: `Soon everyone will own their own portal. But for now, he enjoys being an early adopter.`
					 })
.setColor("Random")			

let scviking = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/4/4b/ShieldcrusherViking.png/revision/latest/scale-to-width-down/1000?cb=20170831054602")
			.setTitle("Shieldcrusher Viking | <:Brainy:1062500939908530246>")
			.setDescription("**- Mustache Pirate Zombie  -**")
			.addFields({name: "Stats", 
									value: "7 <:Bullseye:1062501003313819678>, 5 <:Health:1062515540712751184>, 5 <:Brainz:1062503146745774183>"},
								 {
									 name: "Trait", 
									 value: "<:Bullseye:1062501003313819678>__Bullseye__"
								 },
								 {
									 name: "Ability",  
									 value: "When this hurts the Plant Hero, empty their Block Meter. "
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Legendary**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Been crushing shields since the 9th Century. Has gotten pretty darn good at it.`
								 })
		.setColor("Random")			
	
	let hacopter = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/7/7c/HailaCopterCardImage.png/revision/latest?cb=20180921112021")
			.setTitle("Hail-a-Copter | <:Brainy:1062500939908530246>")
			.setDescription("**- Science Imp Trick  -**")
			.addFields({name:"Stats", 
									value: "6 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									 value: "Make a 6<:Strength:1062501774612779039>/5<:Health:1062515540712751184> Copter Commando Imp. " 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Rare**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Refuses to fly over water due to a severe case of aquaphobia.`
								 })
		.setColor("Random")			
	
	let kszombie = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/b/b3/KitchenSinkZombie.png/revision/latest/scale-to-width-down/250?cb=20180204211006")
			.setTitle("Kitchen Sink Zombie | <:Brainy:1062500939908530246>")
			.setDescription("**- Professional Mustache Zombie   -**")
			.addFields({name: "Stats", 
									value: "3 <:Special:1062502467092357160>, 6 <:Armored:1062502392005922919>, 6 <:Brainz:1062503146745774183>"},
								 {
									name: "Traits", 
									value: "<:Bullseye:1062501003313819678>__Bullseye__, <:Frenzy:1062501819592491108>__Frenzy__, <:Armored:1062502392005922919>__Armored 1__, <:Overshoot:1062764273417339052>__Overshoot 2__, <:AntiHero:1062501067700568074>__Anti-Hero 3__" 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Event**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `He's got everything but the - no wait, he's got that too.`
								 })
		.setColor("Random")			
	
	let wgarg = new EmbedBuilder()
	.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/6/6a/HDWG.png/revision/latest/scale-to-width-down/250?cb=20170107071428")
		  .setTitle("Wizard Gargantuar | <:Brainy:1062500939908530246>")
		  .setDescription("**- Mustache Gargantuar Zombie   -**")
		  .addFields({name: "Stats", 
				value: "6 <:Bullseye:1062501003313819678>, 7 <:Health:1062515540712751184>, 6 <:Brainz:1062503146745774183>"
			   },
			   {
				 name: "Ability",  
				 value: "All Gargantuars have <:Bullseye:1062501003313819678>__Bullseye__. "
			   },
			   {
				 name: "Set-Rarity", 
				 value: "**Premium - Rare**"
			   },
			   {
				 name: "Flavor Text", 
				 value: `A wizard did it. An enormous, green, Zombie wizard. `
			   })
	  .setColor("Random")			
  
  let bmrising = new EmbedBuilder()			
  .setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/2/2b/Bad_Moon_RisingH.png/revision/latest?cb=20170801062736")
  .setTitle("Bad Moon Rising | <:Brainy:1062500939908530246>")
  .setDescription("**- Trick  -**")
  .addFields({
						  name: "Stats", 
						  value: "7 <:Brainz:1062503146745774183>"
					  },
					   {
						   name: "Ability",  
						   value: "Transform all Zombies into random Zombies that cost 5<:Brainz:1062503146745774183> or more. "
					   },
					   {
						  name: "Set-Rarity", 
						  value: "**Event**" 
					   },
					   {
						   name: "Flavor Text", 
						   value: `Sometimes a full moon turns bad dreams into 	 
horrible nightmares`
					   })
.setColor("Random")			

let zdmech = new EmbedBuilder()
				.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/d/d9/ZombotDinotronicMechasaurHD.png/revision/latest/scale-to-width-down/250?cb=20180204123057")
			.setTitle("Zombot Dinotronic Mechasaur | <:Brainy:1062500939908530246>")
			.setDescription("**- Science Pet Zombie  -**")
			.addFields({name: "Stats", 
									value: "6 <:Bullseye:1062501003313819678>, 7 <:Health:1062515540712751184>, 7 <:Brainz:1062503146745774183>"},
								 {
									name: "Traits", 
									value: "<:Bullseye:1062501003313819678>__Bullseye__" 
								 },
								 {
									 name: "Ability",  
									 value: "__Dino-Roar__: Make a random History Zombie in a random lane."
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Triassic - Legendary**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `What's better than a dinosaur? A gigantic, metal, laser monster that gates in four more dinosaurs.`
								 })
		.setColor("Random")			
	
	let ster = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/plantsvszombies/images/9/99/TricksterHD2.png/revision/latest/scale-to-width-down/250?cb=20170524083128")
			.setTitle("Trickster | <:Brainy:1062500939908530246>")
			.setDescription("**- Party Zombie  -**")
			.addFields({name: "Stats", 
									value: "6 <:Strength:1062501774612779039>, 6 <:Health:1062515540712751184>, 10 <:Brainz:1062503146745774183>"},
								 {
									name: "Ability",  
									value: "**While in your hand:** This costs 1<:Brainz:1062503146745774183> less when you play a Trick. \n **When played:** This does a Bonus Attack." 
								 },
								 {
									 name: "Set-Rarity", 
									 value: "**Premium - Legendary**"
								 },
								 {
									 name: "Flavor Text", 
									 value: `Never gets tired of the the rubber chicken gag.`
								 })
		.setColor("Random")			
	
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter})
		collector.on("collect", async i => {
			if(i.customId == 'cbz'){
				await i.update({embeds: [cbzombie], components: [cbz]})
			}
			if(i.customId == 'helpbc'){
				await i.update({embeds: [bcards], components: [row] } )
			}
			if(i.customId == 'cs'){
				await i.update({embeds: [csweep], components: [cs]})
			}
					if(i.customId == 'cbzombie'){
				await i.update({embeds: [cbzombie], components: [cbz]})
			}
			if(i.customId == 'idz'){
				await i.update({embeds: [idzombie], components: [idz]})
			}
			if(i.customId == 'csweep'){
				await i.update({embeds: [csweep], components: [cs]})
			}
			if(i.customId == 'li'){
				await i.update({embeds: [limp], components: [li, pog]})
			}
						if(i.customId == 'idzombie'){
				await i.update({embeds: [idzombie], components: [idz]})
			}
					if(i.customId == 'limp'){
				await i.update({embeds: [limp], components: [li, pog]})
			}
			if(i.customId == 'pog'){
				await i.reply({embeds: [pot], ephemeral: true})
			}
			if(i.customId == 'mw'){
				await i.update({embeds: [mwaxer], components: [mw]})
			}
			if(i.customId == 'ni'){
				await i.update({embeds: [nimp], components: [ni]})
			}
				if(i.customId == 'mwaxer'){
				await i.update({embeds: [mwaxer], components: [mw]})
			}
			if(i.customId == 'pz'){
				await i.update({embeds: [pzombie], components: [pz]})
			}
				if(i.customId == 'nimp'){
				await i.update({embeds: [nimp], components: [ni]})
			}
			if(i.customId == 'tp'){
				await i.update({embeds: [tport], components: [tp]})
			}
				if(i.customId == 'pzombie'){
				await i.update({embeds: [pzombie], components: [pz]})
			}
			if(i.customId == 'tport'){
				await i.update({embeds: [tport], components: [tp]})
			}
			if(i.customId == 'bmu'){
				await i.update({embeds: [bmup], components: [bmu]})
			}
            if(i.customId == 'cpz'){
                await i.update({embeds: [cpzombie], components: [cpz]})
            }
			if(i.customId == 'csci'){
				await i.update({embeds: [cscience], components: [csci]})
			}
			if(i.customId == 'cscience'){
				await i.update({embeds: [cscience], components: [csci]})
			}
            if(i.customId == 'bmup'){
				await i.update({embeds: [bmup], components: [bmu]})
			}
            if(i.customId == 'cb'){
                await i.update({embeds: [cbrain], components: [cb]})
            }
            if(i.customId == 'cpzombie'){
                await i.update({embeds: [cpzombie], components: [cpz]})
            }
            if(i.customId == 'el'){
                await i.update({embeds: [eleap], components: [el]})
            }
            if(i.customId == 'cbrain'){
                await i.update({embeds: [cbrain], components: [cb]})
            }
            if(i.customId == 'lfl'){
                await i.update({embeds: [lflunch], components: [lfl]})
            }
            if(i.customId == 'eleap'){
                await i.update({embeds: [eleap], components: [el]})
            }
			if(i.customId == 'ps'){
				await i.update({embeds: [psahark], components: [ps]})
			}
			if(i.customId == 'lflunch'){
                await i.update({embeds: [lflunch], components: [lfl]})
            }
			if(i.customId == 'tpz'){
				await i.update({embeds: [tpzombie], components: [tpz]})
			}
			if(i.customId == 'pshark'){
				await i.update({embeds: [psahark], components: [ps]})
			}
			if(i.customId == 'ts'){
				await i.update({embeds: [tsation], components: [ts]})
			}
			if(i.customId == 'tpzombie'){
				await i.update({embeds: [tpzombie], components: [tpz]})
			}
			if(i.customId == 'tstation'){
				await i.update({embeds: [tsation], components: [ts]})
			}
			if(i.customId == 'zde'){
				await i.update({embeds: [zdengineer], components: [zde]})
			}
			if(i.customId == 'bv'){
				await i.update({embeds: [bvendor], components: [bv]})
			}
			if(i.customId == 'zdeng'){
				await i.update({embeds: [zdengineer], components: [zde]})
			}
			if(i.customId == 'ds'){
				await i.update({embeds: [dstatche], components: [ds]})
			}
			if(i.customId == 'bvendor'){
				await i.update({embeds: [bvendor], components: [bv]})
			}
			if(i.customId == 'ele'){
				await i.update({embeds: [electrcian], components: [ele]})
			}
			if(i.customId == 'dstache'){
				await i.update({embeds: [dstatche], components: [ds]})
			}
			if(i.customId == 'fdr'){
				await i.update({embeds: [fdraiser], components: [fdr]})
			}
			if(i.customId == 'elect'){
				await i.update({embeds: [electrcian], components: [ele]})
			}
			if(i.customId == 'gz'){
				await i.update({embeds: [gzombie], components: [gz]})
			}
			if(i.customId == 'kf'){
				await i.update({embeds: [kflyer], components: [kf]})
			}
			if(i.customId == 'gzombie'){
				await i.update({embeds: [gzombie], components: [gz]})
			}
			if(i.customId == 'mn'){
				await i.update({embeds: [mneb], components: [mn]})
			}
			if(i.customId == 'kflyer'){
				await i.update({embeds: [kflyer], components: [kf]})
			}
			if(i.customId == 'mwalk'){
				await i.update({embeds: [mwalker], components: [mwalk]})
			}
			if(i.customId == 'mneb'){
				await i.update({embeds: [mneb], components: [mn]})
			}
			if(i.customId == 'mm'){
				await i.update({embeds: [monument], components: [mm]})
			}
			if(i.customId == 'rz'){
				await i.update({embeds: [rzombie], components: [rz]})
			}
			if(i.customId == 'monument'){
				await i.update({embeds: [monument], components: [mm]})
			}
			if(i.customId == 'mwalker'){
				await i.update({embeds: [mwalker], components: [mwalk]})
			}
			if(i.customId == 'rs'){
				await i.update({embeds: [rscience], components: [rs]})
			}
			if(i.customId == 'rzombie'){
				await i.update({embeds: [rzombie], components: [rz]})
			}
			if(i.customId == 'tot'){
				await i.update({embeds: [totreater], components: [tot, treats]})
			}
			if (i.customId == 'Heartytreat')  	{
				await i.reply({embeds: [ hearty ], ephemeral: true } )
			}
				if (i.customId == 'Sugarytreat') { 	
				await i.reply({embeds: [ sugary ], ephemeral: true } )
				}
				if(i.customId == 'rscience'){
					await i.update({embeds: [rscience], components: [rs]})
				}
				if(i.customId == 'wgk'){
					await i.update({embeds: [wgkeeper], components: [wgk]})
				}
				if(i.customId == 'totreater'){
					await i.update({embeds: [totreater], components: [tot, treats]})
				}
				if(i.customId == 'zb'){
					await i.update({embeds: [zblob], components: [zb]})
				}
				if(i.customId == 'wgkeeper'){
					await i.update({embeds: [wgkeeper], components: [wgk]})
				}
				if(i.customId == 'dm'){
					await i.update({embeds: [dmajor], components: [dm]})
				}
				if(i.customId == 'zblob'){
					await i.update({embeds: [zblob], components: [zb]})
				}
				if(i.customId == 'mc'){
					await i.update({embeds: [mchemist], components: [mc]})
				}
				if(i.customId == 'dmajor'){
					await i.update({embeds: [dmajor], components: [dm]})
				}
				if(i.customId == 'mclimb'){
					await i.update({embeds: [mclimber], components: [mclimb] })
				}
				if(i.customId == 'mchemist'){
					await i.update({embeds: [mchemist], components: [mc]})
				}
				if(i.customId == 'pzomb'){
					await i.update({embeds: [pzombi], components: [pzomb]})
				}
				if(i.customId == 'mclimber'){
					await i.update({embeds: [mclimber], components: [mclimb] })
				}
				if(i.customId == 'tc'){
					await i.update({embeds: [tcap], components: [tc]})
				}
				if(i.customId == 'pzombi'){
					await i.update({embeds: [pzombi], components: [pzomb]})
				}
				if(i.customId == 'trip'){
					await i.update({embeds: [triplication], components: [trip]})
				}
				if(i.customId == 'tcap'){
					await i.update({embeds: [tcap], components: [tc]})
				}
				if(i.customId == 'cc'){
					await i.update({embeds: [commando], components: [cc]})
				}
				if(i.customId == 'triplication'){
					await i.update({embeds: [triplication], components: [trip]})
				}
				if(i.customId == 'gs'){
					await i.update({embeds: [gscientist], components: [gs]})
				}
				if(i.customId == 'commando'){
					await i.update({embeds: [commando], components: [cc]})
				}
				if(i.customId == 'gm'){
					await i.update({embeds: [gmine], components: [gm]})
				}
				if(i.customId == 'gscientist'){
					await i.update({embeds: [gscientist], components: [gs]})
				}
				if(i.customId == 'pb'){
					await i.update({embeds: [pbooty], components: [pb]})
				}
				if(i.customId == 'gmine'){
					await i.update({embeds: [gmine], components: [gm]})
				}
				if(i.customId == 'pt'){
					await i.update({embeds: [ptech], components: [pt]})
				}
				if(i.customId == 'pbooty'){
					await i.update({embeds: [pbooty], components: [pb]})
				}
				if(i.customId == 'scv'){
					await i.update({embeds: [scviking], components: [scv]})
				}
				if(i.customId == 'ptech'){
					await i.update({embeds: [ptech], components: [pt]})
				}
				if(i.customId == 'hac'){
					await i.update({embeds: [hacopter], components: [hac]})
				}
				if(i.customId == 'scviking'){
					await i.update({embeds: [scviking], components: [scv]})
				}
				if(i.customId == 'ksz'){
					await i.update({embeds: [kszombie], components: [ksz]})
				}
				if(i.customId == 'hacopter'){
					await i.update({embeds: [hacopter], components: [hac]})
				}
				if(i.customId == 'wg'){
					await i.update({embeds: [wgarg], components: [wg]})
				}
				if(i.customId == 'kszombie'){
					await i.update({embeds: [kszombie], components: [ksz]})
				}
				if(i.customId == 'bmr'){
					await i.update({embeds: [bmrising], components: [bmr]})
				}
				if(i.customId == 'wgarg'){
					await i.update({embeds: [wgarg], components: [wg]})
				}
				if(i.customId == 'zdm'){
					await i.update({embeds: [zdmech], components: [zdm]})
				}
				if(i.customId == 'bmrising'){
					await i.update({embeds: [bmrising], components: [bmr]})
				}
				if(i.customId == 'zdmech'){
					await i.update({embeds: [zdmech], components: [zdm]})
				}
				if(i.customId == 'trick'){
					await i.update({embeds: [ster], components: [trick]})
				}
				if(i.customId == 'help'){
					await i.update({embeds: [bcards], components: [row]})
				}
				if(i.customId == 'ster'){
					await i.update({embeds: [ster], components: [trick]})
				}
		})
	}
}
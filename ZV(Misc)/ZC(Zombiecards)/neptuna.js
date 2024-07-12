const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
let db = require("../../index.js");
module.exports = {
	name: `neptuna`,
	aliases: [`nt`, `tuna`],
	category: `Zombie Cards`,
	run: async(client, message, args) => {
		const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('helpnt')
                    .setLabel('NT Commands')
                    .setStyle(ButtonStyle.Danger)
										.setEmoji('<:NeptunaH:1087845030867247174>')
            );
		const test = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('tri')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('ag')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			//agraves
			const ag = new ActionRowBuilder().addComponents(
				new ButtonBuilder()
				  .setCustomId("helpnt")
				  .setLabel("🔙")
				  .setStyle(ButtonStyle.Primary),
				new ButtonBuilder()
				  .setCustomId("anti")
				  .setLabel("⏭")
				  .setStyle(ButtonStyle.Primary)
			  );
			  //Antiagro
			  const an = new ActionRowBuilder().addComponents(
				new ButtonBuilder()
				  .setCustomId("agr")
				  .setLabel("🔙")
				  .setStyle(ButtonStyle.Primary),
				new ButtonBuilder()
				  .setCustomId("aaa")
				  .setLabel("⏭")
				  .setStyle(ButtonStyle.Primary)
			  );
			  //antiagoragor
			  const aaa = new ActionRowBuilder().addComponents(
				new ButtonBuilder()
				  .setCustomId("an")
				  .setLabel("🔙")
				  .setStyle(ButtonStyle.Primary),
				new ButtonBuilder()
				  .setCustomId("bnt")
				  .setLabel("⏭")
				  .setStyle(ButtonStyle.Primary)
			  );
			  //budget nt
			  const bnt = new ActionRowBuilder().addComponents(
				new ButtonBuilder()
				  .setCustomId("a")
				  .setLabel("🔙")
				  .setStyle(ButtonStyle.Primary),
				new ButtonBuilder()
				  .setCustomId("ct")
				  .setLabel("⏭")
				  .setStyle(ButtonStyle.Primary)
			  );
			  //Combotuna
			  const ct = new ActionRowBuilder().addComponents(
				new ButtonBuilder()
				  .setCustomId("ntba")
				  .setLabel("🔙")
				  .setStyle(ButtonStyle.Primary),
				new ButtonBuilder()
				  .setCustomId("ft")
				  .setLabel("⏭")
				  .setStyle(ButtonStyle.Primary)
			  );
			  //flagtor
			  const ft = new ActionRowBuilder().addComponents(
				new ButtonBuilder()
				  .setCustomId("ctuna")
				  .setLabel("🔙")
				  .setStyle(ButtonStyle.Primary),
				new ButtonBuilder()
				  .setCustomId("fl")
				  .setLabel("⏭")
				  .setStyle(ButtonStyle.Primary)
			  );
			  //Floss
			  const fl = new ActionRowBuilder().addComponents(
				new ButtonBuilder()
				  .setCustomId("ftor")
				  .setLabel("🔙")
				  .setStyle(ButtonStyle.Primary),
				new ButtonBuilder()
				  .setCustomId("gl")
				  .setLabel("⏭")
				  .setStyle(ButtonStyle.Primary)
			  );
			  //Glag
			  const gl = new ActionRowBuilder().addComponents(
				new ButtonBuilder()
				  .setCustomId("floss")
				  .setLabel("🔙")
				  .setStyle(ButtonStyle.Primary),
				new ButtonBuilder()
				  .setCustomId("ib")
				  .setLabel("⏭")
				  .setStyle(ButtonStyle.Primary)
			  );
			  //IceBox
			  const ib = new ActionRowBuilder().addComponents(
				new ButtonBuilder()
				  .setCustomId("glag")
				  .setLabel("🔙")
				  .setStyle(ButtonStyle.Primary),
				new ButtonBuilder()
				  .setCustomId("mt")
				  .setLabel("⏭")
				  .setStyle(ButtonStyle.Primary)
			  );
			  //Midtuna
			  const mt = new ActionRowBuilder().addComponents(
				new ButtonBuilder()
				  .setCustomId("icebox")
				  .setLabel("🔙")
				  .setStyle(ButtonStyle.Primary),
				new ButtonBuilder()
				  .setCustomId("pc")
				  .setLabel("⏭")
				  .setStyle(ButtonStyle.Primary)
			  );
			  //Plank Control
			  const pc = new ActionRowBuilder().addComponents(
				new ButtonBuilder()
				  .setCustomId("mid")
				  .setLabel("🔙")
				  .setStyle(ButtonStyle.Primary),
				new ButtonBuilder()
				  .setCustomId("ppc")
				  .setLabel("⏭")
				  .setStyle(ButtonStyle.Primary)
			  );
			  //Precise Plank Control
			  const ppc = new ActionRowBuilder().addComponents(
				new ButtonBuilder()
				  .setCustomId("pcon")
				  .setLabel("🔙")
				  .setStyle(ButtonStyle.Primary),
				new ButtonBuilder()
				  .setCustomId("sy")
				  .setLabel("⏭")
				  .setStyle(ButtonStyle.Primary)
			  );
			  //Schoolyard
			  const sy = new ActionRowBuilder().addComponents(
				new ButtonBuilder()
				  .setCustomId("ppcon")
				  .setLabel("🔙")
				  .setStyle(ButtonStyle.Primary),
				new ButtonBuilder()
				  .setCustomId("wi")
				  .setLabel("⏭")
				  .setStyle(ButtonStyle.Primary)
			  );
			  //Sunlord
			  const wi = new ActionRowBuilder().addComponents(
				new ButtonBuilder()
				  .setCustomId("syard")
				  .setLabel("🔙")
				  .setStyle(ButtonStyle.Primary),
				new ButtonBuilder()
				  .setCustomId("tr")
				  .setLabel("⏭")
				  .setStyle(ButtonStyle.Primary)
			  );
			  //Trimps
			  const tr = new ActionRowBuilder().addComponents(
				new ButtonBuilder()
				  .setCustomId("wim")
				  .setLabel("🔙")
				  .setStyle(ButtonStyle.Primary),
				new ButtonBuilder()
				  .setCustomId("help")
				  .setLabel("⏭")
				  .setStyle(ButtonStyle.Primary)
			  );
		let embed = new EmbedBuilder()
			.setThumbnail("https://static.wikia.nocookie.net/villains/images/5/50/Neptuna_12.png/revision/latest?cb=20201126030317")
		.setTitle("Neptuna | <:Hearty:1062501636557242429><:Sneaky:1062502187781075094>")
		.setDescription("**- Pet Hero -**")
		.addFields({name: "Superpowers", 
								value: "Dolphinado <:Sneaky:1062502187781075094> \n __Bounce__ a random Plant. \n Possessed <:Hearty:1062501636557242429> \n A Zombie gets +2<:Health:1062515540712751184> and <:Frenzy:1062501819592491108>__Frenzy__. \n In-Crypted <:Sneaky:1062502187781075094> \n A Zombie hides in a __Gravestone__. \n Draw a card. \n Octo-Pult <:Hearty:1062501636557242429><:Sneaky:1062502187781075094> \n Make a 3<:Strength:1062501774612779039>/2<:Health:1062515540712751184> Octo-Pet with __Amphibious__."},
							 {
								 name: "Set-Rarity", 
								 value: "**Premium - Hero**"
							 },
							 {
								 name: "Flavor Text", 
								 value: "She is the first Zombie to fight in a tank."
							 })
		.setColor("Random")
		
		let decks = [
			"agraves",
			"antiagor",
			"antiagoragor",
			"budgetnt",
			"combotuna",
			"flagtor",
			"floss",
			"glag",
			"helpnt",
			"icebox",
			"midtuna",
			"plankcontrol",
			"preciseplankcontrol",
			"randomnt",
			"schoolyard",
			"sunlord",
			"trimps",
			,
		  ];
		let toBuildString = "";
		for (let i = 0; i < decks.length; i++) {
			let deck = decks[i];
			toBuildString += `\n<@1043528908148052089> **${deck}**`
		}
				//Help Embed
				let nthelp = new EmbedBuilder() 
					.setThumbnail("https://static.wikia.nocookie.net/villains/images/5/50/Neptuna_12.png/revision/latest?cb=20201126030317")
				.setTitle("NT Commands")
				.setDescription(`My commands for Neptuna(NT) are ${toBuildString}`)
				.setColor("Random")
					.setFooter({text: `To view the Neptuna decks please use the commands listed above or click on the buttons below!
Note: Neptuna has a total of ${decks.length - 3 } total decks in Tbot`})
		let [result] = await db.query(`select * from ntdecks`)
				let agr = new EmbedBuilder()
				.setTitle("A-Graves")
				.setDescription(`${result[2].agraves}`)
				.setFooter({text: `${result[1].agraves}`})
						.addFields({name: "Deck Cost", value: `${result[0].agraves}`})
					.setColor("Random")
					.setImage(`${result[3].agraves}`)
					let a = new EmbedBuilder()
					.setImage(`${result[3].antiagoragor}`)
					.setTitle("Anti Agor Agor")
					.setDescription(`${result[2].antiagoragor}`)
						.setColor("Random")
					.addFields({name: "Deck Cost",
											 value: `${result[0].antiagoragor}`
										 })
					.setFooter({text: `${result[1].antiagoragor}`})
				let anti = new EmbedBuilder()
				.setTitle("Anti anti anti agor")
				.setDescription(`${result[2].antiagor}`)
				.addFields({name: "Deck Cost",
										 value: `${result[0].antiagor}`})
				.setFooter({text: `${result[1].antiagor}`})
				.setColor("Random")
				.setImage(`${result[3].antiagor}`)
				let ntba = new EmbedBuilder()
				.setTitle("NT Budget Flag")
			.setDescription(`${result[2].budgetnt}`)
			.setFooter({text: `${result[1].budgetnt}`})
					.addFields({name: "Deck Cost", value: `${result[0].budgetnt}`})
				.setColor("Random")
		.setImage(`${result[3].budgetnt}`)
					let ctuna = new EmbedBuilder()
					.setTitle("Combotuna")
					.setDescription(`${result[2].combotuna}`)
					.setFooter({text: `${result[1].combotuna}`})
					.addFields({name: "Deck Cost", value: `${result[0].combotuna}`})
				.setColor("Random")
		.setImage(`${result[3].combotuna}`)
			//Flagtor
				let ftor = new EmbedBuilder()
				.setTitle("Flagtor")
				.setDescription(`${result[2].flagtor}`)
				.setColor("Random")
				.setFooter({text: `${result[1].flagtor}`})
				.addFields({name: "Deck Cost", value: `${result[0].flagtor}`})
				.setImage(`${result[3].flagtor}`)
				//Floss
				let floss = new EmbedBuilder()
				.setTitle(`Floss`)
				.setDescription(`${result[2].floss}`)
				.setColor('Random')
				.addFields({name: 'Deck Cost:', value: `${result[0].floss}`})
				.setFooter({text: `${result[1].floss}`})
				.setImage(`${result[3].floss}`)
				//glag
				let glag = new EmbedBuilder()
				.setTitle("Glag")
			.setDescription(`${result[2].glag}`)
			.setFooter({text: `${result[1].glag}`})
					.addFields({name: "Deck Cost", value: `${result[0].glag}`})
				.setColor("Random")
		.setImage(`${result[3].glag}`)
			let iceBox = new EmbedBuilder()
			.setTitle("IceBox")
			.setDescription(`${result[2].icebox}`)
			.setFooter({text: `${result[1].icebox}`})
			.setColor("Random")
			.addFields({name: "Deck Cost", value: `${result[0].icebox}`})
			.setImage(`${result[3].icebox}`)
				let mid = new EmbedBuilder()
				.setTitle("Fry's Midtuna")	
				.setDescription(`${result[2].midtuna}`)
		.setFooter({text: `${result[1].midtuna}`})
				.addFields({name: "Deck Cost", value: `${result[0].midtuna}`})
			.setColor("Random")					
			.setImage(`${result[3].midtuna}`)
				let pcon = new EmbedBuilder()
				.setTitle("Plank Control")
				.setDescription(`${result[2].plankcontrol}`)
				.setFooter({text:`${result[1].plankcontrol}`})
							.addFields({name: "Deck Cost", value: `${result[0].plankcontrol}`})
					.setColor("Random")
					.setImage(`${result[3].plankcontrol}`)
				let ppcon = new EmbedBuilder()
				.setTitle("Precise Plank Control")
				.setDescription(`${result[2].preciseplankcontrol}`)
				.setColor("Random")
				.setFooter({text: `${result[1].preciseplankcontrol}`})
				.addFields({name: "Deck Cost", value: `${result[0].preciseplankcontrol}`})
				.setImage(`${result[3].preciseplankcontrol}`)
				let syard = new EmbedBuilder()
				.setTitle("Schoolyard")
				.setDescription(`${result[2].schoolyard}`)
				.setFooter({text: `${result[1].schoolyard}`})
						.addFields({name: "Deck Cost", value: `${result[0].schoolyard}`})
					.setColor("Random")
			.setImage(`${result[3].schoolyard}`)
				let tri = new EmbedBuilder()
				.setTitle("Trimps")
				.setDescription(`${result[2].trimps}`)
				.setFooter({text: `${result[1].trimps}`})
						.addFields({name: "Deck Cost", value:`${result[0].trimps}`})
					.setColor("Random")
					.setImage(`${result[3].trimps}`)
					let wim = new EmbedBuilder()
					.setTitle("Sunlord")	
			.setDescription(`${result[2].wimps}`)
	.setFooter({text: `${result[1].wimps}`})
			.addFields({name: "Deck Cost", value:`${result[0].wimps}`})
		.setColor("Random")					
		.setImage(`${result[3].wimps}`)
		const m = await	message.channel.send({embeds: [ embed ], components: [row] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter})
		collector.on('collect', async i  => {
			if (i.customId == 'helpnt')  {	
				await i.update({embeds: [nthelp], components: [test] } )
			}
				if(i.customId == 'ag'){
			await i.update({embeds: [agr], components: [ag]})
			}
			if(i.customId == 'helptnt'){
					await i.update({embeds: [nthelp], components: [test] } )
			}
				if(i.customId == 'agr'){
			await i.update({embeds: [agr], components: [ag]})
			}
			if(i.customId == 'anti'){
				await i.update({embeds: [anti], components: [an]})
			}
			if(i.customId == 'bnt'){
				await i.update({embeds: [ntba], components: [bnt]})
			}
			if(i.customId == 'an'){
				await i.update({embeds: [anti], components: [an]})
			}
			if(i.customId == 'ct'){
				await i.update({embeds: [ctuna], components: [ct]})
			}
			if(i.customId == 'ntba'){
				await i.update({embeds: [ntba], components: [bnt]})
			}
			if(i.customId == 'gl'){
				await i.update({embeds: [glag], components: [gl]})
			}
			if(i.customId == 'ctuna'){
				await i.update({embeds: [ctuna], components: [ct]})
			}
			//Floss
			if(i.customId == 'fl'){
				await i.update({embeds: [floss], components: [fl]})
			}
			if(i.customId == 'floss'){
				await i.update({embeds: [floss], components: [fl]})
			}

			//Icebox 
			if(i.customId == 'ib'){
				await i.update({embeds: [iceBox], components: [ib]})
			}
			if(i.customId == 'icebox'){
				await i.update({embeds: [iceBox], components: [ib]})
			}

			if(i.customId == 'aaa'){
				await i.update({embeds: [a], components: [aaa]})
			}
			if(i.customId == 'a'){
				await i.update({embeds: [a], components: [aaa]})
			}
			if(i.customId == 'mt'){
				await i.update({embeds: [mid], components: [mt]})
			}
			if(i.customId == 'glag'){
				await i.update({embeds: [glag], components: [gl]})
			}
				if(i.customId == 'ft'){
				await i.update({embeds: [ftor], components: [ft]})
			}
						if(i.customId == 'ftor'){
				await i.update({embeds: [ftor], components: [ft]})
			}
			if(i.customId == 'pc'){
				await i.update({embeds: [pcon], components: [pc]})
			}
				if(i.customId == 'ppc'){
				await i.update({embeds: [ppcon], components: [ppc]})
			}
				if(i.customId == 'ppcon'){
				await i.update({embeds: [ppcon], components: [ppc]})
			}
			if(i.customId == 'mid'){
				await i.update({embeds: [mid], components: [mt]})
			}
			if(i.customId == 'sy'){
				await i.update({embeds: [syard], components: [sy]})
			}
			if(i.customId == 'pcon'){
				await i.update({embeds: [pcon], components: [pc]})
			}
			if(i.customId == 'syard'){
				await i.update({embeds: [syard], components: [sy]})
			}
			if(i.customId == 'tr'){
				await i.update({embeds: [tri], components: [tr]})
			}
			if(i.customId == 'wi'){
				await i.update({embeds: [wim], components: [wi]})
			}
			if(i.customId == 'tri'){
				await i.update({embeds: [tri], components: [tr]})
			}
				if(i.customId == 'help'){
				await i.update({embeds: [nthelp], components: [test] } )
			}
			if(i.customId == 'wim'){
				await i.update({embeds: [wim], components: [wi]})
			}
		})
	}
}
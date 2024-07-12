const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
let db = require("../../index.js");
module.exports = {
	name: `betacarrotina`,
	aliases: [`bc`, `beta`, `carrotina`, `carrot`, `tina`, `beta-carrotina`],
	category: `Plant Cards`,
	run: async(client, message, args)=> {
			const cmd = new ActionRowBuilder()
		.addComponents(
			new ButtonBuilder()
			.setCustomId('cmd')
			.setLabel('BC Commands')
			.setEmoji('<:BetaJerratina:908525918174199900>')
			.setStyle(ButtonStyle.Primary)
		)
			const row = new ActionRowBuilder()
            .addComponents(
							    new ButtonBuilder()
                    .setCustomId('bc')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('anti')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const an = new ActionRowBuilder()
            .addComponents(
							    new ButtonBuilder()
                    .setCustomId('helpbc')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('cb')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
				const cbc = new ActionRowBuilder()
            .addComponents(
							    new ButtonBuilder()
                    .setCustomId('an')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('help')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		let bc = new EmbedBuilder()
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
							 let decks = [
								"anti",
								"helpbc",
								"randombc",
								"shamcontrolbc",
								""
							]
							let toBuildString = "";
							for (let i = 0; i < decks.length; i++) {
								let deck = decks[i];
							toBuildString += `\n<@1043528908148052089> **${deck}**`;
						}
						let [result] = await db.query("SELECT * FROM bcdecks");
								let embed = new EmbedBuilder()
	.setThumbnail("https://static.wikia.nocookie.net/p__/images/d/d2/Betacarrot.png/revision/latest?cb=20190624185039&path-prefix=protagonist")
	.setTitle("BC Commands")
	.setDescription(`Here are my commands for Beta-Carrotina(BC) ${toBuildString}`)
		.setColor("Random")
			.setFooter({text: `To view the Beta Carrotina decks please use the commands listed above or click on the buttons below!
Note: Beta Carrotina has ${decks.length -3 } total decks in Tbot`})
			let anti = new EmbedBuilder()
			.setTitle("Anti")
			.setDescription(`${result[2].anti}`)
			.setFooter({text: `${result[1].anti}`})
					.addFields({name: "Deck Cost", value: `${result[0].anti}`})
				.setColor("Random")
				.setImage(result[3].anti)
		let cb = new EmbedBuilder()
		.setTitle("Sham Control Beta Carrotina")
		.setDescription(`${result[2].shamcontrol}`)
		.setFooter({text: `${result[1].shamcontrol}`})
				.addFields({name: "Deck Cost", value: `${result[0].shamcontrol}`})
			.setColor("Random")	
			.setImage(`${result[3].shamcontrol}`)
			const m = await	message.channel.send({embeds: [bc], components: [cmd] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter, time: 300000})
		collector.on('collect', async i  => {
					if (i.customId == 'ac') {
						await i.update({embeds: [ac], components: [ag] } )
			}
			if(i.customId == 'cmd'){
					await i.update({embeds: [embed], components: [row] } )
				}
			if (i.customId == 'help') {
						await i.update({embeds: [embed], components: [row] } )
			}
			if (i.customId == 'agro') {
							await i.update({embeds: [ac], components: [ag] } )
			}
			if (i.customId == 'anti') {
					await i.update({embeds: [anti], components: [an] } )
			}
			if (i.customId == 'an') {
									await i.update({embeds: [anti], components: [an] } )
			}
				if (i.customId == 'bc') {
					await i.update({embeds: [cb], components: [cbc] } )
				}
					if (i.customId == 'cb') {
						await i.update({embeds: [cb], components: [cbc] } )
			}
			if (i.customId == "test") {
					await i.update({embeds: [sn], components: [sna] } )
			}
			
					if (i.customId == 'helpbc') {
								await i.update({embeds: [embed], components: [row] } )
			}
		})
	}
}
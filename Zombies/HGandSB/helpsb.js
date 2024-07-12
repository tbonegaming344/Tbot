const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
let db = require("../../index.js")
module.exports = {
	name: `helpsb`,
	aliases: [`sbcommands`, `commandssb`, `sbhelp`, `helpsuperbrainz`, `helpsuper`, `sbdecks`, `deckssb`, `superbrainzhelp`, `superbrainzdecks`],
	category: `Huge-Gigantacus/SuperBrainz`,
	run: async(client, message, args) => {
		const row = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('timps')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('bsb')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const bsb = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('helpsb')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('lgc')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
			const lgc = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('sbb')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('mil')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const mil = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('lgcon')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('ti')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const ti = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('mill')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('help')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
let decks = [
			"budgetsb",
			"helpsb",
			"lgconjuresb",
			"mill",
			"randomsb",
			"teleimpssb",
			
]
let toBuildString = "";
for (let i = 0; i < decks.length; i++) {
	let deck = decks[i];
	toBuildString += `\n<@1043528908148052089> **${deck}**`
}
	let helpsb = new EmbedBuilder()
		.setThumbnail("https://static.wikia.nocookie.net/pvzheroes_gamepedia_en/images/3/37/Super_Brainz.png/revision/latest?cb=20160722160723")
		.setTitle("SB Commands")
		.setDescription(`My commands for Super Brainz(SB) are ${toBuildString}`)
		.setFooter({text: `To view the SuperBrainz decks please use the commands listed above or click on the buttons below!
Note: There are ${decks.length - 3 } total decks for Super Brainz in Tbot`})
		.setColor("Random")

let [result]=  await db.query(`SELECT * FROM sbdecks`)
		let bs = new EmbedBuilder()
		.setTitle("Budget Science Staches")
		.setDescription(`${result[2].budgetsb}`)
		.setFooter({text: `${result[1].budgetsb}`})
				.addFields({name: "Deck Cost", value: `${result[0].budgetsb}`})
			.setColor("Random")		
			.setImage(`${result[3].budgetsb}`)
		let lgcon = new EmbedBuilder()
		.setTitle("LG Conjure")	
			.setDescription(`${result[2].lgconjuresb}`)
	.setFooter({text: `${result[1].lgconjuresb}`})
			.addFields({name: "Deck Cost", value: `${result[0].lgconjuresb}`})	
			.setImage(`${result[3].lgconjuresb}`)
		.setColor("Random")			
				let mi = new EmbedBuilder()
				.setTitle("Mill")
				.setDescription(`${result[2].mill}`)
				.setFooter({text: `${result[1].mill}`})
						.addFields({name: "Deck Cost", value: `${result[0].mill}`})
					.setColor("Random")
					.setImage(`${result[3].mill}`)
		let timps = new EmbedBuilder()
		.setTitle("Teleimps")
		.setDescription(`${result[2].telimpssb}`)
		.setFooter({text: `	${result[1].telimpssb}`})
				.addFields({name: "Deck Cost", value: `${result[0].telimpssb}`})
			.setColor("Random")		
			.setImage(`${result[3].telimpssb}`)
const m = await	message.channel.send({embeds: [helpsb], components: [row] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter})
	collector.on("collect", async i=> {
		if(i.customId == 'bsb'){
			await i.update({embeds: [bs], components: [bsb]})
		}
		if(i.customId == 'helpsb'){
			await i.update({embeds: [helpsb], components: [row] } )
		}
			if(i.customId == 'sbb'){
			await i.update({embeds: [bs], components: [bsb]})
		}
		if(i.customId == 'lgc'){
			await i.update({embeds: [lgcon], components: [lgc]})
		}
		if(i.customId == 'lgcon'){
			await i.update({embeds: [lgcon], components: [lgc]})
		}
				if(i.customId == 'mil'){
			await i.update({embeds: [mi], components: [mil]})
		}
		if(i.customId == 'mill'){
			await i.update({embeds: [mi], components: [mil]})
		}
		if(i.customId == 'ti'){
			await i.update({embeds: [timps], components: [ti]})
		}
		if(i.customId == 'timps'){
			await i.update({embeds: [timps], components: [ti]})
		}
		if(i.customId == 'help'){
			await i.update({embeds: [helpsb], components: [row] } )
		}
	})
	}
}
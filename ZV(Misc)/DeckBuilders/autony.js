const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
let db = require("../../index.js");
module.exports = {
    name: `autony`,
	aliases: [`decksmadebyautony`, `helpautony`, `autonyhelp`, `autonydecks`],
	category: `DeckBuilders`, 
    run: async(client, message, args)=> {
        const row = new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('otknet')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('otkn')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
		const otkn= new ActionRowBuilder()
            .addComponents(
							new ButtonBuilder()
                    .setCustomId('helpauto')
                    .setLabel('🔙')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('help')
                    .setLabel('⏭')
                    .setStyle(ButtonStyle.Primary)
							);
        let decks = [
            "otkneutron"
        ]
        let toBuildString = "";
        for (let i = 0; i < decks.length; i++) {
            toBuildString += `\n<@1043528908148052089> **${decks[i]}**`
        }
        let [result] = await db.query(`SELECT * FROM autonydecks`);
        let user = await client.users.fetch("444572962209923072")
        let autony= new EmbedBuilder()
            .setTitle(`${user.displayName} Decks`)
            .setDescription(`My commands for decks made by ${user.displayName} are ${toBuildString}`)
            .setFooter({text: `To find out more about the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`})
            .setThumbnail(user.displayAvatarURL())
            .setColor("Random")
                let otknet = new EmbedBuilder()
                .setTitle("OTK Neutron")
                .setDescription(`${result[2].otkneturon}`)
                .setFooter({text: `${result[1].otkneturon}`})
                .addFields({name: "Deck Cost", value: `${result[0].otkneturon}`})
                .setColor("Random")
                .setImage(`${result[3].otkneturon}`)
                const m = await	message.channel.send({embeds: [autony], components: [row] } )
				const iFilter = i => i.user.id === message.author.id
			const collector = m.createMessageComponentCollector({filter: iFilter})
		collector.on("collect", async i=> {
            if(i.customId == 'otkn'){
				await i.update({embeds: [otknet], components: [otkn]})
			}
			if(i.customId == 'otknet'){
                await i.update({embeds: [otknet], components: [otkn]})
			}
			if(i.customId == 'helpauto'){
				await i.update({embeds: [autony], components: [row] } )
			}
				if(i.customId == 'help'){
				await i.update({embeds: [autony], components: [row] } )
			}
		})
	}
}
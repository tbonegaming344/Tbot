const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require('discord.js');
let db = require("../../index.js")
module.exports = {
    name: `xera`,
    aliases: [`xeradecks`, `xerahelp`, `helpxera`, `dekcsmadebyxera`],
    category: `DeckBuilders`,
    run: async(client, message, args) => {
        const row = new ActionRowBuilder()
        .addComponents(
                        new ButtonBuilder()
                .setCustomId('hi')
                .setLabel('🔙')
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId('himps')
                .setLabel('⏭')
                .setStyle(ButtonStyle.Primary)
                        );
    const hi = new ActionRowBuilder()
        .addComponents(
                        new ButtonBuilder()
                .setCustomId('helpx')
                .setLabel('🔙')
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId('help')
                .setLabel('⏭')
                .setStyle(ButtonStyle.Primary)
                        );
        let [result] = await db.query(`SELECT himps FROM bfdecks`)
        let decks =[
            "himpter",
        ]
        let toBuildString = "";
        for (let i = 0; i < decks.length; i++) {
            toBuildString += `\n<@1043528908148052089> **${decks[i]}**`
        }
        let user = await client.users.fetch("742719800395956244")
        let xera = new EmbedBuilder()
        .setTitle(`${user.displayName} Decks`)
        .setDescription(`My commands for decks made by ${user.displayName} are ${toBuildString}`)
        .setFooter({text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`})
        .setThumbnail(user.displayAvatarURL())
    .setColor("Random")
    let himps = new EmbedBuilder()
    .setTitle("Himpter")	
    .setDescription(`${result[2].himps}`)
.setFooter({text: `${result[1].himps}`})
    .addFields({name: "Deck Cost", value: `${result[0].himps}`})
.setColor("Random")		
.setImage(`${result[3].himps}`)
        const m = await	message.channel.send({embeds: [xera], components: [row] } )
        const iFilter = i => i.user.id === message.author.id
    const collector = m.createMessageComponentCollector({filter: iFilter})
    collector.on('collect', async i => {
        if(i.customId == 'himps') {
            await i.update({embeds: [himps], components: [hi]})
        }
        if(i.customId == 'hi') {
            await i.update({embeds: [himps], components: [hi]})
        }
        if(i.customId == 'helpx') {
            await i.update({embeds: [xera], components: [row]})
        }
        if(i.customId == 'help') {
            await i.update({embeds: [xera], components: [row]})
        }
    })
    }
}
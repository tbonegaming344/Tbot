const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `igma`,
  aliases: [
    `igmadecks`,
    `igmahelp`,
    `helpigma`,
    `decksmadebyigma`,
    `igmarockers`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ptemp")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("gotk")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const gotk = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpig")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ibc")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ibc = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("otkg")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ib")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ib = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ichum")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("igma")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const igmat = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("iburn")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pt")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const pt = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("iticia")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = [
      "grapeotk",
      "igmablobchum",
      "igmaburn",
      "igmaticia",
      "peatempo",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let [result] =
      await db.query(`select grapeotk, igmablobchum, igmaburn, igmaticia, peatempo 
from gkdecks gk 
inner join rbdecks rb 
on (gk.deckinfo = rb.deckinfo)
inner join ebdecks eb
on (gk.deckinfo = eb.deckinfo)
inner join imdecks im
on (gk.deckinfo = im.deckinfo)
inner join gsdecks gs
on (gk.deckinfo = gs.deckinfo)`);
    let user = await client.users.fetch("447911877020876802");
    let igma = new EmbedBuilder()
      .setTitle("Igma Decks")
      .setDescription(`My commands for decks made by Igma are ${toBuildString}`)
      .setFooter({
        text: `To view the Decks Made By Igma please use the commands listed above or click on the buttons below!
Note: Igma has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    let otkg = new EmbedBuilder()
      .setTitle("Grape OTK")
      .setDescription(`${result[2].grapeotk}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].grapeotk}` })
      .addFields({ name: "Deck Cost", value: `${result[0].grapeotk}` })
      .setImage(`${result[3].grapeotk}`);
    let ichum = new EmbedBuilder()
      .setTitle("Igma Blob Chum")
      .setDescription(`${result[2].igmablobchum}`)
      .setFooter({ text: `${result[1].igmablobchum}` })
      .addFields({ name: "Deck Cost", value: `${result[0].igmablobchum}` })
      .setColor("Random")
      .setImage(`${result[3].igmablobchum}`);
    let iburn = new EmbedBuilder()
      .setTitle("Igma Burn")
      .setDescription(`${result[2].igmaburn}`)
      .setFooter({ text: `${result[1].igmaburn}` })
      .addFields({ name: "Deck Cost", value: `${result[0].igmaburn}` })
      .setColor("Random")
      .setImage(`${result[3].igmaburn}`);
    let iticia = new EmbedBuilder()
      .setTitle("Igmaticia")
      .setDescription(`${result[2].igmaticia}`)
      .setFooter({ text: `${result[1].igmaticia}` })
      .addFields({ name: "Deck Cost", value: `${result[0].igmaticia}` })
      .setColor("Random")
      .setImage(`${result[3].igmaticia}`);
    let ptemp = new EmbedBuilder()
      .setTitle("Igma Pea Tempo")
      .setDescription(`${result[2].peatempo}`)
      .setColor("Random")
      .setImage(`${result[3].peatempo}`)
      .addFields({ name: "Deck Cost", value: `${result[0].peatempo}` })
      .setFooter({ text: `${result[1].peatempo}` });
    const m = await message.channel.send({ embeds: [igma], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "ibc") {
        await i.update({ embeds: [ichum], components: [ibc] });
      }
      if (i.customId == "otkg") {
        await i.update({ embeds: [otkg], components: [gotk] });
      }
      if (i.customId == "gotk") {
        await i.update({ embeds: [otkg], components: [gotk] });
      }
      if (i.customId == "helpig") {
        await i.update({ embeds: [igma], components: [row] });
      }
      if (i.customId == "ib") {
        await i.update({ embeds: [iburn], components: [ib] });
      }
      if (i.customId == "ichum") {
        await i.update({ embeds: [ichum], components: [ibc] });
      }
      if (i.customId == "iburn") {
        await i.update({ embeds: [iburn], components: [ib] });
      }
      if (i.customId == "igma") {
        await i.update({ embeds: [iticia], components: [igmat] });
      }
      if (i.customId == "pt") {
        await i.update({ embeds: [ptemp], components: [pt] });
      }
      if (i.customId == "iticia") {
        await i.update({ embeds: [iticia], components: [igmat] });
      }
      if (i.customId == "ptemp") {
        await i.update({ embeds: [ptemp], components: [pt] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [igma], components: [row] });
      }
    });
  },
};

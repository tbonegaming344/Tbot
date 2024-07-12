const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `kenmartin`,
  aliases: [
    `helpkenmartin`,
    `kenmartindecks`,
    `kenmartinhelp`,
    `decksmadebykenmartin`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("yk")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bb")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpken")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("csp")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const csp = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bbolt")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("kc")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const kc = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("spc")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("wm")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const wm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("kcrush")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("yem")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const yem = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("wmart")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ykm")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const yk = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("youngeggmartin")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = [
      "boltbolt",
      "cyclesp",
      "kendycrush",
      "wrathmartin",
      "youngeggmartin",
      "ykm",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let [result] =
      await db.query(`select boltbolt, cyclesp, kendycrush, wrathmartin,
youngeggmartin, ykm 
from rbdecks rb inner join spdecks sp
on (rb.deckinfo = sp.deckinfo)
inner join zmdecks zm
on (rb.deckinfo = zm.deckinfo)
inner join ifdecks fi 
on (rb.deckinfo = fi.deckinfo)
inner join pbdecks pb 
on (rb.deckinfo = pb.deckinfo)
inner join hgdecks hg
on (rb.deckinfo = hg.deckinfo)`);
    let ken = new EmbedBuilder()
      .setTitle("Ken Martin Decks")
      .setDescription(
        `My commands for decks made by Ken Martin are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks Made By Ken Martin please use the commands listed above or click on the buttons below!
Note: Ken Martin has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(
        "https://media.discordapp.net/attachments/1044626284346605588/1111011436223803473/ken.jpg?width=604&height=604"
      )
      .setColor("Random");
    let bbolt = new EmbedBuilder()
      .setTitle("Bolt Bolt")
      .setDescription(`${result[2].boltbolt}`)
      .setFooter({ text: `${result[1].boltbolt}` })
      .addFields({ name: "Deck Cost", value: `${result[0].boltbolt}` })
      .setColor("Random")
      .setImage(`${result[3].boltbolt}`);
    let spc = new EmbedBuilder()
      .setTitle("Cycle Spudow")
      .setDescription(`${result[2].cyclesp}`)
      .setFooter({ text: `${result[1].cyclesp}` })
      .addFields({ name: "Deck Cost", value: `${result[0].cyclesp}` })
      .setColor("Random")
      .setImage(`${result[3].cyclesp}`);
    let kcrush = new EmbedBuilder()
      .setTitle("Kendy Crush")
      .setDescription(`${result[2].kendycrush}`)
      .setFooter({ text: `${result[1].kendycrush}` })
      .addFields({ name: "Deck Cost", value: `${result[0].kendycrush}` })
      .setColor("Random")
      .setImage(`${result[3].kendycrush}`);
    let wmart = new EmbedBuilder()
      .setTitle("Wrath Martin")
      .setDescription(`${result[2].wrathmartin}`)
      .setFooter({ text: `${result[1].wrathmartin}` })
      .addFields({ name: "Deck Cost", value: `${result[0].wrathmartin}` })
      .setColor("Random")
      .setImage(`${result[3].wrathmartin}`);
    //Young Egg Martin
    let youngeggmartin = new EmbedBuilder()
      .setTitle("Young Egg Martin")
      .setDescription(`${result[2].youngeggmartin}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].youngeggmartin}` })
      .addFields({ name: "Deck Cost", value: `${result[0].youngeggmartin}` })
      .setImage(`${result[3].youngeggmartin}`);
    let ykm = new EmbedBuilder()
      .setTitle("YKM")
      .setDescription(`${result[2].ykm}`)
      .setFooter({ text: `${result[1].ykm}` })
      .addFields({ name: "Deck Cost", value: `${result[0].ykm}` })
      .setColor("Random")
      .setImage(`${result[3].ykm}`);
    const m = await message.channel.send({ embeds: [ken], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "bb") {
        await i.update({ embeds: [bbolt], components: [bb] });
      }
      if (i.customId == "helpken") {
        await i.update({ embeds: [ken], components: [row] });
      }
      if (i.customId == "csp") {
        await i.update({ embeds: [spc], components: [csp] });
      }
      if (i.customId == "bbolt") {
        await i.update({ embeds: [bbolt], components: [bb] });
      }
      if (i.customId == "kc") {
        await i.update({ embeds: [kcrush], components: [kc] });
      }
      if (i.customId == "spc") {
        await i.update({ embeds: [spc], components: [csp] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [ken], components: [row] });
      }
      if (i.customId == "kcrush") {
        await i.update({ embeds: [kcrush], components: [kc] });
      }
      if (i.customId == "wm") {
        await i.update({ embeds: [wmart], components: [wm] });
      }
      if (i.customId == "wmart") {
        await i.update({ embeds: [wmart], components: [wm] });
      }
      //YoungEggMartin
      if (i.customId == "yem") {
        await i.update({ embeds: [youngeggmartin], components: [yem] });
      }
      if (i.customId == "youngeggmartin") {
        await i.update({ embeds: [youngeggmartin], components: [yem] });
      }
      if (i.customId == "yk") {
        await i.update({ embeds: [ykm], components: [yk] });
      }
      if (i.customId == "ykm") {
        await i.update({ embeds: [ykm], components: [yk] });
      }
    });
  },
};

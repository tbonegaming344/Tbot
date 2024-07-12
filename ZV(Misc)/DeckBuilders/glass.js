const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `glassinabin`,
  aliases: [
    `glassdecks`,
    `glasshelp`,
    `glass`,
    `helpglass`,
    `decksmadebyglass`,
    `glassinabindecks`,
    `glassinabinhelp`,
    `glassinabindecks`,
    `helpglassinabin`,
    `decksmadebyglassinabin`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("unoi")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("g")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const g = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mf")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const mf = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gus")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("u")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const u = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("mfeast")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ui")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ui = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("uno")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["uno", "unoif", "gus", "mrfeast"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let [result] =
      await db.query(`select uno, unoif, gus, mrfeast from pbdecks pb
inner join ifdecks fi 
on (pb.deckinfo = fi.deckinfo) 
inner join hgdecks hg 
on (pb.deckinfo = hg.deckinfo)
inner join ebdecks eb 
on (pb.deckinfo = eb.deckinfo)`);
    let glass = new EmbedBuilder()
      .setTitle(`Glass Decks`)
      .setDescription(
        `My commands for decks made by Glass are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks Made By Glass please use the commands listed above or click on the buttons below!
Note: Glass has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(
        "https://images-ext-1.discordapp.net/external/Dny1MvN8FJ3u4tjPfQc4INDUi24A9u988WIkPp4H7F0/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/812501163696980019/8abcb47793cb278c0614cbce0f9b8d0c.png?format=webp&quality=lossless&width=384&height=384"
      )
      .setColor("Random");
    let gus = new EmbedBuilder()
      .setTitle("Gus")
      .setDescription(`${result[2].gus}`)
      .setFooter({ text: `${result[1].gus}` })
      .addFields({ name: "Deck Cost", value: `${result[0].gus}` })
      .setColor("Random")
      .setImage(`${result[3].gus}`);
    let mfeast = new EmbedBuilder()
      .setThumbnail(
        "https://media.discordapp.net/attachments/760579518846206033/1092228363713773668/Untitled218_20230324224813.png?width=1074&height=604"
      )
      .setTitle("Mr.Feast")
      .setDescription(`${result[2].mrfeast}`)
      .setFooter({ text: `${result[1].mrfeast}` })
      .addFields({ name: "Deck Cost", value: `${result[0].mrfeast}` })
      .setColor("Random")
      .setImage(`${result[3].mrfeast}`);
    let uno = new EmbedBuilder()
      .setTitle("UNO")
      .setDescription(`${result[2].uno}`)
      .setFooter({ text: `${result[1].uno}` })
      .addFields({ name: "Deck Cost", value: `${result[0].uno}` })
      .setColor("Random")
      .setImage(`${result[3].uno}`);
    let unoi = new EmbedBuilder()
      .setTitle("IF Uno")
      .setDescription(`${result[2].unoif}`)
      .setFooter({ text: `${result[1].unoif}` })
      .setColor("Random")
      .addFields({ name: "Deck Cost", value: `${result[0].unoif}` })
      .setImage(`${result[3].unoif}`);
    const m = await message.channel.send({
      embeds: [glass],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "helpg") {
        await i.update({ embeds: [glass], components: [row] });
      }
      if (i.customId == "g") {
        await i.update({ embeds: [gus], components: [g] });
      }
      if (i.customId == "gus") {
        await i.update({ embeds: [gus], components: [g] });
      }
      if (i.customId == "mf") {
        await i.update({ embeds: [mfeast], components: [mf] });
      }
      if (i.customId == "mfeast") {
        await i.update({ embeds: [mfeast], components: [mf] });
      }
      if (i.customId == "u") {
        await i.update({ embeds: [uno], components: [u] });
      }
      if (i.customId == "uh") {
        await i.update({ embeds: [unoh], components: [uh] });
      }
      if (i.customId == "uno") {
        await i.update({ embeds: [uno], components: [u] });
      }
      if (i.customId == "ui") {
        await i.update({ embeds: [unoi], components: [ui] });
      }
      if (i.customId == "unoh") {
        await i.update({ embeds: [unoh], components: [uh] });
      }
      if (i.customId == "unoi") {
        await i.update({ embeds: [unoi], components: [ui] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [glass], components: [row] });
      }
    });
  },
};

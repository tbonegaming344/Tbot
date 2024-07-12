const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `onebigfluke`,
  aliases: [
    `onebigflukehelp`,
    `helponebigfluke`,
    `onebigflukedecks`,
    `decksmadebyonebigfluke`,
    `fluke`,
    `helpfluke`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("spirates")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cb")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const cb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpf")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hom")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const hom = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cbait")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("rac")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const rac = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("homo")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("r2s")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const r2 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ism")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sp")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const sp = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("r2")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = [
      "congabait",
      "homophobia",
      "racism",
      "ramp2seedling",
      "slavery",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let [result] = await db.query(`select congabait, homophobia, racism,
ramp2seedling, slavery 
from pbdecks pb 
inner join smdecks sm 
on (pb.deckinfo = sm.deckinfo)
inner join bfdecks bf 
on (pb.deckinfo = bf.deckinfo)
inner join sfdecks sf
on (pb.deckinfo = sf.deckinfo)`);
    let user = await client.users.fetch("756689141416198215");
    let fluke = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    let cbait = new EmbedBuilder()
      .setTitle("CongaBait")
      .setDescription(`${result[2].congabait}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].congabait}` })
      .addFields({ name: "Deck Cost", value: `${result[0].congabait}` })
      .setImage(`${result[3].congabait}`);
    let homo = new EmbedBuilder()
      .setTitle("HOMOPHOBIA")
      .setDescription(`${result[2].homophobia}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].homophobia}` })
      .setImage(`${result[3].homophobia}`)
      .addFields({ name: "Deck Cost", value: `${result[0].homophobia}` });
    let ism = new EmbedBuilder()
      .setTitle("Racism")
      .setDescription(`${result[2].racism}`)
      .setColor("Random")
      .addFields({ name: "Deck Cost", value: `${result[0].racism}` })
      .setFooter({ text: `${result[1].racism}` })
      .setImage(`${result[3].racism}`);
    let r2s = new EmbedBuilder()
      .setTitle("Ramp 2 Seedling")
      .setDescription(`${result[2].ramp2seedling}`)
      .setFooter({ text: `${result[1].ramp2seedling}` })
      .addFields({ name: "Deck Cost", value: `${result[0].ramp2seedling}` })
      .setColor("Random")
      .setImage(`${result[3].ramp2seedling}`);
    let spirates = new EmbedBuilder()
      .setTitle("Slavery AKA Secret Pirates")
      .setDescription(`${result[2].slavery}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].slavery}` })
      .addFields({ name: "Deck Cost", value: `${result[0].slavery}` })
      .setImage(`${result[3].slavery}`);
    const m = await message.channel.send({
      embeds: [fluke],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "hom") {
        await i.update({ embeds: [homo], components: [hom] });
      }
      if (i.customId == "homo") {
        await i.update({ embeds: [homo], components: [hom] });
      }
      if (i.customId == "helpf") {
        await i.update({ embeds: [fluke], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [fluke], components: [row] });
      }
      if (i.customId == "cb") {
        await i.update({ embeds: [cbait], components: [cb] });
      }
      if (i.customId == "cbait") {
        await i.update({ embeds: [cbait], components: [cb] });
      }
      if (i.customId == "sp") {
        await i.update({ embeds: [spirates], components: [sp] });
      }
      if (i.customId == "spirates") {
        await i.update({ embeds: [spirates], components: [sp] });
      }
      if (i.customId == "rac") {
        await i.update({ embeds: [ism], components: [rac] });
      }
      if (i.customId == "ism") {
        await i.update({ embeds: [ism], components: [rac] });
      }
      if (i.customId == "r2") {
        await i.update({ embeds: [r2s], components: [r2] });
      }
      if (i.customId == "r2s") {
        await i.update({ embeds: [r2s], components: [r2] });
      }
    });
  },
};

const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `cgp23`,
  aliases: [
    `cgp23decks`,
    `cgp23help`,
    `helpcgp23`,
    `cgpdecks`,
    `cgphelp`,
    `cgp`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("wvalk")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("btoss")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );

    const btoss = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpcgp")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bcz")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bcz = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("blomb")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bgs")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bgs = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budcz")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bim")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bim = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("budgs")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ccpa")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ccpa = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("imb")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("tburn")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const tburn = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ccpaggro")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("wv")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const wv = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("tb")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = [
      "blomboticia",
      "budgetmopzilla",
      "budgetgs",
      "budgetim",
      "ccpaggro",
      "trickburn",
      "whalekyrie",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let [result] = await db.query(`select blomboticia,budgetcz, budgetgs,
budgetim, ccpaggro, trickburn, whalekyrie
from imdecks im 
inner join spdecks sp 
on (im.deckinfo = sp.deckinfo)
inner join czdecks cz
on (im.deckinfo = cz.deckinfo) 
inner join gsdecks gs 
on (im.deckinfo = gs.deckinfo)
inner join gkdecks gk 
on (im.deckinfo = gk.deckinfo)
inner join pbdecks pb 
on (im.deckinfo = pb.deckinfo)
inner join ebdecks eb 
on (im.deckinfo = eb.deckinfo)`);
    let user = await client.users.fetch("1044624858933383209");
    let cgp = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks made by ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    let czb = new EmbedBuilder()
      .setTitle("BudgetMopZilla")
      .setDescription(`${result[2].budgetcz}`)
      .setFooter({ text: `${result[1].budgetcz}` })
      .addFields({ name: "Deck Cost", value: `${result[0].budgetcz}` })
      .setColor("Random")
      .setImage(`${result[3].budgetcz}`);
    let cpaggro = new EmbedBuilder()
      .setTitle("CCP Aggro GK")
      .setDescription(`${result[2].ccpaggro}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].ccpaggro}` })
      .setImage(`${result[3].ccpaggro}`)
      .addFields({ name: "Deck Cost", value: `${result[0].ccpaggro}` });
    let tb = new EmbedBuilder()
      .setTitle("TrickBurn")
      .setDescription(`${result[2].trickburn}`)
      .setColor("Random")
      .addFields({ name: "Deck Cost", value: `${result[0].trickburn}` })
      .setImage(`${result[3].trickburn}`)
      .setFooter({ text: `${result[1].trickburn}` });
    let blomb = new EmbedBuilder()
      .setTitle("Budget Blomboticia")
      .setDescription(`${result[2].blomboticia}`)
      .setColor("Random")
      .addFields({ name: "Deck Cost", value: `${result[0].blomboticia}` })
      .setImage(`${result[3].blomboticia}`)
      .setFooter({ text: `${result[1].blomboticia}` });
    let budgs = new EmbedBuilder()
      .setTitle("GS Budget Mop")
      .setDescription(`${result[2].budgetgs}`)
      .setFooter({ text: `${result[1].budgetgs}` })
      .addFields({ name: "Deck Cost", value: `${result[0].budgetgs}` })
      .setColor("Random")
      .setImage(`${result[3].budgetgs}`);
    let imb = new EmbedBuilder()
      .setTitle("Budget Blob")
      .setDescription(`${result[2].budgetim}`)
      .setFooter({ text: `${result[1].budgetim}` })
      .addFields({ name: "Deck Cost", value: `${result[0].budgetim}` })
      .setImage(`${result[3].budgetim}`)
      .setColor("Random");
    let wvalk = new EmbedBuilder()
      .setTitle("Whalekyrie")
      .setDescription(`${result[2].whalekyrie}`)
      .setFooter({ text: `${result[1].whalekyrie}` })
      .addFields({ name: "Deck Cost:", value: `${result[0].whalekyrie}` })
      .setColor("Random")
      .setImage(`${result[3].whalekyrie}`);
    const m = await message.channel.send({ embeds: [cgp], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "tburn") {
        await i.update({ embeds: [tb], components: [tburn] });
      }
      if (i.customId == "tb") {
        await i.update({ embeds: [tb], components: [tburn] });
      }
      if (i.customId == "btoss") {
        await i.update({ embeds: [blomb], components: [btoss] });
      }
      if (i.customId == "blomb") {
        await i.update({ embeds: [blomb], components: [btoss] });
      }
      if (i.customId == "helpcgp") {
        await i.update({ embeds: [cgp], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [cgp], components: [row] });
      }
      //CCP Aggro
      if (i.customId == "ccpa") {
        await i.update({ embeds: [cpaggro], components: [ccpa] });
      }
      if (i.customId == "ccpaggro") {
        await i.update({ embeds: [cpaggro], components: [ccpa] });
      }
      if (i.customId == "wv") {
        await i.update({ embeds: [wvalk], components: [wv] });
      }
      if (i.customId == "wvalk") {
        await i.update({ embeds: [wvalk], components: [wv] });
      }
      if (i.customId == "imb") {
        await i.update({ embeds: [imb], components: [bim] });
      }
      if (i.customId == "bim") {
        await i.update({ embeds: [imb], components: [bim] });
      }
      if (i.customId == "spb") {
        await i.update({ embeds: [spbud], components: [spb] });
      }
      if (i.customId == "bgs") {
        await i.update({ embeds: [budgs], components: [bgs] });
      }
      if (i.customId == "spbud") {
        await i.update({ embeds: [spbud], components: [spb] });
      }
      if (i.customId == "budgs") {
        await i.update({ embeds: [budgs], components: [bgs] });
      }
      if (i.customId == "bcz") {
        await i.update({ embeds: [czb], components: [bcz] });
      }
      if (i.customId == "czb") {
        await i.update({ embeds: [czb], components: [bcz] });
      }
    });
  },
};

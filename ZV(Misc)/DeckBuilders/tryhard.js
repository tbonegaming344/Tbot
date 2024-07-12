const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `tryhard`,
  aliases: [
    `tryharddecks`,
    `tryhardhelp`,
    `helptryhard`,
    `decksmadebytryhard`,
    `trydecks`,
    `helptry`,
    `tryhelp`,
    `try`,
    `decksmadebytry`,
    `trycommands`,
    `commandstry`,
    `pvztryhardhelp`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("yk")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("one")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const one = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helptry")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ag")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ag = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("oneone")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ant")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ant = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("agr")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ck")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ck = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("anti")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ej")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ej = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cknight")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hb")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const hb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("eject")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hr")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const hr = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("hbird")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mm")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const mm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("hrr")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mil")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const mil = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("magm")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sd")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const sd = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("mill")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sb")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const sb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("sdemon")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("tk")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const tk = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("sband")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("yc")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const yc = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("tknuck")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ykm")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const yk = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ycm")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = [
      "101",
      "agraves",
      "anti",
      "cycleknight",
      "ejection",
      "hibird",
      "hrr",
      "magmartin",
      "mill",
      "speeddemon",
      "sunbandits",
      "tryknuckles",
      "ycm",
      "ykm",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let [result] = await db.query(`select oneone, agraves, anti, cycleknight, 
ejection, hibird, hrr, magmartin, mill, 
speeddemon, sunbandits, tryknuckles, ycm, ykm 
from sfdecks sf inner join ntdecks nt 
on (sf.deckinfo = nt.deckinfo)
inner join bcdecks bc
on (sf.deckinfo = bc.deckinfo)
inner join wkdecks wk 
on (sf.deckinfo = wk.deckinfo)
inner join pbdecks pb 
on (sf.deckinfo = pb.deckinfo)
inner join czdecks cz 
on (sf.deckinfo = cz.deckinfo)
inner join spdecks sp
on (sf.deckinfo = sp.deckinfo)
inner join sbdecks sb 
on (sf.deckinfo = sb.deckinfo)
inner join ncdecks nc 
on (sf.deckinfo = nc.deckinfo)
inner join rbdecks rb 
on (sf.deckinfo = rb.deckinfo)
inner join gkdecks gk 
on (sf.deckinfo = gk.deckinfo)
inner join imdecks im 
on (sf.deckinfo = im.deckinfo)
inner join hgdecks hg
on (sf.deckinfo = hg.deckinfo)`);
    let user = await client.users.fetch("265754905828917259");
    let tryhard = new EmbedBuilder()
      .setTitle("Tryhard Decks")
      .setDescription(
        `My commands for decks made by TryHard are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks Made By TryHard please use the commands listed above or click on the buttons below!
Note: Tryhard has ${decks.length} total decks in tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    let oneone = new EmbedBuilder()
      .setTitle("101.1")
      .setDescription(`${result[2].oneone}`)
      .setFooter({ text: `${result[1].oneone}` })
      .setColor("Random")
      .setImage(`${result[3].oneone}`)
      .addFields({ name: "Deck Cost", value: `${result[0].oneone}` });
    let agr = new EmbedBuilder()
      .setTitle("A-Graves")
      .setDescription(`${result[2].agraves}`)
      .setFooter({ text: `${result[1].agraves}` })
      .addFields({ name: "Deck Cost", value: `${result[0].agraves}` })
      .setColor("Random")
      .setImage(`${result[3].agraves}`);
    let anti = new EmbedBuilder()
      .setTitle("Anti")
      .setDescription(`${result[2].anti}`)
      .setFooter({ text: `${result[1].anti}` })
      .addFields({ name: "Deck Cost", value: `${result[0].anti}` })
      .setColor("Random")
      .setImage(result[3].anti);
    let cknight = new EmbedBuilder()
      .setTitle("Cycle Knight")
      .setDescription(`${result[2].cycleknight}`)
      .setFooter({ text: `${result[1].cycleknight}` })
      .addFields({ name: "Deck Cost", value: `${result[0].cycleknight}` })
      .setColor("Random")
      .setImage(`${result[3].cycleknight}`);
    let eject = new EmbedBuilder()
      .setTitle("Ejection")
      .setDescription(`${result[2].ejection}`)
      .setFooter({ text: `${result[1].ejection}` })
      .addFields({ name: "Deck Cost", value: `${result[0].ejection}` })
      .setColor("Random")
      .setImage(`${result[3].ejection}`);
    let hbird = new EmbedBuilder()
      .setTitle("Hibird")
      .setDescription(`${result[2].hibird}`)
      .setFooter({ text: `${result[1].hibird}` })
      .addFields({ name: "Deck Cost", value: `${result[0].hibird}` })
      .setColor("Random")
      .setImage(`${result[3].hibird}`);
    let hrr = new EmbedBuilder()
      .setTitle("High Roll Rings")
      .setDescription(`${result[2].hrr}`)
      .setFooter({ text: `${result[1].hrr}` })
      .addFields({ name: "Deck Cost", value: `${result[0].hrr}` })
      .setColor("Random")
      .setImage(`${result[3].hrr}`);
    let magm = new EmbedBuilder()
      .setTitle("Magnolia Martin")
      .setDescription(`${result[2].magmartin}`)
      .setFooter({ text: `${result[1].magmartin}` })
      .addFields({ name: "Deck Cost", value: `${result[0].magmartin}` })
      .setColor("Random")
      .setImage(`${result[3].magmartin}`);
    let mill = new EmbedBuilder()
      .setTitle("Mill")
      .setDescription(`${result[2].mill}`)
      .setFooter({ text: `${result[1].mill}` })
      .addFields({ name: "Deck Cost", value: `${result[0].mill}` })
      .setColor("Random")
      .setImage(`${result[3].mill}`);
    let sdemon = new EmbedBuilder()
      .setTitle("Speed Demon")
      .setDescription(`${result[2].speeddemon}`)
      .setFooter({ text: `${result[1].speeddemon}` })
      .addFields({ name: "Deck Cost", value: `${result[0].speeddemon}` })
      .setColor("Random")
      .setImage(`${result[3].speeddemon}`);
    let sband = new EmbedBuilder()
      .setTitle("Sun Bandits")
      .setDescription(`${result[2].sunbandits}`)
      .setFooter({ text: `${result[1].sunbandits}` })
      .addFields({ name: "Deck Cost", value: `${result[0].sunbandits}` })
      .setColor("Random")
      .setImage(`${result[3].sunbandits}`);
    let tknuck = new EmbedBuilder()
      .setTitle("Try Knuckles")
      .setDescription(`${result[2].tryknuckles}`)
      .setFooter({ text: `${result[1].tryknuckles}` })
      .addFields({ name: "Deck Cost", value: `${result[0].tryknuckles}` })
      .setColor("Random")
      .setImage(`${result[3].tryknuckles}`);
    let ycm = new EmbedBuilder()
      .setTitle("Young Cat Martin")
      .setDescription(`${result[2].ycm}`)
      .setFooter({ text: `${result[1].ycm}` })
      .addFields({ name: "Deck Cost", value: `${result[0].ycm}` })
      .setColor("Random")
      .setImage(`${result[3].ycm}`);
    let ykm = new EmbedBuilder()
      .setTitle("YKM")
      .setDescription(`${result[2].ykm}`)
      .setFooter({ text: `${result[1].ykm}` })
      .addFields({ name: "Deck Cost", value: `${result[0].ykm}` })
      .setColor("Random")
      .setImage(`${result[3].ykm}`);
    const m = await message.channel.send({
      embeds: [tryhard],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "one") {
        await i.update({ embeds: [oneone], components: [one] });
      }
      if (i.customId == "oneone") {
        await i.update({ embeds: [oneone], components: [one] });
      }
      if (i.customId == "helptry") {
        await i.update({ embeds: [tryhard], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [tryhard], components: [row] });
      }
      if (i.customId == "ag") {
        await i.update({ embeds: [agr], components: [ag] });
      }
      if (i.customId == "agr") {
        await i.update({ embeds: [agr], components: [ag] });
      }
      if (i.customId == "ant") {
        await i.update({ embeds: [anti], components: [ant] });
      }
      if (i.customId == "anti") {
        await i.update({ embeds: [anti], components: [ant] });
      }
      if (i.customId == "ck") {
        await i.update({ embeds: [cknight], components: [ck] });
      }
      if (i.customId == "cknight") {
        await i.update({ embeds: [cknight], components: [ck] });
      }
      if (i.customId == "ej") {
        await i.update({ embeds: [eject], components: [ej] });
      }
      if (i.customId == "eject") {
        await i.update({ embeds: [eject], components: [ej] });
      }
      if (i.customId == "gh") {
        await i.update({ embeds: [gherd], components: [gh] });
      }
      if (i.customId == "gherd") {
        await i.update({ embeds: [gherd], components: [gh] });
      }
      if (i.customId == "hb") {
        await i.update({ embeds: [hbird], components: [hb] });
      }
      if (i.customId == "hbird") {
        await i.update({ embeds: [hbird], components: [hb] });
      }
      if (i.customId == "hr") {
        await i.update({ embeds: [hrr], components: [hr] });
      }
      if (i.customId == "hrr") {
        await i.update({ embeds: [hrr], components: [hr] });
      }
      if (i.customId == "mm") {
        await i.update({ embeds: [magm], components: [mm] });
      }
      if (i.customId == "magm") {
        await i.update({ embeds: [magm], components: [mm] });
      }
      if (i.customId == "mil") {
        await i.update({ embeds: [mill], components: [mil] });
      }
      if (i.customId == "mill") {
        await i.update({ embeds: [mill], components: [mil] });
      }
      if (i.customId == "sd") {
        await i.update({ embeds: [sdemon], components: [sd] });
      }
      if (i.customId == "sdemon") {
        await i.update({ embeds: [sdemon], components: [sd] });
      }
      if (i.customId == "sb") {
        await i.update({ embeds: [sband], components: [sb] });
      }
      if (i.customId == "sband") {
        await i.update({ embeds: [sband], components: [sb] });
      }
      if (i.customId == "tk") {
        await i.update({ embeds: [tknuck], components: [tk] });
      }
      if (i.customId == "tknuck") {
        await i.update({ embeds: [tknuck], components: [tk] });
      }
      if (i.customId == "yc") {
        await i.update({ embeds: [ycm], components: [yc] });
      }
      if (i.customId == "ycm") {
        await i.update({ embeds: [ycm], components: [yc] });
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

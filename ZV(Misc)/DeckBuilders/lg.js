const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `lgtyqz`,
  aliases: [
    `lgdecks`,
    `lgtyqzdecks`,
    `lgty`,
    `lghelp`,
    `helplg`,
    `decksmadebylg`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pog")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mid")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const mid = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helplg")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ac")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ac = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("mid3")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("lgc")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const lgc = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("acon")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("lgcsb")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const lgcsb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("lgcon")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mc")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const mc = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("lgconsb")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("np")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const np = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("mcon")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pogger")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const pog = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("npa")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = [
      "3mid",
      "aggroconjure",
      "lgconjure",
      "lgconjuresb",
      "missioncontrol",
      "noplayingallowed",
      "poggerrazzi",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}** `;
    }
    let [result] =
      await db.query(`select mid3, aggroconjure, lgconjure, lgconjuresb, 
missioncontrol, noplayingallowed, poggerrazzi
from wkdecks wk 
inner join ifdecks fi
on (wk.deckinfo = fi.deckinfo)
inner join hgdecks hg 
on (wk.deckinfo = hg.deckinfo)
inner join sbdecks sb
on (wk.deckinfo = sb.deckinfo)
inner join ebdecks eb 
on (wk.deckinfo = eb.deckinfo)
inner join rbdecks rb 
on (wk.deckinfo = rb.deckinfo)`);
    let user = await client.users.fetch("321772369125572608");
    let lgtqyz = new EmbedBuilder()
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
    let mid3 = new EmbedBuilder()
      .setTitle("3-Mid")
      .setDescription(`${result[2].mid3}`)
      .setFooter({ text: `${result[1].mid3}` })
      .addFields({ name: "Deck Cost", value: `${result[0].mid3}` })
      .setColor("Random")
      .setImage(`${result[3].mid3}`);
    let acon = new EmbedBuilder()
      .setTitle("Aggro Conjure")
      .setDescription(`${result[2].aggroconjure}`)
      .setFooter({ text: `${result[1].aggroconjure}` })
      .addFields({ name: "Deck Cost", value: `${result[0].aggroconjure}` })
      .setImage(`${result[3].aggroconjure}`)
      .setColor("Random");
    let lgcon = new EmbedBuilder()
      .setTitle("LG Conjure")
      .setDescription(`${result[2].lgconjure}`)
      .setFooter({ text: `${result[1].lgconjure}` })
      .addFields({ name: "Deck Cost", value: `${result[0].lgconjure}` })
      .setImage(`${result[3].lgconjure}`)
      .setColor("Random");
    let lgconsb = new EmbedBuilder()
      .setTitle("LG Conjure")
      .setDescription(`${result[2].lgconjuresb}`)
      .setFooter({ text: `${result[1].lgconjuresb}` })
      .addFields({ name: "Deck Cost", value: `${result[0].lgconjuresb}` })
      .setImage(`${result[3].lgconjuresb}`)
      .setColor("Random");
    let mcon = new EmbedBuilder()
      .setTitle("Mission Control")
      .setDescription(`${result[2].missioncontrol}`)
      .setFooter({ text: `${result[1].missioncontrol}` })
      .addFields({ name: "Deck Cost", value: `${result[0].missioncontrol}` })
      .setColor("Random")
      .setImage(`${result[3].missioncontrol}`);
    let npa = new EmbedBuilder()
      .setTitle("No Playing Allowed")
      .setDescription(`${result[2].noplayingallowed}`)
      .setFooter({ text: `${result[1].noplayingallowed}` })
      .addFields({ name: "Deck Cost", value: `${result[0].noplayingallowed}` })
      .setColor("Random")
      .setImage(`${result[3].noplayingallowed}`);
    let pogger = new EmbedBuilder()
      .setTitle("Poggerrazzi")
      .setDescription(`${result[2].poggerrazzi}`)
      .setFooter({ text: `${result[1].poggerrazzi}` })
      .addFields({ name: "Deck Cost", value: `${result[0].poggerrazzi}` })
      .setColor("Random")
      .setImage(`${result[3].poggerrazzi}`);
    const m = await message.channel.send({
      embeds: [lgtqyz],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "mid") {
        await i.update({ embeds: [mid3], components: [mid] });
      }
      if (i.customId == "helplg") {
        await i.update({ embeds: [lgtqyz], components: [row] });
      }
      if (i.customId == "mid3") {
        await i.update({ embeds: [mid3], components: [mid] });
      }
      if (i.customId == "ac") {
        await i.update({ embeds: [acon], components: [ac] });
      }
      if (i.customId == "acon") {
        await i.update({ embeds: [acon], components: [ac] });
      }
      if (i.customId == "lgc") {
        await i.update({ embeds: [lgcon], components: [lgc] });
      }
      if (i.customId == "lgcon") {
        await i.update({ embeds: [lgcon], components: [lgc] });
      }
      if (i.customId == "lgcsb") {
        await i.update({ embeds: [lgconsb], components: [lgcsb] });
      }
      if (i.customId == "lgconsb") {
        await i.update({ embeds: [lgconsb], components: [lgcsb] });
      }
      if (i.customId == "mc") {
        await i.update({ embeds: [mcon], components: [mc] });
      }
      if (i.customId == "mcon") {
        await i.update({ embeds: [mcon], components: [mc] });
      }
      if (i.customId == "np") {
        await i.update({ embeds: [npa], components: [np] });
      }
      if (i.customId == "npa") {
        await i.update({ embeds: [npa], components: [np] });
      }
      if (i.customId == "pog") {
        await i.update({ embeds: [pogger], components: [pog] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [lgtqyz], components: [row] });
      }
      if (i.customId == "pogger") {
        await i.update({ embeds: [pogger], components: [pog] });
      }
    });
  },
};

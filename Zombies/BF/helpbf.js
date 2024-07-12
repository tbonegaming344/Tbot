const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `helpbf`,
  aliases: [
    `bfhelp`,
    `bfcommands`,
    `commandsbf`,
    `helpfreeze`,
    `helpbrainfreeze`,
    `brainfreezehelp`,
    `bfdecks`,
    `brainfreezedecks`,
  ],
  category: `Brain Freeze(BF)`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("spirates")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ap")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ap = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpbf")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bfba")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bfba = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("apirates")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("gt")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const gt = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("babf")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hi")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const hi = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gtech")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("lout")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const lout = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("himps")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("lin")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const lin = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("lockout")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mp")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const mp = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("lockin")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mor")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const mor = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("mpets")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("otks")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const otks = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("mora")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pm")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const pm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("otkswab")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("rac")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const rac = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pmop")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("rp")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const rp = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("racism")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sp")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const sp = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("rpack")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = [
      "aggropirates",
      "budgetbf",
      "gargolithtech",
      "helpbf",
      "himpter",
      "lockout",
      "lockthebathroom",
      "midpets",
      "morality",
      "otkswabbie",
      "petmop",
      "racism",
      "raiserpackage",
      "randombf",
      "slavery",
      ,
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n <@1043528908148052089> **${deck}**`;
    }
    let [result] = await db.query(`SELECT * FROM bfdecks`);
    let embed = new EmbedBuilder()
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1044626284346605588/1088605569214070875/IMG_1834.png"
      )
      .setTitle("BF Commands")
      .setDescription(`My commands for Brain Freeze(BF) are ${toBuildString}`)
      .setColor("Random")
      .setFooter({
        text: `To view the Brain Freeze decks please use the commands listed above or click on the buttons below!
Note: Brainfreeze has ${decks.length - 3} total decks in Tbot`,
      });
    let apirates = new EmbedBuilder()
      .setTitle("Aggro Pirates")
      .setDescription(`${result[2].aggropirates}`)
      .setFooter({ text: `${result[1].aggropirates}` })
      .addFields({ name: "Deck Cost", value: `${result[0].aggropirates}` })
      .setColor("Random")
      .setImage(`${result[3].aggropirates}`);
    let babf = new EmbedBuilder()
      .setTitle("BF Budget Piratein")
      .setDescription(`${result[2].budgetbf}`)
      .setFooter({ text: `${result[1].budgetbf}` })
      .addFields({ name: "Deck Cost", value: `${result[0].budgetbf}` })
      .setColor("Random")
      .setImage(`${result[3].budgetbf}`);
    let gtech = new EmbedBuilder()
      .setTitle("Gargolith Tech")
      .setDescription(`${result[2].gargolithtech}`)
      .setFooter({ text: `${result[1].gargolithtech}` })
      .addFields({ name: "Deck Cost", value: `${result[0].gargolithtech}` })
      .setColor("Random")
      .setImage(`${result[3].gargolithtech}`);
    let himps = new EmbedBuilder()
      .setTitle("Himpter")
      .setDescription(`${result[2].himps}`)
      .setFooter({ text: `${result[1].himps}` })
      .addFields({ name: "Deck Cost", value: `${result[0].himps}` })
      .setColor("Random")
      .setImage(`${result[3].himps}`);
    let lockin = new EmbedBuilder()
    .setTitle("Lock The Bathroom")
      .setDescription(`${result[2].lockin}`)
      .setFooter({ text: `${result[1].lockin}` })
      .addFields({ name: "Deck Cost", value: `${result[0].lockin}` })
      .setColor("Random")
      .setImage(`${result[3].lockin}`);
    let lockout = new EmbedBuilder()
      .setTitle("Pirataout")
      .setDescription(`${result[2].lockout}`)
      .setFooter({ text: `${result[1].lockout}` })
      .addFields({ name: "Deck Cost", value: `${result[0].lockout}` })
      .setColor("Random")
      .setImage(`${result[3].lockout}`);
    let mpets = new EmbedBuilder()
      .setTitle("Mid Pets")
      .setDescription(`${result[2].midpets}`)
      .setColor("Random")
      .setImage(`${result[3].midpets}`)
      .setFooter({ text: `${result[1].midpets}` })
      .addFields({ name: "Deck Cost", value: `${result[0].midpets}` });
    let mora = new EmbedBuilder()
      .setTitle("Morality")
      .setDescription(`${result[2].morality}`)
      .setColor("Random")
      .addFields({ name: "Deck Cost", value: `${result[0].morality}` })
      .setFooter({ text: `${result[1].morality}` })
      .setImage(`${result[3].morality}`);
    let otkswab = new EmbedBuilder()
      .setTitle("OTK Swabbie")
      .setDescription(`${result[2].otkswabbie}`)
      .setFooter({ text: `${result[1].otkswabbie}` })
      .addFields({ name: "Deck Cost", value: `${result[0].otkswabbie}` })
      .setColor("Random")
      .setImage(`${result[3].otkswabbie}`);
    let pmop = new EmbedBuilder()
      .setTitle("Pet Mop")
      .setDescription(`${result[2].petmop}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].petmop}` })
      .addFields({ name: "Deck Cost", value: `${result[0].petmop}` })
      .setImage(`${result[3].petmop}`);
    let racism = new EmbedBuilder()
      .setTitle("Racism")
      .setDescription(`${result[2].racism}`)
      .setColor("Random")
      .addFields({ name: "Deck Cost", value: `${result[0].racism}` })
      .setFooter({ text: `${result[1].racism}` })
      .setImage(`${result[3].racism}`);
    let rpack = new EmbedBuilder()
      .setTitle("Raiser Package")
      .setDescription(`${result[2].raiserpackage}`)
      .setFooter({ text: `${result[1].raiserpackage}` })
      .addFields({ name: "Deck Cost", value: `${result[0].raiserpackage}` })
      .setColor("Random")
      .setImage(`${result[3].raiserpackage}`);
    let spirates = new EmbedBuilder()
      .setTitle("Slavery AKA Secret Pirates")
      .setDescription(`${result[2].slavery}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].slavery}` })
      .addFields({ name: "Deck Cost", value: `${result[0].slavery}` })
      .setImage(`${result[3].slavery}`);
    const m = await message.channel.send({
      embeds: [embed],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "ap") {
        await i.update({ embeds: [apirates], components: [ap] });
      }
      if (i.customId == "helpbf") {
        await i.update({ embeds: [embed], components: [row] });
      }
      if (i.customId == "apirates") {
        await i.update({ embeds: [apirates], components: [ap] });
      }
      if (i.customId == "bfba") {
        await i.update({ embeds: [babf], components: [bfba] });
      }
      if (i.customId == "babf") {
        await i.update({ embeds: [babf], components: [bfba] });
      }
      if (i.customId == "mp") {
        await i.update({ embeds: [mpets], components: [mp] });
      }
      if (i.customId == "mpets") {
        await i.update({ embeds: [mpets], components: [mp] });
      }
      if (i.customId == "sp") {
        await i.update({ embeds: [spirates], components: [sp] });
      }
      if (i.customId == "spirates") {
        await i.update({ embeds: [spirates], components: [sp] });
      }
      if (i.customId == "gt") {
        await i.update({ embeds: [gtech], components: [gt] });
      }
      if (i.customId == "hy") {
        await i.update({ embeds: [hyard], components: [hy] });
      }
      if (i.customId == "gtech") {
        await i.update({ embeds: [gtech], components: [gt] });
      }
      if (i.customId == "hi") {
        await i.update({ embeds: [himps], components: [hi] });
      }
      if (i.customId == "hyard") {
        await i.update({ embeds: [hyard], components: [hy] });
      }
      if (i.customId == "lin") {
        await i.update({ embeds: [lockin], components: [lin] });
      }
      if (i.customId == "himps") {
        await i.update({ embeds: [himps], components: [hi] });
      }
      if (i.customId == "lout") {
        await i.update({ embeds: [lockout], components: [lout] });
      }
      if (i.customId == "lockin") {
        await i.update({ embeds: [lockin], components: [lin] });
      }
      if (i.customId == "mor") {
        await i.update({ embeds: [mora], components: [mor] });
      }
      if (i.customId == "lockout") {
        await i.update({ embeds: [lockout], components: [lout] });
      }
      if (i.customId == "otks") {
        await i.update({ embeds: [otkswab], components: [otks] });
      }
      if (i.customId == "pm") {
        await i.update({ embeds: [pmop], components: [pm] });
      }
      if (i.customId == "pmop") {
        await i.update({ embeds: [pmop], components: [pm] });
      }
      if (i.customId == "mora") {
        await i.update({ embeds: [mora], components: [mor] });
      }
      if (i.customId == "rac") {
        await i.update({ embeds: [racism], components: [rac] });
      }
      if (i.customId == "otkswab") {
        await i.update({ embeds: [otkswab], components: [otks] });
      }
      if (i.customId == "rp") {
        await i.update({ embeds: [rpack], components: [rp] });
      }
      if (i.customId == "racism") {
        await i.update({ embeds: [racism], components: [rac] });
      }
      if (i.customId == "rpack") {
        await i.update({ embeds: [rpack], components: [rp] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [embed], components: [row] });
      }
    });
  },
};

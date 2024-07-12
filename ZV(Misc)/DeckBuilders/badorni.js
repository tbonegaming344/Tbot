const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `badorni`,
  aliases: [
    `decksmadebybadorni`,
    `badornihelp`,
    `helpbadorni`,
    `baddecks`,
    `decksmadebybad`,
    `badhelp`,
    `helpbad`,
    `badornidecks`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pyromania")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("aa")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const aa = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpbad")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("aaa")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const aaa = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("aagor")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bmp")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bmop = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("a")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cy")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const cy = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bmop")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("fr")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const fr = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cburn")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ft")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ft = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("freal")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hb")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const hb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("fti")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("morb")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const morb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("hburn")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pm")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const pm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("mop")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pys")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const pys = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bmop")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pyro")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const pyro = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pysol")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = [
      "antiagor",
      "antiagoragor",
      "budgetplantmop",
      "cyburn",
      "freezeheal",
      "frozentelimps",
      "healburn",
      "moprbius",
      "plantmop",
      "psychosolstice",
      "pyromania"
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let [result] =
      await db.query(`select antiagor, antiagoragor, budgetcc, cyburn,
	freezeheal, frozentelimps, healburn, mopribus, plantmop,
	psychosolstice, pyromania from ntdecks nt
	inner join ccdecks cc
	on (nt.deckinfo = cc.deckinfo)
	inner join ncdecks nc
	on (nt.deckinfo = nc.deckinfo)
	inner join rodecks ro
	on (nt.deckinfo = ro.deckinfo)
	inner join hgdecks hg 
	on (nt.deckinfo = hg.deckinfo)
	inner join sfdecks sf
	on (nt.deckinfo = sf.deckinfo)
	inner join czdecks cz 
	on (nt.deckinfo = cz.deckinfo)
  inner join zmdecks zm
  on (nt.deckinfo = zm.deckinfo)`);
    const user = await client.users.fetch("749149322561716294");
    let bad = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}`
      )
      .setThumbnail(user.displayAvatarURL())
      .setFooter({
        text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} decks in Tbot`,
      })
      .setColor("Random");
    let coloboy = new EmbedBuilder()
      .setTitle("Anti anti anti agor")
      .setDescription(`${result[2].antiagor}`)
      .addFields({ name: "Deck Cost", value: `${result[0].antiagor}` })
      .setFooter({ text: `${result[1].antiagor}` })
      .setColor("Random")
      .setImage(`${result[3].antiagor}`);
    let a = new EmbedBuilder()
      .setImage(`${result[3].antiagoragor}`)
      .setTitle("Anti Agor Agor")
      .setDescription(`${result[2].antiagoragor}`)
      .setColor("Random")
      .addFields({ name: "Deck Cost", value: `${result[0].antiagoragor}` })
      .setFooter({ text: `${result[1].antiagoragor}` });
    let bmp = new EmbedBuilder()
      .setTitle("CC Budget Plant Mop")
      .setDescription(`${result[2].budgetcc}`)
      .setFooter({ text: `${result[1].budgetcc}` })
      .addFields({ name: "Deck Cost", value: `${result[0].budgetcc}` })
      .setColor("Random")
      .setImage(`${result[3].budgetcc}`);
    let cburn = new EmbedBuilder()
      .setTitle("Cyburn")
      .setDescription(`${result[2].cyburn}`)
      .setFooter({ text: `${result[1].cyburn}` })
      .addFields({ name: "Deck Cost", value: `${result[0].cyburn}` })
      .setColor("Random")
      .setImage(`${result[3].cyburn}`);
    let freal = new EmbedBuilder()
      .setTitle("Freeze Heal")
      .setDescription(`${result[2].freezeheal}`)
      .setFooter({ text: `${result[1].freezeheal}` })
      .setColor("Random")
      .addFields({ name: "Deck Cost", value: `${result[0].freezeheal}` })
      .setImage(`${result[3].freezeheal}`);
    let fti = new EmbedBuilder()
      .setTitle("Softcore Bigfeet Fetish")
      .setDescription(`${result[2].frozentelimps}`)
      .setColor("Random")
      .setImage(`${result[3].frozentelimps}`)
      .addFields({ name: "Deck Cost", value: `${result[0].frozentelimps}` })
      .setFooter({ text: `${result[1].frozentelimps}` });
    let hburn = new EmbedBuilder()
      .setTitle("Heal Burn")
      .setDescription(`${result[2].healburn}`)
      .setFooter({ text: `${result[1].healburn}` })
      .addFields({ name: "Deck Cost", value: `${result[0].healburn}` })
      .setImage(`${result[3].healburn}`)
      .setColor("Random");
    let mop = new EmbedBuilder()
      .setTitle("Moprbius")
      .setDescription(`${result[2].mopribus}`)
      .setColor("Random")
      .addFields({ name: "Deck Cost", value: `${result[0].mopribus}` })
      .setFooter({ text: `${result[1].mopribus}` })
      .setImage(`${result[3].mopribus}`);
    let pmop = new EmbedBuilder()
      .setTitle("Plant Mop")
      .setDescription(`${result[2].plantmop}`)
      .setFooter({ text: `${result[1].plantmop}` })
      .addFields({ name: "Deck Cost", value: `${result[0].plantmop}` })
      .setColor("Random")
      .setImage(`${result[3].plantmop}`);
    let pysol = new EmbedBuilder()
      .setTitle("Psycho Solstice")
      .setDescription(`${result[2].psychosolstice}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].psychosolstice}` })
      .addFields({ name: "Deck Cost", value: `${result[0].psychosolstice}` })
      .setImage(`${result[3].psychosolstice}`);
      let pyromania = new EmbedBuilder()
      .setTitle("Pyromania")
      .setDescription(`${result[2].pyromania}`)
      .setColor("Random")
      .setFooter({text: `${result[1].pyromania}`})
      .addFields({name: "Deck Cost", value: `${result[0].pyromania}`})
      .setImage(`${result[3].pyromania}`)
    const m = await message.channel.send({ embeds: [bad], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "aa") {
        await i.update({ embeds: [coloboy], components: [aa] });
      }
      if (i.customId == "helpbad") {
        await i.update({ embeds: [bad], components: [row] });
      }
      if (i.customId == "pys") {
        await i.update({ embeds: [pysol], components: [pys] });
      }
      if (i.customId == "pysol") {
        await i.update({ embeds: [pysol], components: [pys] });
      }
      if (i.customId == "aaa") {
        await i.update({ embeds: [a], components: [aaa] });
      }
      if (i.customId == "morb") {
        await i.update({ embeds: [mop], components: [morb] });
      }
      if (i.customId == "mop") {
        await i.update({ embeds: [mop], components: [morb] });
      }
      if (i.customId == "aagor") {
        await i.update({ embeds: [coloboy], components: [aa] });
      }
      if (i.customId == "a") {
        await i.update({ embeds: [a], components: [aaa] });
      }
      if (i.customId == "cy") {
        await i.update({ embeds: [cburn], components: [cy] });
      }
      if (i.customId == "ft") {
        await i.update({ embeds: [fti], components: [ft] });
      }
      if (i.customId == "cburn") {
        await i.update({ embeds: [cburn], components: [cy] });
      }
      if (i.customId == "hb") {
        await i.update({ embeds: [hburn], components: [hb] });
      }
      if (i.customId == "fti") {
        await i.update({ embeds: [fti], components: [ft] });
      }
      if (i.customId == "fr") {
        await i.update({ embeds: [freal], components: [fr] });
      }
      if (i.customId == "freal") {
        await i.update({ embeds: [freal], components: [fr] });
      }
      if (i.customId == "pm") {
        await i.update({ embeds: [pmop], components: [pm] });
      }
      if (i.customId == "hburn") {
        await i.update({ embeds: [hburn], components: [hb] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [bad], components: [row] });
      }
      if (i.customId == "bmop") {
        await i.update({ embeds: [bmp], components: [bmop] });
      }
      if (i.customId == "bmp") {
        await i.update({ embeds: [bmp], components: [bmop] });
      }
        //Pyromania
        if(i.customId == "pyro"){
          await i.update({embeds: [pyromania], components: [pyro]})
        }
        if(i.customId == "pyromania"){
          await i.update({embeds: [pyromania], components: [pyro]})
        }
    });
  },
};

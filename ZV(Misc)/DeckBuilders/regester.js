const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `regster`,
  aliases: [
    `decksmadebyregster`,
    `regsterdecks`,
    `theregster`,
    `helpregster`,
    `regsterhelp`,
    `regester`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("taggro")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bp")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bp = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpr")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bt")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bt = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bpack")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("kt")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const kt = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bticia")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pp")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const pp = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ktemp")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pc")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const pc = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ppack")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("rb")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const rb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pcon")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("rm")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const rm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("rburst")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sc")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const sc = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("rmid")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("tele")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const tele = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("scuc")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ta")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ta = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("teleburn")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = [
      "burnpackage",
      "burnticia",
      "kingtempo",
      "professorpackage",
      "plankcontrol",
      "rampburst",
      "rampmidrose",
      "savagecucumber",
      "teleburn",
      "tokenaggro",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let [result] =
      await db.query(`select burnpackage, burnticia, kingtempo, professorpackage,
plankcontrol, rampburst, rampmidrose, savagecucumber, teleburn, tokenaggro 
from ebdecks eb inner join imdecks im 
on (eb.deckinfo = im.deckinfo)
inner join smdecks sm 
on (eb.deckinfo = sm.deckinfo)
inner join pbdecks pb 
on (eb.deckinfo = pb.deckinfo)
inner join ntdecks nt
on (eb.deckinfo = nt.deckinfo)
inner join wkdecks wk 
on (eb.deckinfo = wk.deckinfo)
inner join rodecks ro 
on (eb.deckinfo = ro.deckinfo)
inner join gkdecks gk 
on (eb.deckinfo = gk.deckinfo)
inner join spdecks sp 
on (eb.deckinfo = sp.deckinfo)`);
    let reg = new EmbedBuilder()
      .setTitle("Regster Decks")
      .setDescription(
        `My commands for decks made by Regster are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks Made By Regster please use the commands listed above or click on the buttons below!
Note: Regster has ${decks.length} total decks in Tbot`,
      })
      .setColor("Random");
    let bpack = new EmbedBuilder()
      .setTitle("Burn Package")
      .setDescription(`${result[2].burnpackage}`)
      .setFooter({ text: `${result[1].burnpackage}` })
      .addFields({ name: "Deck Cost", value: `${result[0].burnpackage}` })
      .setColor("Random")
      .setImage(`${result[3].burnpackage}`);
    let bticia = new EmbedBuilder()
      .setTitle("Burnticia")
      .setDescription(`${result[2].burnticia}`)
      .setFooter({ text: `${result[1].burnticia}` })
      .addFields({ name: "Deck Cost", value: `${result[0].burnticia}` })
      .setColor("Random")
      .setImage(`${result[3].burnticia}`);
    let ktemp = new EmbedBuilder()
      .setTitle("King Tempo")
      .setDescription(`${result[2].kingtempo}`)
      .setFooter({ text: `${result[1].kingtempo}` })
      .addFields({ name: "Deck Cost", value: `${result[0].kingtempo}` })
      .setColor("Random")
      .setImage(`${result[3].kingtempo}`);
    let ppack = new EmbedBuilder()
      .setTitle("Professor Package")
      .setDescription(`${result[2].professorpackage}`)
      .setFooter({ text: `${result[1].professorpackage}` })
      .setColor("Random")
      .setImage(`${result[3].professorpackage}`)
      .addFields({ name: "Deck Cost", value: `${result[0].professorpackage}` });
    let pcon = new EmbedBuilder()
      .setTitle("Plank Control")
      .setDescription(`${result[2].plankcontrol}`)
      .setFooter({ text: `${result[1].plankcontrol}` })
      .addFields({ name: "Deck Cost", value: `${result[0].plankcontrol}` })
      .setColor("Random")
      .setImage(`${result[3].plankcontrol}`);
    let rburst = new EmbedBuilder()
      .setTitle("Ramp Burst")
      .setDescription(`${result[2].rampburst}`)
      .setFooter({ text: `	${result[1].rampburst}` })
      .addFields({ name: "Deck Cost", value: `${result[0].rampburst}` })
      .setColor("Random")
      .setImage(`${result[3].rampburst}`);
    let rmid = new EmbedBuilder()
      .setTitle("Ramp Midrose")
      .setDescription(`${result[2].rampmidrose}`)
      .setFooter({ text: `${result[1].rampmidrose}` })
      .setColor("Random")
      .addFields({ name: "Deck Cost", value: `${result[0].rampmidrose}` })
      .setImage(`${result[3].rampmidrose}`);
    let scuc = new EmbedBuilder()
      .setTitle("Savage Cucumber")
      .setDescription(`${result[2].savagecucumber}`)
      .setFooter({ text: `${result[1].savagecucumber}` })
      .addFields({ name: "Deck Cost", value: `${result[0].savagecucumber}` })
      .setColor("Random")
      .setImage(`${result[3].savagecucumber}`);
    let teleburn = new EmbedBuilder()
      .setTitle("TeleBurn")
      .setDescription(`${result[2].teleburn}`)
      .setFooter({ text: `${result[1].teleburn}` })
      .addFields({ name: "Deck Cost", value: `${result[0].teleburn}` })
      .setColor("Random")
      .setImage(`${result[3].teleburn}`);
    let taggro = new EmbedBuilder()
      .setTitle("Token Aggro")
      .setDescription(`${result[2].tokenaggro}`)
      .setFooter({ text: `${result[1].tokenaggro}` })
      .addFields({ name: "Deck Cost", value: `${result[0].tokenaggro}` })
      .setImage(`${result[3].tokenaggro}`)
      .setColor("Random");
    const m = await message.channel.send({ embeds: [reg], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "bp") {
        await i.update({ embeds: [bpack], components: [bp] });
      }
      if (i.customId == "bpack") {
        await i.update({ embeds: [bpack], components: [bp] });
      }
      if (i.customId == "helpr") {
        await i.update({ embeds: [reg], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [reg], components: [row] });
      }
      if (i.customId == "tele") {
        await i.update({ embeds: [teleburn], components: [tele] });
      }
      if (i.customId == "teleburn") {
        await i.update({ embeds: [teleburn], components: [tele] });
      }
      if (i.customId == "bt") {
        await i.update({ embeds: [bticia], components: [bt] });
      }
      if (i.customId == "bticia") {
        await i.update({ embeds: [bticia], components: [bt] });
      }
      if (i.customId == "kt") {
        await i.update({ embeds: [ktemp], components: [kt] });
      }
      if (i.customId == "ktemp") {
        await i.update({ embeds: [ktemp], components: [kt] });
      }
      if (i.customId == "pp") {
        await i.update({ embeds: [ppack], components: [pp] });
      }
      if (i.customId == "ppack") {
        await i.update({ embeds: [ppack], components: [pp] });
      }
      if (i.customId == "pc") {
        await i.update({ embeds: [pcon], components: [pc] });
      }
      if (i.customId == "pcon") {
        await i.update({ embeds: [pcon], components: [pc] });
      }
      if (i.customId == "rb") {
        await i.update({ embeds: [rburst], components: [rb] });
      }
      if (i.customId == "rburst") {
        await i.update({ embeds: [rburst], components: [rb] });
      }
      if (i.customId == "rm") {
        await i.update({ embeds: [rmid], components: [rm] });
      }
      if (i.customId == "rmid") {
        await i.update({ embeds: [rmid], components: [rm] });
      }
      if (i.customId == "sc") {
        await i.update({ embeds: [scuc], components: [sc] });
      }
      if (i.customId == "scuc") {
        await i.update({ embeds: [scuc], components: [sc] });
      }
      if (i.customId == "ta") {
        await i.update({ embeds: [taggro], components: [ta] });
      }
      if (i.customId == "taggro") {
        await i.update({ embeds: [taggro], components: [ta] });
      }
    });
  },
};

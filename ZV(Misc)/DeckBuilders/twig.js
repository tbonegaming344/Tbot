const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `twig`,
  aliases: [`decksmadebytwig`, `twigdecks`, `twighelp`, `helptwig`, `lyraah`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("yuletide")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bpb")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    //Budget PB
    const bpb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpt")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cb")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const cb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pbb")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("fi")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const fi = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cbose")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("gt")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const gt = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("fio")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mil")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const mil = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gtech")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("st")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const st = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("mill")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("yule")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const yule = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("stron")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = [
      "budgetpb",
      "combose",
      "fiora",
      "gargolithtech",
      "millie",
      "startron",
      "yuletide",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let [result] =
      await db.query(`select budgetpb, combose, fiora, gargolithtech,
millie, startron, yuletide 
from pbdecks pb inner join rodecks ro 
on (pb.deckinfo = ro.deckinfo) 
inner join smdecks sm
on (pb.deckinfo = sm.deckinfo) 
inner join bfdecks bf 
on (pb.deckinfo = bf.deckinfo)
inner join gsdecks gs
on (pb.deckinfo = gs.deckinfo) 
inner join ctdecks ct
on (pb.deckinfo = ct.deckinfo) `);
    let user = await client.users.fetch("712967053870628984");
    let twig = new EmbedBuilder()
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
    //Budget PB
    let budgetpb = new EmbedBuilder()
      .setTitle("Budget Sciburn")
      .setDescription(`${result[2].budgetpb}`)
      .setFooter({ text: `${result[1].budgetpb}` })
      .addFields({ name: "Deck Cost", value: `${result[0].budgetpb}` })
      .setImage(`${result[3].budgetpb}`)
      .setColor("Random");
    let cbose = new EmbedBuilder()
      .setTitle("Combose")
      .setDescription(`${result[2].combose}`)
      .setFooter({ text: `${result[1].combose}` })
      .addFields({ name: "Deck Cost", value: `${result[0].combose}` })
      .setColor("Random")
      .setImage(`${result[3].combose}`);
    let fio = new EmbedBuilder()
      .setTitle("Patheon Fiora")
      .setDescription(`${result[2].fiora}`)
      .setFooter({ text: `${result[1].fiora}` })
      .addFields({ name: "Deck Cost", value: `${result[0].fiora}` })
      .setColor("Random")
      .setImage(`${result[3].fiora}`);
    let gtech = new EmbedBuilder()
      .setTitle("Gargolith Tech")
      .setDescription(`${result[2].gargolithtech}`)
      .setFooter({ text: `${result[1].gargolithtech}` })
      .addFields({ name: "Deck Cost", value: `${result[0].gargolithtech}` })
      .setColor("Random")
      .setImage(`${result[3].gargolithtech}`);
    let mill = new EmbedBuilder()
      .setTitle("Millie")
      .setDescription(`${result[2].millie}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].millie}` })
      .addFields({ name: "Deck Cost", value: `${result[0].millie}` })
      .setImage(`${result[3].millie}`);
    let stron = new EmbedBuilder()
      .setTitle("Startron")
      .setDescription(`${result[2].startron}`)
      .setFooter({ text: `${result[1].startron}` })
      .addFields({ name: "Deck Cost", value: `${result[0].startron}` })
      .setImage(`${result[3].startron}`)
      .setColor("Random");
    let yuletide = new EmbedBuilder()
      .setTitle("Yuletide")
      .setDescription(`${result[2].yuletide}`)
      .setFooter({ text: `${result[1].yuletide}` })
      .addFields({ name: "Deck Cost", value: `${result[0].yuletide}` })
      .setColor("Random")
      .setImage(`${result[3].yuletide}`);
    const m = await message.channel.send({ embeds: [twig], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      //Budget PB
      if (i.customId == "bpb") {
        await i.update({ embeds: [budgetpb], components: [bpb] });
      }
      if (i.customId == "pbb") {
        await i.update({ embeds: [budgetpb], components: [bpb] });
      }
      if (i.customId == "cb") {
        await i.update({ embeds: [cbose], components: [cb] });
      }
      if (i.customId == "cbose") {
        await i.update({ embeds: [cbose], components: [cb] });
      }
      if (i.customId == "fi") {
        await i.update({ embeds: [fio], components: [fi] });
      }
      if (i.customId == "fio") {
        await i.update({ embeds: [fio], components: [fi] });
      }
      if (i.customId == "yule") {
        await i.update({ embeds: [yuletide], components: [yule] });
      }
      if (i.customId == "yuletide") {
        await i.update({ embeds: [yuletide], components: [yule] });
      }
      if (i.customId == "gt") {
        await i.update({ embeds: [gtech], components: [gt] });
      }
      if (i.customId == "gtech") {
        await i.update({ embeds: [gtech], components: [gt] });
      }
      if (i.customId == "helpt") {
        await i.update({ embeds: [twig], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [twig], components: [row] });
      }
      if (i.customId == "mil") {
        await i.update({ embeds: [mill], components: [mil] });
      }
      if (i.customId == "mill") {
        await i.update({ embeds: [mill], components: [mil] });
      }
      if (i.customId == "st") {
        await i.update({ embeds: [stron], components: [st] });
      }
      if (i.customId == "stron") {
        await i.update({ embeds: [stron], components: [st] });
      }
    });
  },
};

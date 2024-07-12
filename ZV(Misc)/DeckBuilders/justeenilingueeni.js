const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `justeenilingueeni`,
  aliases: [
    `justeenilingueenihelp`,
    `helpjusteenilingueeni`,
    `justeenilingueenidecks`,
    `decksmadebyjusteenilingueeni`,
    `justeeni`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("zmb")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bcz")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bcz = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpj")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bgs")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bgs = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("czb")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bnc")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bnc = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gsb")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("brb")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    //budgetrb
    const brb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ncb")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bro")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bro = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("rbb")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bsf")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bsf = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("rob")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bzm")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    //Budget Zmech
    const bzm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("sfb")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const decks = [
      "budgetcz",
      "budgetgs",
      "budgetnc",
      "budgetrb",
      "budgetro",
      "budgetsf",
      "budgetzm",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let [result] =
      await db.query(`select budgetcz, budgetgs, budgetnc, budgetrb,
budgetro, budgetswarmsf, budgetzm 
from czdecks cz inner join gsdecks gs
on (cz.deckinfo = gs.deckinfo)
inner join ncdecks nc 
on (cz.deckinfo = nc.deckinfo)
inner join rbdecks rb 
on (cz.deckinfo = rb.deckinfo)
inner join rodecks ro 
on (cz.deckinfo = ro.deckinfo)
inner join sfdecks sf
on (cz.deckinfo = sf.deckinfo)
inner join zmdecks zm 
on (cz.deckinfo = zm.deckinfo)`);
    let user = await client.users.fetch("685927469462716424");
    let jeet = new EmbedBuilder()
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
    //Budget Mop Shadow
    let budgetgs = new EmbedBuilder()
      .setTitle("GS Budget Mop")
      .setDescription(`${result[2].budgetgs}`)
      .setFooter({ text: `${result[1].budgetgs}` })
      .addFields({ name: "Deck Cost", value: `${result[0].budgetgs}` })
      .setColor("Random")
      .setImage(`${result[3].budgetgs}`);
    //Budget CZ
    let czb = new EmbedBuilder()
      .setTitle("BudgetMopZilla")
      .setDescription(`${result[2].budgetcz}`)
      .setFooter({ text: `${result[1].budgetcz}` })
      .addFields({ name: "Deck Cost", value: `${result[0].budgetcz}` })
      .setColor("Random")
      .setImage(`${result[3].budgetcz}`);
    //Budget Swarm NC
    let budgetnc = new EmbedBuilder()
      .setTitle("NC Budget Swarm")
      .setDescription(`${result[2].budgetnc}`)
      .setFooter({ text: `${result[1].budgetnc}` })
      .addFields({ name: "Deck Cost", value: `${result[0].budgetnc}` })
      .setColor("Random")
      .setImage(`${result[3].budgetnc}`);
    //Budget Rustbolt
    let budgetrb = new EmbedBuilder()
      .setTitle("Budget Swarm")
      .setDescription(`${result[2].budgetrb}`)
      .setFooter({ text: `${result[1].budgetrb}` })
      .addFields({ name: "Deck Cost", value: `${result[0].budgetrb}` })
      .setImage(`${result[3].budgetrb}`)
      .setColor("Random");
    //Budget Heal Midrose
    let bhmr = new EmbedBuilder()
      .setTitle("Budget Heal Midrose")
      .setDescription(`${result[2].budgetro}`)
      .setFooter({ text: `${result[1].budgetro}` })
      .addFields({ name: "Deck Cost", value: `${result[0].budgetro}` })
      .setColor("Random")
      .setImage(`${result[3].budgetro}`);
    //Budget Swarm SF
    let budgetswarm = new EmbedBuilder()
      .setTitle("SF Budget Swarm")
      .setDescription(`${result[2].budgetswarmsf}`)
      .setFooter({ text: `${result[1].budgetswarmsf}` })
      .addFields({ name: "Deck Cost", value: `${result[0].budgetswarmsf}` })
      .setColor("Random")
      .setImage(`${result[3].budgetswarmsf}`);
    //Budget Zmech
    let budgetzm = new EmbedBuilder()
      .setTitle("ZM Budget Swarm")
      .setDescription(`${result[2].budgetzm}`)
      .setFooter({ text: `${result[1].budgetzm}` })
      .addFields({ name: "Deck Cost", value: `${result[0].budgetzm}` })
      .setColor("Random")
      .setImage(`${result[3].budgetzm}`);
    const m = await message.channel.send({ embeds: [jeet], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      //Budget Mop Shadow
      if (i.customId == "bgs") {
        await i.update({ embeds: [budgetgs], components: [bgs] });
      }
      if (i.customId == "gsb") {
        await i.update({ embeds: [budgetgs], components: [bgs] });
      }
      //Budget CZ
      if (i.customId == "bcz") {
        await i.update({ embeds: [czb], components: [bcz] });
      }
      if (i.customId == "czb") {
        await i.update({ embeds: [czb], components: [bcz] });
      }
      //Budget Rustbolt
      if (i.customId == "brb") {
        await i.update({ embeds: [budgetrb], components: [brb] });
      }
      if (i.customId == "rbb") {
        await i.update({ embeds: [budgetrb], components: [brb] });
      }
      //Budget Heal Midrose
      if (i.customId == "bro") {
        await i.update({ embeds: [bhmr], components: [bro] });
      }
      if (i.customId == "rob") {
        await i.update({ embeds: [bhmr], components: [bro] });
      }
      //Budget Swarm SF
      if (i.customId == "bsf") {
        await i.update({ embeds: [budgetswarm], components: [bsf] });
      }
      if (i.customId == "sfb") {
        await i.update({ embeds: [budgetswarm], components: [bsf] });
      }
      //Budget Swarm NC
      if (i.customId == "bnc") {
        await i.update({ embeds: [budgetnc], components: [bnc] });
      }
      if (i.customId == "ncb") {
        await i.update({ embeds: [budgetnc], components: [bnc] });
      }
      //Budget Zmech
      if (i.customId == "bzm") {
        await i.update({ embeds: [budgetzm], components: [bzm] });
      }
      if (i.customId == "zmb") {
        await i.update({ embeds: [budgetzm], components: [bzm] });
      }
      if (i.customId == "helpj") {
        await i.update({ embeds: [jeet], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [jeet], components: [row] });
      }
    });
  },
};

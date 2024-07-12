const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `knabbs`,
  aliases: [`knabbshelp`, `helpknabbs`, `knabbsdecks`, `decksmadebyknabbs`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("vsster")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bs")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bs = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpk")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ff")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ff = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bswarm")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("limb")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const limb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("fflare")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("vss")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const vss = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("limbo")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["buffswarm", "funnyflare", "knucklesmop", "valksterstache"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}** `;
    }
    let [result] = await db.query(`select buffswarm, funnyflare, knucklesmop, 
valksterstache 
from ncdecks nc 
inner join sfdecks sf
on (nc.deckinfo = sf.deckinfo)
inner join gkdecks gk 
on (nc.deckinfo = gk.deckinfo) 
inner join pbdecks pb 
on (nc.deckinfo = pb.deckinfo)`);
    let user = await client.users.fetch("729709542623150123");
    let knabbs = new EmbedBuilder()
      .setTitle(`${user.globalName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.globalName} are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks Made By ${user.globalName} please use the commands listed above or click on the buttons below!
Note: ${user.globalName} has ${decks.length} total decks in Tbot`,
      })
      .setColor("Random")
      .setThumbnail(user.displayAvatarURL());
    let bswarm = new EmbedBuilder()
      .setTitle("Buff Swarm")
      .setDescription(`${result[2].buffswarm}`)
      .setFooter({ text: `${result[1].buffswarm}` })
      .addFields({ name: "Deck Cost", value: `${result[0].buffswarm}` })
      .setColor("Random")
      .setImage(`${result[3].buffswarm}`);
    let fflare = new EmbedBuilder()
      .setTitle("Funny Flare")
      .setDescription(`${result[2].funnyflare}`)
      .setFooter({ text: `${result[1].funnyflare}` })
      .addFields({ name: "Deck Cost", value: `${result[0].funnyflare}` })
      .setColor("Random")
      .setImage(`${result[3].funnyflare}`);
    let limbo = new EmbedBuilder()
      .setTitle("Mop Knuckles")
      .setDescription(`${result[2].knucklesmop}`)
      .setFooter({ text: `${result[1].knucklesmop}` })
      .setColor("Random")
      .addFields({ name: "Deck Cost", value: `${result[0].knucklesmop}` })
      .setImage(`${result[3].knucklesmop}`);
    //valksterstache
    let valkstache = new EmbedBuilder()
      .setTitle("Valksterstache")
      .setDescription(`${result[2].valksterstache}`)
      .setFooter({ text: `${result[1].valksterstache}` })
      .addFields({ name: "Deck Cost", value: `${result[0].valksterstache}` })
      .setColor("Random")
      .setImage(`${result[3].valksterstache}`);
    const m = await message.channel.send({
      embeds: [knabbs],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "helpk") {
        await i.update({ embeds: [knabbs], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [knabbs], components: [row] });
      }
      if (i.customId == "ff") {
        await i.update({ embeds: [fflare], components: [ff] });
      }
      if (i.customId == "fflare") {
        await i.update({ embeds: [fflare], components: [ff] });
      }
      if (i.customId == "limbo") {
        await i.update({ embeds: [limbo], components: [limb] });
      }
      if (i.customId == "limb") {
        await i.update({ embeds: [limbo], components: [limb] });
      }
      if (i.customId == "bs") {
        await i.update({ embeds: [bswarm], components: [bs] });
      }
      if (i.customId == "bswarm") {
        await i.update({ embeds: [bswarm], components: [bs] });
      }
      //valksterstache
      if (i.customId == "vss") {
        await i.update({ embeds: [valkstache], components: [vss] });
      }
      if (i.customId == "vsster") {
        await i.update({ embeds: [valkstache], components: [vss] });
      }
    });
  },
};

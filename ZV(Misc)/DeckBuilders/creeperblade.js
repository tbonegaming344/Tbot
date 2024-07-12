const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `creeperblade`,
  aliases: [
    `helpcreeperblade`,
    `creeperbladehelp`,
    `decksmadebycreeperblade`,
    `creeperbladedecks`,
    `creeperdecks`,
    `creeper`,
    `cpb`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pyeez")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("asf")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const asf = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpc")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cp")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const cp = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("aggro")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("fm")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const fm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cpack")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("limb")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const limb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("fmech")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("py")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const py = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("limbo")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = [
      "aggrosf",
      "conjurepackage",
      "feastmech",
      "knucklesmop",
      "pablosyeezys",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let [result] = await db.query(`select aggrosf, conjurepackage, feastmech, 
		knucklesmop, pablosyeezys
		from sfdecks sf 
		inner join ifdecks fi 
		on (sf.deckinfo = fi.deckinfo)
		inner join zmdecks zm 
		on (sf.deckinfo = zm.deckinfo) 
		inner join gkdecks gk 
		on (sf.deckinfo = gk.deckinfo)
		inner join smdecks sm 
		on (sf.deckinfo = sm.deckinfo)`);
    let user = await client.users.fetch("738926530000060416");
    let creep = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setColor("Random")
      .setThumbnail(user.displayAvatarURL());
    let aggro = new EmbedBuilder()
      .setTitle("Aggro Solar Flare")
      .setDescription(`${result[2].aggrosf}`)
      .setFooter({ text: `${result[1].aggrosf}` })
      .setColor("Random")
      .setImage(`${result[3].aggrosf}`)
      .addFields({ name: "Deck Cost", value: `${result[0].aggrosf}` });
    let cpack = new EmbedBuilder()
      .setTitle("Conjure Package")
      .setDescription(`${result[2].conjurepackage}`)
      .setFooter({ text: `${result[1].conjurepackage}` })
      .addFields({ name: "Deck Cost", value: `${result[0].conjurepackage}` })
      .setImage(`${result[3].conjurepackage}`)
      .setColor("Random");
    let limbo = new EmbedBuilder()
      .setTitle("Mop Knuckles")
      .setDescription(`${result[2].knucklesmop}`)
      .setFooter({ text: `${result[1].knucklesmop}` })
      .setColor("Random")
      .addFields({ name: "Deck Cost", value: `${result[0].knucklesmop}` })
      .setImage(`${result[3].knucklesmop}`);
    let fmech = new EmbedBuilder()
      .setTitle("Feast Mech")
      .setDescription(`${result[2].feastmech}`)
      .setColor("Random")
      .setImage(`${result[3].feastmech}`)
      .setFooter({ text: `${result[1].feastmech}` })
      .addFields({ name: "Deck Cost", value: `${result[0].feastmech}` });
    let pyeez = new EmbedBuilder()
      .setTitle("Pablos Yeezys")
      .setDescription(`${result[2].pablosyeezys}`)
      .setFooter({ text: `${result[1].pablosyeezys}` })
      .addFields({ name: "Deck Cost", value: `${result[0].pablosyeezys}` })
      .setColor("Random")
      .setImage(`${result[3].pablosyeezys}`);
    const m = await message.channel.send({
      embeds: [creep],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "asf") {
        await i.update({ embeds: [aggro], components: [asf] });
      }
      if (i.customId == "helpc") {
        await i.update({ embeds: [creep], components: [row] });
      }
      if (i.customId == "cp") {
        await i.update({ embeds: [cpack], components: [cp] });
      }
      if (i.customId == "aggro") {
        await i.update({ embeds: [aggro], components: [asf] });
      }
      if (i.customId == "cpack") {
        await i.update({ embeds: [cpack], components: [cp] });
      }
      if (i.customId == "fm") {
        await i.update({ embeds: [fmech], components: [fm] });
      }
      if (i.customId == "limbo") {
        await i.update({ embeds: [limbo], components: [limb] });
      }
      if (i.customId == "limb") {
        await i.update({ embeds: [limbo], components: [limb] });
      }
      if (i.customId == "py") {
        await i.update({ embeds: [pyeez], components: [py] });
      }
      if (i.customId == "pyeez") {
        await i.update({ embeds: [pyeez], components: [py] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [creep], components: [row] });
      }
      if (i.customId == "fmech") {
        await i.update({ embeds: [fmech], components: [fm] });
      }
    });
  },
};

const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `squeezy`,
  aliases: [`decksmadebysqueezy`, `squeezydecks`, `squeezyhelp`, `helpsqueezy`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("mids")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ab")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ab = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helps")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ms")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ms = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("abeans")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["abeans", "midshadow"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let [result] = await db.query(`select abeans, midshadow 
from gsdecks`);
    let user = await client.users.fetch("395928681186328579");
    let squ = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName}  are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    let abeans = new EmbedBuilder()
      .setTitle("A-Beans")
      .setDescription(`${result[2].abeans}`)
      .setFooter({ text: `${result[1].abeans}` })
      .addFields({ name: "Deck Cost", value: `${result[0].abeans}` })
      .setColor("Random")
      .setImage(`${result[3].abeans}`);
    let mids = new EmbedBuilder()
      .setTitle("Mid Shadow")
      .setDescription(`${result[2].midshadow}`)
      .setFooter({ text: `${result[1].midshadow}` })
      .addFields({ name: "Deck Cost", value: `${result[0].midshadow}` })
      .setColor("Random")
      .setImage(`${result[3].midshadow}`);
    const m = await message.channel.send({ embeds: [squ], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "ab") {
        await i.update({ embeds: [abeans], components: [ab] });
      }
      if (i.customId == "abeans") {
        await i.update({ embeds: [abeans], components: [ab] });
      }
      if (i.customId == "ms") {
        await i.update({ embeds: [mids], components: [ms] });
      }
      if (i.customId == "mids") {
        await i.update({ embeds: [mids], components: [ms] });
      }
      if (i.customId == "helps") {
        await i.update({ embeds: [squ], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [squ], components: [row] });
      }
    });
  },
};

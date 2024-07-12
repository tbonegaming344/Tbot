const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `bonicus`,
  aliases: [`decksmadebybonicus`, `helpbonicus`, `bonicushelp`, `bonicusdecks`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("vsster")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("vss")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const vss = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpbon")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["valksterstache"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let [result] = await db.query(`select valksterstache from pbdecks`);
    let user = await client.users.fetch("380991367033389057");
    let bon = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} Bonicus are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    let valkstache = new EmbedBuilder()
      .setTitle("Valksterstache")
      .setDescription(`${result[2].valksterstache}`)
      .setFooter({ text: `${result[1].valksterstache}` })
      .addFields({ name: "Deck Cost", value: `${result[0].valksterstache}` })
      .setColor("Random")
      .setImage(`${result[3].valksterstache}`);
    const m = await message.channel.send({ embeds: [bon], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      //valksterstache
      if (i.customId == "vsster") {
        await i.update({ embeds: [valkstache], components: [vss] });
      }
      if (i.customId == "vss") {
        await i.update({ embeds: [valkstache], components: [vss] });
      }
      if (i.customId == "helpbon") {
        await i.update({ embeds: [bon], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [bon], components: [row] });
      }
    });
  },
};

const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `boris`,
  aliases: [`borishelp`, `borisdecks`, `decksmadebyboris`, `helpboris`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("lock")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("lo")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const lo = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpbor")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["lockthebathroom"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let [result] = await db.query(`SELECT lockin FROM bfdecks`);
    let user = await client.users.fetch("705167235429433435");
    let boris = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To find out more about the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    let lockin = new EmbedBuilder()
    .setTitle("Lock The Bathroom")
      .setDescription(`${result[2].lockin}`)
      .setFooter({ text: `${result[1].lockin}` })
      .addFields({ name: "Deck Cost", value: `${result[0].lockin}` })
      .setColor("Random")
      .setImage(`${result[3].lockin}`);
    const m = await message.channel.send({
      embeds: [boris],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "lo") {
        await i.update({ embeds: [lockin], components: [lo] });
      }
      if (i.customId == "lock") {
        await i.update({ embeds: [lockin], components: [lo] });
      }
      if (i.customId == "helpbor") {
        await i.update({ embeds: [boris], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [boris], components: [row] });
      }
    });
  },
};

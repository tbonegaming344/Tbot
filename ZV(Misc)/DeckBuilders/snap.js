const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `snap`,
  aliases: [`decksmadebysnap`, `snapdecks`, `snaphelp`, `helpsnap`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("sknight")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("shit")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const shit = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpsnap")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["shitknight"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let [result] = await db.query(`select shitknight from wkdecks`);
    let user = await client.users.fetch("214018049374683137");
    let snap = new EmbedBuilder()
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
    let sknight = new EmbedBuilder()
      .setTitle("Shit Knight")
      .setDescription(`${result[2].shitknight}`)
      .setFooter({ text: `${result[1].shitknight}` })
      .addFields({ name: "Deck Cost", value: `${result[0].shitknight}` })
      .setColor("Random")
      .setImage(`${result[3].shitknight}`);
    const m = await message.channel.send({ embeds: [snap], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "shit") {
        await i.update({ embeds: [sknight], components: [shit] });
      }
      if (i.customId == "sknight") {
        await i.update({ embeds: [sknight], components: [shit] });
      }
      if (i.customId == "helpsnap") {
        await i.update({ embeds: [snap], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [snap], components: [row] });
      }
    });
  },
};

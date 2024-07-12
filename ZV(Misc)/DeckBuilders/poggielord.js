const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `poggielord`,
  aliases: [
    `decksmadebypoggielord`,
    `poggielorddecks`,
    `poggielordhelp`,
    `helppoggielord`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cycz")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cy")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const cy = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpp")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["cyclezilla"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let [result] = await db.query(`SELECT cyclezilla FROM czdecks`);
    let user = await client.users.fetch("840753342421532672");
    let poggie = new EmbedBuilder()
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
    let cycz = new EmbedBuilder()
      .setTitle("Cyclezilla")
      .setDescription(`${result[2].cyclezilla}`)
      .setFooter({ text: `${result[1].cyclezilla}` })
      .addFields({ name: "Deck Cost", value: `${result[0].cyclezilla}` })
      .setColor("Random")
      .setImage(`${result[3].cyclezilla}`);
    const m = await message.channel.send({
      embeds: [poggie],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "cy") {
        await i.update({ embeds: [cycz], components: [cy] });
      }
      if (i.customId == "cycz") {
        await i.update({ embeds: [cycz], components: [cy] });
      }
      if (i.customId == "helpp") {
        await i.update({ embeds: [poggie], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [poggie], components: [row] });
      }
    });
  },
};

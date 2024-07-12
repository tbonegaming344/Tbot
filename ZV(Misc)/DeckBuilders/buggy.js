const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `buggy`,
  aliases: [`buggydecks`, `helpbuggy`, `buggyhelp`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("azilla")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("aggro")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const aggro = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpbug")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["aggrozilla"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let [result] = await db.query(`SELECT aggrozilla FROM czdecks`);
    let user = await client.users.fetch("754413856708624454");
    let bug = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks made by ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random")
      ;
    let azilla = new EmbedBuilder()
      .setTitle("Aggrozilla")
      .setDescription(`${result[2].aggrozilla}`)
      .setColor("Random")
      .addFields({ name: "Deck Cost", value: `${result[0].aggrozilla}` })
      .setFooter({ text: `${result[1].aggrozilla}` })
      .setImage(`${result[3].aggrozilla}`);
    const m = await message.channel.send({ embeds: [bug], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "azilla") {
        await i.update({ embeds: [azilla], components: [aggro] });
      }
      if (i.customId == "aggro") {
        await i.update({ embeds: [azilla], components: [aggro] });
      }
      if (i.customId == "helpbug") {
        await i.update({ embeds: [bug], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [bug], components: [row] });
      }
    });
  },
};

const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `berserk`,
  aliases: [
    `decksmadebyberserk`,
    `helpberserk`,
    `berserkhelp`,
    `berserkcommands`,
    `berserkdecks`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bmech")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("b")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const b = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpb")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["berserkmech"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let [result] = await db.query(`select berserkmech from zmdecks`);
    let user = await client.users.fetch("749652268034556074");
    let berk = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(`My commands for decks made by ${user.displayName} are ${toBuildString}`)
      .setFooter({
        text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setColor("Random")
      .setThumbnail(user.displayAvatarURL());
    let bmech = new EmbedBuilder()
      .setTitle("Berserk Mech")
      .setDescription(`${result[2].berserkmech}`)
      .setFooter({ text: `${result[1].berserkmech}` })
      .addFields({ name: "Deck Cost", value: `${result[0].berserkmech}` })
      .setColor("Random")
      .setImage(`${result[3].berserkmech}`);
    const m = await message.channel.send({ embeds: [berk], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "b") {
        await i.update({ embeds: [bmech], components: [b] });
      }
      if (i.customId == "bmech") {
        await i.update({ embeds: [bmech], components: [b] });
      }
      if (i.customId == "helpb") {
        await i.update({ embeds: [berk], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [berk], components: [row] });
      }
    });
  },
};

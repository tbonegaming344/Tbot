const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `icyyyyinferno`,
  aliases: [
    `icyyyyinfernodecks`,
    `icyyyyinferno`,
    `iccy`,
    `iccydecks`,
    `decksmadebyicyyyyinferno`,
    `icyyyyinfernohelp`,
    `helpicyyyyinferno`,
    `iccydecks`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ifp")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ifpc")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ifp = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpicy")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["ifplankcontrol"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let [result] = await db.query(`SELECT ifplankcontrol FROM ifdecks`);
    let user = await client.users.fetch("519273239550230556");
    let iccy = new EmbedBuilder()
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
    let ifpc = new EmbedBuilder()
      .setTitle("IF Plank Control")
      .setDescription(`${result[2].ifplankcontrol}`)
      .setFooter({ text: `${result[1].ifplankcontrol}` })
      .setColor("Random")
      .setImage(`${result[3].ifplankcontrol}`)
      .addFields({ name: "Deck Cost", value: `${result[0].ifplankcontrol}` });
    const m = await message.channel.send({ embeds: [iccy], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "ifpc") {
        await i.update({ embeds: [ifpc], components: [ifp] });
      }
      if (i.customId == "ifp") {
        await i.update({ embeds: [ifpc], components: [ifp] });
      }
      if (i.customId == "helpicy") {
        await i.update({ embeds: [iccy], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [iccy], components: [row] });
      }
    });
  },
};

const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `chessecake`,
  aliases: [
    `decksmadebychessecake`,
    `helpchessecake`,
    `chessecakehelp`,
    `chessecakedecks`,
    `decksmadebychesse`,
    `helpcheese`,
    `cheesehelp`,
    `cheesedecks`,
    `cheese`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bwrap")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bwrappers")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bwrap = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpc")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["blobfishwrappers"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let [result] = await db.query(`SELECT blobfishwrappers FROM hgdecks`);
    let user = await client.users.fetch("384516206025113603");
    let cheese = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To find out more about the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random")
    let bwrappers = new EmbedBuilder()
      .setTitle("Blobfish Wrappers")
      .setDescription(`${result[2].blobfishwrappers}`)
      .setFooter({ text: `${result[1].blobfishwrappers}` })
      .addFields({ name: "Deck Cost", value: `${result[0].blobfishwrappers}` })
      .setColor("Random")
      .setImage(`${result[3].blobfishwrappers}`)
    const m = await message.channel.send({
      embeds: [cheese],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "bwrap") {
        await i.update({ embeds: [bwrappers], components: [bwrap] });
      }
      if (i.customId == "bwrappers") {
        await i.update({ embeds: [bwrappers], components: [bwrap] });
      }
      if (i.customId == "helpc") {
        await i.update({ embeds: [cheese], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [cheese], components: [row] });
      }
    });
  },
};

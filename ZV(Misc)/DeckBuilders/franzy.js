const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `franzy`,
  aliases: [`decksmadebyfranzy`, `helpfranzy`, `franzyhelp`, `franzydecks`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("mid")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mm")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const mm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpf")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["midmirror"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let [result] = await db.query(`SELECT midmirror from wkdecks`);
    let user = await client.users.fetch("531619780374036490");
    let franzy = new EmbedBuilder()
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
    let mid = new EmbedBuilder()
      .setTitle("Mid Mirror")
      .setDescription(`${result[2].midmirror}`)
      .setFooter({ text: `${result[1].midmirror}` })
      .addFields({ name: "Deck Cost", value: `${result[0].midmirror}` })
      .setColor("Random")
      .setImage(`${result[3].midmirror}`);
    const m = await message.channel.send({
      embeds: [franzy],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "mid") {
        await i.update({ embeds: [mid], components: [mm] });
      }
      if (i.customId == "mm") {
        await i.update({ embeds: [mid], components: [mm] });
      }
      if (i.customId == "helpf") {
        await i.update({ embeds: [franzy], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [franzy], components: [row] });
      }
    });
  },
};

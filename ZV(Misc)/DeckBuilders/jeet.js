const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `jeet`,
  aliases: [`decksmadebyjeet`, `jeetdecks`, `helpjeet`, `jeethelp`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("tp")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("tpets")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const tp = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpj")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["telepets"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let [result] = await db.query(`SELECT telepets FROM imdecks`);
    let user = await client.users.fetch("540689756653355010");
    let jeet = new EmbedBuilder()
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
    let tpets = new EmbedBuilder()
      .setTitle("Telepets")
      .setDescription(`${result[2].telepets}`)
      .setFooter({ text: `${result[1].telepets}` })
      .addFields({ name: "Deck Cost", value: `${result[0].telepets}` })
      .setColor("Random")
      .setImage(`${result[3].telepets}`);
    const m = await message.channel.send({ embeds: [jeet], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "tp") {
        await i.update({ embeds: [tpets], components: [tp] });
      }
      if (i.customId == "tpets") {
        await i.update({ embeds: [tpets], components: [tp] });
      }
      if (i.customId == "helpj") {
        await i.update({ embeds: [jeet], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [jeet], components: [row] });
      }
    });
  },
};

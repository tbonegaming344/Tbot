const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `ooblt`,
  aliases: [`ooblthelp`, `helpooblt`, `decksmadebyooblt`, `oobltdecks`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("og")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ogargs")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const og = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpo")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["oobltgargs"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let [result] = await db.query(`SELECT oobltgargs FROM smdecks`);
    let oob = new EmbedBuilder()
      .setTitle("Ooblt Decks")
      .setDescription(
        `My commands for decks made by Ooblt are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks Made By Ooblt please use the commands listed above or click on the buttons below!
Note: Ooblt has ${decks.length} total decks in Tbot`,
      })
      .setColor("Random")
      ;
    let ogargs = new EmbedBuilder()
      .setTitle("Ooblt Midgargs")
      .setDescription(`${result[2].oobltgargs}`)
      .setFooter({ text: `${result[1].oobltgargs}` })
      .addFields({ name: "Deck Cost", value: `${result[0].oobltgargs}` })
      .setColor("Random")
      .setImage(`${result[3].oobltgargs}`);
    const m = await message.channel.send({ embeds: [oob], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "og") {
        await i.update({ embeds: [ogargs], components: [og] });
      }
      if (i.customId == "ogargs") {
        await i.update({ embeds: [ogargs], components: [og] });
      }
      if (i.customId == "helpo") {
        await i.update({ embeds: [oob], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [oob], components: [row] });
      }
    });
  },
};

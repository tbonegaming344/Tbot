const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `highlord`,
  aliases: [
    `decksmadebyhighlord`,
    `helphighlord`,
    `highlordhelp`,
    `highlorddecks`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("sci")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("scimmort")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const sci = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helph")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["scimmort"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let [result] = await db.query(`SELECT scimmort FROM imdecks`);
    let user = await client.users.fetch("1188282577715466300");
    let high = new EmbedBuilder()
      .setTitle("Highlord Decks")
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}	`
      )
      .setFooter({
        text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below! 
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL());
    let stemp = new EmbedBuilder()
      .setTitle("Scimmort")
      .setDescription(`${result[2].scimmort}`)
      .setFooter({ text: `${result[1].scimmort}` })
      .addFields({ name: "Deck Cost", value: `${result[0].scimmort}` })
      .setColor("Random")
      .setImage(`	${result[3].scimmort}`);
    const m = await message.channel.send({ embeds: [high], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      //Scimmort
      if (i.customId == "scimmort") {
        await i.update({ embeds: [stemp], components: [sci] });
      }
      if (i.customId == "sci") {
        await i.update({ embeds: [stemp], components: [sci] });
      }
      if (i.customId == "helph") {
        await i.update({ embeds: [high], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [high], components: [row] });
      }
    });
  },
};

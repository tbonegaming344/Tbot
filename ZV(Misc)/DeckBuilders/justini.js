const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `justini12`,
  aliases: [
    `justinidecks`,
    `helpjustini`,
    `justinihelp`,
    `decksmadebyjustini`,
    `justini`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bster")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("wr")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const wr = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpjust")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ster")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ster = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("winrate")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["100wr", "brickster"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let [result] = await db.query(`select wr100, brickster 
from gsdecks gs inner join rbdecks rb 
on (gs.deckinfo = rb.deckinfo)`);
    let user = await client.users.fetch("112000146107113472");
    let just = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    let winrate = new EmbedBuilder()
      .setTitle("100% Winrate")
      .setDescription(`${result[2].wr100}`)
      .setFooter({ text: `${result[1].wr100}` })
      .addFields({ name: "Deck Cost", value: `${result[0].wr100}` })
      .setColor("Random")
      .setImage(`${result[3].wr100}`);
    let brick = new EmbedBuilder()
      .setTitle("Brickster")
      .setDescription(`${result[2].brickster}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].brickster}` })
      .addFields({ name: "Deck Cost", value: `${result[0].brickster}` })
      .setImage(`${result[3].brickster}`);
    const m = await message.channel.send({ embeds: [just], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "wr") {
        await i.update({ embeds: [winrate], components: [wr] });
      }
      if (i.customId == "helpjust") {
        await i.update({ embeds: [just], components: [row] });
      }
      if (i.customId == "winrate") {
        await i.update({ embeds: [winrate], components: [wr] });
      }
      if (i.customId == "ster") {
        await i.update({ embeds: [brick], components: [ster] });
      }
      if (i.customId == "bster") {
        await i.update({ embeds: [brick], components: [ster] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [just], components: [row] });
      }
    });
  },
};

const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `grandma`,
  aliases: [`helpgrandma`, `grandmahelp`, `decksmadebygrandma`, `grandmadecks`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pster")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ster")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ster = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpg")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["pharaohster"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
	let [result] = await db.query(`select pharaohster from rbdecks`)
    let grand = new EmbedBuilder()
      .setTitle("Grandma Decks")
      .setDescription(
        `My commands for decks made by Grandma are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks Made By Grandma please use the commands listed above or click on the buttons below!
Note: Grandma has ${decks.length} total decks in Tbot`,
      })
      .setColor("Random")
      ;
    let pster = new EmbedBuilder()
      .setTitle("Pharaohster")
      .setDescription(`${result[2].pharaohster}`)
      .setFooter({ text: `${result[1].pharaohster}` })
      .addFields({ name: "Deck Cost", value: `${result[0].pharaohster}` })
      .setColor("Random")
      .setImage(`${result[3].pharaohster}`);
    const m = await message.channel.send({
      embeds: [grand],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "pster") {
        await i.update({ embeds: [pster], components: [ster] });
      }
      if (i.customId == "ster") {
        await i.update({ embeds: [pster], components: [ster] });
      }
      if (i.customId == "helpg") {
        await i.update({ embeds: [grand], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [grand], components: [row] });
      }
    });
  },
};

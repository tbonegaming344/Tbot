const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `godspell`,
  aliases: [`godspelldecks`, `gods`, `godspellhelp`, `godshelp`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("3peas")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("3pea")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const pea3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpgod")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["3-pea"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
	let [result] = await db.query(`SELECT pea3 from gkdecks`)
    let user = await client.users.fetch("563849934139424771");
    let gods = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks made by ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL());
    let tp = new EmbedBuilder()
      .setTitle("3-Pea")
      .setDescription(`${result[2].pea3}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].pea3}` })
      .setImage(`${result[3].pea3}`)
      .addFields({ name: "Deck Cost", value: `${result[0].pea3}` });
    const m = await message.channel.send({ embeds: [gods], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "3pea") {
        await i.update({ embeds: [tp], components: [pea3] });
      }
      if (i.customId == "3peas") {
        await i.update({ embeds: [tp], components: [pea3] });
      }
      if (i.customId == "helpgod") {
        await i.update({ embeds: [gods], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [gods], components: [row] });
      }
    });
  },
};

const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js")
module.exports = {
  name: `anemowinds`,
  aliases: [
    `decksmadebyanemowinds`,
    `helpanemowinds`,
    `anemowindshelp`,
    `anemowindsdecks`,
    `decksmadebyanemo`,
    `helpanemo`,
    `anemohelp`,
    `anemowindsdecks`,
    `anemo`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("tsunion")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("tsu")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const tsu = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpan")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["sovietonion"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let user = await client.users.fetch("737804260405936190");
	let [result] = await db.query(`select sovietonion from gsdecks`)
    let anemo = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To find out more about the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    let tsunion = new EmbedBuilder()
      .setTitle("The Soviet Onion")
      .setDescription(`${result[2].sovietonion}`)
      .setFooter({ text: `${result[1].sovietonion}` })
      .addFields({ name: "Deck Cost", value: `${result[0].sovietonion}` })
      .setColor("Random")
      .setImage(`${result[3].sovietonion}`);
    const m = await message.channel.send({
      embeds: [anemo],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "tsu") {
        await i.update({ embeds: [tsunion], components: [tsu] });
      }
      if (i.customId == "tsunion") {
        await i.update({ embeds: [tsunion], components: [tsu] });
      }
      if (i.customId == "helpan") {
        await i.update({ embeds: [anemo], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [anemo], components: [row] });
      }
    });
  },
};

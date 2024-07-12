const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `kanzi`,
  aliases: [
    `kanzidecks`,
    `decksmadebykanzi`,
    `kanzihelp`,
    `helpkanzi`,
    `kanzicommands`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("yr")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("yrm")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const yr = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpk")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["yrm"];
    let t = "";
    for (let i = 0; i < decks.length; i++) {
      t += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let [result] = await db.query(`SELECT yrm FROM ccdecks`);
    let user = await client.users.fetch("609590713168166922");
    let kanzi = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${t}`
      )
      .setFooter({
        text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    let yrm = new EmbedBuilder()
      .setTitle("Young Rings Martin")
      .setDescription(`${result[2].yrm}`)
      .setFooter({ text: `${result[1].yrm}` })
      .addFields({ name: "Deck Cost", value: `${result[0].yrm}` })
      .setColor("Random")
      .setImage(`${result[3].yrm}`);
    const m = await message.channel.send({
      embeds: [kanzi],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "yrm") {
        await i.update({ embeds: [yrm], components: [yr] });
      }
      if (i.customId == "yr") {
        await i.update({ embeds: [yrm], components: [yr] });
      }
      if (i.customId == "helpk") {
        await i.update({ embeds: [kanzi], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [kanzi], components: [row] });
      }
    });
  },
};

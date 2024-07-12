const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `flameflake`,
  aliases: [`flameflakedecks`, `flameflakehelp`, `helpflameflake`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ppcon")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ppc")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ppc = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpff")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["preciseplankcontrol"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let user = await client.users.fetch("702340542670962759");
    let [result] = await db.query(`SELECT preciseplankcontrol from ntdecks`);
    let flame = new EmbedBuilder()
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
    let ppcon = new EmbedBuilder()
      .setTitle("Precise Plank Control")
      .setDescription(`${result[2].preciseplankcontrol}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].preciseplankcontrol}` })
      .addFields({
        name: "Deck Cost",
        value: `${result[0].preciseplankcontrol}`,
      })
      .setImage(`${result[3].preciseplankcontrol}`);
    const m = await message.channel.send({
      embeds: [flame],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "ppc") {
        await i.update({ embeds: [ppcon], components: [ppc] });
      }
      if (i.customId == "ppcon") {
        await i.update({ embeds: [ppcon], components: [ppc] });
      }
      if (i.customId == "helpff") {
        await i.update({ embeds: [flame], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [flame], components: [row] });
      }
    });
  },
};

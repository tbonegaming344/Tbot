const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `helpbc`,
  aliases: [
    `bchelp`,
    `bccommands`,
    `commandsbc`,
    `helpbeta`,
    `helpcarrotina`,
    `helpbetacarrotina`,
    `betacarrotinahelp`,
    `betacarrotinadecks`,
    `bcdecks`,
    `betacarrotinacommands`,
    `betadecks`,
    `betahelp`,
    `carrotinadecks`,
    `bcdeck`,
  ],
  category: `Beta-Carrotina/Citron`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bc")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("an")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const an = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpbc")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cb")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const cbc = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("an")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["anti", "helpbc", "randombc", "shamcontrolbc"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let [result] = await db.query("SELECT * FROM bcdecks");
    let embed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/p__/images/d/d2/Betacarrot.png/revision/latest?cb=20190624185039&path-prefix=protagonist"
      )
      .setTitle("BC Commands")
      .setDescription(
        `Here are my commands for Beta-Carrotina(BC) ${toBuildString}`
      )
      .setColor("Random")
      .setFooter({
        text: `To view the Beta Carrotina decks please use the commands listed above or click on the buttons below!
Note: Beta Carrotina has ${decks.length - 3} total decks in Tbot`,
      });
    let anti = new EmbedBuilder()
      .setTitle("Anti")
      .setDescription(`${result[2].anti}`)
      .setFooter({ text: `${result[1].anti}` })
      .addFields({ name: "Deck Cost", value: `${result[0].anti}` })
      .setColor("Random")
      .setImage(result[3].anti);
    let cb = new EmbedBuilder()
      .setTitle("Sham Control Beta Carrotina")
      .setDescription(`${result[2].shamcontrol}`)
      .setFooter({ text: `${result[1].shamcontrol}` })
      .addFields({ name: "Deck Cost", value: `${result[0].shamcontrol}` })
      .setColor("Random")
      .setImage(`${result[3].shamcontrol}`);
    const m = await message.channel.send({
      embeds: [embed],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "help") {
        await i.update({ embeds: [embed], components: [row] });
      }
      if (i.customId == "anti") {
        await i.update({ embeds: [anti], components: [an] });
      }
      if (i.customId == "an") {
        await i.update({ embeds: [anti], components: [an] });
      }
      if (i.customId == "bc") {
        await i.update({ embeds: [cb], components: [cbc] });
      }
      if (i.customId == "cb") {
        await i.update({ embeds: [cb], components: [cbc] });
      }
      if (i.customId == "helpbc") {
        await i.update({ embeds: [embed], components: [row] });
      }
    });
  },
};

const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `t3`,
  aliases: [`t3decks`, `t3help`, `helpt3`, `t3decklists`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("tblob")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ft")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ft = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpt3")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sw")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const sw = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ftor")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("tb")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const tb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("swave")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["flagtor", "shockwave", "trickblob"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let [result] = await db.query(`select flagtor, shockwave, trickblob
from ntdecks nt inner join zmdecks zm 
on (nt.deckinfo = zm.deckinfo)
inner join rbdecks rb 
on (nt.deckinfo = rb.deckinfo)`);
    let user = await client.users.fetch("638137816068521984");
    let t3 = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks made by ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    let ftor = new EmbedBuilder()
      .setTitle("Flagtor")
      .setDescription(`${result[2].flagtor}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].flagtor}` })
      .addFields({ name: "Deck Cost", value: `${result[0].flagtor}` })
      .setImage(`${result[3].flagtor}`);
    let swave = new EmbedBuilder()
      .setTitle("Shockwave")
      .setDescription(`${result[2].shockwave}`)
      .setColor("Random")
      .addFields({ name: "Deck Cost", value: `${result[0].shockwave}` })
      .setFooter({ text: `${result[1].shockwave}` })
      .setImage(`${result[3].shockwave}`);
    let tblob = new EmbedBuilder()
      .setTitle("TrickBlob")
      .setDescription(`${result[2].trickblob}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].trickblob}` })
      .setImage(`${result[3].trickblob}`)
      .addFields({ name: "Deck Cost", value: `${result[0].trickblob}` });
    const m = await message.channel.send({ embeds: [t3], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "sw") {
        await i.update({ embeds: [swave], components: [sw] });
      }
      if (i.customId == "swave") {
        await i.update({ embeds: [swave], components: [sw] });
      }
      if (i.customId == "helpt3") {
        await i.update({ embeds: [t3], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [t3], components: [row] });
      }
      if (i.customId == "ft") {
        await i.update({ embeds: [ftor], components: [ft] });
      }
      if (i.customId == "ftor") {
        await i.update({ embeds: [ftor], components: [ft] });
      }
      if (i.customId == "tb") {
        await i.update({ embeds: [tblob], components: [tb] });
      }
      if (i.customId == "tblob") {
        await i.update({ embeds: [tblob], components: [tb] });
      }
    });
  },
};

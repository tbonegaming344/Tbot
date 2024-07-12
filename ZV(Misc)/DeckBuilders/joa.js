const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `joa`,
  aliases: [`joahelp`, `helpjoa`, `joadecks`, `decksmadebyjoa`, `icebergxl`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("mcap")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("jb")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const jb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpjoa")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("js")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const js = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("jburst")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("midc")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const midc = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("jshrooms")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["joaburst", "joashrooms", "midcap"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let [result] = await db.query(`select joaburst, joashrooms, midcap 
from ctdecks ct inner join ncdecks nc
on (ct.deckinfo = nc.deckinfo)`);
    let user = await client.users.fetch("1051727537379749898");
    let joa = new EmbedBuilder()
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
    let jburst = new EmbedBuilder()
      .setTitle("Joa Burst")
      .setDescription(`${result[2].joaburst}`)
      .setFooter({ text: `${result[1].joaburst}` })
      .addFields({ name: "Deck Cost", value: `${result[0].joaburst}` })
      .setColor("Random")
      .setImage(`${result[3].joaburst}`);
    let jshrooms = new EmbedBuilder()
      .setTitle("Joa Shrooms")
      .setDescription(`${result[2].joashrooms}`)
      .setFooter({ text: `${result[1].joashrooms}` })
      .addFields({ name: "Deck Cost", value: `${result[0].joashrooms}` })
      .setColor("Random")
      .setImage(`${result[3].joashrooms}`);
    let mcap = new EmbedBuilder()
      .setTitle("Midcap")
      .setDescription(`${result[2].midcap}`)
      .setFooter({ text: `${result[1].midcap}` })
      .addFields({ name: "Deck Cost", value: `${result[0].midcap}` })
      .setColor("Random")
      .setImage(`${result[3].midcap}`);
    const m = await message.channel.send({ embeds: [joa], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "jb") {
        await i.update({ embeds: [jburst], components: [jb] });
      }
      if (i.customId == "helpjoa") {
        await i.update({ embeds: [joa], components: [row] });
      }
      if (i.customId == "js") {
        await i.update({ embeds: [jshrooms], components: [js] });
      }
      if (i.customId == "jburst") {
        await i.update({ embeds: [jburst], components: [jb] });
      }
      if (i.customId == "midc") {
        await i.update({ embeds: [mcap], components: [midc] });
      }
      if (i.customId == "jshrooms") {
        await i.update({ embeds: [jshrooms], components: [js] });
      }
      if (i.customId == "mcap") {
        await i.update({ embeds: [mcap], components: [midc] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [joa], components: [row] });
      }
    });
  },
};

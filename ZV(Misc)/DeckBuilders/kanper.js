const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `kanper`,
  aliases: [`kanperdecks`, `decksmadebykanper`, `kanperhelp`, `helpkanper`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pb")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("gster")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ster = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpk")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pburn")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const pb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gster")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["gravester", "pranksterburn"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let [result] = await db.query(`select gravester, pranksterburn 
from hgdecks hg 
inner join spdecks sp 
on (hg.deckinfo = sp.deckinfo)`);
    let user = await client.users.fetch("788693654743154708");
    let kan = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks Made By kanper please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    let gster = new EmbedBuilder()
      .setTitle("Gravester")
      .setDescription(`${result[2].gravester}`)
      .setFooter({ text: `${result[1].gravester}` })
      .addFields({ name: "Deck Cost", value: `${result[0].gravester}` })
      .setImage(`${result[3].gravester}`)
      .setColor("Random");
    let pburn = new EmbedBuilder()
      .setTitle("Prankster Burn")
      .setDescription(`${result[2].pranksterburn}`)
      .setFooter({ text: `${result[1].pranksterburn}` })
      .addFields({ name: "Deck Cost", value: `${result[0].pranksterburn}` })
      .setImage(`${result[3].pranksterburn}`)
      .setColor("Random");
    const m = await message.channel.send({ embeds: [kan], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "gster") {
        await i.update({ embeds: [gster], components: [ster] });
      }
      if (i.customId == "helpk") {
        await i.update({ embeds: [kan], components: [row] });
      }
      if (i.customId == "ster") {
        await i.update({ embeds: [gster], components: [ster] });
      }
      if (i.customId == "pburn") {
        await i.update({ embeds: [pburn], components: [pb] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [kan], components: [row] });
      }
      if (i.customId == "pb") {
        await i.update({ embeds: [pburn], components: [pb] });
      }
    });
  },
};

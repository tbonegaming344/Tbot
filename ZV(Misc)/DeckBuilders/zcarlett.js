const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `zcarlett`,
  aliases: [
    `decksmadebyz3ht`,
    `z3ht`,
    `z3htdecks`,
    `z3hthelp`,
    `helpz3ht`,
    `zcarlettdecks`,
    `zcarletthelp`,
    `helpzcarlett`,
    `deckszcarlett`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pcon")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ab")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ab = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpz")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pc")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const pc = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("abeans")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["abeans", "plankcontrol"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let [result] = await db.query(`select abeans, plankcontrol 
from gsdecks gs inner join ntdecks nt
on (gs.deckinfo = nt.deckinfo)`);
    let user = await client.users.fetch("513029374392533043");
    let z3ht = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setColor("Random")
	  .setThumbnail(user.displayAvatarURL());
    let abeans = new EmbedBuilder()
      .setTitle("A-Beans")
      .setDescription(`${result[2].abeans}`)
      .setFooter({ text: `${result[1].abeans}` })
      .addFields({ name: "Deck Cost", value: `${result[0].abeans}` })
      .setColor("Random")
      .setImage(`${result[3].abeans}`);
    let pcon = new EmbedBuilder()
      .setTitle("Plank Control")
      .setDescription(`${result[2].plankcontrol}`)
      .setFooter({ text: `${result[1].plankcontrol}` })
      .addFields({ name: "Deck Cost", value: `${result[0].plankcontrol}` })
      .setColor("Random")
      .setImage(`${result[3].plankcontrol}`);
    const m = await message.channel.send({ embeds: [z3ht], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "ab") {
        await i.update({ embeds: [abeans], components: [ab] });
      }
      if (i.customId == "abeans") {
        await i.update({ embeds: [abeans], components: [ab] });
      }
      if (i.customId == "pc") {
        await i.update({ embeds: [pcon], components: [pc] });
      }
      if (i.customId == "pcon") {
        await i.update({ embeds: [pcon], components: [pc] });
      }
      if (i.customId == "helpz") {
        await i.update({ embeds: [z3ht], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [z3ht], components: [row] });
      }
    });
  },
};

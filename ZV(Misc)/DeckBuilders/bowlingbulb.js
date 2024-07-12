const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `bowlingbulbenjoyer`,
  aliases: [
    `bowlingbulb`,
    `bowlingdecks`,
    `bolwingbulbhelp`,
    `bowlinghelp`,
    `bbe`,
    `bowlingbulbenjoyerdecks`,
    `bowlingbulbdecks`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gn3nut")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bfw")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bfw = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpbbe")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("gn3")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const gn3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bfwar")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["binaryflagwar", "goingnuts3"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let [result] = await db.query(`select binaryflagwar, going3nuts 
		from zmdecks zm
		inner join ctdecks ct
		on (zm.deckinfo = ct.deckinfo)`);
    let user = await client.users.fetch("1051916947253629030");
    let bbe = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks made by ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setColor("Random")
      .setThumbnail(user.displayAvatarURL());
    let bfwar = new EmbedBuilder()
      .setTitle("Binary Flag War")
      .setDescription(`${result[2].binaryflagwar}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].binaryflagwar}` })
      .addFields({ name: "Deck Cost", value: `${result[0].binaryflagwar}` })
      .setImage(`${result[3].binaryflagwar}`);
    let gn3nut = new EmbedBuilder()
      .setTitle("Going Nuts 3")
      .setDescription(`${result[2].going3nuts}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].going3nuts}` })
      .addFields({ name: "Deck Cost", value: `${result[0].going3nuts}` })
      .setImage(`${result[3].going3nuts}`);
    const m = await message.channel.send({ embeds: [bbe], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "bfw") {
        await i.update({ embeds: [bfwar], components: [bfw] });
      }
      if (i.customId == "gn3") {
        await i.update({ embeds: [gn3nut], components: [gn3] });
      }
      if (i.customId == "bfwar") {
        await i.update({ embeds: [bfwar], components: [bfw] });
      }
      if (i.customId == "gn3nut") {
        await i.update({ embeds: [gn3nut], components: [gn3] });
      }
      if (i.customId == "helpbbe") {
        await i.update({ embeds: [bbe], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [bbe], components: [row] });
      }
    });
  },
};

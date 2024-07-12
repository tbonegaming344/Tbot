const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `happyshroom`,
  aliases: [
    `happydecks`,
    `helphappyshroom`,
    `happyshroomhelp`,
    `helphappy`,
    `happyhelp`,
    `decksmadebyhappy`,
    `decksmadebyhappyshroom`,
    `happyshroom`,
    `happy`,
    `happyshroomdecks`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("happy")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("smf")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const smflower = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helphap")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ticia")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ticia = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("smflower")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["savagemayflower", "happyticia"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let [result] =
      await db.query(`select happyticia, savagemayflower from imdecks im 
inner join gsdecks gs
on (im.deckinfo = gs.deckinfo)`);
    let user = await client.users.fetch("229076698711326720");
    let hap = new EmbedBuilder()
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
    let happy = new EmbedBuilder()
      .setTitle("Happyticia")
      .setDescription(`${result[2].happyticia}`)
      .setFooter({ text: `${result[1].happyticia}` })
      .addFields({ name: "Deck Cost", value: `${result[0].happyticia}` })
      .setColor("Random")
      .setImage(`${result[3].happyticia}`);
    let smf = new EmbedBuilder()
      .setTitle("Savage Mayflower")
      .setDescription(`${result[2].savagemayflower}`)
      .setColor("Random")
      .addFields({ name: "Deck Cost", value: `${result[0].savagemayflower}` })
      .setFooter({ text: `${result[1].savagemayflower}` })
      .setImage(`${result[3].savagemayflower}`);
    const m = await message.channel.send({ embeds: [hap], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "ticia") {
        await i.update({ embeds: [happy], components: [ticia] });
      }
      if (i.customId == "happy") {
        await i.update({ embeds: [happy], components: [ticia] });
      }
      if (i.customId == "smf") {
        await i.update({ embeds: [smf], components: [smflower] });
      }
      if (i.customId == "smflower") {
        await i.update({ embeds: [smf], components: [smflower] });
      }
      if (i.customId == "helphap") {
        await i.update({ embeds: [hap], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [hap], components: [row] });
      }
    });
  },
};

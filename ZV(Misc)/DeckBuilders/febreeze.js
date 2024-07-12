const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `febreze`,
  aliases: [
    `febrezedecks`,
    `decksmadebyfebreze`,
    `febrezehelp`,
    `helpfebreze`,
    `febreeze`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("rclones")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ho")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ho = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpfeb")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("rc")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const rc = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("horts")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["horts", "rampclones"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let [result] = await db.query(`select horts, rampclones from smdecks sm 
inner join sfdecks sf 
on (sm.deckinfo = sf.deckinfo)`);
    let user = await client.users.fetch("525852515128967179");
    let feb = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName}  are ${toBuildString}`
      )
      .setFooter({
        text: `To view Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setColor("Random")
      .setThumbnail(user.displayAvatarURL());
    let horts = new EmbedBuilder()
      .setTitle("Horts")
      .setDescription(`${result[2].horts}`)
      .setFooter({ text: `${result[1].horts}` })
      .addFields({ name: "Deck Cost", value: `${result[0].horts}` })
      .setColor("Random")
      .setImage(`${result[3].horts}`);
    let rclones = new EmbedBuilder()
      .setTitle("Rampclones")
      .setDescription(`${result[2].rampclones}`)
      .setFooter({ text: `${result[1].rampclones}` })
      .setColor("Random")
      .setImage(`${result[3].rampclones}`)
      .addFields({ name: "Deck Cost", value: `${result[0].rampclones}` });
    const m = await message.channel.send({ embeds: [feb], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "rc") {
        await i.update({ embeds: [rclones], components: [rc] });
      }
      if (i.customId == "rclones") {
        await i.update({ embeds: [rclones], components: [rc] });
      }
      if (i.customId == "ho") {
        await i.update({ embeds: [horts], components: [ho] });
      }
      if (i.customId == "horts") {
        await i.update({ embeds: [horts], components: [ho] });
      }
      if (i.customId == "helpfeb") {
        await i.update({ embeds: [feb], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [feb], components: [row] });
      }
    });
  },
};

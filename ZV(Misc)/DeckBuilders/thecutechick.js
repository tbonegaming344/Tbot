const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `thecutechick`,
  aliases: [
    `thecutechickdecks`,
    `tcc`,
    `tcch`,
    `thecutechickhelp`,
    `helpthecutechick`,
    `tcchelp`,
    `helptcc`,
    `tccdecks`,
    `tcchdecks`,
    `tcchhelp`,
    `helptcch`,
    `chickdecks`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("tdr")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("troots")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const tdr = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helptcch")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["tempodinoroots"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let user = await client.users.fetch("468283466597793802");
    let tcch = new EmbedBuilder()
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
	  let [result] = await db.query(`SELECT tempodinoroots from spdecks`);
    let troots = new EmbedBuilder()
      .setTitle("TCC Tempo Dino Roots")
      .setDescription(`${result[2].tempodinoroots}`)
      .setFooter({ text: `${result[1].tempodinoroots}` })
      .addFields({ name: "Deck Cost", value: `${result[0].tempodinoroots}` })
      .setColor("Random")
      .setImage(`${result[3].tempodinoroots}`);
    const m = await message.channel.send({ embeds: [tcch], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "tdr") {
        await i.update({ embeds: [troots], components: [tdr] });
      }
      if (i.customId == "troots") {
        await i.update({ embeds: [troots], components: [tdr] });
      }
      if (i.customId == "helptcch") {
        await i.update({ embeds: [tcch], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [tcch], components: [row] });
      }
    });
  },
};

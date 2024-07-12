const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `willychang`,
  aliases: [
    `willy`,
    `willychangdecks`,
    `willyhelp`,
    `helpwilly`,
    `helpchang`,
    `changhelp`,
    `chang`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("g")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("glag")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const g = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpw")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["glag"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
	let [result] = await db.query(`select glag from ntdecks`);
    let user = await client.users.fetch("808487187162857533");
    let willy = new EmbedBuilder()
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
    let glag = new EmbedBuilder()
      .setTitle("Glag")
      .setDescription(`${result[2].glag}`)
      .setFooter({ text: `${result[1].glag}` })
      .addFields({ name: "Deck Cost", value: `${result[0].glag}` })
      .setColor("Random")
      .setImage(`${result[3].glag}`);
    const m = await message.channel.send({
      embeds: [willy],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "g") {
        await i.update({ embeds: [glag], components: [g] });
      }
      if (i.customId == "glag") {
        await i.update({ embeds: [glag], components: [g] });
      }
      if (i.customId == "helpw") {
        await i.update({ embeds: [willy], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [willy], components: [row] });
      }
    });
  },
};

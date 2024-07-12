const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `robomaster`,
  aliases: [
    `robomasterdecks`,
    `robomaster18decks`,
    `robohelp`,
    `helprobo`,
    `decksmadebyrobo`,
    `robodecks`,
    `robo`,
    `robomasterdecks`,
    `robomaster18`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ct")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ctuna")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ct = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpr")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["combotuna"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
	let [result] = await db.query(`select combotuna from ntdecks`);
    let user = await client.users.fetch("595921283334668298");
    let robo = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot!`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    let ctuna = new EmbedBuilder()
      .setTitle("Combotuna")
      .setDescription(`${result[2].combotuna}`)
      .setFooter({ text: `${result[1].combotuna}` })
      .addFields({ name: "Deck Cost", value: `${result[0].combotuna}` })
      .setColor("Random")
      .setImage(`${result[3].combotuna}`);
    const m = await message.channel.send({ embeds: [robo], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "ct") {
        await i.update({ embeds: [ctuna], components: [ct] });
      }
      if (i.customId == "ctuna") {
        await i.update({ embeds: [ctuna], components: [ct] });
      }
      if (i.customId == "helpr") {
        await i.update({ embeds: [robo], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [robo], components: [row] });
      }
    });
  },
};

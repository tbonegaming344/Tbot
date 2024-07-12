const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `jakepeng`,
  aliases: [
    `jakepenghelp`,
    `helpjakepeng`,
    `jakepengdecks`,
    `decksmadebyjakepeng`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ha")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hasf")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const hasf = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpj")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["healaggrosf"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
	let [result] = await db.query(`SELECT healaggrosf from sfdecks`); 
    let user = await client.users.fetch("734080102526091346");
    let jake = new EmbedBuilder()
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
    let ha = new EmbedBuilder()
      .setTitle("Heal Aggro")
      .setDescription(`${result[2].healaggrosf}`)
      .setFooter({ text: `${result[1].healaggrosf}` })
      .setColor("Random")
      .addFields({ name: "Deck Cost", value: `${result[0].healaggrosf}` })
      .setImage(`${result[3].healaggrosf}`);
    const m = await message.channel.send({ embeds: [jake], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "hasf") {
        await i.update({ embeds: [ha], components: [hasf] });
      }
      if (i.customId == "ha") {
        await i.update({ embeds: [ha], components: [hasf] });
      }
      if (i.customId == "helpj") {
        await i.update({ embeds: [jake], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [jake], components: [row] });
      }
    });
  },
};

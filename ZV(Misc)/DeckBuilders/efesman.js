const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `efesman`,
  aliases: [`efesmandecks`, `helpefesman`, `efesmanhelp`, `decksforefesman`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ftkill")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ftk")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ftk = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpe")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["firstturnkill"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let [result] = await db.query(`SELECT ftk FROM hgdecks`);
    let user = await client.users.fetch("597012586206068736");
    let efesman = new EmbedBuilder()
      .setTitle(`${user.displayName}'s Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To find out more about the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    let ftkill = new EmbedBuilder()
      .setTitle("First Turn Kill")
      .setDescription(`${result[2].ftk}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].ftk}` })
      .addFields({ name: "Deck Cost", value: `${result[0].ftk}` })
      .setImage(`${result[3].ftk}`);
    const m = await message.channel.send({
      embeds: [efesman],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "ftk") {
        await i.update({ embeds: [ftkill], components: [ftk] });
      }
      if (i.customId == "ftkill") {
        await i.update({ embeds: [ftkill], components: [ftk] });
      }
      if (i.customId == "helpe") {
        await i.update({ embeds: [efesman], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [efesman], components: [row] });
      }
    });
  },
};

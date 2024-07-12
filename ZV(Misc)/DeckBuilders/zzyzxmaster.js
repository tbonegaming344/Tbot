const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `zzyzxmaster`,
  aliases: [
    `zzyzxmasterhelp`,
    `helpzzyzxmaster`,
    `zzyzxmasterdecks`,
    `decksmadebyzzyzxmaster`,
    `zzyzx`,
    `zzyzxdecks`,
    `zzyzxhelp`,
    `helpzzyx`,
    `zzyxdecks`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bswarm")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bs")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bs = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpz")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["buffswarm"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let user = await client.users.fetch("748157169270128694");
    let z = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}`
      )
      .setColor("Random")
      .setThumbnail(user.displayAvatarURL())
      .setFooter({
        text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      });
	  let [result] = await db.query(`select buffswarm from ncdecks`);
    let bswarm = new EmbedBuilder()
      .setTitle("Buff Swarm")
      .setDescription(`${result[2].buffswarm}`)
      .setFooter({ text: `${result[1].buffswarm}` })
      .addFields({ name: "Deck Cost", value: `${result[0].buffswarm}` })
      .setColor("Random")
      .setImage(`${result[3].buffswarm}`);
    const m = await message.channel.send({ embeds: [z], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "helpz") {
        await i.update({ embeds: [z], components: [row] });
      }
      if (i.customId == "bs") {
        await i.update({ embeds: [bswarm], components: [bs] });
      }
      if (i.customId == "bswarm") {
        await i.update({ embeds: [bswarm], components: [bs] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [z], components: [row] });
      }
    });
  },
};

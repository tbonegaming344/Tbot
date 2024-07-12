const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `hector`,
  aliases: [`decksmadebyhector`, `helphector`, `hectorhelp`, `hectordecks`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("kshe")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("loop")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const loop = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helph")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ks")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ks = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("l")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["loop", "kitchenhg"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let [result] = await db.query(`select l00p, kitchenhg from rbdecks rb 
inner join hgdecks hg
on (rb.deckinfo = hg.deckinfo)`);
    let hect = new EmbedBuilder()
      .setTitle("Hector Decks")
      .setDescription(
        `My commands for decks made by Hector are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks Made By Hector please use the commands listed above or click on the buttons below!
Note: Hector has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(
        "https://media.discordapp.net/attachments/1044626284346605588/1110694038157402224/hector.jpg"
      )
      .setColor("Random");
    let l = new EmbedBuilder()
      .setTitle("Loop")
      .setDescription(`${result[2].l00p}`)
      .setFooter({ text: `${result[1].l00p}` })
      .addFields({ name: "Deck Cost", value: `${result[0].l00p}` })
      .setColor("Random")
      .setImage(`${result[3].l00p}`);
    let kshe = new EmbedBuilder()
      .setTitle("Kitchen Sink Has Everything")
      .setDescription(`${result[2].kitchenhg}`)
      .setFooter({ text: `${result[1].kitchenhg}` })
      .addFields({ name: "Deck Cost", value: `${result[0].kitchenhg}` })
      .setColor("Random")
      .setImage(`${result[3].kitchenhg}`);
    const m = await message.channel.send({ embeds: [hect], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      //loop
      if (i.customId == "loop") {
        await i.update({ embeds: [l], components: [loop] });
      }
      if (i.customId == "l") {
        await i.update({ embeds: [l], components: [loop] });
      }
      //Kitchen Sink Has Everything
      if (i.customId == "kshe") {
        await i.update({ embeds: [kshe], components: [ks] });
      }
      if (i.customId == "ks") {
        await i.update({ embeds: [kshe], components: [ks] });
      }
      //help
      if (i.customId == "helph") {
        await i.update({ embeds: [hect], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [hect], components: [row] });
      }
    });
  },
};

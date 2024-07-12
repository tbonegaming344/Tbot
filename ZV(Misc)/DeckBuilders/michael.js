const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js")
module.exports = {
  name: `michael`,
  aliases: [`michaeldecks`, `helpmichael`, `michaelhelp`, `decksmadebymichael`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("mblower")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mb")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const mb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpm")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["mindblower"];
    let t = "";
    for (let i = 0; i < decks.length; i++) {
      t += `\n<@1043528908148052089> **${decks[i]}**`;
    }
	let [result] = await db.query(`SELECT mindblower FROM gsdecks`);
    const user = await client.users.fetch("695442102133456918");
    let michael = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${t}`
      )
      .setFooter({
        text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setColor("Random")
      .setThumbnail(user.displayAvatarURL());
    let mblower = new EmbedBuilder()
      .setTitle("Mind Blower")
      .setDescription(`${result[2].mindblower}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].mindblower}` })
      .addFields({ name: "Deck Cost", value: `${result[0].mindblower}` })
      .setImage(`${result[3].mindblower}`);
    const m = await message.channel.send({
      embeds: [michael],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "mb") {
        await i.update({ embeds: [mblower], components: [mb] });
      }
      if (i.customId == "mblower") {
        await i.update({ embeds: [mblower], components: [mb] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [michael], components: [row] });
      }
      if (i.customId == "helpm") {
        await i.update({ embeds: [michael], components: [row] });
      }
    });
  },
};

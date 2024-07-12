const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `samen`,
  aliases: [`decksmadbysamen`, `helpsamen`, `samenhelp`, `samendecks`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("szilla")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ct")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ct = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helps")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sz")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const sz = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ctron")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["countertron", "stallzilla"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> ${decks[i]}`;
    }
	let [result] = await db.query(`select countertron, stallzilla 
from ctdecks ct inner join czdecks cz
on (ct.deckinfo = cz.deckinfo)`)
    let user = await client.users.fetch("299161360145580034");
    let samen = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    let ctron = new EmbedBuilder()
      .setTitle("Countertron")
      .setDescription(`${result[2].countertron}`)
      .setFooter({ text: `${result[1].countertron}` })
      .addFields({ name: "Deck Cost", value: `${result[0].countertron}` })
      .setColor("Random")
      .setImage(`${result[3].countertron}`);
    let szilla = new EmbedBuilder()
      .setTitle("Stallzilla")
      .setDescription(`${result[2].stallzilla}`)
      .setFooter({ text: `${result[1].stallzilla}` })
      .addFields({ name: "Deck Cost", value: `${result[0].stallzilla}` })
      .setColor("Random")
      .setImage(`${result[3].stallzilla}`);
    const m = await message.channel.send({
      embeds: [samen],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "ct") {
        await i.update({ embeds: [ctron], components: [ct] });
      }
      if (i.customId == "ctron") {
        await i.update({ embeds: [ctron], components: [ct] });
      }
      if (i.customId == "helps") {
        await i.update({ embeds: [samen], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [samen], components: [row] });
      }
      if (i.customId == "sz") {
        await i.update({ embeds: [szilla], components: [sz] });
      }
      if (i.customId == "szilla") {
        await i.update({ embeds: [szilla], components: [sz] });
      }
    });
  },
};

const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `oafish`,
  aliases: [`oafishdecks`, `oafishhelp`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("mpets")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mcon")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const mc = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpoa")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mp")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const mp = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("mc")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["mechacontrol", "midpeta"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let [result] = await db.query(`select mechacontrol, midpets 
from rbdecks rb inner join bfdecks bf 
on (rb.deckinfo = bf.deckinfo)`);
    let user = await client.users.fetch("727772762776797248");
    let oa = new EmbedBuilder()
      .setTitle(`${user.displayName} decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks made by ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    let mcon = new EmbedBuilder()
      .setTitle("Brickasaur Control")
      .setDescription(`${result[2].mechacontrol}`)
      .setFooter({ text: `${result[1].mechacontrol}` })
      .setColor("Random")
      .addFields({ name: "Deck Cost", value: `${result[0].mechacontrol}` })
      .setImage(`${result[3].mechacontrol}`);
    let mpets = new EmbedBuilder()
      .setTitle("Mid Pets")
      .setDescription(`${result[2].midpets}`)
      .setColor("Random")
      .setImage(`${result[3].midpets}`)
      .setFooter({ text: `${result[1].midpets}` })
      .addFields({ name: "Deck Cost", value: `${result[0].midpets}` });
    const m = await message.channel.send({ embeds: [oa], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "mc") {
        await i.update({ embeds: [mcon], components: [mc] });
      }
      if (i.customId == "mcon") {
        await i.update({ embeds: [mcon], components: [mc] });
      }
      if (i.customId == "mp") {
        await i.update({ embeds: [mpets], components: [mp] });
      }
      if (i.customId == "mpets") {
        await i.update({ embeds: [mpets], components: [mp] });
      }
      if (i.customId == "helpoa") {
        await i.update({ embeds: [oa], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [oa], components: [row] });
      }
    });
  },
};

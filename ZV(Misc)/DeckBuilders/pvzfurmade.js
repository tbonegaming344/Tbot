const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `pvzfurmade`,
  aliases: [
    `decksmadebypvzfurmade`,
    `pvzfurmadedecks`,
    `pvzfurmadehelp`,
    `furmade`,
    `furmadedecks`,
    `helppvzfurmade`,
    `furmadehelp`,
    `helpfurmade`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pyeez")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bd")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bd = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpp")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("py")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const py = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bducks")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["bonusducks", "pablosyeezys"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
	let [result] = await db.query(`SELECT bonusducks, pablosyeezys
from pbdecks pb 
inner join smdecks sm 
on (pb.deckinfo = sm.deckinfo)`);
    let user = await client.users.fetch("1068350961900326983");
    let fur = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}!`
      )
      .setFooter({
        text: `To view the Decks Made By ${user.displayName}  please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    let bducks = new EmbedBuilder()
      .setTitle("Bonus Ducks")
      .setDescription(`${result[2].bonusducks}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].bonusducks}` })
      .addFields({ name: "Deck Cost", value: `${result[0].bonusducks}` })
      .setImage(`${result[3].bonusducks}`);
    let pyeez = new EmbedBuilder()
      .setTitle("Pablos Yeezys")
      .setDescription(`${result[2].pablosyeezys}`)
      .setFooter({ text: `${result[1].pablosyeezys}` })
      .addFields({ name: "Deck Cost", value: `${result[0].pablosyeezys}` })
      .setColor("Random")
      .setImage(`${result[3].pablosyeezys}`);
    const m = await message.channel.send({ embeds: [fur], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "bducks") {
        await i.update({ embeds: [bducks], components: [bd] });
      }
      if (i.customId == "bd") {
        await i.update({ embeds: [bducks], components: [bd] });
      }
      if (i.customId == "py") {
        await i.update({ embeds: [pyeez], components: [py] });
      }
      if (i.customId == "pyeez") {
        await i.update({ embeds: [pyeez], components: [py] });
      }
      if (i.customId == "helpp") {
        await i.update({ embeds: [fur], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [fur], components: [row] });
      }
    });
  },
};

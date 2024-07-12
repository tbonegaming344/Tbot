const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `tbone`,
  aliases: [`decksmadebytbone`, `tbonedecks`, `tbonehelp`, `helptbone`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("wph")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bc")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );

    //Binary Chickening
    const bc = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpt")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ig")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );

    //Ignea
    const ig = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bch")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("os")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );

    //Otk Swabbie
    const os = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ignea")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("wp")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );

    // Whale Pharaoh
    const wp = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("otks")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let user = await client.users.fetch("625172218120372225");
    let decks = ["binarychickening", "ingea", "otkswabbie", "whalepharaoh"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let [result] = await db.query(`select binarychickening, ignea, otkswabbie,
whalepharaoh from pbdecks pb 
inner join ebdecks eb
on (pb.deckinfo = eb.deckinfo)
inner join bfdecks bf 
on (pb.deckinfo = bf.deckinfo) 
inner join smdecks sm
on (pb.deckinfo = sm.deckinfo)`);
    let tbone = new EmbedBuilder()
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
    //Binary Chickening
    let bch = new EmbedBuilder()
      .setTitle("Binary Chickening")
      .setDescription(`${result[2].binarychickening}`)
      .setFooter({ text: `${result[1].binarychickening}` })
      .addFields({ name: "Deck Cost", value: `${result[0].binarychickening}` })
      .setColor("Random")
      .setImage(`${result[3].binarychickening}`);

    // Ignea
    let ignea = new EmbedBuilder()
      .setTitle("Ingea")
      .setDescription(`${result[2].ignea}`)
      .setFooter({ text: `${result[1].ignea}` })
      .setImage(`${result[3].ignea}`)
      .addFields({ name: "Deck Cost", value: `${result[0].ignea}` })
      .setColor("Random");

    // Otk Swabbie
    let otks = new EmbedBuilder()
      .setTitle("OTK Swabbie")
      .setDescription(`${result[2].otkswabbie}`)
      .setFooter({ text: `${result[1].otkswabbie}` })
      .addFields({ name: "Deck Cost", value: `${result[0].otkswabbie}` })
      .setColor("Random")
      .setImage(`${result[3].otkswabbie}`);

    // Whale Pharaoh
    let wph = new EmbedBuilder()
      .setTitle("Whale Pharaoh")
      .setDescription(`${result[2].whalepharaoh}`)
      .setFooter({ text: `${result[1].whalepharaoh}` })
      .setColor("Random")
      .setImage(`${result[3].whalepharaoh}`)
      .addFields({ name: "Deck Cost", value: `${result[0].whalepharaoh}` });
    const m = await message.channel.send({
      embeds: [tbone],
      components: [row],
    });

    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });

    collector.on("collect", async (i) => {
      if (i.customId == "bc") {
        await i.update({ embeds: [bch], components: [bc] });
      }
      if (i.customId == "bch") {
        await i.update({ embeds: [bch], components: [bc] });
      }
      if (i.customId == "helpt") {
        await i.update({ embeds: [tbone], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [tbone], components: [row] });
      }
      //Ignea
      if (i.customId == "ignea") {
        await i.update({ embeds: [ignea], components: [ig] });
      }
      if (i.customId == "ig") {
        await i.update({ embeds: [ignea], components: [ig] });
      }
      if (i.customId == "os") {
        await i.update({ embeds: [otks], components: [os] });
      }
      if (i.customId == "otks") {
        await i.update({ embeds: [otks], components: [os] });
      }
      if (i.customId == "wp") {
        await i.update({ embeds: [wph], components: [wp] });
      }
      if (i.customId == "wph") {
        await i.update({ embeds: [wph], components: [wp] });
      }
    });
  },
};

const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `mono`,
  aliases: [`decksmadebymono`, `monodecks`, `monohelp`, `helpmono`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    //Deck buttons for mono
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("vsster")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("arp")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const arp = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpm")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ck")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ck = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("arpeas")
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
        .setCustomId("ckinght")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pbf")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const pbf = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ignea")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("rt")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const rt = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pbfeast")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("vss")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const vss = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("rticia")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = [
      "aggroramppeas",
      "cancerknight",
      "ignea",
      "pbfeast",
      "rampticia",
      "valksterstache",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n <@1043528908148052089> **${deck}**`;
    }
    let [result] = await db.query(`select aggroramppeas, cancerknight, ignea, 
pbfeast, rampticia, valksterstache
from czdecks cz 
inner join wkdecks wk 
on (cz.deckinfo = wk.deckinfo) 
inner join ebdecks eb 
on (cz.deckinfo = eb.deckinfo) 
inner join pbdecks pb 
on (cz.deckinfo = pb.deckinfo)
inner join imdecks im 
on (cz.deckinfo = im.deckinfo)`);
    // fetch user mono
    let user = await client.users.fetch("444700385744257034");
    let mono = new EmbedBuilder()
      .setTitle(`${user.displayName}  Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    let arpeas = new EmbedBuilder()
      .setTitle("Aggro Ramp Peas")
      .setDescription(`${result[2].aggroramppeas}`)
      .setFooter({ text: `${result[1].aggroramppeas}` })
      .addFields({ name: "Deck Cost", value: `${result[0].aggroramppeas}` })
      .setColor("Random")
      .setImage(`${result[3].aggroramppeas}`);
    let cknight = new EmbedBuilder()
      .setTitle("Cancer Knight")
      .setDescription(`${result[2].cancerknight}`)
      .setColor("Random")
      .addFields({ name: "Deck Cost", value: `${result[0].cancerknight}` })
      .setImage(`${result[3].cancerknight}`)
      .setFooter({ text: `${result[1].cancerknight}` });
    //Ignea
    let ignea = new EmbedBuilder()
      .setTitle("Ingea")
      .setDescription(`${result[2].ignea}`)
      .setFooter({ text: `${result[1].ignea}` })
      .setImage(`${result[3].ignea}`)
      .addFields({ name: "Deck Cost", value: `${result[0].ignea}` })
      .setColor("Random");
    //pb feast
    let pbfeast = new EmbedBuilder()
      .setTitle("Feast Control")
      .setDescription(`${result[2].pbfeast}`)
      .setFooter({ text: `${result[1].pbfeast}` })
      .addFields({ name: "Deck Cost", value: `${result[0].pbfeast}` })
      .setColor("Random")
      .setImage(`${result[3].pbfeast}`);
    let rticia = new EmbedBuilder()
      .setTitle("Ramp Immorticia")
      .setDescription(`${result[2].rampticia}`)
      .setFooter({ text: `${result[1].rampticia}` })
      .addFields({ name: "Deck Cost", value: `${result[0].rampticia}` })
      .setColor("Random")
      .setImage(`${result[3].rampticia}`);
    //valksterstache
    let valkstache = new EmbedBuilder()
      .setTitle("Valksterstache")
      .setDescription(`${result[2].valksterstache}`)
      .setFooter({ text: `${result[1].valksterstache}` })
      .addFields({ name: "Deck Cost", value: `${result[0].valksterstache}` })
      .setColor("Random")
      .setImage(`${result[3].valksterstache}`);
    const m = await message.channel.send({ embeds: [mono], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "arp") {
        await i.update({ embeds: [arpeas], components: [arp] });
      }
      if (i.customId == "arpeas") {
        await i.update({ embeds: [arpeas], components: [arp] });
      }
      if (i.customId == "helpm") {
        await i.update({ embeds: [mono], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [mono], components: [row] });
      }
      if (i.customId == "ck") {
        await i.update({ embeds: [cknight], components: [ck] });
      }
      if (i.customId == "cknight") {
        await i.update({ embeds: [cknight], components: [ck] });
      }
      //Ignea
      if (i.customId == "ignea") {
        await i.update({ embeds: [ignea], components: [ig] });
      }
      if (i.customId == "ig") {
        await i.update({ embeds: [ignea], components: [ig] });
      }
      if (i.customId == "pbf") {
        await i.update({ embeds: [pbfeast], components: [pbf] });
      }
      if (i.customId == "pbfeast") {
        await i.update({ embeds: [pbfeast], components: [pbf] });
      }
      if (i.customId == "rt") {
        await i.update({ embeds: [rticia], components: [rt] });
      }
      if (i.customId == "rticia") {
        await i.update({ embeds: [rticia], components: [rt] });
      }
      //valksterstache
      if (i.customId == "vss") {
        await i.update({ embeds: [valkstache], components: [vss] });
      }
      if (i.customId == "vsster") {
        await i.update({ embeds: [valkstache], components: [vss] });
      }
    });
  },
};

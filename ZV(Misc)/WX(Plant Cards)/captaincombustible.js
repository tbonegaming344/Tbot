const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `captaincombustible`,
  aliases: [`cc`, `captain`, `combustible`, `combust`, `stumpy`],
  category: `Plant Cards`,
  run: async (client, message, args) => {
    const cmd = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cmd")
        .setLabel("CC Commands")
        .setEmoji("<a:aCombustible:1100168807391166525>")
        .setStyle(ButtonStyle.Primary)
    );
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("yr")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("be")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const be = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpcc")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bcc")
        .setLabel("⏭️")
        .setStyle(ButtonStyle.Primary)
    );
    const bemp = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bem")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("com")
        .setLabel("⏭️")
        .setStyle(ButtonStyle.Primary)
    );
    const comp = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bemp")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cob")
        .setLabel("⏭️")
        .setStyle(ButtonStyle.Primary)
    );
    const comb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("comp")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("gt")
        .setLabel("⏭️")
        .setStyle(ButtonStyle.Primary)
    );
    const gtemp = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("comh")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pl")
        .setLabel("⏭️")
        .setStyle(ButtonStyle.Primary)
    );
    const pl = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gtempo")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("yrm")
        .setLabel("⏭️")
        .setStyle(ButtonStyle.Primary)
    );
    const yrm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pm")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭️")
        .setStyle(ButtonStyle.Primary)
    );
    let cc = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/pvzcc/images/0/09/TRUEHD_Captain_Combustible.png/revision/latest?cb=20200729194212"
      )
      .setTitle(
        "Captain Combustible | <:Kabloom:1062502137826910268><:MegaGrow:1062501412992458802>"
      )
      .setDescription("**- Tree Hero  -**")
      .setColor("Random")
      .addFields(
        {
          name: "Superpowers",
          value:
            "Meteor Strike <:Kabloom:1062502137826910268> \n Do 3 damage to a Zombie. \nEmbiggen <:MegaGrow:1062501412992458802> \n A Plants gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184>. \nTime To Shine <:MegaGrow:1062501412992458802> \n A Plant does a Bonus Attack. \nBlazing Bark <:Kabloom:1062502137826910268><:MegaGrow:1062501412992458802> \n A Plant gets +4<:Strength:1062501774612779039>.",
        },
        {
          name: "Set-Rarity",
          value: "**Premium - Hero**",
        },
        {
          name: "Flavor Text",
          value: `If you want to see him blow his top, try calling him "Stumpy". Go on. Try it.`,
        }
      );
    let decks = [
      "bempo",
      "budgetplantmop",
      "combased",
      "comboss",
      "gatlingtempo",
      "helpcc",
      "plantmop",
      "randomcc",
      "yrm",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let embed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/pvzcc/images/0/09/TRUEHD_Captain_Combustible.png/revision/latest?cb=20200729194212"
      )
      .setTitle("CC Commands")
      .setDescription(
        `My commands for Captain Combustible(CC) are ${toBuildString}`
      )
      .setColor("Random")
      .setFooter({
        text: `To view the Captain Combustible decks please use the commands listed above or click on the buttons below!
Note: Captain Combustible has ${decks.length - 3} total decks in Tbot`,
      });
    let [result] = await db.query(`SELECT * from ccdecks`);
    let bem = new EmbedBuilder()
      .setTitle("Bempo")
      .setDescription(`${result[2].bempo}`)
      .setFooter({ text: `${result[1].bempo}` })
      .addFields({ name: "Deck Cost", value: `${result[0].bempo}` })
      .setColor("Random")
      .setImage(`${result[3].bempo}`);
    let ba = new EmbedBuilder()
      .setTitle("CC Budget Plant Mop")
      .setDescription(`${result[2].budgetcc}`)
      .setFooter({ text: `${result[1].budgetcc}` })
      .addFields({ name: "Deck Cost", value: `${result[0].budgetcc}` })
      .setColor("Random")
      .setImage(`${result[3].budgetcc}`);
    let co = new EmbedBuilder()
      .setTitle("Combased")
      .setDescription(`${result[2].combased}`)
      .setFooter({ text: `${result[1].combased}` })
      .addFields({ name: "Deck Cost", value: `${result[0].combased}` })
      .setColor("Random")
      .setImage(`${result[3].combased}`);
    let cboss = new EmbedBuilder()
      .setTitle("Comboss")
      .setDescription(`${result[2].comboss}`)
      .setFooter({ text: `${result[1].comboss}` })
      .addFields({ name: "Deck Cost", value: `${result[0].comboss}` })
      .setColor("Random")
      .setImage(`${result[3].comboss}`);
    let gt = new EmbedBuilder()
      .setTitle("Gatling Tempo")
      .setDescription(`${result[2].gatlingtempo}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].gatlingtempo}` })
      .addFields({ name: "Deck Cost", value: `${result[0].gatlingtempo}` })
      .setImage(`${result[3].gatlingtempo}`);
    let pm = new EmbedBuilder()
      .setTitle("Plant Mop")
      .setDescription(`${result[2].plantmop}`)
      .setFooter({ text: `${result[1].plantmop}` })
      .addFields({ name: "Deck Cost", value: `${result[0].plantmop}` })
      .setColor("Random")
      .setImage(`${result[3].plantmop}`);
    let yr = new EmbedBuilder()
      .setTitle("Young Rings Martin")
      .setDescription(`${result[2].yrm}`)
      .setFooter({ text: `${result[1].yrm}` })
      .addFields({ name: "Deck Cost", value: `${result[0].yrm}` })
      .setColor("Random")
      .setImage(`${result[3].yrm}`);
    const m = await message.channel.send({ embeds: [cc], components: [cmd] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "be") {
        await i.update({ embeds: [bem], components: [be] });
      }
      if (i.customId == "cmd") {
        await i.update({ embeds: [embed], components: [row] });
      }
      if (i.customId == "helpcc") {
        await i.update({ embeds: [embed], components: [row] });
      }
      if (i.customId == "bcc") {
        await i.update({ embeds: [ba], components: [bemp] });
      }
      if (i.customId == "bem") {
        await i.update({ embeds: [bem], components: [be] });
      }
      if (i.customId == "bemp") {
        await i.update({ embeds: [ba], components: [bemp] });
      }
      if (i.customId == "cl") {
        await i.update({ embeds: [cl], components: [com] });
      }
      if (i.customId == "com") {
        await i.update({ embeds: [co], components: [comp] });
      }
      if (i.customId == "comb") {
        await i.update({ embeds: [cl], components: [com] });
      }
      if (i.customId == "cob") {
        await i.update({ embeds: [cboss], components: [comb] });
      }
      if (i.customId == "comp") {
        await i.update({ embeds: [co], components: [comp] });
      }
      if (i.customId == "pl") {
        await i.update({ embeds: [pm], components: [pl] });
      }
      if (i.customId == "comh") {
        await i.update({ embeds: [cboss], components: [comb] });
      }
      if (i.customId == "yrm") {
        await i.update({ embeds: [yr], components: [yrm] });
      }
      if (i.customId == "yr") {
        await i.update({ embeds: [yr], components: [yrm] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [embed], components: [row] });
      }
      if (i.customId == "pm") {
        await i.update({ embeds: [pm], components: [pl] });
      }
      if (i.customId == "gt") {
        await i.update({ embeds: [gt], components: [gtemp] });
      }
      if (i.customId == "gtempo") {
        await i.update({ embeds: [gt], components: [gtemp] });
      }
    });
  },
};

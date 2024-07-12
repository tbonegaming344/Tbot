const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `fryemup`,
  aliases: [
    `fryemupdecks`,
    `decksmadebyfry`,
    `frydecks`,
    `fry`,
    `fryemupdecks`,
    `helpfry`,
    `fryhelp`,
    `fryemuphelp`,
    `helpfryemup`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("valk")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bc")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bc = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpfry")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ba")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ba = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bclones")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cl")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const cl = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("baggro")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("fm")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const fm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cleap")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("fmid")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const fmid = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("fmech")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("gp")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const gp = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("frymid")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mp")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const mp = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gang")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("midt")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const midt = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("mpirates")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("m")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const m = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("midtuna")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pack")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const pack = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("mop")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pp")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const pp = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("packwk")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("rp")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const rp = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pclones")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("swe")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const swe = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("rpack")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("tb")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const tb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("sweap")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ts")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ts = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("tbolt")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("valkster")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const valk = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("tsmash")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = [
      "brainclones",
      "bullseyeaggro",
      "conjureleap",
      "frymech",
      "frymidrose",
      "gangstaparadise",
      "midpirates",
      "midtuna",
      "mop",
      "packagewk",
      "psychopineclones",
      "raiserpackage",
      "sweap",
      "trickbolt",
      "tricksmash",
      "valkster",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let [result] =
      await db.query(`select brainclones, baggro, conjureleap, frymech, frymidrose, 
gangstaparadise, midpirates, midtuna, mop, 
packagewk, psychopineclones, raiserpackage, sweap, trickbolt,
tricksmash, valkster
from ncdecks nc 
inner join gkdecks gk 
on (nc.deckinfo = gk.deckinfo)
inner join zmdecks zm 
on (nc.deckinfo = zm.deckinfo)
inner join rodecks ro 
on (nc.deckinfo = ro.deckinfo)
inner join bfdecks bf
on (nc.deckinfo = bf.deckinfo)
inner join ifdecks fi 
on (nc.deckinfo = fi.deckinfo)
inner join ntdecks nt
on (nc.deckinfo = nt.deckinfo)
inner join smdecks sm 
on (nc.deckinfo = sm.deckinfo)
inner join wkdecks wk 
on (nc.deckinfo = wk.deckinfo)
inner join sfdecks sf 
on (nc.deckinfo = sf.deckinfo)
inner join hgdecks hg
on (nc.deckinfo = hg.deckinfo)
inner join rbdecks rb 
on (nc.deckinfo = rb.deckinfo)
inner join pbdecks pb 
on (nc.deckinfo = pb.deckinfo)`);
    let user = await client.users.fetch("291752823891427329");
    let fry = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    let bclones = new EmbedBuilder()
      .setTitle("BrainClones")
      .setDescription(`${result[2].brainclones}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].brainclones}` })
      .addFields({ name: "Deck Cost", value: `${result[0].brainclones}` })
      .setImage(`${result[3].brainclones}`);
    let baggro = new EmbedBuilder()
      .setTitle("Bullseye Aggro")
      .setDescription(`${result[2].baggro}`)
      .setFooter({ text: `${result[1].baggro}` })
      .addFields({ name: "Deck Cost", value: `${result[0].baggro}` })
      .setColor("Random")
      .setImage(`${result[3].baggro}`);
    let cleap = new EmbedBuilder()
      .setTitle("Conjure Leap")
      .setDescription(`${result[2].conjureleap}`)
      .setFooter({ text: `${result[1].conjureleap}` })
      .addFields({ name: "Deck Cost", value: `${result[0].conjureleap}` })
      .setColor("Random")
      .setImage(`${result[3].conjureleap}`);
    let fmech = new EmbedBuilder()
      .setTitle("Fry Mech")
      .setDescription(`${result[2].frymech}`)
      .setFooter({ text: `${result[1].frymech}` })
      .addFields({ name: "Deck Cost", value: `${result[0].frymech}` })
      .setColor("Random")
      .setImage(`${result[3].frymech}`);
    let frymid = new EmbedBuilder()
      .setTitle("Fry Midrose")
      .setDescription(`${result[2].frymidrose}`)
      .setFooter({ text: `${result[1].frymidrose}` })
      .addFields({ name: "Deck Cost", value: `${result[0].frymidrose}` })
      .setColor("Random")
      .setImage(`${result[3].frymidrose}`);
    let gang = new EmbedBuilder()
      .setTitle("Gangsta's Paradise")
      .setDescription(`${result[2].gangstaparadise}`)
      .setColor("Random")
      .addFields({ name: "Deck Cost", value: `${result[0].gangstaparadise}` })
      .setImage(`${result[3].gangstaparadise}`)
      .setFooter({ text: `${result[1].gangstaparadise}` });
    let midtuna = new EmbedBuilder()
      .setTitle("Fry's Midtuna")
      .setDescription(`${result[2].midtuna}`)
      .setFooter({ text: `${result[1].midtuna}` })
      .addFields({ name: "Deck Cost", value: `${result[0].midtuna}` })
      .setColor("Random")
      .setImage(`${result[3].midtuna}`);
    let mop = new EmbedBuilder()
      .setTitle("Mop")
      .setDescription(`${result[2].mop}`)
      .setFooter({ text: `${result[1].mop}` })
      .addFields({ name: "Deck Cost", value: `${result[0].mop}` })
      .setColor("Random")
      .setImage(`${result[3].mop}`);
    let mpirates = new EmbedBuilder()
      .setTitle("Mid-Pirates")
      .setDescription(`${result[2].midpirates}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].midpirates}` })
      .addFields({ name: "Deck Cost", value: `${result[0].midpirates}` })
      .setImage(`${result[3].midpirates}`);
    let pclones = new EmbedBuilder()
      .setTitle("Psycho Pineclones")
      .setDescription(`${result[2].psychopineclones}`)
      .setFooter({ text: `${result[1].psychopineclones}` })
      .addFields({ name: "Deck Cost", value: `${result[0].psychopineclones}` })
      .setColor("Random")
      .setImage(`${result[3].psychopineclones}`);
    let rpack = new EmbedBuilder()
      .setTitle("Raiser Package")
      .setDescription(`${result[2].raiserpackage}`)
      .setFooter({ text: `${result[1].raiserpackage}` })
      .addFields({ name: "Deck Cost", value: `${result[0].raiserpackage}` })
      .setColor("Random")
      .setImage(`${result[3].raiserpackage}`);
    let packwk = new EmbedBuilder()
      .setTitle("Package WK")
      .setDescription(`${result[2].packagewk}`)
      .setFooter({ text: `${result[1].packagewk}` })
      .addFields({ name: "Deck Cost", value: `${result[0].packagewk}` })
      .setColor("Random")
      .setImage(`${result[3].packagewk}`);
    let sweap = new EmbedBuilder()
      .setTitle("Sweap")
      .setDescription(`${result[2].sweap}`)
      .setFooter({ text: `${result[1].sweap}` })
      .addFields({ name: "Deck Cost", value: `${result[0].sweap}` })
      .setColor("Random")
      .setImage(`${result[3].sweap}`);
    let tbolt = new EmbedBuilder()
      .setTitle("Trick Bolt")
      .setDescription(`${result[2].trickbolt}`)
      .setFooter({ text: `${result[1].trickbolt}` })
      .addFields({ name: "Deck Cost", value: `${result[0].trickbolt}` })
      .setColor("Random")
      .setImage(`${result[3].trickbolt}`);
    let tsmash = new EmbedBuilder()
      .setTitle("Trick Smash")
      .setDescription(`${result[2].tricksmash}`)
      .setFooter({ text: `${result[1].tricksmash}` })
      .addFields({ name: "Deck Cost", value: `${result[0].tricksmash}` })
      .setColor("Random")
      .setImage(`${result[3].tricksmash}`);
    let valkster = new EmbedBuilder()
      .setTitle("Valkster")
      .setDescription(`${result[2].valkster}`)
      .setFooter({ text: `${result[1].valkster}` })
      .addFields({ name: "Deck Cost", value: `${result[0].valkster}` })
      .setColor("Random")
      .setImage(`${result[3].valkster}`);
    const t = await message.channel.send({ embeds: [fry], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = t.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "helpfry") {
        await i.update({ embeds: [fry], components: [row] });
      }
      if (i.customId == "bc") {
        await i.update({ embeds: [bclones], components: [bc] });
      }
      if (i.customId == "bclones") {
        await i.update({ embeds: [bclones], components: [bc] });
      }
      if (i.customId == "ba") {
        await i.update({ embeds: [baggro], components: [ba] });
      }
      if (i.customId == "fm") {
        await i.update({ embeds: [fmech], components: [fm] });
      }
      if (i.customId == "baggro") {
        await i.update({ embeds: [baggro], components: [ba] });
      }
      //conjure leap
      if (i.customId == "cleap") {
        await i.update({ embeds: [cleap], components: [cl] });
      }
      if (i.customId == "cl") {
        await i.update({ embeds: [cleap], components: [cl] });
      }
      if (i.customId == "fmid") {
        await i.update({ embeds: [frymid], components: [fmid] });
      }
      if (i.customId == "fmech") {
        await i.update({ embeds: [fmech], components: [fm] });
      }
      if (i.customId == "mp") {
        await i.update({ embeds: [mpirates], components: [mp] });
      }
      if (i.customId == "pack") {
        await i.update({ embeds: [packwk], components: [pack] });
      }
      if (i.customId == "packwk") {
        await i.update({ embeds: [packwk], components: [pack] });
      }
      if (i.customId == "mpirates") {
        await i.update({ embeds: [mpirates], components: [mp] });
      }
      if (i.customId == "gp") {
        await i.update({ embeds: [gang], components: [gp] });
      }
      if (i.customId == "frymid") {
        await i.update({ embeds: [frymid], components: [fmid] });
      }
      if (i.customId == "gang") {
        await i.update({ embeds: [gang], components: [gp] });
      }
      if (i.customId == "midt") {
        await i.update({ embeds: [midtuna], components: [midt] });
      }
      if (i.customId == "midtuna") {
        await i.update({ embeds: [midtuna], components: [midt] });
      }
      if (i.customId == "m") {
        await i.update({ embeds: [mop], components: [m] });
      }
      if (i.customId == "mop") {
        await i.update({ embeds: [mop], components: [m] });
      }
      if (i.customId == "pp") {
        await i.update({ embeds: [pclones], components: [pp] });
      }
      if (i.customId == "rp") {
        await i.update({ embeds: [rpack], components: [rp] });
      }
      if (i.customId == "pclones") {
        await i.update({ embeds: [pclones], components: [pp] });
      }
      if (i.customId == "sc") {
        await i.update({ embeds: [scorn], components: [sc] });
      }
      if (i.customId == "rpack") {
        await i.update({ embeds: [rpack], components: [rp] });
      }
      if (i.customId == "swe") {
        await i.update({ embeds: [sweap], components: [swe] });
      }
      if (i.customId == "scorn") {
        await i.update({ embeds: [scorn], components: [sc] });
      }
      if (i.customId == "tb") {
        await i.update({ embeds: [tbolt], components: [tb] });
      }
      if (i.customId == "sweap") {
        await i.update({ embeds: [sweap], components: [swe] });
      }
      if (i.customId == "ts") {
        await i.update({ embeds: [tsmash], components: [ts] });
      }
      if (i.customId == "tbolt") {
        await i.update({ embeds: [tbolt], components: [tb] });
      }
      if (i.customId == "tsmash") {
        await i.update({ embeds: [tsmash], components: [ts] });
      }
      if (i.customId == "valkster") {
        await i.update({ embeds: [valkster], components: [valk] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [fry], components: [row] });
      }
      if (i.customId == "valk") {
        await i.update({ embeds: [valkster], components: [valk] });
      }
    });
  },
};

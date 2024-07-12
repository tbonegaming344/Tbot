const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `snortingsalt`,
  aliases: [
    `helpsalt`,
    `salthelp`,
    `decksmadebysalt`,
    `saltdecklists`,
    `decklistsmadebysalt`,
    `saltdecks`,
    `salt`,
    `snortingsaltdecks`,
    `snortingsalt`,
    `snorting`,
    `decksalt`,
    `decksalt`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("yule")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("i3")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const i3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helps")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ap")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ap = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("int3")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bart")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bar = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("apotk")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("btoss")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const btoss = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bartin")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bykm")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bykm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("blomb")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bust")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bust = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ykmb")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ccpa")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ccpa = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bustbolt")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("chemo")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const chemo = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ccpaggro")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cb")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const cb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("chemotherapy")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cy")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const cy = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cbase")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("fk")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const fk = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cburn")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ft")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ft = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("fknight")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("g")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const g = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ftor")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("gst")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const gst = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("glag")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hmf")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const hmf = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gstache")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hmk")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const hmk = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("hmflare")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hmz")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const hmz = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("hmknight")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("jb")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const jb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("hmzilla")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ni")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ni = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("jbeans")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("otk")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const otk = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("niv")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ps")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ps = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("otkt")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sy")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const sy = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("psmash")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sci")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const sci = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("syard")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sc")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const sc = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("scimmort")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sham")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const sham = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("scret")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sol")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const sol = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("shamcon")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ss")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ss = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("soul")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("st")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const st = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("star")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("start")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const start = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("sticia")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ts")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ts = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("tron")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("toa")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const toa = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("tstache")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("yule")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const yule = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("toast")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );

    let decks = [
      "3int",
      "apotk",
      "bartin",
      "blomboticia",
      "budgetykm",
      "bustbolt",
      "ccpaggro",
      "chemotherapy",
      "combased",
      "cyburn",
      "funnyknight",
      "flagtor",
      "glag",
      "gravestache",
      "healmidflare",
      "healmidwk",
      "healmidzilla",
      "jbeans",
      "nivola",
      "otktrickster",
      "pepegasmash",
      "schoolyard",
      "scimmort",
      "seacret",
      "shamcontrolbc",
      "solstice",
      "spacestars",
      "stacheticia",
      "startron",
      "throwster",
      "toaster",
      "yuletide",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let [result] =
      await db.query(`select it3, apotk, bartin, blomboticia,
budgetykm, bustbolt, ccpaggro, chemotherapy, combased, 
cyburn, funnyknight, flagtor, glag, gravestache, healmidflare, 
healmidwk, healmidzilla, jbeans, nivola, otktrickster, 
pepegasmash, schoolyard, scimmort, seacret, shamcontrol, 
solstice, spacestars, stacheticia, startron, throwster, 
toaster, yuletide 
from gkdecks gk inner join czdecks cz 
on (gk.deckinfo = cz.deckinfo)
inner join pbdecks pb 
on (gk.deckinfo = pb.deckinfo)
inner join spdecks sp
on (gk.deckinfo = sp.deckinfo)
inner join imdecks im 
on (gk.deckinfo = im.deckinfo)
inner join hgdecks hg
on (gk.deckinfo = hg.deckinfo)
inner join rbdecks rb 
on (gk.deckinfo = rb.deckinfo)
inner join wkdecks wk 
on (gk.deckinfo = wk.deckinfo)
inner join ccdecks cc
on (gk.deckinfo = cc.deckinfo)
inner join ncdecks nc
on (gk.deckinfo = nc.deckinfo)
inner join ntdecks nt
on (gk.deckinfo = nt.deckinfo)
inner join gsdecks gs 
on (gk.deckinfo = gs.deckinfo)
inner join smdecks sm 
on (gk.deckinfo = sm.deckinfo)
inner join ebdecks eb 
on (gk.deckinfo = eb.deckinfo)
inner join bcdecks bc 
on (gk.deckinfo = bc.deckinfo)
inner join ifdecks fi
on (gk.deckinfo = fi.deckinfo)
inner join ctdecks ct 
on (gk.deckinfo = ct.deckinfo)
inner join sfdecks sf
on (gk.deckinfo = sf.deckinfo)`);
    let user = await client.users.fetch("599750713509281792");
    let salt = new EmbedBuilder()
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
    let int3 = new EmbedBuilder()
      .setTitle("3INT")
      .setDescription(`${result[2].it3}`)
      .setFooter({ text: `${result[1].it3}` })
      .setColor("Random")
      .addFields({ name: "Deck Cost", value: `${result[0].it3}` })
      .setImage(`${result[3].it3}`);
    let apotk = new EmbedBuilder()
      .setTitle("Apotato OTK")
      .setDescription(`${result[2].apotk}`)
      .setFooter({ text: `${result[1].apotk}` })
      .addFields({ name: "Deck Cost", value: `${result[0].apotk}` })
      .setColor("Random")
      .setImage(`${result[3].apotk}`);
    // Bartin
    let bart = new EmbedBuilder()
      .setTitle("Burst Martin")
      .setDescription(`${result[2].bartin}`)
      .setFooter({ text: `${result[1].bartin}` })
      .addFields({ name: "Deck Cost", value: `${result[0].bartin}` })
      .setColor("Random")
      .setImage(`${result[3].bartin}`);
    // Blomboticia
    let blomb = new EmbedBuilder()
      .setTitle("Budget Blomboticia")
      .setDescription(`${result[2].blomboticia}`)
      .setColor("Random")
      .addFields({ name: "Deck Cost", value: `${result[0].blomboticia}` })
      .setImage(`${result[3].blomboticia}`)
      .setFooter({ text: `${result[1].blomboticia}` });
    let bustbolt = new EmbedBuilder()
      .setTitle("BustBolt")
      .setDescription(`${result[2].bustbolt}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].bustbolt}` })
      .addFields({ name: "Deck Cost", value: `${result[0].bustbolt}` })
      .setImage(`${result[3].bustbolt}`);
    let cpaggro = new EmbedBuilder()
      .setTitle("CCP Aggro GK")
      .setDescription(`${result[2].ccpaggro}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].ccpaggro}` })
      .setImage(`${result[3].ccpaggro}`)
      .addFields({ name: "Deck Cost", value: `${result[0].ccpaggro}` });
    let ykmb = new EmbedBuilder()
      .setTitle("Budget YKM")
      .setDescription(`${result[2].budgetykm}`)
      .setFooter({ text: `${result[1].budgetykm}` })
      .addFields({ name: "Deck Cost", value: `${result[0].budgetykm}` })
      .setColor("Random")
      .setImage(`${result[3].budgetykm}`);
    let cbase = new EmbedBuilder()
      .setTitle("Combased")
      .setDescription(`${result[2].combased}`)
      .setFooter({ text: `${result[1].combased}` })
      .addFields({ name: "Deck Cost", value: `${result[0].combased}` })
      .setColor("Random")
      .setImage(`${result[3].combased}`);
    let chemotherapy = new EmbedBuilder()
      .setTitle("Chemotherapy")
      .setDescription(`${result[2].chemotherapy}`)
      .setFooter({ text: `${result[1].chemotherapy}` })
      .addFields({ name: "Deck Cost", value: `${result[0].chemotherapy}` })
      .setColor("Random")
      .setImage(`${result[3].chemotherapy}`);
    let cburn = new EmbedBuilder()
      .setTitle("Cyburn")
      .setDescription(`${result[2].cyburn}`)
      .setFooter({ text: `${result[1].cyburn}` })
      .addFields({ name: "Deck Cost", value: `${result[0].cyburn}` })
      .setColor("Random")
      .setImage(`${result[3].cyburn}`);
    let fknight = new EmbedBuilder()
      .setTitle("Funny Knight")
      .setDescription(`${result[2].funnyknight}`)
      .setFooter({ text: `${result[1].funnyknight}` })
      .addFields({ name: "Deck Cost", value: `${result[0].funnyknight}` })
      .setColor("Random")
      .setImage(`${result[3].funnyknight}`);
    let ftor = new EmbedBuilder()
      .setTitle("Flagtor")
      .setDescription(`${result[2].flagtor}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].flagtor}` })
      .addFields({ name: "Deck Cost", value: `${result[0].flagtor}` })
      .setImage(`${result[3].flagtor}`);
    let glag = new EmbedBuilder()
      .setTitle("Glag")
      .setDescription(`${result[2].glag}`)
      .setFooter({ text: `${result[1].glag}` })
      .addFields({ name: "Deck Cost", value: `${result[0].glag}` })
      .setColor("Random")
      .setImage(`${result[3].glag}`);
    let gstache = new EmbedBuilder()
      .setTitle("Gravestache")
      .setDescription(`${result[2].gravestache}`)
      .addFields({ name: "Deck Cost", value: `${result[0].gravestache}` })
      .setFooter({ text: `${result[1].gravestache}` })
      .setColor("Random")
      .setImage(`${result[3].gravestache}`);
    //Heal Midflare
    let hmflare = new EmbedBuilder()
      .setTitle("Heal Mid Flare")
      .setDescription(`${result[2].healmidflare}`)
      .setFooter({ text: `${result[1].healmidflare}` })
      .addFields({ name: "Deck Cost", value: `${result[0].healmidflare}` })
      .setColor("Random")
      .setImage(`${result[3].healmidflare}`);
    let hmknight = new EmbedBuilder()
      .setTitle("Heal Midknight")
      .setDescription(`${result[2].healmidwk}`)
      .setFooter({ text: `${result[1].healmidwk}` })
      .addFields({ name: "Deck Cost", value: `${result[0].healmidwk}` })
      .setColor("Random")
      .setImage(`${result[3].healmidwk}`);
    let hmzilla = new EmbedBuilder()
      .setTitle("Heal MidZilla")
      .setDescription(`${result[2].healmidzilla}`)
      .setFooter({ text: `${result[1].healmidzilla}` })
      .addFields({ name: "Deck Cost", value: `${result[0].healmidzilla}` })
      .setColor("Random")
      .setImage(`${result[3].healmidzilla}`);
    let jbeans = new EmbedBuilder()
      .setTitle("Jbeans")
      .setDescription(`${result[2].jbeans}`)
      .setFooter({ text: `${result[1].jbeans}` })
      .addFields({ name: "Deck Cost", value: `${result[0].jbeans}` })
      .setColor("Random")
      .setImage(`${result[3].jbeans}`);
    let niv = new EmbedBuilder()
      .setTitle("Nivola(Unamuno)")
      .setDescription(`${result[2].nivola}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].nivola}` })
      .setImage(`${result[3].nivola}`)
      .addFields({ name: "Deck Cost", value: `${result[0].nivola}` });
    //OTK Trickster
    let otkt = new EmbedBuilder()
      .setTitle("OTK Trickster")
      .setDescription(`${result[2].otktrickster}`)
      .setFooter({ text: `${result[1].otktrickster}` })
      .addFields({ name: "Deck Cost", value: `${result[0].otktrickster}` })
      .setColor("Random")
      .setImage(`${result[3].otktrickster}`);
    let psmash = new EmbedBuilder()
      .setTitle("Pepega Smash")
      .setDescription(`${result[2].pepegasmash}`)
      .setFooter({ text: `${result[1].pepegasmash}` })
      .addFields({ name: "Deck Cost", value: `${result[0].pepegasmash}` })
      .setColor("Random")
      .setImage(`${result[3].pepegasmash}`);
    let syard = new EmbedBuilder()
      .setTitle("Schoolyard")
      .setDescription(`${result[2].schoolyard}`)
      .setFooter({ text: `${result[1].schoolyard}` })
      .addFields({ name: "Deck Cost", value: `${result[0].schoolyard}` })
      .setColor("Random")
      .setImage(`${result[3].schoolyard}`);
    //Seacret
    let scret = new EmbedBuilder()
      .setTitle("Seacret")
      .setDescription(`${result[2].seacret}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].seacret}` })
      .addFields({ name: "Deck Cost", value: `${result[0].seacret}` })
      .setImage(`${result[3].seacret}`);
    //Scimmort
    let scitempo = new EmbedBuilder()
      .setTitle("Scimmort")
      .setDescription(`${result[2].scimmort}`)
      .setFooter({ text: `${result[1].scimmort}` })
      .addFields({ name: "Deck Cost", value: `${result[0].scimmort}` })
      .setColor("Random")
      .setImage(`	${result[3].scimmort}`);
    let shamcon = new EmbedBuilder()
      .setTitle("Sham Control Beta Carrotina")
      .setDescription(`${result[2].shamcontrol}`)
      .setFooter({ text: `${result[1].shamcontrol}` })
      .addFields({ name: "Deck Cost", value: `${result[0].shamcontrol}` })
      .setColor("Random")
      .setImage(`${result[3].shamcontrol}`);
    let soul = new EmbedBuilder()
      .setTitle("Solstice")
      .setDescription(`${result[2].solstice}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].solstice}` })
      .setImage(`${result[3].solstice}`)
      .addFields({ name: "Deck Cost", value: `${result[0].solstice}` });
    let star = new EmbedBuilder()
      .setTitle("Spacestars")
      .setDescription(`${result[2].spacestars}`)
      .setFooter({ text: `${result[1].spacestars}` })
      .addFields({ name: "Deck Cost", value: `${result[0].spacestars}` })
      .setColor("Random")
      .setImage(`${result[3].spacestars}`);
    let sticia = new EmbedBuilder()
      .setTitle("Stacheticia")
      .setDescription(`${result[2].stacheticia}`)
      .setColor("Random")
      .addFields({ name: "Deck Cost", value: `${result[0].stacheticia}` })
      .setFooter({ text: `${result[1].stacheticia}` })
      .setImage(`${result[3].stacheticia}`);
    let tron = new EmbedBuilder()
      .setTitle("Startron")
      .setDescription(`${result[2].startron}`)
      .setFooter({ text: `${result[1].startron}` })
      .addFields({ name: "Deck Cost", value: `${result[0].startron}` })
      .setImage(`${result[3].startron}`)
      .setColor("Random");
    let tster = new EmbedBuilder()
      .setTitle("Throwster")
      .setDescription(`${result[2].throwster}`)
      .setFooter({ text: `${result[1].throwster}` })
      .addFields({ name: "Deck Cost", value: `${result[0].throwster}` })
      .setColor("Random")
      .setImage(`${result[3].throwster}`);
    let toast = new EmbedBuilder()
      .setTitle("Toaster")
      .setDescription(`${result[2].toaster}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].toaster}` })
      .addFields({ name: "Deck Cost", value: `${result[0].toaster}` })
      .setImage(`${result[3].toaster}`);
    let yuletide = new EmbedBuilder()
      .setTitle("Yuletide")
      .setDescription(`${result[2].yuletide}`)
      .setFooter({ text: `${result[1].yuletide}` })
      .addFields({ name: "Deck Cost", value: `${result[0].yuletide}` })
      .setColor("Random")
      .setImage(`${result[3].yuletide}`);
    const m = await message.channel.send({ embeds: [salt], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "i3") {
        await i.update({ embeds: [int3], components: [i3] });
      }
      if (i.customId == "helps") {
        await i.update({ embeds: [salt], components: [row] });
      }
      if (i.customId == "int3") {
        await i.update({ embeds: [int3], components: [i3] });
      }
      if (i.customId == "cb") {
        await i.update({ embeds: [cbase], components: [cb] });
      }
      //Bartin
      if (i.customId == "bart") {
        await i.update({ embeds: [bart], components: [bar] });
      }
      if (i.customId == "bartin") {
        await i.update({ embeds: [bart], components: [bar] });
      }
      if (i.customId == "cy") {
        await i.update({ embeds: [cburn], components: [cy] });
      }
      //CCP Aggro
      if (i.customId == "ccpa") {
        await i.update({ embeds: [cpaggro], components: [ccpa] });
      }
      if (i.customId == "ccpaggro") {
        await i.update({ embeds: [cpaggro], components: [ccpa] });
      }
      if (i.customId == "chemo") {
        await i.update({ embeds: [chemotherapy], components: [chemo] });
      }
      if (i.customId == "chemotherapy") {
        await i.update({ embeds: [chemotherapy], components: [chemo] });
      }
      if (i.customId == "cbase") {
        await i.update({ embeds: [cbase], components: [cb] });
      }
      if (i.customId == "cburn") {
        await i.update({ embeds: [cburn], components: [cy] });
      }
      //Scimmort
      if (i.customId == "sci") {
        await i.update({ embeds: [scitempo], components: [sci] });
      }
      if (i.customId == "scimmort") {
        await i.update({ embeds: [scitempo], components: [sci] });
      }
      if (i.customId == "fk") {
        await i.update({ embeds: [fknight], components: [fk] });
      }
      if (i.customId == "btoss") {
        await i.update({ embeds: [blomb], components: [btoss] });
      }
      if (i.customId == "ft") {
        await i.update({ embeds: [ftor], components: [ft] });
      }
      if (i.customId == "ftor") {
        await i.update({ embeds: [ftor], components: [ft] });
      }
      if (i.customId == "blomb") {
        await i.update({ embeds: [blomb], components: [btoss] });
      }
      if (i.customId == "fknight") {
        await i.update({ embeds: [fknight], components: [fk] });
      }
      if (i.customId == "bust") {
        await i.update({ embeds: [bustbolt], components: [bust] });
      }
      if (i.customId == "bustbolt") {
        await i.update({ embeds: [bustbolt], components: [bust] });
      }
      if (i.customId == "g") {
        await i.update({ embeds: [glag], components: [g] });
      }
      if (i.customId == "gst") {
        await i.update({ embeds: [gstache], components: [gst] });
      }
      if (i.customId == "glag") {
        await i.update({ embeds: [glag], components: [g] });
      }
      if (i.customId == "hmf") {
        await i.update({ embeds: [hmflare], components: [hmf] });
      }
      if (i.customId == "bykm") {
        await i.update({ embeds: [ykmb], components: [bykm] });
      }
      if (i.customId == "ykmb") {
        await i.update({ embeds: [ykmb], components: [bykm] });
      }
      if (i.customId == "gstache") {
        await i.update({ embeds: [gstache], components: [gst] });
      }
      if (i.customId == "hmk") {
        await i.update({ embeds: [hmknight], components: [hmk] });
      }
      if (i.customId == "hmflare") {
        await i.update({ embeds: [hmflare], components: [hmf] });
      }
      if (i.customId == "hmz") {
        await i.update({ embeds: [hmzilla], components: [hmz] });
      }
      if (i.customId == "hmknight") {
        await i.update({ embeds: [hmknight], components: [hmk] });
      }
      if (i.customId == "ap") {
        await i.update({ embeds: [apotk], components: [ap] });
      }
      if (i.customId == "apotk") {
        await i.update({ embeds: [apotk], components: [ap] });
      }
      if (i.customId == "jb") {
        await i.update({ embeds: [jbeans], components: [jb] });
      }
      if (i.customId == "hmzilla") {
        await i.update({ embeds: [hmzilla], components: [hmz] });
      }
      if (i.customId == "ni") {
        await i.update({ embeds: [niv], components: [ni] });
      }
      if (i.customId == "jbeans") {
        await i.update({ embeds: [jbeans], components: [jb] });
      }
      if (i.customId == "sy") {
        await i.update({ embeds: [syard], components: [sy] });
      }
      if (i.customId == "sc") {
        await i.update({ embeds: [scret], components: [sc] });
      }
      if (i.customId == "scret") {
        await i.update({ embeds: [scret], components: [sc] });
      }
      if (i.customId == "niv") {
        await i.update({ embeds: [niv], components: [ni] });
      }
      if (i.customId == "otk") {
        await i.update({ embeds: [otkt], components: [otk] });
      }
      if (i.customId == "ps") {
        await i.update({ embeds: [psmash], components: [ps] });
      }
      if (i.customId == "otkt") {
        await i.update({ embeds: [otkt], components: [otk] });
      }
      if (i.customId == "psmash") {
        await i.update({ embeds: [psmash], components: [ps] });
      }
      if (i.customId == "sol") {
        await i.update({ embeds: [soul], components: [sol] });
      }
      if (i.customId == "syard") {
        await i.update({ embeds: [syard], components: [sy] });
      }
      if (i.customId == "ss") {
        await i.update({ embeds: [star], components: [ss] });
      }
      if (i.customId == "soul") {
        await i.update({ embeds: [soul], components: [sol] });
      }
      if (i.customId == "sham") {
        await i.update({ embeds: [shamcon], components: [sham] });
      }
      if (i.customId == "st") {
        await i.update({ embeds: [sticia], components: [st] });
      }
      if (i.customId == "shamcon") {
        await i.update({ embeds: [shamcon], components: [sham] });
      }
      if (i.customId == "star") {
        await i.update({ embeds: [star], components: [ss] });
      }
      if (i.customId == "start") {
        await i.update({ embeds: [tron], components: [start] });
      }
      if (i.customId == "sticia") {
        await i.update({ embeds: [sticia], components: [st] });
      }
      if (i.customId == "ts") {
        await i.update({ embeds: [tster], components: [ts] });
      }
      if (i.customId == "tron") {
        await i.update({ embeds: [tron], components: [start] });
      }
      if (i.customId == "tstache") {
        await i.update({ embeds: [tster], components: [ts] });
      }
      if (i.customId == "toa") {
        await i.update({ embeds: [toast], components: [toa] });
      }
      if (i.customId == "toast") {
        await i.update({ embeds: [toast], components: [toa] });
      }
      if (i.customId == "yule") {
        await i.update({ embeds: [yuletide], components: [yule] });
      }
      if (i.customId == "yuletide") {
        await i.update({ embeds: [yuletide], components: [yule] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [salt], components: [row] });
      }
    });
  },
};

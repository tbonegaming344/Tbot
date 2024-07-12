const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `sushi`,
  aliases: [
    `decksmadebysushi`,
    `sushihelp`,
    `helpsushi`,
    `sushidecks`,
    `sushidecklists`,
    `decklistsmadebysushi`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("vmid")
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
        .setCustomId("sa")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const sa = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("apir")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bp")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bp = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("saggro")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bart")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bart = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bpir")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bemp")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bemp = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bartin")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("b22")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const b22 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bempo")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bpack")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bpack = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bin22")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cr")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const cr = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("burnp")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cb")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const cb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("crings")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ct")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ct = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cboss")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("el")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const el = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ctempo")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("fk")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const fk = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("elu")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("gb")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const gb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("fknight")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("gt")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const gt = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gburn")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hm")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const hm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gtempo")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("kt")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const kt = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("hmr")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("midr")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );

    //Midrose
    const midr = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ktempo")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mc")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const mc = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("midrose")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("om")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const om = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("mcon")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pack")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const pack = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("omid")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pp")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const pp = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("packster")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pr")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const pr = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ppack")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pb")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const pb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("prem")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("r3")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const r3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pburn")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("rc")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const rc = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("r3d")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("rm")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const rm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("rclones")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("rz")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const rz = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("rmid")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sc")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const sc = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("rzilla")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("st")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const st = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("scuc")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("scit")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const scit = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("stempo")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("spl")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    //Splimps
    const spl = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("scitempo")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sbandits")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const sb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("splimps")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sag")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const sag = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("sband")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("tele")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const tele = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("sush")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("imps")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const imps = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("teleburn")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("impsb")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const impsb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("timps")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ta")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ta = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("timpsb")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("tm")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const tm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("taggro")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("tri")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const tri = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("tmech")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("vm")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const vm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("trimps")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = [
      "3mid",
      "aggropirates",
      "aggroscience",
      "barrelpirates",
      "bartin",
      "bempo",
      "binary22",
      "burnpackage",
      "coffeerings",
      "comboss",
      "cruisertempo",
      "elusives",
      "funnyknight",
      "gargburn",
      "gatlingtempo",
      "healmidrose",
      "kingtempo",
      "midrose",
      "missioncontrol",
      "oldmidrose",
      "packagester",
      "professorpackage",
      "playerremoval",
      "pureburn",
      "r3d",
      "rampclones",
      "rampmidrose",
      "ringzilla",
      "savagecucumber",
      "savagetempo",
      "scimmort",
      "splimps",
      "sunbandits",
      "sushiaggro",
      "teleburn",
      "telimps",
      "telimpssb",
      "tokenaggro",
      "trickmech",
      "trimps",
      "violetmid",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let [result] =
      await db.query(`select mid3, aggropirates, aggroscience, barrelpirates,
bartin, bempo, binary22, burnpackage, coffeerings, comboss, cruisertempo,
elusives, funnyknight, gargburn, gatlingtempo, hmr, kingtempo, midrose, 
missioncontrol, oldmidrose, packagester, professorpackage, playerremoval, 
pureburn, r3d, rampclones, rampmidrose, ringzilla, savagecucumber, savagetempo,
scimmort, splimps, sunbandits, sushiaggro, teleburn, telimps, telimpssb, 
tokenaggro, trickmech, trimps, violetmid
from wkdecks wk inner join bfdecks bf
on (wk.deckinfo = bf.deckinfo)
inner join pbdecks pb 
on (wk.deckinfo = pb.deckinfo)
inner join spdecks sp
on (wk.deckinfo = sp.deckinfo)
inner join imdecks im 
on (wk.deckinfo = im.deckinfo)
inner join hgdecks hg
on (wk.deckinfo = hg.deckinfo)
inner join rbdecks rb 
on (wk.deckinfo = rb.deckinfo)
inner join ccdecks cc
on (wk.deckinfo = cc.deckinfo)
inner join ncdecks nc
on (wk.deckinfo = nc.deckinfo)
inner join ntdecks nt
on (wk.deckinfo = nt.deckinfo)
inner join gsdecks gs 
on (wk.deckinfo = gs.deckinfo)
inner join smdecks sm 
on (wk.deckinfo = sm.deckinfo)
inner join ebdecks eb 
on (wk.deckinfo = eb.deckinfo)
inner join ifdecks fi
on (wk.deckinfo = fi.deckinfo)
inner join ctdecks ct 
on (wk.deckinfo = ct.deckinfo)
inner join sfdecks sf
on (wk.deckinfo = sf.deckinfo)
inner join gkdecks gk 
on (wk.deckinfo = gk.deckinfo)
inner join zmdecks zm
on (wk.deckinfo = zm.deckinfo)
inner join rodecks ro 
on (wk.deckinfo = ro.deckinfo)
inner join czdecks cz 
on (wk.deckinfo = cz.deckinfo)
inner join sbdecks sb
on (wk.deckinfo = sb.deckinfo)`);
    let user = await client.users.fetch("198942472565555200");
    let sushi = new EmbedBuilder()
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
      .setTitle("3-Mid")
      .setDescription(`${result[2].mid3}`)
      .setFooter({ text: `${result[1].mid3}` })
      .addFields({ name: "Deck Cost", value: `${result[0].mid3}` })
      .setColor("Random")
      .setImage(`${result[3].mid3}`);
    let apir = new EmbedBuilder()
      .setTitle("Aggro Pirates")
      .setDescription(`${result[2].aggropirates}`)
      .setFooter({ text: `${result[1].aggropirates}` })
      .addFields({ name: "Deck Cost", value: `${result[0].aggropirates}` })
      .setColor("Random")
      .setImage(`${result[3].aggropirates}`);
    let bpir = new EmbedBuilder()
      .setTitle("2.1")
      .setDescription(`${result[2].barrelpirates}`)
      .setFooter({ text: `${result[1].barrelpirates}` })
      .addFields({ name: "Deck Cost", value: `${result[0].barrelpirates}` })
      .setColor("Random")
      .setImage(`${result[3].barrelpirates}`);
    let bartin = new EmbedBuilder()
      .setTitle("Burst Martin")
      .setDescription(`${result[2].bartin}`)
      .setFooter({ text: `${result[1].bartin}` })
      .addFields({ name: "Deck Cost", value: `${result[0].bartin}` })
      .setColor("Random")
      .setImage(`${result[3].bartin}`);
    let bempo = new EmbedBuilder()
      .setTitle("Bempo")
      .setDescription(`${result[2].bempo}`)
      .setFooter({ text: `${result[1].bempo}` })
      .addFields({ name: "Deck Cost", value: `${result[0].bempo}` })
      .setColor("Random")
      .setImage(`${result[3].bempo}`);
    let bin22 = new EmbedBuilder()
      .setTitle("Binary 22")
      .setDescription(`${result[2].binary22}`)
      .setFooter({ text: `${result[1].binary22}` })
      .setColor("Random")
      .addFields({ name: "Deck Cost", value: `${result[0].binary22}` })
      .setImage(`${result[3].binary22}`);
    let burnp = new EmbedBuilder()
      .setTitle("Burn Package")
      .setDescription(`${result[2].burnpackage}`)
      .setFooter({ text: `${result[1].burnpackage}` })
      .addFields({ name: "Deck Cost", value: `${result[0].burnpackage}` })
      .setColor("Random")
      .setImage(`${result[3].burnpackage}`);
    let crings = new EmbedBuilder()
      .setTitle("Coffee Rings")
      .setDescription(`${result[2].coffeerings}`)
      .setFooter({ text: `${result[1].coffeerings}` })
      .addFields({ name: "Deck Cost", value: `${result[0].coffeerings}` })
      .setColor("Random")
      .setImage(`${result[3].coffeerings}`);
    let cboss = new EmbedBuilder()
      .setTitle("Comboss")
      .setDescription(`${result[2].comboss}`)
      .setFooter({ text: `${result[1].comboss}` })
      .addFields({ name: "Deck Cost", value: `${result[0].comboss}` })
      .setColor("Random")
      .setImage(`${result[3].comboss}`);
    let ctempo = new EmbedBuilder()
      .setTitle("Cruiser Tempo")
      .setDescription(`${result[2].cruisertempo}`)
      .setFooter({ text: `${result[1].cruisertempo}` })
      .addFields({ name: "Deck Cost", value: `${result[0].cruisertempo}` })
      .setColor("Random")
      .setImage(`${result[3].cruisertempo}`);
    let elu = new EmbedBuilder()
      .setTitle("Elusives")
      .setDescription(`${result[2].elusives}`)
      .setFooter({ text: `${result[1].elusives}` })
      .addFields({ name: "Deck Cost", value: `${result[0].elusives}` })
      .setColor("Random")
      .setImage(`${result[3].elusives}`);
    let fknight = new EmbedBuilder()
      .setTitle("Funny Knight")
      .setDescription(`${result[2].funnyknight}`)
      .setFooter({ text: `${result[1].funnyknight}` })
      .addFields({ name: "Deck Cost", value: `${result[0].funnyknight}` })
      .setColor("Random")
      .setImage(`${result[3].funnyknight}`);
    let gburn = new EmbedBuilder()
      .setTitle("Garg Burn")
      .setDescription(`${result[2].gargburn}`)
      .setFooter({ text: `${result[1].gargburn}` })
      .addFields({ name: "Deck Cost", value: `${result[0].gargburn}` })
      .setColor("Random")
      .setImage(`${result[3].gargburn}`);
    let gtempo = new EmbedBuilder()
      .setTitle("Gatling Tempo")
      .setDescription(`${result[2].gatlingtempo}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].gatlingtempo}` })
      .addFields({ name: "Deck Cost", value: `${result[0].gatlingtempo}` })
      .setImage(`${result[3].gatlingtempo}`);
    let hmr = new EmbedBuilder()
      .setTitle("Heal Midrose")
      .setDescription(`${result[2].hmr}`)
      .setFooter({ text: `${result[1].hmr}` })
      .addFields({ name: "Deck Cost", value: `${result[0].hmr}` })
      .setColor("Random")
      .setImage(`${result[3].hmr}`);
    let ktempo = new EmbedBuilder()
      .setTitle("King Tempo")
      .setDescription(`${result[2].kingtempo}`)
      .setFooter({ text: `${result[1].kingtempo}` })
      .addFields({ name: "Deck Cost", value: `${result[0].kingtempo}` })
      .setColor("Random")
      .setImage(`${result[3].kingtempo}`);
    let mcon = new EmbedBuilder()
      .setTitle("Mission Control")
      .setDescription(`${result[2].missioncontrol}`)
      .setFooter({ text: `${result[1].missioncontrol}` })
      .addFields({ name: "Deck Cost", value: `${result[0].missioncontrol}` })
      .setColor("Random")
      .setImage(`${result[3].missioncontrol}`);
    let omid = new EmbedBuilder()
      .setTitle("Old Midrose")
      .setDescription(`${result[2].oldmidrose}`)
      .setFooter({ text: `${result[1].oldmidrose}` })
      .addFields({ name: "Deck Cost", value: `${result[0].oldmidrose}` })
      .setColor("Random")
      .setImage(`${result[3].oldmidrose}`);
    let ast = new EmbedBuilder()
      .setTitle("Packagester")
      .setDescription(`${result[2].packagester}`)
      .setFooter({ text: `${result[1].packagester}` })
      .addFields({ name: "Deck Cost", value: `${result[0].packagester}` })
      .setColor("Random")
      .setImage(`${result[3].packagester}`);
    let ppack = new EmbedBuilder()
      .setTitle("Professor Package")
      .setDescription(`${result[2].professorpackage}`)
      .setFooter({ text: `${result[1].professorpackage}` })
      .setColor("Random")
      .setImage(`${result[3].professorpackage}`)
      .addFields({ name: "Deck Cost", value: `${result[0].professorpackage}` });
    let prem = new EmbedBuilder()
      .setTitle("Player Removal")
      .setDescription(`${result[2].playerremoval}`)
      .addFields({ name: "Deck Cost", value: `${result[0].playerremoval}` })
      .setFooter({ text: `${result[1].playerremoval}` })
      .setColor("Random")
      .setImage(`${result[3].playerremoval}`);
    let pburn = new EmbedBuilder()
      .setTitle("Pure Burn")
      .setDescription(`${result[2].pureburn}`)
      .setFooter({ text: `${result[1].pureburn}` })
      .addFields({ name: "Deck Cost", value: `${result[0].pureburn}` })
      .setColor("Random")
      .setImage(`${result[3].pureburn}`);
    let r3d = new EmbedBuilder()
      .setTitle("R3d")
      .setDescription(`${result[2].r3d}`)
      .setFooter({ text: `${result[1].r3d}` })
      .addFields({ name: "Deck Cost", value: `${result[0].r3d}` })
      .setColor("Random")
      .setImage(`${result[3].r3d}`);
    let rclones = new EmbedBuilder()
      .setTitle("Rampclones")
      .setDescription(`${result[2].rampclones}`)
      .setFooter({ text: `${result[1].rampclones}` })
      .setColor("Random")
      .setImage(`${result[3].rampclones}`)
      .addFields({ name: "Deck Cost", value: `${result[0].rampclones}` });
    let rmid = new EmbedBuilder()
      .setTitle("Ramp Midrose")
      .setDescription(`${result[2].rampmidrose}`)
      .setFooter({ text: `${result[1].rampmidrose}` })
      .setColor("Random")
      .addFields({ name: "Deck Cost", value: `${result[0].rampmidrose}` })
      .setImage(`${result[3].rampmidrose}`);
    let rzilla = new EmbedBuilder()
      .setTitle("Ringzilla")
      .setDescription(`${result[2].ringzilla}`)
      .setFooter({ text: `${result[1].ringzilla}` })
      .addFields({ name: "Deck Cost", value: `${result[0].ringzilla}` })
      .setColor("Random")
      .setImage(`${result[3].ringzilla}`);
    let scuc = new EmbedBuilder()
      .setTitle("Savage Cucumber")
      .setDescription(`${result[2].savagecucumber}`)
      .setFooter({ text: `${result[1].savagecucumber}` })
      .addFields({ name: "Deck Cost", value: `${result[0].savagecucumber}` })
      .setColor("Random")
      .setImage(`${result[3].savagecucumber}`);
    let stempo = new EmbedBuilder()
      .setTitle("Savage Tempo")
      .setDescription(`${result[2].savagetempo}`)
      .setFooter({ text: `${result[1].savagetempo}` })
      .addFields({ name: "Deck Cost", value: `${result[0].savagetempo}` })
      .setColor("Random")
      .setImage(`${result[3].savagetempo}`);
    let saggro = new EmbedBuilder()
      .setTitle("Aggro Science")
      .setDescription(`${result[2].aggroscience}`)
      .setFooter({ text: `${result[1].aggroscience}` })
      .addFields({ name: "Deck Cost", value: `${result[0].aggroscience}` })
      .setColor("Random")
      .setImage(`${result[3].aggroscience}`);
    let scitempo = new EmbedBuilder()
      .setTitle("Scimmort")
      .setDescription(`${result[2].scimmort}`)
      .setFooter({ text: `${result[1].scimmort}` })
      .addFields({ name: "Deck Cost", value: `${result[0].scimmort}` })
      .setColor("Random")
      .setImage(`	${result[3].scimmort}`);
    let splimps = new EmbedBuilder()
      .setTitle("Splimps")
      .setDescription(`${result[2].splimps}`)
      .setFooter({ text: `${result[1].splimps}` })
      .addFields({ name: "Deck Cost", value: `${result[0].splimps}` })
      .setColor("Random")
      .setImage(`${result[3].splimps}`);
    let sush = new EmbedBuilder()
      .setTitle("Sushi Aggro")
      .setDescription(`${result[2].sushiaggro}`)
      .setFooter({ text: `${result[1].sushiaggro}` })
      .addFields({ name: "Deck Cost", value: `${result[0].sushiaggro}` })
      .setImage(`${result[3].sushiaggro}`)
      .setColor("Random");
    let sband = new EmbedBuilder()
      .setTitle("Sun Bandits")
      .setDescription(`${result[2].sunbandits}`)
      .setFooter({ text: `${result[1].sunbandits}` })
      .addFields({ name: "Deck Cost", value: `${result[0].sunbandits}` })
      .setColor("Random")
      .setImage(`${result[3].sunbandits}`);
    let timps = new EmbedBuilder()
      .setTitle("Telimps")
      .setDescription(`${result[2].telimps}`)
      .setFooter({ text: `${result[1].telimps}` })
      .addFields({ name: "Deck Cost", value: `${result[0].telimps}` })
      .setColor("Random")
      .setImage(`${result[3].telimps}`);
    let teleburn = new EmbedBuilder()
      .setTitle("TeleBurn")
      .setDescription(`${result[2].teleburn}`)
      .setFooter({ text: `${result[1].teleburn}` })
      .addFields({ name: "Deck Cost", value: `${result[0].teleburn}` })
      .setColor("Random")
      .setImage(`${result[3].teleburn}`);
    let timpsb = new EmbedBuilder()
      .setTitle("Teleimps")
      .setDescription(`${result[2].telimpssb}`)
      .setFooter({ text: `	${result[1].telimpssb}` })
      .addFields({ name: "Deck Cost", value: `${result[0].telimpssb}` })
      .setColor("Random")
      .setImage(`${result[3].telimpssb}`);
    let taggro = new EmbedBuilder()
      .setTitle("Token Aggro")
      .setDescription(`${result[2].tokenaggro}`)
      .setFooter({ text: `${result[1].tokenaggro}` })
      .addFields({ name: "Deck Cost", value: `${result[0].tokenaggro}` })
      .setImage(`${result[3].tokenaggro}`)
      .setColor("Random");
    let midrose = new EmbedBuilder()
      .setTitle("Mid Rose")
      .setDescription(`${result[2].midrose}`)
      .setFooter({ text: `${result[1].midrose}` })
      .addFields({ name: "Deck Cost", value: `${result[0].midrose}` })
      .setColor("Random")
      .setImage(`${result[3].midrose}`);
    let tmech = new EmbedBuilder()
      .setTitle("Trick Mech")
      .setDescription(`${result[2].trickmech}`)
      .setFooter({ text: `${result[1].trickmech}` })
      .addFields({ name: "Deck Cost", value: `${result[0].trickmech}` })
      .setColor("Random")
      .setImage(`${result[3].trickmech}`);
    let trimps = new EmbedBuilder()
      .setTitle("Trimps")
      .setDescription(`${result[2].trimps}`)
      .setFooter({ text: `${result[1].trimps}` })
      .addFields({ name: "Deck Cost", value: `${result[0].trimps}` })
      .setColor("Random")
      .setImage(`${result[3].trimps}`);
    let vmid = new EmbedBuilder()
      .setTitle("Violet Mid")
      .setDescription(`${result[2].violetmid}`)
      .setFooter({ text: `${result[1].violetmid}` })
      .addFields({ name: "Deck Cost", value: `${result[0].violetmid}` })
      .setColor("Random")
      .setImage(`${result[3].violetmid}`);
    const m = await message.channel.send({
      embeds: [sushi],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "i3") {
        await i.update({ embeds: [int3], components: [i3] });
      }
      if (i.customId == "helps") {
        await i.update({ embeds: [sushi], components: [row] });
      }
      if (i.customId == "ap") {
        await i.update({ embeds: [apir], components: [ap] });
      }
      if (i.customId == "int3") {
        await i.update({ embeds: [int3], components: [i3] });
      }
      if (i.customId == "apir") {
        await i.update({ embeds: [apir], components: [ap] });
      }
      if (i.customId == "bp") {
        await i.update({ embeds: [bpir], components: [bp] });
      }
      if (i.customId == "bpir") {
        await i.update({ embeds: [bpir], components: [bp] });
      }
      if (i.customId == "bart") {
        await i.update({ embeds: [bartin], components: [bart] });
      }
      if (i.customId == "bemp") {
        await i.update({ embeds: [bempo], components: [bemp] });
      }
      if (i.customId == "bartin") {
        await i.update({ embeds: [bartin], components: [bart] });
      }
      if (i.customId == "b22") {
        await i.update({ embeds: [bin22], components: [b22] });
      }
      if (i.customId == "bempo") {
        await i.update({ embeds: [bempo], components: [bemp] });
      }
      if (i.customId == "bin22") {
        await i.update({ embeds: [bin22], components: [b22] });
      }
      if (i.customId == "bpack") {
        await i.update({ embeds: [burnp], components: [bpack] });
      }
      if (i.customId == "cr") {
        await i.update({ embeds: [crings], components: [cr] });
      }
      if (i.customId == "burnp") {
        await i.update({ embeds: [burnp], components: [bpack] });
      }
      if (i.customId == "cb") {
        await i.update({ embeds: [cboss], components: [cb] });
      }
      if (i.customId == "crings") {
        await i.update({ embeds: [crings], components: [cr] });
      }
      if (i.customId == "ct") {
        await i.update({ embeds: [ctempo], components: [ct] });
      }
      if (i.customId == "cboss") {
        await i.update({ embeds: [cboss], components: [cb] });
      }
      if (i.customId == "el") {
        await i.update({ embeds: [elu], components: [el] });
      }
      if (i.customId == "ctempo") {
        await i.update({ embeds: [ctempo], components: [ct] });
      }
      if (i.customId == "elu") {
        await i.update({ embeds: [elu], components: [el] });
      }
      if (i.customId == "fk") {
        await i.update({ embeds: [fknight], components: [fk] });
      }
      if (i.customId == "gb") {
        await i.update({ embeds: [gburn], components: [gb] });
      }
      if (i.customId == "fknight") {
        await i.update({ embeds: [fknight], components: [fk] });
      }
      if (i.customId == "gt") {
        await i.update({ embeds: [gtempo], components: [gt] });
      }
      if (i.customId == "gburn") {
        await i.update({ embeds: [gburn], components: [gb] });
      }
      if (i.customId == "hm") {
        await i.update({ embeds: [hmr], components: [hm] });
      }
      if (i.customId == "gtempo") {
        await i.update({ embeds: [gtempo], components: [gt] });
      }
      if (i.customId == "hmr") {
        await i.update({ embeds: [hmr], components: [hm] });
      }
      if (i.customId == "tele") {
        await i.update({ embeds: [teleburn], components: [tele] });
      }
      if (i.customId == "teleburn") {
        await i.update({ embeds: [teleburn], components: [tele] });
      }
      if (i.customId == "kt") {
        await i.update({ embeds: [ktempo], components: [kt] });
      }
      if (i.customId == "mc") {
        await i.update({ embeds: [mcon], components: [mc] });
      }
      if (i.customId == "ktempo") {
        await i.update({ embeds: [ktempo], components: [kt] });
      }
      if (i.customId == "om") {
        await i.update({ embeds: [omid], components: [om] });
      }
      if (i.customId == "mcon") {
        await i.update({ embeds: [mcon], components: [mc] });
      }
      if (i.customId == "pp") {
        await i.update({ embeds: [ppack], components: [pp] });
      }
      if (i.customId == "omid") {
        await i.update({ embeds: [omid], components: [om] });
      }
      if (i.customId == "pr") {
        await i.update({ embeds: [prem], components: [pr] });
      }
      if (i.customId == "ppack") {
        await i.update({ embeds: [ppack], components: [pp] });
      }
      if (i.customId == "pb") {
        await i.update({ embeds: [pburn], components: [pb] });
      }
      if (i.customId == "prem") {
        await i.update({ embeds: [prem], components: [pr] });
      }
      if (i.customId == "r3") {
        await i.update({ embeds: [r3d], components: [r3] });
      }
      if (i.customId == "pburn") {
        await i.update({ embeds: [pburn], components: [pb] });
      }
      if (i.customId == "rc") {
        await i.update({ embeds: [rclones], components: [rc] });
      }
      if (i.customId == "r3d") {
        await i.update({ embeds: [r3d], components: [r3] });
      }
      if (i.customId == "rm") {
        await i.update({ embeds: [rmid], components: [rm] });
      }
      if (i.customId == "rclones") {
        await i.update({ embeds: [rclones], components: [rc] });
      }
      if (i.customId == "rz") {
        await i.update({ embeds: [rzilla], components: [rz] });
      }
      if (i.customId == "rmid") {
        await i.update({ embeds: [rmid], components: [rm] });
      }
      if (i.customId == "sc") {
        await i.update({ embeds: [scuc], components: [sc] });
      }
      if (i.customId == "rzilla") {
        await i.update({ embeds: [rzilla], components: [rz] });
      }
      if (i.customId == "st") {
        await i.update({ embeds: [stempo], components: [st] });
      }
      if (i.customId == "sa") {
        await i.update({ embeds: [saggro], components: [sa] });
      }
      if (i.customId == "sbandits") {
        await i.update({ embeds: [sband], components: [sb] });
      }
      if (i.customId == "sband") {
        await i.update({ embeds: [sband], components: [sb] });
      }
      if (i.customId == "scuc") {
        await i.update({ embeds: [scuc], components: [sc] });
      }
      if (i.customId == "stempo") {
        await i.update({ embeds: [stempo], components: [st] });
      }
      if (i.customId == "scit") {
        await i.update({ embeds: [scitempo], components: [scit] });
      }
      if (i.customId == "saggro") {
        await i.update({ embeds: [saggro], components: [sa] });
      }
      if (i.customId == "pack") {
        await i.update({ embeds: [ast], components: [pack] });
      }
      if (i.customId == "packster") {
        await i.update({ embeds: [ast], components: [pack] });
      }
      if (i.customId == "scitempo") {
        await i.update({ embeds: [scitempo], components: [scit] });
      }
      //Slimps
      if (i.customId == "spl") {
        await i.update({ embeds: [splimps], components: [spl] });
      }
      if (i.customId == "splimps") {
        await i.update({ embeds: [splimps], components: [spl] });
      }
      if (i.customId == "sag") {
        await i.update({ embeds: [sush], components: [sag] });
      }
      if (i.customId == "sush") {
        await i.update({ embeds: [sush], components: [sag] });
      }
      if (i.customId == "imps") {
        await i.update({ embeds: [timps], components: [imps] });
      }
      if (i.customId == "impsb") {
        await i.update({ embeds: [timpsb], components: [impsb] });
      }
      if (i.customId == "timps") {
        await i.update({ embeds: [timps], components: [imps] });
      }
      if (i.customId == "midr") {
        await i.update({ embeds: [midrose], components: [midr] });
      }
      if (i.customId == "midrose") {
        await i.update({ embeds: [midrose], components: [midr] });
      }
      if (i.customId == "ta") {
        await i.update({ embeds: [taggro], components: [ta] });
      }
      if (i.customId == "timpsb") {
        await i.update({ embeds: [timpsb], components: [impsb] });
      }
      if (i.customId == "tm") {
        await i.update({ embeds: [tmech], components: [tm] });
      }
      if (i.customId == "taggro") {
        await i.update({ embeds: [taggro], components: [ta] });
      }
      if (i.customId == "tri") {
        await i.update({ embeds: [trimps], components: [tri] });
      }
      if (i.customId == "tmech") {
        await i.update({ embeds: [tmech], components: [tm] });
      }
      if (i.customId == "vm") {
        await i.update({ embeds: [vmid], components: [vm] });
      }
      if (i.customId == "trimps") {
        await i.update({ embeds: [trimps], components: [tri] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [sushi], components: [row] });
      }
      if (i.customId == "vmid") {
        await i.update({ embeds: [vmid], components: [vm] });
      }
    });
  },
};

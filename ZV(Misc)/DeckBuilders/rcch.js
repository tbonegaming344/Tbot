const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `rcch`,
  aliases: [
    `decksmadebyrcch`,
    `rcchhelp`,
    `rcchdecks`,
    `helprcch`,
    `rrchdecklists`,
    `decklistsmadebyrcch`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("rmole")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("i3")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const i3 = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpr")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("br")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const br = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("int3")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bb")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("broots")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bemp")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bemp = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bbeans")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cr")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const cr = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bempo")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("dk")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const dk = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("crates")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("fk")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const fk = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("dknuckles")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("el")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const el = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("fknight")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hm")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const hm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("elu")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("lo")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    //Lockout
    const lo = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("hmr")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("otk")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    //Otk Trickster
    const otk = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("lout")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ps")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    //Pepga Smash
    const ps = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("otkt")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("rm")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const rm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("psmash")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = [
      "3int",
      "bartinroots",
      "bbeans",
      "bempo",
      "conjurerates",
      "devinkuckles",
      "funnyknight",
      "elusives",
      "healmidrose",
      "lockout",
      "otktrickster",
      "pepegasmash",
      "reliablemolekale",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let [result] = await db.query(`select it3, bartinroots, bbeans, bempo, 
conjurates, devinknuckles, funnyknight, 
elusives, hmr, lockout, otktrickster, 
pepegasmash, reliablemolekale
from gkdecks gk inner join spdecks sp
on (gk.deckinfo = sp.deckinfo)
inner join gsdecks gs 
on (gk.deckinfo = gs.deckinfo)
inner join ccdecks cc
on (gk.deckinfo = cc.deckinfo)
inner join ifdecks fi 
on (gk.deckinfo = fi.deckinfo)
inner join wkdecks wk 
on (gk.deckinfo = wk.deckinfo)
inner join ctdecks ct
on (gk.deckinfo = ct.deckinfo)
inner join rodecks ro 
on (gk.deckinfo = ro.deckinfo)
inner join bfdecks bf
on (gk.deckinfo = bf.deckinfo)
inner join imdecks im
on (gk.deckinfo = im.deckinfo)
inner join smdecks sm 
on (gk.deckinfo = sm.deckinfo)`);
    let user = await client.users.fetch("371765420576866304");
    let rcch = new EmbedBuilder()
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
    let broots = new EmbedBuilder()
      .setTitle("Bartin Roots")
      .setDescription(`${result[2].bartinroots}`)
      .setFooter({ text: `${result[1].bartinroots}` })
      .addFields({ name: "Deck Cost", value: `${result[0].bartinroots}` })
      .setColor("Random")
      .setImage(`${result[3].bartinroots}`);
    let bbeans = new EmbedBuilder()
      .setTitle("BBeans")
      .setDescription(`${result[2].bbeans}`)
      .addFields({ name: "Deck Cost", value: `${result[0].bbeans}` })
      .setColor("Random")
      .setFooter({ text: `${result[1].bbeans}` })
      .setImage(`${result[3].bbeans}`);
    let bempo = new EmbedBuilder()
      .setTitle("Bempo")
      .setDescription(`${result[2].bempo}`)
      .setFooter({ text: `${result[1].bempo}` })
      .addFields({ name: "Deck Cost", value: `${result[0].bempo}` })
      .setColor("Random")
      .setImage(`${result[3].bempo}`);
    let crates = new EmbedBuilder()
      .setTitle("Conjurates")
      .setDescription(`${result[2].conjurates}`)
      .setFooter({ text: `${result[1].conjurates}` })
      .addFields({ name: "Deck Cost", value: `${result[0].conjurates}` })
      .setColor("Random")
      .setImage(`${result[3].conjurates}`);
    //Devin Knuckles
    let dknuckles = new EmbedBuilder()
      .setTitle("Devin Knuckles")
      .setDescription(`${result[2].devinknuckles}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].devinknuckles}` })
      .setImage(`${result[3].devinknuckles}`)
      .addFields({ name: "Deck Cost", value: `${result[0].devinknuckles}` });
    //Funny Knight
    let fknight = new EmbedBuilder()
      .setTitle("Funny Knight")
      .setDescription(`${result[2].funnyknight}`)
      .setFooter({ text: `${result[1].funnyknight}` })
      .addFields({ name: "Deck Cost", value: `${result[0].funnyknight}` })
      .setColor("Random")
      .setImage(`${result[3].funnyknight}`);
    //Elusives
    let elu = new EmbedBuilder()
      .setTitle("Elusives")
      .setDescription(`${result[2].elusives}`)
      .setFooter({ text: `${result[1].elusives}` })
      .addFields({ name: "Deck Cost", value: `${result[0].elusives}` })
      .setColor("Random")
      .setImage(`${result[3].elusives}`);
    //Heal Midrose
    let hmr = new EmbedBuilder()
      .setTitle("Heal Midrose")
      .setDescription(`${result[2].hmr}`)
      .setFooter({ text: `${result[1].hmr}` })
      .addFields({ name: "Deck Cost", value: `${result[0].hmr}` })
      .setColor("Random")
      .setImage(`${result[3].hmr}`);
    //Lockout
    let lout = new EmbedBuilder()
      .setTitle("Pirataout")
      .setDescription(`${result[2].lockout}`)
      .setFooter({ text: `${result[1].lockout}` })
      .addFields({ name: "Deck Cost", value: `${result[0].lockout}` })
      .setColor("Random")
      .setImage(`${result[3].lockout}`);
    //Otk Trickster
    let otkT = new EmbedBuilder()
      .setTitle("OTK Trickster")
      .setDescription(`${result[2].otktrickster}`)
      .setFooter({ text: `${result[1].otktrickster}` })
      .addFields({ name: "Deck Cost", value: `${result[0].otktrickster}` })
      .setColor("Random")
      .setImage(`${result[3].otktrickster}`);
    //Pepega Smash
    let psmash = new EmbedBuilder()
      .setTitle("Pepega Smash")
      .setDescription(`${result[2].pepegasmash}`)
      .setFooter({ text: `${result[1].pepegasmash}` })
      .addFields({ name: "Deck Cost", value: `${result[0].pepegasmash}` })
      .setColor("Random")
      .setImage(`${result[3].pepegasmash}`);
    let rmole = new EmbedBuilder()
      .setTitle("Reliable Molekale")
      .setDescription(`${result[2].reliablemolekale}`)
      .setFooter({ text: `${result[1].reliablemolekale}` })
      .addFields({ name: "Deck Cost", value: `${result[0].reliablemolekale}` })
      .setColor("Random")
      .setImage(`${result[3].reliablemolekale}`);
    const m = await message.channel.send({ embeds: [rcch], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      //3int
      if (i.customId == "i3") {
        await i.update({ embeds: [int3], components: [i3] });
      }
      if (i.customId == "int3") {
        await i.update({ embeds: [int3], components: [i3] });
      }
      //Bartin Roots
      if (i.customId == "br") {
        await i.update({ embeds: [broots], components: [br] });
      }
      if (i.customId == "broots") {
        await i.update({ embeds: [broots], components: [br] });
      }
      //BBeans
      if (i.customId == "bb") {
        await i.update({ embeds: [bbeans], components: [bb] });
      }
      if (i.customId == "bbeans") {
        await i.update({ embeds: [bbeans], components: [bb] });
      }
      if (i.customId == "cr") {
        await i.update({ embeds: [crates], components: [cr] });
      }
      //Devin Knuckles
      if (i.customId == "dk") {
        await i.update({ embeds: [dknuckles], components: [dk] });
      }
      if (i.customId == "dknuckles") {
        await i.update({ embeds: [dknuckles], components: [dk] });
      }
      if (i.customId == "crates") {
        await i.update({ embeds: [crates], components: [cr] });
      }
      //Bempo
      if (i.customId == "bemp") {
        await i.update({ embeds: [bempo], components: [bemp] });
      }
      if (i.customId == "bempo") {
        await i.update({ embeds: [bempo], components: [bemp] });
      }
      //Help
      if (i.customId == "helpr") {
        await i.update({ embeds: [rcch], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [rcch], components: [row] });
      }
      //Funny Knight
      if (i.customId == "fk") {
        await i.update({ embeds: [fknight], components: [fk] });
      }
      if (i.customId == "fknight") {
        await i.update({ embeds: [fknight], components: [fk] });
      }
      //Elusives
      if (i.customId == "el") {
        await i.update({ embeds: [elu], components: [el] });
      }
      if (i.customId == "elu") {
        await i.update({ embeds: [elu], components: [el] });
      }
      //HMR
      if (i.customId == "hm") {
        await i.update({ embeds: [hmr], components: [hm] });
      }
      if (i.customId == "hmr") {
        await i.update({ embeds: [hmr], components: [hm] });
      }
      //lockout
      if (i.customId == "lo") {
        await i.update({ embeds: [lout], components: [lo] });
      }
      if (i.customId == "lout") {
        await i.update({ embeds: [lout], components: [lo] });
      }
      //Otk Trickster
      if (i.customId == "otk") {
        await i.update({ embeds: [otkT], components: [otk] });
      }
      if (i.customId == "otkt") {
        await i.update({ embeds: [otkT], components: [otk] });
      }
      //Pepega Smash
      if (i.customId == "ps") {
        await i.update({ embeds: [psmash], components: [ps] });
      }
      if (i.customId == "psmash") {
        await i.update({ embeds: [psmash], components: [ps] });
      }
      //Reliable Molekale
      if (i.customId == "rm") {
        await i.update({ embeds: [rmole], components: [rm] });
      }
      if (i.customId == "rmole") {
        await i.update({ embeds: [rmole], components: [rm] });
      }
    });
  },
};

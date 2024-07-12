const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `dozza`,
  aliases: [`decksmadebydozza`, `helpdozza`, `dozzahelp`, `dozzadecks`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("tmech")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bun")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bun = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpd")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("c")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const c = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bunnary")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("dm")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const dm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cboss")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hl")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const hl = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("dmech")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("kl")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const kl = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("hland")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mr")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const mr = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("kleap")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pc")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const pc = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("mred")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("tm")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const tm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pcon")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = [
      "bunnary22",
      "comboss",
      "dozzamech",
      "highlander",
      "kingleap",
      "midred",
      "plankcontrol",
      "trickmech",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let [result] =
      await db.query(`select bunnary22, comboss, dozzamech, highlander, 
kingleap, lockout, midred, plankcontrol, trickmech 
from ebdecks eb 
inner join ccdecks cc
on (eb.deckinfo = cc.deckinfo) 
inner join zmdecks zm 
on (eb.deckinfo = zm.deckinfo)  
inner join wkdecks wk 
on (eb.deckinfo = wk.deckinfo) 
inner join rbdecks rb 
on (eb.deckinfo = rb.deckinfo)
inner join bfdecks bf
on (eb.deckinfo = bf.deckinfo)
inner join czdecks cz 
on (eb.deckinfo = cz.deckinfo) 
inner join ntdecks nt 
on (eb.deckinfo = nt.deckinfo)`);
    let dozza = new EmbedBuilder()
      .setTitle("Dozza Decks")
      .setDescription(
        `My commands for decks made by Dozza are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks Made By Dozza please use the commands listed above or click on the buttons below!
Note: Dozza has ${decks.length} total decks in Tbot`,
      })
      .setColor("Random");
    let bunnary = new EmbedBuilder()
      .setTitle("Bunnary 22")
      .setDescription(`${result[2].bunnary22}`)
      .setFooter({ text: `${result[1].bunnary22}` })
      .addFields({ name: "Deck Cost", value: `${result[0].bunnary22}` })
      .setColor("Random")
      .setImage(`${result[3].bunnary22}`);
    let cboss = new EmbedBuilder()
      .setTitle("Comboss")
      .setDescription(`${result[2].comboss}`)
      .setFooter({ text: `${result[1].comboss}` })
      .addFields({ name: "Deck Cost", value: `${result[0].comboss}` })
      .setColor("Random")
      .setImage(`${result[3].comboss}`);
    let dmech = new EmbedBuilder()
      .setTitle("Dozza Mech")
      .setDescription(`${result[2].dozzamech}`)
      .setFooter({ text: `${result[1].dozzamech}` })
      .addFields({ name: "Deck Cost", value: `${result[0].dozzamech}` })
      .setColor("Random")
      .setImage(`${result[3].dozzamech}`);
    let hland = new EmbedBuilder()
      .setTitle("WK Highlander")
      .setDescription(`${result[2].highlander}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].highlander}` })
      .addFields({ name: "Deck Cost", value: `${result[0].highlander}` })
      .setImage(`${result[3].highlander}`);
    let kleap = new EmbedBuilder()
      .setTitle("King Leap")
      .setDescription(`${result[2].kingleap}`)
      .setFooter({ text: `${result[1].kingleap}` })
      .addFields({ name: "Deck Cost", value: `${result[0].kingleap}` })
      .setColor("Random")
      .setImage(`	${result[3].kingleap}`);
    let mred = new EmbedBuilder()
      .setTitle("Mid Red")
      .setDescription(`${result[2].midred}`)
      .setFooter({ text: `${result[1].midred}` })
      .addFields({ name: "Deck Cost", value: `${result[0].midred}` })
      .setColor("Random")
      .setImage(`${result[3].midred}`);
    let pcon = new EmbedBuilder()
      .setTitle("Plank Control")
      .setDescription(`${result[2].plankcontrol}`)
      .setFooter({ text: `${result[1].plankcontrol}` })
      .addFields({ name: "Deck Cost", value: `${result[0].plankcontrol}` })
      .setColor("Random")
      .setImage(`${result[3].plankcontrol}`);
    let tmech = new EmbedBuilder()
      .setTitle("Trick Mech")
      .setDescription(`${result[2].trickmech}`)
      .setFooter({ text: `${result[1].trickmech}` })
      .addFields({ name: "Deck Cost", value: `${result[0].trickmech}` })
      .setColor("Random")
      .setImage(`${result[3].trickmech}`);
    const m = await message.channel.send({
      embeds: [dozza],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "helpd") {
        await i.update({ embeds: [dozza], components: [row] });
      }
      if (i.customId == "bun") {
        await i.update({ embeds: [bunnary], components: [bun] });
      }
      if (i.customId == "c") {
        await i.update({ embeds: [cboss], components: [c] });
      }
      if (i.customId == "bunnary") {
        await i.update({ embeds: [bunnary], components: [bun] });
      }
      if (i.customId == "dm") {
        await i.update({ embeds: [dmech], components: [dm] });
      }
      if (i.customId == "cboss") {
        await i.update({ embeds: [cboss], components: [c] });
      }
      if (i.customId == "el") {
        await i.update({ embeds: [elu], components: [el] });
      }
      if (i.customId == "dmech") {
        await i.update({ embeds: [dmech], components: [dm] });
      }
      if (i.customId == "kl") {
        await i.update({ embeds: [kleap], components: [kl] });
      }
      if (i.customId == "elu") {
        await i.update({ embeds: [elu], components: [el] });
      }
      if (i.customId == "lock") {
        await i.update({ embeds: [out], components: [lock] });
      }
      if (i.customId == "kleap") {
        await i.update({ embeds: [kleap], components: [kl] });
      }
      if (i.customId == "mr") {
        await i.update({ embeds: [mred], components: [mr] });
      }
      if (i.customId == "pc") {
        await i.update({ embeds: [pcon], components: [pc] });
      }
      if (i.customId == "out") {
        await i.update({ embeds: [out], components: [lock] });
      }
      if (i.customId == "mred") {
        await i.update({ embeds: [mred], components: [mr] });
      }
      if (i.customId == "tm") {
        await i.update({ embeds: [tmech], components: [tm] });
      }
      if (i.customId == "pcon") {
        await i.update({ embeds: [pcon], components: [pc] });
      }
      if (i.customId == "hl") {
        await i.update({ embeds: [hland], components: [hl] });
      }
      if (i.customId == "hland") {
        await i.update({ embeds: [hland], components: [hl] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [dozza], components: [row] });
      }
      if (i.customId == "tmech") {
        await i.update({ embeds: [tmech], components: [tm] });
      }
    });
  },
};

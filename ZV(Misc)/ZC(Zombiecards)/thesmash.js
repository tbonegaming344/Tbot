const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `thesmash`,
  aliases: [`smash`, `sm`, `ts`],
  category: `Zombie Cards`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpsm")
        .setLabel("SM Commands")
        .setStyle(ButtonStyle.Success)
        .setEmoji("<:The_SmashH:1088162519958425670>")
    );
    const test = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("wph")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("am")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const am = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpsm")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bob")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bob = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("amono")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bsm")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bsm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("b")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ct")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ct = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bs")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("f")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const f = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ctemp")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ho")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ho = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("fi")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hor")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const hor = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("smb")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("kt")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const kt = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("hs")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("mo")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const mo = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ktemp")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("o")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const o = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("mop")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("py")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const py = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("og")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ps")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ps = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pyeez")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ts")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ts = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pe")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("wp")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const wp = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("tsm")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let embed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/5/5c/Smash_Win_Render.png/revision/latest?cb=20161008025543"
      )
      .setTitle(
        "The Smash | <:Hearty:1062501636557242429><:Beastly:1062500894744264714>"
      )
      .setDescription("** - Gargantuar Hero -**")
      .addFields(
        {
          name: "Superpowers",
          value:
            "Heroic Health <:Hearty:1062501636557242429> \n Heal your Hero for 6. \n Possessed <:Hearty:1062501636557242429> \n A Zombie gets +2<:Health:1062515540712751184> and <:Frenzy:1062501819592491108>__Frenzy__. \n Galvanize <:Beastly:1062500894744264714> \n A Zombie gets +2<:Strength:1062501774612779039>/+2<:Health:1062515540712751184>. \n Slammin' Smackdown <:Hearty:1062501636557242429><:Beastly:1062500894744264714> \n Destroy a Plant with 4<:Strength:1062501774612779039> or less.  ",
        },
        {
          name: "Set-Rarity",
          value: "**Premium - Hero**",
        },
        {
          name: "Flavor Text",
          value: "The Smash enjoys...SMASHING!",
        }
      )
      .setColor("Random")
      ;
    let decks = [
      "agentm",
      "bobertsmash",
      "budgetsm",
      "cruisertempo",
      "fiora",
      "helpsm",
      "homophobia",
      "horts",
      "kingtempo",
      "mop",
      "oobltgargs",
      "pablosyeezys",
      "pepegasmash",
      "randomsm",
      "tricksmash",
      "whalepharaoh",
      "wheelsm",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let helpsm = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/plantsvszombies/images/5/5c/Smash_Win_Render.png/revision/latest?cb=20161008025543"
      )
      .setTitle("SM Commands")
      .setDescription(`My commands for Smash(SM) are ${toBuildString}`)
      .setFooter({
        text: `To view the Smash decks please use the commands listed above or click on the buttons below!
Note: Smash has ${decks.length - 3} total decks in Tbot`,
      })
      .setColor("Random");
    let [result] = await db.query(`SELECT * FROM smdecks`);
    let agentm = new EmbedBuilder()
      .setTitle("Agent M")
      .setDescription(`${result[2].agentm}`)
      .setFooter({ text: `${result[1].agentm}` })
      .addFields({ name: "Deck Cost:", value: `${result[0].agentm}` })
      .setColor("Random")
      .setImage(`${result[3].agentm}`);
    let b = new EmbedBuilder()
      .setTitle("B-Smash")
      .setDescription(`${result[2].bobertsmash}`)
      .setFooter({ text: `${result[1].bobertsmash}` })
      .addFields({ name: "Deck Cost", value: `${result[0].bobertsmash}` })
      .setColor("Random")
      .setImage(`${result[3].bobertsmash}`);
    let bs = new EmbedBuilder()
      .setTitle("Budget Swarm")
      .setDescription(`${result[2].budgetsm}`)
      .setFooter({ text: `${result[1].budgetsm}` })
      .addFields({ name: "Deck Cost", value: `${result[0].budgetsm}` })
      .setImage(`${result[3].budgetsm}`)
      .setColor("Random");
    let ctemp = new EmbedBuilder()
      .setTitle("Cruiser Tempo")
      .setDescription(`${result[2].cruisertempo}`)
      .setFooter({ text: `${result[1].cruisertempo}` })
      .addFields({ name: "Deck Cost", value: `${result[0].cruisertempo}` })
      .setColor("Random")
      .setImage(`${result[3].cruisertempo}`);
    let fi = new EmbedBuilder()
      .setTitle("Patheon Fiora")
      .setDescription(`${result[2].fiora}`)
      .setFooter({ text: `${result[1].fiora}` })
      .addFields({ name: "Deck Cost", value: `${result[0].fiora}` })
      .setColor("Random")
      .setImage(`${result[3].fiora}`);
    let smb = new EmbedBuilder()
      .setTitle("HOMOPHOBIA")
      .setDescription(`${result[2].homophobia}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].homophobia}` })
      .setImage(`${result[3].homophobia}`)
      .addFields({ name: "Deck Cost", value: `${result[0].homophobia}` });
    let hs = new EmbedBuilder()
      .setTitle("Horts")
      .setDescription(`${result[2].horts}`)
      .setFooter({ text: `${result[1].horts}` })
      .addFields({ name: "Deck Cost", value: `${result[0].horts}` })
      .setColor("Random")
      .setImage(`${result[3].horts}`);
    let ktemp = new EmbedBuilder()
      .setTitle("King Tempo")
      .setDescription(`${result[2].kingtempo}`)
      .setFooter({ text: `${result[1].kingtempo}` })
      .addFields({ name: "Deck Cost", value: `${result[0].kingtempo}` })
      .setColor("Random")
      .setImage(`${result[3].kingtempo}`);
    let mop = new EmbedBuilder()
      .setTitle("Mop")
      .setDescription(`${result[2].mop}`)
      .setFooter({ text: `${result[1].mop}` })
      .addFields({ name: "Deck Cost", value: `${result[0].mop}` })
      .setColor("Random")
      .setImage(`${result[3].mop}`);
    let og = new EmbedBuilder()
      .setTitle("Ooblt Midgargs")
      .setDescription(`${result[2].oobltgargs}`)
      .setFooter({ text: `${result[1].oobltgargs}` })
      .addFields({ name: "Deck Cost", value: `${result[0].oobltgargs}` })
      .setColor("Random")
      .setImage(`${result[3].oobltgargs}`);
    let pyeez = new EmbedBuilder()
      .setTitle("Pablos Yeezys")
      .setDescription(`${result[2].pablosyeezys}`)
      .setFooter({ text: `${result[1].pablosyeezys}` })
      .addFields({ name: "Deck Cost", value: `${result[0].pablosyeezys}` })
      .setColor("Random")
      .setImage(`${result[3].pablosyeezys}`);
    let pe = new EmbedBuilder()
      .setTitle("Pepega Smash")
      .setDescription(`${result[2].pepegasmash}`)
      .setFooter({ text: `${result[1].pepegasmash}` })
      .addFields({ name: "Deck Cost", value: `${result[0].pepegasmash}` })
      .setColor("Random")
      .setImage(`${result[3].pepegasmash}`);
    let tsm = new EmbedBuilder()
      .setTitle("Trick Smash")
      .setDescription(`${result[2].tricksmash}`)
      .setFooter({ text: `${result[1].tricksmash}` })
      .addFields({ name: "Deck Cost", value: `${result[0].tricksmash}` })
      .setColor("Random")
      .setImage(`${result[3].tricksmash}`);
    let wph = new EmbedBuilder()
      .setTitle("Whale Pharaoh")
      .setDescription(`${result[2].whalepharaoh}`)
      .setFooter({ text: `${result[1].whalepharaoh}` })
      .setColor("Random")
      .setImage(`${result[3].whalepharaoh}`)
      .addFields({ name: "Deck Cost", value: `${result[0].whalepharaoh}` });
    const m = await message.channel.send({
      embeds: [embed],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "helpsm") {
        await i.update({ embeds: [helpsm], components: [test] });
      }
      if (i.customId == "bob") {
        await i.update({ embeds: [b], components: [bob] });
      }
      if (i.customId == "am") {
        await i.update({ embeds: [agentm], components: [am] });
      }
      if (i.customId == "amono") {
        await i.update({ embeds: [agentm], components: [am] });
      }
      if (i.customId == "helpsms") {
        await i.update({ embeds: [helpsm], components: [test] });
      }
      if (i.customId == "b") {
        await i.update({ embeds: [b], components: [bob] });
      }
      if (i.customId == "bsm") {
        await i.update({ embeds: [bs], components: [bsm] });
      }
      if (i.customId == "ct") {
        await i.update({ embeds: [ctemp], components: [ct] });
      }
      if (i.customId == "bs") {
        await i.update({ embeds: [bs], components: [bsm] });
      }
      if (i.customId == "f") {
        await i.update({ embeds: [fi], components: [f] });
      }
      if (i.customId == "ctemp") {
        await i.update({ embeds: [ctemp], components: [ct] });
      }
      if (i.customId == "ho") {
        await i.update({ embeds: [smb], components: [ho] });
      }
      if (i.customId == "fi") {
        await i.update({ embeds: [fi], components: [f] });
      }
      if (i.customId === "hor") {
        await i.update({ embeds: [hs], components: [hor] });
      }
      if (i.customId == "smb") {
        await i.update({ embeds: [smb], components: [ho] });
      }
      if (i.customId === "hs") {
        await i.update({ embeds: [hs], components: [hor] });
      }
      if (i.customId == "kt") {
        await i.update({ embeds: [ktemp], components: [kt] });
      }
      if (i.customId == "py") {
        await i.update({ embeds: [pyeez], components: [py] });
      }
      if (i.customId == "pyeez") {
        await i.update({ embeds: [pyeez], components: [py] });
      }
      if (i.customId == "ktemp") {
        await i.update({ embeds: [ktemp], components: [kt] });
      }
      if (i.customId == "mo") {
        await i.update({ embeds: [mop], components: [mo] });
      }
      if (i.customId == "mop") {
        await i.update({ embeds: [mop], components: [mo] });
      }
      if (i.customId == "o") {
        await i.update({ embeds: [og], components: [o] });
      }
      if (i.customId == "ps") {
        await i.update({ embeds: [pe], components: [ps] });
      }
      if (i.customId == "og") {
        await i.update({ embeds: [og], components: [o] });
      }
      if (i.customId == "pe") {
        await i.update({ embeds: [pe], components: [ps] });
      }
      if (i.customId == "ts") {
        await i.update({ embeds: [tsm], components: [ts] });
      }
      if (i.customId == "wp") {
        await i.update({ embeds: [wph], components: [wp] });
      }
      if (i.customId == "tsm") {
        await i.update({ embeds: [tsm], components: [ts] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [helpsm], components: [test] });
      }
      if (i.customId == "wph") {
        await i.update({ embeds: [wph], components: [wp] });
      }
    });
  },
};

const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `kingfishcommander`,
  aliases: [
    `kingfishcommanderdecks`,
    `kingfishcommanderhelp`,
    `helpkingfishcommander`,
    `decksmadebykingfishcommander`,
    `kingfish`,
    `kingfish_commander`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("sunlord")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("am")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const am = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpkf")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bbf")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    //budget bf
    const bbf = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("amono")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bgk")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bgk = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bfb")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bgs")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bgs = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gkb")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bif")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    //budget impfinity
    const bif = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("gsb")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bnt")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    //budget neptuna
    const bnt = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ifb")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bro")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bro = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ntb")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bsb")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bsb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("rob")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bsm")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    //budget smash
    const bsm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("sbb")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bsp")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bsp = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("smb")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bwk")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bwk = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("spb")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pm")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const pm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("wkb")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("sl")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const sl = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pmop")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = [
      "agentm",
      "budgetbf",
      "budgetgk",
      "budgetgs",
      "budgetif",
      "budgetnt",
      "budgetro",
      "budgetsb",
      "budgetsm",
      "budgetsp",
      "budgetwk",
      "petmop",
      "sunlord",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let user = await client.users.fetch("1160392548423061516");
    let kfish = new EmbedBuilder()
      .setTitle("KingFish_Commander Decks")
      .setDescription(
        `My commands for decks made by KingFish_Commander are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks Made By KingFish_Commander please use the commands listed above or click on the buttons below!
Note: KingFish_Commander has ${decks.length} total decks in Tbot`,
      })
      .setColor("Random")
      .setThumbnail(user.displayAvatarURL());
    let [result] =
      await db.query(`select agentm, budgetbf,budgetgk,budgetgs,budgetif,budgetnt,
		budgetro,budgetsb, budgetsm, budgetburstsp, budgetwkmidheal, petmop, wimps
		from smdecks sm inner join bfdecks bf 
		on (sm.deckinfo = bf.deckinfo)
		inner join gkdecks gk 
		on (sm.deckinfo = gk.deckinfo)
		inner join gsdecks gs
		on (sm.deckinfo = gs.deckinfo)
		inner join ifdecks fi
		on (sm.deckinfo = fi.deckinfo)
		inner join ntdecks nt
		on (sm.deckinfo = nt.deckinfo)
		inner join rodecks ro
		on (sm.deckinfo = ro.deckinfo)
		inner join sbdecks sb
		on (sm.deckinfo = sb.deckinfo)
		inner join spdecks sp
		on (sm.deckinfo = sp.deckinfo)
		inner join wkdecks wk 
		on (sm.deckinfo = wk.deckinfo)`);
    let agentm = new EmbedBuilder()
      .setTitle("Agent M")
      .setDescription(`${result[2].agentm}`)
      .setFooter({ text: `${result[1].agentm}` })
      .addFields({ name: "Deck Cost:", value: `${result[0].agentm}` })
      .setColor("Random")
      .setImage(`${result[3].agentm}`);
    // Budget Piratein
    let budgetbf = new EmbedBuilder()
      .setTitle("BF Budget Piratein")
      .setDescription(`${result[2].budgetbf}`)
      .setFooter({ text: `${result[1].budgetbf}` })
      .addFields({ name: "Deck Cost", value: `${result[0].budgetbf}` })
      .setColor("Random")
      .setImage(`${result[3].budgetbf}`);
    // Budget Tempo Knuckles
    let budgetgk = new EmbedBuilder()
      .setTitle("Gk Budget Tempo")
      .setDescription(`${result[2].budgetgk}`)
      .setFooter({ text: `${result[1].budgetgk}` })
      .addFields({ name: "Deck Cost", value: `${result[0].budgetgk}` })
      .setColor("Random")
      .setImage(`${result[3].budgetgk}`);
    //Budget Mop Shadow
    let budgetgs = new EmbedBuilder()
      .setTitle("GS Budget Mop")
      .setDescription(`${result[2].budgetgs}`)
      .setFooter({ text: `${result[1].budgetgs}` })
      .addFields({ name: "Deck Cost", value: `${result[0].budgetgs}` })
      .setColor("Random")
      .setImage(`${result[3].budgetgs}`);
    //Budget Impifinity
    let budgetif = new EmbedBuilder()
      .setTitle("IF Budget Grave Burn")
      .setDescription(`${result[2].budgetif}`)
      .setFooter({ text: `${result[1].budgetif}` })
      .addFields({ name: "Deck Cost", value: `${result[0].budgetif}` })
      .setColor("Random")
      .setImage(`${result[3].budgetif}`);
    //Budget Neptuna
    let budgetnt = new EmbedBuilder()
      .setTitle("NT Budget Flag")
      .setDescription(`${result[2].budgetnt}`)
      .setFooter({ text: `${result[1].budgetnt}` })
      .addFields({ name: "Deck Cost", value: `${result[0].budgetnt}` })
      .setColor("Random")
      .setImage(`${result[3].budgetnt}`);
    //Budget Heal Midrose
    let bhmr = new EmbedBuilder()
      .setTitle("Budget Heal Midrose")
      .setDescription(`${result[2].budgetro}`)
      .setFooter({ text: `${result[1].budgetro}` })
      .addFields({ name: "Deck Cost", value: `${result[0].budgetro}` })
      .setColor("Random")
      .setImage(`${result[3].budgetro}`);
    //Budget Super Brains
    let budgetsb = new EmbedBuilder()
      .setTitle("Budget Science Staches")
      .setDescription(`${result[2].budgetsb}`)
      .setFooter({ text: `${result[1].budgetsb}` })
      .addFields({ name: "Deck Cost", value: `${result[0].budgetsb}` })
      .setColor("Random")
      .setImage(`${result[3].budgetsb}`);
    //Budget Smash
    let budgetsm = new EmbedBuilder()
      .setTitle("Budget Swarm")
      .setDescription(`${result[2].budgetsm}`)
      .setFooter({ text: `${result[1].budgetsm}` })
      .addFields({ name: "Deck Cost", value: `${result[0].budgetsm}` })
      .setImage(`${result[3].budgetsm}`)
      .setColor("Random");
    //Budget Spudow
    let budgetsp = new EmbedBuilder()
      .setTitle("SP Budget Burst")
      .setDescription(`${result[2].budgetburstsp}`)
      .setFooter({ text: `${result[1].budgetburstsp}` })
      .addFields({ name: "Deck Cost", value: `${result[0].budgetburstsp}` })
      .setColor("Random")
      .setImage(`${result[3].budgetburstsp}`);
    //Budget Wall Knight
    let budgetwk = new EmbedBuilder()
      .setTitle("WallKnight Budget MidHeal")
      .setDescription(`${result[2].budgetwkmidheal}`)
      .setFooter({ text: `${result[1].budgetwkmidheal}` })
      .addFields({ name: "Deck Cost", value: `${result[0].budgetwkmidheal}` })
      .setColor("Random")
      .setImage(`${result[3].budgetwkmidheal}`);
    //Pet Mop
    let pmop = new EmbedBuilder()
      .setTitle("Pet Mop")
      .setDescription(`${result[2].petmop}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].petmop}` })
      .addFields({ name: "Deck Cost", value: `${result[0].petmop}` })
      .setImage(`${result[3].petmop}`);
    //Sunlord
    let sunlord = new EmbedBuilder()
      .setTitle("Sunlord")
      .setDescription(`${result[2].wimps}`)
      .setFooter({ text: `${result[1].wimps}` })
      .addFields({ name: "Deck Cost", value: `${result[0].wimps}` })
      .setColor("Random")
      .setImage(`${result[3].wimps}`);
    const m = await message.channel.send({
      embeds: [kfish],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "pm") {
        await i.update({ embeds: [pmop], components: [pm] });
      }
      if (i.customId == "pmop") {
        await i.update({ embeds: [pmop], components: [pm] });
      }
      if (i.customId == "am") {
        await i.update({ embeds: [agentm], components: [am] });
      }
      if (i.customId == "amono") {
        await i.update({ embeds: [agentm], components: [am] });
      }
      //Budget piratein
      if (i.customId == "bbf") {
        await i.update({ embeds: [budgetbf], components: [bbf] });
      }
      if (i.customId == "bfb") {
        await i.update({ embeds: [budgetbf], components: [bbf] });
      }
      //Budget Gk
      if (i.customId == "bgk") {
        await i.update({ embeds: [budgetgk], components: [bgk] });
      }
      if (i.customId == "gkb") {
        await i.update({ embeds: [budgetgk], components: [bgk] });
      }
      //Budget Mop Shadow
      if (i.customId == "bgs") {
        await i.update({ embeds: [budgetgs], components: [bgs] });
      }
      if (i.customId == "gsb") {
        await i.update({ embeds: [budgetgs], components: [bgs] });
      }
      //Budget Impfinity
      if (i.customId == "bif") {
        await i.update({ embeds: [budgetif], components: [bif] });
      }
      if (i.customId == "ifb") {
        await i.update({ embeds: [budgetif], components: [bif] });
      }
      //Budget Neptuna
      if (i.customId == "bnt") {
        await i.update({ embeds: [budgetnt], components: [bnt] });
      }
      if (i.customId == "ntb") {
        await i.update({ embeds: [budgetnt], components: [bnt] });
      }
      //budget ro
      if (i.customId == "bro") {
        await i.update({ embeds: [bhmr], components: [bro] });
      }
      if (i.customId == "rob") {
        await i.update({ embeds: [bhmr], components: [bro] });
      }
      //budget wk
      if (i.customId == "bwk") {
        await i.update({ embeds: [budgetwk], components: [bwk] });
      }
      if (i.customId == "wkb") {
        await i.update({ embeds: [budgetwk], components: [bwk] });
      }
      //budget sm
      if (i.customId == "bsm") {
        await i.update({ embeds: [budgetsm], components: [bsm] });
      }
      if (i.customId == "smb") {
        await i.update({ embeds: [budgetsm], components: [bsm] });
      }
      //budget sp
      if (i.customId == "bsp") {
        await i.update({ embeds: [budgetsp], components: [bsp] });
      }
      if (i.customId == "spb") {
        await i.update({ embeds: [budgetsp], components: [bsp] });
      }
      //budget sb
      if (i.customId == "bsb") {
        await i.update({ embeds: [budgetsb], components: [bsb] });
      }
      if (i.customId == "sbb") {
        await i.update({ embeds: [budgetsb], components: [bsb] });
      }
      //Sunlord
      if (i.customId == "sl") {
        await i.update({ embeds: [sunlord], components: [sl] });
      }
      if (i.customId == "sunlord") {
        await i.update({ embeds: [sunlord], components: [sl] });
      }
      //help
      if (i.customId == "helpkf") {
        await i.update({ embeds: [kfish], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [kfish], components: [row] });
      }
    });
  },
};

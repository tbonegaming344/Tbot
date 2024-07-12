const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `professorbrainstorm`,
  aliases: [`pb`, `pbs`, `professor`, `brainstorm`, `prof`],
  category: `Zombie Cards`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helppb")
        .setLabel("PB Commands")
        .setStyle(ButtonStyle.Primary)
        .setEmoji("<:HD_ProfessorBrainstorm:1088083603918958682>")
    );
    const test = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("youngeggmartin")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bc")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bc = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helppb")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bd")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bd = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bch")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bpb")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bpb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bducks")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("cb")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const cb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bsci")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hb")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const hb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("cbait")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("otkn")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    //Otk Neturon
    const otkn = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("hbird")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("as")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const as = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("otknet")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pbf")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const pbf = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("aster")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pa")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const pa = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("fc")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pb")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const pb = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pack")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("tele")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const tele = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pburn")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("tster")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const tster = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("teleburn")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("tburn")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const tburn = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("tst")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("ts")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const ts = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("tbu")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("un")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const un = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("tsta")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("vster")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const vster = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("uno")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("vss")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    //Valksterstache
    const vss = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("ster")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("yem")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const yem = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("vvster")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let embed = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/villains/images/e/eb/HD_ProfessorBrainstorm.png/revision/latest?cb=20190401134022"
      )
      .setTitle(
        "Professor Brainstorm | <:Brainy:1062500939908530246><:Crazy:1062502046474973224>"
      )
      .setDescription("**- Mustache Science Hero -**")
      .addFields(
        {
          name: "Superpowers",
          value:
            "Summoning <:Brainy:1062500939908530246> \n Make a random Zombie that costs 2<:Brainz:1062503146745774183> or less. \n Telepathy <:Brainy:1062500939908530246> \n Draw 2 cards. \n Dance Off <:Crazy:1062502046474973224> \n Make two 1<:Strength:1062501774612779039>/1<:Health:1062515540712751184> Backup Dancers in random lanes. \n Eureka <:Brainy:1062500939908530246><:Crazy:1062502046474973224> \n __Conjure__ any three cards.",
        },
        {
          name: "Set-Rarity",
          value: "**Premium - Hero**",
        },
        {
          name: "Flavor Text",
          value: "His countless years of research revealed that E=MCraaazy!",
        }
      )
      .setColor("Random")
      ;
    let decks = [
      "binarychickening",
      "bonusducks",
      "budgetpb",
      "congabait",
      "helppb",
      "hibird",
      "otkneutron",
      "packagester",
      "pbfeast",
      "professorpackage",
      "pureburn",
      "randompb",
      "teleburn",
      "throwster",
      "trickburn",
      "trickstache",
      "uno",
      "valkster",
      "valksterstache",
      "wheelpb",
      "youngeggmartin",
    ];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let helppb = new EmbedBuilder()
      .setThumbnail(
        "https://static.wikia.nocookie.net/villains/images/e/eb/HD_ProfessorBrainstorm.png/revision/latest?cb=20190401134022"
      )
      .setTitle("PB Commands")
      .setDescription(
        `My commands for Professor Brainstorm(PB) are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Professor Brainstrom decks please use the commands listed above or click on the buttons below!
Note: Professor Brainstorm has ${decks.length - 3} total decks in Tbot`,
      })
      .setColor("Random");
    let [result] = await db.query(`select * from pbdecks`);
    let bch = new EmbedBuilder()
      .setTitle("Binary Chickening")
      .setDescription(`${result[2].binarychickening}`)
      .setFooter({ text: `${result[1].binarychickening}` })
      .addFields({ name: "Deck Cost", value: `${result[0].binarychickening}` })
      .setColor("Random")
      .setImage(`${result[3].binarychickening}`);
    let bducks = new EmbedBuilder()
      .setTitle("Bonus Ducks")
      .setDescription(`${result[2].bonusducks}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].bonusducks}` })
      .addFields({ name: "Deck Cost", value: `${result[0].bonusducks}` })
      .setImage(`${result[3].bonusducks}`);
    let bs = new EmbedBuilder()
      .setTitle("Budget Sciburn")
      .setDescription(`${result[2].budgetpb}`)
      .setFooter({ text: `${result[1].budgetpb}` })
      .addFields({ name: "Deck Cost", value: `${result[0].budgetpb}` })
      .setImage(`${result[3].budgetpb}`)
      .setColor("Random");
    let cbait = new EmbedBuilder()
      .setTitle("CongaBait")
      .setDescription(`${result[2].congabait}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].congabait}` })
      .addFields({ name: "Deck Cost", value: `${result[0].congabait}` })
      .setImage(`${result[3].congabait}`);
    let hbird = new EmbedBuilder()
      .setTitle("Hibird")
      .setDescription(`${result[2].hibird}`)
      .setFooter({ text: `${result[1].hibird}` })
      .addFields({ name: "Deck Cost", value: `${result[0].hibird}` })
      .setColor("Random")
      .setImage(`${result[3].hibird}`);
    let otknet = new EmbedBuilder()
      .setTitle("OTK Neutron")
      .setDescription(`${result[2].otkneturon}`)
      .setFooter({ text: `${result[1].otkneturon}` })
      .addFields({ name: "Deck Cost", value: `${result[0].otkneturon}` })
      .setColor("Random")
      .setImage(`${result[3].otkneturon}`);
    let ast = new EmbedBuilder()
      .setTitle("Packagester")
      .setDescription(`${result[2].packagester}`)
      .setFooter({ text: `${result[1].packagester}` })
      .addFields({ name: "Deck Cost", value: `${result[0].packagester}` })
      .setColor("Random")
      .setImage(`${result[3].packagester}`);
    let pack = new EmbedBuilder()
      .setTitle("Professor Package")
      .setDescription(`${result[2].professorpackage}`)
      .setFooter({ text: `${result[1].professorpackage}` })
      .setColor("Random")
      .setImage(`${result[3].professorpackage}`)
      .addFields({ name: "Deck Cost", value: `${result[0].professorpackage}` });
    let fc = new EmbedBuilder()
      .setTitle("Feast Control")
      .setDescription(`${result[2].pbfeast}`)
      .setFooter({ text: `${result[1].pbfeast}` })
      .addFields({ name: "Deck Cost", value: `${result[0].pbfeast}` })
      .setColor("Random")
      .setImage(`${result[3].pbfeast}`);
    let pburn = new EmbedBuilder()
      .setTitle("Pure Burn")
      .setDescription(`${result[2].pureburn}`)
      .setFooter({ text: `${result[1].pureburn}` })
      .addFields({ name: "Deck Cost", value: `${result[0].pureburn}` })
      .setColor("Random")
      .setImage(`${result[3].pureburn}`);
    let teleburn = new EmbedBuilder()
      .setTitle("TeleBurn")
      .setDescription(`${result[2].teleburn}`)
      .setFooter({ text: `${result[1].teleburn}` })
      .addFields({ name: "Deck Cost", value: `${result[0].teleburn}` })
      .setColor("Random")
      .setImage(`${result[3].teleburn}`);
    let tst = new EmbedBuilder()
      .setTitle("Throwster")
      .setDescription(`${result[2].throwster}`)
      .setFooter({ text: `${result[1].throwster}` })
      .addFields({ name: "Deck Cost", value: `${result[0].throwster}` })
      .setColor("Random")
      .setImage(`${result[3].throwster}`);
    let tbu = new EmbedBuilder()
      .setTitle("TrickBurn")
      .setDescription(`${result[2].trickburn}`)
      .setColor("Random")
      .addFields({ name: "Deck Cost", value: `${result[0].trickburn}` })
      .setImage(`${result[3].trickburn}`)
      .setFooter({ text: `${result[1].trickburn}` });
    let tsta = new EmbedBuilder()
      .setTitle("Trickstache")
      .setDescription(`${result[2].trickstache}`)
      .setFooter({ text: `${result[1].trickstache}` })
      .addFields({ name: "Deck Cost", value: `${result[0].trickstache}` })
      .setColor("Random")
      .setImage(`${result[3].trickstache}`);
    let uno = new EmbedBuilder()
      .setTitle("UNO")
      .setDescription(`${result[2].uno}`)
      .setFooter({ text: `${result[1].uno}` })
      .addFields({ name: "Deck Cost", value: `${result[0].uno}` })
      .setColor("Random")
      .setImage(`${result[3].uno}`);
    let valk = new EmbedBuilder()
      .setTitle("Valkster")
      .setDescription(`${result[2].valkster}`)
      .setFooter({ text: `${result[1].valkster}` })
      .addFields({ name: "Deck Cost", value: `${result[0].valkster}` })
      .setColor("Random")
      .setImage(`${result[3].valkster}`);
    //valksterstache
    let valkstache = new EmbedBuilder()
      .setTitle("Valksterstache")
      .setDescription(`${result[2].valksterstache}`)
      .setFooter({ text: `${result[1].valksterstache}` })
      .addFields({ name: "Deck Cost", value: `${result[0].valksterstache}` })
      .setColor("Random")
      .setImage(`${result[3].valksterstache}`);
    //YoungEggMartin
    let youngeggmartin = new EmbedBuilder()
      .setTitle("Young Egg Martin")
      .setDescription(`${result[2].youngeggmartin}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].youngeggmartin}` })
      .addFields({ name: "Deck Cost", value: `${result[0].youngeggmartin}` })
      .setImage(`${result[3].youngeggmartin}`);
    const m = await message.channel.send({
      embeds: [embed],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "helppb") {
        await i.update({ embeds: [helppb], components: [test] });
      }
      if (i.customId == "as") {
        await i.update({ embeds: [ast], components: [as] });
      }
      if (i.customId == "helpbp") {
        await i.update({ embeds: [helppb], components: [test] });
      }
      if (i.customId == "aster") {
        await i.update({ embeds: [ast], components: [as] });
      }
      if (i.customId == "bc") {
        await i.update({ embeds: [bch], components: [bc] });
      }
      if (i.customId == "bch") {
        await i.update({ embeds: [bch], components: [bc] });
      }
      if (i.customId == "bpb") {
        await i.update({ embeds: [bs], components: [bpb] });
      }
      if (i.customId == "bd") {
        await i.update({ embeds: [bducks], components: [bd] });
      }
      if (i.customId == "bducks") {
        await i.update({ embeds: [bducks], components: [bd] });
      }
      if (i.customId == "cb") {
        await i.update({ embeds: [cbait], components: [cb] });
      }
      if (i.customId == "cbait") {
        await i.update({ embeds: [cbait], components: [cb] });
      }
      if (i.customId == "hb") {
        await i.update({ embeds: [hbird], components: [hb] });
      }
      if (i.customId == "bsci") {
        await i.update({ embeds: [bs], components: [bpb] });
      }
      if (i.customId == "hbird") {
        await i.update({ embeds: [hbird], components: [hb] });
      }
      if (i.customId == "pa") {
        await i.update({ embeds: [pack], components: [pa] });
      }
      if (i.customId == "tele") {
        await i.update({ embeds: [teleburn], components: [tele] });
      }
      if (i.customId == "teleburn") {
        await i.update({ embeds: [teleburn], components: [tele] });
      }
      if (i.customId == "pbf") {
        await i.update({ embeds: [fc], components: [pbf] });
      }
      if (i.customId == "pack") {
        await i.update({ embeds: [pack], components: [pa] });
      }
      if (i.customId == "fc") {
        await i.update({ embeds: [fc], components: [pbf] });
      }
      if (i.customId == "pb") {
        await i.update({ embeds: [pburn], components: [pb] });
      }
      if (i.customId == "tbu") {
        await i.update({ embeds: [tbu], components: [tburn] });
      }
      if (i.customId == "tburn") {
        await i.update({ embeds: [tbu], components: [tburn] });
      }
      //Otk Neturon
      if (i.customId == "otkn") {
        await i.update({ embeds: [otknet], components: [otkn] });
      }
      if (i.customId == "otknet") {
        await i.update({ embeds: [otknet], components: [otkn] });
      }
      if (i.customId == "pburn") {
        await i.update({ embeds: [pburn], components: [pb] });
      }
      if (i.customId == "tster") {
        await i.update({ embeds: [tst], components: [tster] });
      }
      if (i.customId == "tst") {
        await i.update({ embeds: [tst], components: [tster] });
      }
      if (i.customId == "ts") {
        await i.update({ embeds: [tsta], components: [ts] });
      }
      if (i.customId == "un") {
        await i.update({ embeds: [uno], components: [un] });
      }
      if (i.customId == "tsta") {
        await i.update({ embeds: [tsta], components: [ts] });
      }
      if (i.customId == "uno") {
        await i.update({ embeds: [uno], components: [un] });
      }
      if (i.customId == "vs") {
        await i.update({ embeds: [vst], components: [vs] });
      }
      if (i.customId == "vst") {
        await i.update({ embeds: [vst], components: [vs] });
      }
      //Valksterstache
      if (i.customId == "vvster") {
        await i.update({ embeds: [valkstache], components: [vss] });
      }
      if (i.customId == "vss") {
        await i.update({ embeds: [valkstache], components: [vss] });
      }
      if (i.customId == "vster") {
        await i.update({ embeds: [valk], components: [vster] });
      }
      //YoungEggMartin
      if (i.customId == "yem") {
        await i.update({ embeds: [youngeggmartin], components: [yem] });
      }
      if (i.customId == "youngeggmartin") {
        await i.update({ embeds: [youngeggmartin], components: [yem] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [helppb], components: [test] });
      }
      if (i.customId == "ster") {
        await i.update({ embeds: [valk], components: [vster] });
      }
    });
  },
};

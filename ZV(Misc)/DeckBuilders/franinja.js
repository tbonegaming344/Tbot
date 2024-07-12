const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `franinja`,
  aliases: [`franinjadecks`, `franinjahelp`, `helpfraninja`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("zoolander")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bwrap")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bwrap = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpff")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("marx")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const marx = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("bwrappers")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pyro")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const pyro = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("marxbolt")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("zoo")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    //Zoolander
    const zoo = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pyromania")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["blobfishwrappers", "marxbolt", "pyromania", "zoolander"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      let deck = decks[i];
      toBuildString += `\n<@1043528908148052089> **${deck}**`;
    }
    let [result] =
      await db.query(`select blobfishwrappers, marxbolt, zoolander, pyromania
		from hgdecks as hg inner join 
		rbdecks as rb on (hg.deckinfo = rb.deckinfo)
		inner join gkdecks as gk 
		on (hg.deckinfo = gk.deckinfo)
		inner join zmdecks as zm
		on (hg.deckinfo = zm.deckinfo);`);
    let user = await client.users.fetch("488426862058405899");
    let fran = new EmbedBuilder()
      .setTitle(`Franinja Decks`)
      .setDescription(
        `My commands for decks made by franinja are ${toBuildString}`
      )
      .setFooter({
        text: `To view the Decks Made By Franinja please use the commands listed above or click on the buttons below!
Note: Franinja has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    let bwrappers = new EmbedBuilder()
      .setTitle("Blobfish Wrappers")
      .setDescription(`${result[2].blobfishwrappers}`)
      .setFooter({ text: `${result[1].blobfishwrappers}` })
      .addFields({ name: "Deck Cost", value: `${result[0].blobfishwrappers}` })
      .setColor("Random")
      .setImage(`${result[3].blobfishwrappers}`);
    let pyromania = new EmbedBuilder()
      .setTitle("Pyromania")
      .setDescription(`${result[2].pyromania}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].pyromania}` })
      .addFields({ name: "Deck Cost", value: `${result[0].pyromania}` })
      .setImage(`${result[3].pyromania}`);
    let marxbolt = new EmbedBuilder()
      .setTitle("Marxbolt")
      .setDescription(`${result[2].marxbolt}`)
      .setFooter({ text: `${result[1].marxbolt}` })
      .addFields({ name: "Deck Cost:", value: `${result[0].marxbolt}` })
      .setColor("Random")
      .setImage(`${result[3].marxbolt}`);
    //Zoolander
    let zoolander = new EmbedBuilder()
      .setTitle(`Zoolander`)
      .setDescription(`${result[2].zoolander}`)
      .setColor("Random")
      .addFields({ name: "Deck Cost:", value: `${result[0].zoolander}` })
      .setFooter({ text: `${result[1].zoolander}` })
      .setImage(`${result[3].zoolander}`);
    const m = await message.channel.send({ embeds: [fran], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "marx") {
        await i.update({ embeds: [marxbolt], components: [marx] });
      }
      if (i.customId == "marxbolt") {
        await i.update({ embeds: [marxbolt], components: [marx] });
      }
      if (i.customId == "bwrap") {
        await i.update({ embeds: [bwrappers], components: [bwrap] });
      }
      if (i.customId == "bwrappers") {
        await i.update({ embeds: [bwrappers], components: [bwrap] });
      }
      if (i.customId == "pyro") {
        await i.update({ embeds: [pyromania], components: [pyro] });
      }
      if (i.customId == "pyromania") {
        await i.update({ embeds: [pyromania], components: [pyro] });
      }
      if (i.customId == "helpff") {
        await i.update({ embeds: [fran], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [fran], components: [row] });
      }
      if (i.customId == "zoolander") {
        await i.update({ embeds: [zoolander], components: [zoo] });
      }
      if (i.customId == "zoo") {
        await i.update({ embeds: [zoolander], components: [zoo] });
      }
    });
  },
};

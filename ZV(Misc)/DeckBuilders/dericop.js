const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `dericop`,
  aliases: [
    `decksmadebydericop`,
    `helpdericop`,
    `dericophelp`,
    `dericopdecks`,
    `decksmadebydericop`,
    `helpdericop`,
    `dericophelp`,
    `dericopdecks`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("pyromania")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("hk")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const hk = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpder")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("pyro")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const pyro = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("hknuckles")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["healthyknuckles", "pyromania"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let [result] = await db.query(`SELECT healthyknuckles, pyromania from gkdecks gk
      inner join zmdecks zm on (gk.deckinfo = zm.deckinfo)`);
    let user = await client.users.fetch("948397000699805727");
    let dericop = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My commands for decks made by ${user.displayName} are ${toBuildString}`
      )
      .setFooter({
        text: `To find out more about the Decks Made By ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL())
      .setColor("Random");
    let hknuckles = new EmbedBuilder()
      .setTitle("Healthy Knuckles")
      .setDescription(`${result[2].healthyknuckles}`)
      .setFooter({ text: `${result[1].healthyknuckles}` })
      .setColor("Random")
      .addFields({ name: "Deck Cost", value: `${result[0].healthyknuckles}` })
      .setImage(`${result[3].healthyknuckles}`);
      let pyromania = new EmbedBuilder()
      .setTitle("Pyromania")
      .setDescription(`${result[2].pyromania}`)
      .setColor("Random")
      .setFooter({text: `${result[1].pyromania}`})
      .addFields({name: "Deck Cost", value: `${result[0].pyromania}`})
      .setImage(`${result[3].pyromania}`)
    const m = await message.channel.send({
      embeds: [dericop],
      components: [row],
    });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      //Healthy Knuckles
      if (i.customId == "hk") {
        await i.update({ embeds: [hknuckles], components: [hk] });
      }
      if (i.customId == "hknuckles") {
        await i.update({ embeds: [hknuckles], components: [hk] });
      }
      //Pyromania
      if(i.customId == "pyro"){
        await i.update({embeds: [pyromania], components: [pyro]})
      }
      if(i.customId == "pyromania"){
        await i.update({embeds: [pyromania], components: [pyro]})
      }
      if (i.customId == "helpder") {
        await i.update({ embeds: [dericop], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [dericop], components: [row] });
      }
    });
  },
};

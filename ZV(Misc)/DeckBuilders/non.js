const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `non`,
  aliases: [`nondecks`, `nonhelp`, `nonsequitur`, `nonsequiturhelp`, `nonsequiturdecks`],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("zmoss")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("bos")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const bos = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("helpn")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("fl")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const fl = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("boss")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("soul")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const soul = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("floss")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("zm")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const zm = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("sol")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["boss", "floss", "solstice", "zmoss"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let [result] = await db.query(`select boss, floss, solstice, zmoss
		from rbdecks rb
		inner join ntdecks nt
		on (rb.deckinfo = nt.deckinfo)
		inner join sfdecks sf
		on (rb.deckinfo = sf.deckinfo)
		inner join zmdecks zm 
		on (rb.deckinfo = zm.deckinfo);`);
    let user = await client.users.fetch("761810528606617602");
    let non = new EmbedBuilder()
      .setTitle(`${user.displayName} Decks`)
      .setDescription(
        `My decks made by ${user.displayName} are ${toBuildString}`
      )
      .setColor("Random")
      
      .setFooter({
        text: `To view the Decks made by ${user.displayName} please use the commands listed above or click on the buttons below!
Note: ${user.displayName} has ${decks.length} total decks in Tbot`,
      })
      .setThumbnail(user.displayAvatarURL());
    let boss = new EmbedBuilder()
      .setTitle("Bolt Of Some Size")
      .setDescription(`${result[2].boss}`)
      .setFooter({ text: `${result[1].boss}` })
      .setColor("Random")
      .addFields({ name: "Deck Cost", value: `${result[0].boss}` })
      .setImage(`${result[3].boss}`);
    let floss = new EmbedBuilder()
      .setTitle(`Floss`)
      .setDescription(`${result[2].floss}`)
      .setColor("Random")
      .addFields({ name: "Deck Cost:", value: `${result[0].floss}` })
      .setFooter({ text: `${result[1].floss}` })
      .setImage(`${result[3].floss}`);
    let sol = new EmbedBuilder()
      .setTitle("Solstice")
      .setDescription(`${result[2].solstice}`)
      .setColor("Random")
      
      .setFooter({ text: `${result[1].solstice}` })
      .setImage(`${result[3].solstice}`)
      .addFields({ name: "Deck Cost", value: `${result[0].solstice}` });
    let zmoss = new EmbedBuilder()
      .setTitle("Z-Moss")
      .setDescription(`${result[2].zmoss}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].zmoss}` })
      .addFields({ name: "Deck Cost", value: `${result[0].zmoss}` })
      .setImage(`${result[3].zmoss}`);
    const m = await message.channel.send({ embeds: [non], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "bos") {
        await i.update({ embeds: [boss], components: [bos] });
      }
      if (i.customId == "boss") {
        await i.update({ embeds: [boss], components: [bos] });
      }
      if (i.customId == "soul") {
        await i.update({ embeds: [sol], components: [soul] });
      }
      if (i.customId == "sol") {
        await i.update({ embeds: [sol], components: [soul] });
      }
      //floss
      if (i.customId == "fl") {
        await i.update({ embeds: [floss], components: [fl] });
      }
      if (i.customId == "floss") {
        await i.update({ embeds: [floss], components: [fl] });
      }
      //zmoss
      if (i.customId == "zm") {
        await i.update({ embeds: [zmoss], components: [zm] });
      }
      if (i.customId == "zmoss") {
        await i.update({ embeds: [zmoss], components: [zm] });
      }
      if (i.customId == "helpn") {
        await i.update({ embeds: [non], components: [row] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [non], components: [row] });
      }
    });
  },
};

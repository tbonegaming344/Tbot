const {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
} = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `chel`,
  aliases: [
    `decksmadebychel`,
    `helpchel`,
    `chelhelp`,
    `cheldecklists`,
    `cheldecks`,
  ],
  category: `DeckBuilders`,
  run: async (client, message, args) => {
    const row = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("kleap")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("t")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
	const t = new ActionRowBuilder().addComponents(
		new ButtonBuilder()
		  .setCustomId("helpc")
		  .setLabel("🔙")
		  .setStyle(ButtonStyle.Primary),
		new ButtonBuilder()
		  .setCustomId("cy")
		  .setLabel("⏭")
		  .setStyle(ButtonStyle.Primary)
	  );
    const cy = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("toss")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("kl")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    const kl = new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setCustomId("caggro")
        .setLabel("🔙")
        .setStyle(ButtonStyle.Primary),
      new ButtonBuilder()
        .setCustomId("help")
        .setLabel("⏭")
        .setStyle(ButtonStyle.Primary)
    );
    let decks = ["comboticia", "cyggro", "kingleap"];
    let toBuildString = "";
    for (let i = 0; i < decks.length; i++) {
      toBuildString += `\n<@1043528908148052089> **${decks[i]}**`;
    }
    let [result] = await db.query(`select cyggro, kingleap, comboticia
		from ncdecks nc
		inner join rbdecks rb 
		on (nc.deckinfo = rb.deckinfo)
		inner join imdecks im 
		on (nc.deckinfo = im.deckinfo)`);
    let user = await client.users.fetch("294599048722120705");
    let chel = new EmbedBuilder()
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
    let caggro = new EmbedBuilder()
      .setTitle("Cyggro")
      .setDescription(`${result[2].cyggro}`)
      .setFooter({ text: `${result[1].cyggro}` })
      .addFields({ name: "Deck Cost", value: `${result[0].cyggro}` })
      .setColor("Random")
      .setImage(`${result[3].cyggro}`);
    let kleap = new EmbedBuilder()
      .setTitle("King Leap")
      .setDescription(`${result[2].kingleap}`)
      .setFooter({ text: `${result[1].kingleap}` })
      .addFields({ name: "Deck Cost", value: `${result[0].kingleap}` })
      .setColor("Random")
      .setImage(`	${result[3].kingleap}`);
    let toss = new EmbedBuilder()
      .setTitle("Comboticia AKA Toss")
      .setDescription(`${result[2].comboticia}`)
      .setFooter({ text: `${result[1].comboticia}` })
      .addFields({ name: "Deck Cost", value: `${result[0].comboticia}` })
      .setColor("Random")
      .setImage(`${result[3].comboticia}`);
    const m = await message.channel.send({ embeds: [chel], components: [row] });
    const iFilter = (i) => i.user.id === message.author.id;
    const collector = m.createMessageComponentCollector({ filter: iFilter });
    collector.on("collect", async (i) => {
      if (i.customId == "cy") {
        await i.update({ embeds: [caggro], components: [cy] });
      }
      if (i.customId == "helpc") {
        await i.update({ embeds: [chel], components: [row] });
      }
      if (i.customId == "kl") {
        await i.update({ embeds: [kleap], components: [kl] });
      }
      if (i.customId == "caggro") {
        await i.update({ embeds: [caggro], components: [cy] });
      }
      if (i.customId == "t") {
        await i.update({ embeds: [toss], components: [t] });
      }
      if (i.customId == "kleap") {
        await i.update({ embeds: [kleap], components: [kl] });
      }
      if (i.customId == "toss") {
        await i.update({ embeds: [toss], components: [t] });
      }
      if (i.customId == "help") {
        await i.update({ embeds: [chel], components: [row] });
      }
    });
  },
};

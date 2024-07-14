const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `randomif`,
  aliases: [`ifrandom`, `impifinityrandom`, `randomimpifinity`, `rif`],
  category: `Impfinity(IF)`,
  run: async (client, message, args) => {
    let [result] = await db.query(
      `SELECT * FROM ifdecks WHERE deckinfo = 'image link:'`
    );
    const deck = [
      //IF TBOT DB
      `${result[0].aggroconjure}`,
      `${result[0].barrelpirates}`,
      `${result[0].conjurepackage}`,
      `${result[0].conjurates}`,
      `${result[0].ifplankcontrol}`,
      `${result[0].midpirates}`,
      `${result[0].spacestars}`,
      `${result[0].splimps}`,
      `${result[0].unoif}`,
      `${result[0].wrathmartin}`,
      //IF WEB DB
      "https://media.discordapp.net/attachments/1044626284346605588/1062141452253138944/IMG_0633.jpg?width=593&height=625",
      "https://media.discordapp.net/attachments/1044626284346605588/1062141452496404540/IMG_0632.jpg?width=586&height=625",
      "https://media.discordapp.net/attachments/1044626284346605588/1062141452735492156/IMG_0631.jpg?width=587&height=625",
      "https://media.discordapp.net/attachments/1044626284346605588/1062141452966170635/IMG_0630.jpg?width=584&height=625",
      "https://media.discordapp.net/attachments/1044626284346605588/1062141453217824879/IMG_0629.jpg?width=591&height=625",
      "https://media.discordapp.net/attachments/1044626284346605588/1062141453721145355/IMG_0627.jpg?width=587&height=625",
      "https://media.discordapp.net/attachments/1044626284346605588/1062141453943439410/IMG_0626.jpg?width=546&height=624",
      "https://media.discordapp.net/attachments/1044626284346605588/1062141454253830205/IMG_0625.jpg?width=567&height=625",
      "https://media.discordapp.net/attachments/1044626284346605588/1062141454488703107/IMG_0624.jpg",
      "https://media.discordapp.net/attachments/1044626284346605588/1062141488596779129/IMG_0622.jpg?width=576&height=625",
    ];
    let embed = new EmbedBuilder()
      .setTitle("Random Impifinity(IF) Deck")
      .setDescription(
        `Here is your random Impifinity(IF) Deck ${message.author}`
      )
      .setColor("Random")
      .setImage(deck[Math.floor(Math.random() * deck.length)]);

    message.channel.send({ embeds: [embed] });
  },
};

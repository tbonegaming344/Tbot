const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `randomsb`,
  aliases: [`sbrandom`, `superbrainsrandom`, `randomsuperbrains`, `rsb`],
  category: `Huge-Gigantacus/SuperBrainz`,
  run: async (client, message, args) => {
    let [result] = await db.query(
      `SELECT * FROM sbdecks where deckinfo = 'image link:'`
    );
    const deck = [
      //SB TBOT DB
      `${result[0].lgconjuresb}`,
      `${result[0].mill}`,
      `${result[0].telimpssb}`,
      //SB WEB DB
      "https://media.discordapp.net/attachments/1044626284346605588/1061846547098255410/IMG_0739.jpg?width=570&height=586",
      "https://media.discordapp.net/attachments/1044626284346605588/1061846547312156692/IMG_0738.jpg?width=585&height=586",
      "https://media.discordapp.net/attachments/1044626284346605588/1061846547869999185/IMG_0591.jpg?width=485&height=586",
      "https://media.discordapp.net/attachments/1044626284346605588/1061846548683702292/IMG_0736.jpg?width=555&height=587",
    ];
    let embed = new EmbedBuilder()
      .setTitle("Random Super Brains(SB) Deck")
      .setDescription(
        `Here is your random Super Brains(SB) Deck ${message.author}`
      )
      .setColor("Random")
      .setImage(deck[Math.floor(Math.random() * deck.length)]);

    message.channel.send({ embeds: [embed] });
  },
};

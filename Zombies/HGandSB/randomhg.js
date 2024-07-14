const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `randomhg`,
  aliases: [
    `hgrandom`,
    `hgrandomizeddeck`,
    `randomizeddeckhg`,
    `hugegigantacusrandom`,
    `randomhugegigantacus`,
    `randomizeddeckhugegigantacus`,
    `hugegigantacusrandomizeddeck`,
    `rhg`,
  ],
  category: `Huge-Gigantacus/SuperBrainz`,
  run: async (client, message, args) => {
    let [result] = await db.query(
      `SELECT * FROM hgdecks where deckinfo = 'image link:'`
    );
    const deck = [
      //HG TBOT DB
      `${result[0].blobfishwrappers}`,
      `${result[0].conjureleap}`,
      `${result[0].frozentelimps}`,
      `${result[0].gravestache}`,
      `${result[0].gravester}`,
      `${result[0].gus}`,
      `${result[0].kitchenhg}`,
      `${result[0].lgconjure}`,
      `${result[0].sushiaggro}`,
      `${result[0].sweap}`,
      `${result[0].telimps}`,
      `${result[0].ykm}`,
      //HG WEB DB
      "https://media.discordapp.net/attachments/1044626284346605588/1062170851161669652/IMG_0611.jpg?width=567&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1062170851614675045/IMG_0609.jpg?width=531&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1062170851866312825/IMG_0608.jpg?width=546&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1062170852780679278/IMG_0607.jpg?width=569&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1062170853019766855/IMG_0606.jpg?width=567&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1062170853237850172/IMG_0605.png",
      "https://media.discordapp.net/attachments/1044626284346605588/1062170853707620383/IMG_0604.jpg?width=556&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1062170853925736518/IMG_0603.png?width=621&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1062170854269648937/IMG_0602.jpg?width=556&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1062170886142177371/IMG_0601.jpg?width=537&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1062170886637109268/IMG_0600.jpg?width=550&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1062170887119458374/IMG_0599.jpg?width=525&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1062170887442415626/IMG_0597.jpg?width=522&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1062170891502502029/IMG_0596.jpg?width=473&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1062170892337172520/IMG_0595.jpg?width=540&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1062170892685295626/IMG_0594.jpg?width=527&height=587",
      "https://media.discordapp.net/attachments/1044626284346605588/1062170893041807390/IMG_0593.jpg?width=488&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1062170893356388402/IMG_0592.jpg?width=518&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1062170936331223040/IMG_0590.jpg?width=545&height=588",
    ];
    let embed = new EmbedBuilder()
      .setTitle("Random Huge-Gigantacus(HG) Deck")
      .setDescription(
        `Here is your random Huge-Gigantacus(HG) Deck ${message.author}`
      )
      .setColor("Random")
      .setImage(deck[Math.floor(Math.random() * deck.length)]);

    message.channel.send({ embeds: [embed] });
  },
};

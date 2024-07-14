const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `randomct`,
  aliases: [
    `ctrandom`,
    `randomizeddeckct`,
    `citronrandom`,
    `randomcitron`,
    `randomizedeckct`,
    `ctrandomizedeck`,
  ],
  category: `Beta-Carrotina/Citron`,
  run: async (client, message, args) => {
    let [result] = await db.query(
      "SELECT * FROM ctdecks WHERE deckinfo = 'image link:'"
    );
    const deck = [
      //CT TBOT DB
      `${result[0].anti}`,
      `${result[0].countertron}`,
      `${result[0].cycletron}`,
      `${result[0].elusives}`,
      `${result[0].going3nuts}`,
      `${result[0].joaburst}`,
      `${result[0].startron}`,
      //CT WEB DB
      "https://media.discordapp.net/attachments/1044626284346605588/1061784807799009340/amphitron.jpg?width=508&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061784808126160906/Anti_graves.jpg?width=575&height=625",
      "https://media.discordapp.net/attachments/1044626284346605588/1061784808704979015/antigravesantitricks.jpg?width=594&height=625",
      "https://media.discordapp.net/attachments/1044626284346605588/1061784810030374992/freezetron.jpg?width=565&height=625",
      "https://media.discordapp.net/attachments/1044626284346605588/1061784810344951818/hazelnuts.jpg?width=587&height=625",
      "https://media.discordapp.net/attachments/1044626284346605588/1061784811003453490/3counter.jpg",
      "https://media.discordapp.net/attachments/1044626284346605588/1061784811229954079/3goburst.jpg?width=503&height=624",
      "https://media.discordapp.net/attachments/1044626284346605588/1061784844377542667/mop.jpg?width=524&height=625",
      "https://media.discordapp.net/attachments/1044626284346605588/1061784844855689236/bouncingbeans.jpg?width=617&height=625",
      "https://media.discordapp.net/attachments/1044626284346605588/1061784911633186846/tempoct.jpg?width=512&height=625",
      "https://media.discordapp.net/attachments/1044626284346605588/1061784911914213376/trisluive.jpg?width=561&height=625",
    ];
    let embed = new EmbedBuilder()
      .setTitle("Random Citron(CT) Deck")
      .setDescription(`Here is your random Citron(CT) Deck ${message.author}`)
      .setColor("Random")
      .setImage(deck[Math.floor(Math.random() * deck.length)]);

    message.channel.send({ embeds: [embed] });
  },
};

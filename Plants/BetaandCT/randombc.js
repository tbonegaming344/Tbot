const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `randombc`,
  aliases: [
    `bcrandom`,
    `randomdeckbc`,
    `bcrandomdeck`,
    `betacarrotinarandom`,
    `randombetacarrotina`,
    `randombeta`,
    `betarandom`,
  ],
  category: `Beta-Carrotina/Citron`,
  run: async (client, message, args) => {
    let [result] = await db.query(
      "SELECT * FROM bcdecks where deckinfo ='image link:'"
    );
    const deck = [
      //BC Tbot DB
      `${result[0].anti}`,
      `${result[0].shamcontrol}`,
      //BC WEB DB
      "https://media.discordapp.net/attachments/1044626284346605588/1061692820521504798/midrangepile.jpg?width=454&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061692821901422712/aplha.jpg?width=530&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061692853501304912/starchlordburst.jpg?width=551&height=588",
      "https://media.discordapp.net/attachments/1152624944262414436/1262047829208076500/starfruitshell.jpg?ex=66952d22&is=6693dba2&hm=e8a2fcb459d6b2267f8a99a919763ca758a27b2e6c537c263c172eb842dddf8d&=&format=webp&width=559&height=614",
    ];
    let embed = new EmbedBuilder()
      .setTitle("Random Beta Carrotina Deck")
      .setDescription(
        `Here is your random Beta Carrotina deck ${message.author}`
      )
      .setColor("Random")
      .setImage(deck[Math.floor(Math.random() * deck.length)]);
    message.channel.send({ embeds: [embed] });
  },
};

const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `randomnt`,
  aliases: [
    `ntrandom`,
    `randomdecknt`,
    `neptunarandom`,
    `randomneptuna`,
    `randomizednt`,
    `ntrandomized`,
    `ntrandomdeck`,
    `rnt`,
  ],
  category: `Neptuna(NT)`,
  run: async (client, message, args) => {
    let [result] = await db.query(
      `SELECT * FROM ntdecks WHERE deckinfo = 'image link:'`
    );
    const deck = [
      //NT TBOT DB
      `${result[0].agraves}`,
      `${result[0].antiagor}`,
      `${result[0].antiagoragor}`,
      `${result[0].combotuna}`,
      `${result[0].flagtor}`,
      `${result[0].floss}`,
      `${result[0].glag}`,
      `${result[0].icebox}`,
      `${result[0].midtuna}`,
      `${result[0].plankcontrol}`,
      `${result[0].preciseplankcontrol}`,
      `${result[0].schoolyard}`,
      `${result[0].tricktuna}`,
      `${result[0].trimps}`,
      `${result[0].wimps}`,
      //NT WEB DB
      "https://media.discordapp.net/attachments/1044626284346605588/1062141638153076818/IMG_0680.jpg?width=595&height=625",
      "https://media.discordapp.net/attachments/1044626284346605588/1062141638731903067/IMG_0678.jpg?width=591&height=625",
      "https://media.discordapp.net/attachments/1044626284346605588/1062141639000326154/IMG_0677.jpg?width=576&height=625",
      "https://media.discordapp.net/attachments/1044626284346605588/1062141639285551244/IMG_0676.jpg?width=604&height=625",
      "https://media.discordapp.net/attachments/1044626284346605588/1062141639621083207/IMG_0675.jpg?width=576&height=625",
      "https://media.discordapp.net/attachments/1044626284346605588/1062141639864360990/IMG_0674.jpg?width=606&height=625",
      "https://media.discordapp.net/attachments/1044626284346605588/1062141640128606318/IMG_0673.jpg?width=572&height=625",
      "https://media.discordapp.net/attachments/1044626284346605588/1062141640401223700/IMG_0672.jpg?width=615&height=625",
      "https://media.discordapp.net/attachments/1044626284346605588/1062141640619335770/IMG_0671.jpg?width=583&height=625",
      "https://media.discordapp.net/attachments/1044626284346605588/1062141668893143051/IMG_0670.jpg?width=582&height=625",
      "https://media.discordapp.net/attachments/1044626284346605588/1062141669119627314/IMG_0669.jpg?width=572&height=625",
      "https://media.discordapp.net/attachments/1044626284346605588/1062141669652320266/IMG_0668.jpg?width=584&height=625",
    ];
    let embed = new EmbedBuilder()
      .setTitle("Random Neptuna(NT) Deck")
      .setDescription(`Here is your random Neptuna(NT) Deck ${message.author}`)
      .setColor("Random")
      .setImage(deck[Math.floor(Math.random() * deck.length)]);

    message.channel.send({ embeds: [embed] });
  },
};

const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `randomsp`,
  aliases: [
    `sprandom`,
    `spudowrandom`,
    `randomspudow`,
    `randomizedecksp`,
    `sprandomizeddeck`,
    `spudowrandomizedeck`,
    `randomizedeckspudow`,
  ],
  category: `Spudow(SP)`,
  run: async (client, message, args) => {
    let [result] = await db.query(
      `SELECT * from spdecks where deckinfo = 'image link:'`
    );
    const deck = [
      //SP TBOT DB
      //Bartin
      `${result[0].bartin}`,
      `${result[0].bartinroots}`,
      `${result[0].cyclesp}`,
      `${result[0].magmartin}`,
      `${result[0].pranksterburn}`,
      `${result[0].reliablemolekale}`,
      `${result[0].tempodinoroots}`,
      `${result[0].tokenaggro}`,
      //SP WEB DB

      "https://media.discordapp.net/attachments/1044626284346605588/1061764111454699681/kenmartin2nd.png?width=639&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061764112348094524/3burn.PNG?width=577&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061764114273280070/fig.png?width=630&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061764114600427550/joa.png",
      "https://media.discordapp.net/attachments/1044626284346605588/1061764150059073576/controlsp.jpg?width=541&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061764150428176555/Cycle.jpg?width=518&height=587",
      "https://media.discordapp.net/attachments/1044626284346605588/1061764151233482864/protectseed.jpg?width=567&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061764170632155216/starchpack.jpg?width=547&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061764170921541753/t3mpo.jpg?width=535&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061764171202568233/spudumb.jpg?width=541&height=588",
    ];
    let embed = new EmbedBuilder()
      .setTitle("Random Spudow(SP) Deck")
      .setDescription(`Here is your Random Spudow(SP) Deck ${message.author}`)
      .setColor("Random")
      .setImage(deck[Math.floor(Math.random() * deck.length)]);

    message.channel.send({ embeds: [embed] });
  },
};

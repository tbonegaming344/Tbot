const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `randompb`,
  aliases: [
    `pbrandom`,
    `randomdeckpb`,
    `pbrandomdeck`,
    `randomizedpbdeck`,
    `pbrandomizeddeck`,
    `rpb`,
  ],
  category: `Professor Brainstorm(PB)`,
  run: async (client, message, args) => {
    let [result] = await db.query(
      `select * from pbdecks where deckinfo = 'image link:'`
    );
    const deck = [
      //PB TBOT DB
      `${result[0].barrelster}`,
      `${result[0].binatychickening}`,
      `${result[0].bonusducks}`,
      `${result[0].congabait}`,
      `${result[0].hibird}`,
      `${result[0].otkneturon}`,
      `${result[0].packagester}`,
      `${result[0].pbfeast}`,
      `${result[0].professorpackage}`,
      `${result[0].pureburn}`,
      `${result[0].teleburn}`,
      `${result[0].throwster}`,
      `${result[0].trickburn}`,
      `${result[0].trickstache}`,
      `${result[0].uno}`,
      `${result[0].valkster}`,
      `${result[0].valksterstache}`,
      `${result[0].youngeggmartin}`,
      //PB WEB DB
      "https://media.discordapp.net/attachments/1044626284346605588/1061847096946335896/IMG_0707.jpg?width=539&height=587",
      "https://media.discordapp.net/attachments/1044626284346605588/1061847097172824114/IMG_0706.jpg?width=540&height=586",
      "https://media.discordapp.net/attachments/1044626284346605588/1061847097437073490/IMG_0705.jpg?width=537&height=586",
      "https://media.discordapp.net/attachments/1044626284346605588/1061847097663561758/IMG_0704.jpg?width=521&height=586",
      "https://media.discordapp.net/attachments/1044626284346605588/1061847097902633000/IMG_0703.jpg?width=534&height=586",
      "https://media.discordapp.net/attachments/1044626284346605588/1061847098196242543/IMG_0702.jpg?width=521&height=586",
      "https://media.discordapp.net/attachments/1044626284346605588/1061847098485645342/IMG_0701.jpg?width=524&height=586",
      "https://media.discordapp.net/attachments/1044626284346605588/1061847098707939429/IMG_0700.jpg?width=560&height=586",
      "https://media.discordapp.net/attachments/1044626284346605588/1061847098900885544/IMG_0699.jpg?width=546&height=586",
      "https://media.discordapp.net/attachments/1044626284346605588/1061847099106402394/IMG_0698.jpg?width=530&height=586",
      "https://media.discordapp.net/attachments/1044626284346605588/1061847234678886481/IMG_0697.jpg?width=539&height=587",
      "https://media.discordapp.net/attachments/1044626284346605588/1061847235106709524/IMG_0695.png?width=621&height=587",
      "https://media.discordapp.net/attachments/1044626284346605588/1061847235312226354/IMG_0694.jpg?width=630&height=586",
      "https://media.discordapp.net/attachments/1044626284346605588/1061847235505160192/IMG_0693.jpg?width=519&height=587",
      "https://media.discordapp.net/attachments/1044626284346605588/1061847235740049508/IMG_0692.jpg?width=551&height=587",
      "https://media.discordapp.net/attachments/1044626284346605588/1061847236113334282/IMG_0691.jpg?width=551&height=587",
      "https://media.discordapp.net/attachments/1044626284346605588/1061847497963741204/0fc96dca129efed11cb885774bbf2eac59f4191bed4773907b36b36b8309fbf8.png",
      "https://media.discordapp.net/attachments/1044626284346605588/1061847498282520646/Package.png?width=626&height=586",
      "https://media.discordapp.net/attachments/1044626284346605588/1061847498517385216/Screenshot_20221223-162450_PvZ_Heroes2.jpg?width=573&height=586",
      "https://media.discordapp.net/attachments/1044626284346605588/1061847498718716004/21d9e7b300b9d9c6c2e42466bc7e48fc992dda61e9da1c914e300794db467552.png?width=555&height=586",
      "https://media.discordapp.net/attachments/1044626284346605588/1061847499133964288/a10373a91cc6218cf61804b23696decd5641d79d7b03a7d0ba58d89256052134.jpg",
      "https://media.discordapp.net/attachments/1044626284346605588/1061847499314303047/IMG_9379.png?width=557&height=587",
    ];
    let embed = new EmbedBuilder()
      .setTitle("Random Professor Brainstorm(PB) Deck")
      .setDescription(
        `Here is your random Professor Brainstorm(PB) Deck ${message.author}`
      )
      .setColor("Random")
      .setImage(deck[Math.floor(Math.random() * deck.length)]);

    message.channel.send({ embeds: [embed] });
  },
};

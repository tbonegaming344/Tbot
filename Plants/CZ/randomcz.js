const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `randomcz`,
  aliases: [
    `czrandom`,
    `randomdeckcz`,
    `czrandomdeck`,
    `randomizeddeckcz`,
    `czrandomizedeck`,
  ],
  category: `Chompzilla(CZ)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT * from czdecks
		where deckinfo = 'image link:'`);
    const deck = [
      //CZ TBOT DB
      //Aggro Ramp Pea
      `${result[0].aggroramppeas}`,
      //Aggro CZ
      `${result[0].aggrozilla}`,
      //AmongUsZilla
      `${result[0].amonguszilla}`,
      //ApOTK
      `${result[0].apotk}`,
      //HMZ
      `${result[0].healmidzilla}`,
      //HRR
      `${result[0].hrr}`,
      //MidRed
      `${result[0].midred}`,
      //RingZilla
      `${result[0].ringzilla}`,
      //Stallzilla
      `${result[0].stallzilla}`,
      //Mopribus
      `${result[0].mopribus}`,
      //CZ WEB DB
      "https://media.discordapp.net/attachments/1044626284346605588/1061696586482196620/ramppeas.jpg?width=535&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061696587165859961/CZ_healaggro.jpg?width=514&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061696588017303672/healzilla.jpg?width=578&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061696588323495977/midzilla.jpeg?width=631&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061696589099442236/Ramp_rings.jpg?width=548&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061696628613992458/ramptotrash.jpg?width=460&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061696629180215329/magotk.png?width=621&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061696630027456633/rampredrings.jpg?width=526&height=588",
      "https://media.discordapp.net/attachments/1152624944262414436/1262052738947219538/midpresso.jpg?ex=669531b4&is=6693e034&hm=03d6d8d980a874af69d403bf62f4a93c54dd9117a09215e3adacd0756d58a20c&=&format=webp&width=639&height=614",
      "https://media.discordapp.net/attachments/1152624944262414436/1262053105470803968/flowerheal.jpg?ex=6695320c&is=6693e08c&hm=6d5f288681820ceeb02dc709b7bd1fa4b99c4d700179d9cca3de7c268b35ae15&=&format=webp&width=535&height=614",
      "https://media.discordapp.net/attachments/1152624944262414436/1262053342050390116/ramprings.jpg?ex=66953244&is=6693e0c4&hm=e652b56622b977f327e736de7abe5fba48508b3623a95bff062b0a6a32bf1b09&=&format=webp&width=627&height=614",
      "https://media.discordapp.net/attachments/1152624944262414436/1262053642454827118/ramspresso.webp?ex=6695328c&is=6693e10c&hm=17902ccc3150b9d3d2d7c39e89ea4d98206da609a9bf1cc663deb2dc0176d46d&=&format=webp",
    ];
    let embed = new EmbedBuilder()
      .setTitle("Random Chompzilla Deck")
      .setDescription(`Here is your random Chompzilla deck ${message.author}`)
      .setColor("Random")
      .setImage(deck[Math.floor(Math.random() * deck.length)]);

    message.channel.send({ embeds: [embed] });
  },
};

const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `randomwk`,
  aliases: [
    `wkrandom`,
    `wallknightrandom`,
    `randomwallknight`,
    `randomdeckwk`,
    `wkrandomdeck`,
    `wallknightrandomdeck`,
    `randomdeckwallknight`,
  ],
  category: `Wall Knight(WK)`,
  run: async (client, message, args) => {
    let [result] = await db.query(
      "SELECT * FROM wkdecks where deckinfo ='image link:'"
    );
    const deck = [
      //WK TBOT DB
      `${result[0].mid3}`,
      `${result[0].cancerknight}`,
      `${result[0].chemotherapy}`,
      `${result[0].cycleknight}`,
      `${result[0].funnyknight}`,
      `${result[0].healmidwk}`,
      `${result[0].highlander}`,
      `${result[0].midmirror}`,
      `${result[0].nivola}`,
      `${result[0].obnoxious}`,
      `${result[0].packagewk}`,
      `${result[0].rampburst}`,
      `${result[0].shitknight}`,
      //WK WEB DB
      "https://media.discordapp.net/attachments/1044626284346605588/1061686842526802071/Healaggro.jpg?width=545&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061686842786852924/healmid_wk.jpg",
      "https://media.discordapp.net/attachments/1044626284346605588/1061686843055276062/healsanity.jpg?width=551&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061686843365662751/3knight.jpg?width=481&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061686889528184852/counterknight.jpg?width=467&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061686890362851429/healwk.png?width=865&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061686890895519794/midheal.jpg?width=529&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061686926639378565/trollknight.jpg?width=575&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061686926983303188/wkcontrol.png",
      "https://media.discordapp.net/attachments/1044626284346605588/1061686928107388958/ramptroll.jpg?width=546&height=588",
      "https://media.discordapp.net/attachments/1152624944262414436/1262058591456591986/funnysunstrike.jpg?ex=66953728&is=6693e5a8&hm=9b9405d42110f26d07ddca91d277b9a9e66de4d3592db8b6334a0cae47ebecc3&=&format=webp&width=492&height=614",
    ];
    let embed = new EmbedBuilder()
      .setTitle("Random Wall Knight(WK) Deck")
      .setDescription(`Here is your Random Wall Knight Deck ${message.author}`)
      .setColor("Random")
      .setImage(deck[Math.floor(Math.random() * deck.length)]);

    message.channel.send({ embeds: [embed] });
  },
};

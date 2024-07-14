const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `randombf`,
  aliases: [
    `bfrandom`,
    `randombfdeck`,
    `bfrandomdeck`,
    `randomizeddeckbf`,
    `bfrandomizeddeck`,
    `brainfreezerandom`,
    `randombrainfreeze`,
    `rbf`,
  ],
  category: `Brain Freeze(BF)`,
  run: async (client, message, args) => {
    let [result] = await db.query(
      `SELECT * FROM bfdecks where deckinfo = 'image link:'`
    );
    const deck = [
      //BF TBOT DB
      `${result[0].aggropirates}`,
      `${result[0].garolithtech}`,
      `${result[0].himps}`,
      `${result[0].lockin}`,
      `${result[0].lockout}`,
      `${result[0].midpets}`,
      `${result[0].morality}`,
      `${result[0].otkswabbie}`,
      `${result[0].petmop}`,
      `${result[0].racism}`,
      `${result[0].raiserpackage}`,
      `${result[0].slavery}`,
      //BF WEB DB
      "https://media.discordapp.net/attachments/1044626284346605588/1061799296267210842/huntconjure.jpg?width=556&height=588",
      "https://media.discordapp.net/attachments/1157822351686258708/1157822351891775538/IMG_5481.png?ex=651e9ed7&is=651d4d57&hm=42f9fd46ba37f1dc929ffbc5&=&width=591&height=580",
      "https://media.discordapp.net/attachments/1044626284346605588/1061799296938299392/agentgoat.jpg?width=514&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061799336859672726/firegood.jpg?width=554&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061799337534955582/gravebot.jpg?width=542&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061799337828569168/lockoutnt.jpg?width=597&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061799338067623976/manicalkorv.jpg?width=542&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061799338298318988/manicalpirates.jpg?width=534&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061799386025316352/tempoimps.jpg?width=582&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061799386474086400/thicantihero.jpg?width=563&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061799386801262712/whale.jpg?width=493&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061799388915179641/swabbiethegoat.jpg?width=532&height=588",
    ];
    let embed = new EmbedBuilder()
      .setTitle("Random Brain Freeze(BF) Deck")
      .setDescription(
        `Here is your random Brain Freeze(BF) Deck ${message.author}`
      )
      .setColor("Random")
      .setImage(deck[Math.floor(Math.random() * deck.length)]);

    message.channel.send({ embeds: [embed] });
  },
};

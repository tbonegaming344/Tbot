const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `randomcc`,
  aliases: [
    `ccrandom`,
    `captaincombustiblerandom`,
    `randomcaptaincombustible`,
    `randomizedeckcc`,
    `ccrandomizedeck`,
  ],
  category: `Captain Combustible(CC)`,
  run: async (client, message, args) => {
    let [result] = await db.query(
      `SELECT * from ccdecks where deckinfo = 'image link:'`
    );
    const deck = [
      //CC TBOT DB
      `${result[0].bempo}`,
      `${result[0].combased}`,
      `${result[0].comboss}`,
      `${result[0].gatlingtempo}`,
      `${result[0].plantmop}`,
      `${result[0].yrm}`,
      //CC WEB DB
      "https://media.discordapp.net/attachments/1044626284346605588/1061770084235882608/bottedbowerhouse.png",
      "https://media.discordapp.net/attachments/1152624944262414436/1262050905134469180/leafyaggro.jpg?ex=66952fff&is=6693de7f&hm=e3b76038069bf51dc94c550308ba9507adb4bc0d6227d20a1be02c22a8a8a70b&=&format=webp&width=527&height=614",
      "https://media.discordapp.net/attachments/1152624944262414436/1262051673736740945/luckymoss.jpg?ex=669530b6&is=6693df36&hm=a47fd0a60637b80d374cb5c85788e48afb7812e0a9ba2aae22c9023c5ddff091&=&format=webp&width=553&height=614",
      "https://media.discordapp.net/attachments/1044626284346605588/1061770084932145192/cosmicopea.jpg?width=538&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061770085221543968/cptquickonions.jpg?width=534&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061770085494177792/dinocopy.jpg?width=509&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061770086505009172/berryloop.jpg?width=537&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061770086769242182/betterthancomboss.jpg?width=556&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061770124916424765/conseed.jpg?width=533&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061770125210046474/mossotk.jpg?width=541&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061770125574934578/otkpuff.jpg?width=549&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061770125826588743/otkseed.jpg?width=570&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061770150656884816/podfighterswarm.jpg?width=577&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061770150933712926/predictable.jpg?width=522&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061770151223103608/scuffedcomboss.jpg?width=481&height=588",
      "https://media.discordapp.net/attachments/1044626284346605588/1061770151504134145/weirdflexbutotk.jpg?width=543&height=588",
      "https://media.discordapp.net/attachments/1152624944262414436/1262051895942451290/kaleaggro.jpg?ex=669530eb&is=6693df6b&hm=7bd05bb834436606723442c6e55db326ceb9f3aabdf5fb3ef7296b21f5ea2bfa&=&format=webp&width=585&height=614",
      "https://media.discordapp.net/attachments/1152624944262414436/1262051895942451290/kaleaggro.jpg?ex=669530eb&is=6693df6b&hm=7bd05bb834436606723442c6e55db326ceb9f3aabdf5fb3ef7296b21f5ea2bfa&=&format=webp&width=585&height=614",
    ];
    let embed = new EmbedBuilder()
      .setTitle("Random Deck for Captain Combustible(CC)")
      .setDescription(
        `Here is your random Captain Combustible(CC) Deck ${message.author}`
      )
      .setColor("Random")
      .setImage(deck[Math.floor(Math.random() * deck.length)]);

    message.channel.send({ embeds: [embed] });
  },
};

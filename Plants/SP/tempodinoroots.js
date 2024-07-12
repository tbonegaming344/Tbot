const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `tempodinoroots`,
  aliases: [
    `tccdinoroots`,
    `dinoroots`,
    `tccdr`,
    `tcchdinoroots`,
    `tcchdr`,
    `tccroots`,
    `dinotemporoots`,
  ],
  category: `Spudow(SP)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT tempodinoroots from spdecks`);
    let embed = new EmbedBuilder()
      .setTitle("TCC Tempo Dino Roots")
      .setDescription(`${result[2].tempodinoroots}`)
      .setFooter({ text: `${result[1].tempodinoroots}` })
      .addFields({ name: "Deck Cost", value: `${result[0].tempodinoroots}` })
      .setColor("Random")
      .setImage(`${result[3].tempodinoroots}`);
    message.channel.send({ embeds: [embed] });
  },
};

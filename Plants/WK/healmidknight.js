const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `healmidwk`,
  aliases: [
    `hmk`,
    `wkmidheal`,
    `midhealwk`,
    `healmidknight`,
    `healwk`,
    `hmknight`,
  ],
  category: `Wall Knight(WK)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT healmidwk from wkdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Heal Midknight")
      .setDescription(`${result[2].healmidwk}`)
      .setFooter({ text: `${result[1].healmidwk}` })
      .addFields({ name: "Deck Cost", value: `${result[0].healmidwk}` })
      .setColor("Random")
      .setImage(`${result[3].healmidwk}`);
    message.channel.send({ embeds: [embed] });
  },
};

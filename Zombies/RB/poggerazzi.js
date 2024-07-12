const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `poggerrazzi`,
  aliases: [
    `poggerrazzirb`,
    `pogrb`,
    `rbpog`,
    `poggers`,
    `poggerazzi`,
    `poggerrazi`,
    `pogger`,
  ],
  category: `Rustbolt(RB)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`select poggerrazzi from rbdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Poggerrazzi")
      .setDescription(`${result[2].poggerrazzi}`)
      .setFooter({ text: `${result[1].poggerrazzi}` })
      .addFields({ name: "Deck Cost", value: `${result[0].poggerrazzi}` })
      .setColor("Random")
      .setImage(`${result[3].poggerrazzi}`);
    message.channel.send({ embeds: [embed] });
  },
};

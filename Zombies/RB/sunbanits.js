const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `sunbandits`,
  aliases: [`sushibandits`, `sunb`],
  category: `Rustbolt(RB)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`select sunbandits from rbdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Sun Bandits")
      .setDescription(`${result[2].sunbandits}`)
      .setFooter({ text: `${result[1].sunbandits}` })
      .addFields({ name: "Deck Cost", value: `${result[0].sunbandits}` })
      .setColor("Random")
      .setImage(`${result[3].sunbandits}`);
    message.channel.send({ embeds: [embed] });
  },
};

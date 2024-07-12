const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `oldmidrose`,
  aliases: [`oldmr`, `midroseold`],
  category: `Rose(RO)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT oldmidrose from rodecks`);
    let embed = new EmbedBuilder()
      .setTitle("Old Midrose")
      .setDescription(`${result[2].oldmidrose}`)
      .setFooter({ text: `${result[1].oldmidrose}` })
      .addFields({ name: "Deck Cost", value: `${result[0].oldmidrose}` })
      .setColor("Random")
      .setImage(`${result[3].oldmidrose}`);
    message.channel.send({ embeds: [embed] });
  },
};

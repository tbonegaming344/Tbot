const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `barrelpirates`,
  aliases: [`bp`, `ifbp`, `pbif`, `2.1`, `bpirates`, `barrelpirate`],
  category: `Impfinity(IF)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT barrelpirates FROM ifdecks`);
    let embed = new EmbedBuilder()
      .setTitle("2.1")
      .setDescription(`${result[2].barrelpirates}`)
      .setFooter({ text: `${result[1].barrelpirates}` })
      .addFields({ name: "Deck Cost", value: `${result[0].barrelpirates}` })
      .setColor("Random")
      .setImage(`${result[3].barrelpirates}`);
    message.channel.send({ embeds: [embed] });
  },
};

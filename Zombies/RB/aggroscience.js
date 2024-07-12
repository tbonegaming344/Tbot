const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `aggroscience`,
  aliases: [`sciaggro`, `scibolt`, `scienceaggro`, `sciggro`, `aggrosci`],
  category: `Rustbolt(RB)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`select aggroscience from rbdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Aggro Science")
      .setDescription(`${result[2].aggroscience}`)
      .setFooter({ text: `${result[1].aggroscience}` })
      .addFields({ name: "Deck Cost", value: `${result[0].aggroscience}` })
      .setColor("Random")
      .setImage(`${result[3].aggroscience}`);
    message.channel.send({ embeds: [embed] });
  },
};

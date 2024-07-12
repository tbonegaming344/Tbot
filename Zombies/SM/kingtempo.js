const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `kingtempo`,
  aliases: [`tempoking`, `ktemp`],
  category: `Smash(SM)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT kingtempo FROM smdecks`);
    let embed = new EmbedBuilder()
      .setTitle("King Tempo")
      .setDescription(`${result[2].kingtempo}`)
      .setFooter({ text: `${result[1].kingtempo}` })
      .addFields({ name: "Deck Cost", value: `${result[0].kingtempo}` })
      .setColor("Random")
      .setImage(`${result[3].kingtempo}`);
    message.channel.send({ embeds: [embed] });
  },
};

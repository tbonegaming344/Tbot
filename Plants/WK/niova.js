const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `nivola`,
  aliases: [`healaggro`, `unamuno`, `niv`],
  category: `Wall Knight(WK)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT nivola from wkdecks`);
    let niv = new EmbedBuilder()
      .setTitle("Nivola(Unamuno)")
      .setDescription(`${result[2].nivola}`)
      .setColor("Random")
      .setFooter({ text: `${result[1].nivola}` })
      .setImage(`${result[3].nivola}`)
      .addFields({ name: "Deck Cost", value: `${result[0].nivola}` });
    message.channel.send({ embeds: [niv] });
  },
};

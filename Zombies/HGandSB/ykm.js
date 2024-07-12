const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `ykm`,
  aliases: [`youngkenmartin`, `ykmhg`, `hgykm`, `ykmartin`],
  category: `Huge-Gigantacus/SuperBrainz`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT ykm FROM hgdecks`);
    let embed = new EmbedBuilder()
      .setTitle("YKM")
      .setDescription(`${result[2].ykm}`)
      .setFooter({ text: `${result[1].ykm}` })
      .addFields({ name: "Deck Cost", value: `${result[0].ykm}` })
      .setColor("Random")
      .setImage(`${result[3].ykm}`);
    message.channel.send({ embeds: [embed] });
  },
};

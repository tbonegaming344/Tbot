const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `gravestache`,
  aliases: [`mustachegraves`, `stachegraves`, `mustgraves`, `gravestaches`],
  category: `Huge-Gigantacus/SuperBrainz`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT gravestache FROM hgdecks`);
    let gs = new EmbedBuilder()
      .setTitle("Gravestache")
      .setDescription(`${result[2].gravestache}`)
      .addFields({ name: "Deck Cost", value: `${result[0].gravestache}` })
      .setFooter({ text: `${result[1].gravestache}` })
      .setColor("Random")
      .setImage(`${result[3].gravestache}`);
    message.channel.send({ embeds: [gs] });
  },
};

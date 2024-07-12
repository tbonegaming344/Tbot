const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `ringzilla`,
  aliases: [`czrings`, `sushizilla`, `rzila`],
  category: `Chompzilla(CZ)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT ringzilla from czdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Ringzilla")
      .setDescription(`${result[2].ringzilla}`)
      .setFooter({ text: `${result[1].ringzilla}` })
      .addFields({ name: "Deck Cost", value: `${result[0].ringzilla}` })
      .setColor("Random")
      .setImage(`${result[3].ringzilla}`);
    message.channel.send({ embeds: [embed] });
  },
};

const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `amoguzilla`,
  aliases: [`amonguscz`, `az`, `amonguszilla`],
  category: `Chompzilla(CZ)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT amonguszilla from czdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Amoguzilla")
      .setDescription(`${result[2].amonguszilla}`)
      .setFooter({ text: `${result[1].amonguszilla}` })
      .addFields({ name: "Deck Cost", value: `${result[0].amonguszilla}` })
      .setColor("Random")
      .setImage(`${result[3].amonguszilla}`);
    message.channel.send({ embeds: [embed] });
  },
};

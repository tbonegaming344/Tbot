const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `healmidzilla`,
  aliases: [`hmz`, `healmidcz`, `czhealmid`, `hmzilla`],
  category: `Chompzilla(CZ)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT healmidzilla from czdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Heal MidZilla")
      .setDescription(`${result[2].healmidzilla}`)
      .setFooter({ text: `${result[1].healmidzilla}` })
      .addFields({ name: "Deck Cost", value: `${result[0].healmidzilla}` })
      .setColor("Random")
      .setImage(`${result[3].healmidzilla}`);
    message.channel.send({ embeds: [embed] });
  },
};

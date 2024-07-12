const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `schoolyard`,
  aliases: [`ntschoolyard`, `sy`, `syard`],
  category: `Neptuna(NT)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`select schoolyard from ntdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Schoolyard")
      .setDescription(`${result[2].schoolyard}`)
      .setFooter({ text: `${result[1].schoolyard}` })
      .addFields({ name: "Deck Cost", value: `${result[0].schoolyard}` })
      .setColor("Random")
      .setImage(`${result[3].schoolyard}`);
    message.channel.send({ embeds: [embed] });
  },
};

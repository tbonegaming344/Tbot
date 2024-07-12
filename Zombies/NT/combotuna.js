const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `combotuna`,
  aliases: [`combont`, `cot`],
  category: `Neptuna(NT)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`select combotuna from ntdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Combotuna")
      .setDescription(`${result[2].combotuna}`)
      .setFooter({ text: `${result[1].combotuna}` })
      .addFields({ name: "Deck Cost", value: `${result[0].combotuna}` })
      .setColor("Random")
      .setImage(`${result[3].combotuna}`);
    message.channel.send({ embeds: [embed] });
  },
};

const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `cycleknight`,
  aliases: [`healknight`, `cyclewk`, `wkcycle`, `ck`, `cknight`],
  category: `Wall Knight(WK)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT cycleknight from wkdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Cycle Knight")
      .setDescription(`${result[2].cycleknight}`)
      .setFooter({ text: `${result[1].cycleknight}` })
      .addFields({ name: "Deck Cost", value: `${result[0].cycleknight}` })
      .setColor("Random")
      .setImage(`${result[3].cycleknight}`);
    message.channel.send({ embeds: [embed] });
  },
};

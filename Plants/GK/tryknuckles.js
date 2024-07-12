const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `tryknuckles`,
  aliases: [`tryhardknuckles`, `tk`],
  category: `Grass Knuckles(GK)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT tryknuckles FROM gkdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Try Knuckles")
      .setDescription(`${result[2].tryknuckles}`)
      .setFooter({ text: `${result[1].tryknuckles}` })
      .addFields({ name: "Deck Cost", value: `${result[0].tryknuckles}` })
      .setColor("Random")
      .setImage(`${result[3].tryknuckles}`);
    message.channel.send({ embeds: [embed] });
  },
};

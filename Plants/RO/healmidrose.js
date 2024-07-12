const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `healmidrose`,
  aliases: [`hmr`, `roheal`, `midhealrose`, `healmidro`, `hmrose`],
  category: `Rose(RO)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT hmr from rodecks`);
    let embed = new EmbedBuilder()
      .setTitle("Heal Midrose")
      .setDescription(`${result[2].hmr}`)
      .setFooter({ text: `${result[1].hmr}` })
      .addFields({ name: "Deck Cost", value: `${result[0].hmr}` })
      .setColor("Random")
      .setImage(`${result[3].hmr}`);
    message.channel.send({ embeds: [embed] });
  },
};

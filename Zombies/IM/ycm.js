const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `ycm`,
  aliases: [`youngcatmartin`],
  category: `Immorticia(IM)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT ycm FROM imdecks `);
    let embed = new EmbedBuilder()
      .setTitle("Young Cat Martin")
      .setDescription(`${result[2].ycm}`)
      .setFooter({ text: `${result[1].ycm}` })
      .addFields({ name: "Deck Cost", value: `${result[0].ycm}` })
      .setColor("Random")
      .setImage(`${result[3].ycm}`);
    message.channel.send({ embeds: [embed] });
  },
};

const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `elusives`,
  aliases: [
    `ctelusives`,
    `elusivesct`,
    `elu`,
    `elusive`,
    `elusport`,
    `elusports`,
  ],
  category: `Beta-Carrotina/Citron`,
  run: async (client, message, args) => {
    let [result] = await db.query("SELECT elusives FROM ctdecks");
    let embed = new EmbedBuilder()
      .setTitle("Elusives")
      .setDescription(`${result[2].elusives}`)
      .setFooter({ text: `${result[1].elusives}` })
      .addFields({ name: "Deck Cost", value: `${result[0].elusives}` })
      .setColor("Random")
      .setImage(`${result[3].elusives}`);
    message.channel.send({ embeds: [embed] });
  },
};

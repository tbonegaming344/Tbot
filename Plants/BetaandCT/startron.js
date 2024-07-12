const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `startron`,
  aliases: [`ctstartron`],
  category: `Beta-Carrotina/Citron`,
  run: async (client, message, args) => {
    let [result] = await db.query("SELECT startron FROM ctdecks");
    let embed = new EmbedBuilder()
      .setTitle("Startron")
      .setDescription(`${result[2].startron}`)
      .setFooter({ text: `${result[1].startron}` })
      .addFields({ name: "Deck Cost", value: `${result[0].startron}` })
      .setImage(`${result[3].startron}`)
      .setColor("Random");
    message.channel.send({ embeds: [embed] });
  },
};

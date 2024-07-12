const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `savagetempo`,
  aliases: [`temposavage`],
  category: `Grass Knuckles(GK)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT savagetempo FROM gkdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Savage Tempo")
      .setDescription(`${result[2].savagetempo}`)
      .setFooter({ text: `${result[1].savagetempo}` })
      .addFields({ name: "Deck Cost", value: `${result[0].savagetempo}` })
      .setColor("Random")
      .setImage(`${result[3].savagetempo}`);
    message.channel.send({ embeds: [embed] });
  },
};

const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `otktrickster`,
  aliases: [`otkt`, `otkster`],
  category: `Immorticia(IM)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT otktrickster FROM imdecks`);
    let embed = new EmbedBuilder()
      .setTitle("OTK Trickster")
      .setDescription(`${result[2].otktrickster}`)
      .setFooter({ text: `${result[1].otktrickster}` })
      .addFields({ name: "Deck Cost", value: `${result[0].otktrickster}` })
      .setColor("Random")
      .setImage(`${result[3].otktrickster}`);
    message.channel.send({ embeds: [embed] });
  },
};

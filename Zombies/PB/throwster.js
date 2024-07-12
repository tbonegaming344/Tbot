const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `throwster`,
  aliases: [`gtitrickster`, `throwtrickster`],
  category: `Professor Brainstorm(PB)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT throwster FROM pbdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Throwster")
      .setDescription(`${result[2].throwster}`)
      .setFooter({ text: `${result[1].throwster}` })
      .addFields({ name: "Deck Cost", value: `${result[0].throwster}` })
      .setColor("Random")
      .setImage(`${result[3].throwster}`);
    message.channel.send({ embeds: [embed] });
  },
};

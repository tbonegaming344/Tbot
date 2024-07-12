const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `pureburn`,
  aliases: [`pbburn`, `pburn`],
  category: `Professor Brainstorm(PB)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT pureburn FROM pbdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Pure Burn")
      .setDescription(`${result[2].pureburn}`)
      .setFooter({ text: `${result[1].pureburn}` })
      .addFields({ name: "Deck Cost", value: `${result[0].pureburn}` })
      .setColor("Random")
      .setImage(`${result[3].pureburn}`);
    message.channel.send({ embeds: [embed] });
  },
};

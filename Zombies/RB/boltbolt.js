const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `boltbolt`,
  aliases: [`boltboltrb`, `rbboltbolt`, `bolting`, `bbolt`],
  category: `Rustbolt(RB)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`select boltbolt from rbdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Bolt Bolt")
      .setDescription(`${result[2].boltbolt}`)
      .setFooter({ text: `${result[1].boltbolt}` })
      .addFields({ name: "Deck Cost", value: `${result[0].boltbolt}` })
      .setColor("Random")
      .setImage(`${result[3].boltbolt}`);
    message.channel.send({ embeds: [embed] });
  },
};

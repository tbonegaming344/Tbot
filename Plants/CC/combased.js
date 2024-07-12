const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `combased`,
  aliases: [`combobased`, `optimizedcomboss`],
  category: `Captain Combustible(CC)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT combased from ccdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Combased")
      .setDescription(`${result[2].combased}`)
      .setFooter({ text: `${result[1].combased}` })
      .addFields({ name: "Deck Cost", value: `${result[0].combased}` })
      .setColor("Random")
      .setImage(`${result[3].combased}`);
    message.channel.send({ embeds: [embed] });
  },
};

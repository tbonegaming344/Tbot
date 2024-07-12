const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `jbeans`,
  aliases: [`beansj`, `lilybeans`, `lilyabeans`],
  category: `Green Shadow(GS)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT jbeans from gsdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Jbeans")
      .setDescription(`${result[2].jbeans}`)
      .setFooter({ text: `${result[1].jbeans}` })
      .addFields({ name: "Deck Cost", value: `${result[0].jbeans}` })
      .setColor("Random")
      .setImage(`${result[3].jbeans}`);
    message.channel.send({ embeds: [embed] });
  },
};

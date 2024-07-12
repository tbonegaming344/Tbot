const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `glag`,
  aliases: [`ntglag`, `glagnt`, `swarmgraves`, `gravesswarm`],
  category: `Neptuna(NT)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`select glag from ntdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Glag")
      .setDescription(`${result[2].glag}`)
      .setFooter({ text: `${result[1].glag}` })
      .addFields({ name: "Deck Cost", value: `${result[0].glag}` })
      .setColor("Random")
      .setImage(`${result[3].glag}`);
    message.channel.send({ embeds: [embed] });
  },
};

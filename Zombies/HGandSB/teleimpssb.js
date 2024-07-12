const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `telimpssb`,
  aliases: [
    `sbteleimps`,
    `tisb`,
    `teleimpssb`,
    `sbtelimps`,
    `vimps`,
    `vikingimps`,
    `vikingtelimps`,
    `telimpsb`,
  ],
  category: `Huge-Gigantacus/SuperBrainz`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT telimpssb FROM sbdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Teleimps")
      .setDescription(`${result[2].telimpssb}`)
      .setFooter({ text: `	${result[1].telimpssb}` })
      .addFields({ name: "Deck Cost", value: `${result[0].telimpssb}` })
      .setColor("Random")
      .setImage(`${result[3].telimpssb}`);
    message.channel.send({ embeds: [embed] });
  },
};

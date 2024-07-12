const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `telimps`,
  aliases: [`teleimps`, `teleportimps`, `ti`, `hgtelimps`, `telimpshg`, `hgteleimps`, `teleimpshg`, `telimp`],
  category: `Huge-Gigantacus/SuperBrainz`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT telimps FROM hgdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Telimps")
      .setDescription(`${result[2].telimps}`)
      .setFooter({ text: `${result[1].telimps}` })
      .addFields({ name: "Deck Cost", value: `${result[0].telimps}` })
      .setColor("Random")
      .setImage(`${result[3].telimps}`);
    message.channel.send({ embeds: [embed] });
  },
};

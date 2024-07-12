const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `missioncontrol`,
  aliases: [`controlmission`, `mic`],
  category: `Electric Boogaloo(EB)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT missioncontrol FROM ebdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Mission Control")
      .setDescription(`${result[2].missioncontrol}`)
      .setFooter({ text: `${result[1].missioncontrol}` })
      .addFields({ name: "Deck Cost", value: `${result[0].missioncontrol}` })
      .setColor("Random")
      .setImage(`${result[3].missioncontrol}`);
    message.channel.send({ embeds: [embed] });
  },
};

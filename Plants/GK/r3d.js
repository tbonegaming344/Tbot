const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `r3d`,
  alaises: [`gkr3d`],
  category: `Grass Knuckles(GK)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT r3d from gkdecks`);
    let embed = new EmbedBuilder()
      .setTitle("R3d")
      .setDescription(`${result[2].r3d}`)
      .setFooter({ text: `${result[1].r3d}` })
      .addFields({ name: "Deck Cost", value: `${result[0].r3d}` })
      .setColor("Random")
      .setImage(`${result[3].r3d}`);
    message.channel.send({ embeds: [embed] });
  },
};

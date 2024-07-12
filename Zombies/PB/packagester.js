const { EmbedBuilder } = require("discord.js");
let db = require("../../index.js");
module.exports = {
  name: `packagester`,
  aliases: [`aggrotrickster`, `tricksteraggro`, `aster`, `packster`],
  category: `Professor Brainstorm(PB)`,
  run: async (client, message, args) => {
    let [result] = await db.query(`SELECT packagester FROM pbdecks`);
    let embed = new EmbedBuilder()
      .setTitle("Packagester")
      .setDescription(`${result[2].packagester}`)
      .setFooter({ text: `${result[1].packagester}` })
      .addFields({ name: "Deck Cost", value: `${result[0].packagester}` })
      .setColor("Random")
      .setImage(`${result[3].packagester}`);
    message.channel.send({ embeds: [embed] });
  },
};
